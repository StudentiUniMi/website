import { NextSeo } from "next-seo"
import { useTranslations } from "next-intl"

/**
 * Props for the {@link Seo} component.
 */
interface SeoProps {
  /** The page identifier for which SEO tags are generated. */
  page: "homepage" | "about" | "services" | "rules" | "search" | "degrees" | "404"
  /** Optional full URL to override the default canonical URL. */
  url?: string
  /** Optional image URL for Open Graph / social sharing. */
  image?: string
  /** Optional variables used for localization in titles/descriptions (e.g., { query, slug }). */
  variables?: Record<string, string>
}

/**
 * @name Seo
 *
 * @description
 * Sets up SEO meta tags, Open Graph data, and canonical URL
 * for a given page using localized translations.
 *
 * Supports pages: `homepage`, `about`, `services`, `rules`, `search`, `degrees`, `404`.
 *
 * @param props - {@link SeoProps}
 * @returns A configured {@link NextSeo} component for the specified page.
 *
 * @example
 * ```tsx
 * <Seo page="degrees" variables={{ slug: "triennale-informatica" }} />
 * ```
 *
 * @author Giuseppe Del Campo
 */
const Seo = ({ page, url, image, variables }: SeoProps) => {
  const t = useTranslations("seo")

  const baseUrl = "https://studentiunimi.it"

  const pathByPage: Record<SeoProps["page"], string> = {
    homepage: "/",
    about: "/about",
    services: "/services",
    rules: "/rules",
    search: variables?.query ? `/search?q=${encodeURIComponent(variables.query)}` : "/search",
    degrees: variables?.slug ? `/degrees/${variables.slug}` : "/degrees",
    "404": "/404",
  }

  const currentUrl = url ?? `${baseUrl}${pathByPage[page]}`

  const title = t(`${page}.title`, variables)
  const description = t(`${page}.description`, variables)

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={currentUrl}
      openGraph={{
        url: currentUrl,
        title,
        description,
        images: [
          {
            url: image ?? `/images/seo/${page}.png`,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        siteName: "Studenti UniMi",
      }}
    />
  )
}

export default Seo
