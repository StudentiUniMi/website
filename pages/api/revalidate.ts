import { timingSafeEqual } from "crypto"
import type { NextApiRequest, NextApiResponse } from "next"
import { getSlugDegrees } from "@/lib/api/degrees"

/** Static pages included when the endpoint is asked to revalidate every page. */
const staticPaths = ["/", "/about", "/rules", "/services", "/404"]

/**
 * Compares a supplied secret with the configured secret without a
 * content-dependent comparison time.
 *
 * @param providedSecret - Secret supplied in the request query.
 * @param expectedSecret - Secret configured in `REVALIDATION_SECRET`.
 * @returns `true` when both non-empty secrets match; otherwise, `false`.
 */
const isValidSecret = (providedSecret: string | undefined, expectedSecret: string | undefined): boolean => {
  if (!providedSecret || !expectedSecret) return false

  const provided = Buffer.from(providedSecret)
  const expected = Buffer.from(expectedSecret)

  return provided.length === expected.length && timingSafeEqual(provided, expected)
}

/**
 * Revalidates cached static pages after validating the configured secret.
 *
 * With no `path` query parameter, or with `path=all`, this revalidates the
 * static page paths and every degree path returned by the API. A specific
 * `path` may target one supported static page or one degree slug.
 *
 * @param req - Incoming API request. Supports `GET` with `secret` and optional `path` query parameters.
 * @param res - API response used to report the result and trigger Next.js revalidation.
 * @returns A JSON response with the revalidation result or an appropriate HTTP error.
 *
 * @example
 * `GET /api/revalidate?secret=<secret>` revalidates all supported pages.
 *
 * @example
 * `GET /api/revalidate?secret=<secret>&path=%2Fabout` revalidates only `/about`.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Cache-Control", "no-store, max-age=0")

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET")
    return res.status(405).json({ message: "Method not allowed" })
  }

  if (!process.env.REVALIDATION_SECRET) {
    return res.status(500).json({ message: "Revalidation is not configured" })
  }

  const secret = typeof req.query.secret === "string" ? req.query.secret : undefined
  if (!isValidSecret(secret, process.env.REVALIDATION_SECRET)) {
    return res.status(401).json({ message: "Invalid secret" })
  }

  const requestedPath = req.query.path
  if (Array.isArray(requestedPath)) {
    return res.status(400).json({ message: "Provide a single path" })
  }

  try {
    let paths: string[]

    if (!requestedPath || requestedPath === "all") {
      const slugsResponse = await getSlugDegrees()
      if (slugsResponse.error || !slugsResponse.value) {
        return res.status(502).json({ message: "Unable to retrieve degree paths" })
      }

      paths = [...staticPaths, ...slugsResponse.value.map((slug) => `/degrees/${slug}`)]
    } else {
      const path = requestedPath.replace(/\/$/, "") || "/"
      const isStaticPath = staticPaths.includes(path)
      const isDegreePath = /^\/degrees\/[a-zA-Z0-9_-]+$/.test(path)

      if (!isStaticPath && !isDegreePath) {
        return res.status(400).json({ message: "Unsupported path" })
      }

      paths = [path]
    }

    const uniquePaths = [...new Set(paths)]
    for (const path of uniquePaths) {
      await res.revalidate(path)
    }

    return res.status(200).json({ revalidated: true, count: uniquePaths.length })
  } catch (error) {
    console.error("[revalidate] Cache invalidation failed", error)
    return res.status(500).json({ message: "Cache invalidation failed" })
  }
}
