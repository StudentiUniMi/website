import * as React from 'react';
import './App.css';
import { Text, ITextProps } from 'office-ui-fabric-react/lib/Text';

const Footer = () => {
    return (
        <div id="footer">
            <Text>
                Network Statale Informatica &copy;<br />
                Sito web creato e gestito da Giuseppe Del Campo
            </Text>
        </div>
    )
};

export default Footer;