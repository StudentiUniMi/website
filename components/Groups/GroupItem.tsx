import { Text, Icon, TooltipHost } from 'office-ui-fabric-react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { FontWeights, ITextStyles, Link, Persona } from '@fluentui/react';
import { semibold } from '../../services/Fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import { IContextualMenuProps, IIconProps } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { buildProfessorName, redirectToLink } from '../../services/Utils';
import { CourseDegree } from '../../models/Models';
import Chip from '@material-ui/core/Chip';
import LocalizationService from "../../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

interface Props { data: CourseDegree };

/* IDs of Computer Science groups managed by the department */
const ITgroupsIDs = [
    -1001351008335,
    -1001437343087,
    -1001334720360,
    -1001235845198
];

const CourseItem = (props: Props) => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    let data = props.data;

    const cfuStyle: ITextStyles = { root: { fontWeight: FontWeights.semibold, color: theme.palette.themeDark } };
    const professorBox = { display: 'flex', alignItems: 'center', backgroundColor: theme.palette.neutralLighter, padding: "2px 6px", borderRadius: 3 };
    const professorTextStyle: ITextStyles = { root: { fontWeight: FontWeights.semibold, color: theme.palette.neutralPrimary } };
    const descriptionTextStyles: ITextStyles = { root: { fontWeight: FontWeights.semibold } };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const websiteIcon: IIconProps = { iconName: 'Globe' };
    const telegramGroupIcon: IIconProps = { iconName: 'Send' };
    const wikiIcon: IIconProps = { iconName: 'SurveyQuestions' };

    var primaryText: JSX.Element;
    var personaIconUrl: string = "";
    var cfuText: JSX.Element | null = null;
    var professor: JSX.Element | null = null;
    var telegramLink: JSX.Element | null = null;
    var wikiLink: JSX.Element | null = null;
    var yearText: JSX.Element | null = null;
    var semesterText: JSX.Element | null = null;
    var mainText: JSX.Element | null = null;

    /* Groups data initialization */
    if (data.course.group !== null) {
        /* Avatar image inizialization (personaUrl) */
        personaIconUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${data.course.group.id}.png`;

        /* Main text inizialization */
        if (data.year === -1) {
            if (ITgroupsIDs.indexOf(data.course.group.id) !== -1) {
                mainText = <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.groups.tutorsGroupDescription} />;
            } else {
                mainText = <>{locale?.groups.mainGroupDescription}</>;
            }
        }

        /* Telegram Group initialization */
        if (data.course.group.invite_link !== "" && data.course.group.invite_link !== null) {
            telegramLink = (
                <PrimaryButton
                    href={data.course.group.invite_link as any}
                    iconProps={telegramGroupIcon}
                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 8 }}
                    disabled={data.course.group.invite_link === "" || data.course.group.invite_link === null}
                    className="text-decoration-none"
                    allowDisabledFocus>
                    {data.course.group.invite_link === "" || data.course.group.invite_link === null ? locale?.groups.groupNotAvailable : locale?.telegramGroup}
                </PrimaryButton>
            );
        }
    } else {
        telegramLink = (
            <PrimaryButton
                iconProps={telegramGroupIcon}
                style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 8 }}
                className="text-decoration-none"
                disabled
                allowDisabledFocus>
                {locale?.groups.groupNotAvailable}
            </PrimaryButton>
        );
    }

    /* Persona PrimaryText initialization */
    const calloutProps = { gapSpace: 5 };
    primaryText = (
        <TooltipHost
            content={data.course.name}
            calloutProps={calloutProps}
        >
            <div className="line-clamp">
                <Text styles={semibold}>{data.course.name}</Text>
            </div>
        </TooltipHost>
    );

    /* CFU inizialization */
    switch (data.course.cfu) {
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
            cfuText = <>{data.course.cfu} CFU</>;
            break;
    }

    /* Professor inizialization */
    if (data.course.professor !== null) {
        const style = { display: 'flex', gap: 5, alignItems: 'center' };
        let text = <div style={style}><Icon iconName="UserOptional" />  {buildProfessorName(data.course.professor.first_name, data.course.professor.last_name)}</div>;

        if (data.course.professor.url === undefined || data.course.professor.url === null) {
            professor = text;
        } else {
            professor = <Link href={data.course.professor.url}>{text}</Link>
        }
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

    /* Websites inizialization */
    let websites: any[] | undefined = [];

    if ((data.course.links ?? []).length !== 0) {
        websites = data.course.links.map(
            (e, i) => {
                return {
                    key: i,
                    text: e.name,
                    onClick: () => redirectToLink(e.url),
                    iconProps: { iconName: 'ChromeBackMirrored' }
                };
            }
        );
    }

    /* Wiki initialization */
    if (data.year !== -1) {
        wikiLink = (
            <DefaultButton
                href={data.course.wiki_link as any}
                className="text-decoration-none"
                iconProps={wikiIcon}
                style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 8 }}
                disabled={data.course.wiki_link === null || data.course.wiki_link === ""}
                allowDisabledFocus>
                Wiki
            </DefaultButton>
        );
    }

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
        <Card tokens={cardTokens} className="group-item text-center">
            <Card.Item>
                <Persona imageUrl={personaIconUrl} onRenderPrimaryText={() => primaryText} text={data.course.name} />
            </Card.Item>

            <Card.Section>
                
                {data.year !== -1 && 
                    <div className="d-flex flex-row align-items-center justify-content-center" style={{ gap: 8 }}>
                        { professor !== null &&
                            <div style={professorBox}>
                                <Text variant="small" styles={professorTextStyle}>
                                    {professor}
                                </Text>
                            </div> }

                        <Text variant="small" styles={cfuStyle}>
                            {cfuText}
                        </Text>
                    </div>
                }

                <Text styles={descriptionTextStyles}>
                    {data.year === -1 && <Chip label={locale?.groups.mainGroup} size="small" style={{ color: theme.palette.black, backgroundColor: theme.palette.neutralLight }} className="m-1" /> }
                    {yearText !== null && <Chip label={yearText} size="small" style={{ color: theme.palette.black, backgroundColor: theme.palette.neutralLighter }} className="m-1" /> }
                    {semesterText !== null && <Chip label={semesterText} size="small" style={{ color: theme.palette.black, backgroundColor: theme.palette.neutralLighter }} /> }
                </Text>

                <Text variant="small" style={{ marginTop: 8, marginBottom: 8 }}>
                    {mainText}
                </Text>

                {telegramLink}

                { data.year !== -1 &&
                    <DefaultButton
                        text={locale?.groups.websites}
                        style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 8 }}
                        iconProps={websiteIcon}
                        menuProps={menuProps}
                        allowDisabledFocus
                        disabled={websites?.length === 0}
                    />
                }

                {wikiLink}

            </Card.Section>
        </Card>
    );
};

export default CourseItem;