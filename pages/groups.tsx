import { Text, Image, useTheme, Separator, mergeStyleSets } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { semibold } from '../services/Fonts';
import { NextSeo } from 'next-seo';
import GroupsList, { GroupsType } from '../components/Groups/Groups';
import LocalizationService from "../services/LocalizationService";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Chip from 'components/GenericComponents/Chip';

const Groups = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string = LocalizationService.getLanguage() as string;

    const groupTypes = [
        {
            name: { it: "Gruppi dei corsi di laurea", en: "Gruppi dei corsi di laurea" },
            image: "/images/courses/courses.png",
            href: "https://studentiunimi.it/courses"
        },
        {
            name: { it: "Gruppi universitari", en: "Gruppi universitari" },
            image: "/images/groups/groups.png",
            href: "#university"
        },
        {
            name: { it: "Gruppi per annunci", en: "Gruppi per annunci" },
            image: "/images/groups/announcements_groups.png",
            href: "#announcements"
        },
        {
            name: { it: "Associazioni studentesche", en: "Associazioni studentesche" },
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
            height: '100%',
            padding: '20px 20px',
            cursor: 'pointer',
            transition: '0.1s all ease',
            border: '1px solid transparent',
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
                                    <Text variant="xLargePlus">Quale tipologia di gruppi cerchi?</Text>
                                </div>

                                <div className="d-flex flex-wrap flex-row" style={groupTypesStyle}>
                                    {groupTypes.map(g => (
                                        <a href={g.href} className="text-decoration-none">
                                            <div className={groupTypeStyle.root}>
                                                <div className="flex-grow-1">
                                                    <Image src={g.image} style={{ width: 158 }} />
                                                </div>
                                                <Text variant="large" styles={semibold}>{g.name.it}</Text>
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
                                    <Image className="mb-2" src={'/images/groups/groups.png'} style={{ display: 'inline-block', width: '100%' }} />
                                </div>
                            </Col>

                            <Col xl={9} lg={8}>
                                <div className="mb-3">
                                    <div className="mb-1 text-uppercase">
                                        <Text variant="medium" styles={semibold}>
                                            <Chip label={locale?.groups.universityGroups.label} size="medium" bgColor={theme.palette.themeDarkAlt} textColor={theme.palette.white} />
                                        </Text>
                                    </div>
                                    <div className="mb-2">
                                        <Text variant="xLargePlus">{locale?.groups.universityGroups.title}</Text>
                                    </div>
                                    <div>
                                        <Text variant="large">{locale?.groups.universityGroups.description}</Text>
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
                                        <Text variant="xLargePlus">{locale?.groups.announcementsGroups.title}</Text>
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
                                    <Image className="mb-2" src={'/images/groups/announcements_groups.png'} style={{ display: 'inline-block', width: '100%' }} />
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
                                    <Image className="mb-2" src={'/images/groups/students_associations.png'} style={{ display: 'inline-block', width: '100%' }} />
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
                                        <Text variant="xLargePlus">{locale?.groups.studentsAssociations.title}</Text>
                                    </div>
                                    <div>
                                        <Text variant="large">{locale?.groups.studentsAssociations.description}</Text>
                                    </div>
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