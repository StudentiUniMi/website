import React from "react";
import { IPivotStyles, Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { FontSizes } from '@fluentui/theme';
import { Dropdown, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import { Icon, IIconStyles } from 'office-ui-fabric-react/lib/Icon';
import { useHistory } from "react-router-dom";
import { IconButton, IIconProps, initializeIcons } from 'office-ui-fabric-react';
import { TooltipHost, ITooltipHostStyles, TooltipDelay, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { useId } from '@uifabric/react-hooks';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { useBoolean } from '@uifabric/react-hooks';
import { Toggle } from '@fluentui/react';
import { useCookies } from "react-cookie";
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../services/LocalizationService";

const onRenderCaretDown = (): JSX.Element => {
    return <Icon iconName="List" />;
};

export enum ItemsKeys {
    home = "home",
    organization = "organization",
    rules = "rules",
    courses = "courses",
    services = "services",
    additional_groups = "additional_groups",
    representatives = "representatives",
    contributors = "contributors"
};


interface Props { changeTheme: () => void };
initializeIcons();

const HeaderMenu = (props: Props) => {
    var theme = useTheme();
    const history = useHistory();
    const [cookies, setCookie] = useCookies(["theme", "language"]);
    const locale = LocalizationService.strings();

    const languageOptions: IDropdownOption[] = [
        { key: 'it', text: locale.settingsPanel.italian },
        { key: 'en', text: locale.settingsPanel.english }
    ];
    
    const texts: Map<ItemsKeys, string> = new Map<ItemsKeys, string>([
        [ItemsKeys.home, locale.headerMenuItems.home],
        [ItemsKeys.organization, locale.headerMenuItems.aboutUs],
        [ItemsKeys.rules, locale.headerMenuItems.rules],
        [ItemsKeys.courses, locale.headerMenuItems.courses],
        [ItemsKeys.services, locale.headerMenuItems.services],
        [ItemsKeys.additional_groups, locale.headerMenuItems.additionalGroups],
        [ItemsKeys.representatives, locale.headerMenuItems.representatives],
        [ItemsKeys.contributors, locale.headerMenuItems.contributors]
    ]);
    
    if (cookies["language"] === undefined) { setCookie("language", "it"); }
    
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
    
    /*
    const animationFadeOutClass = mergeStyles(AnimationStyles.slideUpOut10);
    const animationFadeInClass = mergeStyles(AnimationStyles.slideUpIn10);
    */
    const [selectedKey, setSelectedKey] = React.useState(isCorrect ? path as ItemsKeys : ItemsKeys.home);
    
    const handlePivotLinkClick = (item?: PivotItem, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (item!.props.itemKey !== selectedKey) {
            /*
            let main = document.getElementsByClassName("content")[0];
            main.classList.remove(animationFadeInClass);
            setTimeout(() => main.classList.add(animationFadeInClass), 0);
            */
            setSelectedKey(item!.props.itemKey! as ItemsKeys);
            history.push(`/${item!.props.itemKey!}/`);
        }
    };

    const onDropdownValueChange = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        if (item!.key !== selectedKey) {
            /*
            let main = document.getElementsByClassName("content")[0];
            main.classList.remove(animationFadeInClass);
            setTimeout(() => main.classList.add(animationFadeInClass), 0);
            */
            setSelectedKey(item!.key! as ItemsKeys);
            history.push(`/${item!.key! as string}/`);
        }
    };

    const dropdownOptions: IDropdownOption[] = Object.values(ItemsKeys).map(x => ({ key: x, text: texts.get(x)! }));

    // Panel and components settings
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

                <TooltipHost content={locale.settingsPanel.settings} id={tooltipId} calloutProps={calloutProps} styles={hostStyles} delay={TooltipDelay.zero} directionalHint={DirectionalHint.leftCenter}>
                    <IconButton iconProps={settingsIcon} onClick={openPanel} styles={settingsIconStylePivot} id={settingsIconId} />
                </TooltipHost>

                <Panel
                    isLightDismiss
                    isOpen={isOpen}
                    onDismiss={dismissPanel}
                    closeButtonAriaLabel="Close"
                    headerText={locale.settingsPanel.settings}
                    type={PanelType.smallFixedFar}
                    theme={theme}
                >
                    <Toggle
                        label={locale.settingsPanel.changeTheme}
                        onText={locale.settingsPanel.darkTheme}
                        offText={locale.settingsPanel.lightTheme}
                        checked={cookies["theme"] === "dark"}
                        onChange={themeToggled}
                        theme={theme}
                    />

                    <Dropdown
                        label={locale.settingsPanel.selectLanguage}
                        options={languageOptions}
                        selectedKey={cookies["language"]}
                        onChange={(_, option) => 
                        {
                            LocalizationService.localize(option!.key as string)
                            setCookie("language", option!.key as string)
                        }}
                        theme={theme}
                    />
                </Panel>
            </div>

            <div className="dropdown">

                <TooltipHost content={locale.settingsPanel.settings} id={tooltipId} calloutProps={calloutProps} styles={hostStyles}>
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