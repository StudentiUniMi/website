import { Text } from 'office-ui-fabric-react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { FontSizes } from '@fluentui/theme';
import { Icon, Link, Image } from 'office-ui-fabric-react';
import { useTheme } from '@fluentui/react-theme-provider';
import { semibold } from '../../services/Fonts';
import { redirectToLink } from '../../services/Utils';
import { TooltipHost, ITooltipHostStyles, TooltipDelay } from 'office-ui-fabric-react/lib-commonjs/Tooltip';
import LocalizationService from "../../services/LocalizationService";

const cardTokens: ICardTokens = { childrenMargin: 12 };

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
const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

const developers: any = [
    { name: "Giuseppe Del Campo", description: { it: "Sviluppatore del sito web", en: 'Website Developer' }, pic: "giuseppedelcampo.jpg", github: "https://github.com/Giuseppetm", website: "https://giuseppetm.netlify.app/" },
    { name: "Manuele Lucchi", description: { it: "Progettista del sito web", en: 'Website Technical Designer' }, pic: "manuelelucchi.jpg", github: "https://github.com/manuelelucchi", website: "https://manuelelucchi.github.io/" },
    { name: "Marco Aceti", description: { it: "Sviluppatore di bot, database e altri servizi", en: "Bot and database developer" }, pic: "marcoaceti.jpg", github: "https://github.com/MarcoBuster", website: "https://marcoaceti.it/" },
];

const Mantainers = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    const profileIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };

    const sectionCard = {
        minHeight: '120px',
        height: '100%',
        width: '100%',
        maxWidth: 'none',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxHeight: 'none',
        backgroundColor: theme.palette.white
    };

    return (
        <div className="pb-4 pt-4" style={{ backgroundColor: theme.palette.neutralLighter }}>
            <Container className="contributors text-center">
                <div className="mb-4"><Text variant="xLarge">{locale?.contributors.header1}</Text></div>

                <Row className="justify-content-center">
                    {
                        developers.map((x: any, i: any) => {
                            return (
                                <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12} key={i}>
                                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                                        <Card.Section>
                                            <div className="justify-content-center">
                                                <Image id="logo"
                                                    src={"/contributors/" + x.pic}
                                                    alt={x.name}
                                                    style={developerPic}
                                                />
                                            </div>
                                            <div className="mb-0"><Text variant="medium" styles={semibold}>{x.name}</Text></div>
                                            <Text variant="medium" className="mt-2">
                                                {x.description[language!]}
                                            </Text>
                                            <div>
                                                <TooltipHost
                                                    content={locale?.contributors.githubProfile}
                                                    calloutProps={calloutProps}
                                                    styles={hostStyles}
                                                    delay={TooltipDelay.zero}
                                                >
                                                    <Link onClick={() => redirectToLink(x.github)}><Icon iconName="ProfileSearch" style={profileIconStyle} /></Link>
                                                </TooltipHost>
                                                &nbsp;&nbsp;
                                                <TooltipHost
                                                    content={locale?.contributors.websiteProfile}
                                                    calloutProps={calloutProps}
                                                    styles={hostStyles}
                                                    delay={TooltipDelay.zero}
                                                >
                                                    <Link onClick={() => redirectToLink(x.website)}><Icon iconName="Website" style={profileIconStyle} /></Link>
                                                </TooltipHost>
                                            </div>
                                        </Card.Section>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Mantainers;