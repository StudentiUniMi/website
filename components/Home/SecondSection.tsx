import { Text, IIconProps, Image, DefaultButton, Icon } from 'office-ui-fabric-react/lib-commonjs';
import { semibold } from '../../services/Fonts';
import { Container } from 'react-bootstrap';
import { useTheme } from '@fluentui/react-theme-provider';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../../services/LocalizationService";

const SecondSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const buttonStyle = { maxWidth: '230px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'GoChevronRight', styles: { root: { fontSize: 14 } } };

    const iconStyle = { display: 'flex', backgroundColor: theme.palette.themePrimary, color:theme.palette.white, fontSize: 20, padding: 10, borderRadius: 5, minWidth: 10 };

    return (
        <div className="pb-5 pt-5" style={{ backgroundColor: theme.palette.neutralLighterAlt }}>
            <Container>

                <Row>
                    <Col lg={4} className="text-center mb-4 mb-lg-0">
                        <Image src={'/images/home/2.png'} style={{ display: 'inline-block', width: 280 }} />
                    </Col>

                    <Col lg={8}>
                        <div className="mb-4">
                            <Text variant="xLarge" styles={semibold}>{locale?.homepage.section3.header}</Text>
                        </div>

                        <div>
                            <div className="mb-4">
                                <div className="d-flex flex-row align-items-center" style={{ gap: 15 }}>
                                    <Icon style={iconStyle} iconName="FaTelegram" />
                                    <div><Text styles={semibold} variant="large">{locale?.homepage.section3.part1.title}</Text></div>
                                </div>

                                <div style={{ marginLeft: 56, marginTop: -5 }}>
                                        <div className="mb-2"><Text variant="medium">{locale?.homepage.section3.part1.description}</Text></div>                
                                        <DefaultButton
                                            text={locale?.homepage.section3.part1.buttonText}
                                            style={buttonStyle}
                                            iconProps={buttonIconProps}
                                            theme={theme}
                                            href="https://t.me/studenti_unimi"
                                            className="text-decoration-none"
                                        />
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="d-flex flex-row align-items-center" style={{ gap: 15 }}>
                                    <Icon style={iconStyle} iconName="FaUsers" />
                                    <div><Text styles={semibold} variant="large">{locale?.homepage.section3.part2.title}</Text></div>
                                </div>
                                <div style={{ marginLeft: 56, marginTop: -5 }}>
                                    <div className="mb-2"><Text variant="medium">{locale?.homepage.section3.part2.description}</Text></div>                
                                    <DefaultButton
                                        text={locale?.homepage.section3.part2.buttonText}
                                        style={buttonStyle}
                                        iconProps={buttonIconProps}
                                        theme={theme}
                                        href="https://t.me/unimichat"
                                        className="text-decoration-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="d-flex flex-row align-items-center" style={{ gap: 15 }}>
                                    <Icon style={iconStyle} iconName="FaDiscord" />
                                    <div><Text styles={semibold} variant="large">{locale?.homepage.section3.part3.title}</Text></div>
                                </div>
                                <div style={{ marginLeft: 56, marginTop: -5 }}>
                                    <div className="mb-2"><Text variant="medium">{locale?.homepage.section3.part3.description}</Text></div>                
                                    <DefaultButton
                                        text={locale?.homepage.section3.part3.buttonText}
                                        style={buttonStyle}
                                        iconProps={buttonIconProps}
                                        theme={theme}
                                        href="https://discord.gg/SwPzAkv4A4"
                                        className="text-decoration-none"
                                    />
                                </div>
                            </div>
                        
                        </div>

                    </Col>
                    

                </Row>

            </Container>
        </div>
    )
};

export default SecondSection;