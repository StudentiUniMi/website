import React from "react"
import NextLink from "next/link"
import { Box, Flex, Text, HStack, useColorModeValue, Link as ChakraLink, Stack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Degree } from "@/types/api"
import { useCustomRouter } from "@/hooks/router"
import { DegreeType } from "@/types"
import { useDegree } from "@/hooks/degree"

interface DegreeCardProps {
  degree: Degree
  bgColor?: string
}

const MotionBox = motion(Box)

const DegreeCard: React.FC<DegreeCardProps> = ({ degree, bgColor }) => {
  const { locale } = useCustomRouter()
  const { label: description } = useDegree(degree.type, locale)

  const baseColor = useColorModeValue(bgColor || "gray.100", bgColor || "gray.700")
  const border = useColorModeValue("gray.200", "gray.600")
  const degreeColor = useColorModeValue("gray.500", "whiteAlpha.900")

  return (
    <ChakraLink as={NextLink} href={`/degrees/${degree.slug}`} _hover={{ textDecoration: "none" }} w="full" h="full">
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
        h={{ md: "180px" }}
        p={4}
      >
        {/* Mobile: titolo + chevron */}
        <HStack w="full" h="full" align="center" justify="space-between" display={{ base: "flex", md: "none" }}>
          <Stack spacing={"1px"}>
            <Text fontWeight="semibold" fontSize="md" noOfLines={3} color={"blue.500"}>
              {degree.name}
            </Text>
            <Text fontWeight="medium" fontSize="sm" color={degreeColor}>
              {description}
            </Text>
          </Stack>
          <Box>
            <ArrowRight size={18} strokeWidth={2} />
          </Box>
        </HStack>

        {/* Desktop: icona + titolo + descrizione */}
        <Flex direction="column" justify="center" align="flex-start" w="full" h="full" display={{ base: "none", md: "flex" }} p={2}>
          <Text fontWeight="bold" fontSize="md" noOfLines={4} mb={0.5}>
            {degree.name}
          </Text>
          <Text fontWeight="semibold" fontSize={degree.type === DegreeType.SINGLE_CYCLE_MASTER ? "xs" : "sm"} color={degreeColor}>
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
          color="blue.500"
        >
          <ArrowUpRight size={18} strokeWidth={2} />
        </Box>
      </MotionBox>
    </ChakraLink>
  )
}

export default DegreeCard
