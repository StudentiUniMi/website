import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import LocalizationService from "../services/LocalizationService";
import { useTheme } from '@fluentui/react-theme-provider';

const LoadingSpinner = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();

    return (
        <div>
            <Spinner label="Wait, wait..." ariaLive="assertive" labelPosition="right" size={SpinnerSize.large} theme={theme} />
        </div>
    )
}

export default LoadingSpinner;