import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import ILocalizationStrings from '../data/ILocalizationStrings';

class LocalizationService
{
    private static data?: LocalizedStringsMethods & ILocalizationStrings

    static localize = (language: string | undefined = undefined) => 
    {
        if(LocalizationService.data == null)
        {
            LocalizationService.data = new LocalizedStrings<ILocalizationStrings>({
                it: {



                    headerMenuItems: {
                        home: "Home",
                        aboutUs: "Chi siamo",
                        rules: "Regolamento",
                        courses: "Corsi",
                        services: "Servizi",
                        additionalGroups: "Gruppi extra",
                        rapresentatives: "Rappresentanti",
                        contributors: "Contributori"
                    },
                    settingsPanel: {
                        settings: "Impostazioni",
                        changeTheme: "Cambia il tema",
                        darkTheme: "Modalità scura",
                        lightTheme: "Modalità chiara",
                        selectLanguage: "Seleziona la lingua"
                    },
                    footer: {}
                },




                en: {




                    headerMenuItems: {
                        home: "Home",
                        aboutUs: "About Us",
                        rules: "Regolamento",
                        courses: "Courses",
                        services: "Services",
                        additionalGroups: "Extra groups",
                        rapresentatives: "Rapresentatives",
                        contributors: "Contributors"
                    },
                    settingsPanel: {
                        settings: "Settings",
                        changeTheme: "Change theme",
                        darkTheme: "Dark Mode",
                        lightTheme: "Light Mode",
                        selectLanguage: "Select the language"
                    },
                    footer: {}
                }
            })
        }   
        

        if(language != null)
        {
            LocalizationService.data.setLanguage(language!);
        }
    }

    static strings = () =>
    {
        return LocalizationService.data!
    }
}

export default LocalizationService