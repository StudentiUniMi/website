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
    reach: string,
    findOut: string,
    privacyPolicy: {
        title: string,
        subtitle: string,
        description: string,
        privacyPolicy: string,
        regulation: string,
        checkboxDescription: string,
        read: {
            it: string,
            en: string
        },
        refuse: string,
        accept: string
    },
    sidebar: {
        mainGroup: string,
        channel: string,
        redirects: string,
        searchGroup: string
    }
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
            title: string,
            cards: {
                card1: { title: string, description: string },
                card2: { title: string, description: string },
                card3: { title: string, description: string },
            }
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
        selectSubSection: string,
        availableServices: string,
        tabs: {
            redirects: string,
            guides: string,
            tools: string
        },
        tabsTitle: {
            redirects: string,
            guides: string,
            tools: string
        },
        guide: string,
        service: string,
        legend: string
    },
    rules: {
        text1: string,
        text2: string,
        rules: {
            title: string,
            toxicBehaviour: {
                title: string,
                description: string
            },
            chatInteraction: {
                title: string,
                description: string,
                list: Array<string>
            },
            spam: {
                title: string,
                description1: string,
                list1: Array<string>,
                description2: string,
                list2: Array<string>,
                description3: string
            },
            sharedContent: {
                title: string,
                description: string
            },
            offTopic: {
                title: string,
                description: string
            }
        },
        measures: {
            title: string,
            description1: string,
            description2: string,
            description3: string,
            countermeasures: {
                title: string,
                list: Array<string>
            }
        },
        advices: {
            title: string,
            list1: Array<string>,
            subList: Array<string>,
            list2: Array<string>
        },
        lastSection: {
            title1: string,
            title2: string,
            description: string
        }
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