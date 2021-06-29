interface ILocalizationStrings
{
    telegramGroup: string,
    headerMenuItems: {
        home: string,
        aboutUs: string,
        rules: string,
        courses: string,
        services: string,
        additionalGroups: string,
        representatives: string,
        contributors: string
    },
    settingsPanel: {
        settings: string,
        changeTheme: string,
        darkTheme: string,
        lightTheme: string,
        selectLanguage: string,
        italian: string,
        english: string
    },
    homepage: {
        section1: {
            text1: string,
            text2: string,
            sliders: [
                { text1: string, text2: string, cardText: string },
                { text: string, reachWiki: string },
                { text: string }
            ]
        },
        section2: {
            text: string,
            card1: {
                text: string,
                button: string
            },
            card2: {
                text: string,
                button: string
            },
            card3: {
                text: string,
                button: string
            },
            card4: {
                text: string,
                button: string
            }
        },
        section3: {
            text: string,
            card1: {
                text: string,
                button: string
            },
            card2: {
                text: string,
                button: string
            },
            card3: {
                text: string,
                button: string
            }
        },
        section4: {
            text: string,
            card1: {
                text: string,
                button: string
            },
            card2: {
                text: string,
                button: string
            },
            card3: {
                text: string,
                button: string
            },
            card4: {
                text: string,
                button: string
            }
        },
        section5: {
            text: string,
            card1: {
                text: string,
                button: string
            },
            card2: {
                text: string,
                button: string
            }
        }
    },
    aboutUs: {
        text1: string,
        text2: string,
        text3: string,
        header1: string,
        header2: string,
        header3: string,
        discordManager: string
    },
    rules: {
        text1: string,
        question: string,
        answer: string,
        text2: string,
        text3: string,
        section: string,
        rules1: {
            sectionName: string,
            rules: {[index: number]: string}
        },
        rules2: {
            sectionName: string,
            rules: {[index: number]: string}
        },
        rules3: {
            sectionName: string,
            rules: {[index: number]: string}
        },
        rules4: {
            sectionName: string,
            rules: {[index: number]: string}
        }
    },
    courses: {
        text1: string,
        text2: string,
        departmentSelect: string,
        cdlSelect: string,
        cdlWebsite: string,
        manifest: string,
        vc: string,
        availableGroups: string,
        nameFilter: string,
        yearFilter: string,
        semesterFilter: string,
        year: string,
        semester: string,
        telegramGroup: string,
        website: string,
        notices: string
    },
    services: {
        text1: string,
        text2: string,
        availableServices: string,
        card1: { header: string, text: string },
        card2: { header: string, text: string },
        card3: { header: string, text: string },
        card4: { header: string, text: string },
        card5: { header: string, text: string },
        card6: { header: string, text: string },
        card7: { header: string, text: string },
        card8: { header: string, text: string },
        card9: { header: string, text: string },
    },
    extraGroups: {
        text1: string,
        text2: string,
        availableGroups: string
    },
    representatives: {
        text1: string,
        text2: string,
        departmentSelect: string
    },
    contributors: {
        text1:string,
        header1: string,
        header2: string,
        dev1: string,
        dev2: string,
        dev3: string,
        githubProfile: string,
        websiteProfile: string,
        text2: string
    }
    footer: {
        [index: number]: {
            text:string,
            header: string,
        }
    }
}

export default ILocalizationStrings