import { Text, Icon } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, ITextStyles, Persona, Link } from '@fluentui/react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import ExtraGroup from '../../models/ExtraGroup'
import { useTheme } from '@fluentui/react-theme-provider';
import { ActionButton } from '@fluentui/react/lib/Button';
import { IIconProps } from '@fluentui/react';
import Chip from '@material-ui/core/Chip';
import { semibold } from '../../services/fonts';
import LocalizationService from "../../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

initializeIcons();

interface Props { data: ExtraGroup };

const ExtraGroupView = (props: Props) => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string = LocalizationService.getLanguage();
    const data = props.data;
    const helpfulTextStyles: ITextStyles = { root: { fontWeight: FontWeights.regular, } };
    const descriptionTextStyles: ITextStyles = { root: { fontWeight: FontWeights.semibold } };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const telegramGroupIcon: IIconProps = { iconName: 'Send' };
    
    let desc = data.description![language];
    let name = data.name![language];

    // PrimaryText inizialization
    var primaryText : any;
    primaryText = <div style={{ wordWrap: 'break-word', whiteSpace: 'normal', marginTop: '2px' }}><Text styles={semibold}>{name}</Text></div>;
    
    // Group image initialization
    var imageUrl: string;
    imageUrl = process.env.PUBLIC_URL + '/extra_groups_images/' + data.image;
    
    return (
        <Card tokens={cardTokens}>
            <Card.Item>
                <Persona imageUrl={imageUrl} onRenderPrimaryText={() => primaryText} text={name} />
            </Card.Item>
            <Card.Section>
                <Text styles={descriptionTextStyles}>
                    <Chip label={locale.extraGroups.extraGroup} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.orangeLighter }} className="m-1" />
                </Text>
                <Text variant="small" styles={helpfulTextStyles} className="mb-2">
                    <JsxParser bindings={{ theme: theme }} components={{ Text, Link, Icon }} jsx={"<Icon iconName='Info' /> " + desc} />
                </Text>

                {
                    (() => {
                        if (data.gruppo !== "" && data.gruppo !== null) {
                            return (
                                <ActionButton
                                    href={data.gruppo as any}
                                    target="_blank"
                                    className="text-decoration-none"
                                    iconProps={telegramGroupIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }}
                                    disabled={data.gruppo === "" || data.gruppo === null}
                                    allowDisabledFocus>
                                    {locale.telegramGroup}
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