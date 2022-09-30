import React from "react";
import { Text, Link, Icon } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { semibold } from '../services/Fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import { Image } from 'office-ui-fabric-react/lib-commonjs/Image';
import { NextSeo } from 'next-seo';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

const Rules = () => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();

    const imageProperties = { display: 'inline-block', width: 240 };
    const subHeader = { backgroundColor: theme.palette.neutralLight, padding: '10px 0px' };
    const finalBox = { backgroundColor: theme.palette.neutralLighter, padding: 20 };

    return (
        <>
            <NextSeo
                title={locale?.helmet.rules.title}
                description={locale?.helmet.rules.description}
                canonical={"https://studentiunimi.it/rules"}
                openGraph={{
                    url: "https://studentiunimi.it/rules",
                    title: locale?.helmet.rules.title,
                    description: locale?.helmet.rules.description,
                    site_name: 'Network StudentiUniMi',
                    type: 'website',
                    locale: language,
                    images: [
                        {
                            url: '/seo/rules.png',
                            type: 'image/png',
                        }
                    ],
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

            <section className="rules">
                <div className="pt-5 pb-5" style={{ backgroundColor: theme.palette.themePrimary }}>
                    <Container>

                        <Row>
                            <Col lg={4} className="text-center">
                                <Image id="logo" className="mb-2" src={'/images/rules.png'} style={imageProperties} />
                            </Col>

                            <Col lg={8}>
                                <div className="mb-2">
                                    <Text variant="xLargePlus" style={{ color: theme.palette.white }}>{locale?.rules.text1}</Text>
                                </div>

                                <div>
                                    <Text variant="large" style={{ color: theme.palette.white }}>{locale?.rules.text2}</Text>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>

                <div className="pb-5">

                    <div className="mb-4">
                        <div className="mb-4" style={subHeader}>
                            <Container className="d-flex flex-row align-items-center" style={{ gap: 5}}>
                                <Text variant="xLarge"><Icon iconName="AiOutlineFileText" className="d-flex" /></Text>
                                <Text variant="xLarge">{locale?.rules.rules.title}</Text>
                            </Container>
                        </div>
                        <Container>
                            <div className="d-flex flex-column" style={{ gap: 20 }}>
                                <div>
                                    <div className="mb-2">
                                        <Text variant="mediumPlus" styles={semibold}>Comportamenti tossici</Text>
                                    </div>
                                    <div>
                                        <Text variant="medium">
                                            È vietata ogni forma di contenuto offensivo o blasfemo, sia nei messaggi che nel profilo personale (nome utente, foto e descrizione). Sono altresì vietati insulti verso altri utenti, siano essi studenti, docenti o altre figure. La discriminazione sociale in qualunque forma non è tollerata nei gruppi del network. Gli utenti che interagiscono al fine di provocare, disturbare, creare disagio o disinformazione verranno allontanati.
                                        </Text>
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-2">
                                        <Text variant="mediumPlus" styles={semibold}>Interazioni nelle chat</Text>
                                    </div>
                                    <div>
                                        <Text variant="medium">
                                            Nelle chat è vietato assumere i seguenti comportamenti:
                                            <ul>
                                                <li>inviare dei messaggi ripetuti con il solo scopo di disturbare altri utenti (flooding);</li>
                                                <li>aggiungere bot di qualsiasi tipo senza l'autorizzazione del Consiglio Direttivo;</li>
                                                <li>abusare dei comandi e delle funzionalità messe a disposizione dal bot di gestione.</li>
                                            </ul>
                                        </Text>
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-2">
                                        <Text variant="mediumPlus" styles={semibold}>Spam</Text>
                                    </div>
                                    <div className="mb-2">
                                        <Text variant="medium">
                                            Non è permesso l'invio di messaggi, immagini, video o link che non hanno nessuna attinenza con i gruppi del network e non sono in linea con le finalità del progetto.Dal momento che il termine spam può risultare molto generico, di seguito sono elencate le tipologie di contenuti severamente vietati:
                                            <ul>
                                                <li>a</li>
                                                <li>b</li>
                                                <li>c</li>
                                                <li>d</li>
                                            </ul>
                                        </Text>
                                    </div>
                                    <div className="mb-2">
                                        <Text variant="medium">
                                            Per quanto riguarda le attività universitarie:
                                            <ul>
                                                <li>a</li>
                                                <li>b</li>
                                                <li>c</li>
                                            </ul>
                                        </Text>
                                    </div>
                                    <div>
                                        <Text variant="medium">
                                            Se pensi di aver bisogno di un'eccezione alle regole essendo il contenuto che vuoi inviare di particolare importanza o rilevanza per il gruppo in cui stai scrivendo, contatta preventivamente un amministratore del gruppo per avere l'autorizzazione.
                                        </Text>
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-2">
                                        <Text variant="mediumPlus" styles={semibold}>Contenuti condivisi</Text>
                                    </div>
                                    <div>
                                        <Text variant="medium">
                                            È vietato inviare contenuti NSFW (Not Safe For Work), ovvero materiale sessualmente esplicito, volgare o ritenuto potenzialmente offensivo dalla collettività. La responsabilità civile e penale per tutti i contenuti inviati sui gruppi Telegram è personale. Il Network si impegna, nei suoi limiti, a garantire il pieno rispetto della legalità.
                                        </Text>
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-2">
                                        <Text variant="mediumPlus" styles={semibold}>Off-Topic</Text>
                                    </div>
                                    <div>
                                        <Text variant="medium">
                                            I messaggi devono essere inerenti al gruppo in cui vengono inviati. Se non lo sono, potrebbero essere considerati "off-topic" e cancellati. Se si vuole parlare di un argomento legato all'università di cui non esiste ancora un gruppo, è possibile suggerirne la creazione a un amministratore. Esiste un gruppo dedicato in cui si può discutere di qualsiasi argomento, pur rispettando le altre regole qui riportate.
                                        </Text>
                                    </div>
                                </div>


                            </div>
                        </Container>
                    </div>

                    <div className="mb-4">
                        <div className="mb-4" style={subHeader}>
                            <Container className="d-flex flex-row align-items-center" style={{ gap: 5 }}>
                                <Text variant="xLarge"><Icon iconName="AiOutlineEdit" className="d-flex" /></Text>
                                <Text variant="xLarge">{locale?.rules.measures.title}</Text>
                            </Container>
                        </div>
                        <Container>
                            <div className="d-flex flex-column mb-3" style={{ gap: 20 }}>
                                <Text variant="medium">
                                    In caso di violazioni del regolamento, lo staff prenderà i provvedimenti necessari.
                                </Text>
                                <Text variant="medium">
                                    Le contromisure prese dallo staff dipendono dal contesto, dal tipo di infrazione e dal comportamento tenuto dall'utente fino a quel momento. Ne consegue che, per una situazione simile, due utenti possano essere gestiti in maniera diversa. In linea generale, se l'infrazione non è grave ed è la prima volta per l'utente, verrà scelto un provvedimento leggero, come ad esempio un avvertimento. Per infrazioni gravi e ripetute si adotteranno misure più serie, fino all'allontamento temporaneo o permanente da alcuni o tutti i gruppi del network.
                                </Text>
                                <Text variant="medium">
                                    I provvedimenti più gravi vengono generalmente presi in concerto con più amministratori. Ogni tipo di intervento viene internamente archiviato e notificato al Comitato Amministrativo. Per appellarsi o avere maggiori informazioni su decisioni ritenute ingiuste, è attiva una casella email: appeal@studentiunimi.it.
                                </Text>
                            </div>
                            <div className="mb-2">
                                <Text variant="mediumPlus" styles={semibold}>Contromisure</Text>
                                <Text variant="medium">
                                    <ul>
                                        <li>a</li>
                                        <li>b</li>
                                        <li>c</li>
                                        <li>d</li>
                                        <li>e</li>
                                    </ul>
                                </Text>
                            </div>
                        </Container>
                    </div>

                    <div>
                        <div className="mb-4" style={subHeader}>
                            <Container className="d-flex flex-row align-items-center" style={{ gap: 5 }}>
                                <Text variant="xLarge"><Icon iconName="AiOutlineStar" className="d-flex" /></Text>
                                <Text variant="xLarge">{locale?.rules.advices.title}</Text>
                            </Container>
                        </div>
                        <Container>
                            <div className="mb-3">
                                <Text variant="medium">
                                    <ul>
                                        <li>a</li>
                                        <li>b</li>
                                            <ul>
                                                <li>b1</li>
                                                <li>b2</li>
                                            </ul>
                                        <li>c</li>
                                        <li>d</li>
                                        <li>e</li>
                                        <li>f</li>
                                        <li>g</li>
                                        <li>h</li>
                                        <li>i</li>
                                        <li>l</li>
                                        <li>m</li>
                                    </ul>
                                </Text>
                            </div>
                        </Container>
                    </div>

                    <div style={finalBox}>
                        <Container className="d-flex flex-column text-center" style={{ gap: 10 }}>
                            <div className="d-flex flex-column">
                                <Text variant="large">
                                    {locale?.rules.lastSection.title1}
                                </Text>
                                <Text variant="large">
                                    {locale?.rules.lastSection.title2}
                                </Text>
                            </div>
                            <Text variant="medium">
                                <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.rules.lastSection.description} />
                            </Text>
                        </Container>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Rules;

