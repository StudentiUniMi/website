import { Link } from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { semibold } from '../fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import { withCookies } from 'react-cookie';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

const listElement = { marginBottom: '.2rem' };

const Footer = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    return (
        <footer style={{ backgroundColor: theme.palette.neutralQuaternaryAlt, borderTop: '1px solid', borderColor: theme.palette.neutralLight }}>
            <Container style={{ width: '100%', color: theme.palette.neutralSecondary }}>

                <Row>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-4 mb-md-0">
                        <div className="mb-2">
                            <Text styles={semibold} variant="medium">
                                <Link href="https://github.com/StudentiUnimi" target="_blank">&copy; Network StudentiUniMi</Link>
                            </Text>
                        </div>

                        <div className="mb-2 text">
                            <Text variant="medium">
                                {locale.footer[0].text}
                            </Text>
                        </div>

                        <div className="mb-1">
                            <Link href="https://t.me/studenti_unimi" target="_blank" className="text-decoration-none mr-1"><i className="fab fa-telegram"></i></Link>
                            <Link href="https://discord.gg/SwPzAkv4A4" target="_blank" className="text-decoration-none mr-1"><i className="fab fa-discord"></i></Link>
                            <Link href="https://github.com/StudentiUnimi" target="_blank" className="text-decoration-none mr-1"><i className="fab fa-github"></i></Link>
                            <Link href="https://www.facebook.com/networkstudentiunimi" target="_blank" className="text-decoration-none"><i className="fab fa-facebook"></i></Link>
                        </div>
                    </Col>
                    

                    <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-4 mb-md-0">
                        <div className="mid-column">
                            <div className="mb-2">
                                <Text styles={semibold} variant="medium">{locale.footer[1].header}</Text>
                            </div>

                            <div>
                                <Text variant="medium">
                                    <ul className="list-unstyled mb-3">
                                        <li style={listElement}>
                                            <Link href="http://www.quickunimi.it/" target="_blank"><i className="fas fa-globe"></i> QuickUnimi</Link>
                                        </li>
                                        <li style={listElement}>
                                            <Link href="https://orientamento.di.unimi.it/index.php/studia-con-noi/tutor-di-processo" target="_blank"><i className="fas fa-question-circle"></i> Faq matricole</Link>
                                        </li>
                                        <li style={listElement}>
                                            <Link href="https://quanto-manca.it/" target="_blank"><i className="fas fa-heart"></i> Quanto-manca.it</Link>

                                        </li>
                                        <li style={listElement}>
                                            <Link href="https://codeshare.tech" target="_blank"><i className="fas fa-meteor"></i> Codeshare.tech</Link>
                                        </li>
                                    </ul>
                                </Text>
                            </div>
                        </div>
                    </Col>

                    <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-4 mb-md-0 contacts">
                        <div className="mb-2">
                            <Text styles={semibold} variant="medium">{locale.footer[2].header}</Text>
                        </div>

                        <div className="mb-1 text">
                            <Text variant="medium">
                                <JsxParser bindings={{ theme: theme }} components={{ Text, Link }} jsx={locale.footer[2].text} />
                            </Text>
                        </div>
                    </Col>
                
                </Row>

            </Container>
        </footer>
    )
};

export default withCookies(Footer);
