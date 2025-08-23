import MainContainer from "@/components/main-container"
import { Box, Flex, Heading, Icon, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { CheckCircle } from "lucide-react"
import Seo from "@/components/seo"

export interface RuleSection {
  id: string
  title: string
  items: string[]
}

export interface RulesTranslation {
  title: string
  sections: RuleSection[]
}

const RulesPage = () => {
  const { t } = useTranslation("rules")
  const iconColor = useColorModeValue("blue.600", "blue.400")

  const sections = t("sections", { returnObjects: true }) as Array<RuleSection>

  const startsWithEmoji = (s: string) => {
    if (!s) return false
    const first = Array.from(s.trim())[0] ?? ""
    return /[\p{Extended_Pictographic}\u{1F300}-\u{1FAFF}\u{1F1E6}-\u{1F1FF}\u{2600}-\u{27BF}]/u.test(first)
  }

  return (
    <>
      <Seo page="rules" />

      <MainContainer>
        <Box py={12}>
          <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={12} textAlign="center">
            {t("title")}
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {sections.map((section) => (
              <Box key={section.title} p={6} borderWidth="1px" borderRadius="md" shadow="sm">
                <Heading size="md" mb={4}>
                  {section.title}
                </Heading>

                <Stack spacing={3}>
                  {section.items.map((item, idx) => {
                    const hideIcon = startsWithEmoji(item)
                    return (
                      <Flex key={idx} align="flex-start">
                        {!hideIcon && <Icon as={CheckCircle} boxSize={5} color={iconColor} mt="2px" mr={2} flexShrink={0} />}
                        <Text fontSize="md" lineHeight="tall">
                          {item}
                        </Text>
                      </Flex>
                    )
                  })}
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </MainContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "it", ["seo", "rules", "common"])),
    },
  }
}

export default RulesPage
