import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Text } from 'office-ui-fabric-react';
import {
    Card,
    ICardTokens,
} from "@uifabric/react-cards";
import ExtraGroup from './models/ExtraGroup'
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, Icon, ITextStyles, Persona } from '@fluentui/react';
initializeIcons();

interface Props {
    data: ExtraGroup
}


const ExtraGroupView = (props: Props) => {
    var data = props.data;

    /*
    const siteTextStyles: ITextStyles = {
        root: {
            color: "#025F52",
            fontWeight: FontWeights.semibold,
        },
    };
    */
    const descriptionTextStyles: ITextStyles = {
        root: {
            fontSize: "12px",
            color: "#333333",
            fontWeight: FontWeights.semibold
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
            aria-label="Clickable vertical card with image bleeding at the center of the card"
            tokens={cardTokens}
        >
            <Card.Item>
                <Persona text={data.name} />
            </Card.Item>
            <Card.Section>
                <Text styles={descriptionTextStyles}>
                    {data.description}
                </Text>
                <Text variant="small" styles={helpfulTextStyles}>
                    <i className="fab fa-telegram-plane" style={{color: '#6087eb'}}></i>
                    &nbsp;
                    <Link href={data.gruppo}>
                        Gruppo Telegram
                    </Link>
                </Text>
                {/*
                <Text variant="small" styles={helpfulTextStyles}>
                    <Icon iconName="Link" />
                    {data.name}
                </Text>
                {data.name}*/}

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

export default ExtraGroupView;