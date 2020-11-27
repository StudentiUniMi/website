import { FocusZone, List } from "@fluentui/react";
import * as React from "react";
import "./App.css";
import { range } from "./Common";
import CourseItemView from "./CourseItemView";
import Course from "./models/Course";
import CdlCourses from './data/CdlCourses.json'

interface Props {
    cdl?: string;
}

const getCourses = (cdl?: string) => {
    switch (cdl) {
        case "informatica":
            return CdlCourses.informatica
        case "informatica_musicale":
            return [];
        case "informatica_com_digitale":
            return [];
        case "sicurezza_sistemi_reti_informatiche":
            return [];
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
