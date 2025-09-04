import { DegreeType } from "@/types"
import { useMemo } from "react"

const degreeLabels = {
  it: {
    [DegreeType.BACHELOR]: "Triennale",
    [DegreeType.MASTER]: "Magistrale",
    [DegreeType.SINGLE_CYCLE_MASTER]: "Magistrale a ciclo unico",
  },
  en: {
    [DegreeType.BACHELOR]: "Bachelor's Degree",
    [DegreeType.MASTER]: "Master's Degree",
    [DegreeType.SINGLE_CYCLE_MASTER]: "Single-cycle Master's Degree",
  },
}

const degreeFullNames = {
  it: {
    [DegreeType.BACHELOR]: "Corso di laurea triennale",
    [DegreeType.MASTER]: "Corso di laurea magistrale",
    [DegreeType.SINGLE_CYCLE_MASTER]: "Corso di laurea magistrale a ciclo unico",
  },
  en: {
    [DegreeType.BACHELOR]: "Bachelor's degree",
    [DegreeType.MASTER]: "Master's degree",
    [DegreeType.SINGLE_CYCLE_MASTER]: "Single-cycle master's degree",
  },
}

const degreeColors = {
  [DegreeType.BACHELOR]: "blue",
  [DegreeType.MASTER]: "green",
  [DegreeType.SINGLE_CYCLE_MASTER]: "orange",
}

/**
 * @name useDegree
 * React hook to retrieve human-readable information about a degree type.
 *
 * @param type - Degree type (`B`, `M`, or `C`).
 * @param language - Output language (`it` or `en`).
 * @returns An object containing:
 * - `label`: Short degree label (e.g., "Triennale", "Bachelor's Degree").
 * - `fullName`: Full degree description (e.g., "Corso di laurea triennale").
 * - `color`: Associated color scheme keyword (e.g., "blue", "green").
 *
 * @example
 * ```tsx
 * const { label, fullName, color } = useDegree(DegreeType.BACHELOR, "it")
 * console.log(label)    // "Triennale"
 * console.log(fullName) // "Corso di laurea triennale"
 * console.log(color)    // "blue"
 * ```
 */
export function useDegree(type: DegreeType, language: "it" | "en") {
  return useMemo(() => {
    return {
      label: degreeLabels[language][type],
      fullName: degreeFullNames[language][type],
      color: degreeColors[type],
    }
  }, [type, language])
}
