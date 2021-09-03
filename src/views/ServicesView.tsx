import React from 'react';
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { useTheme } from '@fluentui/react-theme-provider';
import { DocumentCardPreview, IDocumentCardPreviewProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { Card, ICardTokens } from '@uifabric/react-cards';
import { Icon, Link } from 'office-ui-fabric-react';
import { semibold } from '../services/fonts';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getServices } from '../services/Requests';
import { redirectToLink } from '../services/Utils';
import { Separator } from '@fluentui/react/lib/Separator';
import Chip from '@material-ui/core/Chip';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { TooltipDelay, TooltipHost } from '@fluentui/react';

const Services = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string = LocalizationService.getLanguage();
    const services = getServices();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const cardTokens: ICardTokens = { childrenMargin: 12 };

    const imageProperties = { display: 'inline-block', width: '70%' };

    let cardProps = (iconName?: string, iconColor?: string): IDocumentCardPreviewProps => {
        return {
            previewImages: [ 
                {
                    previewIconProps: {
                        iconName: iconName,
                        styles: { root: { fontSize: FontSizes.size32, color: iconColor } },
                    },
                    width: 100, height: 110
                },
            ],
            styles: { previewIcon: { backgroundColor: theme.palette.neutralLighter }, root: { borderBottom: '0px' } },
        }
    };

    const calloutProps = (i: number) => { return {
        gapSpace: 5,
        target: `#chip${i}`,
    }};
    
    return (
        <div className="services">
            <div className="pt-5 pb-5 mb-4" style={{ backgroundColor: theme.palette.neutralLighter }}>
                <Container>

                    <Row>
                        <Col lg={8} className="mb-2">
                            <div className="mb-2">
                                <Text variant="xLargePlus">Stanchi di dover andare a spulciare miriadi di pagine che neanche caricano alla ricerca di strumenti e servizi universitari?</Text>
                            </div>

                            <div>
                                <Text variant="large">Abbiamo realizzato una pagina per centralizzarli tutti e rendere disponibili anche alcune guide che abbiamo realizzato.</Text>
                            </div>
                        </Col>

                        <Col lg={4} className="text-center">
                            <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 300 }}>
                                <Image id="logo" className="mb-2" src={process.env.PUBLIC_URL + '/other/services.png'} style={imageProperties} />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>

            <Container>
                {/*
                <div className="mb-0">
                    <Text variant="medium">
                        <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale.services.text2} />
                    </Text>
                </div>

                <div className="mb-3">
                    <Text variant="medium">
                        <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale.services.text3} />
                    </Text>
                </div>
                */}

                {/*
                <div className="mb-3">
                    <div className="mb-1"><Text variant="medium">{locale.services.legend}<br/></Text></div>
                    <Icon iconName="SortDown" style={{ color: theme.palette.themePrimary, fontSize: 20, marginBottom: 5 }} />
                    <div>
                        <Text variant="medium">
                            <span className="mr-3"><Chip label={'G'} size="small" style={{ color: theme.palette.orange, backgroundColor: theme.palette.neutralLighter, fontWeight: 500 }} /> {locale.services.guide}</span>
                            <Chip label={'S'} size="small" style={{ color: theme.palette.themePrimary, backgroundColor: theme.palette.neutralLighter, fontWeight: 500 }} /> {locale.services.service}
                        </Text>
                    </div>
                </div>

                <Icon iconName="ChevronDownMed" className="mb-2" style={iconStyle} />
                */}

                <div className="mb-4 text-center">
                    {/*<div className="mb-1"><Text variant="medium" styles={semibold} style={{textTransform: 'uppercase', color: theme.palette.themePrimary}}>Gruppi degli insegnamenti</Text></div>*/}
                    <Text variant="xLarge">Servizi e guide disponibili</Text>
                </div>

                <Row className="justify-content-center">
                    {services.map((x, i) =>
                        <Col xl={4} lg={6} md={6} sm={12} xs={12} className="mb-3" key={i}>
                            <Card label={x.name?.it} onClick={() => redirectToLink(x.link ?? "")} horizontal tokens={cardTokens} style={{border: '0px', maxWidth: 'none'}}>
                                <Card.Item fill>
                                    <DocumentCardPreview {...cardProps(x.icon, x.color)}/>
                                </Card.Item>
                                <Card.Section>
                                    <Text variant="medium" style={{ color: theme.palette.themePrimary }} styles={semibold}>{x.name![language]}</Text>
                                    <TooltipHost
                                        id={`tooltip${i}`}
                                        content={x.type === 'G' ? locale.services.guide : locale.services.service}
                                        calloutProps={calloutProps(i)}
                                        delay={TooltipDelay.zero}
                                    >
                                    <Chip label={x.type} size="small" id={`chip${i}`} style={{
                                        color: x.type === 'G' ? theme.palette.orange : theme.palette.themePrimary,  
                                        position: 'absolute',
                                        right: '20px',
                                        bottom: '5px',
                                        backgroundColor: theme.palette.neutralLighter,
                                        fontWeight: 500
                                    }} />
                                    </TooltipHost>
                                    <Text variant="small" style={{ marginTop: 0 }}>{x.description![language]}</Text>
                                </Card.Section>
                            </Card>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Services;