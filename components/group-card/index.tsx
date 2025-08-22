import React from "react"
import { Box, Flex, Text, useColorModeValue, HStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { GroupCategory } from "@/types"

interface GroupCardProps {
  title: string
  description?: string
  category: GroupCategory
  bgColor?: string
}

const MotionBox = motion(Box)

const categoryColors: Record<GroupCategory, { light: string; dark: string }> = {
  university: { light: "gray.200", dark: "gray.700" },
  announcements: { light: "yellow.300", dark: "yellow.600" },
  association: { light: "teal.200", dark: "teal.600" },
}

const GroupCard: React.FC<GroupCardProps> = ({ title, description, category, bgColor }) => {
  const baseColor = useColorModeValue(bgColor || categoryColors[category].light, bgColor || categoryColors[category].dark)

  const border = useColorModeValue("gray.200", "gray.700")
  const titleColor = useColorModeValue("gray.900", "whiteAlpha.900")
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
      bg={baseColor}
      w={{ base: "full", md: "200px" }}
      h={{ base: "72px", md: "180px" }}
      p={4}
    >
      {/* Mobile: titolo + chevron */}
      <HStack w="full" h="full" align="center" justify="space-between" display={{ base: "flex", md: "none" }}>
        <Text fontWeight="semibold" fontSize="md" noOfLines={1} color={titleColor}>
          {title}
        </Text>
        <ArrowRight size={18} strokeWidth={2} />
      </HStack>

      {/* Desktop: titolo fino a 3 righe con ellissi */}
      <Flex
        direction="column"
        justify="center"
        align="flex-start"
        w="full"
        h="full"
        display={{ base: "none", md: "flex" }}
        p={2}
        opacity={1}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 0 }} // 👈 nascondi il titolo sotto overlay
      >
        <Text fontWeight="bold" fontSize="md" noOfLines={3}>
          {title}
        </Text>
      </Flex>

      {/* Icona in alto a destra (solo desktop, su hover) */}
      <Box
        position="absolute"
        top={3}
        right={3}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        transition="opacity 0.2s ease"
        zIndex={10}
        display={{ base: "none", md: "block" }}
      >
        <ArrowUpRight size={18} strokeWidth={2} />
      </Box>

      {/* Overlay descrizione (solo desktop, su hover) */}
      {description && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          w="100%"
          h="100%"
          bg={overlayBg} // bianco pieno o grigio scuro pieno
          display={{ base: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          p={4}
          opacity={0}
          transition="opacity 0.3s ease"
          _groupHover={{ opacity: 1 }}
          zIndex={2}
        >
          <Text fontSize="sm" color={overlayText}>
            {description}
          </Text>
        </Box>
      )}
    </MotionBox>
  )
}

export default GroupCard
