import { Link, Text } from 'office-ui-fabric-react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, ITextStyles, Persona } from '@fluentui/react';
import Course from '../models/Course';
import { useTheme } from '@fluentui/react-theme-provider';

initializeIcons();
interface Props { data: Course };

// const gdriveStyle = { width: '15px', height: '15px', marginBottom: '3px' }

const CourseItem = (props: Props) => {
    const theme = useTheme();
    var data = props.data;

    const cfuStyle: ITextStyles = {
        root: {
            color: theme.palette.themePrimary,
            fontWeight: FontWeights.semibold,
        },
    };
    const descriptionTextStyles: ITextStyles = {
        root: {
            fontWeight: FontWeights.semibold,
        },
    };
    const helpfulTextStyles: ITextStyles = {
        root: {
            fontWeight: FontWeights.regular,
        },
    };
    const cardTokens: ICardTokens = { childrenMargin: 12 };

    // PrimaryText
    var primaryText : any;
    var changed : boolean = false;
    if (data?.name!.length >= 33) {
        primaryText = data.name;
    } else {
        changed = true;
        primaryText = <div style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{data.name}</div>;
    }

    // PersonaUrl
    let personaIconUrl: string | undefined;
    if (data.anno === -1) personaIconUrl = process.env.PUBLIC_URL + `/degree_groups_images/${data.cdl}150.jpg`; 
    else { personaIconUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${data.chat_id}.png`; }
    
    return (
        <Card tokens={cardTokens}>
            <Card.Item>
                {changed === true ?
                    <Persona coinSize={48} imageUrl={personaIconUrl} onRenderPrimaryText={() => primaryText } text={data.name} />
                    :
                    <Persona imageUrl={personaIconUrl} text={data.name} />
                }
            </Card.Item>
            <Card.Section>
                {   // Gruppo anno accademico descrizione in caso c'è il link disponibile (per ora non ce ne sono)
                    ( () => {
                        if (data.anno === -1 && data.gruppo !== null) {
                            return <Text variant="small" styles={helpfulTextStyles}>Gruppo per qualsiasi tipo di discussione inerente a questo corso di laurea.</Text>
                        }
                    })()
                }
                
                {
                    ( () => {
                        if (data.cfu !== null) {
                            return (
                                <Text variant="small" styles={cfuStyle}>{data.cfu} CFU</Text>
                            )
                        }
                    })()
                }

                <Text styles={descriptionTextStyles}>
                {
                    (() => 
                    {
                        switch (data.anno) {
                            case -1:
                                return "";
                            case null:
                                return "";
                            case -2:
                                return <span>Complementare, </span>;
                            default:
                                return <span>{data.anno}° Anno, </span>;
                        }
                    })()
                }
                {
                    ( () => {
                        if (data.semestre !== null) {
                            return <span>{data.semestre}° Semestre</span>;
                        }
                    })()
                }
                </Text>

                {
                    ( () => {
                        if ( data.anno === -1) {
                            return (
                                <Text variant="small" styles={helpfulTextStyles}>Contatta un amministratore se vuoi essere aggiunto al gruppo.</Text>
                            )
                        } else if ( data.gruppo === "" || data.gruppo === null) {
                            return (
                                <Text variant="small" styles={helpfulTextStyles}>Gruppo non disponibile.</Text>
                            )
                        } else {
                            return (
                            <Text variant="small" styles={helpfulTextStyles}>
                                <i className="fab fa-telegram" style={{ color: theme.palette.themePrimary }}></i>
                                &nbsp;
                                <Link href={data.gruppo} target="_blank">
                                    Gruppo Telegram
                                </Link>
                            </Text>
                            )
                        } 
                    })()
                }
                {
                    (data.websites ?? []).length !== 0 ?
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
                        : ""
                }
                <Text variant="small" styles={helpfulTextStyles}>
                {
                   data.wiki !== null && data.wiki !== "" ? 
                   <div className="mr-2">
                        <i className="fas fa-question-circle mr-1" style={{color: '#22c9bb'}}></i>
                        <a href={data.wiki} target="blank">Wiki</a>
                    </div> : ""
                }
                
                </Text>

            </Card.Section>
        </Card>
    );
};

export default CourseItem;