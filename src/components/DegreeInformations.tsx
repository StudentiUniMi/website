import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Degree from '../models/Degree';
import { DocumentCard, IDocumentCardTitleStyles, DocumentCardTitle, DocumentCardLogo, IDocumentCardLogoProps, IDocumentCardStyles } from 'office-ui-fabric-react/lib/DocumentCard';
import { redirectToLink } from '../services/Utils';
import { useTheme } from '@fluentui/react-theme-provider';

interface Props { cdl?: Degree };

const DegreeInformations= (props: Props) => {
    const theme = useTheme();
    
    const logos: IDocumentCardLogoProps[] = [
        {logoIcon: "Globe" }, // {props.cdl?.main_website}
        {logoIcon: "PageArrowRight" }, // {props.cdl?.manifest}
        {logoIcon: "Robot" }, // {props.cdl?.server_discord}
        {logoIcon: "Video"} // {props.cdl?.virtual_classroom}
    ];

    const titleStyle: IDocumentCardTitleStyles = {
        root: { height: 'auto' }
    };

    const cardStyles: IDocumentCardStyles = {
        root: { backgroundColor: theme.palette.neutralLighter, display: 'inline-block', minWidth: '220px', height: '130px' },
    };

    return (       
        <Row className="degree-informations justify-content-center mb-3">
            <Col xl={3} lg={3} sm={6} xs={12} className="mb-2">
                <DocumentCard styles={cardStyles} onClick={() => redirectToLink(props.cdl?.main_website ?? "")}>
                    <DocumentCardLogo {...logos[0]} />
                    <DocumentCardTitle title="Sito del CdL" styles={titleStyle} />
                </DocumentCard>
            </Col>
            <Col xl={3} lg={3} sm={6} xs={12} className="mb-2">
                <DocumentCard styles={cardStyles} onClick={() => redirectToLink(props.cdl?.manifest ?? "")}>
                    <DocumentCardLogo {...logos[1]} />
                    <DocumentCardTitle title="Manifesto degli studi" styles={titleStyle} />
                </DocumentCard>
            </Col>
            {
            props.cdl?.server_discord === "" ? "" :
            <Col xl={3} lg={3} sm={6} xs={12} className="mb-2">
                <DocumentCard styles={cardStyles} onClick={() => redirectToLink(props.cdl?.server_discord ?? "")}>
                    <DocumentCardLogo {...logos[2]} />
                    <DocumentCardTitle title="Server discord" styles={titleStyle} />
                </DocumentCard>
            </Col>
            }
            {
            props.cdl?.virtual_classroom === "" ? "" :
            <Col xl={3} lg={3} sm={6} xs={12} className="mb-2">
                <DocumentCard styles={cardStyles} onClick={() => redirectToLink(props.cdl?.virtual_classroom ?? "")}>
                    <DocumentCardLogo {...logos[3]} />
                    <DocumentCardTitle title="Virtual classroom" styles={titleStyle} />
                </DocumentCard>
            </Col>
            }
        </Row>
    );
};

export default DegreeInformations;