import { Link, Text, FontSizes, IIconProps, PrimaryButton, Icon, initializeIcons } from '@fluentui/react';
import { semibold } from '../services/fonts';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Card, ICardTokens, CardSection } from "@uifabric/react-cards";
import { Separator } from '@fluentui/react/lib/Separator';
import { useTheme } from '@fluentui/react-theme-provider';
import Faqs from '../components/Home/Faqs';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import MainSection from '../components/Home/MainSection';
import FirstSection from '../components/Home/FirstSection';
import SecondSection from '../components/Home/SecondSection';
import ThirdSection from '../components/Home/ThirdSection';

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
    const telegramLogo = { marginLeft: 'auto', marginRight: 'auto', width: '50px', height: '50px' };
    //const numberStyle = { color: theme.palette.themePrimary };
    
    return (
        <div className="pt-5 pb-5 home">
            <MainSection />
            <FirstSection />
            <SecondSection />
            <ThirdSection />

            <div className="fourth-section mb-4">
                <div className="mb-4"><Separator theme={theme}><Text variant="large" styles={semibold}>{locale.homepage.section5.text}</Text></Separator></div>

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

            <div className="faq-section mb-4">
                <div className="mb-4"><Separator theme={theme}><Text variant="large" styles={semibold}>{locale.homepage.section6.text}</Text></Separator></div>
                <Faqs />
            </div>

            <div className="mb-4 text-center">
                <div className="mb-3"><Separator theme={theme}><Text variant="large" styles={semibold}>{locale.homepage.telegramSection.title}</Text></Separator></div>

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
                <div className="mb-4"><Separator theme={theme}><Text variant="large" styles={semibold}>{locale.homepage.section7.text}</Text></Separator></div>

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

        </div>
    )
};

export default HomeView;