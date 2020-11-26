import * as React from "react";
import "./App.css";
import { Text, ITextProps } from "office-ui-fabric-react/lib/Text";
import {
    ChoiceGroup,
    ChoiceGroupBase,
    IChoiceGroupOption,
    IChoiceGroupOptionStyles,
} from "office-ui-fabric-react/lib/ChoiceGroup";
import { initializeIcons } from "@uifabric/icons";

/* Corsi di laurea */
import CourseListView from "./CourseListView";

initializeIcons();

const itemSize = 120;

const styles: IChoiceGroupOptionStyles = {
    choiceFieldWrapper: {
        width: itemSize + "px",
        height: itemSize + "px",
    },
    labelWrapper: {
        maxWidth: itemSize / (3 / 4) + "px",
        height: "auto",
    },
    field: {
        height: "100%",
        padding: "0px",
    },
};

const options: IChoiceGroupOption[] = [
    {
        key: "informatica",
        styles: styles,
        text: "Informatica",
        iconProps: { iconName: "ProgressRingDots" },
    },
    {
        key: "informatica_musicale",
        styles: styles,
        text: "Informatica musicale",
        iconProps: { iconName: "MusicInCollectionFill" },
    },
    {
        key: "informatica_com_digitale",
        styles: styles,
        text: "Informatica comunicazione digitale",
        iconProps: { iconName: "News" },
    },
    {
        key: "sicurezza_sistemi_reti_informatiche",
        styles: styles,
        text: "Sicurezza sistemi e reti informatiche",
        iconProps: { iconName: "Permissions" },
    },
];

const Groups = () => {
    const [selectedKey, setSelectedKey] = React.useState<string>();

    const selectionChanged = (
        ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
        option?: IChoiceGroupOption
    ): void => {
        setSelectedKey(option?.key);
    };

    return (
        <div id="groups">
            <ChoiceGroup
                label="Scegli un corso di Laurea"
                options={options}
                onChange={selectionChanged}
            />
            <CourseListView cdl={selectedKey} />
        </div>
    );
};

export default Groups;
