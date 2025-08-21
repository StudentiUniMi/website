import { DefaultEffects, FontWeights, FontSizes, PartialTheme } from "@fluentui/react"
import { palettes } from "./Palettes"

export const fonts = {
  defaultFontStyle: {
    fontFamily: "Segoe UI",
    fontWeight: FontWeights.regular,
    fontDisplay: "swap",
  },
  small: {
    fontSize: FontSizes.size12,
  },
  medium: {
    fontSize: FontSizes.size14,
  },
  large: {
    fontSize: FontSizes.size20,
  },
  xLarge: {
    fontSize: FontSizes.size24,
  },
  xLargePlus: {
    fontSize: FontSizes.size32,
  },
  superLarge: {
    fontSize: FontSizes.size42,
  },
}

export const effects = {
  elevation4: DefaultEffects.elevation4,
  elevation8: DefaultEffects.elevation8,
  elevation16: DefaultEffects.elevation16,
  elevation64: DefaultEffects.elevation64,
}

/**
 * This function returns lightTheme with palette based on paletteID.
 * @param {string} paletteID
 * @return lightTheme
 */
export const buildLightTheme = (paletteID: string): PartialTheme => {
  const subsetPalette: any = palettes.find((x) => x.id === paletteID)?.palette

  let lightTheme: any = {
    palette: {
      neutralLighterAlt: "#f3f2f1",
      neutralLighter: "#efeeed",
      neutralLight: "#e5e4e3",
      neutralQuaternaryAlt: "#e3e2e1",
      neutralQuaternary: "#cccbca",
      neutralTertiaryAlt: "#c4c3c2",
      neutralTertiary: "#a19f9d",
      neutralSecondary: "#616161",
      neutralPrimaryAlt: "#3b3a39",
      neutralPrimary: "#323130",
      neutralDark: "#201f1e",
      black: "#1d1d1d",
      white: "#faf9f8",
    },
    fonts: fonts,
  }

  for (var x in subsetPalette) {
    lightTheme.palette[x] = subsetPalette[x]
  }

  return lightTheme
}

/**
 * This function returns darkTheme with palette based on paletteID.
 * @param {string} paletteID
 * @return darkTheme
 */
export const buildDarkTheme = (paletteID: string): PartialTheme => {
  const subsetPalette: any = palettes.find((x) => x.id === paletteID)?.palette

  let darkTheme: any = {
    palette: {
      subsetPalette,
      neutralLighterAlt: "#323232",
      neutralLighter: "#3a3a3a",
      neutralLight: "#484747",
      neutralQuaternaryAlt: "#505050",
      neutralQuaternary: "#575656",
      neutralTertiaryAlt: "#747373",
      neutralTertiary: "#a4a2a1",
      neutralSecondary: "#d6d6d6",
      neutralPrimaryAlt: "#6e6d6c",
      neutralPrimary: "#f5f2f0",
      neutralDark: "#dbdbdb",
      black: "#faf9f8",
      white: "#292828",
    },
    fonts: fonts,
  }

  for (var x in subsetPalette) {
    darkTheme.palette[x] = subsetPalette[x]
  }

  return darkTheme
}
