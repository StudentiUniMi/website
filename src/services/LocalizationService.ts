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
                        text1: "loremipsum1",
                        text2: "loremipsum2",
                        col3: {
                            header: "loremipsum3",
                            text: "loremipsum4",
                        }
                    },
                    homepage: {
                        section1: {
                            text1: "loremipsum5",
                            text2: "loremipsum6",
                            card1: {
                                text1: "loremipsum7",
                                text2: "loremipsum8"
                            },
                            card2: {
                                text1: "loremipsum9",
                                text2: "loremipsum10"
                            }
                        },
                        section2: {
                            text: "loremipsum11",
                            card1: {
                                text: "loremipsum12",
                                button: "loremipsum13"
                            },
                            card2: {
                                text: "loremipsum14",
                                button: "loremipsum15"
                            },
                            card3: {
                                text: "loremipsum16",
                                button: "loremipsum17"
                            }
                        },
                        section3: {
                            text: "loremipsum18",
                            card1: {
                                text: "loremipsum19",
                                button: "loremipsum20"
                            },
                            card2: {
                                text: "loremipsum21",
                                button: "loremipsum22"
                            },
                            card3: {
                                text: "loremipsum23",
                                button: "loremipsum24"
                            }
                        },
                        section4: {
                            text: "loremipsum25",
                            card1: {
                                text: "loremipsum26",
                                button: "loremipsum27"
                            },
                            card2: {
                                text: "loremipsum28",
                                button: "loremipsum29"
                            },
                            card3: {
                                text: "loremipsum30",
                                button: "loremipsum31"
                            },
                            card4: {
                                text: "loremipsum32",
                                button: "loremipsum33"
                            }
                        },
                        section5: {
                            text: "loremipsum34",
                            card1: {
                                text: "loremipsum35",
                                button: "loremipsum36"
                            },
                            card2: {
                                text: "loremipsum37",
                                button: "loremipsum38"
                            }
                        }
                    },
                    aboutUs: {
                        text1: "loremipsum39",
                        text2: "loremipsum40",
                        text3: "loremipsum41",
                        header1: "loremipsum42",
                        header2: "loremipsum43",
                        header3: "loremipsum44",
                        discordManager: "loremipsum45"
                    },
                    rules: {
                        text1: "loremipsum46",
                        question: "loremipsum47",
                        answer: "loremipsum48",
                        text2: "loremipsum49",
                        text3: "loremipsum50",
                        section: "loremipsum51",
                        rules1: {
                            sectionName: "loremipsum52",
                            rules: []
                        },
                        rules2: {
                            sectionName: "loremipsum53",
                            rules: []
                        },
                        rules3: {
                            sectionName: "loremipsum54",
                            rules: []
                        },
                        rules4: {
                            sectionName: "loremipsum55",
                            rules: []
                        }
                    },
                    courses: {
                        text1: "loremipsum56",
                        text2: "loremipsum57",
                        departmentSelect: "loremipsum58",
                        cdlSelect: "loremipsum59",
                        cdlWebsite: "loremipsum60",
                        manifest: "loremipsum61",
                        vc: "loremipsum62",
                        availableGroups: "loremipsum63",
                        nameFilter: "loremipsum64",
                        yearFilter: "loremipsum65",
                        semesterFilter: "loremipsum66",
                        year: "loremipsum67",
                        semester: "loremipsum68",
                        telegramGroup: "loremipsum69",
                        website: "loremipsum70",
                        notices: "loremipsum71"
                    },
                    services: {
                        text1: "loremipsum72",
                        text2: "loremipsum73",
                        availableServices: "loremipsum74",
                        card1: { header: "loremipsum75", text: "loremipsum76" },
                        card2: { header: "loremipsum77", text: "loremipsum78" },
                        card3: { header: "loremipsum79", text: "loremipsum80" },
                        card4: { header: "loremipsum81", text: "loremipsum82" },
                        card5: { header: "loremipsum83", text: "loremipsum84" },
                        card6: { header: "loremipsum85", text: "loremipsum86" },
                        card7: { header: "loremipsum87", text: "loremipsum88" },
                        card8: { header: "loremipsum89", text: "loremipsum90" },
                        card9: { header: "loremipsum91", text: "loremipsum92" },
                    },
                    extraGroups: {
                        text1: "loremipsum93",
                        text2: "loremipsum94",
                        availableGroups: "loremipsum95"
                    },
                    representatives: {
                        text1: "loremipsum96",
                        text2: "loremipsum97",
                        departmentSelect: "loremipsum98"
                    },
                    contributors: {
                        text1:"loremipsum99",
                        header1: "loremipsum100",
                        header2: "loremipsum101",
                        dev1: "loremipsum102",
                        dev2: "loremipsum103",
                        dev3: "loremipsum104",
                        githubProfile: "loremipsum105",
                        websiteProfile: "loremipsum106",
                        text2: "loremipsum107"
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
                                text1: "loremipsum108",
                                text2: "loremipsum109"
                            },
                            card2: {
                                text1: "loremipsum110",
                                text2: "loremipsum111"
                            }
                        },
                        section2: {
                            text: "Our main links",
                            card1: {
                                text: "Join the Telegram group to stay updated and see all the links available!",
                                button: "loremipsum112"
                            },
                            card2: {
                                text: "Join our discord to share information and meet new friends!",
                                button: "loremipsum113"
                            },
                            card3: {
                                text: "Visit the repository to see all our open-source projects",
                                button: "loremipsum114"
                            }
                        },
                        section3: {
                            text: "Everything has its own Telegram group chat",
                            card1: {
                                text: "Say goodbye to those messy WhatsApp chats! We have created a Telegram group for each course",
                                button: "loremipsum115"
                            },
                            card2: {
                                text: "Tutoring, course materials, Erasmus, internship, apartments and many other extra things",
                                button: "loremipsum116"
                            },
                            card3: {
                                text: "We think that a respectful and inclusive environment makes us more innovative and efficient. Read the rules!",
                                button: "loremipsum117"
                            }
                        },
                        section4: {
                            text: "Our services to help you studying",
                            card1: {
                                text: "View the network Wiki and help us improving it!",
                                button: "loremipsum118"
                            },
                            card2: {
                                text: "Use this page to easily reach all the official services provided by UniMi",
                                button: "loremipsum119"
                            },
                            card3: {
                                text: "“Hey pal, would you mind sharing those notes?”",
                                button: "loremipsum120"
                            },
                            card4: {
                                text: "Our service to safely and easily share your code or any other kind of material.",
                                button: "loremipsum121"
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
                        discordManager: "loremipsum122"
                    },
                    rules: {
                        text1: "Here you can find the Regulation of our network. Please read it before joining any group.",
                        question: "Why do we need it?",
                        answer: "We want to make clear the reasons that took us to introducing these rules into the network. We noticed that most of the groups were flooded with trivial questions re-proposed every day. This was lowering the quality of our chats and discouraged the participation of some students. Therefore, we started repressing this phenomenon warning their proponents and offering a FAQ section for each course.",
                        text2: "Below you can find the Regulation and its sections. Click on each banner to read the rules.",
                        text3: "loremipsum123",
                        section: "loremipsum124",
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
                        cdlWebsite: "loremipsum125",
                        manifest: "loremipsum126",
                        vc: "loremipsum127",
                        availableGroups: "Available groups:",
                        nameFilter: "Search by name",
                        yearFilter: "Search by year",
                        semesterFilter: "loremipsum128",
                        year: "year",
                        semester: "Search by semester",
                        telegramGroup: "loremipsum129",
                        website: "loremipsum130",
                        notices: "loremipsum131"
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
                        dev1: "loremipsum132",
                        dev2: "loremipsum133",
                        dev3: "loremipsum134",
                        githubProfile: "loremipsum135",
                        websiteProfile: "loremipsum136",
                        text2: "Did you contributed to the development of the Network and you would like to appear in this list? Send a private message to @giuseppetm."
                    },
                    footer: {
                        text1: "loremipsum137",
                        text2: "loremipsum138",
                        col3: {
                            header: "loremipsum139",
                            text: "loremipsum140"
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