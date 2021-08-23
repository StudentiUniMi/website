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
import { Separator } from '@fluentui/react/lib/Separator';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

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

const developers:any = [
    { name: "Giuseppe Del Campo", description: { it: "Sviluppatore del sito web.", en: 'Website Developer' }, pic: "giuseppedelcampo.jpg", github: "https://github.com/Giuseppetm", website: "https://giuseppetm.github.io/" },
    { name: "Manuele Lucchi", description: { it: "Progettista del sito web.", en: 'Website Technical Designer' }, pic: "manuelelucchi.jpg", github: "https://github.com/manuelelucchi", website: "https://manuelelucchi.github.io/" },
    //{ name: "Marco Aceti", description: "Sviluppatore di bot, database e altri servizi.", pic: "marcoaceti.jpg", github: "https://github.com/MarcoBuster", website: "https://marcoaceti.it/" },
];

const ContributorsView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string = LocalizationService.getLanguage();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const profileIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const contributors: Contributor[] = getContributors();

    return (
        <Container className="contributors text-center">

            <div className="mb-2">
                <Text variant="large">
                    {locale.contributors.text1}
                </Text>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-2" style={iconStyle} />

            <div className="mb-4">
                <div className="mb-3"><Separator><Text variant="large" styles={semibold}>{locale.contributors.header1}</Text></Separator></div>

                <Row className="justify-content-center">
                    {
                        developers.map( (x:any,i:any) => {
                            return (
                                <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12} key={i}>
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
                                                {x.description[language]}
                                            </Text>
                                            <div>
                                                <TooltipHost
                                                    content={locale.contributors.githubProfile}
                                                    calloutProps={calloutProps}
                                                    styles={hostStyles}
                                                    delay={TooltipDelay.zero}
                                                >
                                                    <Link onClick={() => redirectToLink(x.github)}><Icon iconName="ProfileSearch" style={profileIconStyle} /></Link>
                                                </TooltipHost>
                                                &nbsp;&nbsp;
                                                <TooltipHost
                                                    content={locale.contributors.websiteProfile}
                                                    calloutProps={calloutProps}
                                                    styles={hostStyles}
                                                    delay={TooltipDelay.zero}
                                                >
                                                    <Link onClick={() => redirectToLink(x.website)}><Icon iconName="Website" style={profileIconStyle}/></Link>
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
                <div className="mb-2"><Separator><Text variant="large" styles={semibold}>{locale.contributors.header2}</Text></Separator></div>

                <div><Text variant="medium"><JsxParser bindings={{ theme: theme }} components={{ Text, Link }} jsx={locale.contributors.text2}/></Text></div>

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
                                        <Persona onRenderPrimaryText={() => null} text={x.username} className="mb-1" />
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