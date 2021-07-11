import { FontSizes } from '@fluentui/theme';
import { FontWeights } from 'office-ui-fabric-react';
import { DefaultEffects } from '@fluentui/react';
import { palettes } from './palettes';

/**
 * This function returns lightTheme and darkTheme with palette based on paletteID.
 * @param {string} paletteID 
 * @return lightTheme, darkTheme
 */
export const ThemesInizialization = (paletteID: string) => {
    const subsetPalette: any = palettes.find(x => x.id === paletteID)?.palette;
    let lightTheme:any, darkTheme:any, x;

    lightTheme = {
        palette: {
            neutralLighterAlt: '#f3f2f1',
            neutralLighter: '#efeeed',
            neutralLight: '#e5e4e3',
            neutralQuaternaryAlt: '#e3e2e1',
            neutralQuaternary: '#cccbca',
            neutralTertiaryAlt: '#c4c3c2',
            neutralTertiary: '#a19f9d',
            neutralSecondary: '#616161',
            neutralPrimaryAlt: '#3b3a39',
            neutralPrimary: '#323130',
            neutralDark: '#201f1e',
            black: '#1d1d1d',
            white: '#faf9f8'
        },
        fonts: fonts
    };


    for (x in subsetPalette) { lightTheme.palette[x] = subsetPalette[x]; };


    darkTheme = {
        palette: {
            subsetPalette,
            neutralLighterAlt: '#323232',
            neutralLighter: '#3a3a3a',
            neutralLight: '#484747',
            neutralQuaternaryAlt: '#505050',
            neutralQuaternary: '#575656',
            neutralTertiaryAlt: '#747373',
            neutralTertiary: '#a4a2a1',
            neutralSecondary: '#d6d6d6',
            neutralPrimaryAlt: '#6e6d6c',
            neutralPrimary: '#f5f2f0', // used for text
            neutralDark: '#dbdbdb',
            black: '#faf9f8',
            white: '#292828', // main background
        },
        fonts: fonts
    };

    for (x in subsetPalette) { darkTheme.palette[x] = subsetPalette[x]; };

    return [lightTheme, darkTheme];
}

export const fonts = {
    defaultFontStyle: { fontFamily: 'Monaco, Menlo, Consolas', fontWeight: FontWeights.regular },
    small: {
        fontSize: FontSizes.size12
    },
    medium: {
        fontSize: FontSizes.size14
    },
    large: {
        fontSize: FontSizes.size20
    },
    xLarge: {
        fontSize: FontSizes.size24
    },
    xLargePlus: {
        fontSize: FontSizes.size32
    },
    superLarge: {
        fontSize: FontSizes.size42
    } 
};

export const effects = {
    elevation8: DefaultEffects.elevation8
};