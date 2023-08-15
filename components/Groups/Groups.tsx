import React from 'react';
import { List, IRectangle, mergeStyleSets } from "@fluentui/react";
import { ExtraGroup } from 'models/Models';
import UniversityGroup from './UniversityGroup';
import AnnouncementsGroup from './AnnouncementsGroup';
import StudentsAssociation from './StudentsAssociation';
import Message from 'components/Atoms/Message';
import LocalizationService from 'services/LocalizationService';

export enum GroupsType {
  ANNOUNCEMENTS = "ANNOUNCEMENTS",
  UNIVERSITY = "UNIVERSITY",
  ASSOCIATION = "ASSOCIATION"
};

interface Props {
    groups: Array<ExtraGroup>,
    groupsType: GroupsType
};

const Groups = (props: Props) => {
    const locale = LocalizationService.strings();
    const columnCount = React.useRef(0);
    const rowHeight = React.useRef(0);
    const rowsPerPage = React.useRef(0);
    const MAX_ROW_HEIGHT = 280;

    const groups: Array<ExtraGroup> = props.groups;

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

    const getCell = (e?: ExtraGroup, _index?: number, _isScrolling?: boolean) => {
        return (
            <div data-is-focusable className="listGridTile" style={{ height: rowHeight.current + 'px', width: 100 / columnCount.current + '%' }}>
                {( () => { 
                    switch(props.groupsType) {
                        case GroupsType.UNIVERSITY:
                            return <UniversityGroup data={e!} />
                        case GroupsType.ANNOUNCEMENTS:
                            return <AnnouncementsGroup data={e!} />
                        case GroupsType.ASSOCIATION:
                            return <StudentsAssociation data={e!} />
                        default:
                            return <></>;
                    }
                })()}
            </div>
        )
    };

    return (
        <>
        {
            groups?.length === 0 
            ?
            <div className="justify-content-center">
                <Message text={locale?.courses.groupsNotFound!} />
            </div>
            :
            <div className="additional-groups text-center">
                <List
                    className={classNames.listGrid}
                    items={groups}
                    getItemCountForPage={getItemCountForPage}
                    getPageHeight={getPageHeight}
                    renderedWindowsAhead={15}
                    onRenderCell={getCell}
                />
            </div>
        }
        </>
    );
};

export default Groups;