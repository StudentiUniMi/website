import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Degree from '../models/Degree';
import { semibold } from '../fonts';
import { FontSizes, FontWeights } from '@fluentui/theme';
import { Icon, Text } from 'office-ui-fabric-react';
import { DocumentCard, IDocumentCardTitleStyles, DocumentCardTitle, DocumentCardLogo, IDocumentCardLogoProps, IDocumentCardStyles } from 'office-ui-fabric-react/lib/DocumentCard';
import { redirectToLink } from '../services/Utils';
import { useTheme } from '@fluentui/react-theme-provider';
import { Separator } from '@fluentui/react/lib/Separator';

interface Props { cdl?: Degree };

const DegreeInformations= (props: Props) => {
    const theme = useTheme();
    const titleStyle: IDocumentCardTitleStyles = { root: { height: 'auto', fontWeight: FontWeights.semibold } };
    const cardStyles: IDocumentCardStyles = { root: { backgroundColor: theme.palette.neutralLighter, display: 'inline-block', minWidth: '220px', maxWidth:'265px', height: 'auto', minHeight: '160px', maxHeight: '300px' } };

    return (   
        <>    
            <div className='text-center mb-4'>
                <Separator>
                    <Icon iconName="DoubleChevronDown8" style={{ color: theme.palette.themePrimary }} />
                    <Text variant="medium" styles={semibold} style={{ color: theme.palette.themePrimary, fontSize: FontSizes.size18 }}> Collegamenti disponibili </Text>
                    <Icon iconName="DoubleChevronDown8" style={{ color: theme.palette.themePrimary }} />
                </Separator>
            </div>  

            <Row className="degree-informations justify-content-center mb-3">
                {
                    props.cdl?.redirects?.map(x => {
                        const icon: IDocumentCardLogoProps = { logoIcon: x.icon! };
                        return (
                            x.link !== "" ?
                            <Col xl={3} lg={4} sm={6} xs={12} className="mb-3">
                                <DocumentCard styles={cardStyles} onClick={() => redirectToLink(x.link!)}>
                                    <DocumentCardLogo {...icon} />
                                    <DocumentCardTitle title={x.name!} styles={titleStyle} />
                                    <div className="m-2">
                                        <Text variant="medium">
                                            {x.description}
                                        </Text>
                                    </div>
                                </DocumentCard>
                            </Col> : <></>
                        )
                    })
                }
            </Row>
        </>
    );
};

export default DegreeInformations;