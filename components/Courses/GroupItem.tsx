import { Text, Icon, TooltipHost } from '@fluentui/react';
import { Card, ICardTokens } from "@fluentui/react-cards";
import { FontWeights, ITextStyles, Link, Persona, useTheme } from '@fluentui/react';
import { semibold } from '../../services/Fonts';
import { IContextualMenuProps, IIconProps } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { buildProfessorName, preventDefault, preventVisibleHref, redirectToLink } from '../../services/Utils';
import { CourseDegree } from '../../models/Models';
import { CSSProperties, useContext } from 'react';
import Chip from '../Atoms/Chip';
import LocalizationService from "../../services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import GlobalContext from 'services/GlobalContext';

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
    const { isPolicyAccepted, togglePolicyDialog } = useContext(GlobalContext);
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
    var yearText: string | null = null;
    var semesterText: string | null = null;
    var mainText: JSX.Element | null = null;

    /* Groups data initialization */
    if (data.course.group !== null) {
        /* Avatar image inizialization (personaUrl) */
        personaIconUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${data.course.group.id}.png`;

        /* Main text inizialization */
        if (data.year === -1) {
            if (ITgroupsIDs.indexOf(data.course.group.id) !== -1) {
                mainText = <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.courses.tutorsGroupDescription} />;
            } else {
                mainText = <>{locale?.courses.mainGroupDescription}</>;
            }
        }

        /* Telegram Group initialization */
        if (data.course.group.invite_link !== "" && data.course.group.invite_link !== null) {
            telegramLink = (
                <PrimaryButton
                    href={preventVisibleHref(isPolicyAccepted, data.course.group.invite_link!)} onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}
                    iconProps={telegramGroupIcon}
                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 8 }}
                    disabled={data.course.group.invite_link === "" || data.course.group.invite_link === null}
                    allowDisabledFocus>
                    {data.course.group.invite_link === "" || data.course.group.invite_link === null ? locale?.courses.groupNotAvailable : locale?.telegramGroup}
                </PrimaryButton>
            );
        }
    } else {
        telegramLink = (
            <PrimaryButton
                iconProps={telegramGroupIcon}
                style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 8 }}
                disabled
                allowDisabledFocus>
                {locale?.courses.groupNotAvailable}
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
        const style: CSSProperties = { display: 'flex', gap: 5, alignItems: 'center' };
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
            yearText = `${locale?.courses.complementary}`;
            break;
        case undefined: /* Errore o non disponibile */
            yearText = "N/A";
            break;
        default:
            yearText = `${data.year}° ${locale?.courses.year}`;
            break;
    }

    /* Semester inizialization */
    if (data.semester === -1 || data.semester === null || data.semester === 0) {
        semesterText = null;
    } else if (data.semester === undefined) {
        semesterText = 'N/A';
    } else if (data.semester !== null) {
        semesterText = `${data.semester}° ${locale?.courses.semester}`;
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
                href={preventVisibleHref(isPolicyAccepted, data.course.wiki_link!)} onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}
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
                    {data.year === -1 && <Chip label={locale?.courses.mainGroup} size="small" textColor={theme.palette.black} bgColor={theme.palette.neutralLight} className="m-1" /> }
                    {yearText !== null && <Chip label={yearText} size="small" textColor={theme.palette.black} bgColor={theme.palette.neutralLighter} className="m-1" /> }
                    {semesterText !== null && <Chip label={semesterText} size="small" textColor={theme.palette.black} bgColor={theme.palette.neutralLighter} /> }
                </Text>

                <Text variant="small" style={{ marginTop: 8, marginBottom: 8 }}>
                    {mainText}
                </Text>

                {telegramLink}

                { data.year !== -1 &&
                    <DefaultButton
                        text={locale?.courses.websites}
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