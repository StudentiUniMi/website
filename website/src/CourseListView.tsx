import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CourseItemView from "./CourseItemView";
import Course from "./models/Course";
import CdlCourses from './data/CdlCourses.json'
import { FocusZone, IRectangle, List } from "@fluentui/react";
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

interface Props {
    cdl?: string;
}

const classNames = mergeStyleSets({
    listGridExample: {
        overflow: 'hidden',
        fontSize: 0,
        position: 'relative',
        marginBottom: 10
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

const getCourses = (cdl?: string) => (CdlCourses as any)[cdl!] ?? []

const CourseListView = (props: Props) => {
    const columnCount = React.useRef(0);
    const rowHeight = React.useRef(0);

    const courses: Course[] = getCourses(props.cdl);

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
            <div
                data-is-focusable
                className={classNames.listGridExampleTile}
                style={{
                    height: MAX_ROW_HEIGHT + 'px',
                    width: 100 / columnCount.current + '%'
                }}>
                <CourseItemView key={index} data={e!} />
            </div>
        )
    }

    return (
        <FocusZone>
            <List
                className={classNames.listGridExample}
                items={courses}
                getItemCountForPage={getItemCountForPage}
                getPageHeight={getPageHeight}
                renderedWindowsAhead={4}
                onRenderCell={getCell}
            />
        </FocusZone>
    );
};

export default CourseListView;
