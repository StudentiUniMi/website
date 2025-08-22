import DegreeCard from "@/components/degree-card"
import GroupCard from "@/components/group-card"
import ItemList from "@/components/item-list"
import MainContainer from "@/components/main-container"
import PrivacyButton from "@/components/privacy/button"
import { useCustomRouter } from "@/hooks/router"
import { getDegreesForSearchBox } from "@/lib/api/degrees"
import { getExtraGroups } from "@/lib/api/groups"
import { Degree, ExtraGroup } from "@/types/api"
import { Box, Container, Heading } from "@chakra-ui/react"
import { GetServerSideProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

interface SearchPageProps {
  query: string
  degrees: Array<Degree>
  groups: Array<ExtraGroup>
  associations: Array<ExtraGroup>
}

const SearchPage = ({ query, degrees, groups, associations }: SearchPageProps) => {
  const { locale } = useCustomRouter()

  return (
    <MainContainer as={Container}>
      <Box pt={12}>
        <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={12} textAlign="center">
          Risultati di ricerca per "{query}"
        </Heading>

        {degrees?.length > 0 && <ItemList label={"Corsi di laurea"} items={degrees} renderItem={(degree) => <DegreeCard degree={degree} />} />}

        {groups?.length > 0 && (
          <ItemList
            label="Gruppi universitari"
            items={groups}
            renderItem={(group) => (
              <PrivacyButton key={group.id} href={group.invite_link}>
                <GroupCard title={group.name[locale]} description={group.description[locale]} category={group.category} />
              </PrivacyButton>
            )}
          />
        )}

        {associations?.length > 0 && (
          <ItemList
            label="Associazioni studentesche"
            items={associations}
            renderItem={(association) => (
              <PrivacyButton key={association.id} href={association.invite_link}>
                <GroupCard title={association.name[locale]} description={association.description[locale]} category={association.category} />
              </PrivacyButton>
            )}
          />
        )}
      </Box>
    </MainContainer>
  )
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (context) => {
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
      query,
      groups,
      associations,
      degrees,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    notFound: degrees?.length === 0 && groups?.length === 0 && associations?.length === 0,
  }
}

export default SearchPage
