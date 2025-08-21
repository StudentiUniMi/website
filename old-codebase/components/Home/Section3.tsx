import { Text, IIconProps, Icon, DefaultButton, useTheme } from "@fluentui/react"
import { useContext } from "react"
import { bold, semibold } from "../../services/Fonts"
import { Container } from "react-bootstrap"
import { preventDefault, preventVisibleHref } from "services/Utils"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import LocalizationService from "../../services/LocalizationService"
import GlobalContext from "services/GlobalContext"

const ThirdSection = () => {
  var theme = useTheme()
  const locale = LocalizationService.strings()
  const { isPolicyAccepted, togglePolicyDialog } = useContext(GlobalContext)

  const buttonStyle = { maxWidth: "180px", boxShadow: theme.effects.elevation8 }
  const buttonIconProps: IIconProps = { iconName: "GoChevronRight", styles: { root: { fontSize: 14 } } }
  const iconStyle = {
    display: "flex",
    backgroundColor: theme.palette.themePrimary,
    color: theme.palette.white,
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
  }

  return (
    <div className="pb-5 pt-5" style={{ backgroundColor: theme.palette.neutralLighter }}>
      <Container>
        <div className="mb-4 text-center">
          <Text variant="xLarge" styles={bold}>
            {locale?.homepage.additionalServicesSection.header}
          </Text>
        </div>

        <Row className="justify-content-around">
          <Col md={4} sm={12} className="mb-4 mb-md-0 text-center">
            <div className="mb-2 d-flex justify-content-center">
              <div className="d-flex flex-row align-items-center" style={{ gap: 10 }}>
                <Icon iconName="FaLeaf" style={iconStyle} />
                <Text variant="large" styles={semibold}>
                  OverLeaf
                </Text>
              </div>
            </div>

            <div className="mb-3 pr-2 pl-2">
              <Text variant="medium">{locale?.homepage.additionalServicesSection.col3.text}</Text>
            </div>

            <DefaultButton
              href={preventVisibleHref(isPolicyAccepted, "https://overleaf.studentiunimi.it/")}
              onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}
              text={locale?.homepage.additionalServicesSection.col3.buttonText}
              style={buttonStyle}
              iconProps={buttonIconProps}
              theme={theme}
            />
          </Col>

          <Col md={4} sm={12} className="mb-4 mb-md-0 text-center">
            <div className="mb-2 d-flex justify-content-center">
              <div className="d-flex flex-row align-items-center" style={{ gap: 10 }}>
                <Icon iconName="FaBook" style={iconStyle} />
                <Text variant="large" styles={semibold}>
                  HedgeDoc
                </Text>
              </div>
            </div>

            <div className="mb-3 pr-2 pl-2">
              <Text variant="medium">{locale?.homepage.additionalServicesSection.col1.text}</Text>
            </div>

            <DefaultButton
              href={preventVisibleHref(isPolicyAccepted, "https://hedgedoc.studentiunimi.it/")}
              onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}
              text={locale?.homepage.additionalServicesSection.col1.buttonText}
              style={buttonStyle}
              iconProps={buttonIconProps}
              theme={theme}
            />
          </Col>

          <Col md={4} sm={12} className="text-center">
            <div className="mb-2 d-flex justify-content-center">
              <div className="d-flex flex-row align-items-center" style={{ gap: 10 }}>
                <Icon iconName="FaCode" style={iconStyle} />
                <Text variant="large" styles={semibold}>
                  Paste
                </Text>
              </div>
            </div>

            <div className="mb-3 pr-2 pl-2">
              <Text variant="medium">{locale?.homepage.additionalServicesSection.col2.text}</Text>
            </div>

            <DefaultButton
              href={preventVisibleHref(isPolicyAccepted, "https://paste.studentiunimi.it/")}
              onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}
              text={locale?.homepage.additionalServicesSection.col2.buttonText}
              style={buttonStyle}
              iconProps={buttonIconProps}
              theme={theme}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ThirdSection
