/**
 * This component is used to show an error.
 *
 * @author Giuseppe Del Campo
 */

import React from 'react';
import LocalizationService from "../../services/LocalizationService";
import { useTheme } from '@fluentui/react-theme-provider';
import { semibold } from '../../services/Fonts';
import { Text, Image, Icon, Link } from 'office-ui-fabric-react/lib-commonjs';
import { Container } from 'react-bootstrap';
import JsxParser from 'react-jsx-parser';

interface Props { error: boolean };

interface IExampleProps { resetChoice?: () => void; };

const ErrorMessage = (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const [showError, setShowError] = React.useState<boolean>(false);

    const updateError = React.useCallback(() => {
        setShowError(props.error);
    }, [setShowError, props.error]);

    React.useEffect(() => {
        updateError();
    }, [updateError]);

    const messageBarStyles = { backgroundColor: 'rgb(253, 231, 233)', color: theme.palette.redDark, padding: 20 };

    const ErrorExample = (_: IExampleProps) => (
        <div style={messageBarStyles} className="text-center">
            <Text variant="medium" styles={semibold} style={{ color: theme.palette.redDark }}>
                <Icon iconName="ErrorBadge" style={{ fontSize: 12, marginRight: 10 }} />
                {locale?.errorOccured}
            </Text>
            <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Image id="not-found" src={'/images/message/error.png'} style={{ display: 'inline', width: '35%', marginBottom: 5 }} />
            </div>
            <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link, Icon }} jsx={locale?.errorContactAdmin} />
        </div>
    );

    return (
        <>
            {
                props.error && 
                <Container style={{ display: showError ? 'block' : 'none', marginLeft: 'auto', marginRight: 'auto', maxWidth: 400 }}>
                    <ErrorExample />
                </Container>
            }
        </>
    )
}

export default ErrorMessage;