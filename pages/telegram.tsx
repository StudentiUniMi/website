import { Container } from 'react-bootstrap';
import { DefaultButton, DirectionalHint, IIconProps, Icon, Text, TooltipDelay, TooltipHost, useTheme } from '@fluentui/react';
import { NextSeo } from 'next-seo';
import { bold, semibold } from 'services/Fonts';
import { CSSProperties } from 'react';
import LocalizationService from 'services/LocalizationService';
import router from 'next/router';

const Telegram = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();

    const goBackButtonIconProps: IIconProps = { iconName: 'AiOutlineArrowLeft', styles: { root: { fontSize: 14 } } };
    const numberStyle: CSSProperties = {
        display: 'inline-block',
        backgroundColor: theme.palette.redDark,
        padding: '10px 20px 10px 20px',
        borderRadius: '100%'
    };
    const elementStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    };
    const quotesSectionStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
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
                        <div className="d-flex flex-row courses-title-content" style={{ gap: 20, marginBottom: 30 }}>

                            <div className="d-flex flex-column" style={{ gap: 10 }}>

                                <div className="d-flex flex-row degree-buttons-menu" style={{ gap: 8 }}>
                                    <TooltipHost
                                        content={"Go back homepage traducimi"}
                                        calloutProps={{ gapSpace: 6 }}
                                        delay={TooltipDelay.zero}
                                        id={'0'}
                                        directionalHint={DirectionalHint.bottomCenter}
                                    >
                                        <DefaultButton onClick={() => { router.push("/"); }} iconProps={goBackButtonIconProps} style={{ minWidth: 40, marginTop: 5 }} />
                                    </TooltipHost>
                                </div>
                            </div>
                                
                            <div className="d-flex align-items-center">
                                <h1>
                                    <Text variant='xxLargePlus' styles={bold} style={{ lineHeight: 1.3 }}>{locale?.telegram.title}</Text><br/>
                                </h1>
                            </div>
                            
                                
                        </div>

                        <h2>
                            <Text variant="xLargePlus" styles={semibold} style={{ lineHeight: 1.3 }}>{locale?.telegram.subtitle}</Text>
                        </h2>

                        <div style={quotesSectionStyle}>
                            <Icon iconName="RightDoubleQuote" style={{ fontSize: 48, color: theme.palette.redDark }}/>
                            <div style={quotesStyle}>
                                <Text variant="xLarge" styles={semibold} style={{ color: theme.palette.neutralSecondary, fontStyle: 'italic' }}>Ma tutti usano WhatsApp..</Text>
                                <Text variant="xLarge" styles={semibold} style={{ color: theme.palette.neutralSecondary, fontStyle: 'italic' }}>Non ho voglia di cambiare..</Text>
                                <Text variant="xLarge" styles={semibold} style={{ color: theme.palette.neutralSecondary, fontStyle: 'italic' }}>Telegram non si capisce..</Text>
                            </div>
                        </div>
                    </Container>

                    <div className="py-4 mb-4" style={{ backgroundColor: theme.palette.neutralLighter }}>
                        <Container>
                            <Text variant="xLargePlus" styles={bold} style={{ lineHeight: 1.3, color: theme.palette.redDark }}>Ma quali sono gli svantaggi?</Text>
                        </Container>
                    </div>

                    <Container>
                        <div style={elementStyle}>
                            <div style={numberStyle}>
                                <Text variant="xxLarge" styles={bold} style={{ color: theme.palette.white }}>1</Text>
                            </div>

                            <Text variant="xLarge" styles={semibold}>Dennis</Text>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Telegram;