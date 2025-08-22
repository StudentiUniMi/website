import React from "react"
import { Box, Flex, Text, HStack, useColorModeValue, Image, Link as ChakraLink } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import { Degree } from "@/types/api"
import { useCustomRouter } from "@/hooks/router"
import { getDegreeLabel } from "@/utils/degree"
import NextLink from "next/link"

interface DegreeCardProps {
  degree: Degree
  bgColor?: string
}

const MotionBox = motion(Box)

const DegreeCard: React.FC<DegreeCardProps> = ({ degree, bgColor }) => {
  const { locale } = useCustomRouter()
  const description = getDegreeLabel(degree, locale)

  const baseColor = useColorModeValue(bgColor || "gray.100", bgColor || "gray.700")
  const border = useColorModeValue("gray.200", "gray.600")
  const titleColor = useColorModeValue("gray.900", "whiteAlpha.900")

  return (
    <ChakraLink as={NextLink} href={`/courses/${degree.slug}`} _hover={{ textDecoration: "none" }} w="full" h="full">
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
            {degree.name}
          </Text>
          <ChevronRight size={18} strokeWidth={2} />
        </HStack>

        {/* Desktop: icona + titolo + descrizione */}
        <Flex direction="column" justify="center" align="flex-start" w="full" h="full" display={{ base: "none", md: "flex" }} p={2}>
          {degree.icon && <Image src={degree.icon} alt={degree.name} boxSize="40px" mb={2} objectFit="contain" />}
          <Text fontWeight="bold" fontSize="md" noOfLines={3} color={"blue.600"} mb={1}>
            {degree.name}
          </Text>
          <Text fontWeight="semibold" fontSize="sm">
            {description}
          </Text>
        </Flex>

        {/* Icona in alto a destra (hover desktop) */}
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
      </MotionBox>
    </ChakraLink>
  )
}

export default DegreeCard
