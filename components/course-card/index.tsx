import React from "react"
import { Box, Flex, Text, useColorModeValue, HStack, Link, VStack, Divider, Tag } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { CourseDegree } from "@/types/api"
import { getYearColor } from "@/utils/degree"

interface CourseCardProps {
  data: CourseDegree
}

const MotionBox = motion(Box)

const CourseCard: React.FC<CourseCardProps> = ({ data }) => {
  const t = useTranslations("degrees")
  const { course, year, semester } = data

  const isDark = useColorModeValue(false, true)

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
      bg={useColorModeValue("gray.50", "gray.700")}
      w={{ base: "full", md: "178px" }}
      h={{ base: "72px", md: "160px" }}
      p={4}
    >
      {/* Mobile: titolo + chevron */}
      <HStack w="full" h="full" align="center" justify="space-between" display={{ base: "flex", md: "none" }}>
        <Text fontWeight="semibold" fontSize="md" noOfLines={2} color={titleColor}>
          {course.name}
        </Text>
        <Box>
          <ArrowRight size={18} strokeWidth={2} />
        </Box>
      </HStack>

      {/* Desktop: titolo fino a 3 righe */}
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
        _groupHover={{ opacity: 0 }}
      >
        <Text fontWeight="bold" fontSize="md" noOfLines={4}>
          {course.name}
        </Text>
      </Flex>

      {/* Tag anno */}
      <Tag
        display={{ base: "none", md: "flex" }}
        position="absolute"
        bottom={2}
        left="50%"
        transform="translateX(-50%)"
        size="sm"
        rounded="full"
        px={3}
        bg={year === -2 ? "gray.100" : getYearColor(year, isDark)}
        color={useColorModeValue("gray.700", "gray.500")}
        fontWeight="medium"
      >
        {year !== -2 ? t("courseCard.yearTag", { year }) : t("courseCard.complementary")}
      </Tag>

      {/* Icona in alto a destra (desktop, solo hover) */}
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

      {/* Overlay info corso */}
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
          {/* Docente */}
          {course.professor && (
            <Link href={course.professor.url} target="_blank" fontWeight="semibold" color="blue.500" fontSize="sm" noOfLines={1}>
              🧑‍🔬 {course.professor.first_name[0]}. {course.professor.last_name}
            </Link>
          )}

          {course.professor && <Divider />}

          {/* Dati corso */}
          <HStack spacing={6} justify="center" w="full">
            {year !== -2 && (
              <VStack spacing={0}>
                <Text fontSize="xs" color={overlayText}>
                  {t("courseCard.year")}
                </Text>
                <Text fontWeight="bold" fontSize="sm" color={overlayText}>
                  {year}
                </Text>
              </VStack>
            )}
            <VStack spacing={0}>
              <Text fontSize="xs" color={overlayText}>
                {t("courseCard.semester")}
              </Text>
              <Text fontWeight="bold" fontSize="sm" color={overlayText}>
                {semester}
              </Text>
            </VStack>
            <VStack spacing={0}>
              <Text fontSize="xs" color={overlayText}>
                {t("courseCard.cfu")}
              </Text>
              <Text fontWeight="bold" fontSize="sm" color={overlayText}>
                {course.cfu}
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </MotionBox>
  )
}

export default CourseCard
