import { Link } from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { semibold } from '../fonts';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import { redirectToLink } from '../services/Utils';

const listElement = {
    marginBottom: '.2rem'
}

const Footer = () => {
    var theme = useTheme();
    return (
        <footer style={{ backgroundColor: theme.palette.neutralQuaternaryAlt, borderTop: '1px solid', borderColor: theme.palette.neutralLight }}>
            <Container style={{ width:'100%' }}>

                <Row>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-4 mb-md-0">
                        <div className="mb-2">
                            <Text styles={semibold} variant="medium">
                                <Link href="https://github.com/StudentiUnimi" >Studenti UniMi &copy;</Link>
                            </Text>
                        </div>

                        <div className="mb-2 text">
                            <Text variant="medium">
                                Il network e il relativo sito web non sono affiliati all'Università degli Studi di Milano.
                            </Text>
                        </div>

                        <div className="mb-1">
                            <Link onClick={() => redirectToLink("https://t.me/studenti_unimi")} className="text-decoration-none mr-1"><i className="fab fa-telegram"></i></Link>
                            <Link onClick={() => redirectToLink("https://discord.gg/SwPzAkv4A4")} className="text-decoration-none mr-1"><i className="fab fa-discord"></i></Link>
                            <Link onClick={() => redirectToLink("https://github.com/StudentiUnimi")} className="text-decoration-none mr-1"><i className="fab fa-github"></i></Link>
                            <Link onClick={() => redirectToLink("https://www.facebook.com/networkstudentiunimi")} className="text-decoration-none"><i className="fab fa-facebook"></i></Link>
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
                                            <Link href="http://www.quickunimi.it/" ><i className="fas fa-globe"></i> QuickUnimi</Link>
                                        </li>
                                        <li style={listElement}>
                                            <Link href="https://orientamento.di.unimi.it/index.php/iniziative/tutor-di-processo" ><i className="fas fa-question-circle"></i> Faq matricole</Link>
                                        </li>
                                        <li style={listElement}>
                                            <Link href="https://quanto-manca.it/" ><i className="fas fa-heart"></i> Quanto-manca.it</Link>

                                        </li>
                                        <li style={listElement}>
                                            <Link href="https://codeshare.tech" ><i className="fas fa-meteor"></i> Codeshare.tech</Link>
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

                        <div className="mb-1 text" style={{ lineHeight: "normal" }}>
                            <Text variant="medium">
                                Per qualsiasi dubbio o proposta è possibile scrivere sul <Link href="https://t.me/joinchat/VswKeAblS2nrfXME" target="_blank">gruppo principale</Link> del network.
                            </Text>
                        </div>
                    </Col>
                
                </Row>

            </Container>
        </footer>
    )
};

export default Footer;