import { initializeIcons } from '@fluentui/react';
import Faqs from '../components/Home/Faqs';
import React from 'react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import MainSection from '../components/Home/MainSection';
import FirstSection from '../components/Home/FirstSection';
import SecondSection from '../components/Home/SecondSection';
import ThirdSection from '../components/Home/ThirdSection';
import FourthSection from '../components/Home/FourthSection';
import TelegramSection from '../components/Home/TelegramSection';

SwiperCore.use([Pagination, Navigation, Autoplay]);
initializeIcons();

const HomeView = () => {
    /*
    const groupsNumber = getGroupsLength();
    const cdlsNumber = getCdlsLength();
    const infoCard = { minHeight: 130, maxWidth: 350 };
    */
    
    return (
        <div className="pt-5 home">
            <MainSection />

            <TelegramSection />

            <FirstSection />

            <SecondSection />

            <ThirdSection />

            <FourthSection />

            <Faqs />

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