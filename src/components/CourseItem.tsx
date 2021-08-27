import { Text, Link } from 'office-ui-fabric-react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, ITextStyles, Persona } from '@fluentui/react';
import { semibold } from '../fonts';
import Chip from '@material-ui/core/Chip';
//import Course from '../models/Course';
import { useTheme } from '@fluentui/react-theme-provider';
import { IContextualMenuProps, IIconProps } from '@fluentui/react';
import { CommandButton } from '@fluentui/react/lib/Button';
import { ActionButton } from '@fluentui/react/lib/Button';
import { redirectToLink } from '../services/Utils';
import { Icon } from 'office-ui-fabric-react';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

/* Updated models */
import { Course } from '../models/Models';

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
    
    /* To-do: adjust this data.year === -1 */
    if (data.year === -1) personaIconUrl = process.env.PUBLIC_URL + `/degree_groups_images/unimi150.jpg`;  /* To-do: this must be adjusted */
    //if (data.year === -1) personaIconUrl = process.env.PUBLIC_URL + `/degree_groups_images/${data.cdl}150.jpg`; 
    else { personaIconUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${data.group!.id}.png`; }

    // CFU inizialization
    if (data.cfu !== null) {
        cfuText = <>{data.cfu} CFU</>;
    }

    // Year inizialization
    switch (data.year) {
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
            yearText = <span>{data.year}° {locale.courses.year}</span>;
            break;
    }

    // Semester inizialization
    if (data.semester !== null) {
        semesterText = <span>{data.semester}° {locale.courses.semester}</span>;
    } else {
        semesterText = null;
    }

    // Main text inizialization
    if (data.year === -1 && (data.group!.invite_link === "" || data.group!.invite_link === null)) {
        mainText = (<><JsxParser bindings={{ theme: theme }} components={{ Text, Link, Icon }} jsx={locale.courses.contactAdmin} /></> );
    } else if (data.year === -1 && (data.group!.invite_link !== "" && data.group!.invite_link !== null)) {
        mainText = locale.courses.mainGroupDescription;
    }

    // Websites inizialization
    let websites: any[] = [];

    if ((data.links ?? []).length !== 0) {
        websites = data.links.map(
            (e, i) => {
                return {
                    key: i,
                    text: e.name,
                    onClick: () => redirectToLink(e.url!),
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
                    {/* To-do: adjust this data.year === -1 */}
                    {data.year === -1 ? <Chip label={locale.courses.mainGroup} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.teal }} className="m-1" /> : <></>}
                    {yearText !== "" && yearText !== null ? <Chip label={yearText} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeSecondary }} className="m-1" /> : <></>}
                    {semesterText !== "" && semesterText !== null ? <Chip label={semesterText} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeSecondary }} /> : <></>}
                </Text>

                <Text variant="small" style={{ marginTop: '10px', marginBottom: '10px' }}>
                    {mainText}
                </Text>

                {
                    (() => {
                        if (data.group!.invite_link !== "" && data.group!.invite_link !== null) {
                            return (
                                <ActionButton 
                                    href={data.group!.invite_link as any}
                                    target="_blank"
                                    iconProps={telegramGroupIcon} 
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }} 
                                    disabled={data.group!.invite_link === "" || data.group!.invite_link === null}
                                    className="text-decoration-none"
                                    allowDisabledFocus>
                                    {locale.telegramGroup}
                                </ActionButton>
                            );
                        } else if ((data.group!.invite_link === "" || data.group!.invite_link === null) && data.year !== -1) { /* To-do: adjust this data.year === -1 */
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

                { data.year !== -1 ?
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
                        if (data.wiki_link !== null && data.wiki_link !== "") { 
                            return (
                                <ActionButton
                                    href={data.wiki_link as any}
                                    target="_blank"
                                    className="text-decoration-none"
                                    iconProps={wikiIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 0 }}
                                    allowDisabledFocus>
                                    Wiki
                                </ActionButton>
                            );
                        } else if ((data.wiki_link === null || data.wiki_link === "") && data.year !== -1) return (
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