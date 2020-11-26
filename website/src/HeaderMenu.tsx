import * as React from 'react';
import './App.css';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { initializeIcons } from '@uifabric/icons';
import { getTheme } from '@fluentui/react';

const theme = getTheme();

export enum ItemsKeys {
    homepage = "homepage",
    groups = "groups",
    faq = "faq",
    faqProposer = "faqProposer"
}

interface Props {
    contentChanged: (k: ItemsKeys) => void;
}

const HeaderMenu = (props: Props) => {
    const [selectedKey, setSelectedKey] = React.useState(ItemsKeys.homepage);

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
            >
                <PivotItem headerText="Homepage" itemKey={ItemsKeys.homepage} />
                <PivotItem headerText="Gruppi e siti web" itemKey={ItemsKeys.groups} />
                <PivotItem headerText="Faq" itemKey={ItemsKeys.faq} />
                <PivotItem headerText="Proponi faq" itemKey={ItemsKeys.faqProposer} />
            </Pivot>
        </div>
    );
};

export default HeaderMenu;