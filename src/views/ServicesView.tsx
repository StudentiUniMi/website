import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { useTheme } from '@fluentui/react-theme-provider';
import { DocumentCardPreview, IDocumentCardPreviewProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { Card, ICardTokens } from '@uifabric/react-cards';
import { Icon, Link } from 'office-ui-fabric-react';
import { semibold } from '../fonts';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getServices } from '../services/Requests';
import { redirectToLink } from '../services/Utils';


const Services = () => {
    var theme = useTheme();
    const services = getServices();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const cardTokens: ICardTokens = { childrenMargin: 12 };

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
    
    return (
        <Container className="services text-center">
            <div className="mb-3">
                <Text variant="large">
                    Siete stanchi di dover andare a spulciare miriadi di pagine che neanche caricano alla ricerca di strumenti e servizi universitari?
                    Abbiamo realizzato una pagina per centralizzarli tutti!
                </Text>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-2" style={iconStyle} />

            <div className="mb-4">
                <Text variant="medium">
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
                                    <Text variant="medium" style={{color: theme.palette.themePrimary}} styles={semibold}>{x.name}</Text>
                                    <Text variant="small">{x.description}</Text>
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