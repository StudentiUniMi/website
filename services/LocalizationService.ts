import Helmet from 'models/Helmet';
import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import ILocalizationStrings from '../models/ILocalizationStrings';

class LocalizationService {
    private static data?: LocalizedStringsMethods & ILocalizationStrings;

    static localize = (language: string | undefined = undefined) => {
        if (!LocalizationService.data == null || LocalizationService.data === undefined) {
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
                    errorContactAdmin: '<Link href="/organization">Contatta un amministratore</Link> se il problema persiste.',
                    studentsAssociation: 'Associazione studentesca',
                    reach: 'Raggiungi',
                    findOut: 'Scopri',
                    notFound: {
                        title: "La pagina che stai cercando non esiste.",
                        description: "Uh oh, non riusciamo a trovare la pagina che stai cercando. Forse puoi provare a tornare alla homepage oppure alla sezione dei gruppi e cercare da lì.",
                        buttonHomepage: "Homepage",
                        buttonGroups: "Corsi di laurea"
                    },
                    serverErrorPage: {
                        title: "Stiamo avendo problemi con il nostro server.",
                        description: "Cercheremo di risolvere il problema il prima possibile, nel frattempo torna pure in homepage o sulle altre pagine che mettiamo a disposizione.",
                        buttonHomepage: "Homepage",
                        buttonGroups: "Corsi di laurea"
                    },
                    privacyPolicy: {
                        title: 'Privacy policy e regolamento',
                        subtitle: 'Per fare funzionare i nostri servizi memorizziamo alcuni dati nei nostri sistemi.',
                        description: 'Per continuare ed utilizzare i nostri gruppi e servizi è necessario <Text variant="medium" styles={semibold}>leggere e accettare</Text> la nostra privacy policy e il regolamento.',
                        privacyPolicy: 'Privacy policy',
                        regulation: 'Regolamento',
                        checkboxDescription: 'Ho letto la privacy policy e il regolamento.',
                        read: {
                            it: 'Leggi in italiano',
                            en: 'Leggi in inglese'
                        },
                        refuse: 'Rifiuta',
                        accept: 'Accetta'
                    },
                    sidebar: {
                        mainGroup: "Unisciti al nostro gruppo principale",
                        channel: "Entra nel nostro canale Telegram",
                        redirects: "Scopri i nostri collegamenti principali",
                        searchGroup: "Cerca i gruppi Telegram del tuo corso di laurea premendo qui"
                    },
                    headerMenuItems: {
                        home: 'Home',
                        courses: 'Corsi di laurea',
                        groups: 'Gruppi',
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
                        telegramTitle: "Whatsapp? No grazie.",
                        telegramText: "whatsapp non è una piattaforma adatta a contenuti universitari",
                        telegramButton: "Scopri perchè",
                        telegramPopUP: {
                            title: "Di seguito alcuni degli svantaggi derivanti dall'uso di Whatsapp:",
                            text1: "i nuovi utenti non hanno accesso alla cronologia della chat",
                            text2: "gli studenti hanno numeri di cellulare esposti, un problema grave soprattutto per studenti e studentesse da facoltà umanistiche",
                            text3: "i media non vengono salvati lato server, rendendoli completamente inaccessibili a futuri studenti",
                            text4: "non esiste moderazione e automatizzazione tramite utilizzo di bot",
                            text5: "limite numero utenti, ulteriore problema enorme per facoltà umanistiche",
                            text6: "accessibilità dei gruppi inesistente, di fatto vengono utilizzati i nostri servizi (che si trovano facilmente tramite motori di ricerca) per andare a trovare dei gruppi e risorse letteralmente introvabili, ahimè ironia della sorte.",
                            textButton: "Chiudi",
                        },
                        section1: {
                            typedText: 'Sei iscritto a...',
                            text1: 'Rimani in contatto. Di più, e meglio.',
                            text2: "Comunicare è importante, ma può essere frustrante farlo sui grupponi WhatsApp lasciati a loro stessi. Abbiamo creato un gruppo Telegram per ogni corso di laurea dell'Università degli Studi di Milano per facilitare lo scambio di informazioni.",
                        },
                        section2: {
                            title: 'Ecco cosa mettiamo a disposizione',
                            cards: {
                                card1: { title: "Gruppi per i corsi di laurea", description: "Più di <Text styles={bold} variant='large' style={{ color: theme.palette.themeDark }}>700</Text> gruppi dedicati agli specifici corsi di laurea e corsi didattici UniMi!" },
                                card2: { title: "Gruppi generali", description: "Gruppi universitari, per annunci e associazioni studentesche." },
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
                            description: "Dai un'occhiata qui per vedere se trovi la risposta, altrimenti chiedi pure sul gruppo principale."
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
                        title: `<Text variant="mega" style={{ lineHeight: 1.3 }}><Text style={{ color: theme.palette.themePrimary, fontWeight: 700 }} variant="mega">Regolamento</Text> del network StudentiUniMi</Text>`,
                        rules: {
                            title: 'Regole',
                            toxicBehaviour: {
                                title: 'Comportamenti tossici',
                                description: 'È vietata ogni forma di contenuto offensivo o blasfemo, sia nei messaggi che nel profilo personale (nome utente, foto e descrizione). Sono altresì vietati insulti verso altri utenti, siano essi studenti, docenti o altre figure. La discriminazione sociale in qualunque forma non è tollerata nei gruppi del network. Gli utenti che interagiscono al fine di provocare, disturbare, creare disagio o disinformazione verranno allontanati.'
                            },
                            chatInteraction: {
                                title: 'Interazioni nelle chat',
                                description: 'Nelle chat è vietato assumere i seguenti comportamenti:',
                                list: [
                                    'inviare dei messaggi ripetuti con il solo scopo di disturbare altri utenti (flooding);',
                                    "aggiungere bot di qualsiasi tipo senza l'autorizzazione del Consiglio Direttivo;",
                                    'abusare dei comandi e delle funzionalità messe a disposizione dal bot di gestione.'
                                ]
                            },
                            spam: {
                                title: 'Spam',
                                description1: "Non è permesso l'invio di messaggi, immagini, video o link che non hanno nessuna attinenza con i gruppi del network e non sono in linea con le finalità del progetto. Dal momento che il termine spam può risultare molto generico, di seguito sono elencate le tipologie di contenuti severamente vietati:",
                                list1: [
                                    'pubblicità, sponsorizzazioni e altre iniziative commerciali;',
                                    'autopromozione di qualsiasi tipo (es. pagine social, progetti ecc..);',
                                    'link a community, iniziative o realtà esterne al Network (salvo previo accordo con il Comitato Amministrativo).'
                                ],
                                description2: 'Per quanto riguarda le attività universitarie:',
                                list2: [
                                    "è vietato l'invio di qualsiasi tipo di autopromozione da parte di liste politiche elettive all'interno o all'esterno dell'Ateneo;",
                                    "i gruppi studenteschi e le associazioni ricononosciute dall'Ateneo possono autopromuoversi nei gruppi del Network di interesse alla loro associazione solo dietro accordo preventivo con il Consiglio Direttivo, onde evitare che il messaggio venga riconosciuto erroneamente come spam;",
                                    'i questionari e i sondaggi per le tesi possono essere mandati solo nel gruppo dedicato.'
                                ],
                                description3: "Se pensi di aver bisogno di un'eccezione alle regole essendo il contenuto che vuoi inviare di particolare importanza o rilevanza per il gruppo in cui stai scrivendo, contatta preventivamente un amministratore del gruppo per avere l'autorizzazione."
                            },
                            sharedContent: {
                                title: 'Contenuti condivisi',
                                description: 'È vietato inviare contenuti NSFW (<i>Not Safe For Work</i>), ovvero materiale sessualmente esplicito, volgare o ritenuto potenzialmente offensivo dalla collettività. La responsabilità civile e penale per tutti i contenuti inviati sui gruppi Telegram è personale. Il Network si impegna, nei suoi limiti, a garantire il pieno rispetto della legalità.'
                            },
                            offTopic: {
                                title: 'Off-Topic',
                                description: `I messaggi devono essere inerenti al gruppo in cui vengono inviati. Se non lo sono, potrebbero essere considerati "<i>off-topic</i>" e cancellati. Se si vuole parlare di un argomento legato all'università di cui non esiste ancora un gruppo, è possibile suggerirne la creazione a un amministratore. Esiste un gruppo dedicato in cui si può discutere di qualsiasi argomento, pur rispettando le altre regole qui riportate.`
                            }
                        },
                        measures: {
                            title: 'Provvedimenti',
                            description1: 'In caso di violazioni del regolamento, lo staff prenderà i provvedimenti necessari.',
                            description2: "Le contromisure prese dallo staff dipendono dal contesto, dal tipo di infrazione e dal comportamento tenuto dall'utente fino a quel momento. Ne consegue che, per una situazione simile, due utenti possano essere gestiti in maniera diversa. In linea generale, se l'infrazione non è grave ed è la prima volta per l'utente, verrà scelto un provvedimento leggero, come ad esempio un avvertimento. Per infrazioni gravi e ripetute si adotteranno misure più serie, fino all'allontamento temporaneo o permanente da alcuni o tutti i gruppi del network.",
                            description3: "I provvedimenti più gravi vengono generalmente presi in concerto con più amministratori. Ogni tipo di intervento viene internamente archiviato e notificato al Comitato Amministrativo. Per appellarsi o avere maggiori informazioni su decisioni ritenute ingiuste, è attiva una casella email: <Link href='mailto:appeal@studentiunimi.it'>appeal@studentiunimi.it</Link>.",
                            countermeasures: {
                                title: 'Contromisure',
                                list: [
                                    "<Text styles={semibold}>Warn</Text>: ammonizione data ad utente che ha trasgredito una regola non grave. Sono cumulabili e, a seconda dei casi, possono portare a provvedimenti più seri.",
                                    "<Text styles={semibold}>Mute</Text>: inibizione della capacità di inviare messaggi in un singolo gruppo del network. Può essere a tempo o permanente.",
                                    "<Text styles={semibold}>Kick</Text>: uscita forzata dell’utente da un singolo gruppo del network con possibilità di rientrare attraverso un link d'invito.",
                                    "<Text styles={semibold}>Ban</Text>: allontanamento forzato e permamente da un singolo gruppo del network.",
                                    "<Text styles={semibold}>Superban</Text>: allontanamento forzato e permamente da <Text styles={semibold}><i>tutti</i></Text> i gruppi del network."
                                ]
                            }
                        },
                        advices: {
                            title: 'Netiquette e consigli',
                            list1: [
                                "Assicurati di essere nel gruppo corretto prima di inviare i messaggi. Verifica se esiste un gruppo adatto cercando nel nostro sito o chiedendo ad altri utenti.",
                                "Al fine di mantenere un'esperienza di chat pulita, utilizza gli strumenti che Telegram mette a disposizione per la gestione dei messaggi. In particolare:",
                            ],
                            subList: [
                                "seleziona il messaggio a cui stai rispondendo se più persone partecipano alla conversazione;",
                                "se hai fatto degli errori di battitura o vuoi modificare un pensiero, utilizza la funzione di modifica anziché scrivere un nuovo messaggio;",
                                "se hai sbagliato ad inviare un messaggio, oppure non è più rilevante per la discussione, eliminalo.",
                            ],
                            list2: [
                                "Se sorge un problema che richiede l'attenzione dello staff, utilizza nella chat il tag @admin.",
                                "Prima di fare domande controlla tra i messaggi fissati in alto e fai una ricerca all'interno della chat: con buone probabilità qualcuno ha già avuto il tuo stesso problema.",
                                "Non chiedere di chiedere, è molto più semplice formulare immediatamente la domanda, così le persone che leggono capiranno subito se possono aiutarti.",
                                "Quando possibile, esprimi il tuo pensiero in un unico messaggio: così la chat rimarrà leggibile (soprattutto nei gruppi da centinaia di persone) e non intaserai di notifiche nessun dispositivo.",
                                "Parla solo in italiano o in inglese.",
                                "Se sei un rappresentante degli studenti, un'associazione studentesca, un docente o un'altra figura accademica riconosciuta, chiedi allo staff di farti mettere l'etichetta e la stellina di riconoscimento nei gruppi di tua competenza.",
                                "È consigliato utilizzare un nickname.",
                                "I moderatori e gli amministratori non sono assistenti personali/ tutor studenteschi e gestiscono molti gruppi, per cui contattali solo se necessario.",
                                "Se fai una domanda legata al tuo percorso universitario in un gruppo generale, per favore inserisci qualche informazione su di te, in modo da poterti indirizzare alle persone giuste."
                            ]
                        },
                        lastSection: {
                            title1: "Ti auguriamo una buona permanenza nei nostri gruppi.",
                            title2: "Ricorda che siamo sempre alla ricerca di persone volenterose che vogliono contribuire al nostro progetto!",
                            description: 'Se sei interessato, <Text variant="medium" styles={semibold}><Link href="/organization">contatta un membro dello staff</Link>.</Text>'
                        }
                    },
                    courses: {
                        title: '<Text variant="mega" style={{ lineHeight: 1.3 }}>Trova tutti i <Text style={{ color: theme.palette.themePrimary, fontWeight: 700 }} variant="mega">gruppi</Text> e le <Text style={{ color: theme.palette.themePrimary, fontWeight: 700 }} variant="mega">risorse</Text> del tuo corso di laurea</Text>',
                        otherGroups: 'Altri gruppi per tutti i corsi',
                        resetSection: 'Reset della pagina',
                        filtersToggle: 'Filtri per la ricerca',
                        findDegreeByName: "Cerca il tuo corso di laurea per nome",
                        groupsSection: {
                            text1: "Gruppi dei corsi e informazioni aggiuntive",
                            text2: "Trova tutti i gruppi Telegram del tuo corso di laurea",
                            text3: "Tutto quello che devi fare è scrivere il nome del tuo corso di laurea qui sotto, e potrai accedere ai gruppi telegram dei tuoi corsi didattici e ad altre informazioni utili."
                        },
                        degree: {
                            title: "Gruppi e risorse di ",
                            goBack: "Torna alla pagina dei corsi di laurea",
                            share: "Copia l'URL di questa pagina"
                        },
                        searchingDegrees: "Ricerca dei corsi di laurea ...",
                        departmentSelect: 'Seleziona un dipartimento',
                        cdlSelect: 'Seleziona un corso di Laurea',
                        availableRedirects: 'Collegamenti disponibili',
                        availableGroups: 'Gruppi disponibili',
                        availableAdmins: 'Amministratori disponibili',
                        nameFilter: 'Cerca per nome',
                        yearFilter: 'Cerca per anno o tipologia',
                        semesterFilter: 'Cerca per semestre',
                        year: 'Anno',
                        semester: 'Semestre',
                        complementary: 'Complementare',
                        websites: 'Siti web',
                        mainGroup: 'Gruppo principale',
                        mainGroupDescription: 'Gruppo principale per qualsiasi tipo di discussione inerente al corso di laurea.',
                        tutorsGroupDescription: '<Text variant="small" styles={semibold}>ATTENZIONE: </Text><Text variant="small">Questo gruppo <Text styles={semibold} variant="small">non è gestito dal network StudentiUniMi</Text> ma dai <Link href="https://orientamento.di.unimi.it/index.php/contatti/tutor-peer-to-peer">tutor peer to peer</Link> nominati dal Dipartimento di Informatica.</Text>',
                        groupNotAvailable: 'Gruppo non presente',
                        contactAdmin: "<Icon iconName='FollowUser'/> Contatta un <Link href='/organization'>amministratore</Link> se vuoi essere aggiunto al gruppo, oppure chiedilo direttamente su <Link href='https://t.me/unimichat'>@unimichat</Link>.",
                        degreesNotFound: 'Nessun corso di laurea trovato.',
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
                    groups: {
                        title: "Quale tipologia di gruppi cerchi?",
                        universityGroups: {
                            label: "Gruppi universitari",
                            title: "Unisciti ai nostri gruppi universitari",
                            description: "Parla e discuti con altri studenti riguardo tutti i topic di cui hai bisogno.",
                            description2: "Pensi manchi qualche gruppo in particolare?",
                            card: {
                                type: 'Gruppo universitario'
                            }
                        },
                        announcementsGroups: {
                            label: "Gruppi per gli annunci",
                            title: "Posta un annuncio sui nostri gruppi appositi",
                            description: "Abbiamo creato dei gruppi dedicati esclusivamente alla pubblicazione di annunci sia di ricerca che di offerta, come ad esempio per i libri ed appunti e le ripetizioni.",
                            description2: "Per postare un annuncio segui il template che trovi nei messaggi fissati quando entri.",
                            card: {
                                type: 'Gruppo annunci'
                            }
                        },
                        studentsAssociations: {
                            label: "Associazioni studentesche",
                            title: "Dai un'occhiata alle associazioni studentesche UniMi",
                            description: "Non sempre gli studenti sanno quante associazioni studentesche ci sono lì fuori!",
                            description2: "Se vorresti la tua associazione studentesca aggiunta nella lista scrivi ad un <Link href='/organization'>membro dello staff</Link>.",
                            card: {
                                type: 'Associazione studentesca'
                            }
                        },
                        users: 'Utenti'
                    },
                    services: {
                        text1: "<Text variant='xLargePlus' styles={bold}>Tutti i <Text styles={bold} variant='xLargePlus' style={{ color: theme.palette.themePrimary }}>servizi</Text>, in un\'unica pagina.</Text>",
                        text2: "Abbiamo realizzato una pagina per centralizzare tutti i collegamenti inerenti all'Università degli Studi di Milano e rendere disponibili anche le guide, strumenti e servizi telematici che abbiamo realizzato e messo a disposizione.",
                        text3: "Pensi che manchi qualcosa?",
                        text4: 'Faccelo sapere!',
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
                        title: `<Text variant="mega" style={{ lineHeight: 1.3 }}>Trova le informazioni utili legate al nostro <Text style={{ color: theme.palette.themePrimary, fontWeight: 700 }} variant="mega">Ateneo</Text></Text>`,
                        graduations: {
                            title: "Scopri tutte le graduatorie delle ammissioni dell'Università degli Studi di Milano",
                            description: "Controlla il tuo risultato in graduatoria oppure il punteggio con cui puoi passare il prossimo test per il tuo corso di laurea.",
                            button: "Raggiungi il canale"
                        },
                        map: {
                            title: 'Consulta la nostra mappa degli spazi universitari',
                            description: "Aule, edifici, mense, biblioteche e tanto altro.. dai un'occhiata!",
                            button: 'Raggiungi la mappa'
                        },
                        linksAndRedirects: {
                            text1: "Trovare tutti i collegamenti utili legati all'Ateneo può richiedere tempo.",
                            text2: "Utilizza la nostra comoda lista di link rapidi che ti permette di raggiungere i collegamenti più utili."
                        },
                        representatives: {
                            title: 'Trova la lista dei rappresentanti degli studenti del tuo dipartimento',
                            description: 'Se sei un rappresentante che vorrebbe apparire qui per aiutare eventuali studenti <Text variant="medium" styles={semibold}><Link href="/organization">contatta un membro dello staff</Link></Text>.'
                        },
                        departmentSelect: 'Seleziona un dipartimento',
                        representativesNotAvailable: 'Nessun rappresentante disponibile.',
                    },
                    contributors: {
                        text1: 'Di seguito è possibile trovare tutte le persone che hanno contribuito allo sviluppo del sito web, dei servizi che offre, della wiki, e del network in generale.',
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
                        header3: 'Amministratori dei gruppi telegram',
                        contact: {
                            title: "Contattaci",
                            description: "Puoi contattarci mandando una mail o scrivendoci in privato su Telegram",
                            button: "Mandaci una mail"
                        }
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
                    errorContactAdmin: '<Link href="/organization">Contact an administrator</Link> if the problem persists.',
                    studentsAssociation: 'Students association',
                    reach: 'Reach',
                    findOut: 'Find out',
                    notFound: {
                        title: "The page you were looking for does not exist.",
                        description: "Uh oh, we can't seem to find the page you're looking for. Maybe you can try going to the homepage or the degree courses page and look again from there.",
                        buttonHomepage: "Homepage",
                        buttonGroups: "Degree courses"
                    },
                    serverErrorPage: {
                        title: "We are having problems with our server.",
                        description: "We will try to fix the problem as soon as possible, in the meantime, feel free to return to the homepage or the other pages we provide.",
                        buttonHomepage: "Homepage.",
                        buttonGroups: "Degree courses"
                    },
                    privacyPolicy: {
                        title: 'Privacy policy and regulation',
                        subtitle: 'To make our services work we store some data in our system.',
                        description: 'To continue and use our groups and services you must <Text variant="medium" styles={semibold}>read and agree</Text> to our privacy policy and rules.',
                        privacyPolicy: 'Privacy policy',
                        regulation: 'Regulation',
                        checkboxDescription: 'I have read the privacy policy and regulation.',
                        read: {
                            it: 'Read in italian',
                            en: 'Read in english'
                        },
                        refuse: 'Refuse',
                        accept: 'Accept'
                    },
                    sidebar: {
                        mainGroup: "Join our main group",
                        channel: "Enter our Telegram channel",
                        redirects: "Discover our main socials and redirects",
                        searchGroup: "Search the telegram groups of your degree by pressing here"
                    },
                    headerMenuItems: {
                        home: 'Home',
                        courses: 'Degrees',
                        groups: 'Groups',
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
                        telegramTitle: "Whatsapp? No thanks.",
                        telegramText: "whatsapp isn't a platform for university content",
                        telegramButton: "See why",
                        telegramPopUP: {
                            title: "Here are some of the disadvantages of using Whatsapp:",
                            text1: "new users don't have access to chat history",
                            text2: "students have mobile phone numbers exposed, a serious problem especially for students from humanities",
                            text3: "media are not saved on the server side, making them completely inaccessible to future students",
                            text4: "you can't moderate groups through the use of bots",
                            text5: "user limit, further huge problem for humanities faculty",
                            text6: "The accessibility of non-existent groups, in practice, leads people to use our services (easily found through search engines) to seek out groups and resources that are quite literally unfindable, alas, the irony of fate.",
                            textButton: "Close",
                        },
                        section1: {
                            typedText: 'Are you a student of...',
                            text1: 'Stay in touch. More, and better.',
                            text2: 'Communicating is important, but it can be frustrating to do so on WhatsApp groups left to themselves. We are creating Telegram groups for each degree course of the University of Milan to facilitate the exchange of informations.',
                        },
                        section2: {
                            title: 'This is what we provide',
                            cards: {
                                card1: { title: "Groups for degree courses", description: "Over <Text styles={bold} variant='large' style={{ color: theme.palette.themeDark }}>700</Text> groups dedicated to specific UniMi degree courses and didactic courses!" },
                                card2: { title: "General groups", description: "University groups, for announcements and student associations." },
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
                            description: "Have a look here to see if you find the answer, otherwise feel free to ask on the main group."
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
                        title: `<Text variant="mega" style={{ lineHeight: 1.3 }}><Text style={{ color: theme.palette.themePrimary, fontWeight: 700 }} variant="mega">Rules</Text> of network StudentiUniMi</Text>`,
                        rules: {
                            title: 'Rules',
                            toxicBehaviour: {
                                title: 'Toxic behaviors',
                                description: 'Any form of offensive or profane content is prohibited, both in posts and in personal profiles (user name, photo and description). Insults toward other users, whether students, faculty or others, are also prohibited. Social discrimination in any form is not tolerated in network groups. Users who interact in order to provoke, disrupt, create discomfort or misinformation will be removed.'
                            },
                            chatInteraction: {
                                title: 'Interactions in chats',
                                description: 'The following behaviors are prohibited in chat rooms:',
                                list: [
                                    'posting repeated messages with the sole purpose of disturbing other users (flooding);',
                                    "adding bots of any kind without the permission of the Board of Directors;",
                                    'abusing the commands and features provided by the management bot.'
                                ]
                            },
                            spam: {
                                title: 'Spam',
                                description1: "Posting messages, pictures, videos or links that have no relevance to the network groups and are not in line with the purpose of the project is not allowed. Since the term spam can be very general, the types of content that are strictly prohibited are listed below:",
                                list1: [
                                    'advertising, sponsorship and other commercial initiatives;',
                                    'self-promotion of any kind (e.g., social pages, projects, etc.);',
                                    'links to communities, initiatives or realities outside the Network (except by prior agreement with the Administrative Committee).'
                                ],
                                description2: 'Regarding university activities:',
                                list2: [
                                    "self-promotion of any kind by elected political lists within or outside the University is prohibited;",
                                    'student groups and associations recognized by the Athenaeum may self-promote in Network groups of interest to their association only by prior agreement with the Board of Directors, in order to avoid the message being mistakenly recognized as spam;',
                                    'thesis questionnaires and surveys may be sent only in the dedicated group.'
                                ],
                                description3: "If you think you need an exception to the rules since the content you want to post is of particular importance or relevance to the group in which you are posting, contact a group administrator in advance for permission."
                            },
                            sharedContent: {
                                title: 'Shared content',
                                description: 'Posting NSFW (<i>Not Safe For Work</i>) content, i.e., material that is sexually explicit, vulgar, or deemed potentially offensive by the community, is prohibited. Civil and criminal liability for all content posted on Telegram groups is personal. The Network is committed, within its limits, to ensuring full compliance with the law.'
                            },
                            offTopic: {
                                title: 'Off-Topic',
                                description: `Messages must be relevant to the group in which they are sent. If they are not, they may be considered "<i>off-topic</i>" and deleted. If you want to talk about a topic related to the university that does not yet have a group, you can suggest it to an administrator. There is a dedicated group where you can discuss any topic, while respecting the other rules listed here.`
                            }
                        },
                        measures: {
                            title: 'Measures',
                            description1: 'If there are violations of the rules, the staff will take appropriate action.',
                            description2: "The countermeasures taken by the staff depend on the context, the type of infraction, and the user's behavior up to that point. It follows that, for a similar situation, two users may be handled differently. In general, if the infraction is not serious and it is the user's first time, a light measure, such as a warning, will be chosen. For serious and repeated infractions, more serious measures will be taken, up to and including temporary or permanent banishment from some or all of the network groups.",
                            description3: "The most serious actions are generally taken in concert with multiple administrators. Any type of action is internally filed and notified to the Administrative Committee. To appeal or get more information about decisions deemed unfair, an email box is active: <Link href='mailto:appeal@studentiunimi.it'>appeal@studentiunimi.it</Link>.",
                            countermeasures: {
                                title: 'Countermeasures',
                                list: [
                                    "<Text styles={semibold}>Warn</Text>: warning given to user who has transgressed a non-serious rule. They are cumulative and, depending on the case, can lead to more serious action.",
                                    "<Text styles={semibold}>Mute</Text>: inhibition of the ability to send messages in a single network group. It can be time-based or permanent.",
                                    "<Text styles={semibold}>Kick</Text>: forced user exit from a single network group with the possibility of re-entry through an invitation link.",
                                    "<Text styles={semibold}>Ban</Text>: forced and permanent removal from a single network group.",
                                    "<Text styles={semibold}>Superban</Text>: forced and permanent removal from <Text styles={semibold}><i>all</i></Text> network groups."
                                ]
                            }
                        },
                        advices: {
                            title: 'Netiquette and advices',
                            list1: [
                                "Make sure you are in the correct group before posting. Check to see if there is a suitable group by searching our site or asking other users.",
                                "In order to maintain a clean chat experience, use the tools Telegram provides for message management. Specifically:",
                            ],
                            subList: [
                                "select the message you are responding to if multiple people are participating in the conversation;",
                                "if you have made typos or want to edit a thought, use the edit function instead of writing a new message;",
                                "if you made a mistake in posting a message, or it is no longer relevant to the discussion, delete it.",
                            ],
                            list2: [
                                "If a problem arises that requires staff attention, use the @admin tag in the chat.",
                                "Before asking questions, check among the messages fixed at the top and do a search within the chat: chances are someone has already had the same problem as you.",
                                "Don't ask to ask, it is much easier to phrase the question immediately, so people reading will understand right away if they can help you.",
                                "Whenever possible, express your thoughts in a single message-that way the chat will remain readable (especially in groups of hundreds) and you won't clog any device with notifications.",
                                "Speak only in Italian or English.",
                                "If you are a student representative, student association, faculty member, or other recognized academic figure, ask the staff to have you put the label and recognition star in the groups under your purview.",
                                "It is recommended to use a nickname.",
                                "Moderators and administrators are not personal assistants/student mentors and run many groups, so contact them only when necessary.",
                                "If you ask a question related to your college path in a general group, please include some information about yourself so we can direct you to the right people."
                            ]
                        },
                        lastSection: {
                            title1: "We wish you a good stay in our groups.",
                            title2: "Remember that we are always looking for willing people who want to contribute to our project!",
                            description: 'If you are interested, <Text variant="medium" styles={semibold}><Link href="/organization">contact a staff member</Link>.</Text>'
                        }
                    },
                    courses: {
                        title: '<Text variant="mega" style={{ lineHeight: 1.3 }}>Find all the <Text style={{ color: theme.palette.themePrimary, fontWeight: 700 }} variant="mega">groups</Text> and the <Text style={{ color: theme.palette.themePrimary, fontWeight: 700 }} variant="mega">resources</Text> of your degree</Text>',
                        otherGroups: 'Other common groups',
                        resetSection: 'Reset page',
                        filtersToggle: 'Search filters',
                        findDegreeByName: "Find your degree by name",
                        groupsSection: {
                            text1: "Degree groups",
                            text2: "Find all the Telegram groups of your degree",
                            text3: "All you have to do is write the name of your degree below, and you will be able to access all the telegram groups of your teaching courses and other useful informations."
                        },
                        degree: {
                            title: "Groups and resources of ",
                            goBack: "Back to courses page",
                            share: "Copy URL of this page"
                        },
                        searchingDegrees: "Searching for course degrees ...",
                        departmentSelect: 'Select the department',
                        cdlSelect: 'Select the degree',
                        availableRedirects: 'Available redirects',
                        availableGroups: 'Available groups',
                        availableAdmins: 'Available admins',
                        nameFilter: 'Search by name',
                        yearFilter: 'Search by year or type',
                        semesterFilter: 'Search by semester',
                        year: 'Year',
                        semester: 'Semester',
                        complementary: 'Complementary',
                        websites: 'Websites',
                        mainGroup: 'Main group',
                        mainGroupDescription: 'Main group for any type of discussion about this degree.',
                        tutorsGroupDescription: '<Text variant="small" styles={semibold}>WARNING:</Text><Text variant="small"> This group <Text styles={semibold} variant="small">is not managed by network StudentiUniMi</Text> but by <Link href="https://orientamento.di.unimi.it/index.php/contatti/tutor-peer-to-peer">tutors peer to peer</Link> nominated by the computer science department.</Text>',
                        groupNotAvailable: 'Group not available',
                        contactAdmin: "<Icon iconName='FollowUser'/> Contact an <Link href='/organization'>administrator</Link> if you would like to be added to this group, or ask directly on <Link href='https://t.me/unimichat'>@unimichat</Link>.",
                        groupsNotFound: 'Groups not found.',
                        degreesNotFound: 'Degrees not found.',
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
                    groups: {
                        title: "What type of groups are you looking for?",
                        universityGroups: {
                            label: "University groups",
                            title: "Join the university groups of our Network",
                            description: "Talk and discuss with other students about all the topics you need.",
                            description2: "Do you think any particular group is missing?",
                            card: {
                                type: 'University group'
                            }
                        },
                        announcementsGroups: {
                            label: "Announcements groups",
                            title: "Post an ad on our dedicated groups",
                            description: "We have created groups dedicated exclusively to posting both want and offer ads, such as for books and notes and private lessons.",
                            description2: "To post an ad follow the template you find in the posts set when you enter.",
                            card: {
                                type: 'Announcements group'
                            }
                        },
                        studentsAssociations: {
                            label: "Students associations",
                            title: "Take a look at UniMi Students Associations",
                            description: "Students don't always know how many student associations are out there!",
                            description2: "If you would like your student association added to the list write to a <Link href='/organization'>staff member</Link>.",
                            card: {
                                type: 'Student association'
                            }
                        },
                        users: 'Users'
                    },
                    services: {
                        text1: "<Text variant='xLargePlus' styles={bold}>All <Text styles={bold} variant='xLargePlus' style={{ color: theme.palette.themePrimary }}>services</Text>, in one central place.</Text>",
                        text2: "We have created a page to centralize all the connections relating to the University of Milan and also make available our guides and telematic services we have created.",
                        text3: "Do you think something is missing?",
                        text4: 'Let us know!',
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
                        title: `<Text variant="mega" style={{ lineHeight: 1.3 }}>Find useful information related to our <Text style={{ color: theme.palette.themePrimary, fontWeight: 700 }} variant="mega">University</Text></Text>`,
                        graduations: {
                            title: "Check out all the University of Milan admissions rankings.",
                            description: "See your rankings or the score with which you can pass the next test for your major.",
                            button: "Reach the channel"
                        },
                        map: {
                            title: 'Check out our map of university spaces',
                            description: 'Classrooms, buildings, cafeterias, libraries and more.. take a look!',
                            button: 'Reach the map'
                        },
                        linksAndRedirects: {
                            text1: "Finding all the useful links related to the university can take time.",
                            text2: "Use our handy list of quick links that will get you to the most useful links."
                        },
                        representatives: {
                            title: 'Find the list of student representatives in your department',
                            description: 'If you are a representative who would like to appear here to help any students <Text variant="medium" styles={semibold}><Link href="/organization">contact a staff member</Link></Text>.'
                        },
                        departmentSelect: 'Select your department',
                        representativesNotAvailable: 'There are no representatives available.'
                    },
                    contributors: {
                        text1: 'In this section you can find the contributors who have worked into the development of the Network, the website and all its services.',
                        header1: 'Developers',
                        header2: 'Contributors',
                        githubProfile: 'Github Profile',
                        websiteProfile: 'Website',
                        text2: 'Did you contribute to the development of the Network and you would like to appear in this list? Send a private message to <Link href="https://t.me/giuseppetm">@giuseppetm</Link>.'
                    },
                    aboutUs: {
                        text1: 'We are a non-profit organization, neutral and not affiliated to any political party.',
                        text2: "Our goal is to provide online services to the students at the University of Milan.",
                        text3: "Here you can see all the people within the Network StudentiUniMi.",
                        button: { text1: 'Statute', text2: "You can read our statute here!" },
                        header1: 'Coordinator',
                        header2: "Network's Administrative Committee",
                        header3: 'Telegram groups Administrators',
                        contact: {
                            title: "Contact us",
                            description: "You can contact us by sending us an email or writing to us privately on Telegram.",
                            button: "Send us an email"
                        }
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
    };

    static strings = () => {
        return LocalizationService.data;
    };

    static getLanguage = () => {
        return LocalizationService.data?.getLanguage();
    };

    static getHelmetITAProperties = (): Helmet => {
        return {
            homepage: { title: "Network StudentiUniMi - Gruppi, servizi e molto altro", description: "Sito web ufficiale del Network StudentiUniMi: gruppi WhatsApp rimpiazziati da Telegram, servizi e molto altro. Il network più grande dell'Università degli Studi di Milano, gestito da studenti per gli studenti." },
            courses: { title: "Gruppi e risorse dei corsi di laurea | Network StudentiUniMi", description: "Gruppi Telegram e risorse per tutti i corsi di laurea (triennali, magistrali, lauree a ciclo unico) dell'Università degli Studi di Milano. Entra, chiedi informazioni e conosci nuove persone grazie al Network StudentiUniMi." },
            groups: { title: "Tutti i gruppi | Network StudentiUniMi", description: "Gruppi universitari, per gli annunci e associazioni studentesche dell'Università degli Studi di Milano." },
            services: { title: "Servizi e link rapidi | Network StudentiUniMi", description: "Tutti i servizi e i link rapidi alle risorse dell'Università degli Studi di Milano: iscrizioni esami, verbalizzazioni voti, webmail, e molto altro. Un'alternativa veloce a UNIMIA." },
            rules: { title: "Regolamento dei gruppi | Network StudentiUniMi", description: "Il regolamento ufficiale dei gruppi Telegram del Network StudentiUniMi, il più grande network studentesco dell'Università degli Studi di Milano." },
            university: { title: "Informazioni dall'Ateneo e rappresentanti | Network StudentiUniMi", description: "Rimani aggiornato con tutte le informazioni e i rappresentanti dell'Università degli Studi di Milano, offerto dal Network StudentiUniMi." },
            organization: { title: "Chi siamo | Network StudentiUniMi", description: "Chi siamo? Scopri l'organizzazione dietro il Network StudentiUniMi, il più grande network studentesco dell'Università degli Studi di Milano." },
            degreeLoaded: { title1: 'Gruppi e risorse di ', title2: ' | Network StudentiUniMi', description1: 'Tutte le risorse e i link dei gruppi Telegram di ', description2: " dell'Università degli Studi di Milano, offerti dal Network StudentiUniMi." },
            notFound: { title: "La pagina che stai cercando non esiste | Network StudentiUniMi", description: "Uh oh, non riusciamo a trovare la pagina che stai cercando. Forse puoi provare a tornare alla homepage e cercare da lì." },
            serverError: { title: "Errore del server | Network StudentiUniMi", description: "Sembra che stiamo avendo problemi al server, prova a ricollegarti tra poco." }
        }
    };

    static getHelmetENGProperties = (): Helmet => {
        return {
            homepage: { title: "Network StudentiUniMi - Groups, services and much more", description: "Official website of StudentiUniMi Network: WhatsApp groups replaced by Telegram ones, services and much more. The largest network of the University of Milan, managed by students for students." },
            courses: { title: "Degree groups and resources | Network StudentiUniMi", description: "All Telegram groups and resources for all degree courses (three-year, master, single-cycle degrees) of the University of Milan. Join, ask for information and meet new people thanks to the StudentiUniMi Network." },
            groups: { title: "Groups | Network StudentiUniMi", description: "University groups, for announcements and student associations of the University of Milan." },
            services: { title: "Services | Network StudentiUniMi", description: "All services and rapid links to the University of Milan's resources: exams, grades, webmail and much more. A very fast alternative UNIMIA replacement." },
            rules: { title: "Groups rules | Network StudentiUniMi", description: "The official rules of the StudentiUniMi Network, the largest student network of the University of Milan." },
            university: { title: "University informations and redirects | Network StudentiUniMi", description: "Stay up-to-date with all the informations and representatives of the University of Milan, offered by the StudentiUniMi Network." },
            organization: { title: "Organization | Network StudentiUniMi", description: "Who are we? Discover the organization behind the StudentiUniMi Network, the largest network of the University of Milan." },
            degreeLoaded: { title1: 'Groups and resources of ', title2: ' | Network StudentiUniMi', description1: 'All the resources and links of the Telegram groups of ', description2: ' of the University of Milan, offered by StudentiUniMi Network.' },
            notFound: { title: "The page you were looking for does not exist | Network StudentiUniMi", description: "Uh oh, we can't seem to find the page you're looking for. Maybe you can try going to the homepage and look again from there." },
            serverError: { title: "Server Error | Network StudentsUniMi", description: "We seem to be having server problems, try reconnecting in a little while." }
        }
    };
};

export default LocalizationService;
