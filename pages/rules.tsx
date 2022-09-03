import React from "react";
import { Text, Link } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { semibold } from '../services/Fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import { getRules } from '../services/Requests'; 
import { Image } from 'office-ui-fabric-react/lib-commonjs/Image';
import { NextSeo } from 'next-seo';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Rule from '../models/Rule';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

const Rules = () => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();

    const rulesData: Rule[] = getRules();

    const imageProperties = { display: 'inline-block', width: '100%' };

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

            <section className="rules">
                <div className="pt-5 pb-5" style={{ backgroundColor: theme.palette.themePrimary }}>
                    <Container>

                        <Row>
                            <Col lg={4} className="text-center">
                                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 300 }}>
                                    <Image id="logo" className="mb-2" src={'/images/rules.png'} style={imageProperties} />
                                </div>
                            </Col>

                            <Col lg={8}>
                                <div className="mb-2">
                                    <Text variant="xLargePlus" style={{color: theme.palette.white}}>{locale?.rules.text1}</Text>
                                </div>

                                <div className="mb-3">
                                    <Text variant="large" style={{ color: theme.palette.white }}>{locale?.rules.text2}</Text>
                                </div>

                                <div>
                                    <Text variant="medium" style={{ color: theme.palette.white }}><i>{locale?.rules.text3}</i></Text>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>

                <div className="pt-4 pb-4">
                
                    <div className="mb-4">
                        <div className="mb-4 text-center">
                            <Text variant="xLarge">{locale?.rules.header}</Text>
                        </div>
                    </div>

                    <div>
                        <Container>
                            {
                                rulesData.map((x, i) => {
                                    return (
                                        <Accordion style={{ backgroundColor: theme.palette.white, color: theme.palette.black, boxShadow: theme.effects.elevation8, marginRight: 10, marginLeft: 10 }} key={i}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon style={{ color: theme.palette.black }} />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Text variant="medium" style={{ color: theme.palette.themePrimary }} styles={semibold}>{x.title![language!]}</Text>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Text variant="medium">
                                                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={x.description![language!]} />
                                                </Text>
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                })
                            }
                        </Container>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rules;

