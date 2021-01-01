import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';

const bold = {
    fontWeight: 500,
    color: '#d13438'
};

const Rules = () => {
    return (
        <Container className="rules text-center">
            <Text style={{ fontSize: FontSizes.size16 }}>
                <p className="mb-0">
                    Qui è possibile trovare il regolamento del network.
                </p>
                <p>
                    Si consiglia di leggere le regole indicate prima di utilizzare uno qualsiasi dei gruppi disponibili.
                </p>
            </Text>

            <div style={{ 'marginLeft': '15%', 'marginRight': '15%'}}>
                <Text style={{ fontSize: FontSizes.size14 }}>


                    <div style={bold} className="mb-2">Perchè abbiamo introdotto un regolamento?</div>
                    <p className="mb-2">
                        <p className="mb-0">Vogliamo rendere chiari i motivi per cui abbiamo deciso di regolamentare i gruppi del nostro network.</p>
                        <p className="mb-0">Abbiamo notato che la maggior parte di essi erano tempestati di domande banali, fatte più volte al giorno, la cui risposta era facilmente trovabile.
                        Questo riduce la qualità della chat e scoraggia la partecipazione di studenti più attenti.</p> 
                        <p className="mb-0">Per questo motivo abbiamo deciso di provare a limitare il fenomeno, da una parte ammonendo chi continua a fare interventi non produttivi, e dall'altra fornendo un modo facile e veloce per trovare le informazioni più importanti, 
                        tramite le pagine faq di ogni insegnamento.</p>
                    </p>
                
                    <div style={bold} className="mb-2">Dove trovo le pagine faq dei corsi?</div>
                    <p className="mb-2">
                        <p className="mb-0">Nella sezione dei corsi è possibile trovare le faq disponibili; al momento solo Informatica ne è dotata.</p> 
                        <p className="mb-0">Ovviamente se un gruppo di un corso didattico del network non ha faq disponibili non vuol dire che sia possibile chiedere domande banali e quant'altro.
                        Siete invitati a cercare autonomamente e magari andando nelle chat precedenti per trovare risposte inerenti.
                        In caso non si trovi nulla sarà possibile chiedere senza problemi il vostro dubbio o domanda.</p> 
                    </p>

                    <p>A breve sarà disponibile il regolamento in questa sezione. Fino ad allora fate riferimento al .pdf elencato nella home.</p>
                
                
                </Text>
            </div>

        </Container>
    )
}

export default Rules;

