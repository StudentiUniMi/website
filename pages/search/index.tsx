import { useCustomRouter } from "@/hooks/router"
import { getDegreesForSearchBox } from "@/lib/api/degrees"
import { getExtraGroups } from "@/lib/api/groups"
import { Degree, ExtraGroup } from "@/types/api"
import { Box, Heading, Tag, VStack } from "@chakra-ui/react"
import { GetServerSideProps } from "next"
import { useTranslations } from "next-intl"
import { loadMessages } from "@/lib/intl"
import DegreeCard from "@/components/degree-card"
import GroupCard from "@/components/group-card"
import ItemList from "@/components/item-list"
import MainContainer from "@/components/main-container"
import PrivacyButton from "@/components/privacy/button"
import Seo from "@/components/seo"

/**
 * Props for {@link SearchPage}.
 */
interface SearchPageProps {
  /** User query string (sanitized). */
  query: string
  /** List of matching degrees. */
  degrees: Array<Degree>
  /** List of extra groups (e.g., university or announcement groups). */
  groups: Array<ExtraGroup>
  /** List of student associations. */
  associations: Array<ExtraGroup>
}

/**
 * @name SearchPage
 *
 * @description
 * Displays degrees, groups, and associations that match a given query.
 *
 * @param props - {@link SearchPageProps}
 * @returns The rendered search page.
 *
 * @author Giuseppe Del Campo
 */
const SearchPage = ({ query, degrees, groups, associations }: SearchPageProps) => {
  const { locale } = useCustomRouter()
  const t = useTranslations("search")

  const resultsLength = degrees.length + groups.length + associations.length

  return (
    <>
      <Seo page="search" variables={{ query }} />

      <MainContainer>
        <Box pt={12}>
          <VStack mb={12} gap={3}>
            <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "4xl" }} textAlign="center">
              {t("title", { query })}
            </Heading>

            <Tag as="h2">{t("resultsLength", { resultsLength })}</Tag>
          </VStack>

          {degrees?.length > 0 && (
            <ItemList
              label={t("degrees")}
              sectionId="degrees"
              items={degrees}
              getItemName={(degree) => degree.name}
              renderItem={(degree) => <DegreeCard degree={degree} />}
            />
          )}

          {groups?.length > 0 && (
            <ItemList
              label={t("groups")}
              sectionId="groups"
              items={groups}
              getItemName={(group) => group.title}
              renderItem={(group) => (
                <PrivacyButton key={group.id} href={group.invite_link}>
                  <GroupCard title={group.name[locale]} description={group.description[locale]} category={group.category} />
                </PrivacyButton>
              )}
            />
          )}

          {associations?.length > 0 && (
            <ItemList
              label={t("associations")}
              sectionId="associations"
              items={associations}
              getItemName={(association) => association.title}
              renderItem={(association) => (
                <PrivacyButton key={association.id} href={association.external_url}>
                  <GroupCard title={association.name[locale]} description={association.description[locale]} category={association.category} />
                </PrivacyButton>
              )}
            />
          )}
        </Box>
      </MainContainer>
    </>
  )
}

/**
 * Sanitizes the query, fetches degrees, groups, and associations.
 *
 * @returns Props for {@link SearchPage} or a `notFound` response.
 */
export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (context) => {
  const messages = await loadMessages(context.locale as "it" | "en", ["common", "seo", "search"])

  function sanitizeQuery(q: string): string {
    const safe = q.replace(/[;'"%--]/g, "").trim()
    return safe.slice(0, 100)
  }

  const rawQuery = (context.query.q as string) || ""
  const query = sanitizeQuery(rawQuery)
  const locale = (context.locale as "it" | "en") ?? "it"

  const degreesResult = await getDegreesForSearchBox(query)

  const degrees = query ? (degreesResult.value ?? []) : []

  const normalize = (s: string) => (s ? s.toLowerCase() : "")
  const q = normalize(query)

  const groupsResponse = await getExtraGroups()

  const allGroups: ExtraGroup[] = [
    ...(groupsResponse.value?.university_groups?.map((g) => ({
      ...g,
      category: "university" as const,
    })) ?? []),
    ...(groupsResponse.value?.announcement_groups?.map((g) => ({
      ...g,
      category: "announcements" as const,
    })) ?? []),
  ]

  const allAssociations: ExtraGroup[] =
    groupsResponse.value?.student_associations?.map((a) => ({
      ...a,
      category: "association" as const,
    })) ?? []

  const filterByQuery = (item: ExtraGroup) => normalize(item.name[locale]).includes(q) || normalize(item.description?.[locale] ?? "").includes(q)

  const groups = query ? allGroups.filter(filterByQuery) : []
  const associations = query ? allAssociations.filter(filterByQuery) : []

  return {
    props: {
      locale,
      messages,
      query,
      groups,
      associations,
      degrees,
    },
    notFound: degrees?.length === 0 && groups?.length === 0 && associations?.length === 0,
  }
}

export default SearchPage
