/**
 * utils.ts
 *
 * Additional functions and utilities.
 * @author Giuseppe Del Campo
 */

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface cookiesContent {
  language: string | null
  theme: boolean | null
  palette: string | null
}

/**
 * This function checks the header language.
 * @param {string} lang header language
 * @returns {boolean} returns true if the language is italian, false otherwise.
 */
export const isNavigatorLanguageItalian = (lang: string): boolean => {
  if (lang === undefined) return true
  const langKey = lang.split(",")[0]

  if (langKey === "it") return true
  return false
}

/**
 * This function parses the header cookie string.
 * @param cookies header cookie string
 * @returns {cookiesContent} builded object
 */
export const parseCookies = (cookies: string): cookiesContent => {
  let result: cookiesContent = { language: "it", theme: false, palette: "a" }
  if (cookies === undefined) return result

  let temp = cookies.replace(/\s/g, "")
  temp = temp.replace(/;/g, "&")

  const params = new URLSearchParams(temp)

  result = { language: params.get("language"), theme: params.get("theme") === "light" ? false : true, palette: params.get("palette") }

  return result
}

/**
 * This function builds a generic name for type of degree (corso di laurea triennale, magistrale etc.)
 * @param {string} type
 * @param {string} language
 * @returns Stringified generic cdl name
 */
export const getDegreeFullName = (type: string, language: string): string => {
  switch (type) {
    case "B":
      return language === "it" ? "Corso di laurea triennale" : "Bachelor's degree"
    case "M":
      return language === "it" ? "Corso di laurea magistrale" : "Master's degree"
    case "C":
      return language === "it" ? "Corso di laurea magistrale a ciclo unico" : "Single-cycle master's degree"
  }
  return ""
}

/**
 * This function returns a professor name in "F. Lastname" format.
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string} professor name in F. Lastname format
 */
export const buildProfessorName = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`
}

/**
 * Prevents default button behaviour for href.
 * @param e event
 * @param {boolean} isPolicyAccepted
 * @returns true if the default behaviour has been prevented, false otherwise.
 */
export const preventDefault = (e: any, isPolicyAccepted: boolean = false) => {
  if (!isPolicyAccepted) {
    e.preventDefault()
    return true
  }
  return false
}

/**
 * Prevents href to be visible in case of not accepted policy.
 * @param {boolean} isPolicyAccepted
 * @param {string} href
 * @returns href if the policy is accepted, undefined otherwise.
 */
export const preventVisibleHref = (isPolicyAccepted: boolean = false, href: string) => {
  if (!isPolicyAccepted) return undefined
  return href
}

/**
 * Function to adapt users_count (example: 5131 users => 5100+ users)
 * @param {number} num
 * @returns {number} result
 */
export const formatLowerNumber = (num: number): number => {
  const mult = Math.pow(10, Math.floor(Math.log10(num)))
  return Math.floor(num / mult) * mult
}

export const redirectToLink = (link: string): void => {
  window.open(link, "_blank")
}

export const addDays = (date: Date, days: number): Date => {
  var result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}
