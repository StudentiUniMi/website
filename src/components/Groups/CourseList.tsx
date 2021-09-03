import React from "react";
import { FocusZone, IRectangle, List } from "@fluentui/react";
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Container } from 'react-bootstrap';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Text, Icon } from "office-ui-fabric-react/";
import { semibold } from '../../services/fonts';
import { FontSizes } from '@fluentui/theme';
import { Separator } from '@fluentui/react/lib/Separator';
import { useTheme } from '@fluentui/react-theme-provider';
import { Degree, CourseDegree } from '../../models/Models';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CourseItem from './CourseItem';
import LocalizationService from "../../services/LocalizationService";
import LoadingSpinner from '../LoadingSpinner';
import Message from '../Message';

interface Props { degree: Degree, courses: CourseDegree[], loadingCourses: boolean, errorLoadingCourses: boolean };

// Opzioni per la ricerca del semestre
const semesterFilterOptions: IDropdownOption[] = [ 
    { key: 0, text:'Non selezionato' },
    { key: 1, text:'Primo' },
    { key: 2, text:'Secondo' }
];

// Opzioni per la ricerca dell'anno per cdl triennali
const yearBachelorDegreeFilterOptions: IDropdownOption[] = [ 
    { key: 0, text:'Non selezionato' },
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
            /* rowHeight.current = Math.floor(surfaceRect!.width / columnCount.current) */ 
            columnCount.current = Math.ceil(surfaceRect!.width / MAX_ROW_HEIGHT);
            rowHeight.current = MAX_ROW_HEIGHT;
            rowsPerPage.current = surfaceRect!.height / MAX_ROW_HEIGHT;
        }
        return columnCount.current * rowsPerPage.current;
    }, []);
    
    const getPageHeight = React.useCallback((): number => {
        return rowHeight.current * rowsPerPage.current;
    }, []); 
    
    const getCell = (e?: CourseDegree, index?: number, isScrolling?: boolean) => {
        return (
            <div data-is-focusable className="listGridTile" style={{ height: rowHeight.current + 'px', width: 100 / columnCount.current + '%' }}>
                <CourseItem key={index} data={e!} />
            </div>
        )
    };
    
    // Filters inizialization
    const [nameFilter, setNameFilter] = React.useState<string>("");
    const [yearFilter, setYearFilter] = React.useState<number>(0);
    const [semesterFilter, setSemesterFilter] = React.useState<number>(0);

    const onNameFilterChanged = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string): void => {
        setNameFilter(text ?? "");
    };

    const onSemesterFilterChanged = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        setSemesterFilter((item?.key ?? 0) as number);
    };

    const onYearFilterChanged = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        setYearFilter((item?.key ?? 0) as number);
    };

    /* Filters gestion */
    let yearFilterOptions = props.degree.type === 'M' || props.degree.type === 'C' ? yearMasterDegreeFilterOptions : yearBachelorDegreeFilterOptions; 
    let filteredCourses = props.courses;

    if (nameFilter !== "") { filteredCourses = filteredCourses.filter(x => x.course?.name?.toLocaleLowerCase()?.includes(nameFilter.toLocaleLowerCase())); }
    if (semesterFilter !== 0) { filteredCourses = filteredCourses.filter(x => x.semester === semesterFilter); }
    if (yearFilter !== 0) { filteredCourses = filteredCourses.filter(x => x.year === yearFilter); }

    return (       
        <Container className="courses-filter-options mb-4">
            <div className='text-center mb-4'>
                <Separator>
                    <Icon iconName="DoubleChevronDown8" style={{ color: theme.palette.themePrimary }} />
                    <Text variant="medium" styles={semibold} style={{ color: theme.palette.themePrimary, fontSize: FontSizes.size18 }}> {locale.courses.availableGroups} </Text>
                    <Icon iconName="DoubleChevronDown8" style={{ color: theme.palette.themePrimary }} />
                </Separator>
            </div> 
            
            <FocusZone>
                <div className="mb-4 text-center">
                    <Row className="justify-content-center">
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <TextField
                                label={locale.courses.nameFilter}
                                onChange={onNameFilterChanged}   
                                disabled={props.courses.length === 0 || props.loadingCourses}             
                            />
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            {
                                <Dropdown 
                                    options={yearFilterOptions}
                                    label={locale.courses.yearFilter}
                                    onChange={onYearFilterChanged}
                                    selectedKey={yearFilter}
                                    disabled={props.courses.length === 0 || props.loadingCourses || props.degree.slug === 'magistrale_informatica'} /* To-do: must decide if we need an apposite field to disable year selection */
                                />
                            }
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Dropdown 
                                options={semesterFilterOptions}
                                label={locale.courses.semesterFilter}
                                onChange={onSemesterFilterChanged}
                                selectedKey={semesterFilter}
                                disabled={props.courses.length === 0 || props.loadingCourses}
                            />
                        </Col>
                    </Row>
                </div>
                
                {
                    props.loadingCourses || props.errorLoadingCourses ? <LoadingSpinner loading={props.loadingCourses} error={props.errorLoadingCourses} />
                    : filteredCourses.length === 0 ?
                    <div className="justify-content-center">
                        <Message text={locale.courses.groupsNotFound} />
                    </div> : <></>
                }
                
                {filteredCourses.length !== 0 && !props.errorLoadingCourses && !props.loadingCourses ? 
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
                    </div> : <></>
                }
            </FocusZone>
        </Container>
    );
};

export default CourseList;
