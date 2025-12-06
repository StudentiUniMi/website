import MainContainer from "@/components/main-container"
import TeamMemberCard from "../../components/member-card"
import ItemList from "@/components/item-list"
import ContactMailPopup from "../../components/contact-popup"
import Seo from "@/components/seo"
import { Box, VStack, Heading, Text } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { useTranslations } from "next-intl"
import { TeamMember } from "@/types"
import { cdaMembers, founders } from "@/data/staff"
import { loadMessages } from "@/lib/intl"

/**
 * Props for {@link AboutPage}.
 */
interface AboutPageProps {
  /** Array of founding team members. */
  founders: Array<TeamMember>
  /** Array of board (CDA) members. */
  cdaMembers: Array<TeamMember>
}

/**
 * @name AboutPage
 *
 * @description
 * Displays information about the organization, including founders,
 * board members, and a contact popup.
 *
 * @param props - {@link AboutPageProps}
 * @returns The rendered About page.
 *
 * @author Giuseppe Del Campo
 */
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
              sectionId="founders"
              getItemName={(founder) => founder.name}
              renderItem={(founder) => <TeamMemberCard key={founder.user_id} member={founder} />}
            />
          )}

          {cdaMembers && (
            <ItemList
              items={cdaMembers}
              label={t("board")}
              sectionId="board"
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

/**
 * Provides founders and board members.
 *
 * @returns Props for {@link AboutPage}.
 */
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
