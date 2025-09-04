export type SupportedLocales = "it" | "en"

export type LocalizedField = Record<SupportedLocales, string>

export type GroupCategory = "university" | "announcements" | "association"

/**
 * Enum representing available degree types.
 */
export enum DegreeType {
  /** Bachelor's degree (laurea triennale). */
  BACHELOR = "B",
  /** Master's degree (laurea magistrale). */
  MASTER = "M",
  /** Single-cycle master's degree (laurea magistrale a ciclo unico). */
  SINGLE_CYCLE_MASTER = "C",
}

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
