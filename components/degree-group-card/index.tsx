import React from "react"
import { Box, Text, HStack, VStack, Stack, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Degree, Group } from "@/types/api"

interface DegreeGroupCardProps {
  degree: Degree
  group: Group
}

const MotionBox = motion(Box)

const DegreeGroupCard: React.FC<DegreeGroupCardProps> = ({ degree, group }) => {
  const t = useTranslations("degrees")

  const border = useColorModeValue("gray.200", "gray.700")
  const titleColor = useColorModeValue("white", "white")
  const overlayBg = useColorModeValue("whiteAlpha.900", "blackAlpha.700")
  const overlayText = useColorModeValue("gray.800", "gray.100")

  return (
    <MotionBox
      role="group"
      border="1px solid"
      borderColor={border}
      rounded="lg"
      overflow="hidden"
      cursor="pointer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      position="relative"
      _hover={{ shadow: "md" }}
      bgGradient={useColorModeValue("linear(to-br, blue.400, blue.500, blue.600)", "linear(to-br, blue.600, blue.700, blue.800)")}
      w={{ base: "full", md: "178px" }}
      h={{ base: "72px", md: "160px" }}
      p={4}
    >
      {/* Mobile: titolo + chevron */}
      <HStack w="full" h="full" align="center" justify="space-between" display={{ base: "flex", md: "none" }}>
        <Text fontWeight="semibold" fontSize="md" noOfLines={1} color={titleColor}>
          {t("degreeGroup.main")}
        </Text>
        <ArrowRight size={18} strokeWidth={2} color="white" />
      </HStack>

      {/* Desktop: titolo fisso */}
      <Stack
        direction="column"
        justify="center"
        align="flex-start"
        w="full"
        h="full"
        spacing={"2px"}
        display={{ base: "none", md: "flex" }}
        p={2}
        opacity={1}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 0 }}
      >
        <Text fontWeight="bold" fontSize="md" noOfLines={2} color={titleColor}>
          {t("degreeGroup.main")}
        </Text>

        <Text fontWeight={"medium"} fontSize="2xs" color={titleColor}>
          {t("degreeGroup.allYears")}
        </Text>
      </Stack>

      {/* Icona in alto a destra (desktop, solo hover) */}
      <Box
        position="absolute"
        top={3}
        right={3}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        transition="opacity 0.2s ease"
        zIndex={10}
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="center"
        bg={useColorModeValue("blackAlpha.600", "whiteAlpha.300")}
        rounded="full"
        p={1}
      >
        <ArrowUpRight size={16} strokeWidth={2} color={useColorModeValue("white", "white")} />
      </Box>

      {/* Overlay info gruppo */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        w="100%"
        h="100%"
        bg={overlayBg}
        display={{ base: "none", md: "flex" }}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        p={6}
        opacity={0}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 1 }}
        zIndex={2}
      >
        <VStack spacing={3} w="full">
          <Text fontSize="sm" color={overlayText} fontWeight="semibold">
            {degree.name}
          </Text>
          <Text fontSize="xs" color={overlayText} opacity={0.8}>
            {group.title}
          </Text>
        </VStack>
      </Box>
    </MotionBox>
  )
}

export default DegreeGroupCard
