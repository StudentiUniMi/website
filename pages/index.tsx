import { Box, Heading } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { useTranslations } from "next-intl"
import { ExtraGroup } from "@/types/api"
import { getExtraGroups } from "@/lib/api/groups"
import { useCustomRouter } from "@/hooks/router"
import { loadMessages } from "@/lib/intl"
import MainContainer from "@/components/main-container"
import SearchBar from "@/components/search-bar"
import InfoCards from "../components/info-cards"
import GroupCard from "@/components/group-card"
import ItemList from "@/components/item-list"
import Seo from "@/components/seo"

/**
 * Props for {@link Homepage}.
 */
interface HomepageProps {
  /** List of university and announcement groups. */
  groups: Array<ExtraGroup>
  /** List of student associations. */
  associations: Array<ExtraGroup>
}

/**
 * @name Homepage
 *
 * @description
 * Displays the tagline, search bar, info cards,
 * and lists of groups and student associations.
 *
 * @param props - {@link HomepageProps}
 * @returns The rendered homepage.
 *
 * @author Giuseppe Del Campo
 */
const Homepage = ({ groups, associations }: HomepageProps) => {
  const { locale } = useCustomRouter()
  const t = useTranslations("common")

  return (
    <>
      <Seo page="homepage" />

      <MainContainer>
        <Box pt={12}>
          <Heading as="h1" size={{ base: "3xl", lg: "4xl" }} mb={3} textAlign="center">
            {t("networkTagline")}
          </Heading>

          <SearchBar />

          <InfoCards />

          <ItemList
            label={t("homepage.joinGroups")}
            sectionId={"groups"}
            customLabelWidth={{ minWidth: 250 }}
            items={groups}
            getItemName={(group) => group.name[locale]}
            renderItem={(group) => (
              <GroupCard
                key={group.id}
                title={group.name[locale]}
                description={group.description[locale]}
                href={group.invite_link}
                category={group.category}
              />
            )}
          />

          <ItemList
            label={t("homepage.discoverAssociations")}
            sectionId={"associations"}
            items={associations}
            getItemName={(association) => association.name[locale]}
            renderItem={(association) => (
              <GroupCard
                key={association.id}
                title={association.name[locale]}
                description={association.description[locale]}
                href={association.external_url}
                category={association.category}
              />
            )}
          />
        </Box>
      </MainContainer>
    </>
  )
}

/**
 * Retrieves groups (university, announcements) and student associations.
 *
 * @returns Props for {@link Homepage}.
 */
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = await loadMessages(locale as "it" | "en", ["common", "seo"])

  const groupsResponse = await getExtraGroups()

  const groups = [
    ...(groupsResponse.value?.university_groups?.map((g) => ({
      ...g,
      category: "university" as const,
    })) ?? []),
    ...(groupsResponse.value?.announcement_groups?.map((g) => ({
      ...g,
      category: "announcements" as const,
    })) ?? []),
  ]

  const associations =
    groupsResponse.value?.student_associations?.map((a) => ({
      ...a,
      category: "association" as const,
    })) ?? []

  return {
    props: {
      locale,
      messages,
      groups,
      associations,
    },
  }
}

export default Homepage
