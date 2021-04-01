import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { useTheme } from '@fluentui/react-theme-provider';
import { DocumentCardPreview, IDocumentCardPreviewProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { Card, ICardTokens } from '@uifabric/react-cards';
import { FontWeights, ITextStyles } from 'office-ui-fabric-react';
import { Icon, Link } from 'office-ui-fabric-react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getServices } from '../services/Requests';
import { redirectToLink } from '../services/Utils';


const Services = () => {
    var theme = useTheme();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    let cardProps = (iconName?: string, backgroundColor?: string): IDocumentCardPreviewProps => {
        return {
            previewImages: [ 
                {
                    previewIconProps: {
                        iconName: iconName,
                        styles: { root: { fontSize: FontSizes.size32, color: theme.palette.white } },
                    },
                    width: 100, height: 100
                },
            ],
            styles: { previewIcon: { backgroundColor: backgroundColor } },
        }
    };
    
    const siteTextStyles: ITextStyles = {
        root: { fontWeight: FontWeights.semibold, fontSize: FontSizes.size14, color: theme.palette.themePrimary },
    };
    
    const descriptionTextStyles: ITextStyles = {
        root: { fontWeight: FontWeights.regular, fontSize: FontSizes.size12 },
    };
    
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    
    let services = getServices();

    return (
        <Container className="services text-center">
            <div className="mb-3">
                <h5 style={{fontWeight: 400}}>
                    Siete stanchi di dover andare a spulciare miriadi di pagine che neanche caricano alla ricerca di strumenti e servizi universitari?
                    Abbiamo realizzato una pagina per centralizzarli tutti.
                </h5>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-2" style={iconStyle} />

            <div className="mb-4">
                <Text style={{ fontSize: FontSizes.size18 }}>
                    Se pensi che debba essere aggiunto qualcosa scrivi pure sul <Link href="https://t.me/joinchat/VswKeAblS2nrfXME" target="_blank">gruppo principale</Link>.
                </Text>
            </div>

            <Row className="m-2 justify-content-center">
                {
                    services.map((x, i) => (
                        <Col xl={4} lg={6} md={6} sm={12} xs={12} className="mb-3" key={i}>
                            <Card label={x.name} onClick={() => redirectToLink(x.link ?? "")} horizontal tokens={cardTokens}>
                                <Card.Item fill>
                                    <DocumentCardPreview {...cardProps(x.icon, x.color)}/>
                                </Card.Item>
                                <Card.Section>
                                    <Text variant="small" styles={siteTextStyles}>{x.name}</Text>
                                    <Text styles={descriptionTextStyles}>{x.description}</Text>
                                    {/*
                                    <Text variant="small" styles={helpfulTextStyles}>
                                    Is this recommendation helpful?
                                    </Text>
                                    */}
                                </Card.Section>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Services;