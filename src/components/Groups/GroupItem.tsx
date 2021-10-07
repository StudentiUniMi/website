import { Text } from 'office-ui-fabric-react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, ITextStyles, Link, Persona } from '@fluentui/react';
import { semibold } from '../../services/fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import { IContextualMenuProps, IIconProps } from '@fluentui/react';
import { CommandButton } from '@fluentui/react/lib/Button';
import { ActionButton } from '@fluentui/react/lib/Button';
import { redirectToLink } from '../../services/Utils';
import { CourseDegree } from '../../models/Models';
import Chip from '@material-ui/core/Chip';
import LocalizationService from "../../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

initializeIcons();
interface Props { data: CourseDegree };

/* IT groups managed by the department */
const ITgroupsIDs = [
    -1001351008335,
    -1001437343087,
    -1001334720360,
    -1001235845198
    //-1001589135755, // scienze internazionali..
    //-1001478324841 // fisica
];

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

    // PrimaryText inizialization
    const courseNameLength: number | undefined = data.course?.name?.length;
    if (courseNameLength !== undefined && courseNameLength >= 33) {
        primaryText = <Text styles={semibold}>{data.course?.name}</Text>;
    } else {
        overflow = true;
        primaryText = <div style={{ wordWrap: 'break-word', whiteSpace: 'normal', marginTop: '2px' }}><Text styles={semibold}>{data.course?.name}</Text></div>;
    }

    // PersonaUrl inizialization
    let personaIconUrl: string | undefined;
    
    /*
    if (data.year === -1) personaIconUrl = process.env.PUBLIC_URL + `/degree_groups_images/unimi.jpg`;  
    //if (data.year === -1) personaIconUrl = process.env.PUBLIC_URL + `/degree_groups_images/${data.cdl}150.jpg`; 
    */
    personaIconUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${data.course?.group?.id}.png`;

    /* CFU inizialization */
    switch (data.course?.cfu) {
        case 0:
            cfuText = null;
            break;
        case null:
            cfuText = null;
            break;
        case undefined:
            cfuText = <>N/A CFU</>;
            break;
        default:
            cfuText = <>{data.course?.cfu} CFU</>;
            break;
    }

    /* Year inizialization */
    switch (data?.year) {
        case 0: /* Insegnamento di un corso di laurea senza anno */
            yearText = null;
            break;
        case -1: /* Gruppo principale */
            yearText = null;
            break;
        case -2: /* Complementare */
            yearText = <span>{locale?.groups.complementary}</span>;
            break;
        case undefined: /* Errore o non disponibile */
            yearText = <span>N/A</span>;
            break;
        default:
            yearText = <span>{data.year}° {locale?.groups.year}</span>;
            break;
    }

    /* Semester inizialization */
    if (data.semester === -1 || data.semester === null || data.semester === 0) {
        semesterText = null;
    } else if (data.semester === undefined) {
        semesterText = <span>N/A</span>;
    } else if (data.semester !== null) {
        semesterText = <span>{data.semester}° {locale?.groups.semester}</span>;
    }

    
    // Main text inizialization
    if (data.year === -1) {
        if (ITgroupsIDs.indexOf(data.course?.group?.id!) !== -1) {
            mainText = <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.groups.tutorsGroupDescription} />;
        } else {
            mainText = locale?.groups.mainGroupDescription;
        }
    }

    /* Telegram Group initialization */
    const telegramLink = () => {
        if (data.course?.group !== null && data.course?.group !== undefined) {
            if (data.course?.group?.invite_link !== "" && data.course?.group?.invite_link !== null && data.course?.group?.invite_link !== undefined) {
                return (
                    <ActionButton
                        href={data.course?.group?.invite_link as any}
                        iconProps={telegramGroupIcon}
                        style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }}
                        disabled={data.course?.group?.invite_link === "" || data.course?.group?.invite_link === null}
                        className="text-decoration-none"
                        allowDisabledFocus>
                        {locale?.telegramGroup}
                    </ActionButton>
                );
            } else if ((data.course?.group?.invite_link === undefined || data.course?.group?.invite_link === "" || data.course?.group?.invite_link === null)) {
                return (
                    <ActionButton
                        iconProps={telegramGroupIcon}
                        style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }}
                        disabled
                        allowDisabledFocus>
                        {locale?.groups.groupNotAvailable}
                    </ActionButton>
                );
            }
        } else return (
            <ActionButton
                iconProps={telegramGroupIcon}
                style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }}
                disabled
                allowDisabledFocus>
                {locale?.groups.groupNotAvailable}
            </ActionButton>
        )
    };

    /* Websites inizialization */
    let websites: any[] | undefined = [];

    if ((data.course?.links ?? []).length !== 0) {
        websites = data.course?.links.map(
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

    /* Wiki initialization */
    const wikiLink = () => {
        if (data.course?.wiki_link !== null && data.course?.wiki_link !== "") {
            return (
                <ActionButton
                    href={data.course?.wiki_link as any}
                    className="text-decoration-none"
                    iconProps={wikiIcon}
                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 0 }}
                    allowDisabledFocus>
                    Wiki
                </ActionButton>
            );
        } else if ((data.course?.wiki_link === null || data.course?.wiki_link === "") && data.year !== -1) return (
            <ActionButton
                disabled
                iconProps={wikiIcon}
                style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 0 }}
                allowDisabledFocus>
                Wiki
            </ActionButton>
        )
    };

    const menuProps: IContextualMenuProps = {
        // For example: disable dismiss if shift key is held down while dismissing
        onDismiss: ev => {
            if (ev && 'shiftKey' in ev) {
                ev.preventDefault();
            }
        },
        items: websites as any[],
        directionalHintFixed: true,
    };
    
    return (
        <Card tokens={cardTokens} className="text-center">
            <Card.Item>
                {overflow === true ?
                    <Persona imageUrl={personaIconUrl} onRenderPrimaryText={() => primaryText} text={data.course?.name} />
                    :
                    <Persona imageUrl={personaIconUrl} text={data.course?.name} />
                }
            </Card.Item>

            <Card.Section>

                <Text variant="small" styles={cfuStyle}>
                    {cfuText}
                </Text>

                <Text styles={descriptionTextStyles}>
                    {data.year === -1 ? <Chip label={locale?.groups.mainGroup} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeTertiary }} className="m-1" /> : <></>}
                    {yearText !== "" && yearText !== null ? <Chip label={yearText} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeSecondary }} className="m-1" /> : <></>}
                    {semesterText !== "" && semesterText !== null ? <Chip label={semesterText} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeSecondary }} /> : <></>}
                </Text>

                <Text variant="small" style={{ marginTop: '10px', marginBottom: '10px' }}>
                    {mainText}
                </Text>

                { telegramLink() }

                { data.year !== -1 ?
                    <CommandButton
                        text={locale?.groups.websites}
                        style={{justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 0}}
                        iconProps={websiteIcon}
                        menuProps={menuProps}
                        allowDisabledFocus
                        disabled={websites?.length === 0}
                    /> : <></>
                }

                { wikiLink() }

            </Card.Section>
        </Card>
    );
};

export default CourseItem;