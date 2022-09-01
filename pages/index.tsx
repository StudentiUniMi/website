import { NextSeo } from 'next-seo';
import { GetServerSideProps } from 'next/types';
import LocalizationService from "../services/LocalizationService";
import Faqs from '../components/Home/Faqs';
import MainSection from '../components/Home/MainSection';
import FirstSection from '../components/Home/FirstSection';
import SecondSection from '../components/Home/SecondSection';
import ThirdSection from '../components/Home/ThirdSection';
import FourthSection from '../components/Home/FourthSection';
import TelegramSection from '../components/Home/TelegramSection';
import Wikipedia from '../components/Home/Wikipedia';
import UnimiaStudentiUnimi from '../components/Home/UnimiaStudentiUnimi';
import { getStringDegrees } from 'services/Requests';

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
                <MainSection degrees={props.degrees} />

                <TelegramSection />

                <FirstSection />

                <SecondSection />

                <UnimiaStudentiUnimi />

                <Wikipedia />

                <ThirdSection />

                <FourthSection />

                <Faqs />
            </section>
        </>
    )
};

export const getServerSideProps: GetServerSideProps = async () => {
    let stringDegreesResult = await getStringDegrees();
    let degrees: string[] = [];

    if (stringDegreesResult.status !== 200) {
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