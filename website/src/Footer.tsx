import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { IPersonaSharedProps, Persona, PersonaPresence, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { Link } from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { FontSizes } from '@fluentui/theme';

const Footer = () => {
    const Giuseppetm: IPersonaSharedProps = {
        imageUrl: process.env.PUBLIC_URL + '/profileRecolored2.png',
        text: '@giuseppetm'
      };

    return (
        <footer style={{ backgroundColor: '#cccccc' }}>
            <Container style={{ backgroundColor: '#cccccc', width:'100%' }}>

                <div className="row" style={{ backgroundColor: '#cccccc', width:'100%' }}>

                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0 col-sm-12">
                        <p className="mb-1">
                            <Text style={{ fontWeight: 600 }}>Contatti</Text>
                        </p>

                        <p>
                            <Text style={{ fontSize: FontSizes.size12 }}>
                                <p className="mb-0">
                                Per qualsiasi dubbio o proposta è possibile contattare
                                </p>
                                <p className="mb-1">
                                il creatore del network tramite telegram.
                                </p>
                                {/*
                                <Persona
                                    {...Giuseppetm}
                                    size={PersonaSize.size24}
                                    presence={PersonaPresence.online}
                                    imageAlt="Annie Lindqvist, status is online"
                                />
                                */}
                                <Link href="https://t.me/giuseppetm" className="text-decoration-none" target="_blank"> @giuseppetm</Link>
                            </Text>
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0 col-sm-12">
                        <p className="mb-1">
                            <Text style={{ fontWeight: 600 }}>Link utili</Text>
                        </p>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://github.com/NetworkStataleInformatica/network" className="text-decoration-none"><i className="fab fa-github"></i> Repository del network</Link>
                                </Text>
                            </li>
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
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0 col-sm-12">
                        <p className="mb-1">
                            <Text style={{ fontWeight: 600 }}>Altri link</Text>
                        </p>

                        <ul className="list-unstyled">
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="http://unimia.unimi.it/" className="text-decoration-none"><i className="fas fa-globe-europe"></i> Unimia</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://ariel.unimi.it/" className="text-decoration-none"><i className="fas fa-university"></i> Ariel</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="http://www.di.unimi.it/ecm/home/organizzazione/organi-di-governo/consiglio-di-dipartimento" className="text-decoration-none"><i className="fas fa-user-tie"></i> Rappresentanti degli studenti</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="https://vc.di.unimi.it/" className="text-decoration-none"><i className="fas fa-video"></i> Virtual Classroom</Link>
                                </Text>
                            </li>
                            <li>
                                <Text style={{ fontSize: FontSizes.size12 }}>
                                    <Link href="http://easystaff.divsi.unimi.it/PortaleStudenti/index.php?view=easycourse&include=corso&_lang=it&empty_box=0&col_cells=0" className="text-decoration-none"><i className="fas fa-clock"></i> Orario</Link>
                                </Text>
                            </li>
                        </ul>
                    </div>
                </div>

            </Container>
        </footer>
    )
};

export default Footer;