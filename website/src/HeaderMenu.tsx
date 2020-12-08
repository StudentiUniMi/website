import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { FontSizes } from '@fluentui/theme';
import { getTheme } from '@fluentui/react';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const theme = getTheme();
const dropdownStyles: Partial<IDropdownStyles> = {
    //dropdownOptionText: { textAlign: 'center' },
    dropdown: { width: '100%', border: 'none', borderStyle: 'none', height: '44px', backgroundColor: '#faf9f8' },
    dropdownItems: { textAlign: 'center' }
};

export enum ItemsKeys {
    home = "home",
    courses = "courses",
    faqProposer = "faqProposer",
    additionalGroups = "additionalGroups"
}

const texts: Map<ItemsKeys, string> = new Map<ItemsKeys, string>([
    [ItemsKeys.home, "Home"],
    [ItemsKeys.courses, "Corsi"],
    [ItemsKeys.faqProposer, "Proponi faq"],
    [ItemsKeys.additionalGroups, "Gruppi extra"]
])

interface Props {
    contentChanged: (k: ItemsKeys) => void;
}

const HeaderMenu = (props: Props) => {
    const history = useHistory()

    var initialState = history.location.pathname !== '' && history.location.pathname !== '/' ? history.location.pathname.substring(1, history.location.pathname.length - 1) as ItemsKeys : ItemsKeys.home
    console.log(initialState)

    const [selectedKey, setSelectedKey] = React.useState(initialState);
    history.push(`/${initialState}/`);


    const handlePivotLinkClick = (item?: PivotItem, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setSelectedKey(item!.props.itemKey! as ItemsKeys);
        props.contentChanged(item!.props.itemKey! as ItemsKeys);
        history.push(`/network/${item!.props.itemKey!}/`);
    };

    const onDropdownValueChange = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        setSelectedKey(item!.key! as ItemsKeys);
        props.contentChanged(item!.key! as ItemsKeys);
        history.push(`/network/${item!.key!}/`);
    };

    const dropdownOptions: IDropdownOption[] = Object.values(ItemsKeys).map(x => ({ key: x, text: texts.get(x)! }))

    return (
        <div style={{ boxShadow: theme.effects.elevation4 }} className="header-menu">
            <div className="pivot">
                <Pivot
                    aria-label="Menu principale"
                    selectedKey={selectedKey}
                    onLinkClick={handlePivotLinkClick}
                    headersOnly={true}
                    style={{ fontSize: FontSizes.size24 }}
                >
                    <PivotItem headerText={texts.get(ItemsKeys.home)} style={{ fontSize: FontSizes.size24 }} itemKey={ItemsKeys.home} />
                    <PivotItem headerText={texts.get(ItemsKeys.courses)} style={{ fontSize: FontSizes.size24 }} itemKey={ItemsKeys.courses} />
                    <PivotItem headerText={texts.get(ItemsKeys.faqProposer)} style={{ fontSize: FontSizes.size24 }} itemKey={ItemsKeys.faqProposer} />
                    <PivotItem headerText={texts.get(ItemsKeys.additionalGroups)} style={{ fontSize: FontSizes.size24 }} itemKey={ItemsKeys.additionalGroups} />
                </Pivot>
            </div>

            <div className="dropdown">
                <Dropdown
                    selectedKey={selectedKey}
                    onChange={onDropdownValueChange}
                    options={dropdownOptions}
                    styles={dropdownStyles}
                />
            </div>
        </div>
    );
};

export default HeaderMenu;