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
import { redirectToLink } from '../services/Utils';
import Chip from '@material-ui/core/Chip';
import LocalizationService from "../services/LocalizationService";
import { Image } from 'office-ui-fabric-react/lib/Image';
import { TooltipDelay, TooltipHost } from '@fluentui/react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet'

const test_department_positions = [
    { x: 45.47612, y: 9.231888, name: 'Dipartimento di Informatica "Giovanni Degli Antoni"' },
    { x: 45.47621, y: 9.23111, name: 'Dipartimento di Fisica' },
    { x: 45.47628, y: 9.23325, name: 'Dipartimento di Biologia' },
    { x: 45.47644, y: 9.23382, name: 'Dipartimento di Bioscienze' },
    { x: 45.4751, y: 9.23321, name: 'Dipartimento di Chimica' },
    { x: 45.47388, y: 9.22793, name: 'Dipartimento di Matematica "Federigo Enriques"' },
    { x: 45.47387, y: 9.22949, name: 'Dipartimento di Scienze della Terra "Ardito Desio"' },
    { x: 45.47388, y: 9.22889, name: 'Dipartimento di Fisiopatologia e dei Trapianti' },
    { x: 45.47462, y: 9.22717, name: 'Dipartimento di Scienze Farmaceutiche "Pietro Pratesi"' },
    { x: 45.47458, y: 9.22831, name: 'Dipartimento di Scienze Biomediche per la Salute' }
];

const Services = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string = LocalizationService.getLanguage();
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
        <div className="services">
            <div className="pt-5 pb-5 mb-4" style={{ backgroundColor: theme.palette.neutralLighter }}>
                <Container>

                    <Row>
                        <Col lg={8} className="mb-2">
                            <div className="mb-2">
                                <Text variant="xLargePlus">{locale.services.text1}</Text>
                            </div>

                            <div>
                                <Text variant="large">{locale.services.text2}</Text>
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

            <Container className="mb-4">
                <div className="mb-4 text-center">
                    <Text variant="xLarge">{locale.services.availableServices}</Text>
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

            <div className="pt-5 pb-5 departments-map" style={{ backgroundColor: theme.palette.themeSecondary }}>
                <Container>

                    <Row>
                        <Col lg={3} className="text-center">
                            <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 300 }}>
                                <Image id="logo" className="mb-2" src={process.env.PUBLIC_URL + '/other/red_marker2.png'} style={{ width: '90%' }} />
                            </div>
                        </Col>

                        <Col lg={9} className="mb-2">
                            <div className="mb-2">
                                <Text variant="xLargePlus" style={{color: theme.palette.white}}>{locale.services.mapSection.text1}</Text>
                            </div>

                            <div className="mb-2">
                                <Text variant="large" style={{color: theme.palette.white}}>{locale.services.mapSection.text2}</Text>
                            </div>

                            <div className="mb-2">
                                <Text variant="medium" style={{color: theme.palette.white}}>{locale.services.mapSection.text3}</Text>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>

            <div className="departments-map">
                <MapContainer center={[45.477, 9.2265]} zoom={15} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    { test_department_positions.map( x => { return (      
                        <Marker position={[x.x, x.y]} icon={ new Icon({iconUrl: process.env.PUBLIC_URL + '/other/marker.png', iconSize: [25, 41], iconAnchor: [12, 41]}) }>
                            <Tooltip>
                               {x.name}
                            </Tooltip>
                        </Marker>
                    )})}

                </MapContainer>
            </div>
        </div>
    )
}

export default Services;