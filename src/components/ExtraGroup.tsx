import { Link, Text } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, ITextStyles, Persona } from '@fluentui/react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import ExtraGroup from '../models/ExtraGroup'
import { getTheme } from '@fluentui/react';

const theme = getTheme();
initializeIcons();

interface Props {
    data: ExtraGroup
}

const ExtraGroupView = (props: Props) => {
    var data = props.data;
    const helpfulTextStyles: ITextStyles = {
        root: {
            fontWeight: FontWeights.regular,
        },
    };
    const cardTokens: ICardTokens = { childrenMargin: 12 };

    function doNothing() { // Per mostrare l'hover della card
    }

    return (
        <Card tokens={cardTokens} onClick={() => doNothing}>
            <Card.Item>
                { data.image === "" ? <Persona text={data.name} /> : <Persona text={data.name} imageUrl= {process.env.PUBLIC_URL + '/group_images/' + data.image} /> }
            </Card.Item>
            <Card.Section>
                <Text variant="small" styles={helpfulTextStyles}>
                    {data.description}
                </Text>
                <Text variant="small" styles={helpfulTextStyles}>
                    <i className="fab fa-telegram-plane mr-1" style={{ color: theme.palette.themePrimary }}></i>
                    <Link href={data.gruppo} target="_blank">Gruppo Telegram</Link>
                </Text>
            </Card.Section>
        </Card>
    );
};

export default ExtraGroupView;