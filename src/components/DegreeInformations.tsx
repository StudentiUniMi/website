import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { semibold } from '../fonts';
import { FontSizes } from '@fluentui/theme';
import { Icon, Text } from 'office-ui-fabric-react';
import { DocumentCard, DocumentCardTitle, DocumentCardLogo, IDocumentCardLogoProps, IDocumentCardStyles } from 'office-ui-fabric-react/lib/DocumentCard';
import { redirectToLink } from '../services/Utils';
import { useTheme } from '@fluentui/react-theme-provider';
import { Separator } from '@fluentui/react/lib/Separator';
import { mergeStyles } from "@fluentui/react";
import LocalizationService from "../services/LocalizationService";
import { getDegreeInformations } from '../services/Requests';

import { Degree } from '../models/Models'; 

interface Props { degree?: Degree };

const DegreeInformations= (props: Props) => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string = LocalizationService.getLanguage();
    const cardStyles: IDocumentCardStyles = { root: { backgroundColor: theme.palette.neutralLighter, display: 'inline-block', minWidth: '200px', maxWidth:'235px', height: 'auto', minHeight: '150px', maxHeight: '150px' } };
    const conversationTileClass = mergeStyles({ height: 182 });
    const title: any = { fontSize: '20px' };
    const secondaryTitle: any = { fontSize: '14px' };
    const iconProps: any = { fontSize: '24px' };

    const degreeInformations: any[] = getDegreeInformations(props.degree!.pk as unknown as string);

    return (   
        <>    
            <div className='text-center mb-4'>
                <Separator>
                    <Icon iconName="DoubleChevronDown8" style={{ color: theme.palette.themePrimary }} />
                    <Text variant="medium" styles={semibold} style={{ color: theme.palette.themePrimary, fontSize: FontSizes.size18 }}> {locale.courses.availableRedirects} </Text>
                    <Icon iconName="DoubleChevronDown8" style={{ color: theme.palette.themePrimary }} />
                </Separator>
            </div>  

            <Row className="degree-informations justify-content-center mb-3">
                {
                    degreeInformations?.map(x => {
                        const icon: IDocumentCardLogoProps = { logoIcon: x.icon!, className: iconProps };
                        return (
                            x.link !== "" ?
                            <Col xl={3} lg={4} sm={6} xs={12} className="mb-3">
                                <DocumentCard
                                    aria-label={x.name![language]}
                                    styles={cardStyles}
                                    onClick={() => redirectToLink(x.link!)}
                                >
                                    <DocumentCardLogo {...icon} />
                                    <div className={conversationTileClass}>
                                        <DocumentCardTitle title={x.name![language]} shouldTruncate className={title} />
                                        <DocumentCardTitle
                                            title={x.description![language]}
                                            shouldTruncate
                                            showAsSecondaryTitle
                                            className={secondaryTitle}
                                        />
                                    </div>
                                    {/*<DocumentCardActivity activity="Sent March 13, 2018" people={people.slice(6)} />*/}
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