/**
 * This component is used to show an info message (example: when there are no data available).
 *
 * @author Giuseppe Del Campo
 */

import { useTheme } from '@fluentui/react-theme-provider';
import { MessageBarType, MessageBar } from '@fluentui/react';
import React from 'react';

interface Props { text: string };

const Message = (props: Props) => {
    var theme = useTheme();

    const InfoMessage = () => (
        <MessageBar
            messageBarType={MessageBarType.info}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
            theme={theme}
        >
            {props.text}
        </MessageBar>
    );

    return (
        <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 300 }}>
            <InfoMessage />
        </div>
    )
}

export default Message;