interface ILocalizationStrings {
    helmet: {
        homepage: { title: string, description: string },
        courses: { title: string, description: string },
        services: { title: string, description: string },
        rules: { title: string, description: string },
        university: { title: string, description: string },
        organization: { title: string, description: string },
        degreeLoaded: { title1: string, title2: string, description1: string, description2: string }
    },
    serverError: string,
    telegramGroup: string,
    loading: string,
    additionalInformations: string,
    noDataAvailable: string,
    errorDataLoading: string,
    errorOccured: string,
    errorLoadingDepartments: string,
    errorLoadingDegrees: string,
    noRedirectsAvailable: string,
    errorContactAdmin: string,
    studentsAssociation: string,
    headerMenuItems: {
        home: string,
        courses: string,
        services: string,
        aboutUs: string,
        rules: string,
        university: string
    },
    settingsPanel: {
        joinTelegram: string,
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
        telegramText: string,
        telegramButton: string,
        section1: {
            typedText: string,
            text1: string,
            text2: string,
        },
        section2: {
            text1: string,
            text2: string,
            buttonText: string
        },
        section3: {
            header: string,
            part1: {
                title: string,
                description: string,
                buttonText: string
            },
            part2: {
                title: string,
                description: string,
                buttonText: string
            },
            part3: {
                title: string,
                description: string,
                buttonText: string
            },
        },
        unimiaSection: {
            text1: string,
            text2: string,
            text3: string,
            buttonText: string
        },
        wikipediaSection: {
            text1: string,
            text2: string,
            text3: string,
            buttonText: string
        },
        additionalServicesSection: { 
            header: string,
            col1: {
                text: string,
                buttonText: string
            },
            col2: {
                text: string,
                buttonText: string
            },
            col3: {
                text: string,
                buttonText: string
            },
        },
        adminsRepresentativesSection: {
            header: string,
            col1: { title: string, description: string, buttonText: string },
            col2: { title: string, description: string, buttonText: string }
        }, 
        faqsSection: {
            header: string,
            description: string
        },
        telegramSection: {
            title: string,
            description: string,
            advantages: string,
            list: any[]
        }
    },
    groups: {
        resetSection: string,
        filtersToggle: string,
        findDegreeByName: string,
        groupsSection: {
            text1: string,
            text2: string,
            text3: string
        },
        extraGroupsSection: {
            text1: string,
            text2: string,
            text3: string
        },
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
        tutorsGroupDescription: string,
        groupNotAvailable: string,
        contactAdmin: string,
        groupsNotFound: string,
        adminsNotFound: string,
        wikiCard: {
            clickToWiki: string,
            buttonTitle: string,
            title: string,
            description: string,
            type: string,
            date: string
        }
    },
    services: {
        text1: string,
        text2: string,
        text3: string,
        availableServices: string,
        guide: string,
        service: string,
        legend: string
    },
    rules: {
        text1: string,
        text2: string,
        text3: string,
        question: string,
        answer: { text1: string, text2: string },
        header: string
    },
    extraGroups: {
        text1: string,
        text2: string,
        text3: string,
        mug: string,
        availableGroups: string,
        extraGroup: string
    },
    university: {
        header: {
            text1: string,
            text2: string
        },
        linksAndRedirects: {
            text1: string, 
            text2: string
        },
        text1: string,
        text2: string,
        departmentSelect: string,
        representativesNotAvailable: string,
        news: {
            title: string,
        },
    },
    aboutUs: {
        text1: string,
        text2: string,
        text3: string,
        button: { text1: string, text2: string },
        header1: string,
        header2: string,
        header3: string
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
        { text: string, buttonText: string },
        { header: string },
        { header: string, text: string },
    ]
}

export default ILocalizationStrings