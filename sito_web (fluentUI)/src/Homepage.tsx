import * as React from 'react';
import './App.css';
import { Activity } from './Activity'
import { Link, Text } from 'office-ui-fabric-react';

const Homepage = () => {
    return (
        <div>
            <Text>
                Sito web nato con lo scopo di creare un punto centrale di collegamento per tutti i contenuti del nostro network.
                Sono disponibili i collegamenti ai siti web, gruppi telegram e faq dei corsi delle triennali di informatica, informatica musicale,
                sicurezza dei sistemi e delle reti informatiche, e informatica per la comunicazione digitale.
                <br />Per chiunque volesse collaborare al progetto è pregato di scrivere a <Link href="https://t.me/giuseppetm">@giuseppetm</Link> su telegram.<br />
                Il canale telegram del network è disponibile al seguente link <Link href="https://t.me/giuseppetm">t.me/stataleInformatica</Link>
            </Text>
            <Text>
                <br /><br />
                Ultimi aggiornamenti:
            </Text>
            <Activity />
        </div>
    )
};

export default Homepage;