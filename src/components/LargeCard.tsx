import { DocumentCard, DocumentCardActivity, DocumentCardTitle, DocumentCardDetails, DocumentCardImage, IDocumentCardStyles, IDocumentCardActivityPerson, IDocumentCardDetailsStyles, IDocumentCardTitleStyles } from '@fluentui/react/lib/DocumentCard';
import { ImageFit } from '@fluentui/react/lib/Image';
import { redirectToLink } from '../services/Utils';
import { Text, Icon } from '@fluentui/react';
import { semibold } from '../services/fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../services/LocalizationService";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface Props { title: string, description: string, date: string, click: string, type: string, img: string, previewImg: string, link: string };

const LargeCard = (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
   
    const cardStyle: IDocumentCardStyles = { root: { display: 'inline-block', marginBottom: 20, minWidth: 250, maxWidth: 800, minHeight: 380 } };
    const primaryText: IDocumentCardTitleStyles = { root: { height: 'auto' } };
    const secondaryText: IDocumentCardTitleStyles = { root: { height: 'auto' }};
    const vaccineDocumentCardDetails: IDocumentCardDetailsStyles = { root: { justifyContent: 'start' } };
    const people: IDocumentCardActivityPerson[] = [{ name: props.type,  profileImageSrc: process.env.PUBLIC_URL + "/other/" + props.previewImg  } ];
    return (
        <DocumentCard
            aria-label={props.title}
            styles={cardStyle}
            onClick={() => redirectToLink(props.link)}
            className="text-align-left"
            theme={theme}
        >
            <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={process.env.PUBLIC_URL + "/other/" + props.img} />
            <DocumentCardDetails styles={vaccineDocumentCardDetails}>
                <DocumentCardTitle title={props.title} styles={primaryText} />
                <DocumentCardTitle
                    title={props.description}
                    styles={secondaryText}
                    showAsSecondaryTitle
                />
            </DocumentCardDetails>
            <DocumentCardDetails>
                <div style={{ marginLeft: 16, marginBottom: 8 }}>
                    <Text styles={semibold} variant="medium" style={{ color: theme.palette.themePrimary }}><Icon iconName="PageArrowRight" /> {props.click}</Text>
                </div>
            </DocumentCardDetails>
            <DocumentCardActivity activity={props.date} people={people} />
        </DocumentCard>
    )
};

export default LargeCard;