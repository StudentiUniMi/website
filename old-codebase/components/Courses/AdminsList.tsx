import { Admin } from "../../models/Models"
import { Persona, PersonaSize, Link, Text, useTheme } from "@fluentui/react"
import { Container } from "react-bootstrap"
import { semibold } from "../../services/Fonts"
import { Icon } from "@fluentui/react"
import React, { CSSProperties, useContext, useEffect, useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import ErrorMessage from "../Atoms/ErrorMessage"
import Message from "../Atoms/Message"
import LocalizationService from "../../services/LocalizationService"
import Chip from "components/Atoms/Chip"
import GlobalContext from "services/GlobalContext"

interface Props {
  admins: Admin[]
  errorLoadingAdmins: boolean
}

const AdminsList = (props: Props) => {
  var theme = useTheme()
  const locale = LocalizationService.strings()
  var language: string | undefined = LocalizationService.getLanguage()
  let admins: Admin[] = props.admins
  let errorLoadingAdmins: boolean = props.errorLoadingAdmins

  const { isHeaderPinned } = useContext(GlobalContext)

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

  const [domLoaded, setDomLoaded] = useState<boolean>(false)

  const buildAdminsNumberString = (n: number) => {
    if (n === 0) {
      switch (language!) {
        case "it":
          return "Nessun amministratore disponibile."
        case "en":
          return "No administrators available."
      }
    } else {
      switch (language!) {
        case "it":
          return `${n === 1 ? "Amministratore disponibile" : "Amministratori disponibili"}`
        case "en":
          return `${n === 1 ? "Administrator available" : "Administrators available"}`
      }
    }
  }

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <div className="degree-admins mb-4" id="admins">
      <div className="pb-2 pt-2 mb-4" style={subHeader}>
        <Container>
          <div className="d-flex flex-row align-items-center" style={{ gap: 5 }}>
            <Text variant="medium" style={{ color: theme.palette.black }} styles={semibold}>
              {admins.length > 0 && (
                <Chip
                  label={admins.length.toString()}
                  textColor={theme.palette.white}
                  theme={theme}
                  bgColor={theme.palette.themePrimary}
                  size="small"
                  className="mr-1"
                />
              )}
              {buildAdminsNumberString(admins.length)}
            </Text>
          </div>
        </Container>
      </div>

      {errorLoadingAdmins ? (
        <ErrorMessage error={errorLoadingAdmins} />
      ) : admins.length === 0 ? (
        <div className="justify-content-center">
          <Message text={locale?.courses.adminsNotFound!} />
        </div>
      ) : (
        <Container>
          <Row className="admin-list" style={{ justifyContent: admins?.length === 0 ? "center" : "" }}>
            {domLoaded && admins?.length !== 0 ? (
              admins?.map((x, i) => (
                <Col key={i} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                  {(() => {
                    var imageUrl = `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${x.id}.png`
                    return (
                      <Persona
                        imageUrl={imageUrl}
                        onRenderPrimaryText={() => (
                          <>
                            <Icon iconName="FaTelegram" style={{ color: theme.palette.themePrimary }} />
                            &nbsp;<Link href={`https://t.me/${x.username}`}>{`${x.first_name ?? ""} ${x.last_name ?? ""}`}</Link>
                          </>
                        )}
                        text={`@${x.first_name ?? ""} ${x.last_name ?? ""}`}
                        secondaryText={`@${x.username}`}
                        size={PersonaSize.size40}
                      />
                    )
                  })()}
                </Col>
              ))
            ) : (
              <Message text={locale?.courses.adminsNotFound!} />
            )}
          </Row>
        </Container>
      )}
    </div>
  )
}

export default AdminsList
