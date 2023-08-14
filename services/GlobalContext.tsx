import { createContext, useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Theme, addDays } from "./Utils";
import { PartialTheme, loadTheme } from "@fluentui/react";
import { buildDarkTheme, buildLightTheme } from "./Themes";
import LocalizationService from "./LocalizationService";

export interface Context {
    theme: string,
    palette: string,
    language: string,
    lightTheme: PartialTheme,
    darkTheme: PartialTheme,
    isPolicyAccepted: boolean,
    isPolicyDialogOpen: boolean,
    changeTheme: (theme: string) => void,
    changePalette: (paletteId: string) => void,
    changeLanguage: (language: string) => void,
    acceptPrivacyPolicy: () => void,
    togglePolicyDialog: () => void
};

const defaultState = { 
    theme: "light",
    palette: "a",
    language: "it",
    lightTheme: {},
    darkTheme: {},
    isPolicyAccepted: false, 
    isPolicyDialogOpen: false, 
    changeTheme: () => {},
    changePalette: () => {},
    changeLanguage: () => {},
    acceptPrivacyPolicy: () => {}, 
    togglePolicyDialog: () => {}
};

const GlobalContext = createContext<Context>(defaultState);

export const GlobalProvider = ({ children }: any) => {
    const [cookies, setCookie] = useCookies();
    const date: Date = addDays(new Date(), 90);
    const policyDate: Date = addDays(new Date(), 360);
    
    const [isPolicyAccepted, setIsPolicyAccepted] = useState<boolean>(cookies["isPolicyAccepted"] === 'true' ? true : false ?? false);
    const [isPolicyDialogOpen, setIsPolicyDialogOpen] = useState<boolean>(false);

    const [theme, setTheme] = useState<string>(cookies.theme ?? Theme.LIGHT);
    const [palette, setPalette] = useState<string>(cookies.palette ?? "a");
    const [language, setLanguage] = useState<string>(cookies.language ?? "it");

    const [lightTheme, setLightTheme] = useState<PartialTheme>(buildLightTheme(palette));
    const [darkTheme, setDarkTheme] = useState<PartialTheme>(buildDarkTheme(palette));

    const changeTheme = useCallback((theme: string) => {
        if (theme === Theme.LIGHT) {
            setTheme(Theme.DARK);
            setCookie("theme", Theme.DARK, { path: "/", expires: date });
        } else if (theme === Theme.DARK) {
            setTheme(Theme.LIGHT);
            setCookie("theme", Theme.LIGHT, { path: "/", expires: date });
        }
    }, [setTheme]);

    const changePalette = useCallback((paletteId: string) => {
        setPalette(paletteId);
        setLightTheme(buildLightTheme(paletteId));
        setDarkTheme(buildDarkTheme(paletteId));
        setCookie("palette", paletteId, { path: "/", expires: date });
    }, [setPalette, setLightTheme, setDarkTheme]);

    const changeLanguage = useCallback((language: string) => {
        setLanguage(language);
        LocalizationService.localize(language);
        setCookie("language", language, { path: "/", expires: date });
    }, [setLanguage]);

    const togglePolicyDialog = () => setIsPolicyDialogOpen(!isPolicyDialogOpen);
    const acceptPrivacyPolicy = () => { 
        setIsPolicyAccepted(true);
        setCookie("isPolicyAccepted", true, { path: "/", expires: policyDate });
        togglePolicyDialog();
    };

    // Cookies initialization
    if (cookies.language === undefined) setCookie("language", language, { path: "/", expires: date });
    if (cookies.theme === undefined) setCookie("theme", theme, { path: "/", expires: date });
    if (cookies.palette === undefined) setCookie("palette", palette, { path: "/", expires: date });
    if (cookies.isPolicyAccepted === undefined) setCookie("isPolicyAccepted", false, { path: "/", expires: policyDate });
    if (cookies.isFirstVisit === undefined) setCookie("isFirstVisit", false, { path: "/", expires: date });

    useEffect(() => {
        setLightTheme(buildLightTheme(palette));
        setDarkTheme(buildDarkTheme(palette));
        loadTheme(theme === Theme.DARK ? darkTheme : lightTheme);
    }, [palette, theme]);

    useEffect(() => {
        LocalizationService.localize(language);
    }, [language]);

    LocalizationService.localize(language);

    return (
        <GlobalContext.Provider value={{ 
            theme,
            palette,
            language,
            lightTheme,
            darkTheme,
            isPolicyAccepted, 
            isPolicyDialogOpen, 
            changeTheme,
            changePalette,
            changeLanguage,
            acceptPrivacyPolicy, 
            togglePolicyDialog 
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;