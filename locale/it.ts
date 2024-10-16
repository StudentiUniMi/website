import Helmet from "models/Helmet";
import ILocalizationStrings from "models/ILocalizationStrings";

const helmetIt: Helmet = {
    homepage: { title: "Network StudentiUniMi - Gruppi, servizi e molto altro", description: "Sito web ufficiale del Network StudentiUniMi: gruppi WhatsApp rimpiazziati da Telegram, servizi e molto altro. Il network più grande dell'Università degli Studi di Milano, gestito da studenti per gli studenti." },
    courses: { title: "Gruppi, risorse e rappresentanti dei corsi di laurea | Network StudentiUniMi", description: "Gruppi Telegram, risorse e rappresentanti per tutti i corsi di laurea (triennali, magistrali, lauree a ciclo unico) dell'Università degli Studi di Milano. Entra, chiedi informazioni e conosci nuove persone grazie al Network StudentiUniMi." },
    groups: { title: "Tutti i gruppi | Network StudentiUniMi", description: "Gruppi universitari, per gli annunci e associazioni studentesche dell'Università degli Studi di Milano." },
    services: { title: "Servizi e link rapidi | Network StudentiUniMi", description: "Tutti i servizi e i link rapidi alle risorse dell'Università degli Studi di Milano: iscrizioni esami, verbalizzazioni voti, webmail, e molto altro. Un'alternativa veloce a UNIMIA." },
    rules: { title: "Regolamento dei gruppi | Network StudentiUniMi", description: "Il regolamento ufficiale dei gruppi Telegram del Network StudentiUniMi, il più grande network studentesco dell'Università degli Studi di Milano." },
    university: { title: "Informazioni dall'Ateneo, graduatorie e mappe universitarie | Network StudentiUniMi", description: "Rimani aggiornato con tutte le informazioni, graduatorie e mappe universitarie dell'Università degli Studi di Milano, offerto dal Network StudentiUniMi." },
    organization: { title: "Chi siamo | Network StudentiUniMi", description: "Chi siamo? Scopri l'organizzazione dietro il Network StudentiUniMi, il più grande network studentesco dell'Università degli Studi di Milano." },
    degreeLoaded: { title1: 'Gruppi e risorse di ', title2: ' | Network StudentiUniMi', description1: 'Tutte le risorse e i link dei gruppi Telegram di ', description2: " dell'Università degli Studi di Milano, offerti dal Network StudentiUniMi." },
    notFound: { title: "La pagina che stai cercando non esiste | Network StudentiUniMi", description: "Uh oh, non riusciamo a trovare la pagina che stai cercando. Forse puoi provare a tornare alla homepage e cercare da lì." },
    serverError: { title: "Errore del server | Network StudentiUniMi", description: "Sembra che stiamo avendo problemi al server, prova a ricollegarti tra poco." },
    telegram: { title: "Perché usiamo Telegram? | Network StudentiUniMi", description: "Quante volte avete cercato senza successo gruppi WhatsApp completamente inaccessibili e inutilizzabili? Date un'occhiata a tutte le motivazioni che ci hanno portato a usare Telegram come piattaforma a scopo universitario." }
};

const localeIt: ILocalizationStrings = {
    helmet: helmetIt,
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
        telegramText: "WhatsApp non è adatto per gli studenti e contenuti universitari.",
        telegramButton: "Dimmi di più",
        section1: {
            typedText: 'Sei iscritto a...',
            text1: 'Rimani in contatto. Di più, e meglio.',
            text2: "Comunicare è importante, ma può essere frustrante farlo sui grupponi WhatsApp lasciati a loro stessi. Abbiamo creato un gruppo Telegram per ogni corso di laurea dell'Università degli Studi di Milano per facilitare lo scambio di informazioni.",
        },
        section2: {
            title: 'Ecco cosa mettiamo a disposizione',
            cards: {
                card1: { title: "Gruppi per i corsi di laurea", description: "Più di <Text styles={bold} variant='large' style={{ color: theme.palette.themeDark }}>600</Text> gruppi dedicati agli specifici corsi di laurea e corsi didattici UniMi!" },
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
            label: `<Text variant="mega" style={{ lineHeight: 1.3, fontWeight: 700, textAlign: 'center' }}>Gruppi <Text style={{ color: theme.palette.themePrimary, fontWeight: 700 }} variant="mega">universitari</Text></Text>`,
            title: "Unisciti ai nostri gruppi universitari",
            description: "Parla e discuti con altri studenti riguardo tutti i topic di cui hai bisogno.",
            description2: "Pensi manchi qualche gruppo in particolare?",
            card: {
                type: 'Gruppo universitario'
            }
        },
        announcementsGroups: {
            label: `<Text variant="mega" style={{ lineHeight: 1.3, fontWeight: 700, textAlign: 'center' }}>Gruppi per gli <Text style={{ color: theme.palette.themePrimary, fontWeight: 700 }} variant="mega">annunci</Text></Text>`,
            title: "Posta un annuncio sui nostri gruppi appositi.",
            description: "Abbiamo creato dei gruppi dedicati esclusivamente alla pubblicazione di annunci sia di ricerca che di offerta, come ad esempio per i libri ed appunti e le ripetizioni.",
            description2: `<Text variant="medium">Per postare un annuncio segui il <Text variant='medium' styles={bold} style={{ color: theme.palette.themeDarkAlt }}>modello annunci</Text> che trovi nei messaggi fissati quando entri.</Text>`,
            card: {
                type: 'Gruppo annunci'
            }
        },
        studentsAssociations: {
            label: "Associazioni studentesche",
            title: `<Text variant="xLargePlus" styles={bold}>Dai un'occhiata alle <Text variant="xLargePlus" styles={bold} style={{ color: theme.palette.themeDarkAlt }}>associazioni studentesche</Text> UniMi</Text>`,
            description: "Non sempre gli studenti sanno quante associazioni studentesche ci sono lì fuori!",
            description2: "Se vorresti la tua associazione studentesca aggiunta nella lista scrivi ad un <Link href='/organization'>membro dello staff</Link>.",
            card: {
                type: 'Associazione studentesca'
            }
        },
        users: 'Utenti'
    },
    services: {
        text1: "<Text variant='mega' styles={semibold}>Tutti i <Text styles={bold} variant='mega' style={{ color: theme.palette.themePrimary }}>servizi</Text>, in un\'unica pagina</Text>",
        text2: "Abbiamo realizzato una pagina per centralizzare tutti i collegamenti inerenti all'Università degli Studi di Milano e rendere disponibili anche le guide, strumenti e servizi telematici che abbiamo realizzato.",
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
        text1: `Siamo una <Text variant="superLarge" styles={bold} style={{ color: theme.palette.themePrimary }}>organizzazione</Text> senza fini di lucro, apolitica, ovvero apartitica, e neutrale.`,
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
    telegram: {
        title: 'Perché non usiamo WhatsApp?',
        subtitle: 'WhatsApp non è una piattaforma adatta a contenuti universitari, ma soprattutto non è adatta per gli studenti stessi.',
        labelButton: "torna alla home",
        text1: "Se la maggior parte degli studenti usano WhatsApp è senza dubbio un motivo aggiuntivo per incoraggiare a spostarsi su una piattaforma più sicura, accessibile e adatta ad un mondo universitario.",
        text2: "Usare un'applicazione con un colore diverso ma tantissime funzionalità aggiuntive è un motivo valido per fare la transizione!",
        text3: "Unisciti alle migliaia di studenti che hanno già effettuato la transizione a Telegram e contribuisci a creare un supporto per il futuro agli studenti che verranno dopo di te.",
        doubleQuoteText1: "Ma tutti usano WhatsApp..",
        doubleQuoteText2: "Non ho voglia di cambiare..",
        doubleQuoteText3: "Non mi piace Telegram..",
        headerList: "Ma quali sono gli svantaggi di WhatsApp?",
        listText1: "I nuovi studenti che accedono ai gruppi non hanno accesso alla cronologia della chat, ed è una cosa impensabile per quelli dei corsi di laurea ma soprattutto dei corsi didattici! E no, un drive non sostituisce una chat lunga 4 o 5 anni o più!",
        listText2: "Gli studenti hanno i numeri di cellulare completamente esposti, un problema grave soprattutto per studenti e studentesse da facoltà umanistiche, che ogni giorno si trovano messaggi in chat e chiamate da estranei.",
        listText3: "I media non vengono salvati lato server (vuol dire che è necessario che chi ha mandato il file sia ancora disponibile), rendendoli completamente inaccessibili a futuri studenti. Per fare un esempio, con Telegram un file mandato su un gruppo rimane a disposizione per sempre.",
        listText4: "Non esiste moderazione e automatizzazione tramite utilizzo di bot; i gruppi WhatsApp vengono inondati ogni giorno di spam e messaggi off-topic che rendono impossibile comunicare e reperire informazioni utili.",
        listText5: "Limite del numero di utenti sui gruppi: ulteriore enorme problema per facoltà con migliaia e migliaia di studenti.",
        listText6: "Accessibilità dei gruppi inesistente, di fatto vengono utilizzati i nostri servizi (che si trovano facilmente tramite motori di ricerca) per andare a trovare dei gruppi e risorse letteralmente introvabili, ahimè ironia della sorte."
    },
    footer: [
        { text: 'Il network e il relativo sito web non sono affiliati all\'Università degli Studi di Milano.', buttonText: 'Entra nel nostro gruppo' },
        { header: 'Link utili' },
        { header: 'Contatti', text: "Per qualsiasi dubbio o proposta è possibile scrivere sul gruppo principale del network <Link href='https://t.me/unimichat'>@unimichat</Link>." },
        { video: 'Scaricare videolezioni', graduations: 'Graduatorie', maps: 'Mappe spazi universitari' }
    ],
};

export {
    localeIt,
    helmetIt
};