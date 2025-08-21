import LocalizedStrings, { LocalizedStringsMethods } from "react-localization"
import ILocalizationStrings from "../models/ILocalizationStrings"
import { localeIt } from "locale/it"
import { localeEn } from "locale/en"

class LocalizationService {
  private static data?: LocalizedStringsMethods & ILocalizationStrings

  public static localize = (language: string | undefined = undefined) => {
    if (!LocalizationService.data) {
      LocalizationService.data = new LocalizedStrings<ILocalizationStrings>({
        it: localeIt,
        en: localeEn,
      })
    }

    if (language != null && language !== undefined) {
      LocalizationService.data?.setLanguage(language!)
    }
  }

  public static strings = () => {
    return LocalizationService.data
  }

  public static getLanguage = () => {
    return LocalizationService.data?.getLanguage()
  }
}

export default LocalizationService
