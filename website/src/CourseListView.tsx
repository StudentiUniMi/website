import * as React from "react";
import "./App.css";
import {
    FocusZone,
    FocusZoneDirection,
} from "office-ui-fabric-react/lib/FocusZone";
import { List } from "office-ui-fabric-react/lib/List";
import { Image, ImageFit } from "office-ui-fabric-react/lib/Image";
import { initializeIcons } from "@uifabric/icons";
import {
    ITheme,
    mergeStyleSets,
    getTheme,
    getFocusStyle,
} from "office-ui-fabric-react/lib/Styling";
import { useConst } from "@uifabric/react-hooks";
import CourseItemView from "./CourseItemView";
import Course from "./models/Course";

interface Props {
    cdl?: string;
}

const getCourses = (cdl?: string) => {
    switch (cdl) {
        case "informatica":
            return [{ name: "orcodio", website: "www.google.it" }];
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

    return (
        <div>
            {courses.map((x) => (
                <CourseItemView data={x} />
            ))}
        </div>
    );
};

export default CourseListView;
