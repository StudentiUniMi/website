import React from 'react';
import { Icon, Link } from 'office-ui-fabric-react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { Persona } from 'office-ui-fabric-react/lib/Persona';
import { FontSizes, FontWeights } from '@fluentui/theme';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { useTheme } from '@fluentui/react-theme-provider';
import { Text, ITextStyles } from 'office-ui-fabric-react';

const cardTokens: ICardTokens = { childrenMargin: 12 };
const sectionCard = {
    minHeight: '120px',
    height: '100%',
    width: '100%',
    maxWidth: 'none',
    maxHeight: 'none'
};

const helpfulTextStyles: ITextStyles = { root: { fontWeight: FontWeights.regular } };

const CAN = [
    { username: "", name: "Silvio Settembrese", delega: "Gestore Discord" },
    { username: "", name: "Mattia Oldani", delega: "" },
    { username: "", name: "Laura Luperto", delega: "Gestrice Discord" },
    { username: "", name: "Gabriele Sarti", delega: "" },
    { username: "", name: "Fabrizio Brioni", delega: "" }
];

const admins = [
    {
        "username": "MrBrionix",
        "year": "Secondo",
        "user_id": 119507304,
        "cdl": "Informatica"
    },
    {
        "username": "MattiaOldani",
        "year": "Primo",
        "user_id": 592731075,
        "cdl": "Informatica"
    },
    {
        "username": "Sartigabriele",
        "year": "Primo",
        "user_id": 544826890,
        "cdl": "Informatica"
    },
    {
        "username": "IrisCanole",
        "year": "Primo",
        "user_id": 730639598,
        "cdl": "Informatica"
    },
    {
        "username": "Mantotheale",
        "year": "Primo",
        "user_id": 433637925,
        "cdl": "Informatica"
    },
    {
        "username": "Weinsz",
        "year": "Primo",
        "user_id": 178100484,
        "cdl": "Informatica"
    },
    {
        "username": "ThomasGiudici",
        "year": "Terzo",
        "user_id": 15042194,
        "cdl": "Informatica"
    },
    {
        "username": "davidemarchioriz",
        "year": "Terzo",
        "user_id": 157778910,
        "cdl": "Informatica"
    },
    {
        "username": "Aconithorn",
        "year": "Terzo",
        "user_id": 529585690,
        "cdl": "Informatica"
    },
    {
        "username": "giolake",
        "year": "",
        "user_id": 126856154,
        "cdl": "Informatica musicale"
    },
    {
        "username": "robertopinotti",
        "year": "",
        "user_id": 3104514,
        "cdl": "Informatica per la comunicazione digitale"
    },
    {
        "username": "burzum00",
        "year": "",
        "user_id": 620976546,
        "cdl": "Sicurezza dei sistemi e delle reti informatiche"
    },
    {
        "username": "salvadorbs",
        "year": "",
        "user_id": 15751170,
        "cdl": "Sicurezza dei sistemi e delle reti informatiche online"
    },
    {
        "username": "robertopinotti",
        "year": "",
        "user_id": 3104514,
        "cdl": "Informatica (magistrale)"
    },
    {
        "username": "Spacer_ASC",
        "year": "",
        "user_id": 278035059,
        "cdl": "Sicurezza informatica (magistrale)"
    },
    {
        "username": "B3rsa",
        "year": "",
        "user_id": null,
        "cdl": "Sicurezza informatica (magistrale)"
    }
];

// const mods = [];

const OrganizationView = () => {
    var theme = useTheme();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };

    return (
        <Container className="organization text-center">

            <div className="mb-2">
                <h5 style={{ fontWeight: 400 }} className="mb-2">
                    Siamo un'organizzazione senza fini di lucro, apolitica, ovvero apartitica, e neutrale, la quale si pone l'obiettivo di offrire servizi telematici agli studenti dell'Università degli Studi di Milano.
                </h5>

                <h6 style={{ fontWeight: 400 }} className="mb-2">
                    <p className="mb-0">
                        <Icon iconName="ComplianceAudit" className="mr-1" style={{ color: theme.palette.themePrimary, fontSize: '14px' }} />
                        Puoi trovare il nostro statuto cliccando <Link href="https://github.com/StudentiUniMi/docs/blob/main/statuto.md" target="_blank">qui</Link>.
                    </p>
                    Di seguito è possibile trovare i membri che hanno un ruolo attivo nel network e i relativi contatti.
                </h6>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-1" style={iconStyle} />

            <div className="mb-4">
                <h5 className="mb-3">Coordinatore</h5>

                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '230px' }} className="mb-4">
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div className="justify-content-center">
                                <Persona onRenderPrimaryText={() => null} primaryText={"Marco Aceti"} />
                            </div>
                            <h6 className="mb-0"><Link href={`https://t.me/acetimarco`} target="_blank">Marco Aceti</Link></h6>
                            <Text variant="medium" styles={helpfulTextStyles}>

                            </Text>
                        </Card.Section>
                    </Card>
                </div>
            </div>

            <div className="mb-4">

                <h5 className="mb-3">Comitato Amministrativo</h5>

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
                                            <h6 className="mb-0"><Link href={`https://t.me/${x.username}`} target="_blank">{x.name}</Link></h6>
                                            <Text variant="medium" styles={helpfulTextStyles}>
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
                <h5 className="mb-3">Amministratori e moderatori</h5>

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
                                            <h6 className="mb-0"><Link href={`https://t.me/${x.username}`} target="_blank">{x.username}</Link></h6>
                                            <Text variant="medium" styles={helpfulTextStyles}>
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