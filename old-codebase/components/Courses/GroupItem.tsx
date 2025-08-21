import { Text, Icon, TooltipHost, IContextualMenuItem } from "@fluentui/react"
import { Card } from "@fluentui/react-cards"
import { FontWeights, ITextStyles, Link, Persona, useTheme } from "@fluentui/react"
import { semibold } from "../../services/Fonts"
import { IContextualMenuProps } from "@fluentui/react"
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button"
import { buildProfessorName, preventDefault, preventVisibleHref, redirectToLink } from "../../services/Utils"
import { CourseDegree } from "../../models/Models"
import { CSSProperties, useContext } from "react"
import Chip from "../Atoms/Chip"
import LocalizationService from "../../services/LocalizationService"
import GlobalContext from "services/GlobalContext"

interface Props {
  data: CourseDegree
}

const CourseItem = (props: Props) => {
  const theme = useTheme()
  const locale = LocalizationService.strings()
  const { isPolicyAccepted, togglePolicyDialog } = useContext(GlobalContext)
  const data = props.data

  const cfuStyle: ITextStyles = { root: { fontWeight: FontWeights.semibold, color: theme.palette.themeDark } }
  const professorBox: CSSProperties = {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.neutralLighter,
    padding: "2px 6px",
    borderRadius: 3,
  }
  const professorTextStyle: ITextStyles = { root: { fontWeight: FontWeights.semibold, color: theme.palette.neutralPrimary } }
  const descriptionTextStyles: ITextStyles = { root: { fontWeight: FontWeights.semibold } }

  const personaIconUrl: string = data.course.group ? `https://studentiunimi-groups-propics.marcoaceti.workers.dev/${data.course.group.id}.png` : ""
  const cfuLabel: string | null = data.course.cfu !== 0 ? `${data.course.cfu} CFU` : null

  var primaryText: JSX.Element = (
    <TooltipHost content={data.course.name} calloutProps={{ gapSpace: 5 }}>
      <div className="line-clamp">
        <Text styles={semibold}>{data.course.name}</Text>
      </div>
    </TooltipHost>
  )

  var professor: JSX.Element | null = null
  var telegramLink: JSX.Element | null = null
  var yearText: string | null = null
  var semesterText: string | null = null
  var mainText: string | undefined

  const isInviteLinkEmpty = data.course.group?.invite_link === "" || data.course.group?.invite_link === null

  /* Groups data initialization */
  if (data.course.group !== null) {
    /* Main text inizialization */
    if (data.year === -1) {
      mainText = locale?.courses.mainGroupDescription
    }

    /* Telegram Group initialization */
    if (!isInviteLinkEmpty) {
      telegramLink = (
        <PrimaryButton
          href={preventVisibleHref(isPolicyAccepted, data.course.group.invite_link!)}
          onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}
          iconProps={{ iconName: "FaTelegram" }}
          style={{ justifyContent: "center", marginLeft: "auto", marginRight: "auto", marginTop: 8 }}
          disabled={data.course.group.invite_link === "" || data.course.group.invite_link === null}
          allowDisabledFocus
        >
          {data.course.group.invite_link === "" || data.course.group.invite_link === null ? locale?.courses.groupNotAvailable : locale?.telegramGroup}
        </PrimaryButton>
      )
    }
  } else {
    telegramLink = (
      <PrimaryButton
        iconProps={{ iconName: "FaTelegram" }}
        style={{ justifyContent: "center", marginLeft: "auto", marginRight: "auto", marginTop: 8 }}
        disabled
        allowDisabledFocus
      >
        {locale?.courses.groupNotAvailable}
      </PrimaryButton>
    )
  }

  /* Professor inizialization */
  if (data.course.professor !== null) {
    const style: CSSProperties = { display: "flex", gap: 5, alignItems: "center" }
    let text = (
      <div style={style}>
        <Icon iconName="ImUserTie" /> {buildProfessorName(data.course.professor.first_name, data.course.professor.last_name)}
      </div>
    )

    if (data.course.professor.url === undefined || data.course.professor.url === null) {
      professor = text
    } else {
      professor = <Link href={data.course.professor.url}>{text}</Link>
    }
  }

  /* Year inizialization */
  switch (data?.year) {
    case 0: // Insegnamento di un corso di laurea senza anno
    case -1: // Gruppo principale
      yearText = null
      break
    case -2: // Complementare
      yearText = `${locale?.courses.complementary}`
      break
    default:
      yearText = `${data.year}° ${locale?.courses.year}`
      break
  }

  /* Semester inizialization */
  if (data.semester === -1 || data.semester === null || data.semester === 0) {
    semesterText = null
  } else if (data.semester !== null) {
    semesterText = `${data.semester}° ${locale?.courses.semester}`
  }

  /* Websites inizialization */
  let websites: Array<IContextualMenuItem> = []

  if ((data.course.links ?? []).length !== 0) {
    websites = data.course.links.map((website, index: number) => {
      return {
        key: index.toString(),
        text: website.name,
        onClick: () => redirectToLink(website.url),
        iconProps: { iconName: "VscGlobe" },
      }
    })
  }

  const menuProps: IContextualMenuProps = {
    onDismiss: (ev) => {
      if (ev && "shiftKey" in ev) {
        ev.preventDefault()
      }
    },
    items: websites,
    directionalHintFixed: true,
  }

  return (
    <Card tokens={{ childrenMargin: 12 }} className="group-item text-center">
      <Card.Item>
        <Persona imageUrl={personaIconUrl} onRenderPrimaryText={() => primaryText} text={data.course.name} />
      </Card.Item>

      <Card.Section>
        {data.year !== -1 && (
          <div className="d-flex flex-row align-items-center justify-content-center" style={{ gap: 8 }}>
            {professor && (
              <div style={professorBox}>
                <Text variant="small" styles={professorTextStyle}>
                  {professor}
                </Text>
              </div>
            )}

            {cfuLabel && (
              <Text variant="small" styles={cfuStyle}>
                {cfuLabel}
              </Text>
            )}
          </div>
        )}

        <Text styles={descriptionTextStyles}>
          {data.year === -1 && (
            <Chip
              label={locale?.courses.mainGroup}
              size="small"
              textColor={theme.palette.black}
              bgColor={theme.palette.neutralLight}
              className="m-1"
              theme={theme}
            />
          )}
          {yearText !== null && (
            <Chip
              label={yearText}
              size="small"
              textColor={theme.palette.black}
              bgColor={theme.palette.neutralLighter}
              className="m-1"
              theme={theme}
            />
          )}
          {semesterText !== null && (
            <Chip label={semesterText} size="small" textColor={theme.palette.black} bgColor={theme.palette.neutralLighter} theme={theme} />
          )}
        </Text>

        <Text variant="small" style={{ marginTop: 8, marginBottom: 8 }}>
          {mainText}
        </Text>

        {telegramLink}

        {data.year !== -1 && (
          <DefaultButton
            text={locale?.courses.websites}
            style={{ justifyContent: "center", marginLeft: "auto", marginRight: "auto", marginTop: 8 }}
            iconProps={{ iconName: "VscGlobe" }}
            menuProps={menuProps}
            allowDisabledFocus
            disabled={websites?.length === 0}
            onRenderMenuIcon={() => <Icon iconName="IoChevronDown" />}
          />
        )}

        {data.year !== -1 && (
          <DefaultButton
            href={preventVisibleHref(isPolicyAccepted, data.course.wiki_link!)}
            onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}
            iconProps={{ iconName: "BsQuestionSquare" }}
            style={{ justifyContent: "center", marginLeft: "auto", marginRight: "auto", marginTop: 8 }}
            disabled={data.course.wiki_link === null || data.course.wiki_link === ""}
            allowDisabledFocus
          >
            Wiki
          </DefaultButton>
        )}
      </Card.Section>
    </Card>
  )
}

export default CourseItem
