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
                        data.anno !== "Complementare" ? <span>{data.anno}° Anno, </span> : <span>Complementare, </span>
                    }
                    {data.semestre}° Semestre
          </Text>
                <Text variant="small" styles={helpfulTextStyles}>
                    <Icon iconName="Send" />
                    &nbsp;
                    <Link href={data.gruppo}>
                        Gruppo Telegram
                    </Link>
                </Text>
                {
                    data.websites.length !== 0 ?
                        <Text variant="small" styles={helpfulTextStyles}>
                            <Icon iconName="Link" />
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
                            <Icon iconName="Robot" />
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