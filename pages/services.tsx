import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../services/LocalizationService";
import GlobalContext from 'services/GlobalContext';
import Lottie from 'react-lottie';
import * as lottieMap from '../components/Services/Lottie/73243-happy-students-studying.json';
import { Text, DocumentCardPreview, IDocumentCardPreviewProps, Link, Pivot, PivotItem, FontSizes, useTheme } from '@fluentui/react';
import { NextSeo } from 'next-seo';
import { Container } from 'react-bootstrap';
import { Card, ICardTokens } from '@fluentui/react-cards';
import { bold, semibold } from '../services/Fonts';
import { getRedirects, getGuides, getTools } from '../services/Requests';
import { preventDefault, preventVisibleHref } from 'services/Utils';
import JsxParser from 'react-jsx-parser';

const Services = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    const { isPolicyAccepted, togglePolicyDialog } = useContext(GlobalContext);

    const redirects = getRedirects();
    const guides = getGuides();
    const tools = getTools();

    const servicesOptions = {
      loop: true,
      autoplay: true, 
      animationData: lottieMap,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    
    const [selectedSubSection, setSelectedSubSection] = React.useState<string>("redirects");
    
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    
    const handleSubSectionChange = (item?: PivotItem) => {
        if (item) {
            setSelectedSubSection(item.props.itemKey!);
        }
    };

    let cardProps = (iconName?: string): IDocumentCardPreviewProps => {
        return {
            previewImages: [ 
                {
                    previewIconProps: {
                        iconName: iconName,
                        styles: { root: { fontSize: FontSizes.size32, color: theme.palette.themeDark } },
                    },
                    width: 100, height: 110
                },
            ],
            styles: { previewIcon: { backgroundColor: theme.palette.neutralLighter }, root: { borderBottom: '0px' } },
        }
    };
    
    return (
        <>
            <NextSeo
                title={locale?.helmet.services.title}
                description={locale?.helmet.services.description}
                canonical={"https://studentiunimi.it/services"}
                openGraph={{
                    url: "https://studentiunimi.it/services",
                    title: locale?.helmet.services.title,
                    description: locale?.helmet.services.description,
                    site_name: 'Network StudentiUniMi',
                    type: 'website',
                    locale: language,
                    images: [
                        {
                            url: '/seo/services.png',
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

            <section className="services pb-3">
                <div className="pt-5 pb-5 mb-4" style={{ backgroundColor: theme.palette.neutralLighter }}>
                    <Container>

                        <Row>
                            <Col xl={9} lg={8} md={12} className="mb-3 mb-lg-0">
                                <div className="mb-2">
                                    <h1>
                                        <JsxParser bindings={{ theme: theme, semibold: semibold, bold: bold }} components={{ Text, Link }} jsx={locale?.services.text1} />
                                    </h1>
                                </div>

                                <div className="mb-2">
                                    <Text variant="large">{locale?.services.text2}</Text>
                                </div>

                                <div className="mb-4">
                                    <Text variant="medium" style={{ fontStyle: 'italic', color: theme.palette.neutralPrimary }}>
                                        {locale?.services.text3} <Link href={preventVisibleHref(isPolicyAccepted, "https://t.me/unimichat")} onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}>
                                            {locale?.services.text4}
                                        </Link>
                                    </Text>
                                </div>

                                <div>
                                    <div className="mb-2">
                                        <Text variant="medium" styles={semibold}>{locale?.services.selectSubSection}</Text>
                                    </div>

                                    <Pivot
                                        selectedKey={selectedSubSection}
                                        onLinkClick={handleSubSectionChange}
                                        headersOnly={true}
                                        linkSize={'normal'}
                                        linkFormat={'tabs'}
                                    >
                                        <PivotItem headerText={locale?.services.tabs.redirects} itemKey="redirects" />
                                        <PivotItem headerText={locale?.services.tabs.guides} itemKey="guides" />
                                        <PivotItem headerText={locale?.services.tabs.tools} itemKey="tools" />
                                    </Pivot>
                                </div>
                            </Col>

                            <Col xl={3} lg={4} md={12} className="text-center">
                                {/* @ts-ignore */} 
                                <Lottie options={servicesOptions}
                                    height={280}
                                    width={280}
                                    isClickToPauseDisabled={true}
                                    style={{ cursor: 'default' }}
                                />
                            </Col>
                        </Row>

                    </Container>
                </div>

                <Container>
                    {
                        selectedSubSection === "redirects" &&
                        <>
                            <div className="mb-4 text-center">
                                <Text variant="xLarge">{locale?.services.tabsTitle.redirects}</Text>
                            </div>

                            <Row>
                                {redirects.map((x, i) =>
                                    <Col xl={4} lg={6} md={6} sm={12} xs={12} className="mb-3" key={i}>
                                        <Link href={x.link ?? ""} className="text-decoration-none">
                                            <Card label={x.name?.it} horizontal tokens={cardTokens} style={{ border: '0px', maxWidth: 'none', cursor: 'pointer' }}>
                                                <Card.Item fill>
                                                    <DocumentCardPreview {...cardProps(x.icon)} />
                                                </Card.Item>
                                                <Card.Section>
                                                    <Text variant="medium" style={{ color: theme.palette.themeDark, marginBottom: 5 }} styles={semibold}>{x.name![language!]}</Text>
                                                    <Text variant="small" style={{ marginTop: 0, color: theme.palette.black }}>{x.description![language!]}</Text>
                                                </Card.Section>
                                            </Card>
                                        </Link>
                                    </Col>
                                    )
                                }
                            </Row>
                        </>
                    }

                    {
                        selectedSubSection === "guides" &&
                        <>
                            <div className="mb-4 text-center">
                                <Text variant="xLarge">{locale?.services.tabsTitle.guides}</Text>
                            </div>

                            <Row>
                                {guides.map((x, i) =>
                                    <Col xl={4} lg={6} md={6} sm={12} xs={12} className="mb-3" key={i}>
                                        <Link href={x.link ?? ""} className="text-decoration-none">
                                            <Card label={x.name?.it} horizontal tokens={cardTokens} style={{ border: '0px', maxWidth: 'none', cursor: 'pointer' }}>
                                                <Card.Item fill>
                                                    <DocumentCardPreview {...cardProps(x.icon)} />
                                                </Card.Item>
                                                <Card.Section>
                                                    <Text variant="medium" style={{ color: theme.palette.themeDark, marginBottom: 5 }} styles={semibold}>{x.name![language!]}</Text>
                                                    <Text variant="small" style={{ marginTop: 0, color: theme.palette.black }}>{x.description![language!]}</Text>
                                                </Card.Section>
                                            </Card>
                                        </Link>
                                    </Col>
                                    )
                                }
                            </Row>
                        </>
                    }

                    {
                        selectedSubSection === "tools" &&
                        <>
                            <div className="mb-4 text-center">
                                <Text variant="xLarge">{locale?.services.tabsTitle.tools}</Text>
                            </div>

                            <Row>
                                {tools.map((x, i) =>
                                    <Col xl={4} lg={6} md={6} sm={12} xs={12} className="mb-3" key={i}>
                                        <Link href={preventVisibleHref(isPolicyAccepted, x.link ?? "")} onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()} className="text-decoration-none">
                                            <Card label={x.name?.it} horizontal tokens={cardTokens} style={{ border: '0px', maxWidth: 'none', cursor: 'pointer' }}>
                                                <Card.Item fill>
                                                    <DocumentCardPreview {...cardProps(x.icon)} />
                                                </Card.Item>
                                                <Card.Section>
                                                    <Text variant="medium" style={{ color: theme.palette.themeDark, marginBottom: 5 }} styles={semibold}>{x.name![language!]}</Text>
                                                    <Text variant="small" style={{ marginTop: 0, color: theme.palette.black }}>{x.description![language!]}</Text>
                                                </Card.Section>
                                            </Card>
                                        </Link>
                                    </Col>
                                )
                                }
                            </Row>
                        </>
                    }

                </Container>
            </section>
        </>
    )
}

export default Services;