import { useCustomRouter } from "@/hooks/router"
import { TeamMember } from "@/types"
import { Box, VStack, Text, useColorModeValue } from "@chakra-ui/react"
import { ArrowUpRight } from "lucide-react"

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const { locale } = useCustomRouter()
  const borderColor = useColorModeValue("gray.200", "gray.600")
  const bg = useColorModeValue("gray.50", "gray.700")
  const hoverBg = useColorModeValue("gray.100", "gray.600")

  const normalizedUsername = member.username.startsWith("@") ? member.username.slice(1) : member.username
  const href = member.href ?? `https://t.me/${normalizedUsername}`

  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      role="group"
      borderWidth="1px"
      borderRadius="2xl"
      borderColor={borderColor}
      bg={bg}
      transition="all 0.2s ease"
      _hover={{
        bg: hoverBg,
        transform: "translateY(-4px)",
        shadow: "lg",
      }}
      cursor="pointer"
      position="relative"
      overflow="hidden"
      p={{ base: 4, md: 6 }}
      minH="140px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      w={{ base: "full", lg: "250px" }}
      h={{ base: "72px", lg: "160px" }}
    >
      <VStack spacing={2} align="flex-start" textAlign="left">
        <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
          {member.name}
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} color="gray.500" noOfLines={3}>
          {member.description[locale]}
        </Text>
      </VStack>

      {/* Icona esterna in hover */}
      <Box position="absolute" top={3} right={3} opacity={0} _groupHover={{ opacity: 1 }} transition="opacity 0.2s ease">
        <ArrowUpRight size={18} strokeWidth={2} />
      </Box>
    </Box>
  )
}

export default TeamMemberCard
