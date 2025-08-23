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
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

interface ServicesPageProps {
  priorityServices: Array<Service>
  guides: Array<Service>
  redirects: Array<Service>
  tools: Array<Service>
}

const ServicesPage = ({ priorityServices, redirects, tools }: ServicesPageProps) => {
  const { locale } = useCustomRouter()

  return (
    <MainContainer>
      <Box pt={12}>
        <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={12} textAlign="center">
          Scopri tutti i servizi che mettiamo a disposizione
        </Heading>

        {priorityServices && (
          <ItemList
            label="I nostri servizi più importanti"
            customLabelWidth={{ maxWidth: 260 }}
            items={priorityServices}
            getItemName={(service) => service.name[locale]}
            renderItem={(service) => <ServiceCard service={service} />}
          />
        )}

        {redirects && (
          <ItemList
            label="I nostri link rapidi"
            customLabelWidth={{ minWidth: 170 }}
            items={redirects}
            getItemName={(redirect) => redirect.name[locale]}
            renderItem={(redirect) => <RedirectCard item={redirect} />}
          />
        )}

        {tools && (
          <ItemList
            label="I nostri strumenti"
            customLabelWidth={{ maxWidth: 170 }}
            items={tools}
            getItemName={(tool) => tool.name[locale]}
            renderItem={(tool) => <RedirectCard item={tool} />}
          />
        )}
      </Box>
    </MainContainer>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const guides = getServicesByCategory(services, "guide")
  const redirects = getServicesByCategory(services, "redirect")
  const tools = getServicesByCategory(services, "tool")

  const priorityServices = [tools.find((s) => s.id === "university-map"), tools.find((s) => s.id === "admission-rankings"), ...guides]

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "it", ["common"])),
      priorityServices,
      redirects,
      tools: tools.filter((t) => t.id !== "university-map" && t.id !== "admission-rankings"),
    },
  }
}

export default ServicesPage
