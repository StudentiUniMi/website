import { Text, useTheme, PrimaryButton, DefaultButton } from '@fluentui/react';
import { semibold } from '../../services/Fonts';
import { useState, useEffect, useContext, CSSProperties } from 'react';
import { useCookies } from 'react-cookie';
import { addDays } from 'services/Utils';
import GlobalContext from 'services/GlobalContext';

const LocalizationChangePopup = () => {
    var theme = useTheme();
    const [cookies, setCookie] = useCookies();
    const date: Date = addDays(new Date(), 90);

    const localizationPopup: CSSProperties = {
        zIndex: 2,
        position: 'fixed',
        width: '100%',
        bottom: 0,
        gap: 20,
        backgroundColor: theme.palette.neutralLight,
        borderTop: `1px solid ${theme.palette.neutralQuaternary}`,
        padding: '20px 15px',
        opacity: '92%'
    };
    
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const { changeLanguage } = useContext(GlobalContext);

    const setEnglishLocale = () => { 
        changeLanguage("en");
        setIsDialogOpen(false);
    };

    useEffect(() => {
        const acceptLanguage = window.navigator.languages[0] ?? navigator.language;
        
        if (cookies.isFirstVisit === undefined && acceptLanguage !== "it") {
            setIsDialogOpen(true);
        }

        setCookie("isFirstVisit", false, { path: "/", expires: date });
    }, []);

    return (
        <>
        { isDialogOpen &&
            <div style={localizationPopup}>
                <div className="d-flex flex-column justify-content-between" style={{ gap: 15 }}>
                    <div className="d-flex flex-column" style={{ gap: 5 }}>
                        <Text variant="large" block styles={semibold}>You don't speak Italian?</Text>
                    </div>

                    <div className="d-flex flex-row" style={{ gap: 15 }}>
                        <DefaultButton onClick={() => setIsDialogOpen(false)} text="Rimani in italiano" style={{ padding: 18 }} />
                        <PrimaryButton onClick={setEnglishLocale} text="Switch to english" style={{ padding: 18 }} />
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default LocalizationChangePopup;