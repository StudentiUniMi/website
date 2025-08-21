import React, { CSSProperties, useContext } from "react"
import { semibold } from "../../services/Fonts"
import { Text, Icon, useTheme } from "@fluentui/react"
import { Container } from "react-bootstrap"
import LocalizationService from "../../services/LocalizationService"
import Message from "../Atoms/Message"
import ItemsGroup, { Item } from "components/Atoms/ItemsGroup"
import { DegreeInformation } from "models/DegreeInformation"
import Chip from "components/Atoms/Chip"
import GlobalContext from "services/GlobalContext"

interface Props {
  degreeInformations: any[]
}

const DegreeInformations = (props: Props) => {
  const theme = useTheme()
  const locale = LocalizationService.strings()
  var language: string | undefined = LocalizationService.getLanguage()

  const { isHeaderPinned } = useContext(GlobalContext)

  const degreeInformations: Array<DegreeInformation> = props.degreeInformations

  const items: Array<Item> = degreeInformations?.map((x) => ({
    name: x.name,
    href: x.link,
    iconName: x.icon,
  }))

  const subHeader: CSSProperties = {
    backgroundColor: theme.palette.neutralLighter,
    borderTop: `1px solid ${theme.palette.neutralQuaternary}`,
    borderBottom: `1px solid ${theme.palette.neutralQuaternary}`,
    padding: "10px 0px",
    position: "sticky",
    top: isHeaderPinned ? 44 : 0,
    transition: "top 0.2s ease-in-out 0s",
    zIndex: 2,
  }

  const buildDegreeInformationsNumberString = (n: number) => {
    if (n === 0) {
      switch (language!) {
        case "it":
          return "Nessun collegamento disponibile."
        case "en":
          return "No redirects available."
      }
    } else {
      switch (language!) {
        case "it":
          return `${n === 1 ? "Collegamento disponibile" : "Collegamenti disponibili"}`
        case "en":
          return `${n === 1 ? "Redirect available" : "Redirects available"}`
      }
    }
  }

  return (
    <div className="degree-informations mb-4" id="redirects">
      <div className="pb-2 pt-2 mb-4" style={subHeader}>
        <Container>
          <div className="d-flex flex-row align-items-center" style={{ gap: 5 }}>
            <Text variant="medium" styles={semibold}>
              <Icon iconName="FileSymlink" style={{ fontSize: 16 }} />
            </Text>
            <Text variant="medium" style={{ color: theme.palette.black }} styles={semibold}>
              {items.length > 0 && (
                <Chip
                  label={items.length.toString()}
                  textColor={theme.palette.white}
                  theme={theme}
                  bgColor={theme.palette.themePrimary}
                  size="small"
                  className="mr-1"
                />
              )}
              {buildDegreeInformationsNumberString(items.length)}
            </Text>
          </div>
        </Container>
      </div>

      {items.length === 0 ? <Message text={locale?.noRedirectsAvailable!} /> : <ItemsGroup items={items} />}
    </div>
  )
}

export default DegreeInformations
