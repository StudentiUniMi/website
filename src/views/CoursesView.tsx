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
import { getDepartments, getDegrees, getCourses, getVerboseDegree } from '../services/Requests';
import { Separator } from '@fluentui/react/lib/Separator';
import { semibold } from '../fonts';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CourseList from "../components/CourseList";
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import DegreeInformations from "../components/DegreeInformations";
import AdminsList from '../components/AdminsList';
import { Department, Degree, Course } from "../models/Models";

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
    const [errorLoadingDepartments, setErrorLoadingDepartments] = React.useState<boolean>(false);
    const [errorLoadingDegrees, setErrorLoadingDegrees] = React.useState<boolean>(false);
    const [errorLoadingCourses, setErrorLoadingCourses] = React.useState<boolean>(false);

    const [selectedDepartment, setSelectedDepartment] = React.useState<string>('');
    const [selectedDegree, setSelectedDegree] = React.useState<string>('');

    /* Departments */
    const updateDepartments = React.useCallback(async () => {
        setErrorLoadingDepartments(false);
        let departmentsResult = await getDepartments();

        if (departmentsResult.status !== 200) {
            setErrorLoadingDepartments(true);
            return;
        }

        console.log("Departments result: ", departmentsResult.value ?? []);

        setDepartments(departmentsResult.value ?? []);
    }, [setDepartments]);

    let departmentOptions: IDropdownOption[] = departments.map(x => ({ key: x.pk, text: x.name ?? "", data: { icon: x.icon }, disabled: x.degree_count === 0 }));

    const departmentSelectionChanged = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IDropdownOption): void => {
        console.log(option?.key)
        //if (option?.key as string !== '' && option?.key as string === selectedDepartment) return;
        setSelectedDepartment(option?.key as string ?? '');
        updateDegrees();
        setSelectedDegree(''); // Per resettare il corso di laurea quando cambio dipartimento, altrimenti rimane la lista dei gruppi precedente
        history.push(`/courses/`)
    };

    /* Degrees */
    const updateDegrees = React.useCallback(async () => {
        //if (selectedDepartment === '') return;
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
        console.log(option?.key)
        // To-do: if (option?.key as string !== '' && option?.key as string === selectedDegree) return;
        setSelectedDegree(option?.key as string ?? '');
        updateCourses();
        history.push(`/courses/${option?.data.slug}`);
    };

    /* Courses callBack */
    const updateCourses = React.useCallback(async () => {
        //if (selectedDegree === '') return;
        setErrorLoadingCourses(false);
        setLoadingCourses(true);
        let coursesResult = await getCourses(selectedDegree);

        if (coursesResult.status !== 200) {
            setLoadingCourses(false);
            setErrorLoadingCourses(true);
            return;
        }

        console.log("Courses result: ", coursesResult.value ?? []);

        setCourses(coursesResult.value ?? []);
        setLoadingCourses(false);
    }, [setCourses, selectedDegree, setLoadingCourses]);

    /* This function inizialize states of component based on URL parameters. */
    const updateVerboseDegree = React.useCallback(async () => {
        didMount.current = true;
        var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
        var degreeSlug = states.length >= 2 ? states[1] : '';
        
        console.log("Degree slug: ", degreeSlug)
        
        if (degreeSlug === '') return;
        let verboseDegreeResult = await getVerboseDegree(degreeSlug);
        
        if (verboseDegreeResult.status !== 200) {
            // To-do: show error (do we need to show an apposite error? I think not)
        }
        
        console.log("VerboseDegree result: ", verboseDegreeResult.value ?? {});
        
        console.log(departments)
        console.log("DEP TROVATI: ", departments.filter(x => x.pk === verboseDegreeResult.value?.department?.pk)[0]?.pk as unknown as string)

        setSelectedDepartment(departments.filter(x => x.pk === verboseDegreeResult.value?.department?.pk)[0]?.pk as unknown as string);
        updateDegrees();

        setSelectedDegree(verboseDegreeResult.value?.pk as unknown as string);
        updateCourses();

        console.log("Selected dep: ", selectedDepartment, "; Selected degree: ", selectedDegree)
    }, [history.location.pathname, departments, updateDegrees, updateCourses, selectedDepartment, selectedDegree]);

   React.useEffect(() => {
       if (!didMount.current) {
            updateDepartments();
            updateVerboseDegree();
       }
    }, [updateDepartments, updateVerboseDegree]);
    
    
    /* Chosen degree : Degree to pass it to various components as property */
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
                        errorMessage={errorLoadingDepartments ? 'Errore durante il caricamento dei dipartimenti.' : undefined}
                        theme={theme}
                        disabled={errorLoadingDepartments}
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
                        disabled={selectedDepartment === '' || errorLoadingDegrees}
                        errorMessage={errorLoadingDegrees ? 'Errore durante il caricamento dei corsi di laurea.' : undefined}
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