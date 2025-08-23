import ItemList from "@/components/item-list"
import MainContainer from "@/components/main-container"
import ServiceCard from "@/components/service/card"
import RedirectCard from "@/components/service/redirect"
import { services } from "@/data/services"
import { useCustomRouter } from "@/hooks/router"
import { Service } from "@/types"
import { getServicesByCategory } from "@/utils/services"
import { Box, Heading } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { useTranslations } from "next-intl"
import Seo from "@/components/seo"
import { loadMessages } from "@/lib/intl"

interface ServicesPageProps {
  priorityServices: Array<Service>
  redirects: Array<Service>
  tools: Array<Service>
}

const ServicesPage = ({ priorityServices, redirects, tools }: ServicesPageProps) => {
  const { locale } = useCustomRouter()
  const t = useTranslations("services")

  return (
    <>
      <Seo page="services" />

      <MainContainer>
        <Box pt={12}>
          <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={12} textAlign="center">
            {t("pageTitle")}
          </Heading>

          {priorityServices && (
            <ItemList
              label={t("priorityServices")}
              customLabelWidth={{ maxWidth: 260 }}
              items={priorityServices}
              getItemName={(service) => service.name[locale]}
              renderItem={(service) => <ServiceCard service={service} />}
            />
          )}

          {redirects && (
            <ItemList
              label={t("redirects")}
              customLabelWidth={{ minWidth: 170 }}
              items={redirects}
              getItemName={(redirect) => redirect.name[locale]}
              renderItem={(redirect) => <RedirectCard item={redirect} />}
            />
          )}

          {tools && (
            <ItemList
              label={t("tools")}
              customLabelWidth={{ maxWidth: 170 }}
              items={tools}
              getItemName={(tool) => tool.name[locale]}
              renderItem={(tool) => <RedirectCard item={tool} />}
            />
          )}
        </Box>
      </MainContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = await loadMessages(locale as "it" | "en", ["common", "seo", "services"])
  const guides = getServicesByCategory(services, "guide")
  const redirects = getServicesByCategory(services, "redirect")
  const tools = getServicesByCategory(services, "tool")

  const priorityServices = [tools.find((s) => s.id === "university-map"), tools.find((s) => s.id === "admission-rankings"), ...guides]

  return {
    props: {
      messages,
      priorityServices,
      redirects,
      tools: tools.filter((t) => t.id !== "university-map" && t.id !== "admission-rankings"),
    },
  }
}

export default ServicesPage
