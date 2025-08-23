import { NextSeo } from "next-seo"
import { useTranslations } from "next-intl"

interface SeoProps {
  page: "homepage" | "about" | "services" | "rules" | "search" | "degree" | "404"
  url?: string
  image?: string
  variables?: Record<string, string>
}

const Seo = ({ page, url, image, variables }: SeoProps) => {
  const t = useTranslations("seo")

  const baseUrl = "https://studentiunimi.it"

  const pathByPage: Record<SeoProps["page"], string> = {
    homepage: "/",
    about: "/about",
    services: "/services",
    rules: "/rules",
    search: variables?.query ? `/search?q=${encodeURIComponent(variables.query)}` : "/search",
    degree: variables?.slug ? `/degrees/${variables.slug}` : "/degrees",
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
