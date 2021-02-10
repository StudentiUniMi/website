import { Link, Text } from 'office-ui-fabric-react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, ITextStyles, Persona } from '@fluentui/react';
import Course from '../models/Course'

initializeIcons();

interface Props {
    data: Course
}

// const gdriveStyle = { width: '15px', height: '15px', marginBottom: '3px' }

const CourseItem = (props: Props) => {
    var data = props.data;

    const siteTextStyles: ITextStyles = {
        root: {
            color: "#025F52",
            fontWeight: FontWeights.semibold,
        },
    };
    const descriptionTextStyles: ITextStyles = {
        root: {
            color: "#333333",
            fontWeight: FontWeights.semibold,
        },
    };
    const helpfulTextStyles: ITextStyles = {
        root: {
            color: "#333333",
            fontWeight: FontWeights.regular,
        },
    };
    const cardTokens: ICardTokens = { childrenMargin: 12 };

    let personaIconUrl: string | undefined;
    if (data.anno === -1) // Set del logo del gruppo principale
    { 
        personaIconUrl = data.cdl === 'triennale_informatica'?  process.env.PUBLIC_URL + '/informatica.jpg' : process.env.PUBLIC_URL + '/unimi.jpg'
    }
        
    return (
        <Card tokens={cardTokens}>
            <Card.Item>
                <Persona imageUrl={personaIconUrl} /*onRenderPrimaryText={() => <div style={{wordWrap:'break-word'}}>{data.name}</div> }*/ text={data.name} />
            </Card.Item>
            <Card.Section>
                {   // Gruppo anno accademico descrizione in caso c'è il link disponibile (per ora non ce ne sono)
                    ( () => {
                        if (data.anno === -1 && data.gruppo !== null) {
                            return <Text variant="small" styles={helpfulTextStyles}>Gruppo per qualsiasi tipo di discussione inerente a questo corso di laurea.</Text>
                        } else {
                            return "";
                        }
                    })()
                }
                
                
                {
                    ( () => {
                        if (data.cfu !== null) {
                            return (
                                <Text variant="small" styles={siteTextStyles}>{data.cfu} CFU</Text>
                            )
                        } else {
                            return "";
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
                            case 0:
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
                        } else {
                            return "";
                        }
                    })()
                }
                </Text>

                {
                    ( () => {
                        if (data.gruppo !== null) {
                            return (
                            <Text variant="small" styles={helpfulTextStyles}>
                                <i className="fab fa-telegram" style={{color: '#1aa3ed'}}></i>
                                &nbsp;
                                <Link href={data.gruppo} target="_blank">
                                    Gruppo Telegram
                                </Link>
                            </Text>
                            )
                        } else if ( data.anno === -1) {
                            return (
                                <Text variant="small" styles={helpfulTextStyles}>Contatta un amministratore se vuoi essere aggiunto al gruppo.</Text>
                            )
                        } else {
                            return (
                                <Text variant="small" styles={helpfulTextStyles}>Gruppo non disponibile.</Text>
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