import React from 'react';
import { Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { Container } from 'react-bootstrap';
import { FocusZone, List, IRectangle } from "@fluentui/react";
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import {getExtraGroups} from '../services/Requests'
import ExtraGroupView from '../components/ExtraGroup';
import ExtraGroup from '../models/ExtraGroup';

const ROWS_PER_PAGE = 3;
const MAX_ROW_HEIGHT = 240;

interface Dimensions
{
    tileWidth: string,
    cardWidth: string,
    //cardMaxWidth: string
};

const AdditionalGroupsView = () => {
    const groups: ExtraGroup[] = getExtraGroups();

    const mq = window.matchMedia( "(max-width: 540px)" );

    let [dimensions, setDimensions] = React.useState<Dimensions>({ tileWidth:'none', cardWidth:'213px' })

    mq.addListener((changed) => setDimensions(changed.matches ? { tileWidth:'100%', cardWidth:'100%' } : { tileWidth:'none', cardWidth:'213px' }));

    var classNames = mergeStyleSets({
        listGrid: {
            overflow: 'hidden',
            fontSize: 0,
            position: 'relative',
            marginBottom: 10,
            margin: '1px'
        },
        listGridTile: {
            textAlign: 'center',
            outline: 'none',
            position: 'relative',
            float: 'left',
            width: dimensions.tileWidth
        },
    });

    const columnCount = React.useRef(0);
    const rowHeight = React.useRef(0);
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

    const getCell = (e?: ExtraGroup, index?: number, isScrolling?: boolean) => {
        return (
            <div
                data-is-focusable
                className={classNames.listGridTile}
                style={{height: MAX_ROW_HEIGHT + 'px', width: dimensions.cardWidth }}>
                <ExtraGroupView data={e!} />
            </div>
        )
    }

    return (
        <Container className="additional-groups text-center">
            <Text style={{ fontSize: FontSizes.size14 }}>
                <div className="mb-3"> Qui è possibile trovare gruppi aggiuntivi del network.</div>
                <div className="mb-2">
                    <Text style={{ fontWeight: 600 }}>Gruppi disponibili:</Text>
                </div>
            </Text>


            <FocusZone>
                <List
                    className={classNames.listGrid}
                    items={groups}
                    getItemCountForPage={getItemCountForPage}
                    getPageHeight={getPageHeight}
                    renderedWindowsAhead={4}
                    onRenderCell={getCell}
                />
            </FocusZone>
        </Container>
    )
};

export default AdditionalGroupsView;