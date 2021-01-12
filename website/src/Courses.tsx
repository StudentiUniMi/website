import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Text } from "office-ui-fabric-react/lib/Text";
import { FontSizes } from '@fluentui/theme';
import { ChoiceGroup, IChoiceGroupOption, IChoiceGroupOptionStyles } from "office-ui-fabric-react/lib/ChoiceGroup";
import { initializeIcons } from "@uifabric/icons";
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import CourseListView from "./views/CourseListView";

initializeIcons();

const itemSize = 120;

const stylesMagistrali: IChoiceGroupOptionStyles = {
    choiceFieldWrapper: {
        backgroundColor: '#deecf9',
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
        padding: "0px"
    }
};

const options: IChoiceGroupOption[] = [
    {
        key: "informatica",
        styles: stylesTriennali,
        text: "Informatica",
        iconProps: { iconName: "Devices3" },
    },
    {
        key: "informatica_musicale",
        styles: stylesTriennali,
        text: "Informatica musicale",
        iconProps: { iconName: "ScreenCast" },
    },
    {
        key: "informatica_com_digitale",
        styles: stylesTriennali,
        text: "Informatica comunicazione digitale",
        iconProps: { iconName: "ContactInfo" },
    },
    {
        key: "sicurezza_sistemi_reti_informatiche",
        styles: stylesTriennali,
        text: "Sicurezza sistemi e reti informatiche",
        iconProps: { iconName: "LaptopSecure" },
    },
    {
        key: "sicurezza_sistemi_reti_informatiche_online",
        styles: stylesTriennali,
        text: "Sicurezza sistemi e reti informatiche online",
        iconProps: { iconName: "LaptopSecure" },
    },
    {
        key: "magistrale_informatica",
        styles: stylesMagistrali,
        text: "Informatica (magistrale)",
        iconProps: { iconName: "ConnectVirtualMachine" },
    },
    {
        key: "magistrale_sicurezza_informatica",
        styles: stylesMagistrali,
        text: "Sicurezza informatica (magistrale)",
        iconProps: { iconName: "ProtectRestrict" },
    }
];

const Courses = () => {
    
    const history = useHistory();

    var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
    var initialState = states.length === 2 ? states[states.length-1] : ''

    const [selectedKey, setSelectedKey] = React.useState<string>(initialState);

    const selectionChanged = (
        ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
        option?: IChoiceGroupOption
    ): void => {
        setSelectedKey(option?.key ?? '');
        history.push(`/courses/${option?.key}/`);
    };

    return (
        <Container className="courses">
            <div className="text-center">
                <Text style={{ fontSize: FontSizes.size16 }}>
                    <p className="mb-0">Qui è possibile vedere i gruppi telegram, siti web, e faq (se disponibili)
                    di ogni corso didattico del tuo corso di laurea. </p>
                    <p className="mb-0">I corsi di laurea evidenziati in azzurro riguardano lauree magistrali, gli altri invece le triennali.</p>
                    <p>
                        Se noti qualcosa che non corrisponde o che andrebbe sistemato puoi contattare un amministratore.
                    </p>
                    <p><Text style={{ fontWeight: 600 }}>Scegli un corso di laurea</Text></p>
                </Text>
            </div>
            <ChoiceGroup
                options={options}
                onChange={selectionChanged}
                selectedKey={selectedKey}
            />
            <br />
            <div style={{ display: selectedKey ? 'block' : 'none' }}>
                <p className='text-center'>
                    <Text style={{ fontWeight: 600 }}>Gruppi disponibili:</Text>
                </p>
                <CourseListView cdl={selectedKey} />
            </div>
        </Container>
    );
};

export default Courses;
