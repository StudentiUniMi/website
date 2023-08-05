import React from "react";
import { Text, Toggle, Icon, IRectangle, List, TextField, Dropdown, IDropdownOption, mergeStyleSets, useTheme } from "@fluentui/react";
import { Container } from 'react-bootstrap';
import { semibold } from '../../services/Fonts';
import { Degree, CourseDegree } from '../../models/Models';
import ErrorMessage from "../Atoms/ErrorMessage";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GroupItem from './GroupItem';
import LocalizationService from "../../services/LocalizationService";
import Message from '../Atoms/Message';

interface Props { 
    degree?: Degree, 
    courses: CourseDegree[], 
    errorLoadingCourses: boolean 
};

// Opzioni per la ricerca del semestre
const semesterFilterOptions: IDropdownOption[] = [ 
    { key: 0, text:'Non selezionato' },
    { key: 1, text:'Primo' },
    { key: 2, text:'Secondo' }
];

// Opzioni per la ricerca dell'anno per cdl triennali
const yearBachelorDegreeFilterOptions: IDropdownOption[] = [ 
    { key: 0, text:'Non selezionato' },
    { key: -1, text: 'Gruppo principale' },
    { key: 1, text:'Primo' },
    { key: 2, text:'Secondo' },
    { key: 3, text:'Terzo' },
    { key: -2, text:'Complementare' }
];

// Opzioni per la ricerca dell'anno per cdl magistrali
const yearMasterDegreeFilterOptions: IDropdownOption[] = [ 
    { key: 0, text:'Non selezionato'},
    { key: 1, text:'Primo' },
    { key: 2, text:'Secondo' }
];

const CourseList= (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const [filtersToggle, setFiltersToggle] = React.useState<boolean>(false);
    const columnCount = React.useRef(0);
    const rowHeight = React.useRef(0);
    const rowsPerPage = React.useRef(0);
    const MAX_ROW_HEIGHT = 265;
    
    var classNames = mergeStyleSets({
        listGrid: {
            overflow: 'hidden',
            fontSize: 0,
            position: 'relative',
            marginBottom: 10,
            margin: '1px'
        }
    });
    
    const getItemCountForPage = React.useCallback((itemIndex?: number, surfaceRect?: IRectangle) => {
        if (itemIndex === 0) {
            columnCount.current = Math.ceil(surfaceRect!.width / MAX_ROW_HEIGHT);
            rowHeight.current = MAX_ROW_HEIGHT;
            rowsPerPage.current = surfaceRect!.height / MAX_ROW_HEIGHT;
        }
        return columnCount.current * rowsPerPage.current;
    }, []);
    
    const getPageHeight = React.useCallback((): number => {
        return rowHeight.current * rowsPerPage.current;
    }, []); 
    
    const getCell = (e?: CourseDegree, index?: number, _isScrolling?: boolean) => {
        return (
            <div data-is-focusable className="listGridTile" style={{ height: rowHeight.current + 'px', width: 100 / columnCount.current + '%' }}>
                <GroupItem key={index} data={e!} />
            </div>
        )
    };
    
    /* Filters inizialization */
    const [nameFilter, setNameFilter] = React.useState<string>("");
    const [yearFilter, setYearFilter] = React.useState<number>(0);
    const [semesterFilter, setSemesterFilter] = React.useState<number>(0);

    const onNameFilterChanged = (_event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string): void => {
        setNameFilter(text ?? "");
    };

    const onSemesterFilterChanged = (_event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        setSemesterFilter((item?.key ?? 0) as number);
    };

    const onYearFilterChanged = (_event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        setYearFilter((item?.key ?? 0) as number);
    };

    /* Filters gestion */
    let yearFilterOptions = props.degree?.type === 'M' || props.degree?.type === 'C' ? yearMasterDegreeFilterOptions : yearBachelorDegreeFilterOptions; 
    let filteredCourses = props.courses;

    if (nameFilter !== "") { filteredCourses = filteredCourses.filter(x => x.course.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())); }
    if (semesterFilter !== 0) { filteredCourses = filteredCourses.filter(x => x.semester === semesterFilter); }
    if (yearFilter !== 0) { filteredCourses = filteredCourses.filter(x => x.year === yearFilter); }

    function toggleGroupsFilters(_ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
        setFiltersToggle(checked!);
        resetGroupsFilters();
    };

    function resetGroupsFilters() {
        setNameFilter("");
        setSemesterFilter(0);
        setYearFilter(0);
    };

    React.useEffect( () => {
        resetGroupsFilters();
    }, [props.degree]);

    return (       
        <div className="groups-list mb-4">
            <div className="pb-2 pt-2 mb-4" style={{ backgroundColor: theme.palette.neutralLighter }}>
                <Container className="d-flex justify-content-between align-items-center" style={{ gap: 8 }}>
                    <div>
                        <Text variant="medium" styles={semibold}><Icon iconName="AiOutlineTeam"/> {locale?.courses.availableGroups}</Text>
                    </div>

                    <div className="filters-toggle d-flex align-items-center">
                        <Toggle
                            label={<Text variant="medium" styles={semibold}>{locale?.courses.filtersToggle}</Text>}
                            inlineLabel
                            onText="On"
                            offText="Off"
                            onChange={toggleGroupsFilters}
                            checked={filtersToggle}
                            disabled={props.errorLoadingCourses}
                        />
                    </div>
                </Container>
            </div>
            
            <Container>
                { filtersToggle ? 
                    <div className="mb-4 text-center">
                        <Row className="justify-content-center">
                            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                                <TextField
                                    label={locale?.courses.nameFilter}
                                    onChange={onNameFilterChanged}   
                                    disabled={props.courses.length === 0}      
                                    value={nameFilter}      
                                />
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                                {
                                    <Dropdown 
                                        options={yearFilterOptions}
                                        label={locale?.courses.yearFilter}
                                        onChange={onYearFilterChanged}
                                        selectedKey={yearFilter}
                                        disabled={props.courses.length === 0 || props.degree?.slug === 'magistrale_informatica'} /* To-do: must decide if we need an apposite field to disable year selection */
                                    />
                                }
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                                <Dropdown 
                                    options={semesterFilterOptions}
                                    label={locale?.courses.semesterFilter}
                                    onChange={onSemesterFilterChanged}
                                    selectedKey={semesterFilter}
                                    disabled={props.courses.length === 0}
                                />
                            </Col>
                        </Row>
                    </div> : <></>
                }

                {
                    props.errorLoadingCourses 
                    ? <ErrorMessage error={props.errorLoadingCourses} />
                    :
                    filteredCourses.length === 0 
                    ?
                    <div className="justify-content-center">
                        <Message text={locale?.courses.groupsNotFound!} />
                    </div>
                    :
                    <div className="course-list">
                        <List
                            className={classNames.listGrid}
                            items={filteredCourses}
                            getItemCountForPage={getItemCountForPage}
                            getPageHeight={getPageHeight}
                            renderedWindowsAhead={15}
                            onRenderCell={getCell}
                            usePageCache={true}
                        />
                    </div>
                }
            </Container>
        </div>
    );
};

export default CourseList;
