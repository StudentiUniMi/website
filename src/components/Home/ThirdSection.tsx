import { Text, FontSizes, IIconProps, PrimaryButton, Icon, DefaultButton } from '@fluentui/react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { semibold } from '../../services/fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";

const ThirdSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const homeIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size32 };
    const sectionCard = { minHeight: '160px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none', boxShadow: theme.effects.elevation16, backgroundColor: theme.palette.white };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const buttonStyle = { maxWidth: '180px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    const iconStyle = { backgroundColor: theme.palette.themePrimary, color:theme.palette.white, fontSize: '15px', padding: '1px 7px 1px 7px', marginRight: 3, borderRadius: 3 };

    return (
        <div className="pb-5 pt-5">
            <Container>
                <div className="mb-4 text-center"><Text variant="xLarge">Scopri i nostri ulteriori servizi</Text></div>

                <Row>
                    <Col>
                        <div className="mb-2"><Text variant="large" styles={semibold}><Icon iconName="PencilReply" style={iconStyle} /> HedgeDoc</Text></div>
                        <div className="mb-3"><Text variant="medium">HedgeDoc è un servizio che permette di prendere appunti in collaborazione tra più studenti senza il bisogno di doversi registrare.</Text></div>
                        <DefaultButton
                            text={"Prova HedgeDoc"}
                            style={buttonStyle}
                            iconProps={buttonIconProps}
                            theme={theme}
                        />
                    </Col>

                    <Col>
                        <div className="mb-2"><Text variant="large" styles={semibold}><Icon iconName="FileCode" style={iconStyle} /> Paste</Text></div>
                        <div className="mb-3"><Text variant="medium">Paste è un servizio pensato per i programmatori, che permette di condividere codice in maniera semplice e sicura.</Text></div>
                        <DefaultButton
                            text={"Prova Paste"}
                            style={buttonStyle}
                            iconProps={buttonIconProps}
                            theme={theme}
                        />
                    </Col>

                </Row>
            </Container>
        </div>
    )
};

export default ThirdSection;