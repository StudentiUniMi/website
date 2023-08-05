import { NextSeo } from 'next-seo';
import { GetServerSideProps } from 'next/types';
import { getStringDegrees } from 'services/Requests';
import LocalizationService from "../services/LocalizationService";
import Faqs from '../components/Home/Faqs';
import Landing from '../components/Home/Landing';
import Section1 from '../components/Home/Section1';
import Section2 from '../components/Home/Section2';
import Section3 from '../components/Home/Section3';
import Section4 from '../components/Home/Section4';
import Telegram from '../components/Home/Telegram';
import Wikipedia from '../components/Home/Wikipedia';
import UnimiaStudentiUnimi from '../components/Home/UnimiaStudentiUnimi';

interface Props {
    degrees: string[]
};

const HomeView = (props: Props) => {
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();

    return (
        <>
            <NextSeo
                title={locale?.helmet.homepage.title}
                description={locale?.helmet.homepage.description}
                canonical={"https://studentiunimi.it/"}
                openGraph={{
                    url: "https://studentiunimi.it/",
                    title: locale?.helmet.homepage.title,
                    description: locale?.helmet.homepage.description,
                    site_name: 'Network StudentiUniMi',
                    type: 'website',
                    locale: language,
                    images: [
                        {
                            url: '/logo/preview_logo.png',
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

            <section className="home">
                <Landing degrees={props.degrees} />

                <Telegram />

                <Section1 />

                <Section2 />

                <UnimiaStudentiUnimi />

                <Wikipedia />

                <Section3 />

                <Section4 />

                <Faqs />
            </section>
        </>
    )
};

export const getServerSideProps: GetServerSideProps = async () => {
    let stringDegreesResult = await getStringDegrees();
    let degrees: Array<string> = [];

    // Fill string degrees with default ones in case of API error
    if (stringDegreesResult.error) {
        degrees = [
            'informatica',
            'fisica',
            'informatica musicale',
            'matematica',
            'informatica per la comunicazione digitale',
            'bioinformatics',
            'sicurezza informatica',
            "infermieristica",
            "scienze delle professioni sanitarie tecniche diagnostiche",
            "scienze chimiche",
            "scienze della produzione e protezione delle piante",
            "medical biotechnology and molecular medicine",
            "international politics, law and economics",
            "finance and economics (mef)",
            "infermieristica pediatrica",
            "scienza, tecnica e didattica dello sport",
            "scienze internazionali e istituzioni europee (sie)",
            "scienze dei servizi giuridici",
            "international politics, law and economics"
        ];
    } else {
        degrees = stringDegreesResult.value ?? [];
    }

    return { 
        props: { 
            degrees: degrees
        } 
    };
};

export default HomeView;