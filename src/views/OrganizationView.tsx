import React from 'react';
import { Text, Icon, Link } from 'office-ui-fabric-react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { semibold } from '../fonts';
import { Container } from 'react-bootstrap';
import { Persona } from 'office-ui-fabric-react/lib/Persona';
import { FontSizes } from '@fluentui/theme';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { useTheme } from '@fluentui/react-theme-provider';
import { getAdmins } from '../services/Requests';
import { Separator } from '@fluentui/react/lib/Separator';
import { getCanMembers } from '../services/Requests';
import { CompoundButton } from '@fluentui/react/lib/Button';
import { IIconProps } from '@fluentui/react';
import LocalizationService from "../services/LocalizationService";

const OrganizationView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const sectionCard = { minHeight: '130px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none' };
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const iconStyle2 = { color: theme.palette.themePrimary };
    const admins = getAdmins();
    const canMembers = getCanMembers();

    const icon: IIconProps = { iconName: 'DocumentSearch' };

    return (
        <Container className="organization text-center">

            <div className="mb-2">
                <div className="mb-3">
                    <Text variant="large">
                        {locale.aboutUs.text1}
                    </Text>
                </div>

                <div className="mb-2">
                    <CompoundButton primary secondaryText={locale.aboutUs.button.text2} href="https://github.com/StudentiUniMi/docs/blob/main/statuto.md" target="_blank" style={{ textDecoration: 'none' }} iconProps={icon}>
                        {locale.aboutUs.button.text1}
                    </CompoundButton>
                </div>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-1" style={iconStyle} />

            <div className="mb-4">
                <div className="mb-3"><Separator><Text variant="large" styles={semibold}>{locale.aboutUs.header1}</Text></Separator></div>

                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '230px' }} className="mb-4">
                    <Card tokens={cardTokens} style={sectionCard} className="justify-content-center text-center">
                        <Card.Section>
                            <div className="justify-content-center">
                                <Persona onRenderPrimaryText={() => null} text={"Marco Aceti"} imageUrl={process.env.PUBLIC_URL + '/contributors/marcoaceti.jpg'} />
                            </div>
                            <Text variant="medium" styles={semibold}>
                                <i className="fab fa-telegram homeIcon" style={iconStyle2}></i>&nbsp;
                                <Link href={`https://t.me/acetimarco`} target="_blank">Marco Aceti</Link>
                            </Text>
                        </Card.Section>
                    </Card>
                </div>
            </div>

            <div className="mb-4 pt-2">

                <div className="mb-3"><Separator><Text variant="large" styles={semibold}>{locale.aboutUs.header2}</Text></Separator></div>

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
                                                <i className="fab fa-telegram homeIcon" style={iconStyle2}></i>&nbsp;
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
                <div className="mb-3"><Separator><Text variant="large" styles={semibold}>{locale.aboutUs.header3}</Text></Separator></div>

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
                                                <i className="fab fa-telegram homeIcon" style={iconStyle2}></i>&nbsp;
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
    )
};

export default OrganizationView;