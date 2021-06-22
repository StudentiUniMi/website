import { Text } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, ITextStyles, Persona } from '@fluentui/react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import ExtraGroup from '../models/ExtraGroup'
// import { useTheme } from '@fluentui/react-theme-provider';
import { ActionButton } from '@fluentui/react/lib/Button';
import { IIconProps } from '@fluentui/react';
import { redirectToLink } from '../services/Utils';

initializeIcons();

interface Props { data: ExtraGroup };

const ExtraGroupView = (props: Props) => {
    var data = props.data;
    const helpfulTextStyles: ITextStyles = {
        root: {
            fontWeight: FontWeights.regular,
        },
    };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const telegramGroupIcon: IIconProps = { iconName: 'Send' };

    return (
        <Card tokens={cardTokens}>
            <Card.Item>
                { data.image === "" ? <Persona text={data.name} /> : <Persona text={data.name} imageUrl={ process.env.PUBLIC_URL + '/extra_groups_images/' + data.image } /> }
            </Card.Item>
            <Card.Section>
                <Text variant="small" styles={helpfulTextStyles} className="mb-2">
                    {data.description}
                </Text>

                {
                    (() => {
                        if (data.gruppo !== "" && data.gruppo !== null) {
                            return (
                                <ActionButton
                                    onClick={() => redirectToLink(data.gruppo as any)}
                                    iconProps={telegramGroupIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }}
                                    disabled={data.gruppo === "" || data.gruppo === null}
                                    allowDisabledFocus>
                                    Gruppo Telegram
                                </ActionButton>
                            );
                        }
                    })()
                }

            </Card.Section>
        </Card>
    );
};

export default ExtraGroupView;