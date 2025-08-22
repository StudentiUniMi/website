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
