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





                    settingsPanel: {
                        settings: "Impostazioni",
                        changeTheme: "Cambia il tema",
                        darkTheme: "Modalità scura",
                        lightTheme: "Modalità chiara",
                        selectLanguage: "Seleziona la lingua"
                    }
                },
                en: {







                    settingsPanel: {
                        settings: "Settings",
                        changeTheme: "Change theme",
                        darkTheme: "Dark Mode",
                        lightTheme: "Light Mode",
                        selectLanguage: "Select the language"

                    }
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