import { mergeStyleSets, useTheme, Text, Icon } from "@fluentui/react"
import { CSSProperties } from "react"
import { semibold } from "services/Fonts"
import LocalizationService from "services/LocalizationService"

export interface Item {
  name: { [key: string]: any }
  href: string
  iconName: string
}

interface Props {
  items: Array<Item>
}

const ItemsGroup = (props: Props) => {
  var theme = useTheme()
  var language: string | undefined = LocalizationService.getLanguage()

  const itemStyle = mergeStyleSets({
    root: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.neutralLighter,
      width: 110,
      height: 126,
      padding: "15px 10px",
      cursor: "pointer",
      transition: "0.1s all ease",
      border: `1px solid ${theme.palette.neutralLight}`,
      borderRadius: 2,
      selectors: {
        ":hover": {
          backgroundColor: theme.palette.neutralLight,
          border: `1px solid ${theme.palette.neutralSecondary}`,
        },
      },
    },
  })

  const itemsStyle: CSSProperties = {
    justifyContent: "center",
    gap: 8,
  }

  return (
    <div className="d-flex flex-wrap flex-row" style={itemsStyle}>
      {props.items.map((item: Item, i: number) => (
        <a href={item.href} className="text-decoration-none" key={i}>
          <div className={itemStyle.root + " text-center align-items-center justify-content-center"}>
            <div className="d-flex align-items-center justify-content-center">
              <Icon iconName={item.iconName} style={{ color: theme.palette.themeDark, fontSize: 24 }} />
            </div>
            <div className="line-clamp-3">
              <Text variant="medium" styles={semibold}>
                {item.name[language!]}
              </Text>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default ItemsGroup
