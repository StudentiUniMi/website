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
                        text1: "lorem ipsum",
                        text2: "lorem ipsum",
                        col3: {
                            header: "lorem ipsum",
                            text: "lorem ipsum",
                        }
                    },
                    homepage: {
                        section1: {
                            text1: "Lorem ipsuum",
                            text2: "Lorem ipsuum",
                            card1: {
                                text1: "Lorem ipsuum",
                                text2: "Lorem ipsuum"
                            },
                            card2: {
                                text1: "Lorem ipsuum",
                                text2: "Lorem ipsuum"
                            }
                        },
                        section2: {
                            text: "Lorem ipsuum",
                            card1: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card2: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card3: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            }
                        },
                        section3: {
                            text: "Lorem ipsuum",
                            card1: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card2: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card3: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            }
                        },
                        section4: {
                            text: "Lorem ipsuum",
                            card1: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card2: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card3: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card4: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            }
                        },
                        section5: {
                            text: "Lorem ipsuum",
                            card1: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card2: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            }
                        }
                    },
                    aboutUs: {
                        text1: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        text3: "Lorem ipsuum",
                        header1: "Lorem ipsuum",
                        header2: "Lorem ipsuum",
                        header3: "Lorem ipsuum",
                        discordManager: "Lorem ipsuum"
                    },
                    rules: {
                        text1: "Lorem ipsuum",
                        question: "Lorem ipsuum",
                        answer: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        text3: "Lorem ipsuum",
                        section: "Lorem ipsuum",
                        rules1: {
                            sectionName: "Lorem ipsuum",
                            rules: []
                        },
                        rules2: {
                            sectionName: "Lorem ipsuum",
                            rules: []
                        },
                        rules3: {
                            sectionName: "Lorem ipsuum",
                            rules: []
                        },
                        rules4: {
                            sectionName: "Lorem ipsuum",
                            rules: []
                        }
                    },
                    courses: {
                        text1: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        departmentSelect: "Lorem ipsuum",
                        cdlSelect: "Lorem ipsuum",
                        cdlWebsite: "Lorem ipsuum",
                        manifest: "Lorem ipsuum",
                        vc: "Lorem ipsuum",
                        availableGroups: "Lorem ipsuum",
                        nameFilter: "Lorem ipsuum",
                        yearFilter: "Lorem ipsuum",
                        semesterFilter: "Lorem ipsuum",
                        year: "Lorem ipsuum",
                        semester: "Lorem ipsuum",
                        telegramGroup: "Lorem ipsuum",
                        website: "Lorem ipsuum",
                        notices: "Lorem ipsuum"
                    },
                    services: {
                        text1: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        availableServices: "Lorem ipsuum",
                        card1: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card2: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card3: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card4: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card5: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card6: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card7: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card8: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card9: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                    },
                    extraGroups: {
                        text1: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        availableGroups: "Lorem ipsuum"
                    },
                    representatives: {
                        text1: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        departmentSelect: "Lorem ipsuum"
                    },
                    contributors: {
                        text1:"Lorem ipsuum",
                        header1: "Lorem ipsuum",
                        header2: "Lorem ipsuum",
                        dev1: "Lorem ipsuum",
                        dev2: "Lorem ipsuum",
                        dev3: "Lorem ipsuum",
                        githubProfile: "Lorem ipsuum",
                        websiteProfile: "Lorem ipsuum",
                        text2: "Lorem ipsuum"
                    },
                },

                en: {
                
                    headerMenuItems: {
                        home: "Home ENG",
                        aboutUs: "Lorem ipsuum",
                        rules: "Lorem ipsuum",
                        courses: "Lorem ipsuum",
                        services: "Lorem ipsuum",
                        additionalGroups: "Lorem ipsuum",
                        representatives: "Lorem ipsuum",
                        contributors: "Lorem ipsuum"
                    },
                    settingsPanel: {
                        settings: "Lorem ipsuum",
                        changeTheme: "Lorem ipsuum",
                        darkTheme: "Lorem ipsuum",
                        lightTheme: "Lorem ipsuum",
                        selectLanguage: "Lorem ipsuum"
                    },
                    homepage: {
                        section1: {
                            text1: "Lorem ipsuum",
                            text2: "Lorem ipsuum",
                            card1: {
                                text1: "Lorem ipsuum",
                                text2: "Lorem ipsuum"
                            },
                            card2: {
                                text1: "Lorem ipsuum",
                                text2: "Lorem ipsuum"
                            }
                        },
                        section2: {
                            text: "Lorem ipsuum",
                            card1: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card2: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card3: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            }
                        },
                        section3: {
                            text: "Lorem ipsuum",
                            card1: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card2: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card3: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            }
                        },
                        section4: {
                            text: "Lorem ipsuum",
                            card1: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card2: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card3: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card4: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            }
                        },
                        section5: {
                            text: "Lorem ipsuum",
                            card1: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            },
                            card2: {
                                text: "Lorem ipsuum",
                                button: "Lorem ipsuum"
                            }
                        }
                    },
                    aboutUs: {
                        text1: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        text3: "Lorem ipsuum",
                        header1: "Lorem ipsuum",
                        header2: "Lorem ipsuum",
                        header3: "Lorem ipsuum",
                        discordManager: "Lorem ipsuum"
                    },
                    rules: {
                        text1: "Lorem ipsuum",
                        question: "Lorem ipsuum",
                        answer: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        text3: "Lorem ipsuum",
                        section: "Lorem ipsuum",
                        rules1: {
                            sectionName: "Lorem ipsuum",
                            rules: []
                        },
                        rules2: {
                            sectionName: "Lorem ipsuum",
                            rules: []
                        },
                        rules3: {
                            sectionName: "Lorem ipsuum",
                            rules: []
                        },
                        rules4: {
                            sectionName: "Lorem ipsuum",
                            rules: []
                        }
                    },
                    courses: {
                        text1: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        departmentSelect: "Lorem ipsuum",
                        cdlSelect: "Lorem ipsuum",
                        cdlWebsite: "Lorem ipsuum",
                        manifest: "Lorem ipsuum",
                        vc: "Lorem ipsuum",
                        availableGroups: "Lorem ipsuum",
                        nameFilter: "Lorem ipsuum",
                        yearFilter: "Lorem ipsuum",
                        semesterFilter: "Lorem ipsuum",
                        year: "Lorem ipsuum",
                        semester: "Lorem ipsuum",
                        telegramGroup: "Lorem ipsuum",
                        website: "Lorem ipsuum",
                        notices: "Lorem ipsuum"
                    },
                    services: {
                        text1: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        availableServices: "Lorem ipsuum",
                        card1: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card2: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card3: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card4: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card5: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card6: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card7: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card8: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                        card9: { header: "Lorem ipsuum", text: "Lorem ipsuum" },
                    },
                    extraGroups: {
                        text1: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        availableGroups: "Lorem ipsuum"
                    },
                    representatives: {
                        text1: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        departmentSelect: "Lorem ipsuum"
                    },
                    contributors: {
                        text1:"Lorem ipsuum",
                        header1: "Lorem ipsuum",
                        header2: "Lorem ipsuum",
                        dev1: "Lorem ipsuum",
                        dev2: "Lorem ipsuum",
                        dev3: "Lorem ipsuum",
                        githubProfile: "Lorem ipsuum",
                        websiteProfile: "Lorem ipsuum",
                        text2: "Lorem ipsuum"
                    },
                    footer: {
                        text1: "Lorem ipsuum",
                        text2: "Lorem ipsuum",
                        col3: {
                            header: "Lorem ipsuum",
                            text: "Lorem ipsuum"
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