import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Text } from 'office-ui-fabric-react';
import { FontSizes } from '@fluentui/theme';
import { Container } from 'react-bootstrap';
import GruppiExtra from './data/GruppiExtra.json'
import { FocusZone, List } from "@fluentui/react";
import { ITheme, getTheme, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import ExtraGroupView from './ExtraGroupView'
import ExtraGroup from './models/ExtraGroup'

const classNames = mergeStyleSets({
    listGridExample: {
        overflow: 'hidden',
        fontSize: 0,
        position: 'relative',
    },
});

interface Props {
    data: ExtraGroup
}

const AdditionalGroups = () => {    // props non dovrebbe servirmi
    const groups: ExtraGroup[] = GruppiExtra;

    const getCell = (e?: ExtraGroup, index?: number, isScrolling?: boolean) => {
        return (
            <div style={{ height: "22%", width: "22%" }}>
                <ExtraGroupView data={e!} />
            </div>
        );
    }

    return (
        <Container className="additional-groups text-center">
            <Text style={{ fontSize: FontSizes.size16 }}>
                <p>
                    Qui è possibile trovare gruppi aggiuntivi del network.
                    </p>
                <p>
                    <Text style={{ fontWeight: 500 }}>Gruppi disponibili:</Text>
                </p>
            </Text>

            <FocusZone>
                <List
                    className={classNames.listGridExample}
                    items={groups}
                    getItemCountForPage={() => groups.length / 20}
                    getPageHeight={() => groups.length * 150 / 20}
                    renderedWindowsAhead={4}
                    onRenderCell={getCell}
                />
            </FocusZone>
        </Container>
    )
};

export default AdditionalGroups;