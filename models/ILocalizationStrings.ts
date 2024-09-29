import Helmet from "./Helmet"

interface ILocalizationStrings {
    helmet: Helmet,
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
    notFound: {
        title: string,
        description: string,
        buttonHomepage: string,
        buttonGroups: string
    },
    serverErrorPage: {
        title: string,
        description: string,
        buttonHomepage: string,
        buttonGroups: string
    },
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
        groups: string,
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
        }
    },
    courses: {
        title: string,
        otherGroups: string,
        resetSection: string,
        filtersToggle: string,
        findDegreeByName: string,
        groupsSection: {
            text1: string,
            text2: string,
            text3: string
        },
        degree: {
            title: string,
            goBack: string,
            share: string
        },
        searchingDegrees: string,
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
        degreesNotFound: string,
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
    groups: {
        title: string,
        universityGroups: {
            label: string,
            title: string,
            description: string,
            description2: string,
            card: {
                type: string
            }
        },
        announcementsGroups: {
            label: string,
            title: string,
            description: string,
            description2: string,
            card: {
                type: string
            }
        },
        studentsAssociations: {
            label: string,
            title: string,
            description: string,
            description2: string,
            card: {
                type: string
            }
        },
        users: string
    },
    services: {
        text1: string,
        text2: string,
        text3: string,
        text4: string,
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
        title: string,
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
        title: string,
        graduations: {
            title: string,
            description: string,
            button: string,
        },
        map: {
            title: string,
            description: string,
            button: string
        },
        linksAndRedirects: {
            text1: string, 
            text2: string
        },
        representatives: {
            title: string,
            description: string
        },
        departmentSelect: string,
        representativesNotAvailable: string
    },
    aboutUs: {
        text1: string,
        text2: string,
        text3: string,
        button: { text1: string, text2: string },
        header1: string,
        header2: string,
        header3: string,
        contact: {
            title: string,
            description: string,
            button: string
        }
    },
    contributors: {
        text1:string,
        header1: string,
        header2: string,
        githubProfile: string,
        websiteProfile: string,
        text2: string,
    },
    telegram:  {
        title: string,
        subtitle: string,
        labelButton: string,
        text1: string,
        text2: string,
        text3: string,
        doubleQuoteText1: string,
        doubleQuoteText2: string,
        doubleQuoteText3: string,
        headerList: string,
        listText1: string,
        listText2: string,
        listText3: string,
        listText4: string,
        listText5: string,
        listText6: string
    },
    footer: [
        { text: string, buttonText: string },
        { header: string },
        { header: string, text: string },
        { video: string, graduations: string, maps: string }
    ]
};

export default ILocalizationStrings;