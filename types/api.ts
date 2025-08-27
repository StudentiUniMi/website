/**
 * Updated models to support API responses.
 */
import { DegreeType, GroupCategory, LocalizedField } from "."

export interface Department {
  pk: number
  name: string
  icon?: string
  slug: string
  degree_count: number
  representative_count: number
}

export interface Degree {
  pk: number
  name: string
  icon?: string
  type: string
  group: Group
  slug: string
}

export interface CourseDegree {
  course: Course
  year: number
  semester: number
}

export interface Representative {
  user: User
  degree_name: string
}

/* This is a model created just to retrieve degree and department when visiting for example courses/triennale_informatica and initialize the component. */
export interface VerboseDegree {
  pk: number
  name: string
  type: DegreeType
  group: Group
  slug: string
  department: Department
}

export interface Course {
  pk: number
  name: string
  cfu: number
  wiki_link: string | null
  links: Array<Website>
  group: Group | null
  professor: Professor | null
}

export interface User {
  id: number
  first_name: string
  last_name: string
  username: string
}

export interface Group {
  id: number
  title: string
  profile_picture: string
  invite_link: string
}

export interface ExtraGroup extends Group {
  name: LocalizedField
  description: LocalizedField
  user_count: number
  button_name: LocalizedField | null
  image_url: string | null
  external_url: string
  category: GroupCategory
}

export interface ExtraGroups {
  university_groups: Array<ExtraGroup>
  announcement_groups: Array<ExtraGroup>
  student_associations: Array<ExtraGroup>
}

export interface Website {
  name: string
  url: string
}

export interface Admin {
  id: number
  first_name: string
  last_name: string
  username: string
}

export interface Professor {
  first_name: string
  last_name: string
  url: string
}
