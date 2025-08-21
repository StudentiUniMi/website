import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardImage,
  IDocumentCardStyles,
  IDocumentCardActivityPerson,
  IDocumentCardDetailsStyles,
  IDocumentCardTitleStyles,
} from "@fluentui/react/lib/DocumentCard"
import { ImageFit, Text, Icon, useTheme } from "@fluentui/react"
import { semibold } from "../../services/Fonts"

interface Props {
  title: string
  description: string
  date: string
  click: string
  type: string
  img: string
  previewImg: string
  link: string
}

const LargeCard = (props: Props) => {
  var theme = useTheme()

  const cardStyle: IDocumentCardStyles = {
    root: { display: "inline-block", marginBottom: 20, minWidth: 250, maxWidth: 800, minHeight: 380, cursor: "pointer" },
  }
  const primaryText: IDocumentCardTitleStyles = { root: { height: "auto" } }
  const secondaryText: IDocumentCardTitleStyles = { root: { height: "auto" } }
  const documentCardDetails: IDocumentCardDetailsStyles = { root: { justifyContent: "start" } }
  const people: IDocumentCardActivityPerson[] = [{ name: props.type, profileImageSrc: "/images/" + props.previewImg }]

  return (
    <DocumentCard aria-label={props.title} styles={cardStyle} className="text-align-left" theme={theme} onClickHref={props.link}>
      <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={"/images/" + props.img} />
      <DocumentCardDetails styles={documentCardDetails}>
        <DocumentCardTitle title={props.title} styles={primaryText} />
        <DocumentCardTitle title={props.description} styles={secondaryText} showAsSecondaryTitle />
      </DocumentCardDetails>
      <DocumentCardDetails>
        <div style={{ marginLeft: 16, marginBottom: 8 }}>
          <Text styles={semibold} variant="medium" style={{ color: theme.palette.themePrimary }}>
            <Icon iconName="PageArrowRight" /> {props.click}
          </Text>
        </div>
      </DocumentCardDetails>
      <DocumentCardActivity activity={props.date} people={people} />
    </DocumentCard>
  )
}

export default LargeCard
