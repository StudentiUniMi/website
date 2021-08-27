/**
 * This component is used to show loading while retrieving data from the api, and to show an error in case the loading didn't go fine.
 *
 * @author Giuseppe Del Campo
 */

import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import LocalizationService from "../services/LocalizationService";
import { useTheme } from '@fluentui/react-theme-provider';

interface Props { loading: boolean, error: boolean };

const LoadingSpinner = (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();

    return (
        <>
            {
            props.error ? <div>Errore! Dennis sa rutt!</div> :
                props.loading ? 
                <div>
                    <Spinner label="Wait, i'm loading..." ariaLive="assertive" labelPosition="right" size={SpinnerSize.large} theme={theme} />
                </div> : <></>
            }
        </>
    )
}

export default LoadingSpinner;