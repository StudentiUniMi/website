import { Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { Persona, Link } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { semibold } from '../fonts';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { redirectToLink } from '../services/Utils';
import { useTheme } from '@fluentui/react-theme-provider';
import { Icon } from 'office-ui-fabric-react';
import { initializeIcons } from "@uifabric/icons";
import { Card, ICardTokens } from "@uifabric/react-cards";
import { PrimaryButton } from 'office-ui-fabric-react';
import { Separator } from '@fluentui/react/lib/Separator';
import { ActionButton } from '@fluentui/react/lib/Button';
import { IIconProps } from '@fluentui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { getFaqs } from '../services/Requests'; 
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

SwiperCore.use([Pagination, Navigation, Autoplay]);
initializeIcons();
const cardTokens: ICardTokens = { childrenMargin: 12 };
const logoFileName = 'unimi500.png';
const logoProperties = { width: '150px', height: '150px', display: 'inline-block' };
const wikiPic = { width: '130px', height: '130px', marginTop: '5px', marginBottom: '5px', marginLeft: 'auto', marginRight: 'auto' };

const HomeView = () => {
    var theme = useTheme();
    const faqs = getFaqs();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const homeIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size32 };
    const sectionCard = { minHeight: '160px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none', boxShadow: theme.effects.elevation8 };
    const buttonStyle = { maxWidth: '180px' };
    const telegramGroupIcon: IIconProps = { iconName: 'Send' };
    const wikiIcon: IIconProps = { iconName: 'Globe' };

    return (
        <Container className="home text-center">

            <div className="info-section mb-4">
                <Image id="logo" className="mb-2"
                    src={process.env.PUBLIC_URL + '/logo/' + logoFileName}
                    alt='Network logo'
                    style={logoProperties}
                />
                <div className="mb-2"><Text variant="xLarge">Benvenuto nel sito web del Network Studenti UniMi!</Text></div>
                <div><Text variant="large">La nostra missione è organizzare le informazioni dell'Università degli studi di Milano e renderle accessibili a tutti.</Text></div>
            </div>

            <div className="mb-3 justify-content-center">
                <Swiper pagination={true} navigation={true} autoplay={{ "delay": 4500, "disableOnInteraction": false }} className="mySwiper">

                    <SwiperSlide>
                        <Row className="justify-content-center">
                            <Col className="mb-3" xl={3} lg={4} md={4} sm={6} xs={12} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <div >
                                    <div className="mb-1">
                                        <Text variant="medium">
                                            Sei uno studente che vuole immatricolarsi e che cerca un gruppo generale in cui chiedere informazioni <Icon iconName="Help" style={{ color: theme.palette.themePrimary, fontSize: FontSizes.size12 }} />
                                        </Text>
                                    </div>
                                    <div>
                                        <Text styles={semibold}>Ne abbiamo creato uno apposito!</Text>
                                    </div>
                                </div>
                            </Col>
                            <Col className="mb-3" xl={3} lg={4} md={4} sm={6} xs={12}>
                                <Card tokens={cardTokens} style={{ minHeight: '160px' }}>
                                    <Card.Item>
                                        <Persona onRenderPrimaryText={() => <div className="justify-content-center text-center mt-3" style={{ wordWrap: 'break-word', whiteSpace: 'normal'}}><Text styles={semibold}>Pre-matricole, ammissioni e immatricolazioni</Text></div>} text="Pre-matricole, ammissioni e immatricolazioni" imageUrl={process.env.PUBLIC_URL + '/extra_groups_images/matricole.jpg'} />
                                    </Card.Item>
                                    <Card.Section>
                                        <ActionButton
                                            onClick={() => redirectToLink("https://t.me/joinchat/jjzrKAOF74s5ZmI0")}
                                            iconProps={telegramGroupIcon}
                                            style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: 0 }}
                                            allowDisabledFocus>
                                            Gruppo Telegram
                                        </ActionButton>
                                    </Card.Section>
                                </Card>
                            </Col>
                        </Row>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Row className="justify-content-center">
                            <Col className="mb-3" xl={3} lg={4} md={4} sm={6} xs={12} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <div >
                                    <div className="mb-1">
                                        <Text variant="medium">
                                            Stai cercando un gruppo per trovare un alloggio a Milano insieme ad altri studenti universitari oppure vuoi creare un annuncio <Icon iconName="Help" style={{ color: theme.palette.themePrimary, fontSize: FontSizes.size12 }} />
                                        </Text>
                                    </div>
                                    <div>
                                        <Text styles={semibold}>Entra nel gruppo apposito!</Text>
                                    </div>
                                </div>
                            </Col>
                            <Col className="mb-3" xl={3} lg={4} md={4} sm={6} xs={12}>
                                <Card tokens={cardTokens} style={{ minHeight: '160px' }}>
                                    <Card.Item>
                                        <Persona onRenderPrimaryText={() => <div className="ml-2"><Text styles={semibold}>Alloggi</Text></div>} text="Alloggi" imageUrl={process.env.PUBLIC_URL + '/extra_groups_images/alloggi.jpg'} />
                                    </Card.Item>
                                    <Card.Section>
                                        <ActionButton
                                            onClick={() => redirectToLink("https://t.me/joinchat/xJP5VPIBboxiNjI0")}
                                            iconProps={telegramGroupIcon}
                                            style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: 0 }}
                                            allowDisabledFocus>
                                            Gruppo Telegram
                                        </ActionButton>
                                    </Card.Section>
                                </Card>
                            </Col>
                        </Row>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Row className="justify-content-center">
                            <Col className="mb-3" xl={3} lg={4} md={4} sm={6} xs={12} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <div >
                                    <div className="mb-1">
                                        <Text variant="medium">
                                            Ti ricordiamo che abbiamo a disposizione una <Text styles={semibold}>Wiki</Text> in cui è possibile collaborare e aiutare altri studenti!
                                        Puoi trovare tutto il materiale che ti serve, ma ricorda che è importante anche contribuire!
                                    </Text>
                                    </div>
                                </div>
                            </Col>
                            <Col className="mb-3" xl={3} lg={4} md={4} sm={6} xs={12}>
                                <Card tokens={cardTokens} style={{ minHeight: '160px' }}>
                                    <Card.Section>
                                        <Image id="logo"
                                            src={process.env.PUBLIC_URL + "/other/globe.png"}
                                            alt={"Wiki Studenti UniMi"}
                                            style={wikiPic}
                                        />
                                        <ActionButton
                                            onClick={() => redirectToLink("https://wiki.studentiunimi.it/")}
                                            iconProps={wikiIcon}
                                            style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 0 }}
                                            allowDisabledFocus>
                                            Raggiungi la Wiki!
                                        </ActionButton>
                                    </Card.Section>
                                </Card>
                            </Col>
                        </Row>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Row className="justify-content-center">
                            <Col className="mb-3" xl={3} lg={4} md={4} sm={6} xs={12} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <div >
                                    <div className="mb-1">
                                        <Text variant="medium">
                                            Per noi offrirti la possibilità di non perdere tempo alla ricerca di servizi universitari è molto importante.
                                            Proprio per questo abbiamo realizzato una pagina apposita per trovarli tutti subito, e farti scoprire anche alcune guide che abbiamo realizzato!
                                </Text>
                                    </div>
                                </div>
                            </Col>
                            <Col className="mb-3" xl={3} lg={4} md={4} sm={6} xs={12}>
                                <Card tokens={cardTokens} style={{ minHeight: '160px' }}>
                                    <Card.Section>
                                        <Icon iconName="Breakfast" style={{ fontSize: '48px', color: theme.palette.themePrimary, marginTop: '15px' }} />
                                        <Text variant="medium">
                                            <Link href="https://unimia.studentiunimi.it">unimia.studentiunimi.it</Link>
                                        </Text>
                                    </Card.Section>
                                </Card>
                            </Col>
                        </Row>
                    </SwiperSlide>

                </Swiper>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-3" style={iconStyle} />

            <div className="primary-section mb-4">
                <div className="mb-4">
                    <Separator><Text variant="large" styles={semibold}>I nostri collegamenti principali</Text></Separator>
                </div>

                <Row className="justify-content-center">
                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><i className="fab fa-telegram homeIcon" style={homeIconStyle}></i></div>
                                <Text variant="medium">
                                    Unisciti al canale telegram per rimanere aggiornato e raggiungere tutti i link disponibili!
                            </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text="Canale telegram" className="text-decoration-none" onClick={() => redirectToLink("https://t.me/studenti_unimi")} allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><i className="fas fa-comment-dots homeIcon" style={homeIconStyle}></i></div>
                                <Text variant="medium">
                                    Entra nel gruppo telegram principale per eventuali discussioni e chiarimenti riguardo il network.
                        </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text="Gruppo telegram" className="text-decoration-none" onClick={() => redirectToLink("https://t.me/joinchat/VswKeO2D6soL3lcj")} allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><i className="fab fa-discord homeIcon" style={homeIconStyle}></i></div>
                                <Text variant="medium">
                                    Entra nel nostro server discord per scambiare informazioni con altri studenti e conoscere nuove persone!
                            </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text="Server discord" className="text-decoration-none" onClick={() => redirectToLink("https://discord.gg/SwPzAkv4A4")} allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><i className="fab fa-github homeIcon" style={homeIconStyle}></i></div>
                                <Text variant="medium">
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
                <div className="mb-4"><Separator><Text variant="large" styles={semibold}>Ogni cosa ha il suo gruppo Telegram</Text></Separator></div>

                <Row className="justify-content-center">
                    <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Group" style={homeIconStyle} className="homeIcon" /></div>
                                <Text variant="medium">
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
                                <Text variant="medium">
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
                                <div><Icon iconName="JoinOnlineMeeting" style={homeIconStyle} className="homeIcon" /></div>
                                <Text variant="medium">
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
                <div className="mb-4"><Separator><Text variant="large" styles={semibold}>I nostri servizi per aiutarti nello studio</Text></Separator></div>

                <Row className="justify-content-center">
                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Globe" style={homeIconStyle} className="homeIcon" /></div>
                                <Text variant="medium">
                                    Accedi alla Wiki del Network e aiutaci a migliorarla contribuendo!
                            </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text="Wiki" onClick={() => redirectToLink("https://wiki.studentiunimi.it/")} allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="World" style={homeIconStyle} className="homeIcon" /></div>
                                <Text variant="medium">
                                    Utilizza la nostra comoda pagina che ti permette di raggiungere tutti i servizi UniMi.
                            </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text="Servizi" className="text-decoration-none" href="https://studentiunimi.it/services/" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="CloudDownload" style={homeIconStyle} className="homeIcon" /></div>
                                <Text variant="medium">
                                    <div className="mb-0">Mi mandi i tuoi appunti?</div>
                                    <div>Un attimo e sono subito da lei!</div>
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text="HedgeDoc" onClick={() => redirectToLink("https://hedgedoc.studentiunimi.it/")} allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Code" style={homeIconStyle} className="homeIcon" /></div>
                                <Text variant="medium">
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
                <div className="mb-4"><Separator><Text variant="large" styles={semibold}>Hai provato a spegnere e riaccendere?</Text></Separator></div>

                <Row className="justify-content-center">
                    <Col xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3">
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="ContactHeart" style={homeIconStyle} className="homeIcon" /></div>
                                <Text variant="medium">
                                    Ho un problema didattico.
                            </Text>
                                <Icon iconName="SortDown" style={iconStyle}></Icon>
                                <div className="justify-content-center">
                                    <PrimaryButton text="Rappresentanti" className="text-decoration-none" href="https://studentiunimi.it/representatives/" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3">
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Telemarketer" style={homeIconStyle} className="homeIcon" /></div>
                                <Text variant="medium">
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

            <div className="faq-section mb-4">
                <div className="mb-4"><Separator><Text variant="large" styles={semibold}>Domande frequenti sul Network</Text></Separator></div>

                {
                    faqs.map( (x,i) => {
                        return (
                            <Accordion style={{ backgroundColor: theme.palette.white, color: theme.palette.black, boxShadow: theme.effects.elevation8, marginRight: 10, marginLeft: 10 }} key={i}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{color: theme.palette.black}} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Text variant="medium" style={{ color: theme.palette.themePrimary }}>{x.question}</Text>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Text variant="medium">
                                        {x.answer}
                                    </Text>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }

            </div>

        </Container >
    )
};

export default HomeView;