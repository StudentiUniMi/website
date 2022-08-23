import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../src/services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import { useRouter } from 'next/router';
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib-commonjs/Text';
import { Container } from 'react-bootstrap';
import { useTheme } from '@fluentui/react-theme-provider';
import { DocumentCardPreview, IDocumentCardPreviewProps } from 'office-ui-fabric-react/lib-commonjs/DocumentCard';
import { Card, ICardTokens } from '@uifabric/react-cards';
import { semibold } from '../src/services/Fonts';
import { getRedirects, getGuides, getTools } from '../src/services/Requests';
import { Pivot, PivotItem } from '@fluentui/react';
import { Image } from 'office-ui-fabric-react/lib-commonjs/Image';
import { Link } from '@fluentui/react';

const Services = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    let didMount = React.useRef(false);
    let router = useRouter();
    const redirects = getRedirects();
    const guides = getGuides();
    const tools = getTools();
    const cardTokens: ICardTokens = { childrenMargin: 12 };

    const [selectedSubSection, setSelectedSubSection] = React.useState<string>("");

    const handleSubSectionChange = (item?: PivotItem) => {
        if (item) {
            setSelectedSubSection(item.props.itemKey!);

            if (item.props.itemKey! !== "redirects") {
                router.push(`/services/${item.props.itemKey!}/`);
            } else {
                router.push('/services/');
            }
        }
    };

    let cardProps = (iconName?: string): IDocumentCardPreviewProps => {
        return {
            previewImages: [ 
                {
                    previewIconProps: {
                        iconName: iconName,
                        styles: { root: { fontSize: FontSizes.size32, color: theme.palette.themePrimary } },
                    },
                    width: 100, height: 110
                },
            ],
            styles: { previewIcon: { backgroundColor: theme.palette.neutralLighter }, root: { borderBottom: '0px' } },
        }
    };

    /* This function initializes the sub section based on url parameters */
    const initializeSection = React.useCallback(() => {
        if (!didMount.current) {
            didMount.current = true;
            // TODO: Fix this
            //var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
            //var subsection = states.length >= 2 ? states[1].toLowerCase() : '';
            
            //if (subsection === '') {
            //    setSelectedSubSection("redirects");
            //} else {
            //    setSelectedSubSection(subsection);
            //}
        }
    }, []);

    React.useEffect(() => {
        /* TODO: Updating content based on browser commands (push and pop) */
        /*
        return history.listen(async () => {
            if (history.action === 'PUSH' || history.action === 'POP') {
                didMount.current = false;
                initializeSection();
            }
        });
        */
    }, [initializeSection])

    React.useEffect(() => {
        if (!didMount.current) initializeSection();
    }, [initializeSection]);
    
    return (
        <div className="services pb-3">
            <div className="pt-5 pb-5 mb-4" style={{ backgroundColor: theme.palette.neutralLighter }}>
                <Container>

                    <Row>
                        <Col xl={9} lg={8} md={12} className="mb-3 mb-lg-0">
                            <div className="mb-2">
                                <Text variant="xLargePlus">{locale?.services.text1}</Text>
                            </div>

                            <div className="mb-2">
                                <Text variant="large">{locale?.services.text2}</Text>
                            </div>

                            <div className="mb-4">
                                <Text variant="medium" style={{ fontStyle: 'italic', color: theme.palette.neutralPrimary }}>
                                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.services.text3} />
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
                                    linkSize="normal" 
                                    linkFormat="tabs"
                                >
                                    <PivotItem headerText={locale?.services.tabs.redirects} itemKey="redirects" />
                                    <PivotItem headerText={locale?.services.tabs.guides} itemKey="guides" />
                                    <PivotItem headerText={locale?.services.tabs.tools} itemKey="tools" />
                                </Pivot>
                            </div>
                        </Col>

                        <Col xl={3} lg={4} md={12} className="text-center">
                            <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                <Image id="logo" src={'/images/services.png'} style={{ maxWidth: '100%' }} />
                            </div>
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
                                                <Text variant="medium" style={{ color: theme.palette.themePrimary, marginBottom: 5 }} styles={semibold}>{x.name![language!]}</Text>
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
                                                <Text variant="medium" style={{ color: theme.palette.themePrimary, marginBottom: 5 }} styles={semibold}>{x.name![language!]}</Text>
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
                                    <Link href={x.link ?? ""} className="text-decoration-none">
                                        <Card label={x.name?.it} horizontal tokens={cardTokens} style={{ border: '0px', maxWidth: 'none', cursor: 'pointer' }}>
                                            <Card.Item fill>
                                                <DocumentCardPreview {...cardProps(x.icon)} />
                                            </Card.Item>
                                            <Card.Section>
                                                <Text variant="medium" style={{ color: theme.palette.themePrimary, marginBottom: 5 }} styles={semibold}>{x.name![language!]}</Text>
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
        </div>
    )
}

export default Services;