import { Text, Image, useTheme, Separator, Link } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { bold, semibold } from '../services/Fonts';
import { NextSeo } from 'next-seo';
import { useContext } from 'react';
import { preventDefault, preventVisibleHref } from 'services/Utils';
import { GetServerSideProps } from 'next';
import { getExtraGroups } from 'services/Requests';
import { ExtraGroup, ExtraGroups } from 'models/Models';
import GroupsList, { GroupsType } from '../components/Groups/Groups';
import LocalizationService from "../services/LocalizationService";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Chip from 'components/Atoms/Chip';
import GlobalContext from 'services/GlobalContext';
import JsxParser from 'react-jsx-parser';
import GroupTypes from 'components/Atoms/GroupTypes';
import FiveHundred from './500';

interface Props {
    extraGroups: ExtraGroups,
    extraGrousError: boolean
};

const Groups = (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string = LocalizationService.getLanguage() as string;
    const { isPolicyAccepted, togglePolicyDialog } = useContext(GlobalContext);

    const universityGroups: Array<ExtraGroup> = props.extraGroups?.university_groups ?? [];
    const announcementsGroups: Array<ExtraGroup> = props.extraGroups?.announcement_groups ?? [];
    const studentsAssociations: Array<ExtraGroup> = props.extraGroups?.student_associations ?? [];

    if (props.extraGrousError) return <FiveHundred />;

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

                                <GroupTypes page="groups" />
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

                        <GroupsList 
                            groups={universityGroups}
                            groupsType={GroupsType.UNIVERSITY} 
                        />
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

                        <GroupsList
                            groups={announcementsGroups}
                            groupsType={GroupsType.ANNOUNCEMENTS} 
                        />
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

                        <GroupsList 
                            groups={studentsAssociations}
                            groupsType={GroupsType.ASSOCIATION} 
                        />
                    </Container>

                </div>
            </section>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const extraGroupsResult = await getExtraGroups();
    let extraGroupsError = false;

    if (extraGroupsResult.error) extraGroupsError = true;

    return { 
        props: { 
            extraGroups: extraGroupsResult.value ?? null,
            extraGrousError: extraGroupsError
        } 
    };
};

export default Groups;