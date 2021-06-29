import React from 'react';
import { Text, Icon, Link } from 'office-ui-fabric-react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { semibold } from '../fonts';
import { Container } from 'react-bootstrap';
import { Persona } from 'office-ui-fabric-react/lib/Persona';
import { FontSizes } from '@fluentui/theme';
import { Card, CardSection, ICardTokens } from "@uifabric/react-cards";
import { useTheme } from '@fluentui/react-theme-provider';
import { getAdmins } from '../services/Requests';
import { Separator } from '@fluentui/react/lib/Separator';
import { getGroupsLength, getCdlsLength } from '../services/Requests';
import { getCanMembers } from '../services/Requests';

const OrganizationView = () => {
    var theme = useTheme();
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const sectionCard = { minHeight: '130px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none' };
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const iconStyle2 = { color: theme.palette.themePrimary };
    const numberStyle = { color: theme.palette.themePrimary };
    const mainCard = { minHeight: '160px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none', boxShadow: theme.effects.elevation8 };
    const admins = getAdmins();
    const canMembers = getCanMembers();
    const groupsNumber = getGroupsLength();
    const cdlsNumber = getCdlsLength();

    return (
        <Container className="organization text-center">

            <div className="mb-2">
                <div className="mb-3">
                    <Text variant="large">
                        Siamo un'organizzazione senza fini di lucro, apolitica, ovvero apartitica, e neutrale, la quale si pone l'obiettivo di offrire servizi telematici agli studenti dell'Università degli Studi di Milano.
                    </Text>
                </div>

                <div className="mb-3">
                    <Row className="justify-content-center">
                        <Col className="mb-3" xl={3} lg={4} md={4} sm={6} xs={12}>
                            <Card tokens={cardTokens} style={mainCard} className="justify-content-center text-center">
                                <CardSection>
                                    <Icon iconName="UserOptional" style={iconStyle} />
                                    <Text variant="large" className="mt-0">
                                        Abbiamo più di<br />
                                        <Text variant="xLarge" style={numberStyle}>2.000</Text> <br />
                                        utenti
                                    </Text>
                                </CardSection>
                            </Card>
                        </Col>
                        <Col className="mb-3" xl={3} lg={4} md={4} sm={6} xs={12}>
                            <Card tokens={cardTokens} style={mainCard} className="justify-content-center text-center">
                                <CardSection>
                                    <Icon iconName="PeopleAlert" style={iconStyle} />
                                    <Text variant="large" className="mt-0">
                                        Abbiamo<br />
                                        <Text variant="xLarge" style={numberStyle}>{groupsNumber}</Text> <br />
                                        gruppi telegram
                                    </Text>
                                </CardSection>
                            </Card>
                        </Col>
                        <Col className="mb-3" xl={3} lg={4} md={4} sm={6} xs={12}>
                            <Card tokens={cardTokens} style={mainCard} className="justify-content-center text-center">
                                <CardSection>
                                    <Icon iconName="PublishCourse" style={iconStyle} />
                                    <Text variant="large" className="mt-0">
                                        Copriamo<br />
                                        <Text variant="xLarge" style={numberStyle}>{cdlsNumber}</Text> <br />
                                        corsi di laurea
                                    </Text>
                                </CardSection>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div className="mb-2">
                    <Text variant="medium">
                        <div className="mb-0">
                            <Icon iconName="ComplianceAudit" className="mr-1" style={{ color: theme.palette.themePrimary, fontSize: '14px' }} />
                            Puoi trovare il nostro statuto cliccando <Link href="https://github.com/StudentiUniMi/docs/blob/main/statuto.md" target="_blank">qui</Link>.
                        </div>
                        Di seguito è possibile trovare i membri che hanno un ruolo attivo nel network e i relativi contatti.
                    </Text>
                </div>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-1" style={iconStyle} />

            <div className="mb-4">
                <div className="mb-3"><Separator><Text variant="large" styles={semibold}>Coordinatore</Text></Separator></div>

                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '230px' }} className="mb-4">
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div className="justify-content-center">
                                <Persona onRenderPrimaryText={() => null} text={"Marco Aceti"} />
                            </div>
                            <Text variant="medium" styles={semibold}>
                                <i className="fab fa-telegram homeIcon" style={iconStyle2}></i>&nbsp;
                                <Link href={`https://t.me/acetimarco`} target="_blank">Marco Aceti</Link>
                            </Text>
                        </Card.Section>
                    </Card>
                </div>
            </div>

            <div className="mb-4 pt-2">

                <div className="mb-3"><Separator><Text variant="large" styles={semibold}>Comitato Amministrativo</Text></Separator></div>

                <Row className="justify-content-center">
                    {
                        canMembers.map( (x,i) => {
                            return (
                                <Col className="mb-3" xl={2} lg={3} md={4} sm={6} xs={12} key={i}>
                                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                                        <Card.Section>
                                            <div className="justify-content-center">
                                                <Persona onRenderPrimaryText={() => null} text={x.name} />
                                            </div>
                                            <Text variant="medium" styles={semibold}>
                                                <i className="fab fa-telegram homeIcon" style={iconStyle2}></i>&nbsp;
                                                <Link href={`https://t.me/${x.username}`} target="_blank">{x.name}</Link>
                                            </Text>
                                            <Text variant="medium" className="mt-2">
                                                {x.delega}
                                            </Text>
                                        </Card.Section>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>


            <div className="mb-4">
                <div className="mb-3"><Separator><Text variant="large" styles={semibold}>Amministratori e moderatori</Text></Separator></div>

                <Row className="justify-content-center">
                    {
                        admins.map( (x,i) => {
                            return (
                                <Col className="mb-3" xl={2} lg={3} md={4} sm={6} xs={12} key={i}>
                                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                                        <Card.Section>
                                            <div className="justify-content-center">
                                                <Persona onRenderPrimaryText={() => null} text={x.username} />
                                            </div>
                                            <Text variant="medium" styles={semibold}>
                                                <i className="fab fa-telegram homeIcon" style={iconStyle2}></i>&nbsp;
                                                <Link href={`https://t.me/${x.username}`} target="_blank">{x.username}</Link>
                                            </Text>
                                            <Text variant="medium" className="mt-2">
                                                {x.cdl}
                                            </Text>
                                        </Card.Section>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>

        </Container>
    )
};

export default OrganizationView;