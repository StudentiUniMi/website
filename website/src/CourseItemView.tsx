import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Text } from 'office-ui-fabric-react';
import {
    Card,
    ICardTokens,
} from "@uifabric/react-cards";
import Course from './models/Course'
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, Icon, ITextStyles, Persona } from '@fluentui/react';
initializeIcons();

interface Props {
    data: Course
}


const CourseItemView = (props: Props) => {
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

    return (
        <Card
            tokens={cardTokens}
        >
            <Card.Item>
                <Persona text={data.name} />
            </Card.Item>
            <Card.Section>
                <Text variant="small" styles={siteTextStyles}>
                    {data.cfu} CFU
          </Text>
                <Text styles={descriptionTextStyles}>
                {
                    ( () => {
                        if (data.anno === "") {
                            return <span></span>;
                        } else if (data.anno === "Complementare") {
                            return <span>Complementare, </span>;
                        } else return <span>{data.anno}° Anno, </span>;
                    })()
                }
                {data.semestre}° Semestre
          </Text>
                {
                    ( () => {
                        if (data.gruppo !== "") {
                            return (
                            <Text variant="small" styles={helpfulTextStyles}>
                                <i className="fab fa-telegram-plane" style={{color: '#6087eb'}}></i>
                                &nbsp;
                                <Link href={data.gruppo}>
                                    Gruppo Telegram
                                </Link>
                            </Text>
                            )
                        } else {
                            return (
                                <Text variant="small" styles={helpfulTextStyles}>Gruppo non disponibile.</Text>
                            )
                        }
                    })()
                }
                {
                    data.websites.length !== 0 ?
                        <Text variant="small" styles={helpfulTextStyles}>
                            <i className="fas fa-link" style={{color:'#696a6b'}}></i>
                            &nbsp;
                            {data.websites.map(
                                (e, i) => {
                                    return (
                                        <span key={i}>
                                            <Link href={e.link}>
                                                {e.etichetta}
                                            </Link>
                                            {i + 1 < data.websites.length ? <span>,&nbsp;</span> : <span></span>}
                                        </span>
                                    )
                                }
                            )}
                        </Text>
                        : <span className="mt-0"></span>
                }
                {
                    data.faq !== "" ?
                        <Text variant="small" styles={helpfulTextStyles}>
                            <i className="far fa-question-circle"></i>
                    &nbsp;
                    <Link href={data.faq}>
                            Faq
                    </Link>
                        </Text>
                        :
                        <span className="mt-0"></span>
                }

            </Card.Section>
            {/*
            <Card.Section
                horizontal
                styles={footerCardSectionStyles}
                tokens={footerCardSectionTokens}
            >
                <Icon iconName="RedEye" styles={iconStyles} />
                <Icon iconName="SingleBookmark" styles={iconStyles} />
                <Stack.Item grow={1}>
                    <span />
                </Stack.Item>
                <Icon iconName="MoreVertical" styles={iconStyles} />
            </Card.Section>*/}
        </Card>
    );
};

export default CourseItemView;