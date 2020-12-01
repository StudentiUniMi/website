import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Text, ITextProps } from "office-ui-fabric-react/lib/Text";
import { FontSizes } from '@fluentui/theme';
import {
    ChoiceGroup,
    ChoiceGroupBase,
    IChoiceGroupOption,
    IChoiceGroupOptionStyles,
    IChoiceGroupStyleProps,
} from "office-ui-fabric-react/lib/ChoiceGroup";
import { initializeIcons } from "@uifabric/icons";
import CourseListView from "./CourseListView";
import { Container } from 'react-bootstrap';

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
        iconProps: { iconName: "Backlog" },
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

const Courses = () => {
    const [selectedKey, setSelectedKey] = React.useState<string>();

    const selectionChanged = (
        ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
        option?: IChoiceGroupOption
    ): void => {
        setSelectedKey(option?.key);
    };

    return (
        <Container id="courses">
            <div className="text-center">
                <Text style={{ fontSize: FontSizes.size16 }}>
                    <p>Qui è possibile vedere i gruppi telegram, siti web, e faq (se disponibili)
                di ogni corso del tuo corso di laurea. <br />Per il momento il supporto è solo per Informatica.</p>
                    <Text style={{ fontSize: FontSizes.size16, color: 'red' }}>
                        <p>
                            I corsi non vengono generati in modo allineato, ma purtroppo è un bug del framework che sto utilizzando.
                            Risolverò il prima possibile.
                    </p>
                    </Text>
                    <p><Text style={{ fontWeight: 500 }}>Scegli un corso di laurea</Text></p>
                </Text>
            </div>
            <ChoiceGroup
                options={options}
                onChange={selectionChanged}
            />
            <br />
            <CourseListView cdl={selectedKey} />
        </Container>
    );
};

export default Courses;
