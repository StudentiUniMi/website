import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { FontSizes } from '@fluentui/theme';
// import txt from './data/revision.txt';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#cccccc', boxShadow: '0px 0px 0.5px 0.5px #7a7a7a' }}>
            <Container style={{ backgroundColor: '#cccccc', width:'100%' }}>

                <div className="row" style={{ backgroundColor: '#cccccc' }}>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4 mb-md-0">
                        <div className="mb-2">
                            <Text style={{ fontWeight: 600 }}>
                                <Link href="https://github.com/StudentiUnimi" className="text-decoration-none">Studenti UniMi &copy;</Link>
                            </Text>
                        </div>
                        
                        <div className="mb-1">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <Text style={{ fontSize: FontSizes.size12 }}>
                                        <Link href="https://www.facebook.com/networkstudentiunimi" className="text-decoration-none"><i className="fab fa-facebook"></i> Pagina Facebook</Link>
                                    </Text>
                                </li>
                                <li>
                                    <Text style={{ fontSize: FontSizes.size12 }}>
                                        <Link href="https://github.com/StudentiUnimi/website" className="text-decoration-none"><i className="fab fa-github"></i> Repository del sito</Link>
                                    </Text>
                                </li>
                                <li>
                                    <Text style={{ fontSize: FontSizes.size12 }}>
                                        <Link href="https://github.com/StudentiUnimi/MultiGroupBot" className="text-decoration-none"><i className="fas fa-rocket"></i> MultiGroup Bot</Link>
                                    </Text>
                                </li>
                            </ul>
                        </div>

                        {/*
                        <p className="mb-1">
                            <Text style={{ fontSize: FontSizes.size12 }}>
                                Build: <Text style={{ fontSize: FontSizes.size10 }}>dennis</Text>
                            </Text>
                        </p>
                        */}

                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4 mb-md-0">
                        <div className="mb-1">
                            <Text style={{ fontWeight: 600 }}>Link utili</Text>
                        </div>

                        <ul className="list-unstyled mb-3">
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="http://www.quickunimi.it/" className="text-decoration-none"><i className="fas fa-globe"></i> QuickUnimi</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://orientamento.di.unimi.it/index.php/iniziative/tutor-di-processo" className="text-decoration-none"><i className="fas fa-question-circle"></i> Faq matricole</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://quanto-manca.it/" className="text-decoration-none"><i className="fas fa-heart"></i> Quanto-manca.it</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://codeshare.tech" className="text-decoration-none"><i className="fas fa-meteor"></i> Codeshare.tech</Link>
                                </Text>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4 mb-md-0 contacts">
                        <div className="mb-1">
                            <Text style={{ fontWeight: 600 }}>Contatti</Text>
                        </div>

                        <div className="mb-0">
                            <Text style={{ fontSize: FontSizes.size12 }}>
                                <p className="mb-1 text">
                                    Per qualsiasi dubbio o proposta è possibile contattare:
                                </p>
                                <Link href="https://t.me/giuseppetm" className="text-decoration-none" target="_blank"> @giuseppetm</Link>
                            </Text>
                        </div>
                    </div>
                </div>

            </Container>
        </footer>
    )
};

export default Footer;