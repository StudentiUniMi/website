import { DefaultSeoProps } from "next-seo"

const config: DefaultSeoProps = {
  titleTemplate: "%s | Network Studenti UniMi",
  defaultTitle: "Network Studenti UniMi",
  description:
    "Oltre 600 gruppi Telegram dedicati ai corsi di laurea UniMi, servizi online e strumenti collaborativi creati da studenti per studenti.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://studentiunimi.it/",
    siteName: "Studenti UniMi",
    images: [
      {
        url: "https://studentiunimi.it/og/default.png",
        width: 1200,
        height: 630,
        alt: "Network Studenti UniMi",
      },
    ],
  },
  twitter: {
    handle: "@StudentiUniMi",
    site: "@StudentiUniMi",
    cardType: "summary_large_image",
  },
}

export default config
