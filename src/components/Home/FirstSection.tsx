import { Text, IIconProps, PrimaryButton } from '@fluentui/react';
import { semibold } from '../../services/Fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";
import { Image } from 'office-ui-fabric-react/lib/Image';
import Chip from '@material-ui/core/Chip';

const FirstSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const buttonStyle = { maxWidth: '230px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };
    const cardStyle = { backgroundColor: theme.palette.neutralLighterAlt, padding: '20px 30px', borderRadius: '10px', overflow: 'hidden' };
    const cardImageStyle = { maxWidth: '100%', height: 150 };

    return (
        <div className="pb-5 pt-5">
            <Container>

                <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold}>Ecco cosa mettiamo a disposizione</Text></div>

                <Row className="justify-content-around">
                    
                    <Col md={4} sm={12} className="mb-4 mb-md-0 text-right">
                        <div style={cardStyle}>
                            <div className="d-flex flex-row gap-1">
                                <Image src={process.env.PUBLIC_URL + '/images/home/c1.png'} style={cardImageStyle} />

                                <div className="d-flex flex-column justify-content-between">
                                    <Text styles={semibold} variant="medium" className="pl-5">Gruppi per i corsi di laurea</Text>

                                    <Text styles={semibold}>
                                        <Chip label="Oltre 300" style={{ color: theme.palette.white, backgroundColor: theme.palette.themePrimary }} />
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} sm={12} className="mb-4 mb-md-0 text-right">
                        <div style={cardStyle}>
                            <div className="d-flex flex-row gap-1">
                                <Image src={process.env.PUBLIC_URL + '/images/home/c2.png'} style={cardImageStyle} />

                                <div className="d-flex flex-column justify-content-between">
                                    <Text styles={semibold} variant="medium">Gruppi per i corsi didattici</Text>

                                    <Text styles={semibold}>
                                        <Chip label="Oltre 2000" style={{ color: theme.palette.white, backgroundColor: theme.palette.themePrimary }} />
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} sm={12} className="mb-4 mb-md-0 text-right">
                        <div style={cardStyle}>
                            <div className="d-flex flex-row gap-1">
                                <Image src={process.env.PUBLIC_URL + '/images/home/c3.png'} style={cardImageStyle} />

                                <Text styles={semibold} variant="medium">Servizi telematici</Text>
                            </div>
                        </div>
                    </Col>

                </Row>
                    
            </Container>
        </div>
    )
};

export default FirstSection;