import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Text } from "office-ui-fabric-react/lib/Text";
import { FontSizes } from '@fluentui/theme';
import { Link } from 'office-ui-fabric-react';
import {
    ChoiceGroup,
    IChoiceGroupOption,
    IChoiceGroupOptionStyles,
} from "office-ui-fabric-react/lib/ChoiceGroup";
import { initializeIcons } from "@uifabric/icons";
import CourseListView from "./CourseListView";
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

initializeIcons();

const itemSize = 120;

const stylesMagistrali: IChoiceGroupOptionStyles = {
    choiceFieldWrapper: {
        backgroundColor: '#f5efcb',
        width: itemSize + "px",
        height: itemSize + "px"
    },
    labelWrapper: {
        maxWidth: itemSize / (3 / 4) + "px",
        height: "auto",
    },
    field: {
        height: "100%",
        padding: "0px",
    }
};

const stylesTriennali: IChoiceGroupOptionStyles = {
    choiceFieldWrapper: {
        width: itemSize + "px",
        height: itemSize + "px"
    },
    labelWrapper: {
        maxWidth: itemSize / (3 / 4) + "px",
        height: "auto",
    },
    field: {
        height: "100%",
        padding: "0px",
    }
};

const options: IChoiceGroupOption[] = [
    {
        key: "informatica",
        styles: stylesTriennali,
        text: "Informatica",
        iconProps: { iconName: "System" },
    },
    {
        key: "informatica_musicale",
        styles: stylesTriennali,
        text: "Informatica musicale",
        iconProps: { iconName: "MusicInCollection" },
    },
    {
        key: "informatica_com_digitale",
        styles: stylesTriennali,
        text: "Informatica comunicazione digitale",
        iconProps: { iconName: "News" },
    },
    {
        key: "sicurezza_sistemi_reti_informatiche",
        styles: stylesTriennali,
        text: "Sicurezza sistemi e reti informatiche",
        iconProps: { iconName: "Fingerprint" },
    },
    {
        key: "sicurezza_sistemi_reti_informatiche_online",
        styles: stylesTriennali,
        text: "Sicurezza sistemi e reti informatiche online",
        iconProps: { iconName: "Fingerprint" },
    },
    {
        key: "magistrale_informatica",
        styles: stylesMagistrali,
        text: "Informatica (magistrale)",
        iconProps: { iconName: "System" },
    },
    {
        key: "magistrale_sicurezza_informatica",
        styles: stylesMagistrali,
        text: "Sicurezza informatica (magistrale)",
        iconProps: { iconName: "Lock" },
    }
];

const Courses = () => {
    const [selectedKey, setSelectedKey] = React.useState<string>();

    const history = useHistory()

    const selectionChanged = (
        ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
        option?: IChoiceGroupOption
    ): void => {
        setSelectedKey(option?.key);
        history.push(`/network/courses/${option?.key}/`);
    };

    return (
        <Container className="courses">
            <div className="text-center">
                <Text style={{ fontSize: FontSizes.size16 }}>
                    <p className="mb-0">Qui è possibile vedere i gruppi telegram, siti web, e faq (se disponibili)
                    di ogni corso didattico del tuo corso di laurea. </p>
                    <p className="mb-0">I corsi di laurea indicati in giallo riguardano lauree magistrali, gli altri invece le triennali.</p>
                    <p>Se noti qualcosa che non corrisponde o che andrebbe sistemato puoi contattare <Link href="https://t.me/giuseppetm" className="text-decoration-none" target="_blank"> @giuseppetm</Link>.</p>
                    <p><Text style={{ fontWeight: 500 }}>Scegli un corso di laurea</Text></p>
                </Text>
            </div>
            <ChoiceGroup
                options={options}
                onChange={selectionChanged}
            />
            <br />
            <p className='text-center' style={{ display: selectedKey ? 'block' : 'none' }}>
                <Text style={{ fontWeight: 500 }}>Gruppi disponibili:</Text>
            </p>
            <CourseListView cdl={selectedKey} />
        </Container>
    );
};

export default Courses;
