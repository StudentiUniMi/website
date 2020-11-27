import * as React from 'react';
import './App.css';
import {
    DocumentCard,
    DocumentCardActions,
    DocumentCardActivity,
    DocumentCardLocation,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardType,
    IDocumentCardPreviewProps,
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import Course from './models/Course'
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

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



const CourseItemView = (props: Props) => {
    var data = props.data


    const previewProps: IDocumentCardPreviewProps = {
        getOverflowDocumentCountText: (overflowCount: number) => `+${overflowCount} more`,
        previewImages: [
            {
                name: 'Gruppo telegram',
                linkProps: {
                    href: '',
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
                name: 'Faq',
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


    return (
        <DocumentCard>
            <DocumentCardPreview {...previewProps} />
            <DocumentCardTitle title={data.name} />
            {/*
            <DocumentCardActivity
                activity="Created Feb 23, 2016"
                people={[{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }]}
            /> */}
        </DocumentCard>
    );
};

export default CourseItemView;