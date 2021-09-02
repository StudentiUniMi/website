import React from "react";
import { FontSizes } from '@fluentui/theme';
import { Text, Icon, Callout, Link } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { semibold } from '../services/fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import { DefaultButton, DirectionalHint, IIconProps, mergeStyleSets, Separator } from "@fluentui/react";
import { useBoolean, useId } from '@fluentui/react-hooks';
import { getRules } from '../services/Requests'; 
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
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const icon: IIconProps = { iconName: 'QandA' };

    const rulesData: Rule[] = getRules();

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
            marginLeft: 10,
            marginRight: 10
        },
    });

    return (
        <Container className="rules text-center">
            <div className="mb-4">
                <div className="mb-3">
                    <Text variant="large">
                        {locale.rules.text1}
                    </Text>
                </div>

                <div className="mb-3">
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

                <Icon iconName="ChevronDownMed" className="mb-3" style={iconStyle} />

                <div className="mb-3">
                    <Separator theme={theme}><Text variant="large" styles={semibold}>{locale.rules.text2}</Text></Separator>
                </div>

                <div className="mb-3">
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
                </div>

            </div>

        </Container>
    )
}

export default Rules;

