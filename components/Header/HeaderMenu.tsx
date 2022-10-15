import { useEffect, useRef, useState, useCallback } from "react";
import { FontSizes, IDropdownOption, Icon, Panel, Text, Pivot, PivotItem, IPivotStyles, useTheme } from '@fluentui/react';
import { useRouter } from 'next/router';
import { useBoolean } from "@fluentui/react-hooks";
import { redirectToLink } from "services/Utils";
import { semibold } from "services/Fonts";
import LocalizationService from "../../services/LocalizationService";

export enum ItemsKeys {
    home = "home",
    courses = "courses",
    services = "services",
    rules = "rules",
    university = "university",
    organization = "organization"
};

const HeaderMenu = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const router = useRouter();
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

    /* Styles */
    const cardStyle = { backgroundColor: theme.palette.themeDarkAlt, borderRadius: 10, padding:15 };

    const texts: Map<ItemsKeys, string | undefined> = new Map<ItemsKeys, string | undefined>([
        [ItemsKeys.home, locale?.headerMenuItems.home],
        [ItemsKeys.courses, locale?.headerMenuItems.courses],
        [ItemsKeys.services, locale?.headerMenuItems.services],
        [ItemsKeys.rules, locale?.headerMenuItems.rules],
        [ItemsKeys.university, locale?.headerMenuItems.university],
        [ItemsKeys.organization, locale?.headerMenuItems.aboutUs]
    ]);

    const mobileHeaderButton = {
        fontSize: FontSizes.size20
    }

    const pivotStyles: Partial<IPivotStyles> = {
        root: { color: theme.palette.neutralPrimary, fontSize: FontSizes.size24 },
    };

    const getPath = useCallback((): Array<string | boolean> => {
        var pathname = router.pathname;
        var states = pathname.substring(1).split('/').filter(x => x !== '');
        let first = states.length > 0 ? states[0] : '';
        let isCorrectPathKey = Object.keys(ItemsKeys).filter(x => x === first).length !== 0;
        return [first, isCorrectPathKey];
    }, []);

    let didMount = useRef(false);
    let [path, isCorrect] = getPath();
    const [selectedKey, setSelectedKey] = useState(isCorrect ? path as ItemsKeys : ItemsKeys.home);

    /* Initialize header element based on URL */
    useEffect(() => {
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
    }, [getPath]);

    /* Handle push and pop events of browser */
    useEffect(() => {
        router.beforePopState(({ as }) => {
            const routeEl = as.substring(1,);

            if (routeEl === "") setSelectedKey("home" as ItemsKeys);
            else setSelectedKey(routeEl as ItemsKeys);
            
            return true;
        });

        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);

    const handlePivotLinkClick = (item?: PivotItem, _e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (item!.props.itemKey !== selectedKey) {
            setSelectedKey(item!.props.itemKey! as ItemsKeys);

            if (item!.props.itemKey === "home") {
                router.push('/');
            } else {
                router.push(`/${item!.props.itemKey!}`);
            }
        }
    };

    const handleDropdownValueChange = (item?: IDropdownOption): void => {
        if (item!.key !== selectedKey) {
            setSelectedKey(item!.key! as ItemsKeys);

            if (item!.key! === "home") {
                router.push('/');
            } else {
                router.push(`/${item!.key! as string}`);
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
                    {Object.values(ItemsKeys).map((x, _i) => <PivotItem headerText={texts.get(x)} itemKey={x} key={x} />)}
                </Pivot>
            </div>

            <div className="dropdown align-items-center" style={{ height: 45, justifyContent: 'right' }}>
                <Icon iconName="AiOutlineMenu" className="d-flex" onClick={() => openPanel()} style={mobileHeaderButton} theme={theme} />

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
                        <div className="mb-4">
                            <Text variant="large" color={theme.palette.neutralQuaternaryAlt}>Menu</Text>
                        </div>

                        <div className="mb-3">
                            {dropdownOptions.map((x, i) =>
                                <div 
                                    className="menu-item mb-2 pr-4 pl-4 pt-1 pb-2" 
                                    onClick={() => handleDropdownValueChange(x)}
                                    key={i}
                                    style={{ backgroundColor: (x.key === selectedKey) || (selectedKey as string === "" && x.key === "home") ? theme.palette.neutralLighter : 'none', borderRadius: 25 }}
                                >
                                    <Text variant="xLarge">{x.text}</Text>
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <div style={{ ...cardStyle, backgroundColor: theme.palette.yellow }} onClick={() => { router.push("/courses"); setSelectedKey(ItemsKeys.courses); dismissPanel(); } }>
                                <Text variant="medium" styles={semibold} style={{ color: "#0f0f0f" }}>{locale?.sidebar.searchGroup} <Icon iconName="ChevronRightMed" style={{ fontSize: 10 }} /></Text>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div style={cardStyle} onClick={() => redirectToLink("https://t.me/unimichat")}>
                                <Text variant="medium" style={{ color: "#fcfcfc" }}>{locale?.sidebar.mainGroup} <Icon iconName="ChevronRightMed" style={{ fontSize: 10 }} /></Text>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div style={cardStyle} onClick={() => redirectToLink("https://t.me/studenti_unimi")}>
                                <Text variant="medium" style={{ color: "#fcfcfc" }}>{locale?.sidebar.channel} <Icon iconName="ChevronRightMed" style={{ fontSize: 10 }} /></Text>
                            </div>
                        </div>

                    </div>
                </Panel>
            </div>
        </div>
    );
};

export default HeaderMenu;