/**
 * Students association component.
 * This uses nullable properties in ExtraGroup model such as button_name, external_url and image_url.
 * 
 * @author Giuseppe Del Campo
 */

import { Text, Icon, FontWeights, ITextStyles, Persona, Link, TooltipHost, useTheme, PrimaryButton } from '@fluentui/react';
import { Card, ICardTokens } from "@fluentui/react-cards";
import { preventDefault, preventVisibleHref } from 'services/Utils';
import { semibold } from '../../services/Fonts';
import { useContext } from 'react';
import { ExtraGroup } from 'models/Models';
import Chip from '../Atoms/Chip';
import LocalizationService from "../../services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import GlobalContext from 'services/GlobalContext';

interface Props { data: ExtraGroup };

const StudentsAssociation = (props: Props) => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();

    const studentsAssociation = props.data;
    
    const { isPolicyAccepted, togglePolicyDialog } = useContext(GlobalContext);
    
    const helpfulTextStyles: ITextStyles = { root: { fontWeight: FontWeights.regular, } };
    const descriptionTextStyles: ITextStyles = { root: { fontWeight: FontWeights.semibold } };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const calloutProps = { gapSpace: 5 };
    
    const name = studentsAssociation.name[language!];
    const description = studentsAssociation.description[language!];

    const isInviteLinkEmpty = studentsAssociation.external_url === "" || studentsAssociation.external_url === null;

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
                <Persona imageUrl={studentsAssociation.image_url ?? ""} onRenderPrimaryText={() => primaryText} text={name} />
            </Card.Item>
            <Card.Section>
                <Text styles={descriptionTextStyles}>
                    <Chip 
                        label={locale?.groups.studentsAssociations.card.type} 
                        size="small" 
                        textColor={theme.palette.black}
                        bgColor={theme.palette.neutralLight}
                        className="m-1" 
                    />
                </Text>

                <Text variant="small" styles={helpfulTextStyles} className="mb-2">
                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link, Icon }} jsx={"<Icon iconName='AiOutlineInfoCircle' /> " + description} />
                </Text>

                {!isInviteLinkEmpty &&
                    <PrimaryButton
                        href={preventVisibleHref(isPolicyAccepted, studentsAssociation.external_url!)} onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}
                        iconProps={{iconName: 'FaTelegram'}}
                        style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }}
                        disabled={isInviteLinkEmpty}
                        allowDisabledFocus>
                        {studentsAssociation.button_name![language!]}
                    </PrimaryButton>
                }
            </Card.Section>
        </Card>
    );
};

export default StudentsAssociation;