import { Link, Text } from 'office-ui-fabric-react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, ITextStyles, Persona } from '@fluentui/react';
import Course from '../models/Course';
import { useTheme } from '@fluentui/react-theme-provider';

// const gdriveStyle = { width: '15px', height: '15px', marginBottom: '3px' }
initializeIcons();
interface Props { data: Course };

const CourseItem = (props: Props) => {
    const theme = useTheme();
    var data = props.data;

    const cfuStyle: ITextStyles = { root: { fontWeight: FontWeights.semibold, color: theme.palette.themePrimary } };
    const descriptionTextStyles: ITextStyles = { root: { fontWeight: FontWeights.semibold } };
    const helpfulTextStyles: ITextStyles = { root: { fontWeight: FontWeights.regular } };
    const cardTokens: ICardTokens = { childrenMargin: 12 };

    var primaryText : any;
    var overflow : boolean = false;
    var cfuText : any;
    var yearText : any;
    var semesterText : any;
    var groupText : any;
    var websitesText : any;
    var wikiText : any;

    /// PrimaryText inizialization
    if (data?.name!.length >= 33) {
        primaryText = data.name;
    } else {
        overflow = true;
        primaryText = <div style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{data.name}</div>;
    }

    // PersonaUrl inizialization
    let personaIconUrl: string | undefined;
    if (data.anno === -1) personaIconUrl = process.env.PUBLIC_URL + `/degree_groups_images/${data.cdl}150.jpg`; 
    else { personaIconUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${data.chat_id}.png`; }

    // CFU inizialization
    if (data.cfu !== null) {
        cfuText = <Text variant="small" styles={cfuStyle}>{data.cfu} CFU</Text>;
    }

    // Year inizialization
    switch (data.anno) {
        case -1:
            yearText = "";
            break;
        case null:
            yearText = "";
            break;
        case -2:
            yearText = <span>Complementare, </span>;
            break;
        default:
            yearText = <span>{data.anno}° Anno, </span>;
            break;
    }

    // Semester inizialization
    if (data.semestre !== null) {
        semesterText = <span>{data.semestre}° Semestre</span>;
    }

    // Group link inizialization, or other text for main degree group
    if (data.anno === -1 && (data.gruppo === "" || data.gruppo === null)) {
        groupText = <Text variant="small" styles={helpfulTextStyles}>Contatta un amministratore se vuoi essere aggiunto al gruppo.</Text>;
    } else if (data.anno === -1 && (data.gruppo !== "" && data.gruppo !== null)) {
        groupText = ( 
        <Text variant="small" styles={helpfulTextStyles}>
            <div className="mb-2">Gruppo principale per qualsiasi tipo di discussione inerente al corso di laurea.</div>
            <i className="fab fa-telegram" style={{ color: theme.palette.themePrimary }}></i>
            &nbsp;
            <Link href={data.gruppo} target="_blank">
                Gruppo Telegram
            </Link>
        </Text>
        );
    } else if ( data.gruppo === "" || data.gruppo === null ) {
        groupText = <Text variant="small" styles={helpfulTextStyles}>Gruppo non disponibile.</Text>;
    } else {
        groupText = (
            <Text variant="small" styles={helpfulTextStyles}>
                <i className="fab fa-telegram" style={{ color: theme.palette.themePrimary }}></i>
                &nbsp;
                <Link href={data.gruppo} target="_blank">
                    Gruppo Telegram
                </Link>
            </Text>
        );
    } 

    // Websites inizialization
    if ( (data.websites ?? []).length !== 0) {
        websitesText = (
            <Text variant="small" styles={helpfulTextStyles}>
                <i className="fas fa-home" style={{color:'#696a6b'}}></i>
                &nbsp;
                {data.websites.map(
                    (e, i) => {
                        return (
                            <span key={i}>
                                <Link href={e.link} target="_blank">
                                    {e.etichetta}
                                </Link>
                                {i + 1 < data.websites.length ? <span>,&nbsp;</span> : ""}
                            </span>
                        )
                    }
                )}
            </Text>
        );
    }

    // Wiki inizialization
    if (data.wiki !== null && data.wiki !== "") { 
        wikiText = (
            <div className="mr-2">
                <i className="fas fa-question-circle mr-1" style={{color: '#22c9bb'}}></i>
                <a href={data.wiki} target="blank">Wiki</a>
            </div>
        );
    }
    
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
                {cfuText}

                <Text styles={descriptionTextStyles}>
                    {yearText}
                    {semesterText}
                </Text>

                {groupText}
                {websitesText}

                <Text variant="small" styles={helpfulTextStyles}>
                    {wikiText}
                </Text>

            </Card.Section>
        </Card>
    );
};

export default CourseItem;