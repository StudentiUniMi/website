/**
 * Announcements group component.
 * 
 * @author Giuseppe Del Campo
 */

import { Text, Icon, FontWeights, ITextStyles, Persona, Link, TooltipHost, IIconProps, useTheme, PrimaryButton } from '@fluentui/react';
import { Card, ICardTokens } from "@fluentui/react-cards";
import { formatLowerNumber, preventDefault, preventVisibleHref } from 'services/Utils';
import { semibold } from '../../services/Fonts';
import { useContext } from 'react';
import { ExtraGroup } from 'models/Models';
import Chip from '../Atoms/Chip';
import LocalizationService from "../../services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import GlobalContext from 'services/GlobalContext';

interface Props { data: ExtraGroup };

const AnnouncementsGroup = (props: Props) => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();

    const group = props.data;

    const { isPolicyAccepted, togglePolicyDialog } = useContext(GlobalContext);
    
    const helpfulTextStyles: ITextStyles = { root: { fontWeight: FontWeights.regular, } };
    const descriptionTextStyles: ITextStyles = { root: { fontWeight: FontWeights.semibold } };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const telegramGroupIcon: IIconProps = { iconName: 'Send' };
    const calloutProps = { gapSpace: 5 };
    
    const name = group.name[language!];
    const description = group.description[language!];
    const imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${group.id}.png`;

    const isInviteLinkEmpty = group.invite_link === "" || group.invite_link === null;

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
    
    return (
        <Card tokens={cardTokens} className="additional-group-item">
            <Card.Item>
                <Persona imageUrl={imageUrl} onRenderPrimaryText={() => primaryText} text={name} />
            </Card.Item>
            <Card.Section>
                <Text styles={descriptionTextStyles}>
                    <Chip 
                        label={locale?.groups.announcementsGroups.card.type} 
                        size="small" 
                        textColor={theme.palette.black}
                        bgColor={theme.palette.neutralLight}
                        className="m-1" 
                    />
                    {group.user_count && <Chip 
                        label={`${formatLowerNumber(group.user_count)}+ ${locale?.groups.users}`} 
                        size="small" 
                        outlined
                        textColor={theme.palette.black}
                        bgColor={theme.palette.neutralLight}
                        theme={theme}
                        className="m-1" 
                    /> }
                </Text>
                <Text variant="small" styles={helpfulTextStyles} className="mb-2">
                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link, Icon }} jsx={"<Icon iconName='Info' /> " + description} />
                </Text>

                {!isInviteLinkEmpty &&
                    <PrimaryButton
                        href={preventVisibleHref(isPolicyAccepted, group.invite_link)} onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}
                        iconProps={telegramGroupIcon}
                        style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }}
                        disabled={isInviteLinkEmpty}
                        allowDisabledFocus>
                        {locale?.telegramGroup}
                    </PrimaryButton>
                }
            </Card.Section>
        </Card>
    );
};

export default AnnouncementsGroup;