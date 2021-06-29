import { Text } from 'office-ui-fabric-react';
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

// const gdriveStyle = { width: '15px', height: '15px', marginBottom: '3px' }
initializeIcons();
interface Props { data: Course };

const CourseItem = (props: Props) => {
    const theme = useTheme();
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
            yearText = <span>Complementare</span>;
            break;
        default:
            yearText = <span>{data.anno}° Anno</span>;
            break;
    }

    // Semester inizialization
    if (data.semestre !== null) {
        semesterText = <span>{data.semestre}° Semestre</span>;
    } else {
        semesterText = null;
    }

    // Main text inizialization
    if (data.anno === -1 && (data.gruppo === "" || data.gruppo === null)) {
        mainText = "Contatta un amministratore se vuoi essere aggiunto al gruppo."
    } else if (data.anno === -1 && (data.gruppo !== "" && data.gruppo !== null)) {
        mainText = "Gruppo principale per qualsiasi tipo di discussione inerente al corso di laurea.";
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
                <Text variant="small" style={{marginTop: '10px', marginBottom: '10px'}}>
                    {mainText}
                </Text>

                <Text variant="small" styles={cfuStyle}>
                    {cfuText}
                </Text>

                <Text styles={descriptionTextStyles}>
                    {yearText !== "" && yearText !== null ? <Chip label={yearText} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeSecondary }} className="m-1" /> : <></>}
                    {semesterText !== "" && semesterText !== null ? <Chip label={semesterText} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeSecondary }} /> : <></>}
                </Text>

                {
                    (() => {
                        if (data.gruppo !== "" && data.gruppo !== null) {
                            return (
                                <ActionButton 
                                    onClick={ () => redirectToLink(data.gruppo as any)}
                                    iconProps={telegramGroupIcon} 
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }} 
                                    disabled={data.gruppo === "" || data.gruppo === null}
                                    allowDisabledFocus>
                                    Gruppo Telegram
                                </ActionButton>
                            );
                        } else if ( (data.gruppo === "" || data.gruppo === null) && data.anno !== -1) {
                            return (
                                <ActionButton
                                    iconProps={telegramGroupIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }}
                                    disabled
                                    allowDisabledFocus>
                                    Gruppo non disponibile
                                </ActionButton>
                            );
                        }
                    })()
                }

                { data.anno !== -1 ?
                    <CommandButton
                        text="Siti web"
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
                                    onClick={() => redirectToLink(data.wiki as any)}
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