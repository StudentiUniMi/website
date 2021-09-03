import React from "react";
import { Text, Callout, Link } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { semibold } from '../services/fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import { DefaultButton, DirectionalHint, IIconProps, mergeStyleSets } from "@fluentui/react";
import { useBoolean, useId } from '@fluentui/react-hooks';
import { getRules } from '../services/Requests'; 
import { Image } from 'office-ui-fabric-react/lib/Image';
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
    var language: string = LocalizationService.getLanguage();
    const icon: IIconProps = { iconName: 'QandA' };

    const rulesData: Rule[] = getRules();

    const imageProperties = { display: 'inline-block', width: '100%' };

    const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);
    const buttonId = useId('callout-button');

    const styles = mergeStyleSets({
        callout: {
            maxWidth: 800,
            padding: '20px 24px',
            marginLeft: '5px',
            marginRight: '15px'
        },
        button: {
            width: 'auto',
            height: 'auto',
            borderRadius: 3
        },
    });

    return (
        <div className="rules pb-3">
            <div className="pt-5 pb-5 mb-4" style={{ backgroundColor: theme.palette.themePrimary }}>
                <Container>

                    <Row>
                        <Col lg={4} className="text-center">
                            <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 300 }}>
                                <Image id="logo" className="mb-2" src={process.env.PUBLIC_URL + '/other/rules.png'} style={imageProperties} />
                            </div>
                        </Col>

                        <Col lg={8} className="mb-2">
                            <div className="mb-2">
                                <Text variant="xLargePlus" style={{color: theme.palette.white}}>Il regolamento dei nostri gruppi Telegram ci rende più innovativi e produttivi.</Text>
                            </div>

                            <div className="mb-3">
                                <Text variant="large" style={{ color: theme.palette.white }}>Si consiglia di leggere tutte le regole di cui è composto prima di usare uno qualsiasi di essi.</Text>
                            </div>

                            <div>
                                <DefaultButton
                                    id={buttonId}
                                    onClick={toggleIsCalloutVisible}
                                    text={locale.rules.question}
                                    className={styles.button}
                                    iconProps={icon}
                                    theme={theme}
                                />
                                {isCalloutVisible && (
                                    <Callout
                                        className={styles.callout}
                                        role="alertdialog"
                                        gapSpace={3}
                                        target={`#${buttonId}`}
                                        onDismiss={toggleIsCalloutVisible}
                                        directionalHint={DirectionalHint.bottomCenter}
                                        setInitialFocus
                                    >
                                        <Text block variant="medium" className="mb-1">{locale.rules.answer.text1}</Text>
                                        <Text block variant="small"><JsxParser bindings={{ theme: theme }} components={{ Text, Link }} jsx={locale.rules.answer.text2} /></Text>
                                    </Callout>
                                )}
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
            
            <div className="mb-4">
                <div className="mb-4 text-center">
                    {/*<div className="mb-1"><Text variant="medium" styles={semibold} style={{textTransform: 'uppercase', color: theme.palette.themePrimary}}>Gruppi degli insegnamenti</Text></div>*/}
                    <Text variant="xLarge">Regolamento dei gruppi Telegram</Text>
                </div>
            </div>

            <div className="mb-3">
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
                                        <Text variant="medium" style={{ color: theme.palette.themePrimary }} styles={semibold}>{x.title![language]}</Text>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Text variant="medium">
                                            <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={x.description![language]} />
                                        </Text>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }
                </Container>
            </div>
        </div>
    )
}

export default Rules;

