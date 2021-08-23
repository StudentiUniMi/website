import { Persona, Link, Text, FontSizes, IIconProps, PrimaryButton, Icon, initializeIcons, ActionButton } from '@fluentui/react';
import { semibold } from '../fonts';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { useTheme } from '@fluentui/react-theme-provider';
import { Card, ICardTokens, CardSection } from "@uifabric/react-cards";
import { Separator } from '@fluentui/react/lib/Separator';
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageFit } from '@fluentui/react/lib/Image';
import { DocumentCard, DocumentCardActivity, DocumentCardTitle, DocumentCardDetails, DocumentCardImage, IDocumentCardStyles, IDocumentCardActivityPerson, IDocumentCardDetailsStyles, IDocumentCardTitleStyles } from '@fluentui/react/lib/DocumentCard';
import { getGroupsLength, getCdlsLength, getFaqs } from '../services/Requests';
import { redirectToLink } from '../services/Utils';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

SwiperCore.use([Pagination, Navigation, Autoplay]);
initializeIcons();

const HomeView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string = LocalizationService.getLanguage();
    const faqs = getFaqs();
    const groupsNumber = getGroupsLength();
    const cdlsNumber = getCdlsLength();

    /* Icons */
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const wikiIcon: IIconProps = { iconName: 'Globe', theme: theme };
    const telegramGroupIcon: IIconProps = { iconName: 'Send', theme: theme };
    const homeIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size32 };

    /* Cards */
    const infoCard = { minHeight: 130, maxWidth: 350 };
    const sectionCard = { minHeight: '160px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none', boxShadow: theme.effects.elevation8 };
    const cardTokens: ICardTokens = { childrenMargin: 12 };

    /* Buttons */
    const buttonStyle = { maxWidth: '180px' };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    /* Vaccine section */
    const vaccineNewsCards: IDocumentCardStyles = { root: { display: 'inline-block', marginBottom: 20, minWidth: 250, maxWidth: 'none', minHeight: 380 } };
    const vaccinePrimaryText: IDocumentCardTitleStyles = { root: { height: 'auto' } };
    const vaccineSecondaryText: IDocumentCardTitleStyles = { root: { height: 'auto' }};
    const vaccineDocumentCardDetails: IDocumentCardDetailsStyles = { root: { justifyContent: 'start' } };
    const people: IDocumentCardActivityPerson[] = [{ name: locale.homepage.vaccineSection.news,  profileImageSrc: process.env.PUBLIC_URL + "/other/news.png"  } ];

    /* Other */
    const logoProperties = { width: '150px', height: '150px', display: 'inline-block' };
    const telegramLogo = { marginLeft: 'auto', marginRight: 'auto', width: '50px', height: '50px' };
    const numberStyle = { color: theme.palette.themePrimary };

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
                                <Card tokens={cardTokens} style={{ minHeight: 160, maxWidth: 350, marginLeft: 5, marginRight: 5  }}>
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

                <Row className="justify-content-center">

                    <Col className="mb-3" xl={6} lg={6} md={12} sm={12} xs={12}>
                        <DocumentCard
                            aria-label={locale.homepage.vaccineSection.card1.title}
                            styles={vaccineNewsCards}
                            onClick={() => redirectToLink("https://www.mur.gov.it/it/news/lunedi-09082021/green-pass-obbligatorio-attivita-presenza-universita-e-afam")}
                            className="text-align-left"
                        >
                            <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={process.env.PUBLIC_URL + "/other/green_pass.jpg"} />
                            <DocumentCardDetails styles={vaccineDocumentCardDetails}>
                                <DocumentCardTitle title={locale.homepage.vaccineSection.card1.title} styles={vaccinePrimaryText} />
                                <DocumentCardTitle
                                    title={locale.homepage.vaccineSection.card1.description}
                                    styles={vaccineSecondaryText}
                                    showAsSecondaryTitle
                                />
                            </DocumentCardDetails>
                            <div style={{ marginLeft: 16, marginBottom: 8 }}>
                                <Text styles={semibold} variant="medium" style={{ color: theme.palette.themePrimary }}><Icon iconName="PageArrowRight"/> {locale.homepage.vaccineSection.click}</Text>
                            </div>
                            <DocumentCardActivity activity={locale.homepage.vaccineSection.card1.date} people={people} />
                        </DocumentCard>
                    </Col>

                    <Col className="mb-3" xl={6} lg={6} md={12} sm={12} xs={12}>
                        <DocumentCard
                            aria-label={locale.homepage.vaccineSection.card2.title}
                            styles={vaccineNewsCards}
                            onClick={() => redirectToLink("https://www.docdroid.net/zm5C1c5/20210810-piano-vaccini-ampamp-universita-verfin-pdf")}
                            className="text-align-left"
                        >
                            <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={process.env.PUBLIC_URL + "/other/vaccine_card_2.jpg"} />
                            <DocumentCardDetails styles={vaccineDocumentCardDetails}>
                                <DocumentCardTitle title={locale.homepage.vaccineSection.card2.title} styles={vaccinePrimaryText} />
                                <DocumentCardTitle
                                    title={locale.homepage.vaccineSection.card2.description}
                                    styles={vaccineSecondaryText}
                                    showAsSecondaryTitle
                                />
                            </DocumentCardDetails>
                            <div style={{ marginLeft: 16, marginBottom: 8 }}>
                                <Text styles={semibold} variant="medium" style={{ color: theme.palette.themePrimary }}><Icon iconName="PageArrowRight" /> {locale.homepage.vaccineSection.click}</Text>
                            </div>
                            <DocumentCardActivity activity={locale.homepage.vaccineSection.card2.date} people={people} />
                        </DocumentCard>
                    </Col>

                </Row>
            </div>

            <div className="faq-section mb-4">
                <div className="mb-4"><Separator><Text variant="large" styles={semibold}>{locale.homepage.section6.text}</Text></Separator></div>

                {
                    faqs.map( (x,i) => {
                        return (
                            <Accordion style={{ backgroundColor: theme.palette.white, color: theme.palette.black, boxShadow: theme.effects.elevation8, marginRight: 10, marginLeft: 10 }} key={i}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{color: theme.palette.black}} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Text variant="medium" style={{ color: theme.palette.themePrimary }} styles={semibold}>
                                        <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={x.question![language]} />
                                    </Text>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Text variant="medium">
                                        <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={x.answer![language]} />
                                    </Text>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }

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

        </Container >
    )
};

export default HomeView;