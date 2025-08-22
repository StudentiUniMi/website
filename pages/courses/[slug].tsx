import { GetServerSideProps } from "next"
import { getVerboseDegreeBySlug } from "@/lib/api/degrees"
import { getCourses } from "@/lib/api/courses"
import { getDegreeAdmins } from "@/lib/api/admins"
import { getRepresentatives } from "@/lib/api/representatives"
import { Group, Representative, Admin, CourseDegree, VerboseDegree } from "@/types/api"
import { Box, Heading, HStack, Tag, VStack } from "@chakra-ui/react"
import { getDegreeColorScheme, getDegreeFullName } from "@/utils/degree"
import { useCustomRouter } from "@/hooks/router"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import MainContainer from "@/components/main-container"
import ItemList from "@/components/item-list"
import PrivacyButton from "@/components/privacy/button"
import CourseCard from "@/components/course-card"
import DegreeGroupCard from "@/components/degree-group-card"

interface CoursePageProps {
  degree: VerboseDegree
  courses: Array<CourseDegree>
  admins: Array<Admin>
  representatives: Array<Representative>
  mainGroup: Group | null
}

const CoursePage = ({ degree, courses, admins, representatives, mainGroup }: CoursePageProps) => {
  const { locale } = useCustomRouter()
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
            {groupsLength > 0 && <Tag>{groupsLength} gruppi</Tag>}
            {admins.length > 0 && <Tag>{admins.length} amministratori</Tag>}
            {representatives.length > 0 && <Tag>{representatives.length} rappresentanti</Tag>}
          </HStack>
        </VStack>

        <ItemList
          label="Gruppi disponibili"
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
      ...(await serverSideTranslations(actualLocale, ["common"])),
    },
    notFound: degree === undefined,
  }
}

export default CoursePage
