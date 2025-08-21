/**
 * This component is used to show loading while retrieving data from the api, and to show an error in case the loading didn't go fine.
 *
 * @author Giuseppe Del Campo
 */

import React from "react"
import LocalizationService from "../../services/LocalizationService"
import { Spinner, SpinnerSize, Text, Image, Icon, Link, useTheme } from "@fluentui/react"
import { semibold } from "../../services/Fonts"
import { Container } from "react-bootstrap"
import JsxParser from "react-jsx-parser"

interface Props {
  loading: boolean
  error: boolean
}

interface IExampleProps {
  resetChoice?: () => void
}

const LoadingSpinner = (props: Props) => {
  var theme = useTheme()
  const locale = LocalizationService.strings()
  const [showError, setShowError] = React.useState<boolean>(false)

  const updateError = React.useCallback(() => {
    setShowError(props.error)
  }, [setShowError, props.error])

  React.useEffect(() => {
    updateError()
  }, [updateError])

  const messageBarStyles = { backgroundColor: "rgb(253, 231, 233)", color: theme.palette.redDark, padding: 20 }

  const ErrorExample = (_: IExampleProps) => (
    <div style={messageBarStyles} className="text-center">
      <Text variant="medium" styles={semibold} style={{ color: theme.palette.redDark }}>
        <Icon iconName="ErrorBadge" style={{ fontSize: 12, marginRight: 10 }} />
        {locale?.errorOccured}
      </Text>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <Image id="not-found" alt="Not found" src={"/images/message/error.png"} style={{ display: "inline", width: "35%", marginBottom: 5 }} />
      </div>
      <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link, Icon }} jsx={locale?.errorContactAdmin} />
    </div>
  )

  return (
    <>
      {props.error ? (
        <Container style={{ display: showError ? "block" : "none", marginLeft: "auto", marginRight: "auto", maxWidth: 400 }}>
          <ErrorExample />
        </Container>
      ) : props.loading ? (
        <Container>
          <Spinner label={locale?.loading} ariaLive="assertive" labelPosition="right" size={SpinnerSize.large} theme={theme} />
        </Container>
      ) : (
        <></>
      )}
    </>
  )
}

export default LoadingSpinner
