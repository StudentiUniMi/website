import { initializeIcons } from '@fluentui/react';
import Faqs from '../components/Home/Faqs';
import MainSection from '../components/Home/MainSection';
import FirstSection from '../components/Home/FirstSection';
import SecondSection from '../components/Home/SecondSection';
import ThirdSection from '../components/Home/ThirdSection';
import FourthSection from '../components/Home/FourthSection';
import TelegramSection from '../components/Home/TelegramSection';
import Wiki from '../components/Home/Wiki';
import UnimiaStudentiUnimi from '../components/Home/UnimiaStudentiUnimi';

initializeIcons();

const HomeView = () => {
    return (
        <div className="pt-5 home">
            <MainSection />

            <TelegramSection />

            <FirstSection />

            <SecondSection />

            <UnimiaStudentiUnimi />

            <Wiki />

            <ThirdSection />

            <FourthSection />

            <Faqs />
        </div>
    )
};

export default HomeView;