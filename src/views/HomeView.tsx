import { Text, ITextStyles } from 'office-ui-fabric-react';
import { FontSizes, FontWeights } from '@fluentui/theme';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { redirectToLink } from '../services/Utils';
import { useTheme } from '@fluentui/react-theme-provider';
import { Icon } from 'office-ui-fabric-react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { PrimaryButton } from 'office-ui-fabric-react';

const cardTokens: ICardTokens = { childrenMargin: 12 };
const helpfulTextStyles: ITextStyles = { root: { fontWeight: FontWeights.regular } };

const logoFileName = 'unimi500.png';
const logoProperties = { width: '150px', height: '150px', display: 'inline-block' };
const fourthSectionCol = { maxWidth: '250px' };

const sectionCard = {
    minHeight: '160px',
    height: '100%',
    width: '100%',
    maxWidth: 'none',
    maxHeight: 'none'
};

const HomeView = () => {
    var theme = useTheme();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const homeIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size32 };
    const buttonStyle = { maxWidth: '180px' };

    return (
        <Container className="home text-center">

        <div className="info-section mb-4">
            <Image id="logo" className="mb-2"
                src={process.env.PUBLIC_URL + '/logo/' + logoFileName}
                alt='Network logo'
                style={logoProperties}
            />
            <h3 className="mb-3">Benvenuto nel sito web del Network Studenti UniMi!</h3>
            <h5 style={{fontWeight: 400}}>La nostra missione è organizzare le informazioni dell'Università degli studi di Milano e renderle accessibili a tutti.</h5>
        </div>

        <Icon iconName="ChevronDownMed" className="mb-3" style={iconStyle} />

        <div className="primary-section mb-4">
            <h5 className="mb-4">I nostri collegamenti principali</h5>

            <Row className="justify-content-center">
                <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                                <div><i className="fab fa-telegram homeIcon" style={homeIconStyle}></i></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                Unisciti al canale telegram per rimanere aggiornato e raggiungere tutti i link disponibili!
                        </Text>
                            <div className="justify-content-center">
                                    <PrimaryButton text="Canale telegram" className="text-decoration-none" onClick={() => redirectToLink("https://t.me/studenti_unimi")} allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>

                <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                                <div><i className="fab fa-discord homeIcon" style={homeIconStyle}></i></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                Entra nel nostro server discord per scambiare informazioni con altri studenti e conoscere nuove persone!
                        </Text>
                            <div className="justify-content-center">
                                    <PrimaryButton text="Server discord" className="text-decoration-none" onClick={() => redirectToLink("https://discord.gg/SwPzAkv4A4")} allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>

                <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                                <div><i className="fab fa-github homeIcon" style={homeIconStyle}></i></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                Trovi tutti i nostri progetti open source nelle repository della nostra organizzazione.
                        </Text>
                            <div className="justify-content-center">
                                    <PrimaryButton text="Organizzazione" className="text-decoration-none" onClick={() => redirectToLink("https://github.com/StudentiUnimi/")} allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="secondary-section mb-4">
            <h5 className="mb-4">Ogni cosa ha il suo gruppo Telegram</h5>

            <Row className="justify-content-center">
                <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div><Icon iconName="Group" style={homeIconStyle} className="homeIcon" /></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                Di' addio al mega gruppo WhatsApp in cui non si capisce nulla! Abbiamo creato un gruppo Telegram per ogni insegnamento.
                            </Text>
                            <div className="justify-content-center">
                                <PrimaryButton text="Gruppi dei corsi" className="text-decoration-none" href="https://studentiunimi.it/courses/" allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>

                <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div><Icon iconName="AddGroup" style={homeIconStyle} className="homeIcon" /></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                Ripetizioni, materiali, erasmus, tirocinio, alloggi.
                                Tutte quelle cose extra che però hanno la loro importanza.
                            </Text>
                            <div className="justify-content-center">
                                <PrimaryButton text="Gruppi extra" className="text-decoration-none" href="https://studentiunimi.it/additional_groups/" allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>

                <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div><Icon iconName="Dictionary" style={homeIconStyle} className="homeIcon" /></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                Crediamo che un ambiente rispettoso e inclusivo ci renda più innovativi e produttivi.
                                Dai un'occhiata al regolamento dei gruppi.
                            </Text>
                            <div className="justify-content-center">
                                <PrimaryButton text="Regolamento" className="text-decoration-none" href="https://studentiunimi.it/rules/" allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="tertiary-section mb-4">
            <h5 className="mb-4">I nostri servizi per aiutarti nello studio</h5>

            <Row className="justify-content-center">
                <Col className="mb-3" xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div><Icon iconName="Globe" style={homeIconStyle} className="homeIcon" /></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                Accedi alla Wiki del Network e aiutaci a migliorarla contribuendo!
                            </Text>
                            <div className="justify-content-center">
                                <PrimaryButton text="Wiki" onClick={() => redirectToLink("https://wiki.studentiunimi.it/")} allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>
                {/*
                <Col className="mb-3" xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div><i className="fab fa-discord homeIcon" style={homeIconStyle}></i></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                Cerchi un posto in cui parlare liberamente con i tuoi amici? Utilizza il nostro server discord quando vuoi!
                            </Text>
                            <div className="justify-content-center">
                                <PrimaryButton text="Server discord" onClick={() => redirectToLink("https://discord.gg/SwPzAkv4A4")} allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>
                */}
                <Col className="mb-3" xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div><Icon iconName="World" style={homeIconStyle} className="homeIcon" /></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                Utilizza la nostra comoda pagina che ti permette di raggiungere tutti i servizi UniMi.
                            </Text>
                            <div className="justify-content-center">
                                <PrimaryButton text="Servizi" className="text-decoration-none" href="https://studentiunimi.it/services/" allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>

                <Col className="mb-3" xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div><Icon iconName="CloudDownload" style={homeIconStyle} className="homeIcon" /></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                <div className="mb-0">Mi mandi i tuoi appunti?</div> 
                                <div>Un attimo e sono subito da lei!</div>
                            </Text>
                            <div className="justify-content-center">
                                <PrimaryButton text="HedgeDoc" onClick={() => redirectToLink("https://hedgedoc.studentiunimi.it/")} allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>

                <Col className="mb-3" xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div><Icon iconName="Code" style={homeIconStyle} className="homeIcon" /></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                Accedi al nostro servizio per condividere codice e qualsiasi altro materiale in maniera comoda e sicura.
                            </Text>
                            <div className="justify-content-center">
                                <PrimaryButton text="Paste" onClick={() => redirectToLink("http://paste.studentiunimi.it/")} allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>
            </Row>


        </div>

        <div className="fourth-section mb-4">
            <h5 className="mb-4">Hai provato a spegnere e riaccendere?</h5>

            <Row className="justify-content-center">
                <Col style={fourthSectionCol} className="mb-3">
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div><Icon iconName="ContactHeart" style={homeIconStyle} className="homeIcon" /></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                Ho un problema didattico.
                            </Text>
                            <Icon iconName="SortDown" style={iconStyle}></Icon>
                            <div className="justify-content-center">
                                <PrimaryButton text="Rappresentanti" className="text-decoration-none" href="https://studentiunimi.it/representatives/" allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>

                <Col style={fourthSectionCol} className="mb-3">
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div><Icon iconName="Telemarketer" style={homeIconStyle} className="homeIcon" /></div>
                            <Text variant="medium" styles={helpfulTextStyles}>
                                Ho un problema tecnico.
                            </Text>
                            <Icon iconName="SortDown" style={iconStyle}></Icon>
                            <div className="justify-content-center">
                                <PrimaryButton text="Amministratori" className="text-decoration-none" href="https://studentiunimi.it/organization/" allowDisabledFocus style={buttonStyle} />
                            </div>
                        </Card.Section>
                    </Card>
                </Col>
            </Row>


        </div>


        </Container >
    )
};

export default HomeView;