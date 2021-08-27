/**
 * This component is used to show loading while retrieving data from the api, and to show an error in case the loading didn't go fine.
 *
 * @author Giuseppe Del Campo
 */

import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import LocalizationService from "../services/LocalizationService";
import { useTheme } from '@fluentui/react-theme-provider';
import { MessageBarType, MessageBar } from '@fluentui/react';
import React from 'react';

interface Props { loading: boolean, error: boolean };

interface IExampleProps { resetChoice?: () => void; };

const LoadingSpinner = (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const [showError, setShowError] = React.useState(props.error);

    const ErrorExample = (p: IExampleProps) => (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            onDismiss={p.resetChoice}
            dismissButtonAriaLabel="Close"
        >
            Si è verificato un errore; contatta un amministratore.
        </MessageBar>
    );

    return (
        <>
            { props.error ? <div style={{ display: showError ? 'block' : 'none' }}><ErrorExample resetChoice={() => setShowError(false)} /></div> :
                props.loading ? 
                <div>
                    <Spinner label={locale.loading} ariaLive="assertive" labelPosition="right" size={SpinnerSize.large} theme={theme} />
                </div> : <></>
            }
        </>
    )
}

export default LoadingSpinner;