import { Text, IIconProps, PrimaryButton, Image } from '@fluentui/react';
import { semibold } from '../../services/fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";

const FourthSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const buttonStyle = { maxWidth: '200px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    return (
        <div className="pb-5 pt-5" style={{ backgroundColor: theme.palette.neutralLighterAlt }}>
            <Container>
                <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold}>{locale?.homepage.adminsRepresentativesSection.header}</Text></div>

                <Row className="justify-content-around">

                    <Col className="text-center mb-5 mb-md-0" md={4}>
                        <Image className="mb-3" src={process.env.PUBLIC_URL + '/images/home/5_1.png'} style={{ display: 'inline-block', width: 170, height: 160 }} />
                        <div className="mb-2">
                            <Text variant="medium" styles={semibold}>{locale?.homepage.adminsRepresentativesSection.col1.title}</Text>
                        </div>
                        <div className="mb-3">
                            <Text variant="medium">{locale?.homepage.adminsRepresentativesSection.col1.description}</Text>
                        </div>
                        <PrimaryButton
                            text={locale?.homepage.adminsRepresentativesSection.col1.buttonText}
                            style={buttonStyle}
                            iconProps={buttonIconProps}
                            theme={theme}
                            href="https://studentiunimi.it/representatives/"
                            className="text-decoration-none"
                        />
                    </Col>
                
                    <Col className="text-center" md={4}>
                        <Image className="mb-3" src={process.env.PUBLIC_URL + '/images/home/5_2.png'} style={{ display: 'inline-block', width: 155, height: 160 }} />
                        <div className="mb-2">
                            <Text variant="medium" styles={semibold}>{locale?.homepage.adminsRepresentativesSection.col2.title}</Text>
                        </div>
                        <div className="mb-3">
                            <Text variant="medium">{locale?.homepage.adminsRepresentativesSection.col2.description}</Text>
                        </div>
                        <PrimaryButton
                            text={locale?.homepage.adminsRepresentativesSection.col2.buttonText}
                            style={buttonStyle}
                            iconProps={buttonIconProps}
                            theme={theme}
                            href="https://studentiunimi.it/courses/"
                            className="text-decoration-none"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default FourthSection;