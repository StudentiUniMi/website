import { Link } from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { FontSizes } from '@fluentui/theme';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#cccccc', boxShadow: '0px 0px 0.5px 0.5px #7a7a7a' }}>
            <Container style={{ backgroundColor: '#cccccc', width:'100%' }}>

                <Row style={{ backgroundColor: '#cccccc' }}>

                    <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-4 mb-md-0 main-col">
                        <div className="mb-1">
                            <Text style={{ fontWeight: 600 }}>
                                <Link href="https://github.com/StudentiUnimi" >Studenti UniMi &copy;</Link>
                            </Text>
                        </div>

                        <div className="mb-2">
                            <Text style={{ fontSize: FontSizes.size12 }}>
                                <p className="mb-0 text">
                                    Il network e il relativo sito web non sono affiliati all'Università degli Studi di Milano.
                                </p>
                            </Text>
                        </div>
                        
                        <div className="mb-1">
                            <Link href="https://www.facebook.com/networkstudentiunimi" className="text-decoration-none mr-1"><i className="fab fa-facebook"></i></Link>
                            <Link href="https://github.com/StudentiUnimi/website" className="text-decoration-none mr-1"><i className="fab fa-github"></i></Link>
                            <Link href="https://github.com/StudentiUnimi/MultiGroupBot" className="text-decoration-none mr-1"><i className="fas fa-rocket"></i></Link>
                        </div>

                    </Col>

                    <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-4 mb-md-0">
                        <div className="mb-1">
                            <Text style={{ fontWeight: 600 }}>Link utili</Text>
                        </div>

                        <ul className="list-unstyled mb-3">
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="http://www.quickunimi.it/" ><i className="fas fa-globe"></i> QuickUnimi</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://orientamento.di.unimi.it/index.php/iniziative/tutor-di-processo" ><i className="fas fa-question-circle"></i> Faq matricole</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://quanto-manca.it/" ><i className="fas fa-heart"></i> Quanto-manca.it</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://codeshare.tech" ><i className="fas fa-meteor"></i> Codeshare.tech</Link>
                                </Text>
                            </li>
                        </ul>
                    </Col>

                    <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-4 mb-md-0 contacts">
                        <div className="mb-1">
                            <Text style={{ fontWeight: 600 }}>Contatti</Text>
                        </div>

                        <div className="mb-0">
                            <Text style={{ fontSize: FontSizes.size12 }}>
                                <p className="mb-1 text">
                                    Per qualsiasi dubbio o proposta è possibile scrivere sul <Link href="https://t.me/joinchat/VswKeAblS2nrfXME"  target="_blank">gruppo principale</Link> del network.
                                </p>
                            </Text>
                        </div>
                    </Col>
                
                </Row>

            </Container>
        </footer>
    )
};

export default Footer;