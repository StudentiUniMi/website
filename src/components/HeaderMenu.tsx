import React from "react";
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { FontSizes } from '@fluentui/theme';
import { Dropdown, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { useHistory } from "react-router-dom";

const onRenderCaretDown = (): JSX.Element => {
    return <Icon iconName="GripperBarHorizontal" />;
};

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: {  border: 'none', borderStyle: 'none', height: '44px', backgroundColor: '#faf9f8', alignItems: 'center', fontSize: FontSizes.size16 },
    dropdownItems: { textAlign: 'center', alignItems: 'center' },
    caretDown: { fontSize: '15px'},
    caretDownWrapper: { right: '25px', top: '10px' }
};

export enum ItemsKeys {
    home = "home",
    rules = "rules",
    courses = "courses",
    services = "services",
    additional_groups = "additional_groups",
    administrators = "administrators",
    representatives = "representatives"
}

const texts: Map<ItemsKeys, string> = new Map<ItemsKeys, string>([
    [ItemsKeys.home, "Home"],
    [ItemsKeys.rules, "Regolamento"],
    [ItemsKeys.courses, "Corsi"],
    [ItemsKeys.services, "Servizi"],
    [ItemsKeys.additional_groups, "Gruppi extra"],
    [ItemsKeys.administrators, "Amministratori"],
    [ItemsKeys.representatives, "Rappresentanti"]
]);

const HeaderMenu = () => {
    const history = useHistory();

    const getPath = React.useCallback((): Array<string|boolean> =>
    {
        var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
        let first = states.length > 0 ? states[0] : ''
        let isCorrectPathKey = Object.keys(ItemsKeys).filter(x => x === first).length !== 0
        return [first, isCorrectPathKey]
    }, [history.location.pathname])

    let didMount = React.useRef(false)

    React.useEffect(() =>
    {
        if(!didMount.current)
        {
            didMount.current = true
            let [path, isCorrect] = getPath()
            if(!isCorrect)
            {
                history.push('/home/')
                setSelectedKey(ItemsKeys.home)
            }
            else
            {
                setSelectedKey(path as ItemsKeys)
            }
        }
    }, [getPath, history])
    
    let [path, isCorrect] = getPath()

    const [selectedKey, setSelectedKey] = React.useState(isCorrect ? path as ItemsKeys : ItemsKeys.home);

    const handlePivotLinkClick = (item?: PivotItem, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setSelectedKey(item!.props.itemKey! as ItemsKeys);
        history.push(`/${item!.props.itemKey!}/`)
    };

    const onDropdownValueChange = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        setSelectedKey(item!.key! as ItemsKeys);
        history.push(`/${item!.key! as string}/`)
    };

    const dropdownOptions: IDropdownOption[] = Object.values(ItemsKeys).map(x => ({ key: x, text: texts.get(x)! }))

    return (
        <div className="header-menu" style={{  boxShadow: '0px 0.5px 0.5px #b3b5b4' }}>
            <div className="pivot">
                <Pivot
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
                    onRenderCaretDown={onRenderCaretDown}
                />
            </div>
        </div>
    );
};

export default HeaderMenu;