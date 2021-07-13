import React from "react";
import { FontSizes } from '@fluentui/theme';
import { Text, Icon, Callout, Link } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { semibold } from '../fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import { DefaultButton, DirectionalHint, IIconProps, mergeStyleSets, Separator } from "@fluentui/react";
import { useBoolean, useId } from '@fluentui/react-hooks';
import { getRules } from '../services/Requests'; 
import Rule from '../models/Rule';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import parse from 'html-react-parser';

const Rules = () => {
    const theme = useTheme();
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
                        Qui è possibile trovare il regolamento dei gruppi telegram del network.
                        Si consiglia di leggere tutte le regole di cui è composto prima di usare uno qualsiasi di essi.
                    </Text>
                </div>

                <div className="mb-3">
                    <DefaultButton
                        id={buttonId}
                        onClick={toggleIsCalloutVisible}
                        text="Perchè abbiamo introdotto un regolamento?"
                        className={styles.button}
                        iconProps={icon}
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
                            <Text block variant="medium" className="mb-1">Vogliamo rendere chiari i motivi per cui abbiamo deciso di regolamentare i gruppi del nostro network.</Text>
                            <Text block variant="small">
                                Abbiamo notato che la maggior parte di essi erano tempestati di domande banali, fatte più volte al giorno, la cui risposta era facilmente trovabile.
                                Questo riduce la qualità della chat e scoraggia la partecipazione di studenti più attenti.
                                Per questo motivo abbiamo deciso di provare a limitare il fenomeno, da una parte ammonendo chi continua a fare interventi non produttivi,
                                e dall'altra fornendo un modo facile e veloce per trovare le informazioni più importanti tramite la <Link href="https://wiki.studentiunimi.it/" target="_blank">Wiki</Link>.
                            </Text>
                        </Callout>
                    )}
                </div>

                <Icon iconName="ChevronDownMed" className="mb-3" style={iconStyle} />

                <div className="mb-3">
                    <Separator><Text variant="large" styles={semibold}>Regolamento dei gruppi Telegram</Text></Separator>
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
                                    <Text variant="medium" style={{ color: theme.palette.themePrimary }}>{x.title}</Text>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Text variant="medium">
                                        {parse(x.description!)}
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

