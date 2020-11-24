import * as React from 'react';
import './App.css';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import { initializeIcons } from '@uifabric/icons';

const getTabId = (itemKey: string) => {
    return `ShapeColorPivot_${itemKey}`;
};

export enum ItemsKeys {
    homepage = "homepage",
    groups = "groups",
    faqProposer = "faqProposer"
}

interface Props {
    contentChanged: (k: ItemsKeys) => void;
}

const Menu = (props: Props) => {
    const [selectedKey, setSelectedKey] = React.useState(ItemsKeys.homepage);

    const handleLinkClick = (item?: PivotItem, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setSelectedKey(item!.props.itemKey! as ItemsKeys);
        props.contentChanged(item!.props.itemKey! as ItemsKeys);
    };

    return (
        <div>
            <Pivot
                aria-label="Separately Rendered Content Pivot Example"
                selectedKey={selectedKey}
                // eslint-disable-next-line react/jsx-no-bind
                onLinkClick={handleLinkClick}
                headersOnly={true}
                getTabId={getTabId}
            >
                <PivotItem headerText="Homepage" itemKey={ItemsKeys.homepage} />
                <PivotItem headerText="Gruppi" itemKey={ItemsKeys.groups} />
                <PivotItem headerText="Proponi faq" itemKey={ItemsKeys.faqProposer} />
            </Pivot>
        </div>
    );
};

export default Menu;