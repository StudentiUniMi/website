import { FontSizes } from '@fluentui/theme';
import { FontWeights } from 'office-ui-fabric-react';
import { DefaultEffects } from '@fluentui/react';

export const fonts = {
    defaultFontStyle: { /*fontFamily: 'Monaco, Menlo, Consolas',*/ fontWeight: FontWeights.regular },
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
}

export const lightTheme = {
    palette: {
        themePrimary: '#0481e0',
        themeLighterAlt: '#f4f9fe',
        themeLighter: '#d3e9fa',
        themeLight: '#aed7f6',
        themeTertiary: '#61b0ed',
        themeSecondary: '#1f8fe4',
        themeDarkAlt: '#0474ca',
        themeDark: '#0362ab',
        themeDarker: '#03487e',
        neutralLighterAlt: '#f3f2f1',
        neutralLighter: '#efeeed',
        neutralLight: '#e5e4e3',
        neutralQuaternaryAlt: '#d6d5d4',
        neutralQuaternary: '#cccbca',
        neutralTertiaryAlt: '#c4c3c2',
        neutralTertiary: '#a19f9d',
        neutralSecondary: '#605e5c',
        neutralPrimaryAlt: '#3b3a39',
        neutralPrimary: '#323130',
        neutralDark: '#201f1e',
        black: '#1d1d1d',
        white: '#faf9f8'
    },
    fonts: fonts
};

export const darkTheme = {
    palette: {
        themePrimary: '#0894ff',
        themeLighterAlt: '#eff6fc',
        themeLighter: '#deecf9',
        themeLight: '#c7e0f4',
        themeTertiary: '#71afe5',
        themeSecondary: '#2b88d8',
        themeDarkAlt: '#106ebe',
        themeDark: '#005a9e',
        themeDarker: '#004578',
        neutralLighterAlt: '#323232',
        neutralLighter: '#3a3a3a',
        neutralLight: '#484747',
        neutralQuaternaryAlt: '#505050',
        neutralQuaternary: '#575656',
        neutralTertiaryAlt: '#747373',
        neutralTertiary: '#a4a2a1',
        neutralSecondary: '#898886',
        neutralPrimaryAlt: '#6e6d6c',
        neutralPrimary: '#f5f2f0', // used for text
        neutralDark: '#dbdbdb',
        black: '#faf9f8', 
        white: '#292828', // main background
    },
    fonts: fonts
};