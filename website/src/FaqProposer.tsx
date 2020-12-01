import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontSizes } from '@fluentui/theme';
import { Text, ITextProps } from 'office-ui-fabric-react/lib/Text';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Container } from 'react-bootstrap';

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
        <Container id="faqProposer" className="text-center">
            {/*
            <Text style={{ fontSize: FontSizes.size16 }}>
                <p>
                    Qui è possibile proporre nuove faq per un corso che ritieni debba essere aggiornato
                    o per cui non sono state ancora create delle faq.
                    </p>
                <p>
                    <Text style={{ fontWeight: 500 }}>Compila questo piccolo form se vuoi contribuire:</Text>
                </p>
            </Text>
            {/*
            <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                <Stack {...columnProps}>
                    <TextField label="Corso" placeholder="Inserisci il corso" required />
                    <TextField label="With an icon" iconProps={iconProps} />
                    <TextField label="With placeholder" placeholder="Please enter text here" />
                </Stack>
            </Stack> */}
            <Text style={{ fontWeight: 500 }}>Feature non disponibile in questo momento.</Text>
        </Container>
    )
};

export default FaqProposer;