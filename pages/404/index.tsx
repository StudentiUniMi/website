import MainContainer from "@/components/main-container"
import Seo from "@/components/seo"
import NextLink from "next/link"
import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { GetStaticProps } from "next"
import { loadMessages } from "@/lib/intl"

/**
 * @name NotFoundPage
 *
 * @description
 * Displays a message indicating that the requested page was not found,
 * along with a button to navigate back to the homepage.
 *
 * @returns The rendered 404 page.
 *
 * @author Giuseppe Del Campo
 */
const NotFoundPage = () => {
  const t = useTranslations("notFound")

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
  const messages = await loadMessages(locale as "it" | "en", ["common", "seo", "notFound"])

  return {
    props: {
      locale,
      messages,
    },
  }
}

export default NotFoundPage
