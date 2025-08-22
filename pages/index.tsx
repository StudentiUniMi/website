import MainContainer from "@/components/main-container"
import SearchBar from "@/components/search-bar"
import { Box, Container, Heading } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import InfoCards from "./index/info-cards"
import { ExtraGroup } from "@/types/api"
import GroupList from "@/components/group-list"
import { getExtraGroups } from "@/lib/api/groups"

interface HomepageProps {
  groups: Array<ExtraGroup>
  associations: Array<ExtraGroup>
}

const Homepage = ({ groups, associations }: HomepageProps) => {
  const { t } = useTranslation("common")

  return (
    <MainContainer as={Container}>
      <Box pt={12}>
        <Heading as="h1" size="4xl" mb={3} textAlign="center">
          Il network pensato per il presente e il futuro degli studenti.
        </Heading>

        <SearchBar />

        <InfoCards />

        <GroupList label={"Entra nei nostri gruppi"} groups={groups} />

        <GroupList label={"Scopri le associazioni studentesche"} groups={associations} />
      </Box>
    </MainContainer>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
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
      ...(await serverSideTranslations(locale ?? "it", ["common"])),
      groups,
      associations,
    },
  }
}

export default Homepage
