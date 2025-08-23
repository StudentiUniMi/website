import NextLink from "next/link"
import MainContainer from "@/components/main-container"
import ItemList from "@/components/item-list"
import PrivacyButton from "@/components/privacy/button"
import CourseCard from "@/components/course-card"
import DegreeGroupCard from "@/components/degree-group-card"
import { GetServerSideProps } from "next"
import { getVerboseDegreeBySlug } from "@/lib/api/degrees"
import { getCourses } from "@/lib/api/courses"
import { getDegreeAdmins } from "@/lib/api/admins"
import { getRepresentatives } from "@/lib/api/representatives"
import { Group, Representative, Admin, CourseDegree, VerboseDegree } from "@/types/api"
import { Box, Heading, HStack, SimpleGrid, Tag, useColorModeValue, VStack } from "@chakra-ui/react"
import { getDegreeColorScheme, getDegreeFullName } from "@/utils/degree"
import { useCustomRouter } from "@/hooks/router"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { motion } from "framer-motion"
import { useTranslation } from "next-i18next"

const MotionTag = motion(Tag)

interface CoursePageProps {
  degree: VerboseDegree
  courses: Array<CourseDegree>
  admins: Array<Admin>
  representatives: Array<Representative>
  mainGroup: Group | null
}

const CoursePage = ({ degree, courses, admins, representatives, mainGroup }: CoursePageProps) => {
  const { locale } = useCustomRouter()
  const { t } = useTranslation("degree")

  const groupsLength = courses.length + (!!mainGroup ? 1 : 0)

  return (
    <MainContainer>
      <Box pt={12}>
        <VStack mb={12}>
          <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={2} textAlign="center">
            {degree.name}
          </Heading>

          <HStack justify="center" flexWrap="wrap">
            <Tag colorScheme={getDegreeColorScheme(degree.type)}>{getDegreeFullName(degree.type, locale)}</Tag>
            {groupsLength > 0 && <Tag>{t("groups", { count: groupsLength })}</Tag>}
            {admins.length > 0 && <Tag>{t("admins", { count: admins.length })}</Tag>}
            {representatives.length > 0 && <Tag>{t("representatives", { count: representatives.length })}</Tag>}
          </HStack>
        </VStack>

        <ItemList
          label={t("availableGroups")}
          sectionId={"groups"}
          items={courses}
          enableSearch
          firstElement={
            mainGroup ? (
              <PrivacyButton key={"Main group"} href={mainGroup.invite_link}>
                <DegreeGroupCard group={mainGroup} degree={degree} />
              </PrivacyButton>
            ) : undefined
          }
          getItemName={(item) => item.course.name}
          renderItem={(course) => (
            <PrivacyButton key={course.course.pk} href={course.course.group?.invite_link}>
              <CourseCard data={course} />
            </PrivacyButton>
          )}
        />

        <SimpleGrid mt={12} columns={{ base: 1, xl: 2 }} spacing={8}>
          {admins.length > 0 && (
            <ItemList
              label={t("availableAdmins")}
              sectionId={"admins"}
              items={admins}
              customLabelWidth={{ maxWidth: "auto" }}
              getItemName={(admin) => `${admin.first_name} ${admin.last_name}`}
              renderItem={(admin) => {
                const borderColor = useColorModeValue("gray.300", "gray.600")
                const hoverBg = useColorModeValue("gray.100", "gray.700")

                return (
                  <NextLink key={admin.id} href={`https://t.me/${admin.username}`} passHref legacyBehavior>
                    <MotionTag
                      as="a"
                      size="lg"
                      rounded="full"
                      px={4}
                      py={2}
                      border="1px solid"
                      borderColor={borderColor}
                      fontWeight="medium"
                      w={{ base: "full", md: "auto" }}
                      cursor="pointer"
                      bg="transparent"
                      whileHover={{ y: -3, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                      transition={{ duration: 0.2 }}
                      _hover={{ bg: hoverBg }}
                    >
                      👨‍💻 @{admin.username}
                    </MotionTag>
                  </NextLink>
                )
              }}
            />
          )}

          {representatives.length > 0 && (
            <ItemList
              label={t("representativesList")}
              sectionId={"representatives"}
              items={representatives}
              getItemName={(rep) => `${rep.user.first_name} ${rep.user.last_name}`}
              renderItem={(rep) => {
                const borderColor = useColorModeValue("gray.300", "gray.600")
                const hoverBg = useColorModeValue("gray.100", "gray.700")

                return (
                  <NextLink key={rep.user.id} href={`https://t.me/${rep.user.username}`} passHref legacyBehavior>
                    <MotionTag
                      as="a"
                      size="lg"
                      rounded="full"
                      px={4}
                      py={2}
                      border="1px solid"
                      borderColor={borderColor}
                      fontWeight="medium"
                      w={{ base: "full", md: "auto" }}
                      cursor="pointer"
                      bg="transparent"
                      whileHover={{ y: -3, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                      transition={{ duration: 0.2 }}
                      _hover={{ bg: hoverBg }}
                    >
                      🗳️ {rep.user.first_name} {rep.user.last_name}
                    </MotionTag>
                  </NextLink>
                )
              }}
            />
          )}
        </SimpleGrid>
      </Box>
    </MainContainer>
  )
}

const replaceUnderscore = (str: string): [string, boolean] => {
  const replaced = str.replace(/_/g, "-")
  return [replaced, replaced !== str]
}

export const getServerSideProps: GetServerSideProps<CoursePageProps> = async ({ locale, params }) => {
  const actualLocale = (locale as "it" | "en") ?? "it"

  const degreeSlug = params!.slug as string

  const [fixedSlug, hasReplaced] = replaceUnderscore(degreeSlug)
  if (hasReplaced) {
    return {
      redirect: {
        destination: `/courses/${fixedSlug}`,
        permanent: false,
      },
    }
  }

  const degreeResult = await getVerboseDegreeBySlug(degreeSlug)
  const degree = degreeResult.value

  const teachingCoursesResult = degree ? await getCourses(String(degree.pk)) : { value: [] }

  const adminsResult = await getDegreeAdmins(degreeSlug)

  const representativesResult = degree ? await getRepresentatives(String(degree.department.pk)) : { value: [] }

  let mainGroup: Group | null = null
  if (degree?.group && degree.group.invite_link && degree.group.invite_link !== "") {
    mainGroup = {
      id: degree.group.id,
      title: degree.group.title,
      profile_picture: degree.group.profile_picture,
      invite_link: degree.group.invite_link,
    }
  }

  return {
    props: {
      degree: degree!,
      courses: teachingCoursesResult.value ?? [],
      admins: adminsResult.value ?? [],
      representatives: representativesResult.value ?? [],
      mainGroup,
      ...(await serverSideTranslations(actualLocale, ["degree", "common"])),
    },
    notFound: degree === undefined,
  }
}

export default CoursePage
