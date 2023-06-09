/**
 * University group component.
 * 
 * @author Giuseppe Del Campo
 */

import { Text, Icon, FontWeights, ITextStyles, Persona, Link, TooltipHost, IIconProps, useTheme, PrimaryButton } from '@fluentui/react';
import { Card, ICardTokens } from "@fluentui/react-cards";
import { preventDefault, preventVisibleHref } from 'services/Utils';
import { semibold } from '../../services/Fonts';
import { useContext } from 'react';
import Group from '../../models/Group'
import Chip from '../Atoms/Chip';
import LocalizationService from "../../services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import GlobalContext from 'services/GlobalContext';

interface Props { data: Group };

const AdditionalGroup = (props: Props) => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    const data = props.data;
    const { isPolicyAccepted, togglePolicyDialog } = useContext(GlobalContext);
    
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
    imageUrl = '/images/university_groups/' + data.image;
    
    return (
        <Card tokens={cardTokens} className="additional-group-item">
            <Card.Item>
                <Persona imageUrl={imageUrl} onRenderPrimaryText={() => primaryText} text={name} />
            </Card.Item>
            <Card.Section>
                <Text styles={descriptionTextStyles}>
                    <Chip 
                        label={locale?.groups.universityGroups.card.type} 
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
                        if (data.href !== "" && data.href !== null) {
                            return (
                                <PrimaryButton
                                    href={preventVisibleHref(isPolicyAccepted, data.href!)} onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}
                                    iconProps={telegramGroupIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }}
                                    disabled={data.href === "" || data.href === null}
                                    allowDisabledFocus>
                                    {locale?.telegramGroup}
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