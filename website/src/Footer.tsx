import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'office-ui-fabric-react';
import { Text, ITextProps } from 'office-ui-fabric-react/lib/Text';
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { DefaultPalette, Stack, IStackStyles, IStackTokens } from 'office-ui-fabric-react';

import { Container } from 'react-bootstrap';

const Footer = () => {
    const [renderDetails, updateRenderDetails] = React.useState(true);

    const Giuseppetm: IPersonaSharedProps = {
        imageUrl: './profileRecolored2.png',
        imageInitials: 'GD',
        text: 'Giuseppetm',
        secondaryText: 'Studente di Informatica',
    };

    const ManueleLucchi: IPersonaSharedProps = {
        imageUrl: '',
        imageInitials: 'ML',
        text: 'Manuele Lucchi',
        secondaryText: 'Sviluppatore',
    };


    return (
        <footer className="footer" /*style={{ background: DefaultPalette.themeTertiary }}*/>
            <Container className="text-center mt-3 mb-3">
                <Text>
                    <div style={{ fontWeight: 500 }} >Network Statale Informatica &copy;</div>
                    {/*
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
                </Text>
            </Container>
        </footer>
    )
};

export default Footer;