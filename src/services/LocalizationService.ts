import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import ILocalizationStrings from '../models/ILocalizationStrings';

class LocalizationService {
    private static data?: LocalizedStringsMethods & ILocalizationStrings;

    static localize = (language: string | undefined = undefined) => {
        if (LocalizationService.data == null || LocalizationService.data === undefined) {
            LocalizationService.data = new LocalizedStrings<ILocalizationStrings>({
                it: {
                    helmet: {
                        homepage: { title: "Network StudentiUniMi - Gruppi, servizi e molto altro", description: "Sito web ufficiale del Network StudentiUniMi: gruppi WhatsApp rimpiazziati da Telegram, servizi e molto altro. Il network più grande dell'Università degli Studi di Milano." },
                        courses: { title: "Tutti i gruppi | Network StudentiUniMi", description: "Tutti i gruppi Telegram per tutti i corsi di laurea (triennali, magistrali, lauree a ciclo unico) dell'Università degli Studi di Milano. Entra, chiedi informazioni e conosci persone nuove grazie al Network StudentiUniMi." },
                        services: { title: "Servizi e link rapidi | Network StudentiUniMi", description: "Stanco dei disservizi di unimia? Da questa pagina alternativa puoi accedere a tutti i link utili dell'Università degli Studi di Milano." },
                        rules: { title: "Regolamento dei gruppi | Network StudentiUniMi", description: "Il regolamento ufficiale del Network StudentiUniMi." },
                        university: { title: "Informazioni dall'Ateneo e rappresentanti | Network StudentiUniMi", description: "Rimani aggiornato con tutte le informazioni e i rappresentanti dell'Università degli Studi di Milano, offerto dal Network StudentiUniMi." },
                        organization: { title: "Chi siamo | Network StudentiUniMi", description: "Chi siamo? Scopri l'organizzazione dietro il Network StudentiUniMi, il più grande network dell'Università degli Studi di Milano." },
                        degreeLoaded: { title1: 'Gruppi di ', title2: ' | Network StudentiUniMi', description1: 'Tutti i link dei gruppi Telegram del corso di laurea di ', description2: " dell'Università degli Studi di Milano offerti dal Network StudentiUniMi." }
                    },
                    loading: "Caricamento in corso..",
                    telegramGroup: 'Gruppo Telegram',
                    errorLoadingDepartments: 'Errore durante il caricamento dei dipartimenti.',
                    errorLoadingDegrees: 'Errore durante il caricamento dei corsi di laurea.',
                    noRedirectsAvailable: 'Non ci sono collegamenti disponibili.',
                    errorContactAdmin: 'Si è verificato un errore; contatta un amministratore.',
                    headerMenuItems: {
                        home: 'Home',
                        courses: 'Gruppi',
                        services: 'Servizi',
                        rules: 'Regolamento',
                        university: 'Ateneo',
                        aboutUs: 'Chi siamo',
                    },
                    settingsPanel: {
                        settings: 'Impostazioni',
                        changeTheme: 'Modalità scura',
                        darkTheme: 'Accesa',
                        lightTheme: 'Spenta',
                        selectLanguage: 'Seleziona la lingua',
                        italian: 'Italiano',
                        english: 'Inglese',
                        selectColor: 'Seleziona il colore principale',
                        close: 'Chiudi',
                        coachMark: { text1: 'Benvenuto sul nostro sito!', text2: 'Qui puoi trovare alcune impostazioni che ti potrebbero servire. Per il resto, esplora liberamente i servizi che offriamo! :)', understood: 'Capito!' }
                    },
                    homepage: {
                        telegramText: "Telegram è un'app di messaggistica molto più potente e sicura di WhatsApp.",
                        telegramButton: "Dimmi di più",
                        section1: {
                            typedText: 'Sei iscritto a...',
                            text1: 'Rimani in contatto. Di più, e meglio.',
                            text2: "Comunicare è importante, ma può essere frustrante farlo sui grupponi WhatsApp lasciati a loro stessi. Abbiamo creato un gruppo Telegram per ogni corso di laurea dell'Università degli Studi di Milano per facilitare lo scambio di informazioni.",
                        },
                        section2: {
                            text: 'Ogni cosa ha il suo gruppo Telegram',
                            card1: {
                                text: 'Abbiamo creato un gruppo Telegram per ogni corso di laurea; premi il pulsante sotto per trovare il tuo. Presto sarà disponibile anche un gruppo per ogni insegnamento.',
                                button: 'Gruppi dei corsi'
                            },
                            card2: {
                                text: 'Sei una matricola? Cerchi alloggi, materiali o qualcuno che faccia ripetizioni? Nessun problema, entra in uno dei nostri gruppi aggiuntivi!',
                                button: 'Gruppi extra'
                            },
                            card3: {
                                text: "Crediamo che un ambiente rispettoso e inclusivo favorisca la condivisione. Dai un'occhiata al regolamento ufficiale dei gruppi.",
                                button: 'Regolamento'
                            }
                        },
                        section3: {
                            text: 'I nostri collegamenti principali',
                            card1: {
                                text: 'Unisciti al canale telegram per rimanere aggiornato e raggiungere tutti i link disponibili!',
                                button: 'Canale Telegram'
                            },
                            card2: {
                                text: 'Entra nel gruppo telegram principale per eventuali discussioni e chiarimenti riguardo il network.',
                                button: 'Gruppo Telegram'
                            },
                            card3: {
                                text: 'Entra nel nostro server discord per scambiare informazioni con altri studenti e conoscere nuove persone!',
                                button: 'Server Discord'
                            },
                            card4: {
                                text: 'Trovi tutti i nostri progetti open source nelle repository della nostra organizzazione.',
                                button: 'Organizzazione'
                            }
                        },
                        section4: {
                            text: 'I nostri servizi per aiutarti nello studio',
                            card1: {
                                text: ' Abbiamo creato una Wikipedia per ogni insegnamento. Chiunque è libero di collaborare!',
                                button: 'Wiki'
                            },
                            card2: {
                                text: 'Stufo di non poter accedere ai servizi perchè UniMia ha problemi?',
                                button: 'unimia.studentiunimi.it'
                            },
                            card3: {
                                text: 'HedgeDoc permette di prendere appunti in collaborazione senza doversi registrare. Provalo!',
                                button: 'HedgeDoc'
                            },
                            card4: {
                                text: 'Devi condividere codice sui gruppi? Usa il nostro servizio veloce, semplice e sicuro.',
                                button: 'Paste'
                            }
                        },
                        section5: {
                            text: 'Hai provato a spegnere e riaccendere?',
                            card1: {
                                text: 'Ho un problema didattico.',
                                button: 'Rappresentanti'
                            },
                            card2: {
                                text: 'Ho un problema tecnico.',
                                button: 'Amministratori'
                            }
                        },
                        section6: {
                            text: 'Domande frequenti sul Network'
                        },
                        section7: {
                            text: 'Altre informazioni',
                            card1: { text1: 'Abbiamo più di', text2: 'utenti.' },
                            card2: { text1: 'Abbiamo', text2: 'gruppi telegram.' },
                            card3: { text1: 'Copriamo', text2: 'corsi di laurea.' },
                        },
                        telegramSection: {
                            title: "Perchè Telegram e non WhatsApp?",
                            description: "Molti studenti potrebbero chiedersi come mai abbiamo scelto Telegram come piattaforma principale per tutte le nostre attività: in quanto informatici, siamo sempre alla ricerca della soluzione migliore ad un problema, e in questo caso utilizzare Whatsapp come supporto a centinaia di gruppi (e si spera migliaia in futuro) sarebbe stato prima di tutto impraticabile da un punto di vista puramente gestionale (WhatsApp ha un limite di 256 membri per gruppo), e seconda cosa sarebbe stato un incubo per voi studenti cercare i vari materiali e comunicare in maniera efficace.",
                            advantages: 'Vantaggi di <Link href="https://telegram.org/" target="_blank">Telegram</Link>',
                            list: [
                                "Gruppi fino a 250mila membri",
                                "Numeri di telefono non esposti",
                                "Uso su più dispositivi insieme",
                                "Cartelle per organizzare il contenuto",
                                "Canali con informazioni"
                            ]
                        }
                    },
                    rules: {
                        text1: "Il regolamento dei nostri gruppi Telegram ci rende più innovativi e produttivi.",
                        text2: 'Si consiglia di leggere tutte le regole di cui è composto prima di usare uno qualsiasi di essi.',
                        question: 'Perchè abbiamo introdotto un regolamento?',
                        answer: { text1: 'Vogliamo rendere chiari i motivi per cui abbiamo deciso di regolamentare i gruppi del nostro network.', text2: "Abbiamo notato che la maggior parte di essi erano tempestati di domande banali, fatte più volte al giorno, la cui risposta era facilmente trovabile. Questo riduce la qualità della chat e scoraggia la partecipazione di studenti più attenti. Per questo motivo abbiamo deciso di provare a limitare il fenomeno, da una parte ammonendo chi continua a fare interventi non produttivi, e dall'altra fornendo un modo facile e veloce per trovare le informazioni più importanti tramite la <Link href='https://wiki.studentiunimi.it/' target='_blank'>Wiki</Link>."},
                        header: 'Regolamento dei gruppi Telegram'
                    },
                    groups: {
                        findDegreeByName: "Cerca il tuo corso di laurea per nome",
                        groupsSection: {
                            text1: "Gruppi dei corsi",
                            text2: "Trova tutti i gruppi Telegram del tuo corso di laurea"
                        },
                        extraGroupsSection: {
                            text1: "Gruppi extra",
                            text2: "Gruppi aggiuntivi del Network"
                        },
                        departmentSelect: 'Seleziona un dipartimento',
                        cdlSelect: 'Seleziona un corso di Laurea',
                        availableRedirects: 'Collegamenti disponibili',
                        availableGroups: 'Gruppi disponibili',
                        availableAdmins: 'Amministratori disponibili',
                        nameFilter: 'Cerca per nome',
                        yearFilter: 'Cerca per anno',
                        semesterFilter: 'Cerca per semestre',
                        year: 'Anno',
                        semester: 'Semestre',
                        complementary: 'Complementare',
                        websites: 'Siti web',
                        mainGroup: 'Gruppo principale',
                        mainGroupDescription: 'Gruppo principale per qualsiasi tipo di discussione inerente al corso di laurea.',
                        groupNotAvailable: 'Gruppo non disponibile',
                        contactAdmin: "<Icon iconName='FollowUser'/> Contatta un <Link href='https://studentiunimi.it/organization/'>amministratore</Link> se vuoi essere aggiunto al gruppo, oppure chiedilo direttamente su <Link href='https://t.me/unimichat' target='_blank'>@unimichat</Link>.",
                        groupsNotFound: 'Nessun gruppo trovato.',
                        adminsNotFound: 'Nessun amministratore disponibile.',
                        wikiCard: {
                            buttonTitle: "Dimmi di più sulla Wiki",
                            title: "Informazioni sulla Wiki",
                            description: "I link alla Wiki di un corso didattico potrebbero portare a pagine non ancora compilate: è qui che potete contribuire iscrivendovi e aiutandoci a raccogliere faq e qualsiasi altro contenuto utile per i corsi didattici.",
                            clickToWiki: "Clicca qui per andare alla Wiki",
                            type: "Avviso",
                            date: "29 Agosto, 2021"
                        }
                    },
                    services: {
                        text1: 'Stanchi di dover andare a spulciare miriadi di pagine che neanche caricano alla ricerca di strumenti e servizi universitari?',
                        text2: 'Abbiamo realizzato una pagina per centralizzarli tutti e rendere disponibili anche alcune guide che abbiamo realizzato.',
                        text3: "Se pensi che debba essere aggiunto qualche servizio scrivi pure su <Link href='https://t.me/unimichat' target='_blank'>@unimichat</Link>.",
                        availableServices: 'Servizi e guide disponibili',
                        guide: "Guida",
                        service: "Servizio",
                        legend: "Legenda"
                    },
                    extraGroups: {
                        text1: 'Cerchi un gruppo aggiuntivo in particolare? Qui è possibile trovare tutti quelli che abbiamo creato: ricordiamo che ci sono gruppi con regolamenti appositi ad esempio per la creazione di annunci per la vendita di materiali, quindi è consigliato leggere il messaggio di benvenuto in tal caso.',
                        text2: "Se vorresti che venissero creati altri gruppi puoi scriverlo su <Link href='https://t.me/unimichat' target='_blank'>@unimichat</Link>.",
                        text3: 'Stai cercando gruppi riguardanti giochi? Nessun problema!',
                        mug: "Dai un'occhiata all'associazione studentesca <Text styles={semibold} style={{color: theme.palette.themeSecondary}}>MUG</Text> (Milan University Gamers).",
                        availableGroups: 'Gruppi disponibili',
                        extraGroup: 'Gruppo extra'
                    },
                    university: {
                        header: {
                            text1: "Sei alla ricerca di informazioni legate al nostro ateneo? Nessun problema!",
                            text2: "Qui puoi trovare tutto quello che ti serve."
                        },
                        linksAndRedirects: {
                            text1: "Trovare tutti i collegamenti utili legati all'ateneo può richiedere tempo.", 
                            text2: "Per questo motivo li abbiamo centralizzati in questa pagina."
                        },
                        text1: 'Il rappresentante degli studenti è un ruolo molto importante ed altamente formativo, che garantisce a tutti gli studenti universitari un supporto alle difficoltà che può incontrare durante il periodo di studio.',
                        text2: 'Di seguito è presente la lista dei rappresentanti di ogni dipartimento e i loro contatti.',
                        departmentSelect: 'Seleziona un dipartimento',
                        representativesNotAvailable: 'Nessun rappresentante disponibile.',
                        news: {
                            title: 'Notizie generali'
                        },
                    },
                    contributors: {
                        text1:'Di seguito è possibile trovare tutte le persone che hanno contribuito allo sviluppo del sito web, dei servizi che offre, della wiki, e del network in generale.',
                        header1: 'Manutentori principali',
                        header2: 'Contributori',
                        githubProfile: 'Profilo GitHub',
                        websiteProfile: 'Sito Web',
                        text2: 'Hai contribuito allo sviluppo del network e vorresti comparire in questa lista? Scrivi in privato a <Link href="https://t.me/giuseppetm">@giuseppetm</Link>.'
                    },
                    aboutUs: {
                        text1: "Siamo un'organizzazione senza fini di lucro, apolitica, ovvero apartitica, e neutrale.",
                        text2: "Il nostro obiettivo è quello di offrire servizi telematici agli studenti dell'Università degli Studi di Milano.",
                        text3: "Qui è possibile vedere tutte le persone che fanno parte del Network StudentiUniMi.",
                        button: { text1: 'Statuto', text2: "Dai un'occhiata al nostro statuto!" },
                        header1: 'Coordinatore',
                        header2: 'Comitato Amministrativo Network',
                        header3: 'Amministratori dei gruppi telegram'
                    },
                    footer: [
                        { text: 'Il network e il relativo sito web non sono affiliati all\'Università degli Studi di Milano.' },
                        { header: 'Link utili' },
                        { header: 'Contatti', text: "Per qualsiasi dubbio o proposta è possibile scrivere sul gruppo principale del network <Link href='https://t.me/unimichat' target='_blank'>@unimichat</Link>." },
                    ],
                },











                en: {
                    helmet: {
                        homepage: { title: "Network StudentiUniMi - Groups, services and much more", description: "Official website of StudentiUniMi Network: WhatsApp groups replaced by Telegram ones, services and much more. The largest network of the University of Milan." },
                        courses: { title: "Groups | Network StudentiUniMi", description: "All Telegram groups for all degree courses (three-year, master, single-cycle degrees) of the University of Milan. Join, ask for information and meet new people thanks to the StudentiUniMi Network." },
                        services: { title: "Services | Network StudentiUniMi", description: "Tired of unimia's inefficiencies? On this alternative page you can access all the useful links of the University of Milan." },
                        rules: { title: "Groups rules | Network StudentiUniMi", description: "The official rules of the StudentiUniMi Network." },
                        university: { title: "University redirects | Network StudentiUniMi", description: "Stay up-to-date with all the information and representatives of the University of Milan, offered by the StudentiUniMi Network." },
                        organization: { title: "Organization | Network StudentiUniMi", description: "Who are we? Discover the organization behind the StudentiUniMi Network, the largest network of the University of Milan." },
                        degreeLoaded: { title1: 'Groups of ', title2: ' | Network StudentiUniMi', description1: 'All the links of the Telegram groups of ', description2: ' degree of the University of Milan. Offered by StudentiUniMi Network.' }
                    },
                    loading: "Loading..",
                    telegramGroup: 'Telegram Group',
                    errorLoadingDepartments: 'Error has occured while retrieving departments.',
                    errorLoadingDegrees: 'Error has occured while retrieving degrees.',
                    noRedirectsAvailable: 'There are no redirects available.',
                    errorContactAdmin: 'An error has occured; contact an administrator.',
                    headerMenuItems: {
                        home: 'Home',
                        courses: 'Groups',
                        services: 'Services',
                        rules: 'Rules',
                        university: 'University',
                        aboutUs: 'About Us',
                    },
                    settingsPanel: {
                        settings: 'Settings',
                        changeTheme: 'Dark Mode',
                        darkTheme: 'On',
                        lightTheme: 'Off',
                        selectLanguage: 'Language',
                        italian: 'Italian',
                        english: 'English',
                        selectColor: 'Select the main color',
                        close: 'Close',
                        coachMark: { text1: 'Welcome on our website!', text2: 'Here you can find some settings that might be helpful. Enjoy our services! :)', understood: 'Got it!' }
                    },
                    homepage: {
                        telegramText: "Telegram is way more safer and efficient than WhatsApp.",
                        telegramButton: "Tell me more",
                        section1: {
                            typedText: 'Are you a student of...',
                            text1: 'Stay in touch. More, and better.',
                            text2: 'Communicating is important, but it can be frustrating to do so on WhatsApp groups left to themselves. We are creating Telegram groups for each degree course of the University of Milan to facilitate the exchange of informations.',
                        },
                        section2: {
                            text: 'Everything has its own Telegram group chat',
                            card1: {
                                text: 'We are creating a Telegram group for each degree course; press the button below to find yours. A group for each teaching course will also be available soon.',
                                button: 'Course Groups'
                            },
                            card2: {
                                text: 'Are you a new student? Are you looking for materials or someone to do tutoring? No problem, join one of our additional groups!',
                                button: 'Extra Groups'
                            },
                            card3: {
                                text: 'We think that a respectful and inclusive environment makes us more innovative and efficient. Read the rules!',
                                button: 'Rules'
                            }
                        },
                        section3: {
                            text: 'Our main links',
                            card1: {
                                text: 'Join our telegram channel to stay updated and see all the available links!',
                                button: 'Telegram Channel'
                            },
                            card2: {
                                text: 'Join the main telegram group of our networ to discuss.',
                                button: 'Telegram Group'
                            },
                            card3: {
                                text: 'Join our discord to share information and meet new friends!',
                                button: 'Discord Server'
                            },
                            card4: {
                                text: 'Visit the github organization to see all our projects.',
                                button: 'GitHub Org.'
                            }
                        },
                        section4: {
                            text: 'Our services to help you studying',
                            card1: {
                                text: 'Visit our Wiki and help us improving it!',
                                button: 'Wiki'
                            },
                            card2: {
                                text: 'Use this page to easily reach all the official services provided by UniMi.',
                                button: 'unimia.studentiunimi.it'
                            },
                            card3: {
                                text: '“Hey pal, would you mind sharing those notes?”',
                                button: 'HedgeDoc'
                            },
                            card4: {
                                text: 'Our service to safely and easily share your code or any other kind of material.',
                                button: 'PasteBin'
                            }
                        },
                        section5: {
                            text: 'Have you tried turning it off and on again?',
                            card1: {
                                text: 'I have a didactic problem.',
                                button: 'Representatives'
                            },
                            card2: {
                                text: 'I have a technical problem.',
                                button: 'Admins'
                            }
                        },
                        section6: {
                            text: 'Frequently asked questions'
                        },
                        section7: {
                            text: 'Other informations',
                            card1: { text1: 'We have more than', text2: 'users.' },
                            card2: { text1: 'We have', text2: 'telegram groups.' },
                            card3: { text1: 'We cover', text2: 'degree courses.' },
                        },
                        telegramSection: {
                            title: "Why Telegram and not WhatsApp?",
                            description: "Many students may wonder why we have chosen Telegram as the main platform for all our activities: as computer science students, we are always looking for the best solution to a problem, and in this case use Whatsapp as a support to hundreds of groups (and hopefully thousands in the future) it would have been first of all impractical from a purely managerial point of view (WhatsApp has a limit of 256 members for group), and secondly it would have been a nightmare for you students to search the various materials and communicate effectively.",
                            advantages: '<Link href="https://telegram.org/" target="_blank">Telegram</Link> advantages',
                            list: [
                                "Groups of up to 250 thousand members",
                                "Telephone numbers not exposed",
                                "Use on multiple devices at the same time",
                                "Folders for better organization",
                                "Channels with information" 
                            ]
                        }
                    },
                    rules: {
                        text1: "The rules of our Telegram groups make us more productive and innovative.",
                        text2: 'Here you can find the rules of the telegram groups of our network. Please read them before joining any group.',
                        question: 'Why did we create them?',
                        answer: { text1: 'We want to make clear the reasons that took us to introducing these rules into the network.', text2: "We noticed that most of the groups were flooded with trivial questions re-proposed every day. This was lowering the quality of our chats and discouraged the participation of some students. Therefore, we started repressing this phenomenon warning their proponents and offering a dedicated <Link href='https://wiki.studentiunimi.it/start' target='_blank'>Wiki</Link> page for each course." },
                        header: "Telegram groups rules",
                    },
                    groups: {
                        findDegreeByName: "Find your degree by name",
                        groupsSection: {
                            text1: "Degree groups",
                            text2: "Find all the Telegram groups of your degree"
                        },
                        extraGroupsSection: {
                            text1: "Extra Groups",
                            text2: "Additional groups of the Network"
                        },
                        departmentSelect: 'Select the department',
                        cdlSelect: 'Select the degree',
                        availableRedirects: 'Available redirects',
                        availableGroups: 'Available groups',
                        availableAdmins: 'Available admins',
                        nameFilter: 'Search by name',
                        yearFilter: 'Search by year',
                        semesterFilter: 'Search by semester',
                        year: 'Year',
                        semester: 'Semester',
                        complementary: 'Complementary',
                        websites: 'Websites',
                        mainGroup: 'Main group',
                        mainGroupDescription: 'Main group for any type of discussion about this degree.',
                        groupNotAvailable: 'Group not available.',
                        contactAdmin: "<Icon iconName='FollowUser'/> Contact an <Link href='https://studentiunimi.it/organization/'>administrator</Link> if you would like to be added to this group, or ask directly on <Link href='https://t.me/unimichat' target='_blank'>@unimichat</Link>.",
                        groupsNotFound: 'Groups not found.',
                        adminsNotFound: 'There are no admins available.',
                        wikiCard: {
                            buttonTitle: "Tell me more about the Wiki",
                            title: "Informations about the Wiki",
                            description: "Links to the Wiki could lead to unfinished or empty pages: you can help us collecting FAQs and any other useful material. Many degree courses have no material at this moment! You can help the grow of the network by creating a free account and compile new informations about the courses you followed.",
                            clickToWiki: "Click here to go to the Wiki",
                            type: "Announcement",
                            date: "August 29, 2021"
                        }
                    },
                    services: {
                        text1: 'Tired of surfing into endless pages to find the services offered by the university?',
                        text2: "We grouped all the links here! We added some guides we created too.",
                        text3: "If you think that something should be added you can suggest it on <Link href='https://t.me/unimichat' target='_blank'>@unimichat</Link>.",
                        availableServices: 'Available services and guides',
                        guide: "Guide",
                        service: "Service",
                        legend: "Legend"
                    },
                    extraGroups: {
                        text1: 'Looking for additional groups? Here you can find all the ones we have created: we remind you that there are groups with specific regulations for example for the creation of announcements for the sale of materials, so it is recommended to read the welcome message in this case.',
                        text2: "Would you like to suggest a new group? Bring your request on <Link href='https://t.me/unimichat' target='_blank'>@unimichat</Link>.",
                        text3: 'Are you looking for telegram groups about games? No problem!',
                        mug: "Take a look at the university association <Text styles={semibold} style={{color: theme.palette.themeSecondary}}>MUG</Text> (Milan University Gamers).",
                        availableGroups: 'Available groups',
                        extraGroup: 'Extra group'
                    },
                    university: {
                        header: {
                            text1: "Are you looking for informations related to our university? No problem!",
                            text2: "Here you can find all you need."
                        },
                        linksAndRedirects: {
                            text1: "Finding all the useful links related to the university can take time.", 
                            text2: "No problem! We have put them on this page."
                        },
                        text1: 'Being a students representative is a very important role and a formative experience. They provide a support to any student against all the difficulties during the study period.',
                        text2: 'The list below reports all the representatives of each department and their contacts.',
                        departmentSelect: 'Select your department',
                        representativesNotAvailable: 'There are no representatives available.',
                        news: {
                            title: 'Main news',
                        },
                    },
                    contributors: {
                        text1:'In this section you can find the contributors who have worked into the development of the Network, the website and all its services.',
                        header1: 'Main maintainers',
                        header2: 'Contributors',
                        githubProfile: 'Github Profile',
                        websiteProfile: 'Website',
                        text2: 'Did you contributed to the development of the Network and you would like to appear in this list? Send a private message to <Link href="https://t.me/giuseppetm">@giuseppetm</Link>.'
                    },
                    aboutUs: {
                        text1: 'We are a non-profit organization, neutral and not affiliated to any political party.',
                        text2: "Our goal is to provide online services to the students at the University of Milan.",
                        text3: "Here you can see all the people within the Network StudentiUniMi.",
                        button: { text1: 'Statute', text2: "You can read our statute here!" },
                        header1: 'Coordinator',
                        header2: "Network's Administrative Committee",
                        header3: 'Telegram groups Administrators'
                    },
                    footer: [
                        { text: 'The network and the associated website are not affiliated to the University of Milan.' },
                        { header: 'Useful links' },
                        { header: 'Contacts', text: "For any question or suggestion you can join the main network group <Link href='https://t.me/unimichat' target='_blank'>@unimichat</Link>." },
                    ]
                }
            })
        }   

        if (language != null) {
            LocalizationService.data.setLanguage(language!);
        }
    }

    static strings = () => {
        return LocalizationService.data!
    }

    static getLanguage = () => {
        return LocalizationService.data!.getLanguage();
    }
}

export default LocalizationService