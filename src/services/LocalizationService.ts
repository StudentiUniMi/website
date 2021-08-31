import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import ILocalizationStrings from '../data/ILocalizationStrings';

class LocalizationService {
    private static data?: LocalizedStringsMethods & ILocalizationStrings;

    static localize = (language: string | undefined = undefined) => {
        if (LocalizationService.data == null || LocalizationService.data === undefined) { // maybe this check helps
            LocalizationService.data = new LocalizedStrings<ILocalizationStrings>({
                it: {
                    loading: "Caricamento in corso..",
                    telegramGroup: 'Gruppo Telegram',
                    errorLoadingDepartments: 'Errore durante il caricamento dei dipartimenti.',
                    errorLoadingDegrees: 'Errore durante il caricamento dei corsi di laurea.',
                    noRedirectsAvailable: 'Non ci sono collegamenti disponibili.',
                    errorContactAdmin: 'Si è verificato un errore; contatta un amministratore.',
                    headerMenuItems: {
                        home: 'Home',
                        aboutUs: 'Chi siamo',
                        rules: 'Regolamento',
                        courses: 'Corsi',
                        services: 'Servizi',
                        additionalGroups: 'Gruppi extra',
                        representatives: 'Rappresentanti',
                        contributors: 'Contributori'
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
                        section1: {
                            text1: 'Benvenuto nel sito web del <Text style={{color: theme.palette.themePrimary}} variant="xLarge">Network StudentiUniMi</Text> !',
                            text2: 'La nostra missione è organizzare le informazioni riguardo l\'Università degli studi di Milano e renderle accessibili a tutti.',
                            sliders: [
                                { text1: 'Sei uno studente che vuole immatricolarsi e che cerca un gruppo generale in cui chiedere informazioni', text2: 'Ne abbiamo creato uno apposito!', cardText: "Pre-matricole, ammissioni e immatricolazioni" },
                                { text1: 'Stai cercando un gruppo per trovare un alloggio a Milano insieme ad altri studenti universitari oppure vuoi creare un annuncio', text2: 'Entra nel gruppo apposito!', cardText: 'Alloggi' },
                                { text1: 'Vorresti vendere dei libri oppure slide rilegate e stampate? Oppure magari sei una nuova matricola e cerchi il materiale del tuo corso', text2: 'Fai un annuncio apposito qui!', cardText: 'Materiali' },
                                { text1: 'Sei in cerca di qualcuno che ti possa dare delle ripetizioni per aiutarti a preparare un esame, oppure vuoi proporti a tal riguardo', text2: 'Fai un annuncio apposito qui!', cardText: 'Ripetizioni' },
                                { text1: 'Ti ricordiamo che abbiamo a disposizione una <Text styles={semibold}>Wiki</Text> in cui è possibile collaborare e aiutare altri studenti! Puoi trovare tutto il materiale che ti serve, ma ricorda che è importante anche contribuire!', reachWiki: 'Raggiungi la Wiki!' },
                                { text1: 'Per noi offrirti la possibilità di non perdere tempo alla ricerca di servizi universitari è molto importante. Proprio per questo abbiamo realizzato una pagina apposita per trovarli tutti subito, e farti scoprire anche alcune guide che abbiamo realizzato!' }
                            ]
                        },
                        section2: {
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
                        section3: {
                            text: 'Ogni cosa ha il suo gruppo Telegram',
                            card1: {
                                text: 'Dì addio al mega gruppo WhatsApp in cui non si capisce nulla! Abbiamo creato un gruppo Telegram per ogni insegnamento.',
                                button: 'Gruppi dei corsi'
                            },
                            card2: {
                                text: 'Ripetizioni, materiali, erasmus, tirocinio, alloggi. Tutte quelle cose extra che però hanno la loro importanza.',
                                button: 'Gruppi extra'
                            },
                            card3: {
                                text: "Crediamo che un ambiente rispettoso e inclusivo ci renda più innovativi e produttivi. Dai un'occhiata al regolamento dei gruppi.",
                                button: 'Regolamento'
                            }
                        },
                        section4: {
                            text: 'I nostri servizi per aiutarti nello studio',
                            card1: {
                                text: 'Accedi alla Wiki del Network e aiutaci a migliorarla contribuendo!',
                                button: 'Wiki'
                            },
                            card2: {
                                text: 'Utilizza la nostra comoda pagina che ti permette di raggiungere tutti i servizi UniMi.',
                                button: 'Servizi'
                            },
                            card3: {
                                text: 'Mi mandi i tuoi appunti? Un attimo e sono subito da lei!',
                                button: 'HedgeDoc'
                            },
                            card4: {
                                text: 'Accedi al nostro servizio per condividere codice e qualsiasi altro materiale in maniera comoda e sicura.',
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
                        vaccineSection: {
                            title: "Informazioni sui vaccini",
                            card1: {
                                title: "Obbligo del Green Pass",
                                description: "Vi ricordiamo che da settembre in tutte le università per svolgere una qualsiasi attività in presenza (compreso l'accesso alle aule studio) sarà necessario possedere il green pass. L'assenza di green pass non è un motivo valido per svolgere un esame a distanza.",
                                date: "09 Agosto, 2021"
                            },
                            card2: {
                                title: "Iniziative a supporto degli studenti",
                                description: "Per venire incontro agli studenti la Regione Lombardia si è attivata con una serie di iniziative a supporto degli studenti, tra cui agende prioritarie per la vaccinazione. Alternativamente al vaccino un altro modo per ottenere un green pass valido per 48 ore è attraverso un tampone negativo, vi ricordiamo però che questa opzione vi costerà ogni volta almeno 15€ circa.",
                                date: "10 Agosto, 2021"
                            },
                            click: "Clicca qui per maggiori informazioni",
                            news: "Notizia"
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
                    aboutUs: {
                        text1: "Siamo un'organizzazione senza fini di lucro, apolitica, ovvero apartitica, e neutrale, la quale si pone l'obiettivo di offrire servizi telematici agli studenti dell'Università degli Studi di Milano.",
                        button: { text1: 'Statuto', text2: "Dai un'occhiata al nostro statuto!" },
                        header1: 'Coordinatore',
                        header2: 'Comitato Amministrativo',
                        header3: 'Amministratori dei gruppi telegram'
                    },
                    rules: {
                        text1: 'Qui è possibile trovare il regolamento dei gruppi telegram del network. Si consiglia di leggere tutte le regole di cui è composto prima di usare uno qualsiasi di essi.',
                        question: 'Perchè abbiamo introdotto un regolamento?',
                        answer: { text1: 'Vogliamo rendere chiari i motivi per cui abbiamo deciso di regolamentare i gruppi del nostro network.', text2: "Abbiamo notato che la maggior parte di essi erano tempestati di domande banali, fatte più volte al giorno, la cui risposta era facilmente trovabile. Questo riduce la qualità della chat e scoraggia la partecipazione di studenti più attenti. Per questo motivo abbiamo deciso di provare a limitare il fenomeno, da una parte ammonendo chi continua a fare interventi non produttivi, e dall'altra fornendo un modo facile e veloce per trovare le informazioni più importanti tramite la <Link href='https://wiki.studentiunimi.it/' target='_blank'>Wiki</Link>."},
                        text2: 'Regolamento dei gruppi Telegram'
                    },
                    courses: {
                        text1: 'Qui è possibile trovare i gruppi telegram, siti web, wiki, faq (se disponibili), collegamenti e informazioni generali riguardo il tuo corso di laurea e i suoi corsi didattici.',
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
                        text1: 'Siete stanchi di dover andare a spulciare miriadi di pagine che neanche caricano alla ricerca di strumenti e servizi universitari? Abbiamo realizzato una pagina per centralizzarli tutti! Inoltre, qui potete trovare anche alcune guide che abbiamo realizzato.',
                        text2: '<Text styles={semibold}>Attenzione:</Text> alcune pagine come Unimia oppure i Servizi SIFA potrebbero non caricare (ovviamente ricordiamo che non è colpa nostra in tal caso!).',
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
                    representatives: {
                        text1: 'Il rappresentante degli studenti è un ruolo molto importante ed altamente formativo, che garantisce a tutti gli studenti universitari un supporto alle difficoltà che può incontrare durante il periodo di studio.',
                        text2: 'Di seguito è presente la lista dei rappresentanti di ogni dipartimento e i loro contatti.',
                        departmentSelect: 'Seleziona un dipartimento',
                        representativesNotAvailable: 'Nessun rappresentante disponibile.'
                    },
                    contributors: {
                        text1:'Di seguito è possibile trovare tutte le persone che hanno contribuito allo sviluppo del sito web, dei servizi che offre, della wiki, e del network in generale.',
                        header1: 'Manutentori principali',
                        header2: 'Contributori',
                        githubProfile: 'Profilo GitHub',
                        websiteProfile: 'Sito Web',
                        text2: 'Hai contribuito allo sviluppo del network e vorresti comparire in questa lista? Scrivi in privato a <Link href="https://t.me/giuseppetm">@giuseppetm</Link>.'
                    },
                    footer: [
                        { text: 'Il network e il relativo sito web non sono affiliati all\'Università degli Studi di Milano.' },
                        { header: 'Link utili' },
                        { header: 'Contatti', text: "Per qualsiasi dubbio o proposta è possibile scrivere sul gruppo principale del network <Link href='https://t.me/unimichat' target='_blank'>@unimichat</Link>." },
                    ],
                },











                en: {
                    loading: "Loading..",
                    telegramGroup: 'Telegram Group',
                    errorLoadingDepartments: 'Error has occured while retrieving departments.',
                    errorLoadingDegrees: 'Error has occured while retrieving degrees.',
                    noRedirectsAvailable: 'There are no redirects available.',
                    errorContactAdmin: 'An error has occured; contact an administrator.',
                    headerMenuItems: {
                        home: 'Home',
                        aboutUs: 'About Us',
                        rules: 'Rules',
                        courses: 'Courses',
                        services: 'Services',
                        additionalGroups: 'Extra Groups',
                        representatives: 'Representatives',
                        contributors: 'Contributors'
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
                        section1: {
                            text1: 'Welcome to <Text style={{color: theme.palette.themePrimary}} variant="xLarge">Network StudentiUniMi</Text> !',
                            text2: 'Our goal is to organize all the informations about the University of Milan (Università degli Studi di Milano, Unimi) and make them easily accessible to anyone.',
                            sliders: [
                                { text1: 'Are you a student who wants to matriculate and who is looking for a general group in which to ask for informations ', text2: 'We created one just for this!', cardText: "Pre-students, admissions and enrollments" },
                                { text1: 'Are you looking for a group to find an apartment in Milan together with other university students, or you want to create an ad ', text2: 'Join the dedicated group!', cardText: 'Apartments' },
                                { text1: 'Would you like to sell books or printed slides? Or maybe you are a new freshman and are looking for your course material', text2: 'Create an ad here!', cardText: 'Materials' },
                                { text1: 'Are you looking for someone who can give you private lessons to help you prepare for an exam, or you want to propose in this regard', text2: 'Create an ad here!', cardText: 'Private lessons' },
                                { text1: "We remind you that we have a <Text styles={semibold}>Wiki</Text> where you can collaborate and help other students! You can find all the material you need, but remember that it's also important to contribute!", reachWiki: 'Reach the Wiki!' },
                                { text1: 'For us, offering you the opportunity not to waste time looking for university services is very important. Precisely for this reason we have created a special page to find them all immediately, and also let you discover some guides we have created!' }
                            ]
                        },
                        section2: {
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
                        section3: {
                            text: 'Everything has its own Telegram group chat',
                            card1: {
                                text: 'Say goodbye to those messy WhatsApp chats! We have created a Telegram group for each course.',
                                button: 'Course Groups'
                            },
                            card2: {
                                text: 'Tutoring, course materials, Erasmus, internship, apartments and many other extra things.',
                                button: 'Extra Groups'
                            },
                            card3: {
                                text: 'We think that a respectful and inclusive environment makes us more innovative and efficient. Read the rules!',
                                button: 'Rules'
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
                                button: 'Services'
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
                        vaccineSection: {
                            title: "Informations about vaccines",
                            card1: {
                                title: "Green Pass Obligation",
                                description: "We remind you that from September in all universities to carry out any activity in presence (including access to study rooms) it will be necessary to have a green pass. The absence of a green pass is not a valid reason for taking a remote exam.",
                                date: "August 09, 2021"
                            },
                            card2: {
                                title: "Initiatives to support students",
                                description: "To support the students, the Lombardy Region has taken action with a series of initiatives, including priority agendas for vaccination. As an alternative to the vaccine, another way to obtain a green pass valid for 48 hours is through a negative buffer, however, we remind you that this option will cost you at least € 15 each time.",
                                date: "August 10, 2021"
                            },
                            click: "Click here to see more informations",
                            news: "News"
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
                    aboutUs: {
                        text1: 'We are a non-profit organization, neutral and not affiliated to any political party. Our goal is to provide online services to the students at the University of Milan.',
                        button: { text1: 'Statute', text2: "You can read our statute here!" },
                        header1: 'Coordinator',
                        header2: 'Administrative Committee',
                        header3: 'Telegram groups Administrators'
                    },
                    rules: {
                        text1: 'Here you can find the rules of the telegram groups of our network. Please read them before joining any group.',
                        question: 'Why did we create them?',
                        answer: {
                            text1: 'We want to make clear the reasons that took us to introducing these rules into the network.', text2: "We noticed that most of the groups were flooded with trivial questions re-proposed every day. This was lowering the quality of our chats and discouraged the participation of some students. Therefore, we started repressing this phenomenon warning their proponents and offering a dedicated <Link href='https://wiki.studentiunimi.it/start' target='_blank'>Wiki</Link> page for each course." },
                        text2: 'Telegram groups rules',
                    },
                    courses: {
                        text1: 'In this section you can find telegram groups, websites, wiki, FAQs (if available), redirects and general informations about your degree course and its didactic courses.',
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
                        text1: 'Tired of surfing into endless pages to find the services offered by the university? We grouped all the links here! We added some guides we created too.',
                        text2: "<Text styles={semibold}>Careful:</Text> some web pages like Unimia or SIFA services might not load (we remind you that it's not our fault in this case!).",
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
                    representatives: {
                        text1: 'Being a students representative is a very important role and a formative experience. They provide a support to any student against all the difficulties during the study period.',
                        text2: 'The list below reports all the representatives of each department and their contacts.',
                        departmentSelect: 'Select your department',
                        representativesNotAvailable: 'There are no representatives available.'
                    },
                    contributors: {
                        text1:'In this section you can find the contributors who have worked into the development of the Network, the website and all its services.',
                        header1: 'Main maintainers',
                        header2: 'Contributors',
                        githubProfile: 'Github Profile',
                        websiteProfile: 'Website',
                        text2: 'Did you contributed to the development of the Network and you would like to appear in this list? Send a private message to <Link href="https://t.me/giuseppetm">@giuseppetm</Link>.'
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