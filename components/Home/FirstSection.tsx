import { Text, IIconProps, PrimaryButton, Image, useTheme, Link } from '@fluentui/react';
import { bold, semibold } from '../../services/Fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../../services/LocalizationService";
import Chip from '../GenericComponents/Chip';
import JsxParser from 'react-jsx-parser';

const FirstSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const buttonStyle = { maxWidth: '120px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'GoChevronRight', styles: { root: { fontSize: 14 } } };
    const cardStyle = { backgroundColor: theme.palette.neutralLighterAlt, padding: '20px', borderRadius: '10px', overflow: 'hidden', minHeight: 200 };
    const cardImageStyle = { maxWidth: 165, minWidth: 120 };

    return (
        <div className="pb-5 pt-5 first-section">
            <Container>

                <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold}>{locale?.homepage.section2.title}</Text></div>

                <Row className="justify-content-around">
                    
                    <Col xl={4} lg={6} md={6} sm={12} className="mb-4 mb-xl-0">
                        <div style={cardStyle}>
                            <Text styles={semibold}>
                                <Chip label={locale?.homepage.section2.cards.card1.title} 
                                    size="medium"
                                    textColor={theme.palette.black}
                                    bgColor={theme.palette.neutralLight}
                                    style={{ top: -9, left: 6, position: 'absolute' }} />
                            </Text>

                            <div className="d-flex flex-row mt-2">
                                <Image src={'/images/home/c1.png'} style={cardImageStyle} />

                                <div className="d-flex flex-column justify-content-between text-right align-items-end" style={{ gap: 20 }}>

                                    <Text variant="medium">
                                        <JsxParser 
                                            bindings={{ theme: theme, bold: bold }} 
                                            components={{ Text, Link }} 
                                            jsx={locale?.homepage.section2.cards.card1.description}
                                        />
                                    </Text>

                                    <PrimaryButton
                                        text={locale?.reach}
                                        style={buttonStyle}
                                        iconProps={buttonIconProps}
                                        theme={theme}
                                        href="https://studentiunimi.it/courses"
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xl={4} lg={6} md={6} sm={12} className="mb-4 mb-xl-0">
                        <div style={cardStyle}>
                            <Text styles={semibold}>
                                <Chip label={locale?.homepage.section2.cards.card2.title} 
                                    size="medium"
                                    textColor={theme.palette.black}
                                    bgColor={theme.palette.neutralLight}
                                    style={{ top: -9, left: 6, position: 'absolute' }} />
                            </Text>

                            <div className="d-flex flex-row mt-2">
                                <Image src={'/images/home/c2.png'} style={cardImageStyle} />

                                <div className="d-flex flex-column justify-content-between text-right align-items-end" style={{ gap: 20 }}>

                                    <Text variant="medium">
                                        <JsxParser 
                                            bindings={{ theme: theme, bold: bold }} 
                                            components={{ Text, Link }} 
                                            jsx={locale?.homepage.section2.cards.card2.description}
                                        />
                                    </Text>

                                    <PrimaryButton
                                        text={locale?.reach}
                                        style={buttonStyle}
                                        iconProps={buttonIconProps}
                                        theme={theme}
                                        href="https://studentiunimi.it/groups"
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xl={4} lg={6} md={6} sm={12}>
                        <div style={cardStyle}>
                            <Text styles={semibold}>
                                <Chip label={locale?.homepage.section2.cards.card3.title}
                                    size="medium"
                                    textColor={theme.palette.black}
                                    bgColor={theme.palette.neutralLight}
                                    style={{ top: -9, left: 6, position: 'absolute' }} />
                            </Text>

                            <div className="d-flex flex-row mt-2">
                                <Image src={'/images/home/c3.png'} style={cardImageStyle} />

                                <div className="d-flex flex-column justify-content-between text-right align-items-end" style={{ gap: 20 }}>

                                    <Text variant="medium">
                                       <JsxParser 
                                            bindings={{ theme: theme, bold: bold }} 
                                            components={{ Text, Link }} 
                                            jsx={locale?.homepage.section2.cards.card3.description}
                                        />
                                    </Text>

                                    <PrimaryButton
                                        text={locale?.findOut}
                                        style={buttonStyle}
                                        iconProps={buttonIconProps}
                                        theme={theme}
                                        href="https://studentiunimi.it/services"
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
                    
            </Container>
        </div>
    )
};

export default FirstSection;