import React from "react";
import { Text, Link, Icon } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { semibold } from '../services/Fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import { Image } from 'office-ui-fabric-react/lib-commonjs/Image';
import { NextSeo } from 'next-seo';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

const Rules = () => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();

    const imageProperties = { display: 'inline-block', width: 240 };
    const subHeader = { backgroundColor: theme.palette.neutralLight, padding: '10px 0px' };
    const finalBox = { backgroundColor: theme.palette.neutralLighter, padding: 20 };

    return (
        <>
            <NextSeo
                title={locale?.helmet.rules.title}
                description={locale?.helmet.rules.description}
                canonical={"https://studentiunimi.it/rules"}
                openGraph={{
                    url: "https://studentiunimi.it/rules",
                    title: locale?.helmet.rules.title,
                    description: locale?.helmet.rules.description,
                    site_name: 'Network StudentiUniMi',
                    type: 'website',
                    locale: language,
                    images: [
                        {
                            url: '/seo/rules.png',
                            type: 'image/png',
                        }
                    ],
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

            <section className="rules">
                <div className="pt-5 pb-5" style={{ backgroundColor: theme.palette.themePrimary }}>
                    <Container>

                        <Row>
                            <Col lg={4} className="text-center">
                                <Image id="logo" className="mb-2" src={'/images/rules.png'} style={imageProperties} />
                            </Col>

                            <Col lg={8}>
                                <div className="mb-2">
                                    <Text variant="xLargePlus" style={{ color: theme.palette.white }}>{locale?.rules.text1}</Text>
                                </div>

                                <div>
                                    <Text variant="large" style={{ color: theme.palette.white }}>{locale?.rules.text2}</Text>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>

                <div className="pb-5">

                    <div className="mb-4">
                        <div className="mb-4" style={subHeader}>
                            <Container className="d-flex flex-row align-items-center" style={{ gap: 5}}>
                                <Text variant="xLarge"><Icon iconName="AiOutlineFileText" className="d-flex" /></Text>
                                <Text variant="xLarge">{locale?.rules.rules.title}</Text>
                            </Container>
                        </div>
                        <Container>
                            <div className="d-flex flex-column" style={{ gap: 20 }}>
                                <div>
                                    <div className="mb-2">
                                        <Text variant="mediumPlus" styles={semibold}>{locale?.rules.rules.toxicBehaviour.title}</Text>
                                    </div>
                                    <div>
                                        <Text variant="medium">
                                            {locale?.rules.rules.toxicBehaviour.description}
                                        </Text>
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-2">
                                        <Text variant="mediumPlus" styles={semibold}>{locale?.rules.rules.chatInteraction.title}</Text>
                                    </div>
                                    <div>
                                        <Text variant="medium">
                                            {locale?.rules.rules.chatInteraction.description}
                                            <ul>
                                                {locale?.rules.rules.chatInteraction.list.map(x => <li>{x}</li> ) }
                                            </ul>
                                        </Text>
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-2">
                                        <Text variant="mediumPlus" styles={semibold}>{locale?.rules.rules.spam.title}</Text>
                                    </div>
                                    <div className="mb-3">
                                        <Text variant="medium">
                                            {locale?.rules.rules.spam.description1}
                                            <ul>
                                                {locale?.rules.rules.spam.list1.map(x => <li>{x}</li>)}
                                            </ul>
                                        </Text>
                                    </div>
                                    <div className="mb-3">
                                        <Text variant="medium">
                                            {locale?.rules.rules.spam.description2}
                                            <ul>
                                                {locale?.rules.rules.spam.list2.map(x => <li>{x}</li>)}
                                            </ul>
                                        </Text>
                                    </div>
                                    <div>
                                        <Text variant="medium">
                                            {locale?.rules.rules.spam.description3}
                                        </Text>
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-2">
                                        <Text variant="mediumPlus" styles={semibold}>{locale?.rules.rules.sharedContent.title}</Text>
                                    </div>
                                    <div>
                                        <Text variant="medium">
                                            <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.rules.rules.sharedContent.description} />
                                        </Text>
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-2">
                                        <Text variant="mediumPlus" styles={semibold}>{locale?.rules.rules.offTopic.title}</Text>
                                    </div>
                                    <div>
                                        <Text variant="medium">
                                            <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.rules.rules.offTopic.description} />
                                        </Text>
                                    </div>
                                </div>


                            </div>
                        </Container>
                    </div>

                    <div className="mb-4">
                        <div className="mb-4" style={subHeader}>
                            <Container className="d-flex flex-row align-items-center" style={{ gap: 5 }}>
                                <Text variant="xLarge"><Icon iconName="AiOutlineEdit" className="d-flex" /></Text>
                                <Text variant="xLarge">{locale?.rules.measures.title}</Text>
                            </Container>
                        </div>
                        <Container>
                            <div className="d-flex flex-column mb-3" style={{ gap: 20 }}>
                                <Text variant="medium">
                                    {locale?.rules.measures.description1}
                                </Text>
                                <Text variant="medium">
                                    {locale?.rules.measures.description2}
                                </Text>
                                <Text variant="medium">
                                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.rules.measures.description3} />
                                </Text>
                            </div>
                            <div className="mb-2">
                                <Text variant="mediumPlus" styles={semibold}>{locale?.rules.measures.countermeasures.title}</Text>
                                <Text variant="medium">
                                    <ul>
                                        {locale?.rules.measures.countermeasures.list.map(x => <li><JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={x} /></li>)}
                                    </ul>
                                </Text>
                            </div>
                        </Container>
                    </div>

                    <div>
                        <div className="mb-4" style={subHeader}>
                            <Container className="d-flex flex-row align-items-center" style={{ gap: 5 }}>
                                <Text variant="xLarge"><Icon iconName="AiOutlineStar" className="d-flex" /></Text>
                                <Text variant="xLarge">{locale?.rules.advices.title}</Text>
                            </Container>
                        </div>
                        <Container>
                            <div className="mb-3">
                                <Text variant="medium">
                                    <ul>
                                        {locale?.rules.advices.list1.map(x => <li>{x}</li>)}
                                            <ul className="mb-3">
                                                {locale?.rules.advices.subList.map(x => <li>{x}</li>)}
                                            </ul>
                                        {locale?.rules.advices.list2.map(x => <li>{x}</li>)}
                                    </ul>
                                </Text>
                            </div>
                        </Container>
                    </div>

                    <div style={finalBox}>
                        <Container className="d-flex flex-column text-center" style={{ gap: 10 }}>
                            <div className="d-flex flex-column">
                                <Text variant="large">
                                    {locale?.rules.lastSection.title1}
                                </Text>
                                <Text variant="large">
                                    {locale?.rules.lastSection.title2}
                                </Text>
                            </div>
                            <Text variant="medium">
                                <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.rules.lastSection.description} />
                            </Text>
                        </Container>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Rules;

