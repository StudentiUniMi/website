import { Link, Text } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, ITextStyles, Persona } from '@fluentui/react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import ExtraGroup from '../models/ExtraGroup'
import { useTheme } from '@fluentui/react-theme-provider';
import { useCookies } from "react-cookie";
import LocalizationService from "../services/LocalizationService";

initializeIcons();

interface Props { data: ExtraGroup };

const ExtraGroupView = (props: Props) => {
    var theme = useTheme();
    const [cookies, setCookie] = useCookies(["theme", "language"]);
    const locale = LocalizationService.strings();
    var data = props.data;
    const helpfulTextStyles: ITextStyles = {
        root: {
            fontWeight: FontWeights.regular,
        },
    };
    const cardTokens: ICardTokens = { childrenMargin: 12 };

    return (
        <Card tokens={cardTokens}>
            <Card.Item>
                { data.image === "" ? <Persona text={data.name} /> : <Persona text={data.name} imageUrl={ process.env.PUBLIC_URL + '/extra_groups_images/' + data.image } /> }
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