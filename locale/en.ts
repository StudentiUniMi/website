import Helmet from "models/Helmet";
import ILocalizationStrings from "models/ILocalizationStrings";

const helmetEn: Helmet = {
    homepage: { title: "Network StudentiUniMi - Groups, services and much more", description: "Official website of StudentiUniMi Network: WhatsApp groups replaced by Telegram ones, services and much more. The largest network of the University of Milan, managed by students for students." },
    courses: { title: "Degree groups and resources | Network StudentiUniMi", description: "All Telegram groups and resources for all degree courses (three-year, master, single-cycle degrees) of the University of Milan. Join, ask for information and meet new people thanks to the StudentiUniMi Network." },
    groups: { title: "Groups | Network StudentiUniMi", description: "University groups, for announcements and student associations of the University of Milan." },
    services: { title: "Services | Network StudentiUniMi", description: "All services and rapid links to the University of Milan's resources: exams, grades, webmail and much more. A very fast alternative UNIMIA replacement." },
    rules: { title: "Groups rules | Network StudentiUniMi", description: "The official rules of the StudentiUniMi Network, the largest student network of the University of Milan." },
    university: { title: "University informations, rankings, maps and representatives | Network StudentiUniMi", description: "Stay up-to-date with all the informations and representatives of the University of Milan, offered by the StudentiUniMi Network." },
    organization: { title: "Organization | Network StudentiUniMi", description: "Who are we? Discover the organization behind the StudentiUniMi Network, the largest network of the University of Milan." },
    degreeLoaded: { title1: 'Groups and resources of ', title2: ' | Network StudentiUniMi', description1: 'All the resources and links of the Telegram groups of ', description2: ' of the University of Milan, offered by StudentiUniMi Network.' },
    notFound: { title: "The page you were looking for does not exist | Network StudentiUniMi", description: "Uh oh, we can't seem to find the page you're looking for. Maybe you can try going to the homepage and look again from there." },
    serverError: { title: "Server Error | Network StudentsUniMi", description: "We seem to be having server problems, try reconnecting in a little while." },
    telegram: { title: "Why do we use Telegram? | Network StudentiUniMi", description: "How many times have you unsuccessfully searched for WhatsApp groups that are completely inaccessible and unusable? Take a look at all the reasons why we use Telegram as a platform for university purposes." }
};

const localeEn: ILocalizationStrings = {
    helmet: helmetEn,
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
            label: `<Text variant="mega" style={{ lineHeight: 1.3, fontWeight: 700, textAlign: 'center' }}>University <Text style={{ color: theme.palette.themePrimary, fontWeight: 700 }} variant="mega">groups</Text></Text>`,
            title: "Join the university groups of our Network",
            description: "Talk and discuss with other students about all the topics you need.",
            description2: "Do you think any particular group is missing?",
            card: {
                type: 'University group'
            }
        },
        announcementsGroups: {
            label: `<Text variant="mega" style={{ lineHeight: 1.3, fontWeight: 700, textAlign: 'center' }}>Announcements<Text style={{ color: theme.palette.themePrimary, fontWeight: 700 }} variant="mega"> groups</Text></Text>`,
            title: "Post an ad on our dedicated groups.",
            description: "We have created groups dedicated exclusively to posting both want and offer ads, such as for books and notes and private lessons.",
            description2: `<Text variant="medium">To post an ad follow the <Text variant='medium' styles={bold} style={{ color: theme.palette.themeDarkAlt }}>template</Text> that you can find in the pinned messages set when you enter.</Text>`,
            card: {
                type: 'Announcements group'
            }
        },
        studentsAssociations: {
            label: "Students associations",
            title: `<Text variant="xLargePlus" styles={bold}>Take a look at the <Text variant="xLargePlus" styles={bold} style={{ color: theme.palette.themeDarkAlt }}>UniMi student associations</Text></Text>`,
            description: "Students don't always know how many student associations are out there!",
            description2: "If you would like your student association added to the list write to a <Link href='/organization'>staff member</Link>.",
            card: {
                type: 'Student association'
            }
        },
        users: 'Users'
    },
    services: {
        text1: "<Text variant='mega' styles={semibold}>All <Text styles={bold} variant='mega' style={{ color: theme.palette.themePrimary }}>services</Text>, in one central place</Text>",
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
        text1: `We are a nonprofit, apolitical, meaning nonpartisan, and neutral <Text variant="superLarge" styles={bold} style={{ color: theme.palette.themePrimary }}>organization</Text>.`,
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
    telegram: {

    },
    footer: [
        { text: 'The network and the associated website are not affiliated to the University of Milan.', buttonText: 'Join our main group' },
        { header: 'Useful links' },
        { header: 'Contacts', text: "For any question or suggestion you can join the main network group <Link href='https://t.me/unimichat'>@unimichat</Link>." },
    ]
};

export {
    localeEn,
    helmetEn
};