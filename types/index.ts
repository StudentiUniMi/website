export type SupportedLocales = "it" | "en"

export type LocalizedField = Record<SupportedLocales, string>

export type GroupCategory = "university" | "announcements" | "association"

export type DegreeType = "B" | "M" | "C"

export type ServiceCategory = "guide" | "redirect" | "tool"

export interface Service {
  id: string
  category: ServiceCategory
  image?: string
  name: LocalizedField
  description: LocalizedField
  link: string
}

export interface TeamMember {
  user_id: number
  username: string
  name: string
  description: LocalizedField
  href?: string
}
