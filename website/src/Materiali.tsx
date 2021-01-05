import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { DocumentCard, DocumentCardTitle, DocumentCardDetails, DocumentCardImage, IDocumentCardStyles, IDocumentCardTitleStyles } from 'office-ui-fabric-react/lib/DocumentCard';
import { IIconProps } from 'office-ui-fabric-react/lib/Icon';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';

const Materiali = () => {

    const cardStyles: IDocumentCardStyles = {
        root: { minWidth: 120, maxWidth: 'none' },
    };

    const documentCardTitleStyle : IDocumentCardTitleStyles = {
        root: { minHeight: 110, height: 'auto', verticalAlign: 'middle!important', margin: 'auto', fontSize: '12' },
    };

    const iconProps: IIconProps = {
        iconName: 'Cloud',
        styles: { root: { color: '#0078d4', fontSize: '65px', width: '120px', height: '90px' } },
    };

    const iconPropsDisabled: IIconProps = {
        iconName: 'Cloud',
        styles: { root: { color: '#d83b01', fontSize: '65px', width: '120px', height: '90px' } },
    };

    return (
        <Container className="materials text-center">
            <Text style={{ fontSize: FontSizes.size16 }}>
                <p className="mb-3">
                    Ogni corso di laurea è dotato di relativi materiali; su questa sezione del sito è possibile trovare quelli disponibili.
                </p>
            </Text>
            {/*<Text style={{ fontSize: FontSizes.size14 }}></Text>*/}

            <div className="row justify-content-center">
                <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-xs-12 mb-3">
                    <DocumentCard
                        styles={cardStyles}
                        onClickHref="https://drive.google.com/drive/folders/0BwzuyD3iLGcbcUNxTVNOVE9FR1E"
                        onClickTarget="blank"
                    >
                        <DocumentCardImage height={150} imageFit={ImageFit.cover} iconProps={iconProps} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="Informatica" styles={documentCardTitleStyle} shouldTruncate />
                        </DocumentCardDetails>
                    </DocumentCard>
                </div>
                <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-xs-12 mb-3">
                    <DocumentCard
                        styles={cardStyles}
                        onClickHref=""
                        onClickTarget="blank"
                    >
                        <DocumentCardImage height={150} imageFit={ImageFit.cover} iconProps={iconPropsDisabled} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="Informatica musicale" styles={documentCardTitleStyle} shouldTruncate />
                        </DocumentCardDetails>
                    </DocumentCard>
                </div>
                <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-xs-12 mb-3">
                    <DocumentCard
                        styles={cardStyles}
                        onClickHref="https://bit.ly/cartella-drive-comdig"
                        onClickTarget="blank"
                    >
                        <DocumentCardImage height={150} imageFit={ImageFit.cover} iconProps={iconProps} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="Informatica per la com. dig." styles={documentCardTitleStyle} shouldTruncate />
                        </DocumentCardDetails>
                    </DocumentCard>
                </div>
                <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-xs-12 mb-3">
                    <DocumentCard
                        styles={cardStyles}
                        onClickHref=""
                        onClickTarget="blank"
                    >
                        <DocumentCardImage height={150} imageFit={ImageFit.cover} iconProps={iconProps} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="Sicurezza sistemi e reti informatiche" styles={documentCardTitleStyle} shouldTruncate />
                        </DocumentCardDetails>
                    </DocumentCard>
                </div>
                <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-xs-12 mb-3">
                    <DocumentCard
                        styles={cardStyles}
                        onClickHref=""
                        onClickTarget="blank"
                    >
                        <DocumentCardImage height={150} imageFit={ImageFit.cover} iconProps={iconPropsDisabled} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="Sicurezza sistemi e reti informatiche online" styles={documentCardTitleStyle} shouldTruncate />
                        </DocumentCardDetails>
                    </DocumentCard>
                </div>
                <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-xs-12 mb-3">
                    <DocumentCard
                        styles={cardStyles}
                        onClickHref="https://bit.ly/materiale-magistrale"
                        onClickTarget="blank"
                    >
                        <DocumentCardImage height={150} imageFit={ImageFit.cover} iconProps={iconProps} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="Informatica (magistrale)" styles={documentCardTitleStyle} shouldTruncate />
                        </DocumentCardDetails>
                    </DocumentCard>
                </div>
                <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-xs-12 mb-3">
                    <DocumentCard
                        styles={cardStyles}
                        onClickHref=""
                        onClickTarget="blank"
                    >
                        <DocumentCardImage height={150} imageFit={ImageFit.cover} iconProps={iconPropsDisabled} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="Sicurezza informatica (magistrale)" styles={documentCardTitleStyle} shouldTruncate />
                        </DocumentCardDetails>
                    </DocumentCard>
                </div>
            </div>
        </Container>
    )
}

export default Materiali;