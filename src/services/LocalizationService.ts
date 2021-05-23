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
                        text1: "dolorsitamet000",
                        text2: "dolorsitamet000",
                        col3: {
                            header: "dolorsitamet000",
                            text: "dolorsitamet000",
                        }
                    },
                    homepage: {
                        section1: {
                            text1: "dolorsitamet000",
                            text2: "dolorsitamet000",
                            card1: {
                                text1: "dolorsitamet000",
                                text2: "dolorsitamet000"
                            },
                            card2: {
                                text1: "dolorsitamet000",
                                text2: "dolorsitamet000"
                            }
                        },
                        section2: {
                            text: "dolorsitamet000",
                            card1: {
                                text: "dolorsitamet000",
                                button: "dolorsitamet000"
                            },
                            card2: {
                                text: "dolorsitamet000",
                                button: "dolorsitamet000"
                            },
                            card3: {
                                text: "dolorsitamet000",
                                button: "dolorsitamet000"
                            }
                        },
                        section3: {
                            text: "dolorsitamet000",
                            card1: {
                                text: "dolorsitamet000",
                                button: "dolorsitamet000"
                            },
                            card2: {
                                text: "dolorsitamet000",
                                button: "dolorsitamet000"
                            },
                            card3: {
                                text: "dolorsitamet000",
                                button: "dolorsitamet000"
                            }
                        },
                        section4: {
                            text: "dolorsitamet000",
                            card1: {
                                text: "dolorsitamet000",
                                button: "dolorsitamet000"
                            },
                            card2: {
                                text: "dolorsitamet000",
                                button: "dolorsitamet000"
                            },
                            card3: {
                                text: "dolorsitamet000",
                                button: "dolorsitamet000"
                            },
                            card4: {
                                text: "dolorsitamet000",
                                button: "dolorsitamet000"
                            }
                        },
                        section5: {
                            text: "dolorsitamet000",
                            card1: {
                                text: "dolorsitamet000",
                                button: "dolorsitamet000"
                            },
                            card2: {
                                text: "dolorsitamet000",
                                button: "dolorsitamet000"
                            }
                        }
                    },
                    aboutUs: {
                        text1: "dolorsitamet000",
                        text2: "dolorsitamet000",
                        text3: "dolorsitamet000",
                        header1: "dolorsitamet000",
                        header2: "dolorsitamet000",
                        header3: "dolorsitamet000",
                        discordManager: "dolorsitamet000"
                    },
                    rules: {
                        text1: "dolorsitamet000",
                        question: "dolorsitamet000",
                        answer: "dolorsitamet000",
                        text2: "dolorsitamet000",
                        text3: "dolorsitamet000",
                        section: "dolorsitamet000",
                        rules1: {
                            sectionName: "dolorsitamet000",
                            rules: []
                        },
                        rules2: {
                            sectionName: "dolorsitamet000",
                            rules: []
                        },
                        rules3: {
                            sectionName: "dolorsitamet000",
                            rules: []
                        },
                        rules4: {
                            sectionName: "dolorsitamet000",
                            rules: []
                        }
                    },
                    courses: {
                        text1: "dolorsitamet000",
                        text2: "dolorsitamet000",
                        departmentSelect: "dolorsitamet000",
                        cdlSelect: "dolorsitamet000",
                        cdlWebsite: "dolorsitamet000",
                        manifest: "dolorsitamet000",
                        vc: "dolorsitamet000",
                        availableGroups: "dolorsitamet000",
                        nameFilter: "dolorsitamet000",
                        yearFilter: "dolorsitamet000",
                        semesterFilter: "dolorsitamet000",
                        year: "dolorsitamet000",
                        semester: "dolorsitamet000",
                        telegramGroup: "dolorsitamet000",
                        website: "dolorsitamet000",
                        notices: "dolorsitamet000"
                    },
                    services: {
                        text1: "dolorsitamet000",
                        text2: "dolorsitamet000",
                        availableServices: "dolorsitamet000",
                        card1: { header: "dolorsitamet000", text: "dolorsitamet000" },
                        card2: { header: "dolorsitamet000", text: "dolorsitamet000" },
                        card3: { header: "dolorsitamet000", text: "dolorsitamet000" },
                        card4: { header: "dolorsitamet000", text: "dolorsitamet000" },
                        card5: { header: "dolorsitamet000", text: "dolorsitamet000" },
                        card6: { header: "dolorsitamet000", text: "dolorsitamet000" },
                        card7: { header: "dolorsitamet000", text: "dolorsitamet000" },
                        card8: { header: "dolorsitamet000", text: "dolorsitamet000" },
                        card9: { header: "dolorsitamet000", text: "dolorsitamet000" },
                    },
                    extraGroups: {
                        text1: "dolorsitamet000",
                        text2: "dolorsitamet000",
                        availableGroups: "dolorsitamet000"
                    },
                    representatives: {
                        text1: "dolorsitamet000",
                        text2: "dolorsitamet000",
                        departmentSelect: "dolorsitamet000"
                    },
                    contributors: {
                        text1:"dolorsitamet000",
                        header1: "dolorsitamet000",
                        header2: "dolorsitamet000",
                        dev1: "dolorsitamet000",
                        dev2: "dolorsitamet000",
                        dev3: "dolorsitamet000",
                        githubProfile: "dolorsitamet000",
                        websiteProfile: "dolorsitamet000",
                        text2: "dolorsitamet000"
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
                            text1: "Welcome to Network Studenti UniMi!",
                            text2: "Our goal is to organize all the information about the University of Milan (UniMi – Università degli Studi di Milano Statale) and make them easily accessible to anyone",
                            card1: {
                                text1: "dolorsitamet000",
                                text2: "dolorsitamet000"
                            },
                            card2: {
                                text1: "dolorsitamet000",
                                text2: "dolorsitamet000"
                            }
                        },
                        section2: {
                            text: "Our main links",
                            card1: {
                                text: "Join the Telegram group to stay updated and see all the links available!",
                                button: "dolorsitamet000"
                            },
                            card2: {
                                text: "Join our discord to share information and meet new friends!",
                                button: "dolorsitamet000"
                            },
                            card3: {
                                text: "Visit the repository to see all our open-source projects",
                                button: "dolorsitamet000"
                            }
                        },
                        section3: {
                            text: "Everything has its own Telegram group chat",
                            card1: {
                                text: "Say goodbye to those messy WhatsApp chats! We have created a Telegram group for each course",
                                button: "dolorsitamet000"
                            },
                            card2: {
                                text: "Tutoring, course materials, Erasmus, internship, apartments and many other extra things",
                                button: "dolorsitamet000"
                            },
                            card3: {
                                text: "We think that a respectful and inclusive environment makes us more innovative and efficient. Read the rules!",
                                button: "dolorsitamet000"
                            }
                        },
                        section4: {
                            text: "Our services to help you studying",
                            card1: {
                                text: "View the network Wiki and help us improving it!",
                                button: "dolorsitamet000"
                            },
                            card2: {
                                text: "Use this page to easily reach all the official services provided by UniMi",
                                button: "dolorsitamet000"
                            },
                            card3: {
                                text: "“Hey pal, would you mind sharing those notes?”",
                                button: "dolorsitamet000"
                            },
                            card4: {
                                text: "Our service to safely and easily share your code or any other kind of material.",
                                button: "dolorsitamet000"
                            }
                        },
                        section5: {
                            text: "Have you tried turning it off and on again?",
                            card1: {
                                text: "I have a didactic problem",
                                button: "representatives"
                            },
                            card2: {
                                text: "I have a technical problem",
                                button: "Admins"
                            }
                        }
                    },
                    aboutUs: {
                        text1: "We are a non-profit organization, neutral and not affiliated to any political party. Our goal is to provide online services to the students at the University of Milan.",
                        text2: "You can read our statute here.",
                        text3: "Here you can find our members and their contacts.",
                        header1: "Coordinator",
                        header2: "Administrative committee",
                        header3: "Administrators and moderators",
                        discordManager: "dolorsitamet000"
                    },
                    rules: {
                        text1: "Here you can find the Regulation of our network. Please read it before joining any group.",
                        question: "Why do we need it?",
                        answer: "We want to make clear the reasons that took us to introducing these rules into the network. We noticed that most of the groups were flooded with trivial questions re-proposed every day. This was lowering the quality of our chats and discouraged the participation of some students. Therefore, we started repressing this phenomenon warning their proponents and offering a FAQ section for each course.",
                        text2: "Below you can find the Regulation and its sections. Click on each banner to read the rules.",
                        text3: "dolorsitamet000",
                        section: "dolorsitamet000",
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
                        cdlWebsite: "dolorsitamet000",
                        manifest: "dolorsitamet000",
                        vc: "dolorsitamet000",
                        availableGroups: "Available groups:",
                        nameFilter: "Search by name",
                        yearFilter: "Search by year",
                        semesterFilter: "dolorsitamet000",
                        year: "year",
                        semester: "Search by semester",
                        telegramGroup: "dolorsitamet000",
                        website: "dolorsitamet000",
                        notices: "dolorsitamet000"
                    },
                    services: {
                        text1: "Tired of scavenging into endless pages to find the services offered by the university? We grouped all the links here!",
                        text2: "If you think that something should be added suggest it on the main group",
                        availableServices: "Available services:",
                        card1: { header: "Unimia", text: "Home Page for all UniMi Services" },
                        card2: { header: "Sifa", text: "Legacy Online Services" },
                        card3: { header: "Students' Web Agenda", text: "Lessons Timetable, Exams Calendar and any kind of Reservations" },
                        card4: { header: "Exam Registration", text: "Manage your Registration to your Exams" },
                        card5: { header: "Webmail", text: "UniMi Web Mail" },
                        card6: { header: "Library", text: "All the information about our libraries" },
                        card7: { header: "Marks Registeration", text: "Check, accept or reject the final or partial Results of your Exams" },
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
                        text1:"Below you can find the contributors who put their efforts into the development of the Network, the website and all its services.",
                        header1: "Main maintainers",
                        header2: "Contributors",
                        dev1: "dolorsitamet000",
                        dev2: "dolorsitamet000",
                        dev3: "dolorsitamet000",
                        githubProfile: "dolorsitamet000",
                        websiteProfile: "dolorsitamet000",
                        text2: "Did you contributed to the development of the Network and you would like to appear in this list? Send a private message to @giuseppetm."
                    },
                    footer: {
                        text1: "dolorsitamet000",
                        text2: "dolorsitamet000",
                        col3: {
                            header: "dolorsitamet000",
                            text: "dolorsitamet000"
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