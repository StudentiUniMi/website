import React from "react";
import { Text } from 'office-ui-fabric-react';
import { initializeIcons } from "@uifabric/icons";
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@fluentui/react-theme-provider';
import { getCourses, getVerboseDegree, getDegreesForSearchBox } from '../services/Requests';
import { Separator } from '@fluentui/react/lib/Separator';
import { semibold } from '../services/fonts';
import { Degree, CourseDegree } from "../models/Models";
import GroupList from "../components/Groups/GroupList";
import LocalizationService from "../services/LocalizationService";
import DegreeInformations from "../components/Groups/DegreeInformations";
import AdminsList from '../components/Groups/AdminsList';
import AdditionalGroupsView from '../components/Groups/AdditionalGroups';
import { Autocomplete } from '../components/Groups/Autocomplete';
import { ISuggestionItem } from '../components/Groups/Autocomplete_types';

initializeIcons();

const GroupsView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    let history = useHistory();
    let didMount = React.useRef(false);

    /* States */
    let [degreeTextSearch, setDegreeTextSearch] = React.useState(''); // Testo nel campo di ricerca
    let [loadedDegree, setLoadedDegree] = React.useState<Degree | null>(null); // Degree da passare ai vari componenti (DegreeInformations e AdminsList)
    let [selectedDegree, setSelectedDegree] = React.useState<string>(''); // PK del Degree
    let [searchData, setSearchData] = React.useState<ISuggestionItem[]>([]); // Array di ISuggestionItem (contenente anche Degree per ogni elemento)
    let [courses, setCourses] = React.useState<CourseDegree[]>([]); // Corsi di insegnamento

    const [loadingCourses, setLoadingCourses] = React.useState<boolean>(false);
    //const [errorLoadingDegrees, setErrorLoadingDegrees] = React.useState<boolean>(false);
    const [errorLoadingCourses, setErrorLoadingCourses] = React.useState<boolean>(false);

    /* Handlers */
    const entitySelectHandler = (item: ISuggestionItem): void => { // Questo viene triggerato quando selezioni qualcosa dal menù
        setDegreeTextSearch(item.displayValue);
        setSelectedDegree(item.key as unknown as string);
        setLoadedDegree(searchData.filter(x => x.degree?.pk === selectedDegree as unknown as number)[0]?.degree!);
        history.push(`/courses/${item.degree?.slug}`);
    };
    
    const searchTextHandler = (): void => { // Triggerato quando premi per la ricerca (si è deciso di selezionare il primo risultato)
        if (searchData.length === 0) return;
        setDegreeTextSearch(searchData[0]?.displayValue);
        setSelectedDegree(searchData[0]?.key as unknown as string);
        setLoadedDegree(searchData.filter(x => x.degree?.pk === selectedDegree as unknown as number)[0]?.degree!);
        history.push(`/courses/${searchData[0]?.degree?.slug}`);
    };


    /* Degrees for the SearchBox */
    const updateDegreesForSearchBox = React.useCallback(async (searchBoxText: string) => {
        console.log("Stai cercando: ", searchBoxText)
        setDegreeTextSearch(searchBoxText)
        if (searchBoxText === undefined || searchBoxText === "") return;
        let degreesResult = await getDegreesForSearchBox(searchBoxText);

        if (degreesResult.status !== 200) {
            console.error("error on degrees result by searchbox text");
            return;
        }

        let tempSearchData : ISuggestionItem[] = [];
        //console.log("degrees result searchbox: ", degreesResult.value ?? []);

        (degreesResult.value ?? []).map(x => {
            return tempSearchData.push({degree: x, key: x.pk, displayValue: x.name!, searchValue: x.name!});
        });

        setSearchData(tempSearchData ?? []);
    }, []);

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
        
        console.log("Courses result: ", coursesResult.value ?? []);
        console.log("GRUPPO PRINCIPALE DA AGGIUNGERE: ", loadedDegree, loadedDegree?.group)
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
    }, [selectedDegree, loadedDegree]);

    
    /* This function initializes the VerboseDegree (retrieves degree based on url initialization) */
    const initializeDegreeByUrl = React.useCallback(async () => {
        if (!didMount.current) {
            didMount.current = true;
            console.log("MOUNTING")
            var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
            var degreeSlug = states.length >= 2 ? states[1] : '';
            
            console.log("Degree slug: ", degreeSlug)
            
            if (degreeSlug === '') {
                return;
            }

            let verboseDegreeResult = await getVerboseDegree(degreeSlug);
            
            if (verboseDegreeResult.status !== 200) {
                // Do we need to show an apposite error? Probably not
                return;
            }

            const verboseDeg = verboseDegreeResult.value ?? undefined;
            if (verboseDeg === undefined || verboseDeg === null) return;
            console.log("VerboseDegree result: ", verboseDeg);

            setLoadedDegree(verboseDeg);
            setSelectedDegree(verboseDeg.pk! as unknown as string);
            setDegreeTextSearch(verboseDeg.name!)
        }
    }, [history.location.pathname]);

    const updateLoadedDegree = React.useCallback(async () => {
        /* L'idea è di prelevare il degree tramite chiave e chiamare questo update ogni volta in modo tale da tenerlo aggiornato. Va sistemato l'initialize che setta solamente la chiave */

    }, []);
    
    React.useEffect(() => {
        if (!didMount.current) initializeDegreeByUrl();      
    }, [searchData, loadedDegree, selectedDegree, initializeDegreeByUrl]);

    React.useEffect(() => {
        updateCourses();
    }, [selectedDegree, loadedDegree, updateCourses]);

    React.useEffect(() => {
        updateLoadedDegree();
    }, [selectedDegree, updateLoadedDegree])

    return (
        <div className="pt-5 courses">
            <Container>
                <div className="mb-3">
                    <div className="mb-1"><Text variant="medium" styles={semibold} style={{textTransform: 'uppercase', color: theme.palette.themePrimary}}>{locale.groups.groupsSection.text1}</Text></div>
                    <Text variant="xLarge">{locale.groups.groupsSection.text2}</Text>
                </div>

                <div className="search-box mb-4">
                    <Autocomplete
                        items={searchData}
                        searchTitle='Cerca il tuo corso di laurea per nome'
                        suggestionCallback={(item) => entitySelectHandler(item)}
                        searchCallback={searchTextHandler}
                        changeCallback={(text) => updateDegreesForSearchBox(text)}
                        value={degreeTextSearch}
                    />
                </div>

            </Container>

            <div style={{ display: selectedDegree !== '' ? 'block' : 'none' }}>
                <DegreeInformations degree={loadedDegree!} />
                <GroupList degree={loadedDegree!} courses={courses} loadingCourses={loadingCourses} errorLoadingCourses={errorLoadingCourses} />
                <AdminsList degree={loadedDegree!} />       
            </div>

            <Container className="pb-4">
                <Separator className="mb-3" />
                <div className="mb-3">
                    <div className="mb-1"><Text variant="medium" styles={semibold} style={{ textTransform: 'uppercase', color: theme.palette.themePrimary }}>{locale.groups.extraGroupsSection.text1}</Text></div>
                    <Text variant="xLarge">{locale.groups.extraGroupsSection.text2}</Text>
                </div>

                <AdditionalGroupsView />

            </Container>
        </div>
    );
};

export default GroupsView;