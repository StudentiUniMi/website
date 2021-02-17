import { Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DocumentCard, IDocumentCardTitleStyles, DocumentCardTitle, DocumentCardLogo, IDocumentCardLogoProps, IDocumentCardStyles } from 'office-ui-fabric-react/lib/DocumentCard';
import { redirectToLink } from '../services/Utils';
import { getHomeLinks } from '../services/Requests';
import { useTheme } from '@fluentui/react-theme-provider';

let cardProps = (iconName: string): IDocumentCardLogoProps => {
    return { 
        logoIcon: iconName
    };
};

const HomeView = () => {
    const homeLinks = getHomeLinks();
    var theme = useTheme();

    const titleStyle: IDocumentCardTitleStyles = {
        root: { color: theme.palette.neutralPrimary, height: 'auto', textAlign: 'center', fontSize: FontSizes.size18 }
    };
    
    const cardStyles: IDocumentCardStyles = {
        root: { backgroundColor: theme.palette.neutralLighter, display: 'inline-block', height: '130px', maxWidth: '130px', minWidth: '130px' },
    };

    return (
        <Container className="home">

            <div className="text-center mb-4">
                <Text style={{ fontSize: FontSizes.size16 }}>
                    Benvenuto nel sito web del Network Studenti UniMi! Questo progetto è nato con lo scopo di creare un punto centrale 
                    di collegamento tra tutti i corsi di laurea dell'università degli studi di Milano.
                    Sono disponibili siti web, gruppi telegram, informazioni varie e wiki dei corsi didattici.
                </Text>
            </div>
            
            <Row className="m-3 justify-content-center">
                {
                    homeLinks.map((x, i) => {
                        return (
                            <Col xl={2} lg={2} md={4} sm={4} xs={12} key={i} className="mb-3 text-center">
                                <DocumentCard styles={cardStyles} onClick={() => redirectToLink(x.link)}>
                                    <DocumentCardLogo {...cardProps(x.icon)} styles={{root: { textAlign: 'center'} }} />
                                    <DocumentCardTitle title={x.name} styles={titleStyle} />
                                </DocumentCard>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container >
    )
};

export default HomeView;