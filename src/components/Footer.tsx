import { Link } from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { semibold } from '../fonts';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';

const listElement = { marginBottom: '.2rem' };

const Footer = () => {
    var theme = useTheme();
    return (
        <footer style={{ backgroundColor: theme.palette.neutralQuaternaryAlt, borderTop: '1px solid', borderColor: theme.palette.neutralLight }}>
            <Container style={{ width: '100%', color: theme.palette.neutralSecondary }}>

                <Row>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-4 mb-md-0">
                        <div className="mb-2">
                            <Text styles={semibold} variant="medium">
                                <Link href="https://github.com/StudentiUnimi" target="_blank">Studenti UniMi &copy;</Link>
                            </Text>
                        </div>

                        <div className="mb-2 text">
                            <Text variant="medium">
                                Il network e il relativo sito web non sono affiliati all'Università degli Studi di Milano.
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
                                <Text styles={semibold} variant="medium">Link utili</Text>
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
                            <Text styles={semibold} variant="medium">Contatti</Text>
                        </div>

                        <div className="mb-1 text">
                            <Text variant="medium">
                                Per qualsiasi dubbio o proposta è possibile scrivere sul <Link href="https://t.me/joinchat/VswKeO2D6soL3lcj" target="_blank">gruppo principale</Link> del network.
                            </Text>
                        </div>
                    </Col>
                
                </Row>

            </Container>
        </footer>
    )
};

export default Footer;
