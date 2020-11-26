import * as React from 'react';
import './App.css';
import { Text, ITextProps } from 'office-ui-fabric-react/lib/Text';
import { Activity } from './Activity'

const Footer = () => {
    return (
        <div id="footer">
            <Text>
                Network Statale Informatica &copy;<br />
                Sito web creato e gestito da Giuseppe Del Campo<br />
                Ultimi aggiornamenti:
            </Text>
        </div>
    )
};

export default Footer;