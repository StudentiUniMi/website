import { DefaultButton, Link, Text, useTheme } from "@fluentui/react";
import JsxParser from "react-jsx-parser";
import { semibold } from "services/Fonts";
import LocalizationService from "services/LocalizationService";

const Ad = () => {
    var theme = useTheme();
    var language: string | undefined = LocalizationService.getLanguage();

    const text: { [key: string]: any } = {
        it: "👋 Ciao a tutti! I gruppi Telegram e i servizi web che offriamo sono portati avanti esclusivamente da studenti e ex-studenti volontari in Università. ✳️ Dall'anno scorso siamo riusciti a diventare un gruppo studentesco riconosciuto dall'Ateneo. ora dobbiamo raccogliere 60 firme online entro poche settimane per farci accettare la richiesta. Riuscireste ad aiutarci? Se siete studenti regolarmente iscritti potete firmare per <Text styles={semibold} style={{ color: theme.palette.themePrimary }}>008 - Network StudentiUniMi</Text>. L'operazione richiede un minuto ma per noi significa tanto. ☝️ Ricordate di premere conferma (SCHERMATA VERDE) al termine della richiesta.",
        en: "👋 Hello everyone! The Telegram groups and web services we offer are carried out exclusively by student and alumni volunteers in the University. ✳️ Since last year, we managed to become a recognized student group by the University. now we need to collect 60 online signatures within a few weeks to get our application accepted. Would you be able to help us? If you are a regularly enrolled student you can sign for <Text styles={semibold} style={{ color: theme.palette.themePrimary }}>008 - Network StudentiUniMi</Text>. The operation takes a minute but it means a lot to us. ☝️ Remember to press confirm (GREEN SCREEN) when the request is complete."
    };

    const textButton: { [key: string]: any } = {
        it: 'Aiutaci firmando qui',
        en: 'Help us by signing here'
    };

    return (
        <div style={{ backgroundColor: theme.palette.neutralLight, color: theme.palette.black }} className="py-3 px-sm-4 px-2 text-center">
            <JsxParser className="mb-2" bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={text[language!]} />
            <DefaultButton text={textButton[language!]} href={'https://to.studentiunimi.it/firma-gruppo'} iconProps={{ iconName: 'FileSymlink' }} />
        </div>
    );
};

export default Ad;