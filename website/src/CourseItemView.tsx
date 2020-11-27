import * as React from 'react';
import './App.css';
import { Link, Text } from 'office-ui-fabric-react';
import {
    Card,
    ICardTokens,
    ICardSectionStyles,
    ICardSectionTokens,
} from "@uifabric/react-cards";
import Course from './models/Course'
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, Icon, IIconStyles, ITextStyles, Persona, Stack } from '@fluentui/react';
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
    const iconStyles: IIconStyles = {
        root: {
            color: "#0078D4",
            fontSize: 16,
            fontWeight: FontWeights.regular,
        },
    };
    const footerCardSectionStyles: ICardSectionStyles = {
        root: {
            borderTop: "1px solid #F3F2F1",
        },
    };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const footerCardSectionTokens: ICardSectionTokens = { padding: '12px 0px 0px' };

    return (
        <Card
            aria-label="Clickable vertical card with image bleeding at the center of the card"
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
                    {data.anno}° Anno, {data.semestre}° Semestre
          </Text>
                <Text variant="small" styles={helpfulTextStyles}>
                    <Icon iconName="Send" />
                    &nbsp;
                    <Link href={data.gruppo}>
                        Gruppo Telegram
                    </Link>
                </Text>
                <Text variant="small" styles={helpfulTextStyles}>
                    <Icon iconName="Link" />
                    &nbsp;
                    <Link href={data.website}>
                        Sito Web
                    </Link>
                </Text>
                <Text variant="small" styles={helpfulTextStyles}>
                    <Icon iconName="Robot" />
                    &nbsp;
                    <Link href={data.faq}>
                        Faq
                    </Link>
                </Text>
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