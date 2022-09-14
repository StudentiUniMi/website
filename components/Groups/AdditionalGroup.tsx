/**
 * Additional group component.
 * To-do: remove checks on MUG name when the new section for students association will be available.
 * 
 * @author Giuseppe Del Campo
 */

import { Text, Icon } from 'office-ui-fabric-react';
import { FontWeights, ITextStyles, Persona, Link } from '@fluentui/react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import ExtraGroup from '../../models/ExtraGroup'
import { useTheme } from '@fluentui/react-theme-provider';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { IIconProps } from '@fluentui/react';
import Chip from '@material-ui/core/Chip';
import { semibold } from '../../services/Fonts';
import LocalizationService from "../../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

interface Props { data: ExtraGroup };

const AdditionalGroup = (props: Props) => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    const data = props.data;
    const helpfulTextStyles: ITextStyles = { root: { fontWeight: FontWeights.regular, } };
    const descriptionTextStyles: ITextStyles = { root: { fontWeight: FontWeights.semibold } };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const telegramGroupIcon: IIconProps = { iconName: 'Send' };
    
    let desc = data.description![language!];
    let name = data.name![language!];

    // PrimaryText inizialization
    var primaryText : any;
    primaryText = <div style={{ wordWrap: 'break-word', whiteSpace: 'normal', marginTop: '2px' }}><Text styles={semibold}>{name}</Text></div>;
    
    // Group image initialization
    var imageUrl: string;
    imageUrl = '/extra_groups_images/' + data.image;
    
    return (
        <Card tokens={cardTokens} className="additional-group-item">
            <Card.Item>
                <Persona imageUrl={imageUrl} onRenderPrimaryText={() => primaryText} text={name} />
            </Card.Item>
            <Card.Section>
                <Text styles={descriptionTextStyles}>
                    <Chip 
                        label={name === 'MUG - Milan University Gamers' ? locale?.studentsAssociation : locale?.extraGroups.extraGroup} 
                        size="small" 
                        style={{ color: theme.palette.black, backgroundColor: theme.palette.neutralLight }} 
                        className="m-1" 
                    />
                </Text>
                <Text variant="small" styles={helpfulTextStyles} className="mb-2">
                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link, Icon }} jsx={"<Icon iconName='Info' /> " + desc} />
                </Text>

                {
                    (() => {
                        if (data.gruppo !== "" && data.gruppo !== null) {
                            return (
                                <PrimaryButton
                                    href={data.gruppo as any}
                                    className="text-decoration-none"
                                    iconProps={telegramGroupIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }}
                                    disabled={data.gruppo === "" || data.gruppo === null}
                                    allowDisabledFocus>
                                    {name === 'MUG - Milan University Gamers' ? locale?.homepage.section3.part3.title : locale?.telegramGroup}
                                </PrimaryButton>
                            );
                        }
                    })()
                }

            </Card.Section>
        </Card>
    );
};

export default AdditionalGroup;