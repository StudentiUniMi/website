import React from "react";
import { Text, DropdownMenuItemType } from 'office-ui-fabric-react';
import { initializeIcons } from "@uifabric/icons";
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { useTheme } from '@fluentui/react-theme-provider';
import { getDepartments, getDegrees, getCourses, getVerboseDegree, getDegreesForSearchBox } from '../services/Requests';
import { Separator } from '@fluentui/react/lib/Separator';
import { semibold } from '../services/fonts';
import { Department, Degree, CourseDegree } from "../models/Models";
import GroupList from "../components/Groups/GroupList";
import LocalizationService from "../services/LocalizationService";
import DegreeInformations from "../components/Groups/DegreeInformations";
import AdminsList from '../components/Groups/AdminsList';
import AdditionalGroupsView from '../components/Groups/AdditionalGroups';
import { Autocomplete } from '../components/Groups/Autocomplete';
import { ISuggestionItem } from '../components/Groups/Autocomplete_types';

initializeIcons();
const iconStyles = { marginRight: '8px' };

const GroupsView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    let history = useHistory();
    let didMount = React.useRef(false);

    let degree: Degree | null;

    const entitySelectHandler = (item: ISuggestionItem): void => {
        setSelectedDegree(item.key as unknown as string);
        history.push(`/courses/${item.degree?.slug}`);
    };
    
    const searchTextandler = (item: string): void => {
        setSelectedDegree(searchData[0]?.key as unknown as string);
        setSearchTextValue(item);
    };
    
    /* States */
    let [searchTextValue, setSearchTextValue] = React.useState('');
    let [searchData, setSearchData] = React.useState<ISuggestionItem[]>([]);
    const [courses, setCourses] = React.useState<CourseDegree[]>([]);

    const [loadingCourses, setLoadingCourses] = React.useState<boolean>(false);
    const [errorLoadingDepartments, setErrorLoadingDepartments] = React.useState<boolean>(false);
    const [errorLoadingDegrees, setErrorLoadingDegrees] = React.useState<boolean>(false);
    const [errorLoadingCourses, setErrorLoadingCourses] = React.useState<boolean>(false);

    const [selectedDepartment, setSelectedDepartment] = React.useState<string>('');
    const [selectedDegree, setSelectedDegree] = React.useState<string>('');


    /* Degrees for the SearchBox */
    const updateDegreesForSearchBox = React.useCallback(async (searchBoxText: string) => {
        console.log(searchBoxText)
        if (searchBoxText === undefined || searchBoxText === "") return;
        let degreesResult = await getDegreesForSearchBox(searchBoxText);

        if (degreesResult.status !== 200) {
            console.error("error on degrees result by searchbox text");
            return;
        }

        let tempSearchData : ISuggestionItem[] = [];
        console.log("degrees result searchbox: ", degreesResult.value ?? []);

        

        (degreesResult.value ?? []).map(x => {
            tempSearchData.push({degree: x, key: x.pk, displayValue: x.name!, searchValue: x.name!});
        });

        setSearchData(tempSearchData ?? []);
    }, []);

    /* Degrees */
    /*
    const updateDegrees = React.useCallback(async () => {
        if (selectedDepartment === '' || selectedDepartment === undefined) return;
        setErrorLoadingDegrees(false);
        let degreesResult = await getDegrees(selectedDepartment);

        if (degreesResult.status !== 200) {
            setErrorLoadingDegrees(true);
            return;
        }

        console.log("Degrees result: ", degreesResult.value ?? []);

        setDegrees(degreesResult.value ?? []);
    }, [setDegrees, selectedDepartment]);

    let degreesOptions: IDropdownOption[] = [];
    let triennali: Degree[] = degrees.filter(isTriennale);
    let magistrali: Degree[] = degrees.filter(isMagistrale);
    
    if (triennali.length !== 0) {
        degreesOptions.push({ key: 'Header', text: 'Triennali', itemType: DropdownMenuItemType.Header });
        degreesOptions.push(...triennali.map(x => ({ key: x.pk, text: x.name ?? "", data: { slug: x.slug, icon: x.icon } })));
    }
    
    if (magistrali.length !== 0) {
        degreesOptions.push({ key: 'Header', text: 'Magistrali', itemType: DropdownMenuItemType.Header });
        degreesOptions.push(...magistrali.map(x => ({ key: x.pk, text: x.name ?? "", data: { slug: x.slug, icon: x.icon } })));
    }

    const degreeSelectionChanged = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IDropdownOption): void => {
        setSelectedDegree(option?.key as string ?? '');
        history.push(`/courses/${option?.data.slug}`);
    };
    */

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
        const degreeSelected = searchData.filter(x => x.degree?.pk as unknown as string === selectedDegree)[0]?.degree ?? undefined;
        if (degreeSelected !== undefined && degreeSelected.group?.invite_link !== '' && degreeSelected.group?.invite_link !== null && degreeSelected.group?.invite_link !== undefined) {
            let mainDegreeGroup: CourseDegree = {
                "course": {
                    pk: undefined,
                    name: "Gruppo principale",
                    cfu: 0,
                    wiki_link: "",
                    links: [],
                    group: { 
                        id: degreeSelected?.group?.id!,
                        title: degreeSelected?.group?.title,
                        profile_picture: degreeSelected?.group?.profile_picture,
                        invite_link: degreeSelected?.group?.invite_link
                    },
                },
                year: -1,
                semester: 0
            };
            coursesResult.value?.unshift(mainDegreeGroup);
        }

        setCourses(coursesResult.value ?? []);
        setLoadingCourses(false);
    }, [selectedDegree]);

    
    /* This function initializes the VerboseDegree (retrieves degree based on url initialization) */
    const initializeDegreeByUrl = React.useCallback(async () => {
        if (!didMount.current) {
            didMount.current = true;
            var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
            var degreeSlug = states.length >= 2 ? states[1] : '';
            
            //console.log("Degree slug: ", degreeSlug)
            
            if (degreeSlug === '') {
                return;
            }
    
            let verboseDegreeResult = await getVerboseDegree(degreeSlug);
            
            if (verboseDegreeResult.status !== 200) {
                // Do we need to show an apposite error? Probably not
                return;
            }
            
            const verboseDeg = verboseDegreeResult.value ?? undefined;
            //console.log("VerboseDegree result: ", verboseDeg);
            if (verboseDeg === undefined || verboseDeg === null) return;
            //console.log(departments, "DEP TROVATI: ", departments.filter(x => x.pk === verboseDeg.department?.pk)[0]?.pk as unknown as string)
    
            //setSelectedDepartment(departments.filter(x => x.pk === verboseDeg.department?.pk)[0]?.pk as unknown as string);
            setSelectedDegree(verboseDeg.pk as unknown as string);
            setSearchTextValue(verboseDeg.name!);
        }
    }, [history.location.pathname]);

    
    React.useEffect(() => {
        updateCourses();
    }, [selectedDegree, updateCourses]);
    
    React.useEffect(() => {
        if (!didMount.current) initializeDegreeByUrl();
    }, [searchData, initializeDegreeByUrl]);
    
    /* Chosen degree : Degree to pass it to various components as property */
    degree = searchData.filter(x => x.degree?.pk === selectedDegree as unknown as number)[0]?.degree!;

    return (
        <div className="pt-5 courses">
            <Container>
                <div className="mb-3">
                    <div className="mb-1"><Text variant="medium" styles={semibold} style={{textTransform: 'uppercase', color: theme.palette.themePrimary}}>{locale.groups.groupsSection.text1}</Text></div>
                    <Text variant="xLarge">{locale.groups.groupsSection.text2}</Text>
                </div>

                <div className="search-box mb-3">
                    <Autocomplete
                        items={searchData}
                        searchTitle='Cerca il tuo corso di laurea per nome'
                        suggestionCallback={entitySelectHandler}
                        searchCallback={searchTextandler}
                        changeCallback={updateDegreesForSearchBox}
                        value={searchTextValue}
                    />
                </div>

            </Container>

            <div style={{ display: selectedDegree !== '' ? 'block' : 'none' }}>
                <DegreeInformations degree={degree!} />
                <GroupList degree={degree!} courses={courses} loadingCourses={loadingCourses} errorLoadingCourses={errorLoadingCourses} />
                <AdminsList degree={degree!} />       
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

function isTriennale(element: Degree) {
    return element.type === "B";
}

function isMagistrale(element: Degree) {
    return element.type === "M" || element.type === "C"
}

const onRenderOption = (option?: IDropdownOption): JSX.Element => {
    return (
        <div>
            {option?.data && option?.data.icon && (
                <Icon style={iconStyles} iconName={option.data.icon} aria-hidden="true" title={option.data.icon} />
            )}
            <span>{option?.text}</span>
        </div>
    );
};

const onRenderTitle = (options?: IDropdownOption[]): JSX.Element => {
    const option = options![0];

    return (
        <div>
            {option.data && option.data.icon && (
                <Icon style={iconStyles} iconName={option.data.icon} aria-hidden="true" title={option.data.icon} />
            )}
            <span>{option.text}</span>
        </div>
    );
};