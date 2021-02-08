//import 'bootstrap/dist/css/bootstrap.min.css';
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { getTheme } from 'office-ui-fabric-react/lib/Styling';
import { DocumentCardPreview, IDocumentCardPreviewProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { Card, ICardTokens } from '@uifabric/react-cards';
import { FontWeights, ITextStyles } from 'office-ui-fabric-react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const theme = getTheme();
const { palette, fonts } = theme;

interface ServiceResources {
    name: string,
    link: string,
    previewPropsUsingIcon: IDocumentCardPreviewProps,
    description: string
}

let cardProps = (iconName: string, backgroundColor: string): IDocumentCardPreviewProps => {
    return {
        previewImages: [ 
            {
                previewIconProps: {
                    iconName: iconName,
                    styles: { root: { fontSize: fonts.superLarge.fontSize, color: palette.white } },
                },
                width: 100, height: 100
            },
        ],
        styles: { previewIcon: { backgroundColor: backgroundColor } },
    }
};

const siteTextStyles: ITextStyles = {
    root: { color: '#025F52', fontWeight: FontWeights.semibold, fontSize: FontSizes.size14 },
};
const descriptionTextStyles: ITextStyles = {
    root: { color: '#333333', fontWeight: FontWeights.regular, fontSize: FontSizes.size12 },
};
/*
const helpfulTextStyles: ITextStyles = {
  root: {
    color: '#333333',
    fontWeight: FontWeights.regular,
  },
};
*/

const cardTokens: ICardTokens = { childrenMargin: 12 };

function redirectToLink(link: string): void {
    // eslint-disable-next-line no-restricted-globals
    window.open(link, '_blank');
};

const resources: ServiceResources[] = [
    {
        name: 'Unimia', 
        link: 'http://unimia.unimi.it/portal/server.pt',
        previewPropsUsingIcon: cardProps('Globe', '#0078d4'),
        description: "Portale d'accesso ai servizi d'ateneo."
    },
    {
        name: 'Iscrizione esami', 
        link: 'http://studente.unimi.it/foIscrizioneEsami/',
        previewPropsUsingIcon: cardProps('CalendarSettings', '#69797e'),
        description: "Iscriviti agli appelli d'esame o controlla le iscrizioni effettuate."
    },
    {
        name: 'Verbalizzazione esami', 
        link: 'http://studente.unimi.it/foVerbalizzazione/',
        previewPropsUsingIcon: cardProps('CheckMark', '#a0aeb2'),
        description: 'Controlla gli esiti finali o parziali dei tuoi esami.'
    },
    {
        name: 'Servizi sifa', 
        link: 'http://unimia.unimi.it/portal/server.pt/community/unimia/207/servizi_sifa/',
        previewPropsUsingIcon: cardProps('ContactCardSettings', '#8378de'),
        description: 'Accedi a tutti i servizi online SIFA.'
    },
    {
        name: 'Webmail', 
        link: 'https://securemail.unimi.it/',
        previewPropsUsingIcon: cardProps('Mail', '#881798'),
        description: "Servizio di webmail d'ateneo."
    },
    {
        name: 'Ariel', 
        link: 'https://ariel.unimi.it/',
        previewPropsUsingIcon: cardProps('PenWorkspace', '#ffaa44'),
        description: "Siti dei corsi didattici."
    },
    {
        name: 'Portale studenti', 
        link: 'https://easystaff.divsi.unimi.it/PortaleStudenti/',
        previewPropsUsingIcon: cardProps('ProductRelease', '#00ad56'),
        description: "Orario delle lezioni, occupazione delle aule, appelli d'esame."
    },
    {
        name: 'Servizio bibliotecario', 
        link: 'https://www.sba.unimi.it/',
        previewPropsUsingIcon: cardProps('BookAnswers', '#005b70'),
        description: "Tutte le informazioni su biblioteche e servizi offerti in questo momento."
    },
    {
        name: 'Informastudenti', 
        link: 'https://informastudenti.unimi.it/',
        previewPropsUsingIcon: cardProps('Help', '#d13438'),
        description: "Accedi al portale InformaStudenti."
    },
    {
        name: 'Virtual Classroom', 
        link: 'https://vc.di.unimi.it/',
        previewPropsUsingIcon: cardProps('Video', '#498205'),
        description: 'Accedi alle videolezioni di virtual classroom (Informatica).'
    }
    /*
    {
        name: '', 
        link: '',
        previewPropsUsingIcon: cardProps('PenWorkspace', '#ffaa44')
    }
    */
];


const Services = () => {

    return (
        <Container className="services text-center">
            <div className="text-center mb-3">
                <Text style={{ fontSize: FontSizes.size14 }}>
                    Qui è possibile trovare tutti i link a servizi e risorse utili legati all'ambito universitario.
                </Text>
            </div>

            <Row className="m-2 justify-content-center">
                {
                    resources.map((x, i) => (
                        <Col xl={4} lg={6} md={6} sm={12} xs={12} className="mb-3" key={i}>
                            <Card label={x.name} onClick={() => redirectToLink(x.link)} horizontal tokens={cardTokens}>
                                <Card.Item fill>
                                    <DocumentCardPreview {...x.previewPropsUsingIcon} />
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