import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { FontSizes } from '@fluentui/theme';
import { getTheme } from '@fluentui/react';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: '200px' } };
const dropdownControlledExampleOptions = [
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange' },
    { key: 'grape', text: 'Grape' },
];

const theme = getTheme();

export enum ItemsKeys {
    home = "home",
    courses = "courses",
    faqProposer = "faqProposer",
    additionalGroups = "additionalGroups"
}

interface Props {
    contentChanged: (k: ItemsKeys) => void;
}

const HeaderMenu = (props: Props) => {
    // Pivot
    const [selectedKey, setSelectedKey] = React.useState(ItemsKeys.home);
    const handleLinkClick = (item?: PivotItem, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setSelectedKey(item!.props.itemKey! as ItemsKeys);
        props.contentChanged(item!.props.itemKey! as ItemsKeys);
    };

    // Dropdown
    const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();
    const onChange = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        setSelectedItem(item);
    };

    return (
        <div style={{ boxShadow: theme.effects.elevation4 }} className="header-menu">
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
                <PivotItem headerText="Gruppi extra" style={{ fontSize: FontSizes.size24 }} itemKey={ItemsKeys.additionalGroups} />
            </Pivot>
            {/*
            <Dropdown
                selectedKey={selectedKey}
                onChange={onChange}
                placeholder="Select an option"
                options={dropdownControlledExampleOptions}
                styles={dropdownStyles}
            />*/}
        </div>
    );
};

export default HeaderMenu;