import React from 'react';
import { Text, DefaultButton, IIconProps } from 'office-ui-fabric-react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { GetServerSideProps } from 'next';
import { VerboseDegree, CourseDegree, Admin } from "../../models/Models";
import { useTheme } from '@fluentui/react-theme-provider';
import { Container } from 'react-bootstrap';
import { getCourses, getDegreeInformations, getVerboseDegreeBySlug, getDegreeAdmins } from '../../services/Requests';
import { semibold } from '../../services/Fonts';
import LocalizationService from "../../services/LocalizationService";
import DegreeInformations from "../../components/Groups/DegreeInformations";
import AdminsList from '../../components/Groups/AdminsList';
import GroupList from "../../components/Groups/GroupList";
//import { Chip } from '@material-ui/core';

interface reactHelmetContent {
    title: string,
    description: string,
    href: string,
    hrefLang: string
};

interface Props {
    loadedDegree: VerboseDegree,
    courses: Array<CourseDegree>,
    informations: Array<any>,
    admins: Array<Admin>,
    errors: {
        degree: boolean,
        courses: boolean,
        admins: boolean,
        informations: boolean
    }
};

const Course = (props: Props) => {
    var theme = useTheme();
    const router = useRouter();
    const { slug } = router.query;
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    const buttonIconProps: IIconProps = { iconName: 'Back', styles: { root: { fontSize: 16 } } };

    /* Loaded degree informations */
    let loadedDegree: VerboseDegree = props.loadedDegree;
    // TODO: let errorLoadingDegree: boolean = props.errors.degree;

    /* Helmet */
    let reactHelmetContent: reactHelmetContent = {
        title: locale?.helmet.degreeLoaded.title1 + `${loadedDegree?.name} (${getDegreeFullName(loadedDegree?.type!, language!)})` + locale?.helmet.degreeLoaded.title2,
        description: locale?.helmet.degreeLoaded.description1 + `${loadedDegree?.name} (${getDegreeFullName(loadedDegree?.type!, language!)})` + locale?.helmet.degreeLoaded.description2,
        href: `https://studentiunimi.it/courses/${slug}`,
        hrefLang: language!
    };

    /* Teaching courses */
    let courses: CourseDegree[] = props.courses;
    let errorLoadingCourses: boolean = props.errors.courses;

    /* Admins */
    let admins: Admin[] = props.admins;
    let errorLoadingAdmins: boolean = props.errors.admins;
    
    /* Degree informations */
    let degreeInformations: any[] = props.informations;

    return (
        <>
            <NextSeo
                title={reactHelmetContent.title}
                description={reactHelmetContent.description}
                canonical={reactHelmetContent.href}
                openGraph={{
                    url: reactHelmetContent.href,
                    title: reactHelmetContent.title,
                    description: reactHelmetContent.description,
                    site_name: 'Network StudentiUniMi',
                    type: 'website',
                    locale: language,
                    images: [
                        {
                            url: '/images/groups/groups.png',
                            type: 'image/png',
                        }
                    ],
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

            <section className="degree">
                <div className="degree-title pt-4 pb-4">
                    <Container>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-start" style={{ gap: 16 }}>
                                <DefaultButton onClick={() => { router.push("/courses"); }} iconProps={buttonIconProps} style={{ minWidth: 40, marginTop: 5 }} />
                                
                                <div>
                                    <div>
                                        <Text variant="medium" styles={semibold} style={{ textTransform: 'uppercase', color: theme.palette.themePrimary }}>
                                            {getDegreeFullName(loadedDegree?.type!, language!)}
                                        </Text>
                                    </div>
                                    <Text variant="xLarge">{loadedDegree?.name}</Text>
                                </div>
                            </div>

                            {/*
                            <Text variant="medium" styles={semibold}>
                                <Chip label={getDegreeTypeName(loadedDegree?.type!)} style={{ backgroundColor: theme.palette.themePrimary, color: theme.palette.white, width: 'fit-content' }} />
                            </Text>
                            */}
                        </div>
                    </Container>
                </div>

                <div className="degree-details pb-4">
                    <GroupList degree={loadedDegree!} courses={courses} errorLoadingCourses={errorLoadingCourses} />
                    <DegreeInformations degreeInformations={degreeInformations} />
                    <AdminsList admins={admins} errorLoadingAdmins={errorLoadingAdmins} />
                </div>

            </section>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ( { params }) => {
    let errors = { degree: false, courses: false, admins: false, informations: false };

    const degreeSlug = params!.slug as unknown as string;

    let degreeResult = await getVerboseDegreeBySlug(degreeSlug);
    if (degreeResult.status !== 200) errors.degree = true;

    const degreeKey = degreeResult.value?.pk as unknown as string;

    const teachingCoursesResult = await getCourses(degreeKey);
    if (teachingCoursesResult.status !== 200) errors.courses = true;

    let adminsResult = await getDegreeAdmins(degreeSlug);
    if (adminsResult.status !== 200) errors.admins = true;

    let degreeInformations = getDegreeInformations(degreeSlug);

    /* Add Main Group to the loaded degree */
    if (degreeResult.value?.group?.invite_link !== '' && degreeResult.value?.group?.invite_link !== null && degreeResult.value?.group?.invite_link !== undefined) {
        let mainDegreeGroup: CourseDegree = {
            course: {
                pk: 0,
                name: "Gruppo principale",
                cfu: 0,
                wiki_link: "",
                links: [],
                group: {
                    id: degreeResult.value?.group?.id!,
                    title: degreeResult.value?.group?.title,
                    profile_picture: degreeResult.value?.group?.profile_picture,
                    invite_link: degreeResult.value?.group?.invite_link
                },
            },
            year: -1,
            semester: 0
        };

        teachingCoursesResult.value?.unshift(mainDegreeGroup);
    }

    return { 
        props: { 
            loadedDegree: degreeResult.value,
            courses: teachingCoursesResult.value ?? [],
            informations: degreeInformations,
            admins: adminsResult.value ?? [],
            errors: errors
        } 
    };
};

export default Course;

/**
 * This function builds a generic name for type of degree (corso di laurea triennale, magistrale etc.)
 * @param {string} type 
 * @param {string} language
 * @returns Stringified generic cdl name
 */
const getDegreeFullName = (type: string, language: string): string => {
    switch (type) {
        case 'B':
            return language === "it" ? "Corso di laurea triennale" : "Bachelor's degree";
        case 'M':
            return language === "it" ? "Corso di laurea magistrale" : "Master's degree";
        case 'C':
            return language === "it" ? "Corso di laurea magistrale a ciclo unico" : "Single-cycle master's degree";
    }
    return '';
};