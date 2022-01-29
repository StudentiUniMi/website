/**
 * This component is used to show an info message (example: when there are no data available).
 *
 * @author Giuseppe Del Campo
 */

import LocalizationService from "../../services/LocalizationService";
import { useTheme } from '@fluentui/react-theme-provider';
import { Text, Image, Icon } from '@fluentui/react';
import { semibold } from '../../services/Fonts';
import { Container } from 'react-bootstrap';

interface Props { text: string };

const Message = (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const messageBarStyles = { backgroundColor: theme.palette.neutralLighterAlt, color: theme.palette.black, padding: 15 };

    const InfoMessage = () => (
        <div style={messageBarStyles} className="text-center">
            <Text variant="medium" styles={semibold}>
                <Icon iconName="Info" style={{ fontSize: 12, marginRight: 10 }} />
                {locale?.noDataAvailable}
            </Text>
            <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Image id="not-found" src={process.env.PUBLIC_URL + '/images/message/not-found.png'} style={{ display: 'inline', width: '60%', marginBottom: 10 }} />
            </div>
            {props.text}
        </div>
    );

    return (
        <Container style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 350 }}>
            <InfoMessage />
        </Container>
    )
}

export default Message;