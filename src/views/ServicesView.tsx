import React from 'react';
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { useTheme } from '@fluentui/react-theme-provider';
import { DocumentCardPreview, IDocumentCardPreviewProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { Card, ICardTokens } from '@uifabric/react-cards';
import { semibold } from '../services/fonts';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getServices } from '../services/Requests';
import Chip from '@material-ui/core/Chip';
import LocalizationService from "../services/LocalizationService";
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Link, TooltipDelay, TooltipHost } from '@fluentui/react';

const Services = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    const services = getServices();
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
        <div className="services pb-3">
            <div className="pt-5 pb-5 mb-4" style={{ backgroundColor: theme.palette.neutralLighter }}>
                <Container>

                    <Row>
                        <Col lg={8} className="mb-2">
                            <div className="mb-2">
                                <Text variant="xLargePlus">{locale?.services.text1}</Text>
                            </div>

                            <div>
                                <Text variant="large">{locale?.services.text2}</Text>
                            </div>
                        </Col>

                        <Col lg={4} className="text-center">
                            <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 300 }}>
                                <Image id="logo" className="mb-2" src={process.env.PUBLIC_URL + '/images/services.png'} style={imageProperties} />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>

            <Container>
                <div className="mb-4 text-center">
                    <Text variant="xLarge">{locale?.services.availableServices}</Text>
                </div>

                <Row className="justify-content-center">
                    {services.map((x, i) =>
                        <Col xl={4} lg={6} md={6} sm={12} xs={12} className="mb-3" key={i}>
                            <Link href={x.link ?? ""} className="text-decoration-none">
                                <Card label={x.name?.it} horizontal tokens={cardTokens} style={{ border: '0px', maxWidth: 'none', cursor: 'pointer' }}>
                                    <Card.Item fill>
                                        <DocumentCardPreview {...cardProps(x.icon, x.color)}/>
                                    </Card.Item>
                                    <Card.Section>
                                        <Text variant="medium" style={{ color: theme.palette.themePrimary }} styles={semibold}>{x.name![language!]}</Text>
                                        <TooltipHost
                                            id={`tooltip${i}`}
                                            content={x.type === 'G' ? locale?.services.guide : locale?.services.service}
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
                                        <Text variant="small" style={{ marginTop: 0, color: theme.palette.black }}>{x.description![language!]}</Text>
                                    </Card.Section>
                                </Card>
                            </Link>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Services;