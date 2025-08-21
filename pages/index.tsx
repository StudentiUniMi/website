import MainContainer from "@/components/main-container"
import PrivacyButton from "@/components/privacy/button"
import SearchBar from "@/components/search-bar"
import { Box, Container, Heading, Text } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const Home = () => {
  const { t } = useTranslation("common")

  return (
    <MainContainer>
      <Container py={12}>
        <>
          <Heading size="4xl" mb={3} textAlign="center">
            Il network pensato per il presente e il futuro degli studenti.
          </Heading>

          <SearchBar />

          <PrivacyButton href="test">Test</PrivacyButton>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      </Container>
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

export default Home
