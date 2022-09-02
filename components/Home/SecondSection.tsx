import { Text, IIconProps, Image, DefaultButton } from 'office-ui-fabric-react/lib-commonjs';
import { semibold } from '../../services/Fonts';
import { Container } from 'react-bootstrap';
import { useTheme } from '@fluentui/react-theme-provider';
import { FaDiscord, FaUsers, FaTelegram } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../../services/LocalizationService";

const SecondSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const buttonStyle = { maxWidth: '230px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'GoChevronRight', styles: { root: { fontSize: 14 } } };

    const iconStyle = { backgroundColor: theme.palette.themePrimary, color:theme.palette.white, fontSize: 36, padding: '1px 7px 1px 7px', borderRadius: 3, minWidth: 10 };

    return (
        <div className="pb-5 pt-5" style={{ backgroundColor: theme.palette.neutralLighterAlt }}>
            <Container>

                <Row>
                    <Col lg={4} className="text-center mb-4 mb-lg-0">
                        <Image src={'/images/home/2.png'} style={{ display: 'inline-block', width: '50%' }} />
                    </Col>

                    <Col lg={8}>
                        <div className="mb-4"><Text variant="xLarge" styles={semibold}>{locale?.homepage.section3.header}</Text></div>

                        <div>
                            <div className="mb-4">
                                <Row>
                                    <Col lg={1}><FaTelegram style={iconStyle} /></Col>
                                    <Col lg={11}>
                                        <div><Text styles={semibold} variant="large">{locale?.homepage.section3.part1.title}</Text></div>
                                        <div className="mb-2"><Text variant="medium">{locale?.homepage.section3.part1.description}</Text></div>                
                                        <DefaultButton
                                            text={locale?.homepage.section3.part1.buttonText}
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
                                    <Col lg={1}><FaUsers style={iconStyle} /></Col>
                                    <Col lg={11}>
                                        <div><Text styles={semibold} variant="large">{locale?.homepage.section3.part2.title}</Text></div>
                                        <div className="mb-2"><Text variant="medium">{locale?.homepage.section3.part2.description}</Text></div>                
                                        <DefaultButton
                                            text={locale?.homepage.section3.part2.buttonText}
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
                                    <Col lg={1}><FaDiscord style={iconStyle} /></Col>
                                    <Col lg={11}>
                                        <div><Text styles={semibold} variant="large">{locale?.homepage.section3.part3.title}</Text></div>
                                        <div className="mb-2"><Text variant="medium">{locale?.homepage.section3.part3.description}</Text></div>                
                                        <DefaultButton
                                            text={locale?.homepage.section3.part3.buttonText}
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