import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import ILocalizationStrings from '../models/ILocalizationStrings';

interface helmet {
    homepage: any,
    courses: any,
    services: any,
    rules: any,
    university: any,
    organization: any,
    degreeLoaded: any
};

class LocalizationService {
    private static data?: LocalizedStringsMethods & ILocalizationStrings;

    static localize = (language: string | undefined = undefined) => {
        if (LocalizationService.data == null || LocalizationService.data === undefined) {
            LocalizationService.data = new LocalizedStrings<ILocalizationStrings>({
                it: {
                    helmet: LocalizationService.getHelmetITAProperties(),
                    loading: "Caricamento in corso..",
                    telegramGroup: 'Gruppo Telegram',
                    serverError: 'Errore del server',
                    additionalInformations: 'Per ulteriori informazioni entra nel <Link href="https://t.me/unimichat">gruppo principale</Link>.',
                    noDataAvailable: 'Non ci sono dati disponibili.',
                    errorDataLoading: "C'è stato un errore durante il caricamento dei dati; ricarica la pagina per riprovare.",
                    errorOccured: 'Oops, si è verificato un errore.',
                    errorLoadingDepartments: 'Errore durante il caricamento dei dipartimenti.',
                    errorLoadingDegrees: 'Errore durante il caricamento dei corsi di laurea.',
                    noRedirectsAvailable: 'Non ci sono collegamenti disponibili.',
                    errorContactAdmin: '<Link href="https://studentiunimi.it/organization/">Contatta un amministratore</Link> se il problema persiste.',
                    studentsAssociation: 'Associazione studentesca',
                    reach: 'Raggiungi',
                    findOut: 'Scopri',
                    sidebar: {
                        mainGroup: "Unisciti al nostro gruppo principale",
                        channel: "Entra nel nostro canale Telegram",
                        redirects: "Scopri i nostri collegamenti principali",
                        searchGroup: "Cerca i gruppi Telegram del tuo corso di laurea premendo qui"
                    },
                    headerMenuItems: {
                        home: 'Home',
                        courses: 'Gruppi',
                        services: 'Servizi',
                        rules: 'Regolamento',
                        university: 'Ateneo',
                        aboutUs: 'Chi siamo',
                    },
                    settingsPanel: {
                        joinTelegram: 'Unisciti al canale',
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
                            title: 'Ecco cosa mettiamo a disposizione',
                            cards: {
                                card1: { title: "Gruppi per i corsi di laurea", description: "Più di 300 gruppi dedicati agli specifici corsi di laurea UniMi!" },
                                card2: { title: "Gruppi degli insegnamenti", description: "Oltre 2000 gruppi sui singoli corsi didattici dei corsi di laurea!" },
                                card3: { title: "Servizi telematici", description: "Servizi di ogni tipo, per aiutarti a prendere appunti, scrivere la tesi e molto altro." }
                            }
                        },
                        section3: {
                            header: 'Scopri i nostri collegamenti principali',
                            part1: {
                                title: 'Canale Telegram',
                                description: 'Iscriviti al nostro canale per rimanere sempre aggiornato sulle notizie riguardanti il network.',
                                buttonText: 'Raggiungi il canale'
                            },
                            part2: {
                                title: 'Gruppo principale',
                                description: 'Entra nel nostro gruppo principale per qualsiasi chiarimento o discussione riguardo la nostra Università.',
                                buttonText: 'Raggiungi il gruppo'
                            },
                            part3: {
                                title: 'Server Discord',
                                description: 'Entra nel nostro server discord per scambiare informazioni con altri studenti e conoscere nuove persone.',
                                buttonText: 'Raggiungi il server'
                            },
                        },
                        unimiaSection: {
                            text1: 'Unimia non funziona? Nessun problema!',
                            text2: 'Essendo studenti, sappiamo quanto può essere frustrante dover cercare le risorse universitarie passando per decine di pagine che neanche caricano.',
                            text3: 'Per questo motivo, abbiamo realizzato una pagina che permette di raggiungere tutti i servizi universitari a portata di click, in aggiunta ad alcune guide, servizi e strumenti che abbiamo realizzato.',
                            buttonText: 'unimia.studentiunimi.it'
                        },
                        wikipediaSection: {
                            text1: "Dai un'occhiata alla nostra Wikipedia",
                            text2: 'La Wiki è una sezione parallela al nostro sito web: permette di collaborare per quanto riguarda la condivisione di materiale e altre informazioni utili sui corsi didattici di tutti i corsi di laurea.',
                            text3: "È una risorsa collaborativa: ricorda che il materiale che hai trovato è stato fornito da altri studenti che ci hanno speso tempo! Sarebbe l'ideale il contributo di tutti.",
                            buttonText: 'Raggiungi la Wiki'
                        },
                        additionalServicesSection: {
                            header: 'Scopri i nostri ulteriori servizi',
                            col1: {
                                text: 'HedgeDoc è un servizio che permette di prendere appunti in collaborazione tra più studenti senza il bisogno di doversi registrare.',
                                buttonText: 'Prova HedgeDoc'
                            },
                            col2: {
                                text: 'Paste è un servizio pensato per i programmatori, che permette di condividere codice in maniera semplice e sicura.',
                                buttonText: 'Prova Paste'
                            },
                            col3: {
                                text: 'Overleaf è un editor LaTeX collaborativo basato su cloud utilizzato per scrivere, modificare e pubblicare documenti scientifici.',
                                buttonText: 'Prova Overleaf'
                            },
                        },
                        adminsRepresentativesSection: {
                            header: 'Cerchi un amministratore, o magari un rappresentante?',
                            col1: { title: 'Contatta un rappresentante', description: 'Per contattare un rappresentante devi raggiungere la sezione apposita del sito web, e selezionare il tuo dipartimento.', buttonText: 'Raggiungi la sezione' },
                            col2: { title: 'Contatta un amministratore', description: "Per vedere la lista di amministratori del tuo corso di laurea devi cercare quest'ultimo nella sezione apposita del sito web.", buttonText: 'Raggiungi la sezione' }
                        }, 
                        faqsSection: {
                            header: 'Hai qualche domanda sul nostro Network?',
                            description: "Dai un'occhiata qui per vedere se trovi la risposta, altrimenti chiedi pure sul <Link href='https://t.me/unimichat'>gruppo principale.</Link>"
                        },
                        telegramSection: {
                            title: "Perchè Telegram e non WhatsApp?",
                            description: "Molti studenti potrebbero chiedersi come mai abbiamo scelto Telegram come piattaforma principale per tutte le nostre attività: in quanto informatici, siamo sempre alla ricerca della soluzione migliore ad un problema, e in questo caso utilizzare Whatsapp come supporto a centinaia di gruppi (e si spera migliaia in futuro) sarebbe stato prima di tutto impraticabile da un punto di vista puramente gestionale (WhatsApp ha un limite di 256 membri per gruppo), e seconda cosa sarebbe stato un incubo per voi studenti cercare i vari materiali e comunicare in maniera efficace.",
                            advantages: 'Vantaggi di <Link href="https://telegram.org/">Telegram</Link>',
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
                        text3: 'Il regolamento è attualmente in revisione.',
                        question: 'Perchè abbiamo introdotto un regolamento?',
                        answer: { text1: 'Vogliamo rendere chiari i motivi per cui abbiamo deciso di regolamentare i gruppi del nostro network.', text2: "Abbiamo notato che molti dei nostri gruppi erano spesso inondati di spam, domande off-topic e a volte discussioni decisamente poco cordiali. Questo riduce la qualità della chat e scoraggia la partecipazione degli studenti. Per questo motivo abbiamo deciso di provare a limitare il fenomeno tramite l'introduzione di un regolamento apposito."},
                        header: 'Regolamento dei gruppi Telegram'
                    },
                    groups: {
                        resetSection: 'Reset della pagina',
                        filtersToggle: 'Filtri per la ricerca',
                        findDegreeByName: "Cerca il tuo corso di laurea per nome",
                        groupsSection: {
                            text1: "Gruppi dei corsi e informazioni aggiuntive",
                            text2: "Trova tutti i gruppi Telegram del tuo corso di laurea",
                            text3: "Tutto quello che devi fare è scrivere il nome del tuo corso di laurea qui sotto, e potrai accedere ai gruppi telegram dei tuoi corsi didattici e ad altre informazioni utili."
                        },
                        extraGroupsSection: {
                            text1: "Gruppi universitari e associazioni studentesche",
                            text2: "Unisciti ai gruppi universitari del nostro Network",
                            text3: "Vorresti vendere degli appunti? Cerchi ripetizioni? O magari vuoi sentire delle opinioni sull'Erasmus? Nessun problema, unisciti ai gruppi pensati proprio per tutti questi argomenti! Dai un'occhiata anche alle associazioni studentesche disponibili."
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
                        tutorsGroupDescription: '<Text variant="small" styles={semibold}>ATTENZIONE: </Text><Text variant="small">Questo gruppo <Text styles={semibold} variant="small">non è gestito dal network StudentiUniMi</Text> ma dai <Link href="https://orientamento.di.unimi.it/index.php/contatti/tutor-di-processo">tutor di processo</Link> nominati dal Dipartimento di Informatica.</Text>',
                        groupNotAvailable: 'Gruppo non disponibile',
                        contactAdmin: "<Icon iconName='FollowUser'/> Contatta un <Link href='https://studentiunimi.it/organization/'>amministratore</Link> se vuoi essere aggiunto al gruppo, oppure chiedilo direttamente su <Link href='https://t.me/unimichat'>@unimichat</Link>.",
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
						text1: 'Tutti i servizi, in un\'unica pagina.',
                        text2: "Abbiamo realizzato una pagina per centralizzare tutti i collegamenti inerenti all'Università degli Studi di Milano e rendere disponibili anche le guide, strumenti e servizi telematici che abbiamo realizzato e messo a disposizione.",
                        text3: "Pensi che manchi qualcosa? <Link href='https://t.me/unimichat'>Faccelo sapere!</Link>",
                        selectSubSection: "Seleziona la categoria che ti interessa",
                        availableServices: 'Servizi e guide disponibili',
                        tabs: {
                            redirects: "Link rapidi",
                            guides: "Guide",
                            tools: "Strumenti"
                        },
                        tabsTitle: {
                            redirects: "Link rapidi disponibili",
                            guides: "Guide disponibili",
                            tools: "Strumenti disponibili"
                        },
                        guide: "Guida",
                        service: "Servizio",
                        legend: "Legenda"
                    },
                    extraGroups: {
                        text1: 'Cerchi un gruppo aggiuntivo in particolare? Qui è possibile trovare tutti quelli che abbiamo creato: ricordiamo che ci sono gruppi con regolamenti appositi ad esempio per la creazione di annunci per la vendita di materiali, quindi è consigliato leggere il messaggio di benvenuto in tal caso.',
                        text2: "Se vorresti che venissero creati altri gruppi puoi scriverlo su <Link href='https://t.me/unimichat'>@unimichat</Link>.",
                        text3: 'Stai cercando gruppi riguardanti giochi? Nessun problema!',
                        mug: "Dai un'occhiata all'associazione studentesca <Text styles={semibold} style={{color: theme.palette.themeSecondary}}>MUG</Text> (Milan University Gamers).",
                        availableGroups: 'Gruppi disponibili',
                        extraGroup: 'Gruppo extra'
                    },
                    university: {
                        header: {
                            text1: "Sei alla ricerca di informazioni legate al nostro ateneo?",
                            text2: "Qui puoi trovare tutto quello che ti serve, a partire dai collegamenti più importanti fino ai contatti dei rappresentanti del tuo dipartimento."
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
                        header1: 'Sviluppatori',
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
                        { text: 'Il network e il relativo sito web non sono affiliati all\'Università degli Studi di Milano.', buttonText: 'Entra nel nostro gruppo' },
                        { header: 'Link utili' },
                        { header: 'Contatti', text: "Per qualsiasi dubbio o proposta è possibile scrivere sul gruppo principale del network <Link href='https://t.me/unimichat'>@unimichat</Link>." },
                    ],
                },







                en: {
                    helmet: LocalizationService.getHelmetENGProperties(),
                    loading: "Loading..",
                    telegramGroup: 'Telegram Group',
                    serverError: 'Server error',
                    additionalInformations: 'For more information enter the <Link href="https://t.me/unimichat">main group</Link>.',
                    noDataAvailable: 'No data available.',
                    errorDataLoading: "There was an error loading the data; reload the page to try again.",
                    errorOccured: 'Oops, something went wrong.',
                    errorLoadingDepartments: 'Error has occured while retrieving departments.',
                    errorLoadingDegrees: 'Error has occured while retrieving degrees.',
                    noRedirectsAvailable: 'There are no redirects available.',
                    errorContactAdmin: '<Link href="https://studentiunimi.it/organization/">Contact an administrator</Link> if the problem persists.',
                    studentsAssociation: 'Students association',
                    reach: 'Reach',
                    findOut: 'Find out',
                    sidebar: {
                        mainGroup: "Join our main group",
                        channel: "Enter our Telegram channel",
                        redirects: "Discover our main socials and redirects",
                        searchGroup: "Search the telegram groups of your degree by pressing here"
                    },
                    headerMenuItems: {
                        home: 'Home',
                        courses: 'Groups',
                        services: 'Services',
                        rules: 'Rules',
                        university: 'University',
                        aboutUs: 'About Us',
                    },
                    settingsPanel: {
                        joinTelegram: 'Join the channel',
                        settings: 'Settings',
                        changeTheme: 'Dark Mode',
                        darkTheme: 'On',
                        lightTheme: 'Off',
                        selectLanguage: 'Select the language',
                        italian: 'Italian',
                        english: 'English',
                        selectColor: 'Select the main color',
                        close: 'Close',
                        coachMark: { text1: 'Welcome on our website!', text2: 'Here you can find some settings that might be helpful. Enjoy our services! :)', understood: 'Got it!' }
                    },
                    homepage: {
                        telegramText: "Telegram is way safer and efficient than WhatsApp.",
                        telegramButton: "Tell me more",
                        section1: {
                            typedText: 'Are you a student of...',
                            text1: 'Stay in touch. More, and better.',
                            text2: 'Communicating is important, but it can be frustrating to do so on WhatsApp groups left to themselves. We are creating Telegram groups for each degree course of the University of Milan to facilitate the exchange of informations.',
                        },
                        section2: {
                            title: 'This is what we provide',
                            cards: {
                                card1: { title: "Groups for degree courses", description: "More than 300 groups dedicated to specific UniMi degree courses!" },
                                card2: { title: "Teaching groups", description: "Over 2000 groups on the single didactic courses of the degree courses!" },
                                card3: { title: "Telematic services", description: "Services of all kinds, to help you take notes, write your thesis and much more." }
                            }
                        },
                        section3: {
                            header: 'Discover our main links ',
                            part1: {
                                title: 'Telegram Channel',
                                description: 'Subscribe to our channel to stay up to date on news regarding the network. ',
                                buttonText: 'Reach the channel'
                            },
                            part2: {
                                title: 'Main group',
                                description: 'Join our main group for any clarification or discussion regarding our University.',
                                buttonText: 'Reach the group'
                            },
                            part3: {
                                title: 'Discord Server',
                                description: 'Join our discord server to exchange information with other students and meet new people.',
                                buttonText: 'Reach the server'
                            },
                        },
                        unimiaSection: {
                            text1: 'Unimia not working? No problem!',
                            text2: "As students, we know how frustrating it can be to search for university resources through dozens of pages that don't even load.",
                            text3: 'For this reason, we have created a page that allows you to reach all the university services just a click away, in addition to some guides and tools we have created.',
                            buttonText: 'unimia.studentiunimi.it'
                        },
                        wikipediaSection: {
                            text1: "Check out our Wikipedia",
                            text2: 'The Wiki is a section parallel to our website: it allows you to collaborate regarding the sharing of material and other useful information on the didactic courses of all degree courses.',
                            text3: "It's a collaborative resource: remember that the material you found was provided by other students who spent their time on it! Everyone's contribution would be ideal. ",
                            buttonText: 'Reach the Wiki'
                        },
                        additionalServicesSection: {
                            header: 'Discover our additional services ',
                            col1: {
                                text: 'HedgeDoc is a service that allows you to take notes in collaboration between multiple students without the need to register.',
                                buttonText: 'Try HedgeDoc'
                            },
                            col2: {
                                text: 'Paste is a service designed for programmers, which allows you to share code in a simple and secure way.',
                                buttonText: 'Try Paste'
                            },
                            col3: {
                                text: 'Overleaf is a cloud-based collaborative LaTeX editor used for writing, editing and publishing scientific papers.',
                                buttonText: 'Try Overleaf'
                            },
                        },
                        adminsRepresentativesSection: {
                            header: 'Are you looking for an administrator, or perhaps a representative?',
                            col1: { title: 'Contact a representative', description: 'To contact a representative you need to go to the appropriate section of the website, and select your department.', buttonText: 'Reach the section' },
                            col2: { title: 'Contact an administrator', description: "To see the list of administrators of your degree program, you must search it in the appropriate section of the website.", buttonText: 'Reach the section' }
                        },
                        faqsSection: {
                            header: 'Do you have any questions about our Network? ',
                            description: "Have a look here to see if you find the answer, otherwise feel free to ask on the <Link href='https://t.me/unimichat'>main group</Link>."
                        },
                        telegramSection: {
                            title: "Why Telegram and not WhatsApp?",
                            description: "Many students may wonder why we have chosen Telegram as the main platform for all our activities: as computer science students, we are always looking for the best solution to a problem, and in this case use Whatsapp as a support to hundreds of groups (and hopefully thousands in the future) it would have been first of all impractical from a purely managerial point of view (WhatsApp has a limit of 256 members for group), and secondly it would have been a nightmare for you students to search the various materials and communicate effectively.",
                            advantages: '<Link href="https://telegram.org/">Telegram</Link> advantages',
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
                        text3: 'The rules are currently under review.',
                        question: 'Why did we create them?',
                        answer: { text1: 'We want to make clear the reasons that took us to introducing these rules into the network.', text2: "We noticed that many of our groups were often flooded with spam, off-topic questions and sometimes downright unfriendly discussions. This reduces the quality of the chat and discourages student participation. For this reason we have decided to try to limit the phenomenon by introducing a specific regulation." },
                        header: "Telegram groups rules",
                    },
                    groups: {
                        resetSection: 'Reset page',
                        filtersToggle: 'Search filters',
                        findDegreeByName: "Find your degree by name",
                        groupsSection: {
                            text1: "Degree groups",
                            text2: "Find all the Telegram groups of your degree",
                            text3: "All you have to do is write the name of your degree below, and you will be able to access all the telegram groups of your teaching courses and other useful informations."
                        },
                        extraGroupsSection: {
                            text1: "University groups and students associations",
                            text2: "Join the university groups of our Network",
                            text3: "Would you like to sell some notes? Are you looking for repetitions? Or maybe you want to hear some opinions on Erasmus? No problem, join the groups created specifically for all these topics! Also take a look at the student associations available."
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
                        tutorsGroupDescription: '<Text variant="small" styles={semibold}>WARNING:</Text><Text variant="small"> This group <Text styles={semibold} variant="small">is not managed by network StudentiUniMi</Text> but by <Link href="https://orientamento.di.unimi.it/index.php/contatti/tutor-di-processo">tutors</Link> nominated by the computer science department.</Text>',
                        groupNotAvailable: 'Group not available.',
                        contactAdmin: "<Icon iconName='FollowUser'/> Contact an <Link href='https://studentiunimi.it/organization/'>administrator</Link> if you would like to be added to this group, or ask directly on <Link href='https://t.me/unimichat'>@unimichat</Link>.",
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
                        text1: 'All services, in one central place.',
                        text2: "We have created a page to centralize all the connections relating to the University of Milan and also make available our guides and telematic services we have created.",
                        text3: "Do you think something is missing? <Link href='https://t.me/unimichat'>Let us know!</Link>",
                        selectSubSection: "Select a category",
                        tabs: {
                            redirects: "Redirects",
                            guides: "Guides",
                            tools: "Tools"
                        },
                        tabsTitle: {
                            redirects: "Available redirects",
                            guides: "Available guides",
                            tools: "Available tools"
                        },
                        availableServices: 'Available services and guides',
                        guide: "Guide",
                        service: "Service",
                        legend: "Legend"
                    },
                    extraGroups: {
                        text1: 'Looking for additional groups? Here you can find all the ones we have created: we remind you that there are groups with specific regulations for example for the creation of announcements for the sale of materials, so it is recommended to read the welcome message in this case.',
                        text2: "Would you like to suggest a new group? Bring your request on <Link href='https://t.me/unimichat'>@unimichat</Link>.",
                        text3: 'Are you looking for telegram groups about games? No problem!',
                        mug: "Take a look at the university association <Text styles={semibold} style={{color: theme.palette.themeSecondary}}>MUG</Text> (Milan University Gamers).",
                        availableGroups: 'Available groups',
                        extraGroup: 'Extra group'
                    },
                    university: {
                        header: {
                            text1: "Are you looking for informations related to our university?",
                            text2: "Here you can find everything you need, starting with the most important links to the contacts of the representatives of your department. "
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
                        header1: 'Developers',
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
                        { text: 'The network and the associated website are not affiliated to the University of Milan.', buttonText: 'Join our main group' },
                        { header: 'Useful links' },
                        { header: 'Contacts', text: "For any question or suggestion you can join the main network group <Link href='https://t.me/unimichat'>@unimichat</Link>." },
                    ]
                }
            })
        }   

        if (language != null && language !== undefined) {
            LocalizationService.data?.setLanguage(language!);
        }
    }

    static strings = () => {
        return LocalizationService.data;
    }

    static getLanguage = () => {
        return LocalizationService.data?.getLanguage();
    }

    static getHelmetITAProperties = () : helmet => {
        return {
            homepage: { title: "Network StudentiUniMi - Gruppi, servizi e molto altro", description: "Sito web ufficiale del Network StudentiUniMi: gruppi WhatsApp rimpiazziati da Telegram, servizi e molto altro. Il network più grande dell'Università degli Studi di Milano." },
            courses: { title: "Tutti i gruppi | Network StudentiUniMi", description: "Tutti i gruppi Telegram per tutti i corsi di laurea (triennali, magistrali, lauree a ciclo unico) dell'Università degli Studi di Milano. Entra, chiedi informazioni e conosci persone nuove grazie al Network StudentiUniMi." },
            services: { title: "Servizi e link rapidi | Network StudentiUniMi", description: "Stanco dei disservizi di unimia? Da questa pagina alternativa puoi accedere a tutti i link utili dell'Università degli Studi di Milano." },
            rules: { title: "Regolamento dei gruppi | Network StudentiUniMi", description: "Il regolamento ufficiale del Network StudentiUniMi." },
            university: { title: "Informazioni dall'Ateneo e rappresentanti | Network StudentiUniMi", description: "Rimani aggiornato con tutte le informazioni e i rappresentanti dell'Università degli Studi di Milano, offerto dal Network StudentiUniMi." },
            organization: { title: "Chi siamo | Network StudentiUniMi", description: "Chi siamo? Scopri l'organizzazione dietro il Network StudentiUniMi, il più grande network dell'Università degli Studi di Milano." },
            degreeLoaded: { title1: 'Gruppi di ', title2: ' | Network StudentiUniMi', description1: 'Tutti i link dei gruppi Telegram di ', description2: " dell'Università degli Studi di Milano, offerti dal Network StudentiUniMi." }
        }
    }

    static getHelmetENGProperties = () : helmet => {
        return {
            homepage: { title: "Network StudentiUniMi - Groups, services and much more", description: "Official website of StudentiUniMi Network: WhatsApp groups replaced by Telegram ones, services and much more. The largest network of the University of Milan." },
            courses: { title: "Groups | Network StudentiUniMi", description: "All Telegram groups for all degree courses (three-year, master, single-cycle degrees) of the University of Milan. Join, ask for information and meet new people thanks to the StudentiUniMi Network." },
            services: { title: "Services | Network StudentiUniMi", description: "Tired of unimia's inefficiencies? On this alternative page you can access all the useful links of the University of Milan." },
            rules: { title: "Groups rules | Network StudentiUniMi", description: "The official rules of the StudentiUniMi Network." },
            university: { title: "University redirects | Network StudentiUniMi", description: "Stay up-to-date with all the information and representatives of the University of Milan, offered by the StudentiUniMi Network." },
            organization: { title: "Organization | Network StudentiUniMi", description: "Who are we? Discover the organization behind the StudentiUniMi Network, the largest network of the University of Milan." },
            degreeLoaded: { title1: 'Groups of ', title2: ' | Network StudentiUniMi', description1: 'All the links of the Telegram groups of ', description2: ' of the University of Milan, offered by StudentiUniMi Network.' }
        }
    }
}

export default LocalizationService;
