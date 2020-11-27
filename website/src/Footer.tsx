import * as React from 'react';
import './App.css';
import { Link } from 'office-ui-fabric-react';
import { Text, ITextProps } from 'office-ui-fabric-react/lib/Text';
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { DefaultPalette, Stack, IStackStyles, IStackTokens } from 'office-ui-fabric-react';


const Footer = () => {
    const [renderDetails, updateRenderDetails] = React.useState(true);

    const Giuseppetm: IPersonaSharedProps = {
        imageUrl: './profileRecolored2.png',
        imageInitials: 'GD',
        text: 'Giuseppetm',
        secondaryText: 'Studente di informatica',
    };

    const ManueleLucchi: IPersonaSharedProps = {
        imageUrl: '',
        imageInitials: 'ML',
        text: 'Manuele Lucchi',
        secondaryText: 'Sviluppatore',
    };


    return (
        <div id="footer" style={{ background: DefaultPalette.themeTertiary }}>
            <div id="footer-content">
                <Text>
                    Network Statale Informatica &copy;<br />
                    Sito web creato da:<br /><br />
                    <Persona
                        {...Giuseppetm}
                        size={PersonaSize.size40}
                        presence={PersonaPresence.online}
                        hidePersonaDetails={!renderDetails}
                    />
                    <Persona
                        {...ManueleLucchi}
                        size={PersonaSize.size40}
                        presence={PersonaPresence.online}
                        hidePersonaDetails={!renderDetails}
                    />
                </Text>
            </div>
        </div>
    )
};

export default Footer;