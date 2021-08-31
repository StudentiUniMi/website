import { DocumentCard, DocumentCardActivity, DocumentCardTitle, DocumentCardDetails, DocumentCardImage, IDocumentCardStyles, IDocumentCardActivityPerson, IDocumentCardDetailsStyles, IDocumentCardTitleStyles } from '@fluentui/react/lib/DocumentCard';
import { ImageFit } from '@fluentui/react/lib/Image';
import { redirectToLink } from '../../services/Utils';
import { Text, Icon } from '@fluentui/react';
import { semibold } from '../../fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const VaccineCards = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
   
    const vaccineNewsCards: IDocumentCardStyles = { root: { display: 'inline-block', marginBottom: 20, minWidth: 250, maxWidth: 'none', minHeight: 380 } };
    const vaccinePrimaryText: IDocumentCardTitleStyles = { root: { height: 'auto' } };
    const vaccineSecondaryText: IDocumentCardTitleStyles = { root: { height: 'auto' }};
    const vaccineDocumentCardDetails: IDocumentCardDetailsStyles = { root: { justifyContent: 'start' } };
    const people: IDocumentCardActivityPerson[] = [{ name: locale.homepage.vaccineSection.news,  profileImageSrc: process.env.PUBLIC_URL + "/other/news.png"  } ];
    return (
        <Row className="justify-content-center">

            <Col className="mb-3" xl={6} lg={6} md={12} sm={12} xs={12}>
                <DocumentCard
                    aria-label={locale.homepage.vaccineSection.card1.title}
                    styles={vaccineNewsCards}
                    onClick={() => redirectToLink("https://www.mur.gov.it/it/news/lunedi-09082021/green-pass-obbligatorio-attivita-presenza-universita-e-afam")}
                    className="text-align-left"
                    theme={theme}
                >
                    <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={process.env.PUBLIC_URL + "/other/vaccine_card_1.png"} />
                    <DocumentCardDetails styles={vaccineDocumentCardDetails}>
                        <DocumentCardTitle title={locale.homepage.vaccineSection.card1.title} styles={vaccinePrimaryText} />
                        <DocumentCardTitle
                            title={locale.homepage.vaccineSection.card1.description}
                            styles={vaccineSecondaryText}
                            showAsSecondaryTitle
                        />
                    </DocumentCardDetails>
                    <DocumentCardDetails>
                        <div style={{ marginLeft: 16, marginBottom: 8 }}>
                            <Text styles={semibold} variant="medium" style={{ color: theme.palette.themePrimary }}><Icon iconName="PageArrowRight" /> {locale.homepage.vaccineSection.click}</Text>
                        </div>
                    </DocumentCardDetails>
                    <DocumentCardActivity activity={locale.homepage.vaccineSection.card1.date} people={people} />
                </DocumentCard>
            </Col>

            <Col className="mb-3" xl={6} lg={6} md={12} sm={12} xs={12}>
                <DocumentCard
                    aria-label={locale.homepage.vaccineSection.card2.title}
                    styles={vaccineNewsCards}
                    onClick={() => redirectToLink("https://www.docdroid.net/zm5C1c5/20210810-piano-vaccini-ampamp-universita-verfin-pdf")}
                    className="text-align-left"
                    theme={theme}
                >
                    <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={process.env.PUBLIC_URL + "/other/vaccine_card_2.jpg"} />
                    <DocumentCardDetails styles={vaccineDocumentCardDetails}>
                        <DocumentCardTitle title={locale.homepage.vaccineSection.card2.title} styles={vaccinePrimaryText} />
                        <DocumentCardTitle
                            title={locale.homepage.vaccineSection.card2.description}
                            styles={vaccineSecondaryText}
                            showAsSecondaryTitle
                        />
                    </DocumentCardDetails>
                    <DocumentCardDetails>
                        <div style={{ marginLeft: 16, marginBottom: 8 }}>
                            <Text styles={semibold} variant="medium" style={{ color: theme.palette.themePrimary }}><Icon iconName="PageArrowRight" /> {locale.homepage.vaccineSection.click}</Text>
                        </div>
                    </DocumentCardDetails>
                    <DocumentCardActivity activity={locale.homepage.vaccineSection.card2.date} people={people} />
                </DocumentCard>
            </Col>

        </Row>
    )
};

export default VaccineCards;