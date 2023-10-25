import { Container } from 'react-bootstrap';
import { DefaultButton, DirectionalHint, IIconProps, Icon, Separator, Text, TooltipDelay, TooltipHost, useTheme } from '@fluentui/react';
import { NextSeo } from 'next-seo';
import { bold, semibold } from 'services/Fonts';
import { CSSProperties } from 'react';
import LocalizationService from 'services/LocalizationService';
import router from 'next/router';
import GroupTypes from 'components/Atoms/GroupTypes';

const Telegram = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();

    const goBackButtonIconProps: IIconProps = { iconName: 'AiOutlineArrowLeft', styles: { root: { fontSize: 14 } } };
    const numberStyle: CSSProperties = {
        display: 'inline-block',
        backgroundColor: theme.palette.red,
        padding: '5px 20px 5px 20px',
        borderRadius: '100%'
    };
    const elementStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        gap: 20
    };
    const quotesSectionStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
        gap: 60
    };
    const quotesStyle: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    };

    return (
        <>
            <NextSeo
                title={locale?.helmet.telegram.title}
                description={locale?.helmet.telegram.description}
                canonical={'https://studentiunimi.it/telegram'}
                openGraph={{
                    url: 'https://studentiunimi.it/telegram',
                    title: locale?.helmet.telegram.title,
                    description: locale?.helmet.telegram.description,
                    site_name: 'Network StudentiUniMi',
                    type: 'website',
                    locale: language,
                    images: [
                        {
                            url: '/seo/telegram.png',
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

            <section className="telegram">
                <div className="telegram-title pt-4 pb-4">
                    <Container className="mb-5">
                        <div className="d-flex flex-row courses-title-content align-items-center" style={{ gap: 20, marginBottom: 30 }}>

                            <TooltipHost
                                content={"Go back homepage traducimi"}
                                calloutProps={{ gapSpace: 6 }}
                                delay={TooltipDelay.zero}
                                id={'0'}
                                directionalHint={DirectionalHint.bottomCenter}
                            >
                                <DefaultButton onClick={() => { router.push("/"); }} iconProps={goBackButtonIconProps} style={{ minWidth: 40 }} />
                            </TooltipHost>
                            
                            <h1>
                                <Text variant='superLarge' styles={bold} style={{ lineHeight: 1.3 }}>{locale?.telegram.title}</Text><br/>
                            </h1>
                        </div>

                        <h2>
                            <Text variant="xLargePlus" styles={semibold} style={{ lineHeight: 1.3 }}>{locale?.telegram.subtitle}</Text>
                        </h2>

                        <div style={quotesSectionStyle}>
                            <Icon iconName="RightDoubleQuote" style={{ fontSize: 48, color: theme.palette.redDark }}/>
                            <div style={quotesStyle}>
                                <Text variant="xLarge" styles={semibold} style={{ color: theme.palette.neutralSecondary, fontStyle: 'italic' }}>Ma tutti usano WhatsApp..</Text>
                                <Text variant="xLarge" styles={semibold} style={{ color: theme.palette.neutralSecondary, fontStyle: 'italic' }}>Non ho voglia di cambiare..</Text>
                                <Text variant="xLarge" styles={semibold} style={{ color: theme.palette.neutralSecondary, fontStyle: 'italic' }}>Non mi piace Telegram..</Text>
                            </div>
                        </div>

                        <div className="mb-4">
                            <Text variant="xLargePlus" styles={semibold} style={{ lineHeight: 1.3 }}>Se la maggior parte degli studenti usano WhatsApp è senza dubbio
                            un motivo aggiuntivo per motivare a spostarsi su una piattaforma più sicura, accessibile e adatta ad un mondo universitario.</Text>
                        </div>

                        <Text variant="xLargePlus" styles={bold} style={{ lineHeight: 1.3, color: theme.palette.themeDark }}>Usare un'applicazione con un colore diverso ma tantissime funzionalità aggiuntive
                        è un motivo valido per fare la transizione!</Text>
                    </Container>

                    <div className="py-4 mb-5" style={{ backgroundColor: theme.palette.neutralLighter }}>
                        <Container>
                            <Text variant="xLargePlus" styles={bold} style={{ lineHeight: 1.3, color: theme.palette.redDark }}>Ma quali sono gli svantaggi di WhatsApp?</Text>
                        </Container>
                    </div>

                    <Container className="mb-4">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

                            <div style={elementStyle}>
                                <div style={numberStyle}>
                                    <Text variant="xxLarge" styles={bold} style={{ color: theme.palette.white }}>1</Text>
                                </div>

                                <Text variant="xLarge" styles={semibold}>I nuovi studenti che accedono ai gruppi non hanno accesso alla cronologia della chat, ed è una cosa
                                impensabile per quelli dei corsi di laurea ma soprattutto dei corsi didattici! E no, un drive non sostituisce una chat lunga 4 o 5 anni o più!</Text>
                            </div>

                            <div style={elementStyle}>
                                <div style={numberStyle}>
                                    <Text variant="xxLarge" styles={bold} style={{ color: theme.palette.white }}>2</Text>
                                </div>

                                <Text variant="xLarge" styles={semibold}>Gli studenti hanno i numeri di cellulare completamente esposti, un problema grave soprattutto per studenti e studentesse da facoltà umanistiche,
                                che ogni giorno si trovano messaggi in chat e chiamate da estranei.</Text>
                            </div>

                            <div style={elementStyle}>
                                <div style={numberStyle}>
                                    <Text variant="xxLarge" styles={bold} style={{ color: theme.palette.white }}>3</Text>
                                </div>

                                <Text variant="xLarge" styles={semibold}>I media non vengono salvati lato server (vuol dire che è necessario che chi ha mandato il file
                                sia ancora disponibile), rendendoli completamente inaccessibili a futuri studenti. Per fare un esempio, con Telegram un file mandato su un gruppo rimane a disposizione
                                per sempre.</Text>
                            </div>

                            <div style={elementStyle}>
                                <div style={numberStyle}>
                                    <Text variant="xxLarge" styles={bold} style={{ color: theme.palette.white }}>4</Text>
                                </div>

                                <Text variant="xLarge" styles={semibold}>Non esiste moderazione e automatizzazione tramite utilizzo di bot; i gruppi WhatsApp vengono inondati ogni giorno
                                di spam e messaggi off-topic che rendono impossibile comunicare e reperire informazioni utili.</Text>
                            </div>

                            <div style={elementStyle}>
                                <div style={numberStyle}>
                                    <Text variant="xxLarge" styles={bold} style={{ color: theme.palette.white }}>6</Text>
                                </div>

                                <Text variant="xLarge" styles={semibold}>Limite del numero di utenti sui gruppi: ulteriore enorme problema per facoltà con migliaia e migliaia di studenti.</Text>
                            </div>

                            <div style={elementStyle}>
                                <div style={numberStyle}>
                                    <Text variant="xxLarge" styles={bold} style={{ color: theme.palette.white }}>7</Text>
                                </div>

                                <Text variant="xLarge" styles={semibold}>Accessibilità dei gruppi inesistente, di fatto vengono utilizzati i nostri servizi (che si trovano facilmente tramite motori di ricerca) per andare a trovare dei gruppi e risorse letteralmente introvabili, ahimè ironia della sorte.</Text>
                            </div>

                        </div>
                    </Container>

                    <Separator />

                    <Container className="mt-4 mb-4 text-center">
                        <Text variant='superLarge' styles={bold} style={{ lineHeight: 1.3 }}>Unisciti alle migliaia di studenti che hanno già effettuato la transizione a Telegram e contribuisci a creare
                        un supporto per il futuro agli studenti che verranno dopo di te.</Text><br/>
                    </Container>

                    <div className="mb-4">
                        <GroupTypes page="telegram" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Telegram;