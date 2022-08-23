import React from "react";
import { Text } from 'office-ui-fabric-react/lib-commonjs';
import { Image } from 'office-ui-fabric-react/lib-commonjs/Image';
import { initializeIcons } from "@uifabric/icons";
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useTheme } from '@fluentui/react-theme-provider';
import { getCourses, getVerboseDegreeByID, getDegreesForSearchBox } from '../src/services/Requests';
import { Separator } from 'office-ui-fabric-react/lib-commonjs';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib-commonjs';
import { semibold } from '../src/services/Fonts';
import { VerboseDegree, CourseDegree } from "../src/models/Models";
import { Autocomplete } from '../src/components/Groups/Autocomplete';
import { ISuggestionItem } from '../src/components/Groups/Autocomplete_types';
import { IconButton, IIconProps, ITooltipHostStyles, Link, PrimaryButton, TooltipHost } from 'office-ui-fabric-react/lib-commonjs';
import { useBoolean } from "@fluentui/react-hooks";
import { NextSeo } from 'next-seo';
import GroupList from "../src/components/Groups/GroupList";
import LocalizationService from "../src/services/LocalizationService";
import DegreeInformations from "../src/components/Groups/DegreeInformations";
import AdminsList from '../src/components/Groups/AdminsList';
import AdditionalGroupsView from '../src/components/Groups/AdditionalGroups';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import JsxParser from "react-jsx-parser";

initializeIcons();

interface reactHelmetContent {
    title: string,
    description: string,
    href: string,
    hrefLang: string
};

/* Returns degree type (name) */
const getDegreeTypeName = (type: string): string => {
    switch (type) {
        case 'B':
            return 'triennale';
        case 'M':
            return 'magistrale';
        case 'C':
            return 'magistrale a ciclo unico';
    }
    return '';
};

const GroupsView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    let router = useRouter();
    let didMount = React.useRef(false);
    const resetIcon: IIconProps = { iconName: 'Refresh' };
    const calloutProps = { gapSpace: 10 };
    const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

    /* States */
    let [hideApiErrorDialog, { toggle: toggleApiErrorDialog }] = useBoolean(true);
    let [degreeTextSearch, setDegreeTextSearch] = React.useState(''); // Testo nel campo di ricerca
    let [loadedDegree, setLoadedDegree] = React.useState<VerboseDegree | null>(null); // Degree da passare ai vari componenti (DegreeInformations e AdminsList)
    let [selectedDegree, setSelectedDegree] = React.useState<string>(''); // PK del Degree
    let [searchData, setSearchData] = React.useState<ISuggestionItem[]>([]); // Array di ISuggestionItem (contenente anche Degree per ogni elemento)
    let [courses, setCourses] = React.useState<CourseDegree[]>([]); // Corsi di insegnamento
    let [reactHelmetContent, setReactHelmetContent] = React.useState<reactHelmetContent>(
        { 
            title: locale?.helmet.courses.title!, 
            description: locale?.helmet.courses.description!, 
            href: 'https://studentiunimi.it/courses/', 
            hrefLang: language! 
        }
    );

    const [loadingCourses, setLoadingCourses] = React.useState<boolean>(false);
    const [errorLoadingDegrees, setErrorLoadingDegrees] = React.useState<boolean>(false);
    const [errorLoadingCourses, setErrorLoadingCourses] = React.useState<boolean>(false);

    /* Handlers */
    const entitySelectHandler = (item: ISuggestionItem): void => { // Questo viene triggerato quando selezioni qualcosa dal menù
        setDegreeTextSearch(item.displayValue);
        setSelectedDegree(item.key as unknown as string);
        router.push(`/courses/${item.degree?.slug}/`);
    };
    
    const searchTextHandler = (): void => { // Triggerato quando premi per la ricerca (si è deciso di selezionare il primo risultato)
        if (searchData.length === 0) return;
        setDegreeTextSearch(searchData[0]?.displayValue);
        setSelectedDegree(searchData[0]?.key as unknown as string);
        router.push(`/courses/${searchData[0]?.degree?.slug}/`);
    };


    /* Degrees for the SearchBox */
    const updateDegreesForSearchBox = React.useCallback(async (searchBoxText: string) => {
        setDegreeTextSearch(searchBoxText)
        if (searchBoxText === undefined || searchBoxText === "") return;
        let degreesResult = await getDegreesForSearchBox(searchBoxText);

        if (degreesResult.status !== 200) {
            setErrorLoadingDegrees(true);
            toggleApiErrorDialog();
            console.error("error on degrees result by searchbox text");
            return;
        }

        let tempSearchData : ISuggestionItem[] = [];

        (degreesResult.value ?? []).map(x => {
            return tempSearchData.push({degree: x, key: x.pk, displayValue: x.name!, searchValue: x.name!});
        });

        setSearchData(tempSearchData ?? []);
    }, [toggleApiErrorDialog]);

    /* Courses callBack */
    const updateCourses = React.useCallback(async () => {
        if (selectedDegree === '' || selectedDegree === undefined) return;
        setErrorLoadingCourses(false);
        setLoadingCourses(true);
        let coursesResult = await getCourses(selectedDegree);

        if (coursesResult.status !== 200) {
            setLoadingCourses(false);
            setErrorLoadingCourses(true);
            return;
        }
        
        if (loadedDegree !== undefined && loadedDegree?.group?.invite_link !== '' && loadedDegree?.group?.invite_link !== null && loadedDegree?.group?.invite_link !== undefined) {
            let mainDegreeGroup: CourseDegree = {
                "course": {
                    pk: undefined,
                    name: "Gruppo principale",
                    cfu: 0,
                    wiki_link: "",
                    links: [],
                    group: { 
                        id: loadedDegree?.group?.id!,
                        title: loadedDegree?.group?.title,
                        profile_picture: loadedDegree?.group?.profile_picture,
                        invite_link: loadedDegree?.group?.invite_link
                    },
                },
                year: -1,
                semester: 0
            };
            coursesResult.value?.unshift(mainDegreeGroup);
        }

        setCourses(coursesResult.value ?? []);
        setLoadingCourses(false);

        setReactHelmetContent({
            title: locale?.helmet.degreeLoaded.title1 + `${loadedDegree?.name} (${getDegreeTypeName(loadedDegree?.type!)})` + locale?.helmet.degreeLoaded.title2, 
            description: locale?.helmet.degreeLoaded.description1 + `${loadedDegree?.name} (${getDegreeTypeName(loadedDegree?.type!)})` + locale?.helmet.degreeLoaded.description2, 
            href: `https://studentiunimi.it/courses/${loadedDegree?.slug}`,
            hrefLang: language!
        });
    }, [locale, selectedDegree, loadedDegree, language]);

    
    /* This function initializes the VerboseDegree (retrieves degree based on url initialization) */
    const initializeDegreeByUrl = React.useCallback(async () => {
        if (!didMount.current) {
            didMount.current = true;
            // TODO: Fix this
            //var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
            //var degreeSlug = states.length >= 2 ? states[1].toLowerCase() : '';
            
            //if (degreeSlug === '') {
            //    return;
            //}

            //let verboseDegreeResult = await getVerboseDegreeBySlug(degreeSlug);
            
            //if (verboseDegreeResult.status !== 200) {
            //    return;
            //}

            //const verboseDeg = verboseDegreeResult.value ?? undefined;
            //if (verboseDeg === undefined || verboseDeg === null) return;

            /*
            setSelectedDegree(verboseDeg.pk! as unknown as string);
            setDegreeTextSearch(verboseDeg.name!)

            setReactHelmetContent({
                title: locale?.helmet.degreeLoaded.title1 + `${verboseDeg?.name} (${getDegreeTypeName(verboseDeg?.type!)})` + locale?.helmet.degreeLoaded.title2, 
                description: locale?.helmet.degreeLoaded.description1 + `${verboseDeg?.name} (${getDegreeTypeName(verboseDeg?.type!)})` + locale?.helmet.degreeLoaded.description2, 
                href: `https://studentiunimi.it/courses/${verboseDeg?.slug}`,
                hrefLang: language!
            });
            */
        }
    }, [locale?.helmet.degreeLoaded.title1, locale?.helmet.degreeLoaded.title2, locale?.helmet.degreeLoaded.description1, locale?.helmet.degreeLoaded.description2, language]);

    const updateLoadedDegree = React.useCallback(async () => {
        if (selectedDegree === null || selectedDegree === undefined || selectedDegree === "") return;
        let degreeResult = await getVerboseDegreeByID(selectedDegree);
        if (degreeResult.status !== 200) return;

        const degree = degreeResult.value ?? undefined;
        if (degree === undefined || degree === null) return;

        setLoadedDegree(degree);
    }, [selectedDegree]);
    
    React.useEffect(() => {
        if (!didMount.current) initializeDegreeByUrl();      
    }, [searchData, loadedDegree, selectedDegree, initializeDegreeByUrl]);

    React.useEffect(() => {
        updateCourses();
    }, [selectedDegree, loadedDegree, updateCourses]);

    React.useEffect(() => {
        updateLoadedDegree();
    }, [selectedDegree, updateLoadedDegree]);

    React.useEffect(() => {
        /* TODO: Updating content based on browser commands (push and pop) */
        /*
        return history.listen(async () => {
            if (history.action === 'PUSH' || history.action === 'POP') {
                var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
                var degreeSlug = states.length >= 2 ? states[1].toLowerCase() : '';

                if (degreeSlug === "") {
                    resetSection();
                } else {
                    didMount.current = false;
                    initializeDegreeByUrl();
                }
            }
        });
        */
    }, [initializeDegreeByUrl, updateCourses])

    function resetSection() {
        setLoadedDegree(null);
        setSelectedDegree('');
        setDegreeTextSearch('');
    };

    const modelProps = { isBlocking: false };
    const dialogContentProps = {
        type: DialogType.largeHeader,
        title: locale?.serverError
    };

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
                    locale: language, // TODO: Check if this works
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

            <div className="groups">
                <div className="pt-5">
                    <Container>
                        <Row>
                            <Col lg={3} className="text-center mb-3 mb-lg-0">
                                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 350 }}>
                                    <Image className="mb-2" src={'/images/groups/groups.png'} style={{ display: 'inline-block', width: '100%' }} />
                                </div>
                            </Col>

                            <Col lg={9}>
                                <div className="mb-2">
                                    <div className="mb-1">
                                        <Text variant="medium" styles={semibold} style={{textTransform: 'uppercase', color: theme.palette.themePrimary}}>{locale?.groups.groupsSection.text1}</Text>
                                    </div>
                                    
                                    <div className="mb-2">
                                        <span className="mr-1"><Text variant="xLargePlus">{locale?.groups.groupsSection.text2}</Text></span>
                                        
                                        <TooltipHost
                                            content={locale?.groups.resetSection}
                                            calloutProps={calloutProps}
                                            styles={hostStyles}
                                        >
                                            <IconButton iconProps={resetIcon} onClick={resetSection} />
                                        </TooltipHost>
                                    </div>

                                    <div className="mb-2 mb-md-4">
                                        <Text variant="large">{locale?.groups.groupsSection.text3}</Text>
                                    </div>
                                </div>

                                <div className="search-box">
                                    <Autocomplete
                                        items={searchData}
                                        searchTitle={locale?.groups.findDegreeByName}
                                        suggestionCallback={(item) => entitySelectHandler(item)}
                                        searchCallback={searchTextHandler}
                                        changeCallback={(text) => updateDegreesForSearchBox(text)}
                                        value={degreeTextSearch}
                                        disabled={errorLoadingDegrees}
                                    />
                                </div>

                                <div className="mt-2" style={{ display: errorLoadingDegrees ? 'block' : 'none' }}>
                                    <Text variant="medium" styles={semibold} style={{ color: theme.palette.red }}>{locale?.errorDataLoading}</Text>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>

                <div style={{ display: selectedDegree !== '' ? 'block' : 'none', marginTop: '1.5rem' }}>
                    <GroupList degree={loadedDegree!} courses={courses} loadingCourses={loadingCourses} errorLoadingCourses={errorLoadingCourses} />
                    <DegreeInformations degree={loadedDegree!} />
                    <AdminsList degree={loadedDegree!} />       
                </div>

                <Container className="pb-4">
                    <Separator className="mb-3 mt-3" />

                    <div className="mb-4">
                        <Row>
                            <Col xl={9} lg={8}>
                                <div className="mb-3">
                                    <div className="mb-1">
                                        <Text variant="medium" styles={semibold} style={{ textTransform: 'uppercase', color: theme.palette.themePrimary }}>{locale?.groups.extraGroupsSection.text1}</Text>
                                    </div>
                                    <div className="mb-2">
                                        <Text variant="xLargePlus">{locale?.groups.extraGroupsSection.text2}</Text>
                                    </div>
                                    <div>
                                        <Text variant="medium">{locale?.groups.extraGroupsSection.text3}</Text>
                                    </div>
                                </div>
                            </Col>

                            <Col xl={3} lg={4} className="text-center">
                                <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                    <Image className="mb-2" src={'/images/groups/extra_groups.png'} style={{ display: 'inline-block', width: '75%' }} />
                                </div>
                            </Col>

                        </Row>
                    </div>

                    <AdditionalGroupsView />
                </Container>

                {/* APIs Error dialog */}
                <Dialog
                    hidden={hideApiErrorDialog}
                    onDismiss={toggleApiErrorDialog}
                    dialogContentProps={dialogContentProps}
                    modalProps={modelProps}
                >
                    <div className="mb-3">
                        {locale?.errorDataLoading}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
                        <Image src={'/images/message/error.png'} style={{ width: 200 }} />
                    </div>

                    <div>
                        <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.additionalInformations} />
                    </div>

                    <DialogFooter>
                        <PrimaryButton onClick={toggleApiErrorDialog} text="Ok" />
                    </DialogFooter>
                </Dialog>
            </div>
        </>
    );
};

export default GroupsView;