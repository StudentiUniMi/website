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
import DegreeInformations from "../components/DegreeInformations";
import { getDepartments, getDegrees, getCourses } from '../services/Requests';
import { Separator } from '@fluentui/react/lib/Separator';
import Degree from "../models/Degree";
import Department from "../models/Department";
import AdminsList from '../components/AdminsList';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import { semibold } from '../fonts';
import LoadingSpinner from '../components/LoadingSpinner';
import Course from "../models/Course";

initializeIcons();
const iconStyles = { marginRight: '8px' };

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

const CoursesView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    let history = useHistory();
    let didMount = React.useRef(false);

    /* Styles */
    const dropdownStyles = { dropdown: { color: theme.palette.neutralPrimary }, dropdownItems: { color: theme.palette.neutralPrimary } };
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };

    const [departments, setDepartments] = React.useState<Department[]>([]);
    const [degrees, setDegrees] = React.useState<Degree[]>([]);
    const [courses, setCourses] = React.useState<Course[]>([]);

    const [selectedDepartment, setSelectedDepartment] = React.useState<string>('');
    const [selectedDegree, setSelectedDegree] = React.useState<string>('');

    let loadingCourses: boolean = false;

    /* Departments */
    const departmentSelectionChanged = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IDropdownOption): void => {
        setSelectedDepartment(option?.key as string ?? '');
        setSelectedDegree(''); // Per resettare il corso di laurea quando cambio dipartimento, altrimenti rimane la lista dei gruppi precedente
        history.push(`/courses/`)
    };

    const updateDepartments = React.useCallback(async() =>
    {
        let departmentsResult = await getDepartments();

        if (departmentsResult.status !== 200) {
            // Renderizza errore
        }

        console.log(departmentsResult);

        setDepartments(departmentsResult.value ?? []);
    },[setDepartments]);

    let departmentOptions: IDropdownOption[] = departments.map(x => ({ key: x.id, text: x.name ?? "", data: { icon: x.icon }, /* disabled: x.cdls.length === 0 */ }));

    /* Degrees */
    const degreeSelectionChanged = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IDropdownOption): void => {
        setSelectedDegree(option?.key as string ?? '');
        history.push(`/courses/${option?.key as string}`);
    };

    const updateDegrees = React.useCallback(async () => {
        if (selectedDepartment === undefined) return;
        let degreesResult = await getDegrees(selectedDepartment);

        if (degreesResult.status !== 200) {
            // Renderizza errore
        }

        setDegrees(degreesResult.value ?? []);
    }, [setDegrees, selectedDepartment]);

    let degreesOptions: IDropdownOption[] = [];
    let temp: IDropdownOption[] = degrees.map(x => ({ key: x.id, text: x.name ?? "", data: { icon: x.icon }, /*disabled: x.courses.length === 0*/ }));
    let triennali: IDropdownOption[] = temp.filter(isTriennale);
    let magistrali: IDropdownOption[] = temp.filter(isMagistrale);

    if (triennali.length !== 0) {
        degreesOptions.push({ key: 'Header', text: 'Triennali', itemType: DropdownMenuItemType.Header });
        degreesOptions.push(...triennali);
    }

    if (magistrali.length !== 0) {
        degreesOptions.push({ key: 'Header', text: 'Magistrali', itemType: DropdownMenuItemType.Header });
        degreesOptions.push(...magistrali);
    }

    /* Courses callBack */
    const updateCourses = React.useCallback(async () => {
        if (selectedDegree=== undefined) return;
        let coursesResult = await getCourses(selectedDegree);

        if (coursesResult.status !== 200) {
            // Renderizza errore
        }

        setCourses(coursesResult.value ?? []);
    }, [setCourses, selectedDegree]);


    React.useEffect(() => {
        updateDepartments();
        updateDegrees();
        updateCourses();
    }, [updateDepartments, updateDegrees, updateCourses]);






    // this must be adjusted I think
    React.useEffect(() => {
        if(!didMount.current) {
            didMount.current = true;
            var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
            var initialCdl = states.length >= 2 ? states[1] : '';
            var possibleDepartments = departments.filter(x => x.cdls.filter(y => y.id === initialCdl).length > 0);
            let initialDepartment = possibleDepartments.length > 0 ? possibleDepartments[0].id : '';
            setSelectedDegree(initialCdl);
            setSelectedDepartment(initialDepartment);
            //history.push(`/courses/${initialCdl}`); it is manuele's fault if the router didn't work correctly. noob
        }
    }, [history, departments]);


    
    
    // do we need this?
    if (selectedDepartment !== '') {
        let department: Department | undefined = departments.filter(x => x.id === selectedDepartment)[0];
        // cdls = department?.cdls ?? [];
    }
    
    // need to adjust this probably
    let degree: Degree = degrees.filter(x => x.id === selectedDegree)[0] ?? [];



    return (
        <Container className="courses text-center">
            <LoadingSpinner />
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
                <DegreeInformations cdl={degree!} />
                <CourseList degree={degree} courses={courses} loading={loadingCourses} /> {/* Qui gli devo passare i corsi, non il degree */}
                <AdminsList data={degree.admins!} />          
            </div>

        </Container>
    );
};

export default CoursesView;


function isTriennale(element: IDropdownOption) {
    let name = String(element.key);
    let campi = name.split("_");
    return campi[0] === "triennale";
}

function isMagistrale(element: IDropdownOption) {
    let name = String(element.key);
    let campi = name.split("_");
    return campi[0] === "magistrale";
}