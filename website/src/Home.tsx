import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { IconButton } from 'office-ui-fabric-react';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap';

/*const stackStyles: IStackStyles = {
    root: {
        background: DefaultPalette.themeTertiary,
    },
};*/

const iconClass = mergeStyles({
    fontSize: 50, // perchè non va?? dio santo
    height: 100,
    width: 100,
});

const cardStyle = {
    width: '150px',
    height: '200px'
}

const Home = () => {
    return (
        <Container id="home">
            <div className="text-center">
                <Text style={{ fontSize: FontSizes.size16 }}>
                    <p>Sito web nato con lo scopo di creare un punto centrale per tutti i contenuti del nostro network.
                    Sono disponibili i collegamenti ai siti web, gruppi telegram e faq dei corsi delle triennali di informatica,
                    informatica musicale, informatica per la comunicazione digitale, e sicurezza dei sistemi e delle reti informatiche.
                Per chiunque volesse collaborare al progetto è pregato di scrivere a <Link href="https://t.me/giuseppetm" className="text-decoration-none">@giuseppetm</Link> su telegram.</p>
                </Text>
            </div>
            <br />
            <Container id="home-collegamenti">
                <div className="row">
                    <div className="card m-auto text-center" style={cardStyle}>
                        <div className="card-body">
                            <Link href="https://github.com/NetworkStataleInformatica/network/blob/master/regolamento.pdf">
                                <IconButton iconProps={{ iconName: "ComplianceAudit" }} className={iconClass} />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <Text style={{ fontSize: FontSizes.size16, textAlign: "center" }}>
                                    Regolamento del Network
                            </Text>
                            </div>
                        </div>
                    </div>

                    <div className="card m-auto text-center" style={cardStyle}>
                        <div className="card-body">
                            <Link href="https://t.me/stataleinformatica">
                                <IconButton iconProps={{ iconName: "Send" }} className={iconClass} />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <Text style={{ fontSize: FontSizes.size16, textAlign: "center" }}>
                                    Canale Telegram del Network
                            </Text>
                            </div>
                        </div>
                    </div>

                    <div className="card m-auto text-center" style={cardStyle}>
                        <div className="card-body">
                            <Link href="https://discord.gg/pPGUrr35sv">
                                <IconButton iconProps={{ iconName: "ChatBot" }} className={iconClass} />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <Text style={{ fontSize: FontSizes.size16, textAlign: "center" }}>
                                    Server Discord del Network
                            </Text>
                            </div>
                        </div>
                    </div>

                    <div className="card m-auto text-center" style={cardStyle}>
                        <div className="card-body">
                            <Link href="https://drive.google.com/drive/folders/0BwzuyD3iLGcbcUNxTVNOVE9FR1E">
                                <IconButton iconProps={{ iconName: "CloudWeather" }} className={iconClass} />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <Text style={{ fontSize: FontSizes.size16, textAlign: "center" }}>
                                    Drive del Network
                            </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Container >
    )
};

export default Home;