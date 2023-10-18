import React, { useEffect, useState } from 'react';
import { NextPage } from 'next'
import { Text, Link, CompoundButton, useTheme, Separator, DefaultButton } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { Persona, PersonaSize } from '@fluentui/react';
import { getNetworkMembers, getDevelopers } from '../services/Requests';
import { IIconProps } from '@fluentui/react';
import { bold, semibold } from '../services/Fonts';
import { resetIds } from '@fluentui/react';
import { NextSeo } from 'next-seo';
import Developer from 'models/Developer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

const Organization: NextPage = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();

    const networkMembers = getNetworkMembers();
    const developers: Array<Developer> = getDevelopers();

    const [domLoaded, setDomLoaded] = useState<boolean>(false);
    const icon: IIconProps = { iconName: 'AiOutlineFilePdf' };

    resetIds();
    useEffect(() => { setDomLoaded(true); }, []);

    return (
        <>
            <NextSeo
                title={locale?.helmet.organization.title}
                description={locale?.helmet.organization.description}
                canonical={"https://studentiunimi.it/organization"}
                openGraph={{
                    url: "https://studentiunimi.it/organization",
                    title: locale?.helmet.organization.title,
                    description: locale?.helmet.organization.description,
                    site_name: 'Network StudentiUniMi',
                    type: 'website',
                    locale: language,
                    images: [
                        {
                            url: '/seo/organization.png',
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

            <section className="organization pb-3">

                <div className="pt-5 pb-5 text-center" style={{ backgroundColor: theme.palette.neutralLighter }}>
                    <Container>
                        <div className="mb-3" style={{ maxWidth: 900, margin: '0 auto' }}>
                            <h1>
                                <Text variant="superLarge" styles={semibold}>
                                    <JsxParser bindings={{ theme: theme, semibold: semibold, bold: bold }} components={{ Text, Link }} jsx={locale?.aboutUs.text1} />
                                </Text>
                            </h1>
                        </div>

                        <div className="mb-4" style={{ maxWidth: 600, margin: '0 auto' }}>
                            <Text variant="xLarge" styles={semibold}>
                                <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.aboutUs.text2} />
                            </Text>
                        </div>

                        <CompoundButton 
                            theme={theme} 
                            secondaryText={locale?.aboutUs.button.text2} 
                            href="https://github.com/StudentiUniMi/docs/raw/main/statuto.pdf" 
                            style={{ textDecoration: 'none', boxShadow: theme.effects.elevation8 }} 
                            iconProps={icon}
                        >
                            {locale?.aboutUs.button.text1}
                        </CompoundButton>

                    </Container>
                </div>

                <div className="pt-5 pb-5">
                    <div className="mb-4 text-center">
                        <Text variant="xLargePlus" styles={bold}>{locale?.aboutUs.header1}</Text>
                    </div>

                    <div style={{ maxWidth: 230, marginLeft: 'auto', marginRight: 'auto' }}>
                        {domLoaded &&
                            <Persona
                                size={PersonaSize.size72}
                                imageUrl={"https://studentiunimi-groups-propics.marcoaceti.workers.dev/26170256.png"}
                                text={networkMembers[0].name}
                                onRenderPrimaryText={() => <Text variant="medium" styles={semibold}>{networkMembers[0].name}</Text>}
                                secondaryText={networkMembers[0].username}
                                onRenderSecondaryText={() => <Text variant="medium"><Link href={`https://t.me/${networkMembers[0].username}`}>@{networkMembers[0].username}</Link></Text>}
                            />}
                    </div>
                </div>

                <div className="pb-5">
                    <Container>
                        <div className="mb-4 text-center">
                            <Text variant="xLargePlus" styles={bold}>{locale?.aboutUs.header2}</Text>
                        </div>

                        <Row className="justify-content-center" style={{ rowGap: 15 }}>
                            {
                                domLoaded && (networkMembers.slice(1, networkMembers.length)).map((x, i) =>
                                    <>
                                        <Col className="mb-3" lg={3} md={6} sm={6} xs={12} key={i}>
                                            <div style={{ maxWidth: 240, marginLeft: 'auto', marginRight: 'auto' }}>
                                                <Persona
                                                    size={PersonaSize.size72}
                                                    imageUrl={`https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.user_id}.png`}
                                                    text={x.name}
                                                    onRenderPrimaryText={() => <Text variant="medium" styles={semibold}>{x.name}</Text>}
                                                    secondaryText={x.username}
                                                    onRenderSecondaryText={() => <Text variant="medium"><Link href={`https://t.me/${x.username}`}>@{x.username}</Link></Text>}
                                                />
                                            </div>
                                        </Col>
                                    </>
                                )
                            }
                        </Row>

                    </Container>
                </div>

                <div className="pb-5">
                    <Container>
                        <div className="mb-4 text-center">
                            <Text variant="xLargePlus" styles={bold}>{locale?.contributors.header1}</Text>
                        </div>

                        <Row className="justify-content-center" style={{ rowGap: 15 }}>
                            {
                                domLoaded && developers.map((x: Developer, i: number) =>
                                    <>
                                        <Col className="mb-3" lg={4} sm={6} xs={12} key={i}>
                                            <div style={{ maxWidth: 250, marginLeft: 'auto', marginRight: 'auto' }}>
                                                <Persona
                                                    size={PersonaSize.size72}
                                                    imageUrl={`https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.user_id}.png`}
                                                    text={x.name}
                                                    onRenderPrimaryText={() => <Text variant="medium" styles={semibold}><Link href={x.github}>{x.name}</Link></Text>}
                                                    secondaryText={x.username}
                                                    onRenderSecondaryText={() => <Text variant="medium"><Link href={`https://t.me/${x.username}`}>@{x.username}</Link></Text>}
                                                    tertiaryText={x.description[language!]}
                                                    onRenderTertiaryText={() => <Text variant="small">{x.description[language!]}</Text>}
                                                />
                                            </div>
                                        </Col>
                                    </>
                                )
                            }
                        </Row>

                    </Container>
                </div>

                <Separator />

                <div className="pt-5 pb-5 text-center">
                    <Container className="flex-column d-flex">
                        <Text styles={bold} variant="superLarge">{locale?.aboutUs.contact.title}</Text>
                        <Text className="mb-3">{locale?.aboutUs.contact.description}</Text>

                        <div style={{ margin: '0 auto', maxWidth: 600 }}>
                            <DefaultButton
                                text={locale?.aboutUs.contact.button}
                                iconProps={{ iconName: 'Mail' }}
                                href='mailto:info@studentiunimi.it'
                            />
                        </div>
                    </Container>
                </div>

            </section>
        </>
    )
};

export default Organization;
