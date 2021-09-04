import { Text, FontSizes, IIconProps, PrimaryButton, Icon } from '@fluentui/react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { semibold } from '../../services/fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";

const FirstSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const homeIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size32 };
    const sectionCard = { minHeight: '160px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none', boxShadow: theme.effects.elevation16, backgroundColor: theme.palette.white };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const buttonStyle = { maxWidth: '180px' };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    return (
        <div className="pb-4 pt-4">
            <Container>
                <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold}>{locale.homepage.section2.text}</Text></div>

                <Row className="justify-content-center">
                    <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Group" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section2.card1.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section2.card1.button} iconProps={buttonIconProps} className="text-decoration-none" href="https://studentiunimi.it/courses/" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="AddGroup" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section2.card2.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section2.card2.button} iconProps={buttonIconProps} className="text-decoration-none" href="https://studentiunimi.it/courses/" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="JoinOnlineMeeting" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section2.card3.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section2.card3.button} iconProps={buttonIconProps} className="text-decoration-none" href="https://studentiunimi.it/rules/" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default FirstSection;