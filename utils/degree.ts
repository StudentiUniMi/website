export const getYearColor = (year: number, isDark: boolean) => {
  if (year === -2) {
    return isDark ? "gray.600" : "gray.200"
  }

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
