import * as React from 'react';
import './App.css';
import { FontSizes } from '@fluentui/theme';
import { Text, ITextProps } from 'office-ui-fabric-react/lib/Text';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 200 } },
};

/*
    L'idea è quella di scegliere da input select il corso di laurea e il corso, per poi avere due campi abbastanza grandi in cui
    inserire la domanda e la risposta proposti.
*/

interface proposerForm {
    cdl: string,
    course: string,
    question: string,
    answer: string
}

const FaqProposer = () => {
    return (
        <div id="faqProposer">
            <div id="faqProposer-text">
                <Text>
                    Qui è possibile proporre nuove faq per un corso che ritieni debba essere aggiornato <br />
                    o per cui non sono state ancora create delle faq.<br /><br />
                    <Text style={{ fontWeight: 500 }}>Compila questo piccolo form se vuoi contribuire:</Text><br /><br />
                </Text>
            </div>
            <div id="faqProposer-form">
                <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                    <Stack {...columnProps}>
                        <TextField label="Corso " placeholder="Inserisci il corso" required />
                        <TextField label="With an icon" iconProps={iconProps} />
                        <TextField label="With placeholder" placeholder="Please enter text here" />
                    </Stack>
                </Stack>
            </div>
        </div>
    )
};

export default FaqProposer;