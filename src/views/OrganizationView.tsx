import React from 'react';
import { Text, Icon, Link } from 'office-ui-fabric-react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { semibold } from '../fonts';
import { Container } from 'react-bootstrap';
import { Persona } from 'office-ui-fabric-react/lib/Persona';
import { FontSizes } from '@fluentui/theme';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { useTheme } from '@fluentui/react-theme-provider';
import { getAdmins } from '../services/Requests';
import { Separator } from '@fluentui/react/lib/Separator';

const cardTokens: ICardTokens = { childrenMargin: 12 };
const sectionCard = { minHeight: '120px', height: '100%', width: '100%', maxWidth: 'none',  maxHeight: 'none' };

const CAN = [
    { username: "MattiaOldani", name: "Mattia Oldani", delega: "" },
    { username: "Sartigabriele", name: "Gabriele Sarti", delega: "" },
    { username: "MrBrionix", name: "Fabrizio Brioni", delega: "" },
    { username: "SetteMagic", name: "Silvio Settembrese", delega: "Gestore Discord" },
    { username: "Aconithorn", name: "Laura Luperto", delega: "Gestrice Discord" }
];

const OrganizationView = () => {
    var theme = useTheme();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const admins = getAdmins();

    return (
        <Container className="organization text-center">

            <div className="mb-2">
                <div className="mb-2">
                    <Text variant="large">
                        Siamo un'organizzazione senza fini di lucro, apolitica, ovvero apartitica, e neutrale, la quale si pone l'obiettivo di offrire servizi telematici agli studenti dell'Università degli Studi di Milano.
                    </Text>
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
                                <Persona onRenderPrimaryText={() => null} primaryText={"Marco Aceti"} />
                            </div>
                            <Text variant="medium" styles={semibold}><Link href={`https://t.me/acetimarco`} target="_blank">Marco Aceti</Link></Text>
                        </Card.Section>
                    </Card>
                </div>
            </div>

            <div className="mb-4 pt-2">

                <div className="mb-3"><Separator><Text variant="large" styles={semibold}>Comitato Amministrativo</Text></Separator></div>

                <Row className="justify-content-center">
                    {
                        CAN.map(x => {
                            return (
                                <Col className="mb-3" xl={3} lg={3} md={4} sm={6} xs={12}>
                                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                                        <Card.Section>
                                            <div className="justify-content-center">
                                                <Persona onRenderPrimaryText={() => null} primaryText={x.name} />
                                            </div>
                                            <Text variant="medium" styles={semibold}><Link href={`https://t.me/${x.username}`} target="_blank">{x.name}</Link></Text>
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
                        admins.map(x => {
                            return (
                                <Col className="mb-3" xl={3} lg={3} md={4} sm={6} xs={12}>
                                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                                        <Card.Section>
                                            <div className="justify-content-center">
                                                <Persona onRenderPrimaryText={() => null} primaryText={x.username} />
                                            </div>
                                            <Text variant="medium" styles={semibold}><Link href={`https://t.me/${x.username}`} target="_blank">{x.username}</Link></Text>
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