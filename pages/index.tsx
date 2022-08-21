import { initializeIcons } from '@fluentui/react';
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
    return (
        <div className="pt-5 home">
            <MainSection />

            <TelegramSection />

            <FirstSection />

            <SecondSection />

            <UnimiaStudentiUnimi />

            <Wikipedia />

            <ThirdSection />

            <FourthSection />

            <Faqs />
        </div>
    )
};

export default HomeView;