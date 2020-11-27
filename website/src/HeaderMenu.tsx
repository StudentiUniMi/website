import * as React from 'react';
import './App.css';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { FontSizes } from '@fluentui/theme';
import { getTheme } from '@fluentui/react';

const theme = getTheme();

export enum ItemsKeys {
    home = "home",
    courses = "courses",
    faqProposer = "faqProposer"
}

interface Props {
    contentChanged: (k: ItemsKeys) => void;
}

const HeaderMenu = (props: Props) => {
    const [selectedKey, setSelectedKey] = React.useState(ItemsKeys.home);

    const handleLinkClick = (item?: PivotItem, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setSelectedKey(item!.props.itemKey! as ItemsKeys);
        props.contentChanged(item!.props.itemKey! as ItemsKeys);
    };

    return (
        <div id="header-menu" style={{ boxShadow: theme.effects.elevation4 }}>
            <Pivot
                aria-label="Menu principale"
                selectedKey={selectedKey}
                // eslint-disable-next-line react/jsx-no-bind
                onLinkClick={handleLinkClick}
                headersOnly={true}
                style={{ fontSize: FontSizes.size24 }}
            >
                <PivotItem headerText="Home" style={{ fontSize: FontSizes.size24 }} itemKey={ItemsKeys.home} />
                <PivotItem headerText="Corsi e faq" style={{ fontSize: FontSizes.size24 }} itemKey={ItemsKeys.courses} />
                <PivotItem headerText="Proponi faq" style={{ fontSize: FontSizes.size24 }} itemKey={ItemsKeys.faqProposer} />
            </Pivot>
        </div>
    );
};

export default HeaderMenu;