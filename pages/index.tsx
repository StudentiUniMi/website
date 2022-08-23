import { initializeIcons } from '@fluentui/react';
import { NextSeo } from 'next-seo';
import LocalizationService from "../src/services/LocalizationService";
import Faqs from '../src/components/Home/Faqs';
import MainSection from '../src/components/Home/MainSection';
import FirstSection from '../src/components/Home/FirstSection';
import SecondSection from '../src/components/Home/SecondSection';
import ThirdSection from '../src/components/Home/ThirdSection';
import FourthSection from '../src/components/Home/FourthSection';
import TelegramSection from '../src/components/Home/TelegramSection';
import Wikipedia from '../src/components/Home/Wikipedia';
import UnimiaStudentiUnimi from '../src/components/Home/UnimiaStudentiUnimi';

initializeIcons();

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