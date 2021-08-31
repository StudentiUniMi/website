

import { Persona, Link, Text, FontSizes, IIconProps, Icon, ActionButton } from '@fluentui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, ICardTokens } from "@uifabric/react-cards";
import { semibold } from '../../fonts';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

const Slider = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();

    const wikiIcon: IIconProps = { iconName: 'Globe', theme: theme };
    const telegramGroupIcon: IIconProps = { iconName: 'Send', theme: theme };
    const cardTokens: ICardTokens = { childrenMargin: 12 };


    return (
        <Swiper pagination={true} navigation={true} autoplay={{ "delay": 5000, "disableOnInteraction": false }} loop={true} autoHeight={true} className="mySwiper">
            <SwiperSlide>
                <Row className="justify-content-center">
                    <Col className="mb-3" xl={6} lg={6} md={5} sm={6} xs={12} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div >
                            <div className="mb-1">
                                <Text variant="medium">
                                    {locale.homepage.section1.sliders[0].text1} <Icon iconName="Help" style={{ color: theme.palette.themePrimary, fontSize: FontSizes.size12 }} />
                                </Text>
                            </div>
                            <div>
                                <Text styles={semibold}>{locale.homepage.section1.sliders[0].text2}</Text>
                            </div>
                        </div>
                    </Col>
                    <Col className="mb-3 justify-content-center" style={{ maxWidth: 350 }} xl={6} lg={6} md={5} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={{ minHeight: 160, maxWidth: 350, marginLeft: 5, marginRight: 5 }}>
                            <Card.Item>
                                <Persona onRenderPrimaryText={() => <div className="justify-content-center text-center mt-3" style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}><Text styles={semibold}>{locale.homepage.section1.sliders[0].cardText}</Text></div>} text={locale.homepage.section1.sliders[0].cardText} imageUrl={process.env.PUBLIC_URL + '/extra_groups_images/matricole.jpg'} />
                            </Card.Item>
                            <Card.Section>
                                <ActionButton
                                    href="https://t.me/joinchat/jjzrKAOF74s5ZmI0"
                                    target="_blank"
                                    className="text-decoration-none"
                                    iconProps={telegramGroupIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: 0 }}
                                    allowDisabledFocus>
                                    {locale.telegramGroup}
                                </ActionButton>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
            </SwiperSlide>

            <SwiperSlide>
                <Row className="justify-content-center">
                    <Col className="mb-3" xl={6} lg={6} md={5} sm={6} xs={12} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div >
                            <div className="mb-1">
                                <Text variant="medium">
                                    {locale.homepage.section1.sliders[1].text1} <Icon iconName="Help" style={{ color: theme.palette.themePrimary, fontSize: FontSizes.size12 }} />
                                </Text>
                            </div>
                            <div>
                                <Text styles={semibold}>{locale.homepage.section1.sliders[1].text2}</Text>
                            </div>
                        </div>
                    </Col>
                    <Col className="mb-3 home-card" style={{ maxWidth: 350 }} xl={6} lg={6} md={5} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={{ minHeight: 160, maxWidth: 350, marginLeft: 5, marginRight: 5 }}>
                            <Card.Item>
                                <Persona onRenderPrimaryText={() => <div className="ml-2"><Text styles={semibold}>{locale.homepage.section1.sliders[1].cardText}</Text></div>} text={locale.homepage.section1.sliders[1].cardText} imageUrl={process.env.PUBLIC_URL + '/extra_groups_images/alloggi.jpg'} />
                            </Card.Item>
                            <Card.Section>
                                <ActionButton
                                    href="https://t.me/joinchat/xJP5VPIBboxiNjI0"
                                    target="_blank"
                                    className="text-decoration-none"
                                    iconProps={telegramGroupIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: 0 }}
                                    allowDisabledFocus>
                                    {locale.telegramGroup}
                                </ActionButton>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
            </SwiperSlide>

            <SwiperSlide>
                <Row className="justify-content-center">
                    <Col className="mb-3" xl={6} lg={6} md={5} sm={6} xs={12} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div >
                            <div className="mb-1">
                                <Text variant="medium">
                                    {locale.homepage.section1.sliders[2].text1} <Icon iconName="Help" style={{ color: theme.palette.themePrimary, fontSize: FontSizes.size12 }} />
                                </Text>
                            </div>
                            <div>
                                <Text styles={semibold}>{locale.homepage.section1.sliders[2].text2}</Text>
                            </div>
                        </div>
                    </Col>
                    <Col className="mb-3 home-card" style={{ maxWidth: 350 }} xl={6} lg={6} md={5} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={{ maxWidth: 350, minHeight: 160, marginLeft: 5, marginRight: 5 }}>
                            <Card.Item>
                                <Persona onRenderPrimaryText={() => <div className="ml-2"><Text styles={semibold}>{locale.homepage.section1.sliders[2].cardText}</Text></div>} text={locale.homepage.section1.sliders[2].cardText} imageUrl={process.env.PUBLIC_URL + '/extra_groups_images/materiali.jpg'} />
                            </Card.Item>
                            <Card.Section>
                                <ActionButton
                                    href="https://t.me/joinchat/SyKyebINUEXQ969t"
                                    target="_blank"
                                    className="text-decoration-none"
                                    iconProps={telegramGroupIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: 0 }}
                                    allowDisabledFocus>
                                    {locale.telegramGroup}
                                </ActionButton>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
            </SwiperSlide>

            <SwiperSlide>
                <Row className="justify-content-center">
                    <Col className="mb-3" xl={6} lg={6} md={5} sm={6} xs={12} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div >
                            <div className="mb-1">
                                <Text variant="medium">
                                    {locale.homepage.section1.sliders[3].text1} <Icon iconName="Help" style={{ color: theme.palette.themePrimary, fontSize: FontSizes.size12 }} />
                                </Text>
                            </div>
                            <div>
                                <Text styles={semibold}>{locale.homepage.section1.sliders[3].text2}</Text>
                            </div>
                        </div>
                    </Col>
                    <Col className="mb-3" style={{ maxWidth: 350 }} xl={6} lg={6} md={5} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={{ minHeight: 160, maxWidth: 350, marginLeft: 5, marginRight: 5 }}>
                            <Card.Item>
                                <Persona onRenderPrimaryText={() => <div className="ml-2"><Text styles={semibold}>{locale.homepage.section1.sliders[3].cardText}</Text></div>} text={locale.homepage.section1.sliders[3].cardText} imageUrl={process.env.PUBLIC_URL + '/extra_groups_images/ripetizioni.jpg'} />
                            </Card.Item>
                            <Card.Section>
                                <ActionButton
                                    href="https://t.me/joinchat/a_aLt47Z8lAyMjBk"
                                    target="_blank"
                                    className="text-decoration-none"
                                    iconProps={telegramGroupIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: 0 }}
                                    allowDisabledFocus>
                                    {locale.telegramGroup}
                                </ActionButton>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
            </SwiperSlide>

            <SwiperSlide>
                <Row className="justify-content-center">
                    <Col className="mb-3" xl={6} lg={6} md={5} sm={6} xs={12} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div >
                            <div className="mb-1">
                                <Text variant="medium">
                                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text }} jsx={locale.homepage.section1.sliders[4].text1} />
                                </Text>
                            </div>
                        </div>
                    </Col>
                    <Col className="mb-3" style={{ maxWidth: 350 }} xl={6} lg={6} md={5} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={{ minHeight: 160, maxWidth: 350, marginLeft: 5, marginRight: 5 }}>
                            <Card.Section>
                                <Icon iconName="Globe2" style={{ fontSize: '48px', color: theme.palette.themePrimary, marginTop: '5px' }} />
                                <ActionButton
                                    href="https://wiki.studentiunimi.it/"
                                    target="_blank"
                                    className="text-decoration-none"
                                    iconProps={wikiIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 0 }}
                                    allowDisabledFocus>
                                    {locale.homepage.section1.sliders[4].reachWiki}
                                </ActionButton>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
            </SwiperSlide>

            <SwiperSlide>
                <Row className="justify-content-center">
                    <Col className="mb-3" xl={6} lg={6} md={5} sm={6} xs={12} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div className="mb-1">
                            <Text variant="medium">
                                {locale.homepage.section1.sliders[5].text1}
                            </Text>
                        </div>
                    </Col>
                    <Col className="mb-3" style={{ maxWidth: 350 }} xl={6} lg={6} md={5} sm={6} xs={12}>
                        <Card tokens={cardTokens} style={{ minHeight: 160, maxWidth: 350, marginLeft: 5, marginRight: 5 }}>
                            <Card.Section>
                                <Icon iconName="CoffeeScript" style={{ fontSize: '48px', color: theme.palette.themePrimary, marginTop: '15px' }} />
                                <Text variant="medium">
                                    <Link href="https://unimia.studentiunimi.it">unimia.studentiunimi.it</Link>
                                </Text>
                            </Card.Section>
                        </Card>
                    </Col>
                </Row>
            </SwiperSlide>

        </Swiper>
    )
}

export default Slider;