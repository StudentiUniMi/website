import { Text, IIconProps, PrimaryButton, Image } from '@fluentui/react';
import { semibold } from '../../services/Fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";

const Wiki = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const buttonStyle = { maxWidth: '230px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    return (
        <div className="pb-5 pt-5" style={{ backgroundColor: theme.palette.neutralLighterAlt }}>
            <Container>

                <Row>
                    <Col lg={4} className="text-center mb-4 mb-lg-0">
                        <Image src={process.env.PUBLIC_URL + '/images/home/4.png'} style={{ display: 'inline-block', width: '70%' }} />
                    </Col>

                    <Col lg={8}>
                        <div className="mb-2"><Text variant="xLarge" styles={semibold}>{locale?.homepage.wikipediaSection.text1}</Text></div>
                        <div>
                              <div className="mb-2">
                                    <Text variant="large">{locale?.homepage.wikipediaSection.text2}</Text>
                              </div>
                              <div className="mb-3">
                                   <Text variant="medium">
                                    {locale?.homepage.wikipediaSection.text3}
                                   </Text>
                              </div>
                              <PrimaryButton
                                   text={locale?.homepage.wikipediaSection.buttonText}
                                   style={buttonStyle}
                                   iconProps={buttonIconProps}
                                    theme={theme} 
                                    href="https://wiki.studentiunimi.it/start"
                                    className="text-decoration-none"
                              />
                        </div>
                    </Col>
               </Row>

            </Container>
        </div>
    )
};

export default Wiki;