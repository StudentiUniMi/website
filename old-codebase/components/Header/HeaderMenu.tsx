import { useEffect, useState, useContext, CSSProperties } from "react"
import { FontSizes, IDropdownOption, Icon, Panel, Text, Pivot, PivotItem, IPivotStyles, useTheme, Link } from "@fluentui/react"
import { useRouter } from "next/router"
import { useBoolean } from "@fluentui/react-hooks"
import { preventDefault, preventVisibleHref } from "services/Utils"
import { semibold } from "services/Fonts"
import LocalizationService from "../../services/LocalizationService"
import GlobalContext from "services/GlobalContext"

export enum ItemsKeys {
  home = "home",
  courses = "courses",
  groups = "groups",
  services = "services",
  rules = "rules",
  organization = "organization",
}

const HeaderMenu = () => {
  var theme = useTheme()
  const locale = LocalizationService.strings()
  const router = useRouter()

  const { isPolicyAccepted, togglePolicyDialog } = useContext(GlobalContext)
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false)

  const cardStyle: CSSProperties = {
    backgroundColor: theme.palette.themeDarkAlt,
    borderRadius: 10,
    padding: 15,
  }

  const mobileHeaderButton: CSSProperties = {
    fontSize: FontSizes.size18,
    backgroundColor: theme.palette.themePrimary,
    color: theme.palette.white,
    padding: 4,
    borderRadius: 5,
    border: "1px solid " + theme.palette.themeTertiary,
    boxShadow: theme.effects.elevation8,
  }

  const pivotStyles: Partial<IPivotStyles> = {
    root: {
      color: theme.palette.neutralPrimary,
      fontSize: FontSizes.size24,
      height: 44,
    },
  }

  const texts: Map<ItemsKeys, string | undefined> = new Map<ItemsKeys, string | undefined>([
    [ItemsKeys.home, locale?.headerMenuItems.home],
    [ItemsKeys.courses, locale?.headerMenuItems.courses],
    [ItemsKeys.groups, locale?.headerMenuItems.groups],
    [ItemsKeys.services, locale?.headerMenuItems.services],
    [ItemsKeys.rules, locale?.headerMenuItems.rules],
    [ItemsKeys.organization, locale?.headerMenuItems.aboutUs],
  ])

  const getPath = (): string => {
    var pathname = router.pathname
    if (pathname.substring(1) === "") return "home"

    var path = pathname.substring(1).split("/")[0]
    return path
  }

  const [selectedKey, setSelectedKey] = useState("")

  useEffect(() => {
    setSelectedKey(getPath())
  }, [router.pathname])

  const handlePivotLinkClick = (item?: PivotItem, _e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (item!.props.itemKey !== selectedKey) {
      if (item!.props.itemKey === "home") {
        router.push("/")
      } else {
        router.push(`/${item!.props.itemKey!}`)
      }
    }
  }

  const handleDropdownValueChange = (item?: IDropdownOption): void => {
    if (item!.key !== selectedKey) {
      if (item!.key! === "home") {
        router.push("/")
      } else {
        router.push(`/${item!.key! as string}`)
      }
    }

    dismissPanel()
  }

  const getHref = (item: ItemsKeys) => {
    return item
  }

  const dropdownOptions: Array<IDropdownOption> = Object.values(ItemsKeys).map((x) => ({ key: x, text: texts.get(x)! }))

  return (
    <div className="header-menu">
      <div className="pivot ml-3">
        <Pivot
          selectedKey={selectedKey}
          onLinkClick={handlePivotLinkClick}
          headersOnly={true}
          styles={pivotStyles}
          theme={theme}
          overflowBehavior={"menu"}
        >
          {Object.values(ItemsKeys).map((x, _i) => (
            <PivotItem headerButtonProps={{ href: x === "home" ? "/" : `/${getHref(x)}` }} headerText={texts.get(x)} itemKey={x} key={x} />
          ))}
        </Pivot>
      </div>

      <div className="dropdown align-items-center" style={{ height: 45, justifyContent: "right" }}>
        <Icon iconName="AiOutlineMenu" className="d-flex" style={mobileHeaderButton} theme={theme} onClick={() => openPanel()} />

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
              <Text variant="large" color={theme.palette.neutralQuaternaryAlt}>
                Menu
              </Text>
            </div>

            <div className="mb-3">
              {dropdownOptions.map((x, i) => (
                <a
                  href={`/${x.key === "home" ? "" : getHref(x.key as ItemsKeys)}`}
                  className="d-flex text-decoration-none menu-item mb-2 pr-4 pl-4 pt-1 pb-2"
                  onClick={(e) => {
                    preventDefault(e)
                    handleDropdownValueChange(x)
                  }}
                  key={i}
                  style={{
                    backgroundColor:
                      x.key === selectedKey || ((selectedKey as string) === "" && x.key === "home") ? theme.palette.neutralLighter : "none",
                    borderRadius: 25,
                  }}
                >
                  <Text variant="xLarge">{x.text}</Text>
                </a>
              ))}
            </div>

            <div className="mb-2">
              <div
                style={{ ...cardStyle, backgroundColor: theme.palette.yellow, gap: 10 }}
                onClick={() => {
                  router.push("/courses")
                  dismissPanel()
                }}
                className="d-flex flex-row align-items-center text-decoration-none"
              >
                <Text variant="medium" styles={semibold} style={{ color: "#0f0f0f" }}>
                  {locale?.sidebar.searchGroup}
                </Text>
                <Icon style={{ color: "#0f0f0f", fontSize: 12 }} iconName="GoChevronRight" />
              </div>
            </div>

            <div className="mb-2">
              <div style={cardStyle}>
                <Link
                  style={{ gap: 10 }}
                  href={preventVisibleHref(isPolicyAccepted, "https://t.me/unimichat")}
                  onClick={(e: any) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}
                  className="d-flex flex-row align-items-center text-decoration-none"
                >
                  <Text variant="medium" style={{ color: "#fcfcfc" }}>
                    {locale?.sidebar.mainGroup}
                  </Text>
                  <Icon style={{ color: "#fcfcfc", fontSize: 12 }} iconName="GoChevronRight" />
                </Link>
              </div>
            </div>

            <div className="mb-2">
              <div style={cardStyle}>
                <Link style={{ gap: 10 }} href="https://t.me/studenti_unimi" className="text-decoration-none d-flex flex-row align-items-center">
                  <Text variant="medium" style={{ color: "#fcfcfc" }}>
                    {locale?.sidebar.channel}
                  </Text>
                  <Icon style={{ color: "#fcfcfc", fontSize: 12 }} iconName="GoChevronRight" />
                </Link>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default HeaderMenu
