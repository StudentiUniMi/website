import MainContainer from "@/components/main-container"
import { Box, VStack, Heading, Text } from "@chakra-ui/react"
import { GetStaticPaths, GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslations } from "next-intl"
import { TeamMember } from "@/types"
import TeamMemberCard from "../../components/member-card"
import { cdaMembers, founders } from "@/data/staff"
import ItemList from "@/components/item-list"
import ContactMailPopup from "../../components/contact-popup"
import Seo from "@/components/seo"
import { loadMessages } from "@/lib/intl"

interface AboutPageProps {
  founders: Array<TeamMember>
  cdaMembers: Array<TeamMember>
}

const AboutPage = ({ founders, cdaMembers }: AboutPageProps) => {
  const t = useTranslations("about")

  return (
    <>
      <Seo page="about" />

      <MainContainer>
        <Box py={12}>
          <VStack spacing={8} mb={14}>
            <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "3xl" }} mb={8} textAlign="center">
              {t("title")}
            </Heading>

            <Text as="h2" fontSize={{ base: "md", md: "lg" }} color="gray.600" _dark={{ color: "gray.300" }} maxW="3xl" mx="auto" textAlign="center">
              {t("intro")}
            </Text>
          </VStack>

          {founders && (
            <ItemList
              items={founders}
              label={t("founders")}
              getItemName={(founder) => founder.name}
              renderItem={(founder) => <TeamMemberCard key={founder.user_id} member={founder} />}
            />
          )}

          {cdaMembers && (
            <ItemList
              items={cdaMembers}
              label={t("board")}
              customLabelWidth={{ maxWidth: "auto" }}
              getItemName={(member) => member.name}
              renderItem={(member) => <TeamMemberCard key={member.user_id} member={member} />}
            />
          )}
        </Box>

        <ContactMailPopup />
      </MainContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = await loadMessages(locale as "it" | "en", ["common", "seo", "about"])

  return {
    props: {
      locale,
      messages,
      founders,
      cdaMembers,
    },
  }
}

export default AboutPage
