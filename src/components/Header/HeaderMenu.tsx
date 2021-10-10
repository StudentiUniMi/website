import React from "react";
import LocalizationService from "../../services/LocalizationService";
import { FontSizes } from '@fluentui/theme';
import { Dropdown, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { useHistory } from "react-router-dom";
import { useTheme } from '@fluentui/react-theme-provider';
import { Pivot, PivotItem, IPivotStyles } from '@fluentui/react';
import { withCookies } from "react-cookie";

export enum ItemsKeys {
    home = "home",
    courses = "courses",
    services = "services",
    rules = "rules",
    representatives = "representatives",
    organization = "organization"
};

const HeaderMenu = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    console.log("LOCALE: ", locale)
    const history = useHistory();
    const onRenderCaretDown = (): JSX.Element => { return <Icon iconName="List" />; };
    
    const texts: Map<ItemsKeys, string | undefined> = new Map<ItemsKeys, string | undefined>([
        [ItemsKeys.home, locale?.headerMenuItems.home],
        [ItemsKeys.courses, locale?.headerMenuItems.courses],
        [ItemsKeys.services, locale?.headerMenuItems.services],
        [ItemsKeys.rules, locale?.headerMenuItems.rules],
        [ItemsKeys.representatives, locale?.headerMenuItems.university],
        [ItemsKeys.organization, locale?.headerMenuItems.aboutUs]
    ]);
    
    const dropdownStyles: Partial<IDropdownStyles> = {
        dropdown: { color: theme.palette.neutralPrimary, border: 'none', borderStyle: 'none', height: '44px', alignItems: 'center', fontSize: FontSizes.size16 },
        dropdownItems: { color: theme.palette.neutralPrimary, backgroundColor: theme.palette.white, textAlign: 'center', alignItems: 'center' },
        caretDown: { fontSize: '15px' },
        caretDownWrapper: { right: '25px', top: '10px' }
    };

    const pivotStyles: Partial<IPivotStyles> = {
        root: { color: theme.palette.neutralPrimary, fontSize: FontSizes.size24 },
    };

    const getPath = React.useCallback((): Array<string | boolean> => {
        var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
        let first = states.length > 0 ? states[0] : '';
        let isCorrectPathKey = Object.keys(ItemsKeys).filter(x => x === first).length !== 0;
        return [first, isCorrectPathKey];
    }, [history.location.pathname]);

    let didMount = React.useRef(false);
    let [path, isCorrect] = getPath();
    const [selectedKey, setSelectedKey] = React.useState(isCorrect ? path as ItemsKeys : ItemsKeys.home);

    React.useEffect(() => {
        if (!didMount.current) {
            didMount.current = true;
            let [path, isCorrect] = getPath();
            if (!isCorrect) {
                history.push('/home/');
                setSelectedKey(ItemsKeys.home);
            } else {
                setSelectedKey(path as ItemsKeys);
            }
        }
    }, [getPath, history]);

    const handlePivotLinkClick = (item?: PivotItem, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (item!.props.itemKey !== selectedKey) {
            setSelectedKey(item!.props.itemKey! as ItemsKeys);
            history.push(`/${item!.props.itemKey!}/`);
        }
    };

    const onDropdownValueChange = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        if (item!.key !== selectedKey) {
            setSelectedKey(item!.key! as ItemsKeys);
            history.push(`/${item!.key! as string}/`);
        }
    };

    const dropdownOptions: IDropdownOption[] = Object.values(ItemsKeys).map(x => ({ key: x, text: texts.get(x)! }));



    return (
        <div className="header-menu">

            <div className="pivot mr-4 ml-3">
                <Pivot
                    selectedKey={selectedKey}
                    onLinkClick={handlePivotLinkClick}
                    headersOnly={true}
                    styles={pivotStyles}
                    theme={theme}
                    overflowBehavior={'menu'}
                >
                    {Object.values(ItemsKeys).map((x, i) => <PivotItem headerText={texts.get(x)} itemKey={x} />)}
                </Pivot>
            </div>

            <div className="dropdown">
                <Dropdown
                    selectedKey={selectedKey}
                    onChange={onDropdownValueChange}
                    options={dropdownOptions}
                    styles={dropdownStyles}
                    onRenderCaretDown={onRenderCaretDown}
                    theme={theme}
                />
            </div>
        </div>
    );
};

export default withCookies(HeaderMenu);