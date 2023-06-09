import { Text, Image, useTheme, Separator, mergeStyleSets, Link } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { bold, semibold } from '../services/Fonts';
import { NextSeo } from 'next-seo';
import { useContext } from 'react';
import { preventDefault, preventVisibleHref } from 'services/Utils';
import GroupsList, { GroupsType } from '../components/Groups/Groups';
import LocalizationService from "../services/LocalizationService";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Chip from 'components/Atoms/Chip';
import GlobalContext from 'services/GlobalContext';
import JsxParser from 'react-jsx-parser';

const Groups = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string = LocalizationService.getLanguage() as string;
    const { isPolicyAccepted, togglePolicyDialog } = useContext(GlobalContext);

    const groupTypes: any = [
        {
            name: { it: "Gruppi dei corsi di laurea", en: "Degree-related groups" },
            image: "/images/courses/courses.png",
            href: "/courses"
        },
        {
            name: { it: "Gruppi per tutti gli studenti", en: "Groups for all the students" },
            image: "/images/groups/groups.png",
            href: "#university"
        },
        {
            name: { it: "Gruppi per annunci", en: "Announcements groups" },
            image: "/images/groups/announcements_groups.png",
            href: "#announcements"
        },
        {
            name: { it: "Associazioni studentesche", en: "Students associations" },
            image: "/images/groups/students_associations.png",
            href: "#students-associations"
        }
    ];

    const groupTypesStyle = {
        justifyContent: 'center',
        gap: 10
    };

    const groupTypeStyle = mergeStyleSets({
        root: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.white,
            gap: 10,
            maxWidth: 200,
            maxHeight: 250,
            height: '100%',
            padding: '20px 20px',
            cursor: 'pointer',
            transition: '0.1s all ease',
            border: `1px solid ${theme.palette.neutralLight}`,
            borderRadius: 2,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLight,
                    border: `1px solid ${theme.palette.neutralSecondary}`
                }
            },
        },
    });

    return (
        <>
            <NextSeo
                title={locale?.helmet.groups.title}
                description={locale?.helmet.groups.description}
                canonical={"https://studentiunimi.it/groups"}
                openGraph={{
                    url: "https://studentiunimi.it/groups",
                    title: locale?.helmet.groups.title,
                    description: locale?.helmet.groups.description,
                    site_name: 'Network StudentiUniMi',
                    type: 'website',
                    locale: language,
                    images: [
                        {
                            url: '/seo/groups.png',
                            type: 'image/png',
                        }
                    ],
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

            <section className="groups">
                <div className="d-flex flex-column">

                    <div style={{ backgroundColor: theme.palette.neutralLighter }} className="pt-5 pb-5">
                        <Container> 
                            <div className="text-center">
                                <div className="mb-4">
                                    <h1>
                                        <Text variant="xLargePlus" styles={semibold}>{locale?.groups.title}</Text>
                                    </h1>
                                </div>

                                <div className="group-types-selector d-flex flex-wrap flex-row" style={groupTypesStyle}>
                                    {groupTypes.map((g:any) => (
                                        <a href={g.href} className="text-decoration-none">
                                            <div className={groupTypeStyle.root + " group-type-selector"}>
                                                <div className="d-flex flex-grow-1 align-items-center justify-content-center">
                                                    <Image src={g.image} alt={g.name[language]} style={{ width: 140, margin: '0 auto' }} />
                                                </div>
                                                <Text variant="large" styles={semibold}>{g.name[language]}</Text>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </Container>
                    </div>

                    <Container id="university" className="pt-5 pb-5">  
                        <Row>
                            <Col xl={3} lg={4} className="text-center mb-3 mb-lg-0">
                                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 400 }}>
                                    <Image className="mb-2" alt="General groups" src={'/images/groups/groups.png'} style={{ display: 'inline-block', width: '100%' }} />
                                </div>
                            </Col>

                            <Col xl={9} lg={8}>
                                <div className="mb-3">
                                    <div className="mb-1 text-uppercase">
                                        <Text variant="medium" styles={semibold}>
                                            <Chip label={locale?.groups.universityGroups.label} size="medium" bgColor={theme.palette.themeDarkAlt} textColor={theme.palette.white} />
                                        </Text>
                                    </div>
                                    <div className="mb-1">
                                        <Text variant="xLargePlus" styles={bold}>{locale?.groups.universityGroups.title}</Text>
                                    </div>
                                    <div className="mb-2">
                                        <Text variant="large">{locale?.groups.universityGroups.description}</Text>
                                    </div>
                                    <div>
                                        <Text variant="medium" styles={semibold}>{locale?.groups.universityGroups.description2}</Text>{' '}
                                        <Text variant="medium" style={{ fontStyle: 'italic', color: theme.palette.neutralPrimary }}>
                                            <Link href={preventVisibleHref(isPolicyAccepted, "https://t.me/unimichat")} onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}>
                                                {locale?.services.text4}
                                            </Link>
                                        </Text>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <GroupsList groupsType={GroupsType.UNIVERSITY} />
                    </Container>

                    <Separator />

                    <Container id="announcements" className="pt-5 pb-5">  
                        <Row>
                            <Col xl={9} lg={8}>
                                <div className="mb-3">
                                    <div className="mb-1 text-uppercase">
                                        <Text variant="medium" styles={semibold}>
                                            <Chip label={locale?.groups.announcementsGroups.label} size="medium" bgColor={theme.palette.themeDarkAlt} textColor={theme.palette.white} />
                                        </Text>
                                    </div>
                                    <div className="mb-2">
                                        <Text variant="xLargePlus" styles={bold}>{locale?.groups.announcementsGroups.title}</Text>
                                    </div>
                                    <div className="mb-2">
                                        <Text variant="large">{locale?.groups.announcementsGroups.description}</Text>
                                    </div>
                                    <div>
                                        <Text variant="medium" styles={semibold}>{locale?.groups.announcementsGroups.description2}</Text>
                                    </div>
                                </div>
                            </Col>

                            <Col xl={3} lg={4} className="text-center">
                                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 400 }}>
                                    <Image className="mb-2" src={'/images/groups/announcements_groups.png'} alt="Announcements groups" style={{ display: 'inline-block', width: '100%' }} />
                                </div>
                            </Col>
                        </Row>

                        <GroupsList groupsType={GroupsType.ANNOUNCEMENTS} />
                    </Container>

                    <Separator />

                    <Container id="students-associations" className="pt-5 pb-5">  
                        <Row>
                            <Col xl={3} lg={4} className="text-center mb-3 mb-lg-0">
                                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 400 }}>
                                    <Image className="mb-2" src={'/images/groups/students_associations.png'} alt="Students associations" style={{ display: 'inline-block', width: '100%' }} />
                                </div>
                            </Col>

                            <Col xl={9} lg={8}>
                                <div className="mb-3">
                                    <div className="mb-1 text-uppercase">
                                        <Text variant="medium" styles={semibold}>
                                            <Chip label={locale?.groups.studentsAssociations.label} size="medium" bgColor={theme.palette.themeDarkAlt} textColor={theme.palette.white} />
                                        </Text>
                                    </div>
                                    <div className="mb-2">
                                        <Text variant="xLargePlus" styles={bold}>{locale?.groups.studentsAssociations.title}</Text>
                                    </div>
                                    <div className="mb-2">
                                        <Text variant="large">{locale?.groups.studentsAssociations.description}</Text>
                                    </div>
                                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.groups.studentsAssociations.description2} />
                                </div>
                            </Col>
                        </Row>

                        <GroupsList groupsType={GroupsType.ASSOCIATION} />
                    </Container>

                </div>
            </section>
        </>
    );
};

export default Groups;