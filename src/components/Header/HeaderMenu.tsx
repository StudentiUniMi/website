import React from "react";
import LocalizationService from "../../services/LocalizationService";
import { FontSizes } from '@fluentui/theme';
import { IDropdownOption } from 'office-ui-fabric-react/lib-commonjs/Dropdown';
import { Icon } from 'office-ui-fabric-react/lib-commonjs/Icon';
import { Panel } from '@fluentui/react/lib/Panel';
import { ITooltipHostStyles, Link, PrimaryButton, Text, TooltipDelay, TooltipHost } from "office-ui-fabric-react/lib-commonjs/";
import { useRouter } from 'next/router';
import { useTheme } from '@fluentui/react-theme-provider';
import { Pivot, PivotItem, IPivotStyles } from 'office-ui-fabric-react/lib-commonjs/';
import { withCookies } from "react-cookie";
import { useBoolean } from "@fluentui/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    var language: string | undefined = LocalizationService.getLanguage();
    const router = useRouter();
    const buttonStyle = { maxWidth: '270px', boxShadow: theme.effects.elevation8 };
    const calloutPropsResetColor = { gapSpace: 10 };
    const hostStylesResetColor: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };
    const wrapIconStyle = { backgroundColor: theme.palette.themeSecondary, borderRadius: '35%', marginBottom: 4, minWidth: 40, minHeight: 40, display: 'inline-block', textAlign: 'center', justifyContent: 'center', verticalAlign: 'middle' } as React.CSSProperties;
    const iconStyle = { color: theme.palette.white, fontSize: '20px', marginTop: 10 };

    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
    
    const texts: Map<ItemsKeys, string | undefined> = new Map<ItemsKeys, string | undefined>([
        [ItemsKeys.home, locale?.headerMenuItems.home],
        [ItemsKeys.courses, locale?.headerMenuItems.courses],
        [ItemsKeys.services, locale?.headerMenuItems.services],
        [ItemsKeys.rules, locale?.headerMenuItems.rules],
        [ItemsKeys.representatives, locale?.headerMenuItems.university],
        [ItemsKeys.organization, locale?.headerMenuItems.aboutUs]
    ]);

    const footerIcons: any = [
        { name: { it: 'Canale Telegram', en: 'Telegram Channel' }, link: 'https://t.me/studenti_unimi', iconName: 'telegram-plane', type: 'brand' },
        { name: { it: 'Gruppo Principale', en: 'Main Group' }, link: 'https://t.me/unimichat', iconName: 'comment-dots', type: 'normal' },
        { name: { it: 'Canale Discord', en: 'Discord Channel' }, link: 'https://discord.gg/SwPzAkv4A4', iconName: 'discord', type: 'brand' },
        { name: { it: 'Organizzazione GitHub', en: 'GitHub Organization' }, link: 'https://github.com/StudentiUnimi', iconName: 'github', type: 'brand' },
        { name: { it: 'Pagina Facebook', en: 'Facebook Page' }, link: 'https://www.facebook.com/networkstudentiunimi', iconName: 'facebook', type: 'brand' },
        { name: { it: 'Pagina Instagram', en: 'Instagram Page' }, link: 'https://www.instagram.com/studentiunimi.it/', iconName: 'instagram', type: 'brand' },
    ];

    const mobileHeaderButton = {
        color: theme.palette.neutralPrimary,
        fontSize: FontSizes.size20
    }

    const pivotStyles: Partial<IPivotStyles> = {
        root: { color: theme.palette.neutralPrimary, fontSize: FontSizes.size24 },
    };

    const getPath = React.useCallback((): Array<string | boolean> => {
        var pathname = router.pathname;
        console.log(pathname);

        return ["", true];

        /*
        var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
        let first = states.length > 0 ? states[0] : '';
        let isCorrectPathKey = Object.keys(ItemsKeys).filter(x => x === first).length !== 0;
        return [first, isCorrectPathKey];
        */
    }, []);

    let didMount = React.useRef(false);
    let [path, isCorrect] = getPath();
    const [selectedKey, setSelectedKey] = React.useState(isCorrect ? path as ItemsKeys : ItemsKeys.home);

    React.useEffect(() => {
        if (!didMount.current) {
            didMount.current = true;
            let [path, isCorrect] = getPath();
            if (!isCorrect) {
                router.push('/');
                setSelectedKey(ItemsKeys.home);
            } else {
                setSelectedKey(path as ItemsKeys);
            }
        }

        /* TODO: Se l'history cambia bisogna settare correttamente il pivot o il dropdown */
        /*
        return history.listen(() => {
            if (history.action === 'PUSH' || history.action === 'POP') {
                let [path,] = getPath();
                setSelectedKey(path as ItemsKeys);
            }
        });
        */
    }, [getPath]);

    const handlePivotLinkClick = (item?: PivotItem, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (item!.props.itemKey !== selectedKey) {
            setSelectedKey(item!.props.itemKey! as ItemsKeys);

            if (item!.props.itemKey === "home") {
                router.push('/');
            } else {
                router.push(`/${item!.props.itemKey!}/`);
            }
        }
    };

    const handleDropdownValueChange = (item?: IDropdownOption): void => {
        if (item!.key !== selectedKey) {
            setSelectedKey(item!.key! as ItemsKeys);

            if (item!.key! === "home") {
                router.push('/');
            } else {
                router.push(`/${item!.key! as string}/`);
            }
        }

        dismissPanel();
    };

    const dropdownOptions: IDropdownOption[] = Object.values(ItemsKeys).map(x => ({ key: x, text: texts.get(x)! }));

    return (
        <div className="header-menu">

            <div className="pivot ml-3">
                <Pivot
                    selectedKey={selectedKey}
                    onLinkClick={handlePivotLinkClick}
                    headersOnly={true}
                    styles={pivotStyles}
                    theme={theme}
                    overflowBehavior={'menu'}
                >
                    {Object.values(ItemsKeys).map((x, i) => <PivotItem headerText={texts.get(x)} itemKey={x} key={x} />)}
                </Pivot>
            </div>

            <div className="dropdown">
                <Icon iconName="ListMirrored" onClick={() => openPanel()} style={mobileHeaderButton} theme={theme} />

                <Panel
                    headerText="Network StudentiUniMi"
                    className="header-panel"
                    isLightDismiss={true}
                    isOpen={isOpen}
                    onDismiss={dismissPanel}
                    closeButtonAriaLabel="Close"
                    theme={theme}
                >
                    <div className="mt-4">
                        <div className="mb-4"><Text variant="large" color={theme.palette.neutralQuaternaryAlt}>Menu</Text></div>

                        {dropdownOptions.map((x, i) => 
                            <div 
                                className="menu-item mb-2 pr-4 pl-4 pt-1 pb-2" 
                                onClick={() => handleDropdownValueChange(x)}
                                style={{ backgroundColor: (x.key === selectedKey) || (selectedKey as string === "" && x.key === "home") ? theme.palette.neutralLighter : 'none', borderRadius: 25 }}
                            >
                                <Text variant="xLarge">{x.text}</Text>
                            </div>
                        )}

                        <div className="mt-5 mb-3"><Text variant="large" color={theme.palette.neutralQuaternaryAlt}>{locale?.homepage.section3.part2.title}</Text></div>
                        <PrimaryButton text={locale?.footer[0].buttonText} href="https://t.me/unimichat" className="text-decoration-none" allowDisabledFocus style={buttonStyle} />

                        <div className="mt-5 mb-3"><Text variant="large" color={theme.palette.neutralQuaternaryAlt}>{locale?.homepage.section3.part1.title}</Text></div>
                        <PrimaryButton text={locale?.settingsPanel.joinTelegram} href="https://t.me/studenti_unimi" className="text-decoration-none" allowDisabledFocus style={buttonStyle} />

                        <div className="mt-5 mb-3"><Text variant="large" color={theme.palette.neutralQuaternaryAlt}>{locale?.groups.availableRedirects}</Text></div>
                        {footerIcons.map( (x: any, i: number) => { 
                                return (
                                    <TooltipHost
                                        content={x.name[language!]}
                                        calloutProps={calloutPropsResetColor}
                                        styles={hostStylesResetColor}
                                        key={i}
                                        delay={TooltipDelay.zero}
                                    >
                                        <Link href={x.link}>
                                            <span style={wrapIconStyle} className="text-decoration mr-1">
                                                { x.type === 'brand' ?
                                                <FontAwesomeIcon icon={['fab', x.iconName]} style={iconStyle} />
                                                :
                                                <FontAwesomeIcon icon={x.iconName} style={iconStyle} /> }
                                            </span>
                                        </Link>
                                    </TooltipHost>
                                )}
                            )}
                    </div>
                </Panel>
            </div>
        </div>
    );
};

export default withCookies(HeaderMenu);