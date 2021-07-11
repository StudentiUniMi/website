import React from "react";
import { IPivotStyles, Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { FontSizes } from '@fluentui/theme';
import { Dropdown, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import { Icon, IIconStyles } from 'office-ui-fabric-react/lib/Icon';
import { useHistory } from "react-router-dom";
import { IconButton, IIconProps, initializeIcons, Text } from 'office-ui-fabric-react';
import { TooltipHost, ITooltipHostStyles, TooltipDelay, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { useId } from '@uifabric/react-hooks';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { useBoolean } from '@uifabric/react-hooks';
import { Toggle } from '@fluentui/react';
import { useCookies } from "react-cookie";
import { useTheme } from '@fluentui/react-theme-provider';
import { SwatchColorPicker } from '@fluentui/react/lib/SwatchColorPicker';
import { semibold } from "../fonts";
import { palettes } from '../palettes';

const onRenderCaretDown = (): JSX.Element => { return <Icon iconName="List" />; };

export enum ItemsKeys {
    home = "home",
    organization = "organization",
    rules = "rules",
    courses = "courses",
    services = "services",
    additional_groups = "additional_groups",
    representatives = "representatives",
    contributors = "contributors"
}

const texts: Map<ItemsKeys, string> = new Map<ItemsKeys, string>([
    [ItemsKeys.home, "Home"],
    [ItemsKeys.organization, "Chi siamo"],
    [ItemsKeys.rules, "Regolamento"],
    [ItemsKeys.courses, "Corsi"],
    [ItemsKeys.services, "Servizi"],
    [ItemsKeys.additional_groups, "Gruppi extra"],
    [ItemsKeys.representatives, "Rappresentanti"],
    [ItemsKeys.contributors, "Contributori"]
]);


const languageOptions: IDropdownOption[] = [
    { key: 'ITA', text: 'Italiano', data: { icon: 'Memo' } },
    { key: 'ENG', text: 'Inglese', data: { icon: 'Print' } }
];

interface Props { changeTheme: () => void, changePalette: (id: string) => void };
initializeIcons();

const HeaderMenu = (props: Props) => {
    var theme = useTheme();
    const history = useHistory();
    const [cookies, setCookie] = useCookies();

    const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };
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

    let [path, isCorrect] = getPath();
    

    const [selectedKey, setSelectedKey] = React.useState(isCorrect ? path as ItemsKeys : ItemsKeys.home);
    
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

    /* Panel and components settings */
    const tooltipId = useId('tooltip');
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
    const settingsIcon: IIconProps = { iconName: 'Settings', styles: { root: { fontSize: '18px' } } };
    const settingsIconStylePivot: IIconStyles = { root: { position: 'absolute', right: '5px', top: '94px', zIndex: 10 } };
    const settingsIconStyleDropdown: IIconStyles = { root: { position: 'absolute', left: '5px', top: '6px', zIndex: 10 } };
    const settingsIconId = useId('icon');
    const calloutProps = { gapSpace: 0, target: `#${settingsIconId}`, };

    if (cookies["theme"] === undefined) { setCookie("theme", "light"); }

    const themeToggled = () => {
        setCookie("theme", cookies["theme"] === "dark" ? "light" : "dark");
        props.changeTheme();
    };

    /* Theme palette code */
    if (cookies["paletteID"] === undefined) { setCookie("paletteID", "a"); }
    const colorCells: any[] = palettes.map(x => ({ id: x.id, label: x.label, color: x.palette?.themePrimary }));
    const resetColorIcon: IIconProps = { iconName: 'SyncOccurence' };
    const calloutPropsResetColor = { gapSpace: 10 };
    const hostStylesResetColor: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };


    return (
        <div className="header-menu" style={{ borderBottom: '1px solid', borderColor: theme.palette.neutralLight }}>

            <div className="pivot">
                <Pivot
                    selectedKey={selectedKey}
                    onLinkClick={handlePivotLinkClick}
                    headersOnly={true}
                    styles={pivotStyles}
                    theme={theme}
                >
                    {Object.values(ItemsKeys).map((x, i) => <PivotItem key={i} headerText={texts.get(x)} style={{ fontSize: FontSizes.size24 }} itemKey={x} />)}
                </Pivot>

                <TooltipHost content="Impostazioni del sito" id={tooltipId} calloutProps={calloutProps} styles={hostStyles} delay={TooltipDelay.zero} directionalHint={DirectionalHint.leftCenter}>
                    <IconButton iconProps={settingsIcon} onClick={openPanel} styles={settingsIconStylePivot} id={settingsIconId} />
                </TooltipHost>

                <Panel
                    isLightDismiss
                    isOpen={isOpen}
                    onDismiss={dismissPanel}
                    closeButtonAriaLabel="Close"
                    headerText="Impostazioni"
                    type={PanelType.smallFixedFar}
                    theme={theme}
                >
                    <Toggle
                        label="Cambia il tema"
                        onText="Dark Mode"
                        offText="Light Mode"
                        checked={cookies["theme"] === "dark"}
                        onChange={themeToggled}
                        theme={theme}
                    />
                    <Dropdown
                        label="Seleziona la lingua"
                        defaultSelectedKey="ITA"
                        options={languageOptions}
                        disabled={true}
                        theme={theme}
                    />
                    <div className="mt-3">
                        <Text variant="medium" styles={semibold}>Seleziona il colore principale  </Text>
                        <TooltipHost
                            content="Reset color"
                            calloutProps={calloutPropsResetColor}
                            styles={hostStylesResetColor}
                        >
                            <IconButton iconProps={resetColorIcon} onClick={() => { setCookie("paletteID", 'a'); props.changePalette('a'); }} />
                        </TooltipHost>
                        <SwatchColorPicker selectedId={cookies["paletteID"]} columnCount={7} cellShape={'square'} colorCells={colorCells} onColorChanged={(id) => { setCookie("paletteID", id); props.changePalette(id!); }} />
                    </div>
                </Panel>
            </div>

            <div className="dropdown">

                <TooltipHost content="Impostazioni del sito" id={tooltipId} calloutProps={calloutProps} styles={hostStyles}>
                    <IconButton iconProps={settingsIcon} onClick={openPanel} styles={settingsIconStyleDropdown} id={settingsIconId} />
                </TooltipHost>

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

export default HeaderMenu;