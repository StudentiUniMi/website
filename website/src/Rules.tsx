import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';

const bold = {
    fontWeight: 500,
    color: '#c50f1f'
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
                
                    <div style={bold} className="mb-2">Dove trovo le faq dei corsi?</div>
                    <p className="mb-3">
                        <p className="mb-0">Nella sezione dei corsi è possibile trovare le faq disponibili; al momento solo Informatica ne è dotata.</p> 
                        <p className="mb-0">Ovviamente se un gruppo di un corso didattico del network non ha faq disponibili non vuol dire che sia possibile chiedere domande banali e quant'altro.
                        Siete invitati a cercare autonomamente e magari andando nelle chat precedenti per trovare risposte inerenti.
                        In caso non si trovi nulla sarà possibile chiedere senza problemi il vostro dubbio o domanda.</p> 
                    </p>
                    <p className="mb-3">Di seguito è possibile trovare il regolamento.</p>

                    
                    <div id="accordion" className="mr-3 ml-3">

                            {/* Regole riguardo domande e faq */}
                            <div className="card mb-1" style={{backgroundColor: '#faf9f8;'}}>
                                <button className="btn btn-link text-decoration-none" style={{padding: 0}} data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <div className="card-header p-2" id="headingOne">
                                        <div className="mb-0">
                                            <Text>Regole riguardo domande e faq</Text>
                                        </div>
                                    </div>
                                </button>
                            

                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        
                                        <p className="mb-1" style={{ fontWeight: 500 }}>Domanda con risposta indicata sul sito del docente</p>
                                        <p className="mb-3 ml-3 mr-3">
                                            L'utente riceve un warn con successiva indicazione su dove trovare l'informazione richiesta.
	                                        Dopo 3 warn l'utente viene mutato per un giorno, a discrezione degli amministratori.
                                        </p>

                                        <p className="mb-1" style={{ fontWeight: 500 }}>Domanda riguardo informazioni banali e già chieste precedentemente nella chat</p>
                                        <p className="mb-3 ml-3 mr-3">
                                            Nessuna penalità se non sono presenti le FAQ del gruppo del relativo corso, altrimenti vale la regola precedente, ovvero: l'utente riceve un warn con successiva indicazione della presenza delle FAQ.
                                            Dopo 3 warn l'utente viene mutato per un giorno, a discrezione degli amministratori.
                                            È ovviamente consigliato (nel caso non ci fossero ancora le FAQ di quel corso) di controllare i messaggi precedenti nella chat per scoprire se è già stata data risposta alla vostra domanda.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Regole comportamentali */}
                            <div className="card mb-1" style={{backgroundColor: '#faf9f8;'}}>
                                <button className="btn btn-link text-decoration-none" style={{padding: 0}} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <div className="card-header p-2" id="headingTwo">
                                        <div className="mb-0">
                                            <Text>Regole comportamentali</Text>
                                        </div>
                                    </div>
                                </button>
                            

                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        
                                        <p className="mb-1" style={{ fontWeight: 500 }}>Bestemmie e linguaggio vivace</p>
                                        <p className="mb-3 ml-3 mr-3">
                                            Le bestemmie sono vietate, pena warn per quelle innocenti, e mute o ban nei casi peggiori, a discrezione degli amministratori. 
                                            Il linguaggio vivace è permesso finchè non diventa spam: in quel caso l'utente verrà warnato o mutato per un certo periodo di tempo, 
                                            sempre a discrezione degli amministratori.
                                        </p>
                                        
                                        <p className="mb-1" style={{ fontWeight: 500 }}>Insulti e offese</p>
                                        <p className="mb-3 ml-3 mr-3">
                                            Sono entrambi vietati, pena warn per gli insulti / offese leggeri, mute o ban per quelli più pesanti, a discrezione degli amministratori.
	                                        Una nota riguardo i docenti: si può benissimo criticare (nei limiti del normale) ma non si accettano assolutamente insulti verso di essi. 
                                            Nell'ultimo caso specificato l'utente verrà warnato o mutato, e nei casi peggiori bannato, a discrezione degli amministratori.
                                        </p>

                                        <p className="mb-1" style={{ fontWeight: 500 }}>Spam e offtopic</p>
                                        <p className="mb-3 ml-3 mr-3">
                                            Lo spam è vietato.
                                            Le conversazioni offtopic sono vietate nei gruppi specifici dei corsi e anche in quelli generali degli anni accademici.
                                            Se volete parlare liberamente di argomenti più generali, esiste un gruppo apposito che trovate nella lista di gruppi sul sito web del network.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Altre regole */}
                            <div className="card mb-1" style={{backgroundColor: '#faf9f8;'}}>
                                <button className="btn btn-link text-decoration-none" style={{padding: 0}} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <div className="card-header p-2" id="headingThree">
                                        <div className="mb-0">
                                            <Text>Altre regole</Text>
                                        </div>
                                    </div>
                                </button>
                            

                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        
                                        <p className="mb-1" style={{ fontWeight: 500 }}>Nome e username</p>
                                        <p className="mb-3 ml-3 mr-3">
                                            Gli utenti devono essere identificabili sul network, quindi è obbligatorio utilizzare un nome che sia chiaro, come
                                            il nome di persona o un breve appellativo. Per quanto riguarda l'username è caldamente consigliato (ma non obbligatorio)
                                            tenerlo visibile e non nascosto: in questo modo la gestione degli utenti risulta più facile agli amministratori
                                            del network.
                                        </p>
                                        
                                        <p className="mb-1" style={{ fontWeight: 500 }}>Politica</p>
                                        <p className="mb-3 ml-3 mr-3">
                                            Il network e i gruppi telegram sono nati come spazio politicamente neutrale e il più possibile accogliente, a disposizione degli studenti. 
                                            Non sono di proprietà o vanto di alcuna lista. Chiunque manderà messaggi di propaganda elettorale e quant'altro verrà istantaneamente 
                                            bannato da tutti i gruppi del network, a discrezione degli amministratori.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                
                
                </Text>
            </div>

        </Container>
    )
}

export default Rules;

