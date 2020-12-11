import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { IconButton } from 'office-ui-fabric-react';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
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
    width: '140px',
    height: '200px'
}

const Home = () => {
    return (
        <Container className="home">
            <div className="text-center">
                <Text style={{ fontSize: FontSizes.size16 }}>
                    <p>
                        Network nato con lo scopo di creare un punto centrale di collegamento tra tutti i corsi di laurea in ambito informatico dell'università degli studi di Milano.
                        Sono disponibili collegamenti a siti web, gruppi telegram e faq dei corsi didattici.
                        <p>Per qualsiasi dubbio o proposta è possibile scrivere al creatore del network <Link href="https://t.me/giuseppetm" className="text-decoration-none" target="_blank">@giuseppetm</Link>.</p>
                    </p>
                </Text>
            </div>
            <br />
            <Container id="home-collegamenti">
                <div className="row">
                    <div className="card m-auto text-center" style={cardStyle}>
                        <div className="card-body">
                            <Link href="https://github.com/NetworkStataleInformatica/network/blob/master/regolamento.pdf" target="_blank">
                                <IconButton iconProps={{ iconName: "ComplianceAudit" }} className={iconClass} />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <Text style={{ fontSize: FontSizes.size16, textAlign: "center" }}>
                                    Regolamento
                            </Text>
                            </div>
                        </div>
                    </div>

                    <div className="card m-auto text-center" style={cardStyle}>
                        <div className="card-body">
                            <Link href="https://t.me/stataleinformatica" target="_blank">
                                <IconButton iconProps={{ iconName: "Send" }} className={iconClass} />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <Text style={{ fontSize: FontSizes.size16, textAlign: "center" }}>
                                    Canale Telegram
                            </Text>
                            </div>
                        </div>
                    </div>

                    <div className="card m-auto text-center" style={cardStyle}>
                        <div className="card-body">
                            <Link href="https://github.com/NetworkStataleInformatica/network/blob/master/drive.pdf" target="_blank">
                                <IconButton iconProps={{ iconName: "CloudWeather" }} className={iconClass} />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <Text style={{ fontSize: FontSizes.size16, textAlign: "center" }}>
                                    Drive
                            </Text>
                            </div>
                        </div>
                    </div>

                    <div className="card m-auto text-center" style={cardStyle}>
                        <div className="card-body">
                            <Link href="https://discord.gg/pPGUrr35sv" target="_blank">
                                <IconButton iconProps={{ iconName: "ChatBot" }} className={iconClass} />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <Text style={{ fontSize: FontSizes.size16, textAlign: "center" }}>
                                    Server Discord
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