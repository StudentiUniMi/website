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
import { Separator } from '@fluentui/react/lib/Separator';
import Chip from '@material-ui/core/Chip';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

const Services = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
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
                    {locale.services.text1}
                </Text>
            </div>

            <div className="mb-0">
                <Text variant="medium">
                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale.services.text2} />
                </Text>
            </div>

            <div className="mb-3">
                <Text variant="medium">
                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale.services.text3} />
                </Text>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-2" style={iconStyle} />

            <div className='text-center mb-3'>
                <Separator>
                    <Text variant="medium" styles={semibold} style={{ color: theme.palette.themePrimary, fontSize: FontSizes.size18 }}> {locale.services.availableServices} </Text>
                </Separator>
            </div>  

            <Row className="m-2 justify-content-center">
                {services.map((x, i) =>
                    <Col xl={4} lg={6} md={6} sm={12} xs={12} className="mb-3" key={i}>
                        <Card label={x.name} onClick={() => redirectToLink(x.link ?? "")} horizontal tokens={cardTokens} style={{border: '0px'}}>
                            <Card.Item fill>
                                <DocumentCardPreview {...cardProps(x.icon, x.color)}/>
                            </Card.Item>
                            <Card.Section>
                                <Text variant="medium" style={{color: theme.palette.themePrimary}} styles={semibold}>{x.name}</Text>
                                <Chip label={x.type} variant="outlined" size="small" style={{
                                    borderColor: x.type === 'Guida' ? theme.palette.magentaLight : theme.palette.blue,
                                    color: x.type === 'Guida' ? theme.palette.magentaLight : theme.palette.blue,  
                                    position: 'absolute',
                                    right: '20px',
                                    bottom: '5px' 
                                }} />
                                <Text variant="small">{x.description}</Text>
                            </Card.Section>
                        </Card>
                    </Col>
                    )
                }
            </Row>
        </Container>
    )
}

export default Services;