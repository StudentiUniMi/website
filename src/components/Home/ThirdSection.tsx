import { Persona, Link, Text, FontSizes, IIconProps, PrimaryButton, Icon, initializeIcons, ActionButton } from '@fluentui/react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { semibold } from '../../services/fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

const ThirdSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const homeIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size32 };
    const sectionCard = { minHeight: '160px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none', boxShadow: theme.effects.elevation16, backgroundColor: theme.palette.white };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const buttonStyle = { maxWidth: '180px' };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    return (
        <div className="pb-4 pt-4" /*style={{ backgroundColor: theme.palette.neutralLighter }}*/>
            <Container>
                <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold}>{locale.homepage.section4.text}</Text></div>

                <Row className="justify-content-center">
                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Globe2" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {/*{locale.homepage.section4.card1.text}*/}
                                    Abbiamo creato una Wikipedia per ogni insegnamento. Chiunque è libero di collaborare!
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section4.card1.button} iconProps={buttonIconProps} href="https://wiki.studentiunimi.it/" className="text-decoration-none"  target="_blank" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="World" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {/*{locale.homepage.section4.card2.text}*/}
                                    Stufo di non poter accedere ai servizi perchè UniMia ha problemi?
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton /*text={locale.homepage.section4.card2.button}*/ text={"unimia.studentiunimi.it"} iconProps={buttonIconProps} className="text-decoration-none" href="https://studentiunimi.it/services/" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="CloudDownload" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {/*{locale.homepage.section4.card3.text}*/}
                                    HedgeDoc permette di prendere appunti in collaborazione senza doversi registrare. Provalo!
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section4.card3.button} iconProps={buttonIconProps} href="https://hedgedoc.studentiunimi.it/" className="text-decoration-none"  target="_blank" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Code" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {/*{locale.homepage.section4.card4.text}*/}
                                    Devi condividere codice sui gruppi? Usa il nostro servizio veloce, semplice e sicuro.
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section4.card4.button} iconProps={buttonIconProps} href="http://paste.studentiunimi.it/" className="text-decoration-none"  target="_blank" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default ThirdSection;