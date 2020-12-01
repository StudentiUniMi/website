import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CourseItemView from "./CourseItemView";
import Course from "./models/Course";
import CdlCourses from './data/CdlCourses.json'
import { FocusZone, List } from "@fluentui/react";
import { ITheme, getTheme, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

interface Props {
    cdl?: string;
}

const classNames = mergeStyleSets({
    listGridExample: {
        overflow: 'hidden',
        fontSize: 0,
        position: 'relative',
    },
});

const getCourses = (cdl?: string) => {
    switch (cdl) {
        case "informatica":
            return CdlCourses.informatica
        case "informatica_musicale":
            return CdlCourses.informatica_musicale
        case "informatica_com_digitale":
            return CdlCourses.informatica_com_digitale
        case "sicurezza_sistemi_reti_informatiche":
            return CdlCourses.sicurezza_sistemi_reti_informatiche
        case "sicurezza_sistemi_reti_informatiche_online":
            return CdlCourses.sicurezza_sistemi_reti_informatiche_online
        default:
            return [];
    }
};

const CourseListView = (props: Props) => {
    const courses: Course[] = getCourses(props.cdl);

    const getCell = (e?: Course, index?: number, isScrolling?: boolean) => {
        return (
            <div style={{ height: "22%", width: "22%" }}>
                <CourseItemView data={e!} />
            </div>
        );
    }

    return (
        <FocusZone>
            <List
                className={classNames.listGridExample}
                items={courses}
                getItemCountForPage={() => courses.length / 20}
                getPageHeight={() => courses.length * 150 / 20}
                renderedWindowsAhead={4}
                onRenderCell={getCell}
            />
        </FocusZone>
    );
};

export default CourseListView;
