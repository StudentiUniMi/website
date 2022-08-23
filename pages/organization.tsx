import React from 'react';
import { Text, Link, CompoundButton } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib-commonjs/Persona';
import { useTheme } from '@fluentui/react-theme-provider';
import { getNetworkMembers } from '../src/services/Requests';
import { IIconProps } from '@fluentui/react';
import { Image } from 'office-ui-fabric-react/lib-commonjs/Image';
import { semibold } from '../src/services/Fonts';
import { resetIds } from '@fluentui/react';
import { NextSeo } from 'next-seo';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../src/services/LocalizationService";


const developers: any = [
    { name: "Giuseppe Del Campo", description: { it: "Sviluppatore del sito web", en: 'Website Developer' }, username: 'Giuseppetm', user_id: 597678134, github: "https://github.com/Giuseppetm", website: "https://giuseppetm.netlify.app/" },
    { name: "Manuele Lucchi", description: { it: "Progettista del sito web", en: 'Website Technical Designer' }, username: "Gesoo99", user_id: 99687972, github: "https://github.com/manuelelucchi", website: "https://manuelelucchi.github.io/" },
    { name: "Mirko Faina", description: { it: "Sviluppatore back-end", en: "Back-end developer" }, username: "Mroik", user_id: 0, github: "https://github.com/Mroik", website: "" }
];

const Organization = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    const networkMembers = getNetworkMembers();
    const icon: IIconProps = { iconName: 'DocumentSearch' };
    const imageProperties = { display: 'inline-block', width: '100%' };
    
    resetIds();

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
                    locale: language, // TODO: Check if this works, and add keywords
                    images: [
                        {
                            url: '/logo/preview_logo.png',
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

                <div className="pt-5 pb-5" style={{ backgroundColor: theme.palette.themeDarkAlt }}>
                    <Container>

                        <Row>
                            <Col lg={4} className="text-center">
                                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 300 }}>
                                    <Image id="logo" className="mb-2" src={'/images/organization.png'} style={imageProperties} />
                                </div>
                            </Col>

                            <Col lg={8} className="mb-2">
                                <div className="mb-2">
                                    <Text variant="xLargePlus" style={{ color: theme.palette.white }}>{locale?.aboutUs.text1}</Text>
                                </div>

                                <div className="mb-2">
                                    <Text variant="large" style={{ color: theme.palette.white }}>{locale?.aboutUs.text2}</Text>
                                </div>

                                <div className="mb-3">
                                    <Text variant="medium" style={{ color: theme.palette.white }}>{locale?.aboutUs.text3}</Text>
                                </div>

                                <div className="mb-2">
                                    <CompoundButton primary theme={theme} secondaryText={locale?.aboutUs.button.text2} href="https://github.com/StudentiUniMi/docs/raw/main/statuto.pdf" style={{ textDecoration: 'none', boxShadow: theme.effects.elevation8 }} iconProps={icon}>
                                        {locale?.aboutUs.button.text1}
                                    </CompoundButton>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>

                <div className="pt-4 pb-4">
                    <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold} style={{ color: theme.palette.themePrimary }}>{locale?.aboutUs.header1}</Text></div>
                    
                    <div style={{maxWidth: 230, marginLeft: 'auto', marginRight: 'auto'}}>
                        <Persona
                            size={PersonaSize.size72}
                            imageUrl={"https://studentiunimi-groups-propics.marcoaceti.workers.dev/26170256.png"}
                            text={networkMembers[0].name}
                            onRenderPrimaryText={() => <Text variant="medium" styles={semibold}>{networkMembers[0].name}</Text>}
                            secondaryText={networkMembers[0].username}
                            onRenderSecondaryText={() => <Text variant="medium"><Link href={`https://t.me/${networkMembers[0].username}`}>@{networkMembers[0].username}</Link></Text>}
                        />
                    </div>
                </div>

                <div className="pb-4">
                    <Container>
                        <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold} style={{color: theme.palette.themePrimary}}>{locale?.aboutUs.header2}</Text></div>

                        <Row className="justify-content-center">
                            {
                                (networkMembers.slice(1, networkMembers.length)).map((x, _) =>
                                    <>
                                        <Col className="mb-4" lg={3} md={6} sm={6} xs={12}>
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

                <div className="pb-4">
                    <Container>
                        <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold} style={{ color: theme.palette.themePrimary }}>{locale?.contributors.header1}</Text></div>

                        <Row className="justify-content-center">
                            {
                                developers.map((x:any, _:any) =>
                                    <>
                                        <Col className="mb-3" lg={4} sm={6} xs={12}>
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

            </section>
        </>
    )
};

export default Organization;