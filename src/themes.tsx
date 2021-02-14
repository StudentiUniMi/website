import { FontSizes } from '@fluentui/theme';
import { FontWeights } from 'office-ui-fabric-react';

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
        black: '#000000',
        white: '#faf9f8',
    },
    defaultFontStyle: { fontWeight: FontWeights.regular },
    fonts: {
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
            fontSize: FontSizes.size42
        },
    }
};

export const darkTheme = {
    palette: {
        themePrimary: '#c8cacc',
        themeLighterAlt: '#fdfdfd',
        themeLighter: '#f6f6f7',
        themeLight: '#eeeff0',
        themeTertiary: '#dedfe0',
        themeSecondary: '#ced1d2',
        themeDarkAlt: '#b4b6b8',
        themeDark: '#989a9b',
        themeDarker: '#707172',
        neutralLighterAlt: '#262525',
        neutralLighter: '#2f2e2e',
        neutralLight: '#3d3c3c',
        neutralQuaternaryAlt: '#464545',
        neutralQuaternary: '#4d4c4c',
        neutralTertiaryAlt: '#6b6a6a',
        neutralTertiary: '#e9e9e9',
        neutralSecondary: '#ececec',
        neutralPrimaryAlt: '#f0f0f0',
        neutralPrimary: '#dedede',
        neutralDark: '#f7f7f7',
        black: '#fbfbfb',
        white: '#1c1b1b'
    }
};