import './slider.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import LocalizationService from "../../../services/LocalizationService";
import LargeCard from '../../LargeCard';

const news: any[] = [
    { 
        title: { it: "Obbligo del Green Pass", en: "" }, 
        description: { it: "Vi ricordiamo che da settembre in tutte le università per svolgere una qualsiasi attività in presenza (compreso l'accesso alle aule studio) sarà necessario possedere il green pass. L'assenza di green pass non è un motivo valido per svolgere un esame a distanza.", en: "" }, 
        date: { it: "09 Agosto, 2021", en: "" }, 
        click: { it: "Clicca qui per maggiori informazioni", en: "" }, 
        type: { it: "Notizia", en: "" }, 
        img: "vaccine_card_1.png", 
        previewImg: "news.png", 
        link: "https://www.mur.gov.it/it/news/lunedi-09082021/green-pass-obbligatorio-attivita-presenza-universita-e-afam" 
    },
    { 
        title: { it: "Iniziative a supporto degli studenti", en: "" }, 
        description: { it: "Per venire incontro agli studenti la Regione Lombardia si è attivata con una serie di iniziative a supporto degli studenti, tra cui agende prioritarie per la vaccinazione. Alternativamente al vaccino un altro modo per ottenere un green pass valido per 48 ore è attraverso un tampone negativo, vi ricordiamo però che questa opzione vi costerà ogni volta almeno 15€ circa.", en: "" }, 
        date: { it: "10 Agosto, 2021", en: "" }, 
        click: { it: "Clicca qui per maggiori informazioni", en: "" }, 
        type: { it: "Notizia", en: "" }, 
        img: "vaccine_card_2.jpg", 
        previewImg: "news.png", 
        link: "https://www.docdroid.net/zm5C1c5/20210810-piano-vaccini-ampamp-universita-verfin-pdf" 
    },
    /* { title: { it: "", en: "" }, description: { it: "", en: "" }, date: { it: "", en: "" }, click: { it: "", en: "" }, type: { it: "", en: "" }, img: "", previewImg: "", link: "" } */
];

const Slider = () => {
    var language: string = LocalizationService.getLanguage();

    return (
        <Swiper pagination={true} navigation={true} autoplay={{ "delay": 5000, "disableOnInteraction": false }} loop={true} autoHeight={true} className="mySwiper">
            {news.map(x => 
                <SwiperSlide>
                    <div style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: 800}}>
                        <LargeCard title={x.title[language]} description={x.description[language]} date={x.date[language]} click={x.click[language]} type={x.type[language]} img={x.img} previewImg={x.previewImg} link={x.link} />
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default Slider;