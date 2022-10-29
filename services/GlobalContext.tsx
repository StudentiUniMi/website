import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import { addDays } from "./Utils";

const GlobalContext = createContext({ 
    isPolicyAccepted: false, 
    acceptPrivacyPolicy: () => {}, 
    isPolicyDialogOpen: false, 
    togglePolicyDialog: () => {}
});

export const GlobalProvider = ({ children }: any) => {
    let [cookies, setCookie] = useCookies();
    const policyDate: Date = addDays(new Date(), 360);
    
    const [isPolicyAccepted, setIsPolicyAccepted] = useState(cookies["isPolicyAccepted"] ?? false);
    const [isPolicyDialogOpen, setIsPolicyDialogOpen] = useState(false);

    const togglePolicyDialog = () => setIsPolicyDialogOpen(!isPolicyDialogOpen);
    const acceptPrivacyPolicy = () => { 
        setIsPolicyAccepted(true);
        setCookie("isPolicyAccepted", true, { path: "/", expires: policyDate });
        togglePolicyDialog();
    };

    return (
        <GlobalContext.Provider value={{ isPolicyAccepted, acceptPrivacyPolicy, isPolicyDialogOpen, togglePolicyDialog }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;