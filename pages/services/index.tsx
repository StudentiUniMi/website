import MainContainer from "@/components/main-container"
import { Box, Heading } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const ServicesPage = () => {
  return (
    <MainContainer>
      <Box pt={12}>
        <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={12} textAlign="center">
          Scopri tutti i servizi che mettiamo a disposizione
        </Heading>
      </Box>
    </MainContainer>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "it", ["common"])),
    },
  }
}

export default ServicesPage
