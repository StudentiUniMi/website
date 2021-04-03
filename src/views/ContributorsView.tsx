import { Text, ITextStyles } from 'office-ui-fabric-react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { FontSizes, FontWeights } from '@fluentui/theme';
import { Icon, Link } from 'office-ui-fabric-react';
import { useTheme } from '@fluentui/react-theme-provider';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { redirectToLink } from '../services/Utils';
import { TooltipHost, ITooltipHostStyles, TooltipDelay } from 'office-ui-fabric-react/lib/Tooltip';
import Contributor from '../models/Contributor';
import { getContributors } from '../services/Requests'

const cardTokens: ICardTokens = { childrenMargin: 12 };
const helpfulTextStyles: ITextStyles = { root: { fontWeight: FontWeights.regular } };
const sectionCard = {
    minHeight: '120px',
    height: '100%',
    width: '100%',
    maxWidth: 'none',
    maxHeight: 'none'
};

const developerPic = {
    width: '80px',
    height: '80px',
    marginTop: '5px',
    marginBottom: '5px',
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
};

const calloutProps = { gapSpace: 5 };
const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

const developers = [
    { name: "Giuseppe Del Campo", description: "Sviluppatore principale del sito web.", pic: "giuseppetm.jpg", github: "https://github.com/Giuseppetm", website: "https://giuseppetm.github.io/" },
    { name: "Manuele Lucchi", description: "Sviluppatore del sito web.", pic: "manuele.jpg", github: "https://github.com/manuelelucchi", website: "https://manuelelucchi.github.io/" },
    { name: "Marco Aceti", description: "Sviluppatore di bot, database e altri servizi.", pic: "aceti.jpg", github: "https://github.com/MarcoBuster", website: "https://marcoaceti.it/" },
];

const ContributorsView = () => {
    var theme = useTheme();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const profileIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const contributors : Contributor[] = getContributors();

    return (
        <Container className="contributors text-center">

            <div className="mb-4">
                <h5 style={{fontWeight: 400}}>
                    Di seguito è possibile trovare tutte le persone che hanno contribuito allo sviluppo del sito web, dei servizi che offre, della wiki, e del network in generale.
                </h5>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-3" style={iconStyle} />

            <div className="mb-4">
                <h5 className="mb-3">Manutentori principali</h5>

                <Row className="justify-content-center">
                    {
                    developers.map(x => { return (
                        <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                            <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                                <Card.Section>
                                    <div className="justify-content-center">
                                    <img id="logo"
                                        src={process.env.PUBLIC_URL + "/" + x.pic}
                                        alt={x.name}
                                        style={developerPic}
                                    />
                                    </div>
                                    <h6 className="mb-0">{x.name}</h6>
                                    <Text variant="medium" styles={helpfulTextStyles}>
                                        {x.description}
                                    </Text>
                                    <div>
                                    <TooltipHost
                                        content="Profilo GitHub"
                                        calloutProps={calloutProps}
                                        styles={hostStyles}
                                        delay={TooltipDelay.zero}
                                    >
                                        <Link onClick={() => redirectToLink(x.github)}><i className="fab fa-github homeIcon mr-2" style={profileIconStyle}></i></Link>
                                    </TooltipHost>
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
                    )})
                    }
                </Row>
            </div>


            <div className="mb-4">
                <h5 className="mb-3">Contributori</h5>

                <div className="contributors">
                    <Row>
                        {
                            contributors.map((x,i) =>
                            <Col key={i} xl={2} lg={2} md={3} sm={6} xs={12} className="mb-3 col-persona">
                                <Persona className="justify-content-center" text={x.username} size={PersonaSize.size40} />
                            </Col>
                            )
                        }
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default ContributorsView;