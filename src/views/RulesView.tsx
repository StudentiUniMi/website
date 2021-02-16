import React from "react";
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { CompoundButton } from 'office-ui-fabric-react';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontWeights, ITextStyles } from 'office-ui-fabric-react';
import { useTheme } from '@fluentui/react-theme-provider';

const Rules = () => {
    const [choice, setChoice] = React.useState<string>('');
    const theme = useTheme();
    const bold: ITextStyles = { root: { fontWeight: FontWeights.semibold } };
    const rules: ITextStyles = { root: { fontWeight: FontWeights.semibold, fontSize: FontSizes.size12, fontFamily: 'Consolas', color: theme.palette.neutralPrimaryAlt } };
    const rulesText: ITextStyles = { root: { fontSize: FontSizes.size12, fontFamily: 'Consolas' } };
    const colButtonStyle = { maxWidth: '200px', minWidth: '130px' };

    const QuestionFaqRulesMessage = () => (
        <MessageBar messageBarType={MessageBarType.warning}>
            <div className="mb-1 mt-2">
                <Text styles={rules}>1) Domanda con risposta indicata sul sito del docente</Text>
            </div>
            <div className="mb-3 ml-3 mr-3">
                <Text styles={rulesText}>
                    L'utente riceve un warn con successiva indicazione su dove trovare l'informazione richiesta.
                    Dopo 3 warn l'utente viene mutato per un giorno, a discrezione degli amministratori.
                </Text>
            </div>

            <div className="mb-1"> 
                <Text styles={rules}>2) Domanda riguardo informazioni banali e già chieste precedentemente nella chat</Text>
            </div>
            <div className="mb-3 ml-3 mr-3">
                <Text styles={rulesText}>
                    Nessuna penalità se non sono presenti le FAQ del gruppo del relativo corso, altrimenti vale la regola precedente, ovvero: l'utente riceve un warn con successiva indicazione della presenza delle FAQ.
                    Dopo 3 warn l'utente viene mutato per un giorno, a discrezione degli amministratori.
                    È ovviamente consigliato (nel caso non ci fossero ancora le FAQ di quel corso) di controllare i messaggi precedenti nella chat per scoprire se è già stata data risposta alla vostra domanda.
                </Text>
            </div>
        </MessageBar>
    );

    const BehaviorRulesMessage = () => (
        <MessageBar messageBarType={MessageBarType.warning}>
            <div className="mb-1 mt-2">
                <Text styles={rules}>1) Bestemmie e linguaggio vivace</Text>
            </div>
            <div className="mb-3 ml-3 mr-3">
                <Text styles={rulesText}>
                    Le bestemmie sono vietate, pena warn per quelle innocenti, e mute o ban nei casi peggiori, a discrezione degli amministratori.
                    Il linguaggio vivace è permesso finchè non diventa spam: in quel caso l'utente verrà warnato o mutato per un certo periodo di tempo,
                    sempre a discrezione degli amministratori.
                </Text>
            </div>

            <div className="mb-1"> 
                <Text styles={rules}>2) Insulti e offese</Text>
            </div>
            <div className="mb-3 ml-3 mr-3">
                <Text styles={rulesText}>
                    Sono entrambi vietati, pena warn per gli insulti / offese leggeri, mute o ban per quelli più pesanti, a discrezione degli amministratori.
                    Una nota riguardo i docenti: si può benissimo criticare (nei limiti del normale) ma non si accettano assolutamente insulti verso di essi.
                    Nell'ultimo caso specificato l'utente verrà warnato o mutato, e nei casi peggiori bannato, a discrezione degli amministratori.
                </Text>
            </div>

            <div className="mb-1"> 
                <Text styles={rules}>3) Spam e offtopic</Text>
            </div>
            <div className="mb-3 ml-3 mr-3">
                <Text styles={rulesText}>
                    Lo spam è vietato, pena warn o mute a seconda della gravità, a discrezione degli amministratori.
                    Le conversazioni offtopic sono vietate sia nei gruppi specifici dei corsi che in quelli generali degli anni accademici, anche in questo caso pena warn o mute a seconda della gravità,
                    a discrezione degli amministratori. Se volete parlare liberamente di argomenti più generali, esiste un gruppo apposito che trovate nella lista di gruppi aggiuntivi sul sito web del network.
                </Text>
            </div>
        </MessageBar>
    );

    const OtherRulesMessage = () => (
        <MessageBar messageBarType={MessageBarType.warning}>
            <div className="mb-1 mt-2"> 
                <Text styles={rules}>1) Nome e username</Text>
            </div>
            <div className="mb-3 ml-3 mr-3">
                <Text styles={rulesText}>
                    Gli utenti <u>devono essere identificabili sul network</u>, quindi è obbligatorio utilizzare un nome che sia chiaro, come
                    il nome di persona o un breve appellativo. Per quanto riguarda l'username è caldamente consigliato (ma non obbligatorio)
                    tenerlo visibile e non nascosto: in questo modo la gestione degli utenti risulta più facile agli amministratori
                    del network.
                </Text>
            </div>
            
            <div className="mb-1"> 
            <Text styles={rules}>2) Politica</Text>
            </div>
            <div className="mb-3 ml-3 mr-3">
                <Text styles={rulesText}>
                    Il network e i gruppi telegram sono nati come spazio <u>politicamente neutrale</u> e il più possibile accogliente, a disposizione degli studenti. 
                    Non sono di proprietà o vanto di alcuna lista. Chiunque manderà messaggi di propaganda elettorale e quant'altro verrà istantaneamente 
                    bannato da tutti i gruppi del network, a discrezione degli amministratori.
                </Text>
            </div>

            <div className="mb-1"> 
            <Text styles={rules}>3) Codice</Text>
            </div>
            <div className="mb-3 ml-3 mr-3">
                <Text styles={rulesText}>
                    Nei gruppi del network <u>non è permesso l'invio di <b>immagini</b> per condividere codice</u>. 
                    Se il codice in questione supera le 5 righe deve essere condiviso attraverso l'utilizzo di apposite piattaforme 
                    come quella fornita da noi (<a href="https://paste.studentiunimi.it/">Paste</a>) o meglio ancora <a href="https://gist.github.com/">Gist</a>.
                    In caso contrario (se il codice è minore o uguale di 4 righe) è permesso inviarlo tramite un semplice messaggio ma usando l'apposita formattazione
                    di testo per il codice che telegram mette a disposizione. E' permesso invece inviare screen (e non immagini scattate da cellulare) di eventuali log, shell, e simili.
                </Text>
            </div>
        </MessageBar>
    );

    return (
        <Container className="rules text-center">
            <div className="mb-4">

                <div className="mb-2">
                    <Text style={{ fontSize: FontSizes.size14 }}>Si consiglia di leggere le regole indicate prima di utilizzare uno qualsiasi dei gruppi disponibili.</Text>
                </div>
                
                <div className="mb-2">
                    <Text styles={{ root: { fontWeight: FontWeights.semibold, color: theme.palette.themePrimary } }}>Perchè abbiamo introdotto un regolamento?</Text>
                </div>

                <div className="mb-2">
                    <Text style={{ fontSize: FontSizes.size12 }}>
                        Vogliamo rendere chiari i motivi per cui abbiamo deciso di regolamentare i gruppi del nostro network.
                        Abbiamo notato che la maggior parte di essi erano tempestati di domande banali, fatte più volte al giorno, la cui risposta era facilmente trovabile.
                        Questo riduce la qualità della chat e scoraggia la partecipazione di studenti più attenti.
                        Per questo motivo abbiamo deciso di provare a limitare il fenomeno, da una parte ammonendo chi continua a fare interventi non produttivi,
                        e dall'altra fornendo un modo facile e veloce per trovare le informazioni più importanti tramite le faq di ogni insegnamento.
                    </Text>
                </div>

                <div>
                    <Text style={{ fontSize: FontSizes.size14 }}>Di seguito è possibile trovare il <Text styles={bold}>regolamento</Text> e le varie sezioni di cui è composto.</Text>
                </div>
            </div>

            <Row className="mb-3 justify-content-center">
                <Col xl={4} lg={4} md={4} sm={4} xs={12} className="mb-2">
                    <CompoundButton primary secondaryText="Domande e faq" onClick={() => setChoice("question_faq_rules")} style={colButtonStyle}>
                        Sezione
                    </CompoundButton>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4} xs={12} className="mb-2">
                    <CompoundButton primary secondaryText="Comportamento" onClick={() => setChoice("behavior_rules")} style={colButtonStyle}>
                        Sezione
                    </CompoundButton>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4} xs={12} className="mb-2">
                    <CompoundButton primary secondaryText="Altro" onClick={() => setChoice("other_rules")} style={colButtonStyle}>
                        Sezione
                    </CompoundButton>
                </Col>
            </Row>

            <div className="mb-3">
                {(choice === 'question_faq_rules') && <QuestionFaqRulesMessage />}
                {(choice === 'behavior_rules') && <BehaviorRulesMessage />}
                {(choice === 'other_rules') && <OtherRulesMessage />}
            </div>

        </Container>
    )
}

export default Rules;

