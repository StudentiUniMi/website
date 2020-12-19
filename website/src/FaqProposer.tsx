import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Container } from 'react-bootstrap';
// import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import { CompoundButton } from 'office-ui-fabric-react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { useBoolean } from '@uifabric/react-hooks';

/*
const dropdownControlledExampleOptions = [
    { key: 'informatica', value: "Informatica musicale", text: 'Informatica' },
    { key: 'informatica_musicale', value: "Informatica musicale", text: 'Informatica musicale' },
    { key: 'informatica_comdig', text: 'Informatica per la comunicazione digitale' },
    { key: 'sicurezza_sistemi_reti_informatiche', value: "SSRI", text: 'S.S.R.I.' },
    { key: 'sicurezza_sistemi_reti_informatiche_online', value: "SSRI Online", text: 'S.S.R.I. online' }
];
*/


const FaqProposer = () => {
    // const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();

    /*
    const onChange = (event?: React.FormEvent<HTMLDivElement>, item?: IDropdownOption, index?: number): void => {
        setSelectedItem(item);
    };
    */

    const [teachingBubbleVisible, { toggle: toggleTeachingBubbleVisible }] = useBoolean(false);

    return (
        <div className="faq-proposer">
            <Container className="text-center">
                <Text style={{ fontSize: FontSizes.size16 }}>
                    <p>
                        Qui è possibile proporre nuove faq per un corso che ritieni debba essere aggiornato,
                        o per cui non sono state ancora create delle faq. Si possono trovare le faq di un corso con relative risposte
                        (se disponibili) nelle card dei corsi di laurea nella sezione "Corsi e faq".
                    </p>
                    <p>
                        <DefaultButton
                            id="targetButton"
                            onClick={toggleTeachingBubbleVisible}
                            text={teachingBubbleVisible ? 'Nascondi' : 'Cosa sono le faq?'}
                        />
                        {teachingBubbleVisible && (
                            <TeachingBubble
                                calloutProps={{ directionalHint: DirectionalHint.bottomCenter }}
                                target="#targetButton"
                                isWide={true}
                                hasCloseButton={true}
                                closeButtonAriaLabel="Close"
                                onDismiss={toggleTeachingBubbleVisible}
                                headline="Le Frequently asked questions sono appunto le domande poste più frequentemente sui gruppi dei corsi."
                            >
                                Grazie a questa sezione apposita del sito web
                                e all'uso di un semplice form, sarà possibile proporre nuove domande con risposta per un corso in maniera facile e immediata.
                                Ad esempio, se si chiede molto spesso su un gruppo qual è la modalità d'esame di quel corso, si può proporre la domanda qui con la corrispondente risposta.
                                Per vedere un esempio vai sui corsi di informatica e seleziona una faq qualsiasi tra quelle disponibili.
                            </TeachingBubble>
                        )}
                    </p>
                    {/*
                    <p style={{ fontSize: FontSizes.size14 }}>
                        <p style={{ fontWeight: 500 }}>Cosa sono le faq?</p>
                        Le Frequently asked questions sono appunto le domande poste più frequentemente sui gruppi dei corsi: grazie a questa sezione apposita del sito web
                        e all'uso di un semplice form, sarà possibile proporre nuove domande con risposta per un corso in maniera facile e immediata.
                        Ad esempio, se si chiede molto spesso su un gruppo qual è la modalità d'esame di quel corso, si può proporre la domanda qui con la corrispondente risposta.
                        Per vedere un esempio vai sui corsi di informatica e seleziona una faq qualsiasi tra quelle disponibili.
                    </p> */}
                    <p>
                        <Text style={{ fontWeight: 500 }}>Compila questo piccolo form se vuoi contribuire:</Text>
                    </p>
                </Text>
            </Container>



            <Container className="text-center">
                <form action="https://docs.google.com/forms/d/e/1FAIpQLSc30-Js5kWfru_ZcXLganwhhGC5mqoRgm-pob5rUjMltedRLg/formResponse"
                    target="_self"
                    id="faq-proposer-form"
                    method="POST">
                    <div className="row mb-5">
                        <div className="col-4">
                            {/*
                            <Dropdown
                                id="744329775"
                                label="Seleziona il corso di laurea"
                                selectedKey={selectedItem?.key}
                                onChange={onChange}
                                placeholder="Corso di laurea"
                                options={dropdownControlledExampleOptions}
                            />*/}
                            <Label htmlFor={'744329775'} required>Scegli il corso di laurea</Label>
                            <select id="744329775" name="entry.2135536334" required>
                                <option value="" disabled selected>Corso di laurea</option>
                                <option value="Informatica">Informatica</option>
                                <option value="Informatica musicale">Informatica musicale</option>
                                <option value="Informatica per la comunicazione digitale">Informatica per la comunicazione digitale</option>
                                <option value="SSRI">SSRI</option>
                                <option value="SSRI Online">SSRI Online</option>
                            </select>
                            <TextField label="Inserisci il nome del corso" id="982590281" name="entry.982590281" placeholder="Nome del corso" required />
                        </div>
                        <div className="col-8">
                            <TextField label="Inserisci la domanda" id="482429678" name="entry.482429678" placeholder="Domanda" multiline rows={3} required />
                            <TextField label="Inserisci la risposta" id="554303651" name="entry.554303651" placeholder="Risposta" multiline rows={3} required />
                        </div>
                    </div>
                    <CompoundButton primary type="submit" secondaryText="Manda la faq proposta." style={{ backgroundColor: '#797673', border: '1px solid #797673' }} allowDisabledFocus >
                        Invia
                    </CompoundButton>
                </form>
            </Container>
            {/*<Text style={{ fontWeight: 500 }}>Feature non disponibile in questo momento.</Text>*/}
        </div>
    )
};

export default FaqProposer;

// Da sistemare, non funge
/*
$('#faq-proposer-form').submit(function (event) {
    event.preventDefault();
    alert('Faq mandata con successo, grazie per la collaborazione.');
    return false;
});
*/