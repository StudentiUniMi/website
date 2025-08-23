import MainContainer from "@/components/main-container"
import SearchBar from "@/components/search-bar"
import { Box, Heading } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { ExtraGroup } from "@/types/api"
import { getExtraGroups } from "@/lib/api/groups"
import { useCustomRouter } from "@/hooks/router"
import InfoCards from "./index/partials/info-cards"
import PrivacyButton from "@/components/privacy/button"
import GroupCard from "@/components/group-card"
import ItemList from "@/components/item-list"

interface HomepageProps {
  groups: Array<ExtraGroup>
  associations: Array<ExtraGroup>
}

const Homepage = ({ groups, associations }: HomepageProps) => {
  const { locale } = useCustomRouter()
  const { t } = useTranslation("common")

  return (
    <MainContainer>
      <Box pt={12}>
        <Heading as="h1" size="4xl" mb={3} textAlign="center">
          Il network pensato per il presente e il futuro degli studenti.
        </Heading>

        <SearchBar />

        <InfoCards />

        <ItemList
          label="Entra nei nostri gruppi"
          sectionId={"groups"}
          customLabelWidth={{ minWidth: 250 }}
          items={groups}
          getItemName={(group) => group.name[locale]}
          renderItem={(group) => (
            <PrivacyButton key={group.id} href={group.invite_link}>
              <GroupCard title={group.name[locale]} description={group.description[locale]} category={group.category} />
            </PrivacyButton>
          )}
        />

        <ItemList
          label="Scopri le associazioni studentesche"
          sectionId={"associations"}
          items={associations}
          getItemName={(association) => association.name[locale]}
          renderItem={(association) => (
            <PrivacyButton key={association.id} href={association.invite_link}>
              <GroupCard title={association.name[locale]} description={association.description[locale]} category={association.category} />
            </PrivacyButton>
          )}
        />
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
