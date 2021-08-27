import React from "react";
import { Link, Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { initializeIcons } from "@uifabric/icons";
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { DropdownMenuItemType } from "@fluentui/react";
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { useTheme } from '@fluentui/react-theme-provider';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CourseList from "../components/CourseList";
import { getDepartments, getDegrees, getCourses } from '../services/Requests';
import { Separator } from '@fluentui/react/lib/Separator';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import { semibold } from '../fonts';
import DegreeInformations from "../components/DegreeInformations";
import AdminsList from '../components/AdminsList';

/* Updated models */
import { Department, Degree, Course } from "../models/Models";

/* To-do: la callback dei degree non deve venire chiamata finchè non selezioni il dipartimento. Idem quella dei corsi */

initializeIcons();
const iconStyles = { marginRight: '8px' };

const CoursesView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    let history = useHistory();
    let didMount = React.useRef(false);

    /* Styles */
    const dropdownStyles = { dropdown: { color: theme.palette.neutralPrimary }, dropdownItems: { color: theme.palette.neutralPrimary } };
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };

    /* States */
    const [departments, setDepartments] = React.useState<Department[]>([]);
    const [degrees, setDegrees] = React.useState<Degree[]>([]);
    const [courses, setCourses] = React.useState<Course[]>([]);

    const [loadingCourses, setLoadingCourses] = React.useState<boolean>(false);
    const [errorLoadingCourses, setErrorLoadingCourses] = React.useState<boolean>(false);

    const [selectedDepartment, setSelectedDepartment] = React.useState<string>('');
    const [selectedDegree, setSelectedDegree] = React.useState<string>('');

    /* Departments */
    const departmentSelectionChanged = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IDropdownOption): void => {
        setSelectedDepartment(option?.key as string ?? '');
        setSelectedDegree(''); // Per resettare il corso di laurea quando cambio dipartimento, altrimenti rimane la lista dei gruppi precedente
        history.push(`/courses/`)
    };

    const updateDepartments = React.useCallback(async() => {
        let departmentsResult = await getDepartments();

        /* To-do: show error of loading departments (just error showing) */
        if (departmentsResult.status !== 200) {
            // Renderizza errore
        }

        console.log("Departments result: ", departmentsResult.value ?? []);

        setDepartments(departmentsResult.value ?? []);
    }, [setDepartments]);

    let departmentOptions: IDropdownOption[] = departments.map(x => ({ key: x.pk, text: x.name ?? "", data: { icon: x.icon }, disabled: x.degree_count === 0 }));

    /* Degrees */
    const degreeSelectionChanged = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IDropdownOption): void => {
        setSelectedDegree(option?.key as string ?? '');
        history.push(`/courses/${option?.data.slug}`);
    };

    const updateDegrees = React.useCallback(async () => {
        if (selectedDepartment === '') return;
        let degreesResult = await getDegrees(selectedDepartment);

        /* To-do: same error showing here */
        if (degreesResult.status !== 200) {
            
        }

        console.log("Degrees result: ", degreesResult.value ?? []);

        setDegrees(degreesResult.value ?? []);
    }, [setDegrees, selectedDepartment]);

    let degreesOptions: IDropdownOption[] = [];
    let triennali: Degree[] = degrees.filter(isTriennale);
    let magistrali: Degree[] = degrees.filter(isMagistrale);
    
    if (triennali.length !== 0) {
        degreesOptions.push({ key: 'Header', text: 'Triennali', itemType: DropdownMenuItemType.Header });
        degreesOptions.push(...triennali.map(x => ({ key: x.pk, text: x.name ?? "", data: { slug: x.slug, icon: x.icon }, /*disabled: x.courses.length === 0*/ })));
    }
    
    if (magistrali.length !== 0) {
        degreesOptions.push({ key: 'Header', text: 'Magistrali', itemType: DropdownMenuItemType.Header });
        degreesOptions.push(...magistrali.map(x => ({ key: x.pk, text: x.name ?? "", data: { slug: x.slug, icon: x.icon }, /*disabled: x.courses.length === 0*/ })));
    }

    /* Courses callBack */
    const updateCourses = React.useCallback(async () => {
        if (selectedDegree === '') return;
        setErrorLoadingCourses(false);
        setLoadingCourses(true);
        let coursesResult = await getCourses(selectedDegree);

        if (coursesResult.status !== 200) {
            setLoadingCourses(false);
            setErrorLoadingCourses(true);
        }

        console.log("Courses result: ", coursesResult.value ?? []);

        setCourses(coursesResult.value ?? []);
        setLoadingCourses(false);
    }, [setCourses, selectedDegree, setLoadingCourses]);


    React.useEffect(() => {
        updateDepartments();
        updateDegrees();
        updateCourses();
    }, [updateDepartments, updateDegrees, updateCourses]);





    /* This function inizializes states based on URL parameters. */

    /* To-do: adjust this
        Serve un modello nuovo VerboseDegree
        serve un api apposita che dallo slug nella url restituisce il degree con associato il dipartimento in modo da inizializzare correttamente il tutto
    */

    React.useEffect(() => {
        if (!didMount.current) {
            didMount.current = true;
            //var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
            //var degreeSlug = states.length >= 2 ? states[1] : '';
            //console.log(degreeSlug)
            //setSelectedDegree(degreeId as unknown as string);
            //setSelectedDepartment(initialDepartment as unknown as string);

            //history.push(`/courses/${initialCdl}`); it is manuele's fault if the router didn't work correctly. noob
        }
    }, [history, departments, degrees]);



    
    
    // do we need this?
    if (selectedDepartment !== '') {
        //let department: Department | undefined = departments.filter(x => x.id === selectedDepartment)[0];
        // cdls = department?.cdls ?? [];
    }
    
    // need to adjust this probably
    let degree: Degree = degrees.filter(x => x.pk === selectedDegree as unknown as number)[0] ?? [];


    return (
        <Container className="courses text-center">
            <div className="mb-1">
                <Text variant="large">{locale.courses.text1}</Text>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-2" style={iconStyle} />

            <div className="mb-2">
                <Text variant="medium">
                    <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale.courses.text2} />
                </Text>
            </div>

            <Separator />
            
            <Row className="department-choose justify-content-center mb-4">
                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-1">
                    {/* Department dropdown */}
                    <Dropdown
                        placeholder={locale.courses.departmentSelect}
                        label={locale.courses.departmentSelect}
                        onRenderTitle={onRenderTitle}
                        onRenderOption={onRenderOption}
                        options={departmentOptions}
                        onChange={departmentSelectionChanged}
                        selectedKey={selectedDepartment}
                        styles={dropdownStyles}
                        theme={theme}
                    />
                </Col>

                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-1">
                    {/* Cdl dropdown */}
                    <Dropdown
                        label={locale.courses.cdlSelect}
                        placeholder={locale.courses.cdlSelect}
                        selectedKey={selectedDegree}
                        onChange={degreeSelectionChanged}
                        onRenderTitle={onRenderTitle}
                        onRenderOption={onRenderOption}
                        options={degreesOptions}
                        styles={dropdownStyles}
                        theme={theme}
                        disabled={selectedDepartment === ''}
                    />
                </Col>
            </Row>

            <div style={{ display: selectedDegree !== '' ? 'block' : 'none' }}>
                <DegreeInformations degree={degree!} />
                <CourseList degree={degree!} courses={courses} loadingCourses={loadingCourses} errorLoadingCourses={errorLoadingCourses} />
                <AdminsList degree={degree!} />       
            </div>

        </Container>
    );
};

export default CoursesView;


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