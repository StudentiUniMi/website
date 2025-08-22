import { DegreeType } from "@/types"
import { Degree } from "@/types/api"

export function getDegreeLabel(degree: Degree, language: "it" | "en"): string {
  switch (degree.type) {
    case "B":
      return language === "it" ? "Triennale" : "Bachelor's Degree"
    case "M":
      return language === "it" ? "Magistrale" : "Master's Degree"
    case "C":
      return language === "it" ? "Magistrale a ciclo unico" : "Single-cycle Master's Degree"
    default:
      return ""
  }
}

/**
 * This function builds a generic name for type of degree (corso di laurea triennale, magistrale etc.)
 * @param {DegreeType} type
 * @param {string} language
 * @returns {string} Stringified generic cdl name
 */
export const getDegreeFullName = (type: DegreeType, language: string): string => {
  switch (type) {
    case "B":
      return language === "it" ? "Corso di laurea triennale" : "Bachelor's degree"
    case "M":
      return language === "it" ? "Corso di laurea magistrale" : "Master's degree"
    case "C":
      return language === "it" ? "Corso di laurea magistrale a ciclo unico" : "Single-cycle master's degree"
  }
}

export const getDegreeColorScheme = (type: DegreeType): string => {
  switch (type) {
    case "B":
      return "blue"
    case "M":
      return "green"
    case "C":
      return "orange"
  }
}

export const getYearColor = (year: number, isDark: boolean) => {
  const y = Math.min(10, Math.max(1, year))

  const lightPalette = [
    "blue.50", // 1
    "yellow.100", // 2
    "orange.100", // 3
    "orange.200", // 4
    "red.100", // 5
    "red.200", // 6
    "red.300", // 7
  ]

  const darkPalette = [
    "blue.900", // 1
    "yellow.800", // 2
    "orange.700", // 3
    "orange.800", // 4
    "red.700", // 5
    "red.800", // 6
    "red.900", // 7
  ]

  return isDark ? darkPalette[y - 1] : lightPalette[y - 1]
}
