import { DefaultSeoProps } from "next-seo"

const config: DefaultSeoProps = {
  titleTemplate: "%s | Studenti Unimi",
  defaultTitle: "Studenti Unimi",
  description: "Resources and services for students of the University of Milan",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://studentiunimi.it/",
    siteName: "Studenti Unimi",
  },
}

export default config
