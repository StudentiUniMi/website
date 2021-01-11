import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { DocumentCard, DocumentCardTitle, DocumentCardDetails, DocumentCardImage, IDocumentCardStyles, IDocumentCardTitleStyles, IDocumentCardDetailsStyles } from 'office-ui-fabric-react/lib/DocumentCard';
import { IIconProps } from 'office-ui-fabric-react/lib/Icon';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';

const iconProps: IIconProps = {
    iconName: 'Cloud',
    styles: { root: { color: '#0078d4', fontSize: '65px', width: '120px', height: '90px' } },
};

const iconPropsDisabled: IIconProps = {
    iconName: 'Cloud',
    styles: { root: { color: '#ea4300', fontSize: '65px', width: '120px', height: '90px' } },
};

const Drives = [
    { cdl: 'Informatica', link: '', available: true },
    { cdl: 'Informatica musicale', link: '', available: false},
    { cdl: 'Informatica per la comunicazione digitale', link: '', available: true },
    { cdl: 'Sicurezza dei sistemi e delle reti informatiche', link: '', available: false},
    { cdl: 'Sicurezza dei sistemi e delle reti informatiche online', link: '', available: false},
    { cdl: 'Informatica (magistrale)', link: '', available: true },
    { cdl: 'Sicurezza informatica (magistrale)', link: '', available: false}
];

const Materials = () => {

    const cardStyles: IDocumentCardStyles = {
        root: { minWidth: 120, maxWidth: 'none' }
    };

    const documentCardTitleStyle : IDocumentCardTitleStyles = {
        root: { minHeight: 110, height: 'auto', verticalAlign: 'middle!important', margin: 'auto', fontSize: '12' }
    };

    const documentCardDetailsStyle : IDocumentCardDetailsStyles = {
        root: { backgroundColor: '#fafafa' }
    };

    return (
        <Container className="materials text-center">
            <Text style={{ fontSize: FontSizes.size16 }}>
                <p className="mb-3">
                    Ogni corso di laurea è dotato di relativi materiali; su questa sezione del sito è possibile trovare quelli disponibili.
                </p>
            </Text>

            <div className="row justify-content-center">

                {Drives.map(x => {
                    if (x.available) return (
                        <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-xs-12 mb-3">
                            <DocumentCard
                                styles={cardStyles}
                                onClickHref={x.link}
                                onClickTarget="blank"
                            >
                                <DocumentCardImage height={150} imageFit={ImageFit.cover} iconProps={iconProps} />
                                <DocumentCardDetails styles={documentCardDetailsStyle}>
                                <DocumentCardTitle title={x.cdl} styles={documentCardTitleStyle} shouldTruncate />
                                </DocumentCardDetails>
                            </DocumentCard>
                        </div>
                    )
                    else return (
                        <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-xs-12 mb-3">
                            <DocumentCard
                                styles={cardStyles}
                                onClickHref=""
                                onClickTarget="blank"
                            >
                                <DocumentCardImage height={150} imageFit={ImageFit.cover} iconProps={iconPropsDisabled} />
                                <DocumentCardDetails styles={documentCardDetailsStyle}>
                                <DocumentCardTitle title={x.cdl} styles={documentCardTitleStyle} shouldTruncate />
                                </DocumentCardDetails>
                            </DocumentCard>
                        </div>
                    )
                })}
                
            </div>
        </Container>
    )
}

export default Materials;