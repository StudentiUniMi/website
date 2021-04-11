import { Text } from 'office-ui-fabric-react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { FontSizes } from '@fluentui/theme';
import { Icon, Link, Image } from 'office-ui-fabric-react';
import { useTheme } from '@fluentui/react-theme-provider';
import { semibold } from '../fonts';
import { Persona } from 'office-ui-fabric-react/lib/Persona';
import { redirectToLink } from '../services/Utils';
import { TooltipHost, ITooltipHostStyles, TooltipDelay } from 'office-ui-fabric-react/lib/Tooltip';
import Contributor from '../models/Contributor';
import { getContributors } from '../services/Requests'

const cardTokens: ICardTokens = { childrenMargin: 12 };
const sectionCard = {
    minHeight: '120px',
    height: '100%',
    width: '100%',
    maxWidth: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: 'none'
};

const developerPic = {
    width: '80px',
    height: '80px',
    marginTop: '5px',
    marginBottom: '5px',
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    marginLeft: 'auto', marginRight: 'auto'
};

const calloutProps = { gapSpace: 5 };
const calloutPropsContributor = { gapSpace: 3 };
const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

const developers = [
    { name: "Giuseppe Del Campo", description: "Sviluppatore principale del sito web.", pic: "giuseppedelcampo.jpg", github: "https://github.com/Giuseppetm", website: "https://giuseppetm.github.io/" },
    { name: "Manuele Lucchi", description: "Sviluppatore del sito web.", pic: "manuelelucchi.jpg", github: "https://github.com/manuelelucchi", website: "https://manuelelucchi.github.io/" },
    { name: "Marco Aceti", description: "Sviluppatore di bot, database e altri servizi.", pic: "marcoaceti.jpg", github: "https://github.com/MarcoBuster", website: "https://marcoaceti.it/" },
];

const ContributorsView = () => {
    var theme = useTheme();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const profileIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const contributors: Contributor[] = getContributors();

    return (
        <Container className="contributors text-center">

            <div className="mb-2">
                <Text variant="large">
                    Di seguito è possibile trovare tutte le persone che hanno contribuito allo sviluppo del sito web, dei servizi che offre, della wiki, e del network in generale.
                </Text>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-2" style={iconStyle} />

            <div className="mb-4">
                <div className="mb-3"><Text variant="large" styles={semibold}>Manutentori principali</Text></div>

                <Row className="justify-content-center">
                    {
                        developers.map(x => {
                            return (
                                <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                                        <Card.Section>
                                            <div className="justify-content-center">
                                                <Image id="logo"
                                                    src={process.env.PUBLIC_URL + "/contributors/" + x.pic}
                                                    alt={x.name}
                                                    style={developerPic}
                                                />
                                            </div>
                                            <div className="mb-0"><Text variant="medium" styles={semibold}>{x.name}</Text></div>
                                            <Text variant="medium" className="mt-2">
                                                {x.description}
                                            </Text>
                                            <div>
                                                <TooltipHost
                                                    content="Profilo GitHub"
                                                    calloutProps={calloutProps}
                                                    styles={hostStyles}
                                                    delay={TooltipDelay.zero}
                                                >
                                                    <Link onClick={() => redirectToLink(x.github)}><i className="fab fa-github homeIcon" style={profileIconStyle}></i></Link>
                                                </TooltipHost>
                                                &nbsp;&nbsp;
                                                <TooltipHost
                                                    content="Sito Web"
                                                    calloutProps={calloutProps}
                                                    styles={hostStyles}
                                                    delay={TooltipDelay.zero}
                                                >
                                                    <Link onClick={() => redirectToLink(x.website)}><i className="fas fa-globe homeIcon" style={profileIconStyle}></i></Link>
                                                </TooltipHost>
                                            </div>
                                        </Card.Section>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>


            <div className="mb-4">
                <div className="mb-2"><Text variant="large" styles={semibold}>Contributori</Text></div>

                <div><Text variant="medium">Hai contribuito allo sviluppo del network e vorresti comparire in questa lista? Scrivi in privato a <Link href="https://t.me/giuseppetm">@giuseppetm</Link>.</Text></div>

                <Container className="contributors mb-2 mt-4">
                    <Row className="justify-content-center">
                        {
                            contributors.map((x, i) => 
                                <>
                                    <TooltipHost
                                        content={x.username}
                                        calloutProps={calloutPropsContributor}
                                        styles={hostStyles}
                                        delay={TooltipDelay.zero}
                                    >
                                        <Persona onRenderPrimaryText={() => null} primaryText={x.username} />
                                    </TooltipHost>
                                    &nbsp;
                                </>
                            )
                        }
                    </Row>
                </Container>
            </div>
        </Container>
    )
}

export default ContributorsView;