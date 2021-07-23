import { Text, Link } from 'office-ui-fabric-react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, ITextStyles, Persona } from '@fluentui/react';
import { semibold } from '../fonts';
import Chip from '@material-ui/core/Chip';
import Course from '../models/Course';
import { useTheme } from '@fluentui/react-theme-provider';
import { IContextualMenuProps, IIconProps } from '@fluentui/react';
import { CommandButton } from '@fluentui/react/lib/Button';
import { ActionButton } from '@fluentui/react/lib/Button';
import { redirectToLink } from '../services/Utils';
import { Icon } from 'office-ui-fabric-react';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

initializeIcons();
interface Props { data: Course };

const CourseItem = (props: Props) => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    let data = props.data;

    const cfuStyle: ITextStyles = { root: { fontWeight: FontWeights.semibold, color: theme.palette.themePrimary } };
    const descriptionTextStyles: ITextStyles = { root: { fontWeight: FontWeights.semibold } };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const websiteIcon: IIconProps = { iconName: 'Globe' };
    const telegramGroupIcon: IIconProps = { iconName: 'Send' };
    const wikiIcon: IIconProps = { iconName: 'SurveyQuestions' };

    var primaryText : any;
    var overflow : boolean = false;
    var cfuText : any;
    var yearText : any;
    var semesterText : any;
    var mainText : any;

    /// PrimaryText inizialization
    if (data?.name!.length >= 33) {
        primaryText = <Text styles={semibold}>{data.name}</Text>;
    } else {
        overflow = true;
        primaryText = <div style={{ wordWrap: 'break-word', whiteSpace: 'normal', marginTop: '2px' }}><Text styles={semibold}>{data.name}</Text></div>;
    }

    // PersonaUrl inizialization
    let personaIconUrl: string | undefined;
    if (data.anno === -1) personaIconUrl = process.env.PUBLIC_URL + `/degree_groups_images/${data.cdl}150.jpg`; 
    else { personaIconUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${data.chat_id}.png`; }

    // CFU inizialization
    if (data.cfu !== null) {
        cfuText = <>{data.cfu} CFU</>;
    }

    // Year inizialization
    switch (data.anno) {
        case -1:
            yearText = null;
            break;
        case null:
            yearText = null;
            break;
        case -2:
            yearText = <span>{locale.courses.complementary}</span>;
            break;
        default:
            yearText = <span>{data.anno}° {locale.courses.year}</span>;
            break;
    }

    // Semester inizialization
    if (data.semestre !== null) {
        semesterText = <span>{data.semestre}° {locale.courses.semester}</span>;
    } else {
        semesterText = null;
    }

    // Main text inizialization
    if (data.anno === -1 && (data.gruppo === "" || data.gruppo === null)) {
        mainText = (<><JsxParser bindings={{ theme: theme }} components={{ Text, Link, Icon }} jsx={locale.courses.contactAdmin} /></> );
    } else if (data.anno === -1 && (data.gruppo !== "" && data.gruppo !== null)) {
        mainText = locale.courses.mainGroupDescription;
    }

    // Websites inizialization
    let websites: any[] = [];

    if ((data.websites ?? []).length !== 0) {
        websites = data.websites.map(
            (e, i) => {
                return {
                    key: i,
                    text: e.etichetta,
                    onClick: () => redirectToLink(e.link),
                    iconProps: { iconName: 'ChromeBackMirrored' }
                };
            }
        );
    }

    const menuProps: IContextualMenuProps = {
        // For example: disable dismiss if shift key is held down while dismissing
        onDismiss: ev => {
            if (ev && 'shiftKey' in ev) {
                ev.preventDefault();
            }
        },
        items: websites,
        directionalHintFixed: true,
    };
    
    return (
        <Card tokens={cardTokens}>
            <Card.Item>
                {overflow === true ?
                    <Persona imageUrl={personaIconUrl} onRenderPrimaryText={() => primaryText} text={data.name} />
                    :
                    <Persona imageUrl={personaIconUrl} text={data.name} />
                }
            </Card.Item>

            <Card.Section>

                <Text variant="small" styles={cfuStyle}>
                    {cfuText}
                </Text>

                <Text styles={descriptionTextStyles}>
                    {data.anno === -1 ? <Chip label={locale.courses.mainGroup} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.teal }} className="m-1" /> : <></>}
                    {yearText !== "" && yearText !== null ? <Chip label={yearText} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeSecondary }} className="m-1" /> : <></>}
                    {semesterText !== "" && semesterText !== null ? <Chip label={semesterText} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeSecondary }} /> : <></>}
                </Text>

                <Text variant="small" style={{ marginTop: '10px', marginBottom: '10px' }}>
                    {mainText}
                </Text>

                {
                    (() => {
                        if (data.gruppo !== "" && data.gruppo !== null) {
                            return (
                                <ActionButton 
                                    href={data.gruppo as any}
                                    target="_blank"
                                    iconProps={telegramGroupIcon} 
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }} 
                                    disabled={data.gruppo === "" || data.gruppo === null}
                                    className="text-decoration-none"
                                    allowDisabledFocus>
                                    {locale.telegramGroup}
                                </ActionButton>
                            );
                        } else if ( (data.gruppo === "" || data.gruppo === null) && data.anno !== -1) {
                            return (
                                <ActionButton
                                    iconProps={telegramGroupIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }}
                                    disabled
                                    allowDisabledFocus>
                                    {locale.courses.groupNotAvailable}
                                </ActionButton>
                            );
                        }
                    })()
                }

                { data.anno !== -1 ?
                    <CommandButton
                        text={locale.courses.websites}
                        style={{justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 0}}
                        iconProps={websiteIcon}
                        menuProps={menuProps}
                        allowDisabledFocus
                        disabled={websites.length === 0}
                    /> : <></>
                }

                {
                    (() => { 
                        if (data.wiki !== null && data.wiki !== "") { 
                            return (
                                <ActionButton
                                    href={data.wiki as any}
                                    target="_blank"
                                    className="text-decoration-none"
                                    iconProps={wikiIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 0 }}
                                    allowDisabledFocus>
                                    Wiki
                                </ActionButton>
                            );
                        } else if ( (data.wiki === null || data.wiki === "") && data.anno !== -1) return (
                            <ActionButton
                                disabled
                                iconProps={wikiIcon}
                                style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 0 }}
                                allowDisabledFocus>
                                Wiki
                            </ActionButton>
                        )
                    })()
                }

            </Card.Section>
        </Card>
    );
};

export default CourseItem;