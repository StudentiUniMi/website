import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from "next"
import MainContainer from "@/components/main-container"
import Seo from "@/components/seo"
import NextLink from "next/link"

const NotFoundPage = () => {
  const { t } = useTranslation("notFound")

  return (
    <>
      <Seo page="404" />

      <MainContainer>
        <Box textAlign="center" py={24}>
          <Heading as="h1" size={{ base: "3xl", md: "4xl" }} mb={6}>
            {t("title")}
          </Heading>
          <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.300" }} mb={8}>
            {t("description")}
          </Text>
          <Button as={NextLink} href="/" colorScheme="blue" size="lg">
            {t("backHome")}
          </Button>
        </Box>
      </MainContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const actualLocale = (locale as "it" | "en") ?? "it"

  return {
    props: {
      ...(await serverSideTranslations(actualLocale ?? "it", ["seo", "common", "notFound"])),
    },
  }
}

export default NotFoundPage
