import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { FontSizes } from '@fluentui/theme';
import { Dropdown, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import { useHistory } from "react-router-dom";

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: {  border: 'none', borderStyle: 'none', height: '44px', backgroundColor: '#faf9f8', alignItems: 'center', fontSize: FontSizes.size16 },
    dropdownItems: { textAlign: 'center', alignItems: 'center' },
    caretDown: { fontSize: '15px'},
    caretDownWrapper: { right: '25px' }
};

export enum ItemsKeys {
    home = "home",
    rules = "rules",
    courses = "courses",
    services = "services",
    additional_groups = "additional_groups",
    administrators = "administrators"
}

const texts: Map<ItemsKeys, string> = new Map<ItemsKeys, string>([
    [ItemsKeys.home, "Home"],
    [ItemsKeys.rules, "Regolamento"],
    [ItemsKeys.courses, "Corsi"],
    [ItemsKeys.services, "Servizi"],
    [ItemsKeys.administrators, "Amministratori"],
    [ItemsKeys.additional_groups, "Gruppi extra"]
])

interface Props {
    contentChanged: (k: ItemsKeys) => void;
}

const HeaderMenu = (props: Props) => {
    const history = useHistory();

    var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
    let first = states.length >0 ? states[0]: ''
    let second = states.length > 1 ? states[1] + '/' : ''
    let third = states.length > 2 ? states[2]: ''
    
    let isCorrectPathKey = Object.keys(ItemsKeys).filter(x => x === first).length !== 0
    const [selectedKey, setSelectedKey] = React.useState(isCorrectPathKey ? first : ItemsKeys.home);
    history.push(`/${selectedKey}/${second}${third}`);
    props.contentChanged(selectedKey as ItemsKeys);

    const handlePivotLinkClick = (item?: PivotItem, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setSelectedKey(item!.props.itemKey! as ItemsKeys);
    };

    const onDropdownValueChange = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        setSelectedKey(item!.key! as ItemsKeys);
    };

    const dropdownOptions: IDropdownOption[] = Object.values(ItemsKeys).map(x => ({ key: x, text: texts.get(x)! }))

    return (
        <div style={{  boxShadow: '0px 0.5px 0.5px #b3b5b4' }} className="header-menu">
            <div className="pivot">
                <Pivot
                    aria-label="Main menu"
                    selectedKey={selectedKey}
                    onLinkClick={handlePivotLinkClick}
                    headersOnly={true}
                    style={{ fontSize: FontSizes.size24 }}
                >
                {Object.values(ItemsKeys).map((x,i) =><PivotItem key={i} headerText={texts.get(x)} style={{ fontSize: FontSizes.size24 }} itemKey={x}/>)}
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