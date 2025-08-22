import { HStack, Stack, Heading } from "@chakra-ui/react"
import type { ExtraGroup } from "@/types/api"
import GroupCard from "./partials/group-card"
import PrivacyButton from "../privacy/button"
import { useCustomRouter } from "@/hooks/router"

interface GroupListProps {
  label?: string
  groups: Array<ExtraGroup>
}

const GroupList = ({ label, groups }: GroupListProps) => {
  const { locale } = useCustomRouter()

  return (
    <Stack direction={{ base: "column", lg: "row" }} mb={24}>
      {label && (
        <Heading size="xl" mb={3} textAlign={{ base: "center", lg: "left" }} minWidth={{ lg: 250 }} position="sticky">
          {label}
        </Heading>
      )}

      <Stack direction={{ base: "column", sm: "row" }} flexWrap="wrap" justifyContent={{ base: "center", lg: "flex-start" }}>
        {groups.map((group) => (
          <PrivacyButton key={group.id} href={group.invite_link}>
            <GroupCard title={group.name[locale]} description={group.description[locale]} image={group.image_url ?? ""} category={group.category} />
          </PrivacyButton>
        ))}
      </Stack>
    </Stack>
  )
}

export default GroupList
