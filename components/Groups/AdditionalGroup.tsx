/**
 * Additional group component.
 * To-do: remove checks on MUG name when the new section for students association will be available.
 * 
 * @author Giuseppe Del Campo
 */

import { Text, Icon, FontWeights, ITextStyles, Persona, Link, TooltipHost, IIconProps, useTheme, PrimaryButton } from '@fluentui/react';
import { Card, ICardTokens } from "@fluentui/react-cards";
import { semibold } from '../../services/Fonts';
import ExtraGroup from '../../models/ExtraGroup'
import Chip from '../GenericComponents/Chip';
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
    const calloutProps = { gapSpace: 5 };
    
    let desc = data.description![language!];
    let name = data.name![language!];

    /* PrimaryText inizialization */
    let primaryText: JSX.Element = (
        <TooltipHost
            content={name}
            calloutProps={calloutProps}
        >
            <div className="line-clamp">
                <Text styles={semibold}>{name}</Text>
            </div>
        </TooltipHost>
    );
    
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
                        textColor={theme.palette.black}
                        bgColor={theme.palette.neutralLight}
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