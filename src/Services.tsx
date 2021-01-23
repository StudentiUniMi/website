import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { getTheme } from 'office-ui-fabric-react/lib/Styling';
import { DocumentCard, DocumentCardDetails, DocumentCardPreview, DocumentCardTitle, IDocumentCardPreviewProps, DocumentCardType } from 'office-ui-fabric-react/lib/DocumentCard';

const theme = getTheme();
const { palette, fonts } = theme;

interface ServiceResources {
    name: string,
    link: string,
    previewPropsUsingIcon: IDocumentCardPreviewProps
}

let cardProps = (iconName: string, backgroundColor: string): IDocumentCardPreviewProps => {
    return {
        previewImages: [ 
            {
                previewIconProps: {
                    iconName: iconName,
                    styles: { root: { fontSize: fonts.superLarge.fontSize, color: palette.white } },
                },
                width: 100,
            },
        ],
        styles: { previewIcon: { backgroundColor: backgroundColor } },
    }
};

const resources: ServiceResources[] = [
    {
        name: 'Unimia', 
        link: 'http://unimia.unimi.it/portal/server.pt',
        previewPropsUsingIcon: cardProps('Globe', '#0078d4')
    },
    {
        name: 'Iscrizione esami', 
        link: 'http://studente.unimi.it/foIscrizioneEsami/',
        previewPropsUsingIcon: cardProps('CalendarSettings', '#69797e')
    },
    {
        name: 'Verbalizzazione esami', 
        link: 'http://studente.unimi.it/foVerbalizzazione/',
        previewPropsUsingIcon: cardProps('CheckMark', '#a0aeb2')
    },
    {
        name: 'Servizi sifa', 
        link: 'http://unimia.unimi.it/portal/server.pt/community/unimia/207/servizi_sifa/',
        previewPropsUsingIcon: cardProps('ContactCardSettings', '#8378de')
    },
    {
        name: 'Webmail', 
        link: 'https://securemail.unimi.it/',
        previewPropsUsingIcon: cardProps('Mail', '#881798')
    },
    {
        name: 'Ariel', 
        link: 'https://ariel.unimi.it/',
        previewPropsUsingIcon: cardProps('PenWorkspace', '#ffaa44')
    },
    {
        name: 'Portale studenti', 
        link: 'https://easystaff.divsi.unimi.it/PortaleStudenti/',
        previewPropsUsingIcon: cardProps('ProductRelease', '#00ad56')
    },
    {
        name: 'Servizio bibliotecario', 
        link: 'https://www.sba.unimi.it/',
        previewPropsUsingIcon: cardProps('BookAnswers', '#005b70')
    },
    {
        name: 'Informastudenti', 
        link: 'https://informastudenti.unimi.it/',
        previewPropsUsingIcon: cardProps('Help', '#d13438')
    },
    {
        name: 'Virtual Classroom', 
        link: 'https://vc.di.unimi.it/',
        previewPropsUsingIcon: cardProps('Video', '#498205')
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
                <Text style={{ fontSize: FontSizes.size16 }}>
                    <p className="mb-0">
                        Qui è possibile trovare tutti i link a servizi e risorse utili legati all'ambito universitario.
                    </p>
                </Text>
            </div>
            <div className="row m-2 justify-content-center">
                {
                    resources.map(x => (
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-2">
                            <DocumentCard
                                aria-label={x.name}
                                type={DocumentCardType.compact}
                                onClickHref={x.link}
                            >
                                <DocumentCardPreview {...x.previewPropsUsingIcon} />
                                <DocumentCardDetails>
                                    <DocumentCardTitle title={x.name} shouldTruncate />
                                </DocumentCardDetails>
                            </DocumentCard>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

export default Services;