import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import ILocalizationStrings from '../data/ILocalizationStrings';

class LocalizationService
{
    private static data?: LocalizedStringsMethods & ILocalizationStrings

    static localize = (language: string | undefined = undefined) => 
    {
        if(LocalizationService.data == null)
        {
            LocalizationService.data = new LocalizedStrings<ILocalizationStrings>({
                it: {

                    headerMenuItems: {
                        home: "Home ITA",
                        aboutUs: "Chi siamo",
                        rules: "Regolamento",
                        courses: "Corsi",
                        services: "Servizi",
                        additionalGroups: "Gruppi extra",
                        representatives: "Rappresentanti",
                        contributors: "Contributori"
                    },
                    settingsPanel: {
                        settings: "Impostazioni",
                        changeTheme: "Cambia il tema",
                        darkTheme: "Modalità scura",
                        lightTheme: "Modalità chiara",
                        selectLanguage: "Seleziona la lingua"
                    },
                    footer: {
                        text1: "loremipsum",
                        text2: "loremipsum",
                        col3: {
                            header: "loremipsum",
                            text: "loremipsum",
                        }
                    },
                    homepage: {
                        section1: {
                            text1: "Loremipsuum",
                            text2: "Loremipsuum",
                            card1: {
                                text1: "Loremipsuum",
                                text2: "Loremipsuum"
                            },
                            card2: {
                                text1: "Loremipsuum",
                                text2: "Loremipsuum"
                            }
                        },
                        section2: {
                            text: "Loremipsuum",
                            card1: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card2: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card3: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            }
                        },
                        section3: {
                            text: "Loremipsuum",
                            card1: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card2: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card3: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            }
                        },
                        section4: {
                            text: "Loremipsuum",
                            card1: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card2: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card3: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card4: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            }
                        },
                        section5: {
                            text: "Loremipsuum",
                            card1: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card2: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            }
                        }
                    },
                    aboutUs: {
                        text1: "Loremipsuum",
                        text2: "Loremipsuum",
                        text3: "Loremipsuum",
                        header1: "Loremipsuum",
                        header2: "Loremipsuum",
                        header3: "Loremipsuum",
                        discordManager: "Loremipsuum"
                    },
                    rules: {
                        text1: "Loremipsuum",
                        question: "Loremipsuum",
                        answer: "Loremipsuum",
                        text2: "Loremipsuum",
                        text3: "Loremipsuum",
                        section: "Loremipsuum",
                        rules1: {
                            sectionName: "Loremipsuum",
                            rules: []
                        },
                        rules2: {
                            sectionName: "Loremipsuum",
                            rules: []
                        },
                        rules3: {
                            sectionName: "Loremipsuum",
                            rules: []
                        },
                        rules4: {
                            sectionName: "Loremipsuum",
                            rules: []
                        }
                    },
                    courses: {
                        text1: "Loremipsuum",
                        text2: "Loremipsuum",
                        departmentSelect: "Loremipsuum",
                        cdlSelect: "Loremipsuum",
                        cdlWebsite: "Loremipsuum",
                        manifest: "Loremipsuum",
                        vc: "Loremipsuum",
                        availableGroups: "Loremipsuum",
                        nameFilter: "Loremipsuum",
                        yearFilter: "Loremipsuum",
                        semesterFilter: "Loremipsuum",
                        year: "Loremipsuum",
                        semester: "Loremipsuum",
                        telegramGroup: "Loremipsuum",
                        website: "Loremipsuum",
                        notices: "Loremipsuum"
                    },
                    services: {
                        text1: "Loremipsuum",
                        text2: "Loremipsuum",
                        availableServices: "Loremipsuum",
                        card1: { header: "Loremipsuum", text: "Loremipsuum" },
                        card2: { header: "Loremipsuum", text: "Loremipsuum" },
                        card3: { header: "Loremipsuum", text: "Loremipsuum" },
                        card4: { header: "Loremipsuum", text: "Loremipsuum" },
                        card5: { header: "Loremipsuum", text: "Loremipsuum" },
                        card6: { header: "Loremipsuum", text: "Loremipsuum" },
                        card7: { header: "Loremipsuum", text: "Loremipsuum" },
                        card8: { header: "Loremipsuum", text: "Loremipsuum" },
                        card9: { header: "Loremipsuum", text: "Loremipsuum" },
                    },
                    extraGroups: {
                        text1: "Loremipsuum",
                        text2: "Loremipsuum",
                        availableGroups: "Loremipsuum"
                    },
                    representatives: {
                        text1: "Loremipsuum",
                        text2: "Loremipsuum",
                        departmentSelect: "Loremipsuum"
                    },
                    contributors: {
                        text1:"Loremipsuum",
                        header1: "Loremipsuum",
                        header2: "Loremipsuum",
                        dev1: "Loremipsuum",
                        dev2: "Loremipsuum",
                        dev3: "Loremipsuum",
                        githubProfile: "Loremipsuum",
                        websiteProfile: "Loremipsuum",
                        text2: "Loremipsuum"
                    },
                },

                en: {
                
                    headerMenuItems: {
                        home: "Home",
                        aboutUs: "About Us",
                        rules: "Rules",
                        courses: "Courses",
                        services: "All UniMi Services",
                        additionalGroups: "Off-Topic Groups",
                        representatives: "Presidents of Students",
                        contributors: "Credits"
                    },
                    settingsPanel: {
                        settings: "Settings",
                        changeTheme: "Dark Mode:",
                        darkTheme: "On",
                        lightTheme: "Off",
                        selectLanguage: "Language:"
                    },
                    homepage: {
                        section1: {
                            text1: "Loremipsuum",
                            text2: "Loremipsuum",
                            card1: {
                                text1: "Loremipsuum",
                                text2: "Loremipsuum"
                            },
                            card2: {
                                text1: "Loremipsuum",
                                text2: "Loremipsuum"
                            }
                        },
                        section2: {
                            text: "Loremipsuum",
                            card1: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card2: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card3: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            }
                        },
                        section3: {
                            text: "Loremipsuum",
                            card1: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card2: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card3: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            }
                        },
                        section4: {
                            text: "Loremipsuum",
                            card1: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card2: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card3: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card4: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            }
                        },
                        section5: {
                            text: "Loremipsuum",
                            card1: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            },
                            card2: {
                                text: "Loremipsuum",
                                button: "Loremipsuum"
                            }
                        }
                    },
                    aboutUs: {
                        text1: "Loremipsuum",
                        text2: "Loremipsuum",
                        text3: "Loremipsuum",
                        header1: "Loremipsuum",
                        header2: "Loremipsuum",
                        header3: "Loremipsuum",
                        discordManager: "Loremipsuum"
                    },
                    rules: {
                        text1: "Here you can find the Regulation of our network. Please read it before joining any group.",
                        question: "Why do we need it?",
                        answer: "We want to make clear the reasons that took us to introducing these rules into the network. We noticed that most of the groups were flooded with trivial questions re-proposed every day. This was lowering the quality of our chats and discouraged the participation of some students. Therefore, we started repressing this phenomenon warning their proponents and offering a FAQ section for each course.",
                        text2: "Below you can find the Regulation and its sections. Click on each banner to read the rules.",
                        text3: "Loremipsuum",
                        section: "",
                        rules1: {
                            sectionName: "Questions and FAQs",
                            rules: []
                        },
                        rules2: {
                            sectionName: "Conduct",
                            rules: []
                        },
                        rules3: {
                            sectionName: "Materials",
                            rules: []
                        },
                        rules4: {
                            sectionName: "More",
                            rules: []
                        }
                    },
                    courses: {
                        text1: "Below you can find Telegram groups, websites, wiki, FAQs (if available) and general information about your degree programme and its courses",
                        text2: "Links to the wiki could lead to unfinished pages: that’s why you can help us collecting FAQs and any other useful material for that course. To help us create a free account here",
                        departmentSelect: "Choose a department:",
                        cdlSelect: "Select the degree programme:",
                        cdlWebsite: "Loremipsuum",
                        manifest: "Loremipsuum",
                        vc: "Loremipsuum",
                        availableGroups: "Available groups:",
                        nameFilter: "Search by name",
                        yearFilter: "Search by year",
                        semesterFilter: "Loremipsuum",
                        year: "year",
                        semester: "Search by semester",
                        telegramGroup: "Loremipsuum",
                        website: "Loremipsuum",
                        notices: "Loremipsuum"
                    },
                    services: {
                        text1: "Tired of scavenging into endless pages to find the services offered by the university? We grouped all the links here!",
                        text2: "If you think that something should be added suggest it on the main group",
                        availableServices: "Available services:",
                        card1: { header: "Unimia", text: "Home Page for all UniMi Services" },
                        card2: { header: "Sifa", text: "Legacy Online Services" },
                        card3: { header: "Students' Web Agenda", text: "Lessons Timetable, Exams Calendar and any kind of Reservations" },
                        card4: { header: "Exam Registration", text: "Manage your registration to your exams" },
                        card5: { header: "Webmail", text: "The university webmail service" },
                        card6: { header: "Library", text: "All the information about our libraries" },
                        card7: { header: "Marks Registeration", text: "Check, accept or reject the final or partial results of your exams" },
                        card8: { header: "Ariel", text: "Official Websites Platform for each Courses" },
                        card9: { header: "InformaStudenti", text: "Online Student Desk"},
                    },
                    extraGroups: {
                        text1: "Looking for something different? Join our groups!",
                        text2: "Would you like to open a new group? Bring your  on the main group.",
                        availableGroups: "Available groups"
                    },
                    representatives: {
                        text1: "Being a students' representative is a very important role and a formative experience. They provide a support to any student against all the difficulties during the study period.",
                        text2: "The list below reports all the representatives of each department and their contacts.",
                        departmentSelect: "Select your department:"
                    },
                    contributors: {
                        text1:"Loremipsuum",
                        header1: "Loremipsuum",
                        header2: "Loremipsuum",
                        dev1: "Loremipsuum",
                        dev2: "Loremipsuum",
                        dev3: "Loremipsuum",
                        githubProfile: "Loremipsuum",
                        websiteProfile: "Loremipsuum",
                        text2: "Loremipsuum"
                    },
                    footer: {
                        text1: "Loremipsuum",
                        text2: "Loremipsuum",
                        col3: {
                            header: "Loremipsuum",
                            text: "Loremipsuum"
                        }
                    }
                }
            })
        }   
        

        if(language != null)
        {
            LocalizationService.data.setLanguage(language!);
        }
    }

    static strings = () =>
    {
        return LocalizationService.data!
    }
}

export default LocalizationService