import { Container } from 'react-bootstrap';
import { DefaultButton, DirectionalHint, IIconProps, PrimaryButton, Text, TooltipDelay, TooltipHost, useTheme } from '@fluentui/react';
import { NextSeo } from 'next-seo';
import { semibold } from 'services/Fonts';
import Image from 'next/image';
import LocalizationService from 'services/LocalizationService';
import router from 'next/router';

const Telegram = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();

    const goBackButtonIconProps: IIconProps = { iconName: 'AiOutlineArrowLeft', styles: { root: { fontSize: 14 } } };

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
                                <div className="degree-title pt-4 pb-4">
                    <Container>
                        <div className="d-flex flex-row courses-title-content" style={{ gap: 20 }}>

                            <div className="d-flex flex-column" style={{ gap: 10 }}>

                                <div className="d-flex flex-row degree-buttons-menu" style={{ gap: 8 }}>
                                    <TooltipHost
                                        content={locale?.courses.degree.goBack}
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
                                    <Text variant='xLargePlus' style={{ lineHeight: 1.3 }}>{locale?.courses.degree.title}</Text><br/>
                                    <Text variant="superLarge" style={{ lineHeight: 1.3, fontWeight: 700, color: theme.palette.themeDarkAlt }}>Dennis</Text>
                                </h1>
                            </div>
                                
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Telegram;