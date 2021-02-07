import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { IconButton } from 'office-ui-fabric-react';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const HomeLinks = [
    { name: 'Canale Telegram', link: 'https://t.me/studenti_unimi', iconName: 'Send'},
    { name: 'Gruppo Telegram', link: 'https://t.me/joinchat/VswKeAblS2nrfXME', iconName: 'Group'},
    { name: 'Wiki', link: 'https://wiki.studentiunimi.it/', iconName: 'PageList'},
    { name: 'Paste', link: 'http://paste.studentiunimi.it', iconName: 'CodeEdit'},
    { name: 'HedgeDoc', link: 'https://hedgedoc.studentiunimi.it/', iconName: 'ReadingMode'}
    //{ name: 'Server Discord', link: 'https://discord.gg/pPGUrr35sv', iconName: 'ChatBot'},
    //{ name: 'Servizio di Screenshare', link: '', iconName: 'ScreenCast'},
];

const iconClass = mergeStyles({ fontSize: 50, height: 100, width: 100, });
const cardStyle = { width: '140px', height: '200px' }

const Home = () => {
    return (
        <Container className="home">
            <div className="text-center mb-4">
                <Text style={{ fontSize: FontSizes.size16 }}>
                    <div className="mb-0">
                        Network nato con lo scopo di creare un punto centrale di collegamento tra tutti i corsi di laurea dell'università degli studi di Milano.
                        Sono disponibili siti web, gruppi telegram, informazioni varie e wiki dei corsi didattici.
                    </div>
                </Text>
            </div>
            
            <Row className="m-3 justify-content-center">
                {
                    HomeLinks.map((x, i) => {
                        return (
                            <Col xl={2} lg={2} md={4} sm={4} xs={12} key={i}>
                                <div className="card m-auto text-center" style={cardStyle}>
                                    <div className="card-body">
                                        <Link href={x.link} target="_blank">
                                            <IconButton iconProps={{iconName: x.iconName}} className={iconClass} />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-text">
                                            <Text style={{ fontSize: FontSizes.size16, textAlign: "center" }}>
                                                {x.name}
                                            </Text>
                                        </div>
                                    </div> 
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container >
    )
};

export default Home;