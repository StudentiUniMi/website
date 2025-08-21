import LocalizationService from "../../services/LocalizationService"
import JsxParser from "react-jsx-parser"
import Chip from "../Atoms/Chip"
import { Container } from "react-bootstrap"
import { Link, Text, useTheme, mergeStyleSets } from "@fluentui/react"
import { bold, semibold } from "../../services/Fonts"
import { getFaqs } from "../../services/Requests"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"

interface FaqPage {
  "@context": string
  "@type": "FAQPage"
  mainEntity: {
    "@type": "Question"
    name: string
    acceptedAnswer: {
      "@type": "Answer"
      text: string
    }
  }[]
}

const Faqs = () => {
  var theme = useTheme()
  const locale = LocalizationService.strings()
  var language: string | undefined = LocalizationService.getLanguage()
  const faqs = getFaqs()

  const accordionItem = mergeStyleSets({
    root: {
      selectors: {
        "&:hover": {
          backgroundColor: theme.palette.neutralLighter,
        },
      },
    },
  })

  const faqPageData: FaqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question[language!],
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer[language!],
      },
    })),
  }

  return (
    <div className="pb-5 pt-5">
      <Container>
        <div className="mb-1">
          <Text variant="medium" styles={semibold}>
            <Chip label={"FAQ"} size="medium" bgColor={theme.palette.themePrimary} textColor={theme.palette.white} />
          </Text>
        </div>

        <div className="mb-2">
          <Text variant="xLarge" styles={bold}>
            {locale?.homepage.faqsSection.header}
          </Text>
        </div>

        <div className="mb-4">
          <Text variant="medium" style={{ gap: 4 }}>
            <JsxParser bindings={{ theme: theme }} components={{ Text, Link }} jsx={locale?.homepage.faqsSection.description} />
          </Text>
        </div>

        <Accordion
          className="mb-2"
          style={{ backgroundColor: theme.palette.white, color: theme.palette.black, boxShadow: theme.effects.elevation8 }}
          allowMultipleExpanded
          allowZeroExpanded
        >
          {faqs.map((x, i) => {
            return (
              <AccordionItem key={i}>
                <AccordionItemHeading className={accordionItem.root}>
                  <AccordionItemButton>
                    <Text variant="medium" style={{ color: theme.palette.themePrimary }} styles={semibold}>
                      {x.question[language!]}
                    </Text>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Text variant="medium">
                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={x.answer[language!]} />
                  </Text>
                </AccordionItemPanel>
              </AccordionItem>
            )
          })}
        </Accordion>

        {/* Structured data */}
        <script type="application/ld+json" id="structured-faqs">
          {JSON.stringify(faqPageData)}
        </script>
      </Container>
    </div>
  )
}

export default Faqs
