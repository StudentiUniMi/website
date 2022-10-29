import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import { addDays } from "./Utils";

export interface Context {
    isPolicyAccepted: boolean,
    acceptPrivacyPolicy: () => void,
    isPolicyDialogOpen: boolean,
    togglePolicyDialog: () => void
};

const defaultState = { 
    isPolicyAccepted: false, 
    acceptPrivacyPolicy: () => {}, 
    isPolicyDialogOpen: false, 
    togglePolicyDialog: () => {}
};

const GlobalContext = createContext<Context>(defaultState);

export const GlobalProvider = ({ children }: any) => {
    let [cookies, setCookie] = useCookies();
    const policyDate: Date = addDays(new Date(), 360);
    
    const [isPolicyAccepted, setIsPolicyAccepted] = useState<boolean>(cookies["isPolicyAccepted"] === 'true' ? true : false ?? false);
    const [isPolicyDialogOpen, setIsPolicyDialogOpen] = useState<boolean>(false);

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