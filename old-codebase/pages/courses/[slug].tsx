import React from "react"
import { Text, DefaultButton, IIconProps, useTheme, TooltipDelay, TooltipHost, DirectionalHint } from "@fluentui/react"
import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import { GetServerSideProps } from "next"
import { VerboseDegree, CourseDegree, Admin, Representative } from "../../models/Models"
import { Container } from "react-bootstrap"
import { getCourses, getDegreeInformations, getVerboseDegreeBySlug, getDegreeAdmins, getRepresentatives } from "../../services/Requests"
import { semibold } from "../../services/Fonts"
import { getDegreeFullName } from "services/Utils"
import { DegreeInformation } from "models/DegreeInformation"
import FourOhFour from "pages/404"
import LocalizationService from "../../services/LocalizationService"
//import DegreeInformations from "../../components/Courses/DegreeInformations";
import AdminsList from "../../components/Courses/AdminsList"
import GroupList from "../../components/Courses/GroupList"
import Chip from "components/Atoms/Chip"
import FiveHundred from "pages/500"
import RepresentativesList from "components/Courses/RepresentativesList"

interface reactHelmetContent {
  title: string
  description: string
  href: string
  hrefLang: string
}

interface Props {
  loadedDegree: VerboseDegree
  courses: Array<CourseDegree>
  informations: Array<DegreeInformation>
  admins: Array<Admin>
  representatives: Array<Representative>
  errors: {
    degree: boolean
    courses: boolean
    admins: boolean
    representatives: boolean
    informations: boolean
  }
}

interface StructuredDegree {
  "@context": "https://schema.org"
  "@type": "ItemList"
  itemListElement: Array<{
    "@type": "ListItem"
    position: number
    item: {
      "@type": "Course"
      url: string
      name: string
      description: string
      provider: {
        "@type": "Organization"
        name: string
        sameAs: string
      }
    }
  }>
}

const Course = (props: Props) => {
  var theme = useTheme()
  const router = useRouter()
  const { slug } = router.query
  const locale = LocalizationService.strings()
  var language: string | undefined = LocalizationService.getLanguage()

  const goBackButtonIconProps: IIconProps = { iconName: "AiOutlineArrowLeft", styles: { root: { fontSize: 14 } } }
  const shareLinkButtonIconProps: IIconProps = { iconName: "FaRegShareSquare", styles: { root: { fontSize: 14 } } }

  const copyUrlToDashboard = () => {
    const el = document.createElement("input")
    el.value = window.location.href
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  }

  // Loaded degree informations
  let loadedDegree: VerboseDegree = props.loadedDegree
  let errorLoadingDegree: boolean = props.errors.degree

  // Helmet
  let reactHelmetContent: reactHelmetContent = {
    title:
      locale?.helmet.degreeLoaded.title1 +
      `${loadedDegree?.name} (${getDegreeFullName(loadedDegree?.type!, language!).toLowerCase()})` +
      locale?.helmet.degreeLoaded.title2,
    description:
      locale?.helmet.degreeLoaded.description1 +
      `${loadedDegree?.name} (${getDegreeFullName(loadedDegree?.type!, language!).toLowerCase()})` +
      locale?.helmet.degreeLoaded.description2,
    href: `https://studentiunimi.it/courses/${slug}`,
    hrefLang: language!,
  }

  // Teaching courses
  let courses: CourseDegree[] = props.courses
  let errorLoadingCourses: boolean = props.errors.courses

  // Degree admins
  let admins: Admin[] = props.admins
  let errorLoadingAdmins: boolean = props.errors.admins

  // Degree representatives (related to department)
  let representatives: Array<Representative> = props.representatives
  let errorLoadingRepresentatives: boolean = props.errors.representatives

  // Degree informations/redirects
  //let degreeInformations: any[] = props.informations;

  // Structured data (https://developers.google.com/search/docs/appearance/structured-data/course?hl=it)
  const buildStructuredName = (course: CourseDegree) => {
    if (course.year === -1) return loadedDegree?.name
    return course.course.name
  }

  const buildStructuredDescription = (course: CourseDegree) => {
    if (course.year === -1)
      return `Gruppo telegram principale del corso di laurea in "${course.course.name}": dedicato a matricole e studenti di anni successivi al primo, offerto e gestito dal Network StudentiUniMi.`
    if (course.year === -2)
      return `Gruppo telegram del corso didattico complementare "${course.course.name}" del corso di laurea in "${loadedDegree?.name}", ${course.semester}° semestre, ${course.course.cfu} CFU, offerto e gestito dal Network StudentiUniMi.`
    return `Gruppo telegram del corso didattico "${course.course.name}" del corso di laurea in "${loadedDegree?.name}", ${course.course.cfu} CFU, ${course.year}° anno, ${course.semester}° semestre, offerto e gestito dal Network StudentiUniMi.`
  }

  const structuredDegree: StructuredDegree = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courses.map((course, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        url: course.course.group?.invite_link ?? "Link del gruppo non disponibile",
        name: buildStructuredName(course),
        description: buildStructuredDescription(course),
        provider: {
          "@type": "Organization",
          name: "Università degli Studi di Milano",
          sameAs: "https://www.unimi.it/it",
        },
      },
    })),
  }

  if (!loadedDegree) {
    return (
      <>
        <NextSeo
          title={locale?.helmet.notFound.title}
          description={locale?.helmet.notFound.description}
          canonical={reactHelmetContent.href}
          openGraph={{
            url: reactHelmetContent.href,
            title: locale?.helmet.notFound.title,
            description: locale?.helmet.notFound.description,
            site_name: "Network StudentiUniMi",
            type: "website",
            locale: language,
            images: [
              {
                url: "/seo/not-found.png",
                type: "image/png",
              },
            ],
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
        <FourOhFour />
      </>
    )
  }

  if (errorLoadingDegree) {
    return <FiveHundred />
  }

  return (
    <>
      <NextSeo
        title={reactHelmetContent.title}
        description={reactHelmetContent.description}
        canonical={reactHelmetContent.href}
        openGraph={{
          url: reactHelmetContent.href,
          title: reactHelmetContent.title,
          description: reactHelmetContent.description,
          site_name: "Network StudentiUniMi",
          type: "website",
          locale: language,
          images: [
            {
              url: "/seo/courses.png",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <section className="degree">
        <div className="degree-title pt-4 pb-4">
          <Container>
            <div className="d-flex flex-row courses-title-content" style={{ gap: 20 }}>
              <div className="d-flex flex-column" style={{ gap: 10 }}>
                <div className="d-flex flex-row degree-buttons-menu" style={{ gap: 8 }}>
                  <TooltipHost
                    content={locale?.courses.degree.goBack}
                    calloutProps={{ gapSpace: 6 }}
                    delay={TooltipDelay.zero}
                    id={"0"}
                    directionalHint={DirectionalHint.bottomCenter}
                  >
                    <DefaultButton
                      onClick={() => {
                        router.push("/courses")
                      }}
                      iconProps={goBackButtonIconProps}
                      style={{ minWidth: 40, marginTop: 5 }}
                    />
                  </TooltipHost>

                  <TooltipHost
                    content={locale?.courses.degree.share}
                    calloutProps={{ gapSpace: 6 }}
                    delay={TooltipDelay.zero}
                    id={"0"}
                    directionalHint={DirectionalHint.bottomCenter}
                  >
                    <DefaultButton onClick={() => copyUrlToDashboard()} iconProps={shareLinkButtonIconProps} style={{ minWidth: 40, marginTop: 5 }} />
                  </TooltipHost>
                </div>

                <Text variant="medium" styles={semibold} style={{ color: theme.palette.themePrimary }}>
                  <Chip
                    label={getDegreeFullName(loadedDegree?.type!, language!)}
                    theme={theme}
                    size="small"
                    outlined
                    textColor={theme.palette.neutralPrimary}
                    className="mr-1"
                  />
                </Text>
              </div>

              <div className="d-flex align-items-center">
                <h1>
                  <Text variant="xLargePlus" style={{ lineHeight: 1.3 }}>
                    {locale?.courses.degree.title}
                  </Text>
                  <br />
                  <Text variant="superLarge" style={{ lineHeight: 1.3, fontWeight: 700, color: theme.palette.themeDarkAlt }}>
                    {loadedDegree?.name}
                  </Text>
                </h1>
              </div>
            </div>
          </Container>
        </div>

        <div className="degree-details">
          <GroupList degree={loadedDegree!} courses={courses} errorLoadingCourses={errorLoadingCourses} />

          {/* TODO: When we'll have this info retrieved via API we'll be able to show this component */}
          {/*(<DegreeInformations
                        degreeInformations={degreeInformations}
                    />*/}

          <AdminsList admins={admins} errorLoadingAdmins={errorLoadingAdmins} />

          {representatives.length > 0 && (
            <RepresentativesList representatives={representatives} errorLoadingRepresentatives={errorLoadingRepresentatives} />
          )}
        </div>

        {/* Structured data */}
        <script type="application/ld+json" id="structured-degree">
          {JSON.stringify(structuredDegree)}
        </script>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let errors = {
    degree: false,
    courses: false,
    admins: false,
    representatives: false,
    informations: false,
  }

  const degreeSlug = params!.slug as unknown as string

  // Handle underscore old slugs
  const [fixedSlug, hasReplaced] = replaceUnderscore(degreeSlug)

  if (hasReplaced) {
    return {
      redirect: {
        destination: `/courses/${fixedSlug}`,
        permanent: false,
      },
    }
  }

  let degreeResult = await getVerboseDegreeBySlug(degreeSlug)
  if (degreeResult.error) errors.degree = true

  const degreeKey = degreeResult.value?.pk as unknown as string
  const departmentKey = degreeResult.value?.department.pk as unknown as string

  const teachingCoursesResult = await getCourses(degreeKey)
  if (teachingCoursesResult.error) errors.courses = true

  let adminsResult = await getDegreeAdmins(degreeSlug)
  if (adminsResult.error) errors.admins = true

  let representativesResult = await getRepresentatives(departmentKey)

  if (representativesResult.error) errors.representatives = true

  let degreeInformations = getDegreeInformations(degreeSlug)

  // Add Main Group to the loaded degree
  let degree = degreeResult.value
  if (degree?.group !== null && degree?.group.invite_link !== "" && degree?.group.invite_link !== null) {
    let mainDegreeGroup: CourseDegree = {
      course: {
        pk: 0,
        name: "Gruppo principale",
        cfu: 0,
        wiki_link: null,
        links: [],
        group: {
          id: degree?.group.id!,
          title: degree?.group.title!,
          profile_picture: degree?.group.profile_picture!,
          invite_link: degree?.group.invite_link!,
        },
        professor: null,
      },
      year: -1,
      semester: 0,
    }

    teachingCoursesResult.value?.unshift(mainDegreeGroup)
  }

  return {
    props: {
      loadedDegree: degreeResult.value ?? null,
      courses: teachingCoursesResult.value ?? [],
      informations: degreeInformations,
      admins: adminsResult.value ?? [],
      representatives: representativesResult.value ?? [],
      errors: errors,
    },
  }
}

const replaceUnderscore = (str: string): [string, boolean] => {
  const replaced = str.replace(/_/g, "-")
  return [replaced, replaced !== str]
}

export default Course
