import { Text, IIconProps, Icon, Image, DefaultButton } from '@fluentui/react';
import { semibold } from '../../services/fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../../services/LocalizationService";
import { useTheme } from '@fluentui/react-theme-provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab,fas);

const SecondSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const buttonStyle = { maxWidth: '230px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    const iconStyle = { backgroundColor: theme.palette.themePrimary, color:theme.palette.white, fontSize: '28px', padding: '1px 7px 1px 7px', borderRadius: 3, minWidth: 10 };
    const telegramIconStyle = { backgroundColor: theme.palette.themePrimary, color: theme.palette.white, fontSize: '34px', padding: '1px 7px 1px 7px', borderRadius: 3, minWidth: 10 }

    return (
        <div className="pb-5 pt-5" style={{ backgroundColor: theme.palette.neutralLighterAlt }}>
            <Container>

                <Row>
                    <Col lg={4} className="text-center mb-4 mb-lg-0">
                        <Image src={process.env.PUBLIC_URL + '/other/temp/11.png'} style={{ display: 'inline-block', width: '50%' }} />
                    </Col>

                    <Col lg={8}>
                        <div className="mb-4"><Text variant="xLarge" styles={semibold}>Scopri i nostri collegamenti principali</Text></div>

                        <div>
                            <div className="mb-4">
                                <Row>
                                    <Col lg={1}><FontAwesomeIcon icon={['fab', 'telegram']} style={telegramIconStyle} /></Col>
                                    <Col lg={11}>
                                        <div><Text styles={semibold} variant="large">Canale Telegram</Text></div>
                                        <div className="mb-2"><Text variant="medium">Iscriviti al nostro canale per rimanere sempre aggiornato sulle notizie riguardanti il network.</Text></div>                
                                        <DefaultButton
                                            text={"Raggiungi il canale"}
                                            style={buttonStyle}
                                            iconProps={buttonIconProps}
                                            theme={theme}
                                            href="https://t.me/studenti_unimi"
                                            className="text-decoration-none"
                                        />
                                    </Col>
                                </Row>
                            </div>

                            <div className="mb-4">
                                <Row>
                                    <Col lg={1}><FontAwesomeIcon icon={['fas', 'users']} style={iconStyle} /></Col>
                                    <Col lg={11}>
                                        <div><Text styles={semibold} variant="large">Gruppo principale</Text></div>
                                        <div className="mb-2"><Text variant="medium">Entra nel nostro gruppo principale per qualsiasi chiarimento o discussione riguardo la nostra Università.</Text></div>                
                                        <DefaultButton
                                            text={"Raggiungi il gruppo"}
                                            style={buttonStyle}
                                            iconProps={buttonIconProps}
                                            theme={theme}
                                            href="https://t.me/unimichat"
                                            className="text-decoration-none"
                                        />
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <Row>
                                    <Col lg={1}><FontAwesomeIcon icon={['fab', 'discord']} style={iconStyle} /></Col>
                                    <Col lg={11}>
                                        <div><Text styles={semibold} variant="large">Server Discord</Text></div>
                                        <div className="mb-2"><Text variant="medium">Entra nel nostro server discord per scambiare informazioni con altri studenti e conoscere nuove persone.</Text></div>                
                                        <DefaultButton
                                            text={"Raggiungi il server"}
                                            style={buttonStyle}
                                            iconProps={buttonIconProps}
                                            theme={theme}
                                            href="https://discord.gg/SwPzAkv4A4"
                                            className="text-decoration-none"
                                        />
                                    </Col>
                                </Row>
                            </div>
                        
                        </div>

                    </Col>
                    

                </Row>

            </Container>
        </div>
    )
};

export default SecondSection;