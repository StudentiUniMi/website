import React, { useEffect, useState } from 'react';
import { NextPage } from 'next'
import { Text, Link, CompoundButton, useTheme, Separator, DefaultButton } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { Persona, PersonaSize } from '@fluentui/react';
import { getNetworkMembers } from '../services/Requests';
import { IIconProps } from '@fluentui/react';
import { bold, semibold } from '../services/Fonts';
import { resetIds } from '@fluentui/react';
import { NextSeo } from 'next-seo';
import Lottie from 'react-lottie';
import * as lottieOrganization from '../components/Organization/Lottie/73386-problem-solving-team.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../services/LocalizationService";

const developers: any = [
    { name: "Giuseppe Del Campo", description: { it: "Sviluppatore front-end", en: 'Front-end developer' }, username: 'Giuseppetm', user_id: 597678134, github: "https://github.com/Giuseppetm" },
    { name: "Marco Aceti", description: { it: "Sviluppatore back-end", en: "Back-end developer" }, username: "acetimarco", user_id: 26170256, github: "https://github.com/MarcoBuster" },
    { name: "Manuele Lucchi", description: { it: "Sviluppatore front-end", en: 'Front-end developer' }, username: "Gesoo99", user_id: 99687972, github: "https://github.com/manuelelucchi" },
    { name: "Mirko Faina", description: { it: "Sviluppatore back-end", en: "Back-end developer" }, username: "Mroik", user_id: 164356927, github: "https://github.com/Mroik" }
];

const Organization: NextPage = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    const [domLoaded, setDomLoaded] = useState<boolean>(false);
    const networkMembers = getNetworkMembers();
    const icon: IIconProps = { iconName: 'AiOutlineFilePdf' };

    const organizationOptions = {
      loop: true,
      autoplay: true, 
      animationData: lottieOrganization,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    
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

                <div className="pt-5 pb-5" style={{ backgroundColor: theme.palette.neutralLighter }}>
                    <Container>

                        <Row>
                            <Col lg={4} className="text-center">
                                {/* @ts-ignore */} 
                                <Lottie options={organizationOptions}
                                    height={250}
                                    width={250}
                                    isClickToPauseDisabled={true}
                                    style={{ cursor: 'default' }}
                                />
                            </Col>

                            <Col lg={8} className="mb-2">
                                <div className="mb-3">
                                    <h1>
                                        <Text variant="xLargePlus" styles={bold}>{locale?.aboutUs.text1}</Text>
                                    </h1>
                                </div>

                                <div className="mb-2">
                                    <Text variant="large" styles={semibold}>{locale?.aboutUs.text2}</Text>
                                </div>

                                <div className="mb-3">
                                    <Text variant="medium">{locale?.aboutUs.text3}</Text>
                                </div>

                                <div className="mb-2">
                                    <CompoundButton theme={theme} secondaryText={locale?.aboutUs.button.text2} href="https://github.com/StudentiUniMi/docs/raw/main/statuto.pdf" style={{ textDecoration: 'none', boxShadow: theme.effects.elevation8 }} iconProps={icon}>
                                        {locale?.aboutUs.button.text1}
                                    </CompoundButton>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>

                <div className="pt-5 pb-5">
                    <div className="mb-4 text-center">
                        <Text variant="xLarge" styles={bold} style={{ color: theme.palette.themeDarkAlt }}>{locale?.aboutUs.header1}</Text>
                    </div>
                    
                    <div style={{maxWidth: 230, marginLeft: 'auto', marginRight: 'auto'}}>
                        { domLoaded && <Persona
                            size={PersonaSize.size72}
                            imageUrl={"https://studentiunimi-groups-propics.marcoaceti.workers.dev/26170256.png"}
                            text={networkMembers[0].name}
                            onRenderPrimaryText={() => <Text variant="medium" styles={semibold}>{networkMembers[0].name}</Text>}
                            secondaryText={networkMembers[0].username}
                            onRenderSecondaryText={() => <Text variant="medium"><Link href={`https://t.me/${networkMembers[0].username}`}>@{networkMembers[0].username}</Link></Text>}
                        /> }
                    </div>
                </div>

                <div className="pb-5">
                    <Container>
                        <div className="mb-4 text-center">
                            <Text variant="xLarge" styles={bold} style={{ color: theme.palette.themeDarkAlt }}>{locale?.aboutUs.header2}</Text>
                        </div>

                        <Row className="justify-content-center" style={{ rowGap: 15 }}>
                            {
                                domLoaded && (networkMembers.slice(1, networkMembers.length)).map((x,i) =>
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
                            <Text variant="xLarge" styles={bold} style={{ color: theme.palette.themeDarkAlt }}>{locale?.contributors.header1}</Text>
                        </div>

                        <Row className="justify-content-center" style={{ rowGap: 15 }}>
                            {
                                domLoaded && developers.map((x:any, i:number) =>
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
