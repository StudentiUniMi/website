import { useTheme, Text, mergeStyleSets } from "@fluentui/react"
import Chip from "components/Atoms/Chip"
import Message from "components/Atoms/Message"
import { semibold } from "services/Fonts"
import LocalizationService from "services/LocalizationService"
import { ISuggestionItem } from "./Autocomplete_types"

interface Props {
  degrees: Array<ISuggestionItem>
  searchText: string
  error: boolean
  onElementClick: (item: ISuggestionItem) => void
}

const DegreesResult = (props: Props) => {
  var theme = useTheme()
  var language: string | undefined = LocalizationService.getLanguage()
  const locale = LocalizationService.strings()

  const itemStyle = mergeStyleSets({
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: theme.palette.white,
      color: theme.palette.black,
      boxShadow: theme.effects.elevation8,
      padding: "12px 18px",
      cursor: "pointer",
      transition: "0.1s all ease",
      border: "1px solid transparent",
      selectors: {
        ":hover": {
          backgroundColor: theme.palette.neutralLight,
          border: `1px solid ${theme.palette.neutralQuaternary}`,
        },
      },
    },
  })

  const renderChip = (item: ISuggestionItem) => {
    let label: string

    switch (item.degree!.type) {
      case "B":
        label = language == "it" ? "triennale" : "bachelor's degree"
        break
      case "M":
        label = language == "it" ? "magistrale" : "master's degree"
        break
      case "C":
        label = language == "it" ? "magistrale a ciclo unico" : "single-cycle master's degree"
        break
      default:
        label = ""
    }

    let buildBgColor = (type: string) => {
      switch (type) {
        case "B":
          return theme.palette.themePrimary
        case "M":
          return theme.palette.themeDark
        case "C":
          return theme.palette.themeDarker
        default:
          return theme.palette.neutralLighter
      }
    }

    return (
      <Text variant="small" styles={semibold}>
        <Chip label={label} size="small" textColor={theme.palette.white} bgColor={buildBgColor(item.degree!.type)} />
      </Text>
    )
  }

  return (
    <div className="degrees-search-results mt-4 mb-4" style={{ borderRadius: 2 }}>
      {props.degrees.length
        ? props.degrees.map((x, i) => (
            <a href={`/courses/${x.degree?.slug}`} onClick={(e) => e.preventDefault()} className="text-decoration-none" key={i}>
              <div className={itemStyle.root} onClick={() => props.onElementClick(x)}>
                <Text styles={semibold}>{x.displayValue}</Text>
                {renderChip(x)}
              </div>
            </a>
          ))
        : props.searchText &&
          !props.error && (
            <div className="mt-4">
              <Message text={locale?.courses.degreesNotFound!} />
            </div>
          )}
    </div>
  )
}

export default DegreesResult
