interface ILocalizationStrings {
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
        english: string,
        selectColor: string,
        close: string,
        coachMark: { text1: string, text2: string, understood: string }
    },
    homepage: {
        section1: {
            text1: string,
            text2: string,
            sliders: [
                { text1: string, text2: string, cardText: string },
                { text1: string, text2: string, cardText: string },
                { text1: string, text2: string, cardText: string },
                { text1: string, text2: string, cardText: string },
                { text1: string, reachWiki: string },
                { text1: string }
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
        },
        section6: { text: string },
        section7: {
            text: string,
            card1: { text1: string, text2: string },
            card2: { text1: string, text2: string },
            card3: { text1: string, text2: string },
        }, 
        vaccineSection: {
            title: string,
            card1: {
                title: string,
                description: string,
            },
            card2: {
                title: string,
                description: string
            },
            click: string,
            news: string
        },
        telegramSection: {
            title: string,
            description: string,
            advantages: string,
            list: any[]
        }
    },
    aboutUs: {
        text1: string,
        button: { text1: string, text2: string },
        header1: string,
        header2: string,
        header3: string
    },
    rules: {
        text1: string,
        question: string,
        answer: { text1: string, text2: string },
        text2: string
    },
    courses: {
        text1: string,
        text2: string,
        departmentSelect: string,
        cdlSelect: string,
        availableRedirects: string,
        availableGroups: string,
        availableAdmins: string,
        nameFilter: string,
        yearFilter: string,
        semesterFilter: string,
        year: string,
        semester: string,
        complementary: string,
        websites: string,
        mainGroup: string,
        mainGroupDescription: string,
        groupNotAvailable: string,
        contactAdmin: string,
        groupsNotFound: string,
        adminsNotFound: string
    },
    services: {
        text1: string,
        text2: string,
        text3: string,
        availableServices: string
    },
    extraGroups: {
        text1: string,
        text2: string,
        text3: string,
        mug: string,
        availableGroups: string,
        extraGroup: string
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
        githubProfile: string,
        websiteProfile: string,
        text2: string,
    },
    footer: [
        { text: string },
        { header: string },
        { header: string, text: string },
    ]
}

export default ILocalizationStrings