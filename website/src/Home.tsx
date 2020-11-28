import * as React from 'react';
import './App.css';
import { Link, Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { DefaultPalette, Stack, IStackStyles, IStackTokens } from 'office-ui-fabric-react';
import { IconButton, IIconProps, IContextualMenuProps } from 'office-ui-fabric-react';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/*const stackStyles: IStackStyles = {
    root: {
        background: DefaultPalette.themeTertiary,
    },
};*/

const stackStyles: IStackStyles = {
    root: {
        background: DefaultPalette.themeTertiary,
    },
};

const itemStyles: React.CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    height: 100,
    justifyContent: 'center',
    width: 100,
};

const iconClass = mergeStyles({
    fontSize: 50, // perchè non va?? dio santo
    height: 100,
    width: 100,
});

const Home = () => {
    return (
        <div id="home">
            <div id="home-text">
                <Text style={{ fontSize: FontSizes.size16 }}>
                    Sito web nato con lo scopo di creare un punto centrale per tutti i contenuti del nostro network.<br />
                Sono disponibili i collegamenti ai siti web, gruppi telegram e faq dei corsi delle triennali di informatica, <br />
                informatica musicale, informatica per la comunicazione digitale, e sicurezza dei sistemi e delle reti informatiche. <br />
                Per chiunque volesse collaborare al progetto è pregato di scrivere a <Link href="https://t.me/giuseppetm">@giuseppetm</Link> su telegram.<br />
                </Text>
            </div>
            <br />
            <div id="home-collegamenti">
                <Stack horizontal horizontalAlign="space-around">
                    <span style={itemStyles}>
                        <Link href="">
                            <IconButton iconProps={{ iconName: "ComplianceAudit" }} className={iconClass} />
                        </Link>
                    </span>
                    <span style={itemStyles}>
                        <Link href="https://discord.gg/pPGUrr35sv">
                            <IconButton iconProps={{ iconName: "ChatBot" }} className={iconClass} />
                        </Link>
                    </span>
                    <span style={itemStyles}>
                        <Link href="">
                            <IconButton iconProps={{ iconName: "Send" }} className={iconClass} />
                        </Link>
                    </span>
                    <span style={itemStyles}>
                        <Link href="https://drive.google.com/drive/folders/0BwzuyD3iLGcbcUNxTVNOVE9FR1E">
                            <IconButton iconProps={{ iconName: "CloudWeather" }} className={iconClass} />
                        </Link>
                    </span>
                </Stack>
                <Stack horizontal horizontalAlign="space-around" styles={stackStyles}>
                    <span style={itemStyles}>
                        <Text style={{ fontSize: FontSizes.size16 }}>
                            Regolamento del Network
                        </Text>
                    </span>
                    <span style={itemStyles}>
                        <Text style={{ fontSize: FontSizes.size16 }}>
                            Server Discord del Network
                        </Text>
                    </span>
                    <span style={itemStyles}>
                        <Text style={{ fontSize: FontSizes.size16 }}>
                            Canale telegram del Network
                        </Text>
                    </span>
                    <span style={itemStyles}>
                        <Text style={{ fontSize: FontSizes.size16 }}>
                            Drive del Network
                        </Text>
                    </span>
                </Stack>
            </div>
        </div >
    )
};

export default Home;