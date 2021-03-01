import { Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DocumentCard, IDocumentCardTitleStyles, DocumentCardTitle, DocumentCardLogo, IDocumentCardLogoProps, IDocumentCardStyles } from 'office-ui-fabric-react/lib/DocumentCard';
import { redirectToLink } from '../services/Utils';
import { getHomeLinks } from '../services/Requests';
import { useTheme } from '@fluentui/react-theme-provider';
import { ActivityItem, Icon, Link, mergeStyleSets } from 'office-ui-fabric-react';

let cardProps = (iconName: string): IDocumentCardLogoProps => {
    return { logoIcon: iconName };
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

    const classNames = mergeStyleSets({
        exampleRoot: {
          marginTop: '20px',
        },
        newsStyle: {
          fontWeight: 'bold',
        },
        newsDescriptionStyle: {
            color: theme.palette.black,
            fontSize: FontSizes.size12
        }
    });

    const activityItemExamples = [
    {
        key: 1,
        activityDescription: [
        <Link key={1} className={classNames.newsStyle}>
            Aggiunto il supporto iniziale ai corsi di laurea in Fisica e Matematica
        </Link>
        //<span key={2}> commented</span>,
        ],
        activityIcon: <Icon iconName={'News'} />,
        comments: [
        <span key={2}>
            <Text className={classNames.newsDescriptionStyle}>
            Da oggi è possibile unirsi ai gruppi principali di questi corsi di laurea. Se si popoleranno avremo bisogno di appositi gestori (preferibilmente studenti).
            Per altre informazioni vai nella sezione "corsi".
            </Text>
        </span>
        ],
        timeStamp: '01/03/2020',
    },
    {
        key: 2,
        activityDescription: [
            <Link key={1} className={classNames.newsStyle}>
            Sistemati alcuni problemi segnalati nei giorni scorsi.
            </Link>
            //<span key={2}> commented</span>,
        ],
        activityIcon: <Icon iconName={'Group'} />,
        comments: [
            <span key={2}>
                <Text className={classNames.newsDescriptionStyle}>
                    Link discord del dipartimento di Informatica nuovamente funzionanti; aggiunto il gruppo di "Logistics" (Magistrale Informatica).
                </Text>
            </span>
        ],
        timeStamp: '01/03/2020',
        }
    ];

    return (
        <Container className="home">

            <div className="text-center mb-4">
                <Text style={{ fontSize: FontSizes.size16 }}>
                    Benvenuto nel sito web del Network Studenti UniMi! Questo progetto è nato con lo scopo di creare un punto centrale 
                    di collegamento tra tutti i corsi di laurea dell'università degli studi di Milano.
                    Sono disponibili siti web, gruppi telegram, informazioni varie e wiki dei corsi didattici.
                    Di seguito è possibile trovare i collegamenti principali e le notizie più recenti.
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

            <Container className="justify-content-center" style={{maxWidth: '600px'}}>
                {activityItemExamples.map((item: { key: string | number }) => (
                    <ActivityItem {...item} key={item.key} className={classNames.exampleRoot} />
                ))}
            </Container>
        </Container >
    )
};

export default HomeView;