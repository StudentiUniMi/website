import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text';
//import { IPersonaSharedProps } from 'office-ui-fabric-react/lib/Persona';

import { Container } from 'react-bootstrap';

const Footer = () => {

    /*
    const [renderDetails, updateRenderDetails] = React.useState(true);


    const Giuseppetm: IPersonaSharedProps = {
        imageUrl: './profileRecolored2.png',
        imageInitials: 'GD',
        text: 'Giuseppetm',
        secondaryText: 'Studente di Informatica',
    };
    */

    /*
    const ManueleLucchi: IPersonaSharedProps = {
        imageUrl: '',
        imageInitials: 'ML',
        text: 'Manuele Lucchi',
        secondaryText: 'Sviluppatore',
    };
    */


    return (
        <footer className="footer" /*style={{ background: DefaultPalette.themeTertiary }}*/>
            <Container className="text-center mt-3 mb-3">
                <p>
                    <Text style={{ fontWeight: 500 }}>Network Statale Informatica &copy;</Text>
                </p>
                <div className="row justify-content-center">
                    <Text>
                        <Link href="https://github.com/NetworkStataleInformatica/network">Repository del network <i className="fab fa-github"></i></Link>
                    </Text>
                </div>
                <div className="row justify-content-center">
                    <Text>
                        <Link href="http://unimia.unimi.it/">Unimia <i className="fas fa-globe-europe"></i></Link>
                    </Text>
                </div>
                <div className="row justify-content-center">
                    <Text>
                        <Link href="http://www.quickunimi.it/">QuickUnimi <i className="fas fa-globe"></i></Link>
                    </Text>
                </div>
                <div className="row justify-content-center">
                    <Text>
                        <Link href="https://orientamento.di.unimi.it/index.php/iniziative/tutor-di-processo">Faq matricole <i className="fas fa-question-circle"></i></Link>
                    </Text>
                </div>
                {/*
                <p> Sito web creato da:
                    <Persona className="justify-content-center text-center"
                        {...Giuseppetm}
                        size={PersonaSize.size40}
                        //presence={PersonaPresence.online}
                        hidePersonaDetails={!renderDetails}
                    />
                </p>


                        Sito web creato da:<br /><br />
                        <Persona
                            {...Giuseppetm}
                            size={PersonaSize.size40}
                            //presence={PersonaPresence.online}
                            hidePersonaDetails={!renderDetails}
                        />
                        <Persona
                            {...ManueleLucchi}
                            size={PersonaSize.size40}
                            //presence={PersonaPresence.online}
                            hidePersonaDetails={!renderDetails}
                        />
                        */}
            </Container>
        </footer>
    )
};

export default Footer;