import React, { useEffect } from "react";
import LocalizationService from "../services/LocalizationService";
import { FontSizes } from '@fluentui/theme';
import { Dropdown, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import { Icon, IIconStyles } from 'office-ui-fabric-react/lib/Icon';
import { useHistory } from "react-router-dom";
import { IconButton, IIconProps, initializeIcons, Text } from 'office-ui-fabric-react';
import { TooltipHost, ITooltipHostStyles, TooltipDelay, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { useId } from '@uifabric/react-hooks';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { useBoolean } from '@uifabric/react-hooks';
import { Coachmark, IButtonProps, TeachingBubbleContent, Toggle } from '@fluentui/react';
import { useCookies } from "react-cookie";
import { useTheme } from '@fluentui/react-theme-provider';
import { addDays } from '../services/Utils';
import { Pivot, PivotItem, IPivotStyles } from '@fluentui/react';
import { SwatchColorPicker } from '@fluentui/react/lib/SwatchColorPicker';
import { semibold } from "../services/fonts";
import { palettes } from '../services/palettes';

export enum ItemsKeys {
    home = "home",
    courses = "courses",
    services = "services",
    rules = "rules",
    representatives = "representatives",
    organization = "organization"
};

initializeIcons();

interface Props { changeTheme: () => void, changePalette: (id: string) => void };

const HeaderMenu = (props: Props) => {
    var theme = useTheme();
    const history = useHistory();
    const [cookies, setCookie] = useCookies();
    const date: Date = addDays(new Date(), 90);
    const tooltipId = useId('tooltip');
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
    const settingsIcon: IIconProps = { iconName: 'Settings', styles: { root: { fontSize: '18px' } } };
    const settingsIconStylePivot: IIconStyles = { root: { position: 'absolute', right: '-5px', top: '8px', zIndex: 10 } };
    const settingsIconStyleDropdown: IIconStyles = { root: { position: 'absolute', right: '24px', top: '8px', zIndex: 10 } };
    const settingsIconId = useId('icon');
    const calloutProps = { gapSpace: 0, target: `#${settingsIconId}`, };
    const onRenderCaretDown = (): JSX.Element => { return <Icon iconName="List" />; };
    
    if (cookies['language'] === undefined) 
    { 
        const isNavLanguageITA = isNavigatorLanguageItalian();
        setCookie("language", (isNavLanguageITA ? 'it' : 'en'), { path: "/", expires: date }); 
    }

    LocalizationService.localize(cookies['language']);

    const locale = LocalizationService.strings();

    const changeLanguage = (key: string) => {
        LocalizationService.localize(key);
    };

    const languageOptions: IDropdownOption[] = [
        { key: 'it', text: locale.settingsPanel.italian },
        { key: 'en', text: locale.settingsPanel.english }
    ];

    if (cookies["theme"] === undefined) 
    {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            setCookie("theme", "dark", { path: "/", expires: date }); 
        } else {
            setCookie("theme", "light", { path: "/", expires: date }); 
        }
        props.changeTheme();
    }

    if (cookies["palette"] === undefined) 
    { 
        setCookie("palette", "a", { path: "/", expires: date });
    }

    /* useEffect to avoid rendering loops */
    useEffect(() => { 
        if (cookies["firstVisit"] === undefined) { 
            setTimeout(() => {
                showCoachmark();
                setCookie("firstVisit", false, { path: "/", expires: date } ); 
            }, 1000);
        }
    });

    const [isCoachmarkVisible, { setFalse: hideCoachmark, setTrue: showCoachmark }] = useBoolean(false);
    const buttonProps: IButtonProps = { text: locale.settingsPanel.coachMark.understood, onClick: hideCoachmark };
    const target = React.useRef<HTMLDivElement>(null);
    const [coachmarkPosition] = React.useState<DirectionalHint>(DirectionalHint.leftCenter);
    const positioningContainerProps = React.useMemo(
        () => ({
            directionalHint: coachmarkPosition,
            doNotLayer: false,
        }),
        [coachmarkPosition],
    );
    
    const texts: Map<ItemsKeys, string> = new Map<ItemsKeys, string>([
        [ItemsKeys.home, locale.headerMenuItems.home],
        [ItemsKeys.courses, locale.headerMenuItems.courses],
        [ItemsKeys.services, locale.headerMenuItems.services],
        [ItemsKeys.rules, locale.headerMenuItems.rules],
        [ItemsKeys.representatives, locale.headerMenuItems.university],
        [ItemsKeys.organization, locale.headerMenuItems.aboutUs]
    ]);
    
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

    const themeToggled = () => {
        if (cookies["theme"] === "dark") setCookie("theme", "light", { path: "/", expires: date });
        else { setCookie("theme", "dark", { path: "/", expires: date }); }
        props.changeTheme();
    };

    /* Theme palette code */
    const colorCells: any[] = palettes.map(x => ({ id: x.id, label: x.label, color: x.palette?.themePrimary }));
    const resetColorIcon: IIconProps = { iconName: 'SyncOccurence' };
    const calloutPropsResetColor = { gapSpace: 10 };
    const hostStylesResetColor: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

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

                <TooltipHost content={locale.settingsPanel.settings} id={tooltipId} calloutProps={calloutProps} styles={hostStyles} delay={TooltipDelay.zero} directionalHint={DirectionalHint.leftCenter}>
                    <div ref={target} style={{ position: 'absolute', right: '25px', top: '22px'}}></div><IconButton iconProps={settingsIcon} onClick={openPanel} styles={settingsIconStylePivot} id={settingsIconId} />
                </TooltipHost>

                {isCoachmarkVisible && window.screen.availWidth >= 586 && ( /* With windows.screen size I fixed the visualization of coachMark in mobile displays too */
                    <Coachmark
                        target={target.current}
                        positioningContainerProps={positioningContainerProps}
                    >
                        <TeachingBubbleContent
                            headline={locale.settingsPanel.coachMark.text1}
                            hasCloseButton
                            closeButtonAriaLabel={locale.settingsPanel.close}
                            onDismiss={hideCoachmark}
                            secondaryButtonProps={buttonProps}
                        >
                            {locale.settingsPanel.coachMark.text2}
                        </TeachingBubbleContent>
                    </Coachmark>
                )}

                <Panel
                    isLightDismiss
                    isOpen={isOpen}
                    onDismiss={dismissPanel}
                    closeButtonAriaLabel={locale.settingsPanel.close}
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
                        onChange={(_, option) => { changeLanguage(option!.key as string); setCookie("language", option!.key as string, { path: "/", expires: date }) }}
                        theme={theme}
                    />

                    <div className="mt-3">
                        <Text variant="medium" styles={semibold}>{locale.settingsPanel.selectColor}  </Text>
                        <TooltipHost
                            content="Reset color"
                            calloutProps={calloutPropsResetColor}
                            styles={hostStylesResetColor}
                        >
                            <IconButton iconProps={resetColorIcon} onClick={() => { setCookie("palette", 'a', { path: "/", expires: date }); props.changePalette('a'); }} />
                        </TooltipHost>
                        <SwatchColorPicker selectedId={cookies["palette"]} columnCount={9} cellShape={'square'} colorCells={colorCells} onColorChanged={(id) => { setCookie("palette", id, { path: "/", expires: date }); props.changePalette(id!); }} />
                    </div>
                </Panel>
            </div>

            <div className="dropdown">

                <IconButton iconProps={settingsIcon} onClick={openPanel} styles={settingsIconStyleDropdown} />

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

/**
 * This function returns true if the navigator language is italian.
 */
const isNavigatorLanguageItalian = () => {
    const navLanguage = navigator.language;
    if (navLanguage === 'it') return true;

    const s: string[] = navLanguage.split("-",2);
    if (s.length >= 2 && s[0] === 'it') return true;
    return false;
}