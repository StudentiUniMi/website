import { Link, Text, FontSizes, IIconProps, PrimaryButton, Icon, initializeIcons } from '@fluentui/react';
import { semibold } from '../fonts';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { useTheme } from '@fluentui/react-theme-provider';
import { Card, ICardTokens, CardSection } from "@uifabric/react-cards";
import { Separator } from '@fluentui/react/lib/Separator';
import { Container } from 'react-bootstrap';
import Slider from '../components/Home/Slider';
import VaccineCards from '../components/Home/VaccineCards';
import Faqs from '../components/Home/Faqs';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

SwiperCore.use([Pagination, Navigation, Autoplay]);
initializeIcons();

const HomeView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    
    //const groupsNumber = getGroupsLength();
    //const cdlsNumber = getCdlsLength();

    /* Icons */
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const homeIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size32 };

    /* Cards */
    //const infoCard = { minHeight: 130, maxWidth: 350 };
    const sectionCard = { minHeight: '160px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none', boxShadow: theme.effects.elevation8 };
    const cardTokens: ICardTokens = { childrenMargin: 12 };

    /* Buttons */
    const buttonStyle = { maxWidth: '180px' };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    /* Other */
    const logoProperties = { width: '150px', height: '150px', display: 'inline-block' };
    const telegramLogo = { marginLeft: 'auto', marginRight: 'auto', width: '50px', height: '50px' };
    //const numberStyle = { color: theme.palette.themePrimary };

    /* Remove title properties from documentCardTitles */
    React.useEffect(() => {
        const divList = document.getElementsByClassName("ms-DocumentCardTitle");
        for (let i:number = 0; i < divList.length; i++) {
            divList[i].removeAttribute('title');
        }
    });

    return (
        <Container className="home">
            <div className="info-section mb-4 text-center">
                <Image id="logo" className="mb-2" src={process.env.PUBLIC_URL + '/logo/unimi500.png'} alt='Network logo' style={logoProperties} />
                <div className="mb-2">
                    <Text variant="xLarge">
                        <JsxParser bindings={{ theme: theme }} components={{ Text }} jsx={locale.homepage.section1.text1} />
                    </Text>
                </div>
                <div><Text variant="large">{locale.homepage.section1.text2}</Text></div>
            </div>

            <div className="mb-3 justify-content-center">
                <Slider />
            </div>

            <div className="text-center"><Icon iconName="ChevronDownMed" className="mb-3" style={iconStyle} /></div>

            <div className="primary-section mb-4">
                <div className="mb-4">
                    <Separator><Text variant="large" styles={semibold}>{locale.homepage.section2.text}</Text></Separator>
                </div>

                <Row className="justify-content-center">
                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Send" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section2.card1.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section2.card1.button} iconProps={buttonIconProps} href="https://t.me/studenti_unimi" target="_blank" className="text-decoration-none" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="ReminderGroup" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section2.card2.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section2.card2.button} iconProps={buttonIconProps} href="https://t.me/unimichat" target="_blank" className="text-decoration-none" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Game" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section2.card3.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section2.card3.button} iconProps={buttonIconProps} href="https://discord.gg/SwPzAkv4A4" target="_blank" className="text-decoration-none" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Teamwork" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section2.card4.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section2.card4.button} iconProps={buttonIconProps} href="https://github.com/StudentiUnimi" target="_blank" className="text-decoration-none" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="secondary-section mb-4">
                <div className="mb-4"><Separator><Text variant="large" styles={semibold}>{locale.homepage.section3.text}</Text></Separator></div>

                <Row className="justify-content-center">
                    <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Group" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section3.card1.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section3.card1.button} iconProps={buttonIconProps} className="text-decoration-none" href="https://studentiunimi.it/courses/" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="AddGroup" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section3.card2.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section3.card2.button} iconProps={buttonIconProps} className="text-decoration-none" href="https://studentiunimi.it/additional_groups/" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="JoinOnlineMeeting" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section3.card3.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section3.card3.button} iconProps={buttonIconProps} className="text-decoration-none" href="https://studentiunimi.it/rules/" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="tertiary-section mb-4">
                <div className="mb-4"><Separator><Text variant="large" styles={semibold}>{locale.homepage.section4.text}</Text></Separator></div>

                <Row className="justify-content-center">
                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Globe2" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section4.card1.text}
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
                                    {locale.homepage.section4.card2.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section4.card2.button} iconProps={buttonIconProps} className="text-decoration-none" href="https://studentiunimi.it/services/" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col className="mb-3" xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="CloudDownload" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section4.card3.text}
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
                                    {locale.homepage.section4.card4.text}
                                </Text>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section4.card4.button} iconProps={buttonIconProps} href="http://paste.studentiunimi.it/" className="text-decoration-none"  target="_blank" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="fourth-section mb-4">
                <div className="mb-4"><Separator><Text variant="large" styles={semibold}>{locale.homepage.section5.text}</Text></Separator></div>

                <Row className="justify-content-center">
                    <Col xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3">
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="ContactHeart" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section5.card1.text}
                                </Text>
                                <Icon iconName="SortDown" style={iconStyle}></Icon>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section5.card1.button} iconProps={buttonIconProps} className="text-decoration-none" href="https://studentiunimi.it/representatives/" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>

                    <Col xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3">
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div><Icon iconName="Telemarketer" style={homeIconStyle} /></div>
                                <Text variant="medium">
                                    {locale.homepage.section5.card2.text}
                                </Text>
                                <Icon iconName="SortDown" style={iconStyle}></Icon>
                                <div className="justify-content-center">
                                    <PrimaryButton text={locale.homepage.section5.card2.button} iconProps={buttonIconProps} className="text-decoration-none" href="https://studentiunimi.it/organization/" allowDisabledFocus style={buttonStyle} />
                                </div>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>

            </div>

            <div className="mb-3">
                <div className="mb-4"><Separator><Text variant="large" styles={semibold}>{locale.homepage.vaccineSection.title}</Text></Separator></div>
                <VaccineCards />
            </div>

            <div className="faq-section mb-4">
                <div className="mb-4"><Separator><Text variant="large" styles={semibold}>{locale.homepage.section6.text}</Text></Separator></div>
                <Faqs />
            </div>

            <div className="mb-4 text-center">
                <div className="mb-3"><Separator><Text variant="large" styles={semibold}>{locale.homepage.telegramSection.title}</Text></Separator></div>

                <div className="mb-4">
                    <Text variant="medium">
                        {locale.homepage.telegramSection.description}
                    </Text>
                </div>

                <Row className="justify-content-center">
                    <Col className="mb-3" style={{ maxWidth: 350 }} xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Card tokens={cardTokens} className="justify-content-center text-center" style={{ minHeight: 160, maxWidth: 350, marginLeft: 5, marginRight: 5 }}>
                            <CardSection>
                                <div className="justify-content-center">
                                    <Image id="logo" src={process.env.PUBLIC_URL + "/other/telegram-icon-compress-min.png"} style={telegramLogo} />
                                </div>
                                <Text variant="medium" styles={semibold}>
                                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale.homepage.telegramSection.advantages} />
                                </Text>
                            </CardSection>
                        </Card>
                    </Col>
                    <Col className="mb-3" style={{ maxWidth: 350 }} xl={6} lg={6} md={6} sm={6} xs={12}>
                        <div className="mt-3 telegram-advantages-list" style={{ textAlign: 'left', marginLeft: 50 }}>
                            <Text variant="small">
                                {locale.homepage.telegramSection.list.map(x => {
                                    return (<><Icon iconName="ChevronRightSmall" style={{ color: theme.palette.themePrimary }} /> {x}<br/></>)
                                })}
                            </Text>
                        </div>
                    </Col>
                </Row>
            </div>

            { /* We disable this section until we have stats endpoint
            <div className="mb-3">
                <div className="mb-4"><Separator><Text variant="large" styles={semibold}>{locale.homepage.section7.text}</Text></Separator></div>

                <Row className="justify-content-center">
                    <Col className="mb-3" style={{ maxWidth: 350 }} xl={3} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={infoCard} className="justify-content-center text-center">
                            <CardSection>

                                <Text variant="large" className="mt-0">
                                    <Icon iconName="UserOptional" style={iconStyle} /> {locale.homepage.section7.card1.text1}<br />
                                    <Text variant="xLarge" style={numberStyle}>2.000</Text> {locale.homepage.section7.card1.text2}
                                </Text>
                            </CardSection>
                        </Card>
                    </Col>
                    <Col className="mb-3" style={{ maxWidth: 350 }} xl={3} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={infoCard} className="justify-content-center text-center">
                            <CardSection>
                                <Text variant="large" className="mt-0">
                                    <Icon iconName="PeopleAlert" style={iconStyle} /> {locale.homepage.section7.card2.text1}<br />
                                    <Text variant="xLarge" style={numberStyle}>{groupsNumber}</Text> {locale.homepage.section7.card2.text2}
                                </Text>
                            </CardSection>
                        </Card>
                    </Col>
                    <Col className="mb-3" style={{ maxWidth: 350 }} xl={3} lg={4} md={4} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={infoCard} className="justify-content-center text-center">
                            <CardSection>
                                <Text variant="large" className="mt-0">
                                    <Icon iconName="CityNext" style={iconStyle} /> {locale.homepage.section7.card3.text1}<br />
                                    <Text variant="xLarge" style={numberStyle}>{cdlsNumber}</Text> {locale.homepage.section7.card3.text2}
                                </Text>
                            </CardSection>
                        </Card>
                    </Col>
                </Row>
            </div>
            */}

        </Container >
    )
};

export default HomeView;