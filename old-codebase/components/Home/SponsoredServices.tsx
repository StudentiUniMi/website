import { Text, useTheme, PrimaryButton } from "@fluentui/react"
import { Container, Col, Row } from "react-bootstrap"
import Lottie from "react-lottie"
import * as lottieMap from "../University/Lottie/47956-area-map.json"
import * as lottieGraduations from "../University/Lottie/45535-girl-meditating.json"
import LocalizationService from "services/LocalizationService"
import { bold } from "services/Fonts"

const SponsoredServices = () => {
  var theme = useTheme()
  const locale = LocalizationService.strings()

  const buttonStyle = { boxShadow: theme.effects.elevation8 }

  const mapOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieMap,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  const graduationsOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieGraduations,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <>
      <div className="pt-5 pb-5" id={"graduations"}>
        <Container>
          <Row>
            <Col xl={9} lg={9} md={8} className="mb-3 mb-lg-0">
              <div className="mb-2" style={{ maxWidth: 700 }}>
                <Text variant="xLarge" styles={bold}>
                  {locale?.university.graduations.title}
                </Text>
              </div>

              <div className="mb-3" style={{ maxWidth: 600 }}>
                <Text variant="large">{locale?.university.graduations.description}</Text>
              </div>

              <PrimaryButton text={locale?.university.graduations.button} style={buttonStyle} href={"https://t.me/graduatorieUniMi"} />
            </Col>

            <Col xl={3} lg={3} md={4} className="text-center">
              {/* @ts-ignore */}
              <Lottie options={graduationsOptions} height={200} width={200} isClickToPauseDisabled={true} style={{ cursor: "default" }} />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-5 pb-5" id={"map"} style={{ backgroundColor: theme.palette.neutralLighter }}>
        <Container>
          <Row>
            <Col xl={3} lg={3} md={4} className="text-center mb-3 mb-lg-0">
              {/* @ts-ignore */}
              <Lottie options={mapOptions} height={150} width={150} isClickToPauseDisabled={true} style={{ cursor: "default" }} />
            </Col>

            <Col xl={9} lg={9} md={8}>
              <div className="mb-2">
                <Text variant="xLarge" styles={bold}>
                  {locale?.university.map.title}
                </Text>
              </div>

              <div className="mb-3">
                <Text variant="large">{locale?.university.map.description}</Text>
              </div>

              <PrimaryButton
                text={locale?.university.map.button}
                style={buttonStyle}
                href={"https://www.google.com/maps/d/viewer?mid=1601q0wxFe22mtgotqZ7AJzrrWEOYfhs&ll=45.57712672502888%2C9.425802988620111&z=10"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SponsoredServices
