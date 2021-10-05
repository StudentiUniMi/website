import { Text, IIconProps, Icon, Image, DefaultButton } from '@fluentui/react';
import { semibold } from '../../services/fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";

const SecondSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const buttonStyle = { maxWidth: '230px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    const iconStyle = { backgroundColor: theme.palette.themePrimary, color:theme.palette.white, fontSize: '25px', padding: '1px 7px 1px 7px', borderRadius: 3 };

    return (
        <div className="pb-5 pt-5" style={{ backgroundColor: theme.palette.neutralLighterAlt }}>
            <Container>

                <Row>
                    <Col lg={4} className="text-center mb-4 mb-lg-0">
                        <Image src={process.env.PUBLIC_URL + '/other/temp/2.png'} style={{ display: 'inline-block', width: '70%' }} />
                    </Col>

                    <Col lg={8}>
                        <div className="mb-4"><Text variant="xLarge" styles={semibold}>Scopri i nostri collegamenti principali</Text></div>

                        <div>
                            <div className="mb-4">
                                <Row>
                                    <Col lg={1}><Icon iconName="Send" style={iconStyle} /></Col>
                                    <Col lg={11}>
                                        <div><Text styles={semibold} variant="large">Canale Telegram</Text></div>
                                        <div className="mb-2"><Text variant="medium">Iscriviti al nostro canale per rimanere sempre aggiornato sulle notizie riguardanti il network.</Text></div>                
                                        <DefaultButton
                                            text={"Raggiungi il canale"}
                                            style={buttonStyle}
                                            iconProps={buttonIconProps}
                                            theme={theme}
                                        />
                                    </Col>
                                </Row>
                            </div>

                            <div className="mb-4">
                                <Row>
                                    <Col lg={1}><Icon iconName="Group" style={iconStyle} /></Col>
                                    <Col lg={11}>
                                        <div><Text styles={semibold} variant="large">Gruppo principale</Text></div>
                                        <div className="mb-2"><Text variant="medium">Entra nel nostro gruppo principale per qualsiasi chiarimento o discussione riguardo la nostra Università.</Text></div>                
                                        <DefaultButton
                                            text={"Raggiungi il gruppo"}
                                            style={buttonStyle}
                                            iconProps={buttonIconProps}
                                            theme={theme}
                                        />
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <Row>
                                    <Col lg={1}><Icon iconName="Game" style={iconStyle} /></Col>
                                    <Col lg={11}>
                                        <div><Text styles={semibold} variant="large">Server Discord</Text></div>
                                        <div className="mb-2"><Text variant="medium">Entra nel nostro server discord per scambiare informazioni con altri studenti e conoscere nuove persone.</Text></div>                
                                        <DefaultButton
                                            text={"Raggiungi il server"}
                                            style={buttonStyle}
                                            iconProps={buttonIconProps}
                                            theme={theme}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        
                        </div>

                    </Col>
                    

                </Row>


                {/*
                <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold}>{locale?.homepage.section3.text}</Text></div>

                <Row className="justify-content-center">
                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Send" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale?.homepage.section3.card1.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale?.homepage.section3.card1.button} iconProps={buttonIconProps} href="https://t.me/studenti_unimi" target="_blank" className="text-decoration-none" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="ReminderGroup" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale?.homepage.section3.card2.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale?.homepage.section3.card2.button} iconProps={buttonIconProps} href="https://t.me/unimichat" target="_blank" className="text-decoration-none" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Game" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale?.homepage.section3.card3.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale?.homepage.section3.card3.button} iconProps={buttonIconProps} href="https://discord.gg/SwPzAkv4A4" target="_blank" className="text-decoration-none" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Teamwork" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale?.homepage.section3.card4.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale?.homepage.section3.card4.button} iconProps={buttonIconProps} href="https://github.com/StudentiUnimi" target="_blank" className="text-decoration-none" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
                */}

            </Container>
        </div>
    )
};

export default SecondSection;