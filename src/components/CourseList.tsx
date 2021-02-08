import React from "react";
import '../SharedList.css';
import { FocusZone, IRectangle, List } from "@fluentui/react";
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Container } from 'react-bootstrap';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Text } from "office-ui-fabric-react/lib/Text";
import { FontSizes } from '@fluentui/theme';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CourseItem from './CourseItem';
import Course from '../models/Course';
import Degree from '../models/Degree';

interface Props {
    cdl?: Degree;
}

const classNames = mergeStyleSets({
    listGridExample: {
        overflow: 'hidden',
        fontSize: 0,
        position: 'relative',
        marginBottom: 10,
        margin: '1px'
    },
    listGridExampleTile: {
        textAlign: 'center',
        outline: 'none',
        position: 'relative',
        float: 'left'
    },
});

const ROWS_PER_PAGE = 3;
const MAX_ROW_HEIGHT = 240;

const semesterFilterOptions: IDropdownOption[] = [ // Opzioni per la ricerca del semestre
    { key: 0, text:'Non selezionato' },
    { key: 1, text:'Primo' },
    { key: 2, text:'Secondo' }
];

const yearBachelorDegreeFilterOptions: IDropdownOption[] = [ // Opzioni per la ricerca dell'anno per cdl triennali
    { key: 0, text:'Non selezionato' },
    { key: 1, text:'Primo' },
    { key: 2, text:'Secondo' },
    { key: 3, text:'Terzo' },
    { key: 4, text:'Complementare' }
];

const yearMasterDegreeFilterOptions: IDropdownOption[] = [ // Opzioni per la ricerca dell'anno per cdl magistrali
    { key: 0, text:'Non selezionato'},
    { key: 1, text:'Primo' },
    { key: 2, text:'Secondo' }
];

const CourseList= (props: Props) => {
    const columnCount = React.useRef(0);
    const rowHeight = React.useRef(0);
    
    const [nameFilter, setNameFilter] = React.useState<string>("")
    const [yearFilter, setYearFilter] = React.useState<number>(0)
    const [semesterFilter, setSemesterFilter] = React.useState<number>(0)

    let cdl = props.cdl

    const courses: Course[] = cdl?.courses ?? []

    const getItemCountForPage = React.useCallback((itemIndex?: number, surfaceRect?: IRectangle) => {
        if (itemIndex === 0) {
            columnCount.current = Math.ceil(surfaceRect!.width / MAX_ROW_HEIGHT);
            rowHeight.current = Math.floor(surfaceRect!.width / columnCount.current);
        }
        return columnCount.current * ROWS_PER_PAGE;
    }, []);

    const getPageHeight = React.useCallback((): number => {
        return rowHeight.current * ROWS_PER_PAGE;
    }, []);

    const getCell = (e?: Course, index?: number, isScrolling?: boolean) => {
        return (
            <div data-is-focusable className={classNames.listGridExampleTile}
                style={{
                    height: MAX_ROW_HEIGHT + 'px',
                    //width: 100 / columnCount.current + '%'
                    width: '213px'
                }}>
                <CourseItem key={index} data={e!} />
            </div>
        )
    }

    const onNameFilterChanged = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string): void => {
        setNameFilter(text ?? "");
    };

    const onSemesterFilterChanged = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        setSemesterFilter((item?.key ?? 0) as number);
    };

    const onYearFilterChanged = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        setYearFilter((item?.key ?? 0) as number);
    };

    
    // Gestione dei filtri

    let yearFilterOptions = cdl?.is_master ? yearMasterDegreeFilterOptions : yearBachelorDegreeFilterOptions;
    
    let filteredCourses = courses;

    if (nameFilter !== "") {
        filteredCourses = filteredCourses.filter(x => x.name?.toLocaleLowerCase()?.includes(nameFilter.toLocaleLowerCase()))
    }

    if (semesterFilter !== 0) {
        filteredCourses = filteredCourses.filter(x => x.semestre === semesterFilter || (x.semestre as any) === semesterFilter + "") // leva l'or quando fai i semestri come number. Se non sai il semestre metti 0
    }

    if (yearFilter !== 0) {
        if (yearFilter === 4) {
            filteredCourses = filteredCourses.filter(x => x.anno === "Complementare")
        } else {
            filteredCourses = filteredCourses.filter(x => x.anno === yearFilter || (x.anno as any) === yearFilter + "") // leva l'or quando fai i semestri come number. Se non sai il semestre metti 0
        }
    }
    return (       

        <Container className="courses-filter-options">
            <FocusZone>
                <div className="mb-4">
                    <Row className="justify-content-center">
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <TextField
                                label={'Cerca per nome'}
                                onChange={onNameFilterChanged}                
                            />
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            {
                                <Dropdown options={yearFilterOptions}
                                        label={`Cerca per anno`}
                                        onChange={onYearFilterChanged}
                                        selectedKey={yearFilter}
                                        disabled={ !cdl?.has_years ?? false}
                                />
                            }
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Dropdown options={semesterFilterOptions}
                                label={`Cerca per semestre`}
                                onChange={onSemesterFilterChanged}
                                selectedKey={semesterFilter}
                            />
                        </Col>
                    </Row>
                </div>

                {filteredCourses.length === 0 ? <div className="text-center"><Text style={{ fontSize: FontSizes.size14 }}>Nessun gruppo trovato.</Text></div>:
                <List
                    className={classNames.listGridExample}
                    items={filteredCourses}
                    getItemCountForPage={getItemCountForPage}
                    getPageHeight={getPageHeight}
                    renderedWindowsAhead={4}
                    onRenderCell={getCell}
                />}
            </FocusZone>
        </Container>
    );
};

export default CourseList;
