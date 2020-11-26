import * as React from 'react';
import './App.css';
import {
    DocumentCard,
    DocumentCardActions,
    DocumentCardActivity,
    DocumentCardLocation,
    DocumentCardPreview,
    DocumentCardTitle,
    IDocumentCardPreviewProps,
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import Course from './models/Course'

const TestImages = {
    documentPreview: "",
    documentPreviewTwo: "",
    documentPreviewThree: "",
    personaFemale: "",
    iconPpt: "",
};


interface Props {
    data: Course
}

const previewProps: IDocumentCardPreviewProps = {
    getOverflowDocumentCountText: (overflowCount: number) => `+${overflowCount} more`,
    previewImages: [
        {
            name: 'Gruppo telegram',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
        },
        {
            name: 'Sito web',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewTwo,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
        },
        {
            name: 'Spec Sheet for design',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewThree,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
        },
    ],
};

const CourseItemView = (props: Props) => {
    let data = props.data
    return (
        <DocumentCard
            aria-label="Document Card with multiple items, commands and views. Marketing documents. 6 files were uploaded.
Created by Annie Lindqvist in February 23, 2016. 432 views."
        >

            <DocumentCardLocation
                location="Marketing Documents"
                locationHref="http://microsoft.com"
                ariaLabel="Location, Marketing Documents"
            />
            <DocumentCardTitle title="6 files were uploaded" />
            <DocumentCardActivity
                activity="Created Feb 23, 2016"
                people={[{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }]}
            />
        </DocumentCard>
    );
};

export default CourseItemView;