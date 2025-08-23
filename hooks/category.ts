import { useColorModeValue } from "@chakra-ui/react"
import { GroupCategory } from "@/types"

export const categoryColors: Record<GroupCategory, { light: string; dark: string }> = {
  university: { light: "gray.100", dark: "gray.700" },
  announcements: { light: "yellow.400", dark: "yellow.600" },
  association: { light: "teal.200", dark: "teal.600" },
}

export const categoryLabels: Record<GroupCategory, { it: string; en: string }> = {
  university: {
    it: "Universitario",
    en: "University",
  },
  announcements: {
    it: "Annunci",
    en: "Announcements",
  },
  association: {
    it: "Associazione",
    en: "Association",
  },
}

const categoryTagColors: Record<GroupCategory, { light: { bg: string; text: string }; dark: { bg: string; text: string } }> = {
  university: {
    light: { bg: "gray.200", text: "blue.800" },
    dark: { bg: "blue.700", text: "blue.100" },
  },
  announcements: {
    light: { bg: "yellow.200", text: "yellow.800" },
    dark: { bg: "yellow.700", text: "yellow.100" },
  },
  association: {
    light: { bg: "teal.100", text: "teal.800" },
    dark: { bg: "teal.700", text: "teal.100" },
  },
}

// Hook di utilità per prendere i colori del tag in base al tema
export const useCategoryTagColors = (category: GroupCategory) => {
  const colors = categoryTagColors[category]
  return {
    bg: useColorModeValue(colors.light.bg, colors.dark.bg),
    text: useColorModeValue(colors.light.text, colors.dark.text),
  }
}
