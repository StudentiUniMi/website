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
    styles: { root: { width: 300 } },
};

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
            <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                <Stack {...columnProps}>
                    <TextField label="Standard" />
                    <TextField label="Disabled" disabled defaultValue="I am disabled" />
                    <TextField label="Read-only" readOnly defaultValue="I am read-only" />
                    <TextField label="Required " required />
                    <TextField ariaLabel="Required without visible label" required />
                    <TextField label="With error message" errorMessage="Error message" />
                </Stack>
                <Stack {...columnProps}>
                    <MaskedTextField label="With input mask" mask="m\ask: (999) 999 - 9999" />
                    <TextField label="With an icon" iconProps={iconProps} />
                    <TextField label="With placeholder" placeholder="Please enter text here" />
                    <TextField label="Disabled with placeholder" disabled placeholder="I am disabled" />
                    <TextField label="Password with reveal button" type="password" canRevealPassword />
                </Stack>
            </Stack>
        </div>
    )
};

export default FaqProposer;