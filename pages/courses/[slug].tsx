import { GetServerSideProps } from "next"
import { getVerboseDegreeBySlug } from "@/lib/api/degrees"
import { getCourses } from "@/lib/api/courses"
import { getDegreeAdmins } from "@/lib/api/admins"
import { getRepresentatives } from "@/lib/api/representatives"
import { Group, Representative, Admin, CourseDegree, VerboseDegree } from "@/types"

interface CoursePageProps {
  degree: VerboseDegree | null
  courses: Array<CourseDegree>
  admins: Array<Admin>
  representatives: Array<Representative>
  mainGroup: Group | null
}

const CoursePage = ({ degree, courses, admins, representatives, mainGroup }: CoursePageProps) => {
  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">{degree?.name ?? "Corso non trovato"}</h1>

      {/* Main Group */}
      {mainGroup && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Gruppo principale</h2>
          <a href={mainGroup.invite_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {mainGroup.title}
          </a>
        </section>
      )}

      {/* Corsi */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Corsi</h2>
        {courses.length === 0 ? (
          <p>Nessun corso disponibile</p>
        ) : (
          <ul className="list-disc ml-6">
            {courses.map((c) => (
              <li key={c.course.pk}>{c.course.name}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Admins */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Admins</h2>
        {admins.length === 0 ? (
          <p>Nessun admin disponibile</p>
        ) : (
          <ul className="list-disc ml-6">
            {admins.map((a) => (
              <li key={a.username}>{a.id}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Rappresentanti */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Rappresentanti</h2>
        {representatives.length === 0 ? (
          <p>Nessun rappresentante disponibile</p>
        ) : (
          <ul className="list-disc ml-6">
            {representatives.map((r) => (
              <li key={r.degree_name}>{r.user.username}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

const replaceUnderscore = (str: string): [string, boolean] => {
  const replaced = str.replace(/_/g, "-")
  return [replaced, replaced !== str]
}

export const getServerSideProps: GetServerSideProps<CoursePageProps> = async ({ params }) => {
  const degreeSlug = params!.slug as string

  // 🔄 Redirect se slug ha underscore
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
  const degree = degreeResult.value ?? null

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
      degree,
      courses: teachingCoursesResult.value ?? [],
      admins: adminsResult.value ?? [],
      representatives: representativesResult.value ?? [],
      mainGroup,
    },
  }
}

export default CoursePage
