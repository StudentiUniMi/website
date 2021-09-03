import React from 'react';
import { Text, Icon, Link } from 'office-ui-fabric-react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { Persona } from 'office-ui-fabric-react/lib/Persona';
import { useTheme } from '@fluentui/react-theme-provider';
import { getAdmins } from '../services/Requests';
import { getNetworkMembers } from '../services/Requests';
import { CompoundButton } from '@fluentui/react/lib/Button';
import { IIconProps, ITooltipHostStyles, ITooltipProps, PersonaSize, TooltipDelay, TooltipHost } from '@fluentui/react';
import { Image } from 'office-ui-fabric-react/lib/Image';
import LocalizationService from "../services/LocalizationService";
import { semibold } from '../services/fonts';

const developers: any = [
    { name: "Giuseppe Del Campo", description: { it: "Sviluppatore e designer del sito web", en: 'Website Developer and Designer' }, username: 'Giuseppetm', user_id: 597678134, github: "https://github.com/Giuseppetm", website: "https://giuseppetm.netlify.app/" },
    { name: "Manuele Lucchi", description: { it: "Progettista del sito web", en: 'Website Technical Designer' }, username: "Gesoo99", user_id: 99687972, github: "https://github.com/manuelelucchi", website: "https://manuelelucchi.github.io/" },
];

const OrganizationView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const calloutPropsContributor = { gapSpace: 3 };
    const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };
    var language: string = LocalizationService.getLanguage();
    const admins = getAdmins();
    const networkMembers = getNetworkMembers();
    const whiteText = '#faf9f8';

    const icon: IIconProps = { iconName: 'DocumentSearch' };

    const imageProperties = { display: 'inline-block', width: '100%' };

    return (
        <div className="organization pb-3">

            <div className="pt-5 pb-5" style={{ backgroundColor: theme.palette.blueDark }}>
                <Container>

                    <Row>
                        <Col lg={4} className="text-center">
                            <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 300 }}>
                                <Image id="logo" className="mb-2" src={process.env.PUBLIC_URL + '/other/organization.png'} style={imageProperties} />
                            </div>
                        </Col>

                        <Col lg={8} className="mb-2">
                            <div className="mb-2">
                                <Text variant="xLargePlus" style={{ color: whiteText }}>{locale.aboutUs.text1}</Text>
                            </div>

                            <div className="mb-2">
                                <Text variant="large" style={{ color: whiteText }}>{locale.aboutUs.text2}</Text>
                            </div>

                            <div className="mb-3">
                                <Text variant="medium" style={{ color: whiteText }}>{locale.aboutUs.text3}</Text>
                            </div>

                            <div className="mb-2">
                                <CompoundButton primary theme={theme} secondaryText={locale.aboutUs.button.text2} href="https://github.com/StudentiUniMi/docs/blob/main/statuto.md" target="_blank" style={{ textDecoration: 'none' }} iconProps={icon}>
                                    {locale.aboutUs.button.text1}
                                </CompoundButton>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>

            <div className="pt-4 pb-4 mb-2">
                <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold} style={{ color: theme.palette.themePrimary }}>{locale.aboutUs.header1}</Text></div>
                
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

            <div className="pt-4 pb-4 mb-2">
                <Container>
                    <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold} style={{color: theme.palette.themePrimary}}>{locale.aboutUs.header2}</Text></div>

                    <Row className="justify-content-center">
                        {
                            (networkMembers.slice(1, networkMembers.length)).map((x, i) =>
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

            <div className="pt-4 pb-4 mb-2">
                <Container>
                    <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold} style={{ color: theme.palette.themePrimary }}>Sviluppatori</Text></div>

                    <Row className="justify-content-center">
                        {
                            developers.map((x:any, i:any) =>
                                <>
                                    <Col className="mb-3" lg={4} sm={6} xs={12}>
                                        <div style={{ maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }}>
                                            <Persona
                                                size={PersonaSize.size72}
                                                imageUrl={`https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.user_id}.png`}
                                                text={x.name}
                                                onRenderPrimaryText={() => <Text variant="medium" styles={semibold}>{x.name}</Text>}
                                                secondaryText={x.username}
                                                onRenderSecondaryText={() => <Text variant="medium"><Link href={`https://t.me/${x.username}`}>@{x.username}</Link></Text>}
                                                tertiaryText={x.description[language]}
                                                onRenderTertiaryText={() => <Text variant="small">{x.description[language]}</Text>}
                                            />
                                        </div>
                                    </Col>
                                </>
                            )
                        }
                    </Row>

                </Container>
            </div>

            {/*
                            {
                                admins.map((x: any, i: any) =>
                                    <>
                                        {(() => {
                                            const imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.user_id}.png`;
                                            const tooltipProps: ITooltipProps = {
                                                onRenderContent: () => (
                                                    <>
                                                        <div className="mb-1">
                                                            <Text variant="large" styles={semibold}><Link href={`https://t.me/${x.username}`}>@{x.username}</Link></Text><br />
                                                            <Text variant="medium" styles={semibold}>Amministratore gruppi Telegram</Text><br />
                                                        </div>
                                                        <div>
                                                            <Text variant="medium">{x.cdl}</Text>
                                                        </div>
                                                    </>
                                                ),
                                            };
                                            return (
                                                <TooltipHost
                                                    tooltipProps={tooltipProps}
                                                    calloutProps={calloutPropsContributor}
                                                    styles={hostStyles}
                                                    delay={TooltipDelay.zero}
                                                    key={i}
                                                >
                                                    <Persona onRenderPrimaryText={() => null} imageUrl={imageUrl} text={x.username} className="mb-1" size={PersonaSize.size72} />
                                                </TooltipHost>
                                            )
                                        })()}
                                        &nbsp;&nbsp;
                                    </>
                                )
                            }
                        </Row>
                    </Container>
                </div>


            </div>
            */}





            {/*
            <Container>

                <Mantainers />


                <div className="mb-4">
                    <div className="mb-3"><Separator theme={theme}><Text variant="large" styles={semibold}>{locale.aboutUs.header1}</Text></Separator></div>

                    <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '300px' }} className="mb-4">
                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                            <Card.Section>
                                <div className="justify-content-center">
                                    <Persona onRenderPrimaryText={() => null} text={"Marco Aceti"} imageUrl={process.env.PUBLIC_URL + '/contributors/marcoaceti.jpg'} />
                                </div>
                                <Text variant="medium" styles={semibold}>
                                    <Icon iconName="Send" style={{ color: theme.palette.themePrimary}} />&nbsp;<Link href={`https://t.me/acetimarco`} target="_blank">Marco Aceti</Link>
                                </Text>
                            </Card.Section>
                        </Card>
                    </div>
                </div>

                <div className="mb-4 pt-2">

                    <div className="mb-3"><Separator theme={theme}><Text variant="large" styles={semibold}>{locale.aboutUs.header2}</Text></Separator></div>

                    <Row className="justify-content-center">
                        {
                            canMembers.map( (x,i) => {
                                return (
                                    <Col className="mb-3" xl={2} lg={3} md={4} sm={6} xs={12} key={i}>
                                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                                            <Card.Section>
                                                <div className="justify-content-center">
                                                    {(() => {
                                                        var imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.user_id}.png`;
                                                        return <Persona imageUrl={imageUrl} onRenderPrimaryText={() => <Link href={`https://t.me/${x.username}`}>{`@${x.username ?? ""}`}</Link>} text={`@${x.username}` ?? ""} />
                                                    })()}
                                                </div>
                                                <Text variant="medium" styles={semibold}>
                                                    <Icon iconName="Send" style={{ color: theme.palette.themePrimary }} />&nbsp;
                                                    <Link href={`https://t.me/${x.username}`} target="_blank">{x.name}</Link>
                                                </Text>
                                                <Text variant="medium" className="mt-2">
                                                    {x.delega}
                                                </Text>
                                            </Card.Section>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>


                <div className="mb-4">
                    <div className="mb-3"><Separator theme={theme}><Text variant="large" styles={semibold}>{locale.aboutUs.header3}</Text></Separator></div>

                    <Row className="justify-content-center">
                        {
                            admins.map( (x,i) => {
                                return (
                                    <Col className="mb-3" xl={2} lg={3} md={4} sm={6} xs={12} key={i}>
                                        <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                                            <Card.Section>
                                                <div className="justify-content-center">
                                                    {(() => {
                                                        var imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.user_id}.png`;
                                                        return <Persona imageUrl={imageUrl} onRenderPrimaryText={() => <Link href={`https://t.me/${x.username}`}>{`@${x.username ?? ""}`}</Link>} text={`@${x.username}` ?? ""} />
                                                    })()}
                                                </div>
                                                <Text variant="medium" styles={semibold}>
                                                    <Icon iconName="Send" style={{ color: theme.palette.themePrimary }} />&nbsp;
                                                    <Link href={`https://t.me/${x.username}`} target="_blank">{x.username}</Link>
                                                </Text>
                                                <Text variant="medium" className="mt-2">
                                                    {x.cdl}
                                                </Text>
                                            </Card.Section>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>

            </Container>
            */}
        </div>
    )
};

export default OrganizationView;