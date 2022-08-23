import { Text, IIconProps, Icon, DefaultButton } from 'office-ui-fabric-react/lib-commonjs';
import { semibold } from '../../services/Fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import LocalizationService from "../../services/LocalizationService";

library.add(fas);

const ThirdSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const buttonStyle = { maxWidth: '180px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    const iconStyle = { backgroundColor: theme.palette.themePrimary, color:theme.palette.white, fontSize: 16, padding: '1px 7px 1px 7px', marginRight: 3, borderRadius: 3 };
    const fontAwesomeStyle = { backgroundColor: theme.palette.themePrimary, color:theme.palette.white, fontSize: 24, padding: '1px 7px 1px 7px', marginRight: 3, borderRadius: 3 };

    return (
        <div className="pb-5 pt-5">
            <Container>
                <div className="mb-4 text-center"><Text variant="xLarge">{locale?.homepage.additionalServicesSection.header}</Text></div>

                <Row className="justify-content-around">

                    <Col md={4} sm={12} className="mb-4 mb-md-0 text-center">
                        <div className="mb-2"><Text variant="large" styles={semibold}><FontAwesomeIcon icon={['fas', 'leaf']} style={fontAwesomeStyle} /> Overleaf</Text></div>
                        <div className="mb-3 pr-2 pl-2"><Text variant="medium">{locale?.homepage.additionalServicesSection.col3.text}</Text></div>
                        <DefaultButton
                            text={locale?.homepage.additionalServicesSection.col3.buttonText}
                            style={buttonStyle}
                            iconProps={buttonIconProps}
                            theme={theme}
                            href="https://overleaf.studentiunimi.it/"
                            className="text-decoration-none"
                        />
                    </Col>

                    <Col md={4} sm={12} className="mb-4 mb-md-0 text-center">
                        <div className="mb-2"><Text variant="large" styles={semibold}><Icon iconName="PencilReply" style={iconStyle} /> HedgeDoc</Text></div>
                        <div className="mb-3 pr-2 pl-2"><Text variant="medium">{locale?.homepage.additionalServicesSection.col1.text}</Text></div>
                        <DefaultButton
                            text={locale?.homepage.additionalServicesSection.col1.buttonText}
                            style={buttonStyle}
                            iconProps={buttonIconProps}
                            theme={theme}
                            href="https://hedgedoc.studentiunimi.it/"
                            className="text-decoration-none"
                        />
                    </Col>

                    <Col md={4} sm={12} className="text-center">
                        <div className="mb-2"><Text variant="large" styles={semibold}><Icon iconName="FileCode" style={iconStyle} /> Paste</Text></div>
                        <div className="mb-3 pr-2 pl-2"><Text variant="medium">{locale?.homepage.additionalServicesSection.col2.text}</Text></div>
                        <DefaultButton
                            text={locale?.homepage.additionalServicesSection.col2.buttonText}
                            style={buttonStyle}
                            iconProps={buttonIconProps}
                            theme={theme}
                            href="https://paste.studentiunimi.it/"
                            className="text-decoration-none"
                        />
                    </Col>

                </Row>
            </Container>
        </div>
    )
};

export default ThirdSection;