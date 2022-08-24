import { NextSeo } from 'next-seo';
import LocalizationService from "../src/services/LocalizationService";
import Faqs from '../components/Home/Faqs';
import MainSection from '../components/Home/MainSection';
import FirstSection from '../components/Home/FirstSection';
import SecondSection from '../components/Home/SecondSection';
import ThirdSection from '../components/Home/ThirdSection';
import FourthSection from '../components/Home/FourthSection';
import TelegramSection from '../components/Home/TelegramSection';
import Wikipedia from '../components/Home/Wikipedia';
import UnimiaStudentiUnimi from '../components/Home/UnimiaStudentiUnimi';

const HomeView = () => {
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
                    locale: language, // TODO: Check if this works, and add keywords
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
                <MainSection />

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

export default HomeView;