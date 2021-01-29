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

const departmentsOptions : IChoiceGroupOption[] = [
    { key: 'department_informatica', text: 'Dipartimento di Informatica' },
    { key: 'department_medicine', text: 'Dipartimento di Medicina' }
];


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

const cdlOptionsInformatica: IChoiceGroupOption[] = [
    { key: "triennale_informatica", styles: stylesTriennali, text: "Informatica", iconProps: { iconName: "Devices3" }, },
    { key: "triennale_informatica_musicale", styles: stylesTriennali, text: "Informatica musicale", iconProps: { iconName: "ScreenCast" }, },
    { key: "triennale_informatica_com_digitale", styles: stylesTriennali, text: "Informatica comunicazione digitale", iconProps: { iconName: "ContactInfo" }, },
    { key: "triennale_sicurezza_sistemi_reti_informatiche", styles: stylesTriennali, text: "Sicurezza sistemi e reti informatiche", iconProps: { iconName: "LaptopSecure" }, },
    { key: "triennale_sicurezza_sistemi_reti_informatiche_online", styles: stylesTriennali, text: "Sicurezza sistemi e reti informatiche online", iconProps: { iconName: "LaptopSecure" }, },
    { key: "magistrale_informatica", styles: stylesMagistrali, text: "Informatica (magistrale)", iconProps: { iconName: "ConnectVirtualMachine" },},
    { key: "magistrale_sicurezza_informatica", styles: stylesMagistrali, text: "Sicurezza informatica (magistrale)", iconProps: { iconName: "ProtectRestrict" }, }
];

const Courses = () => {
    
    const history = useHistory();

    var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
    var initialState = states.length === 2 ? states[states.length-1] : ''

    const [selectedDepartment, setSelectedDepartment] = React.useState<string>();
    const [selectedCdl, setSelectedCdl] = React.useState<string>(initialState);

    const departmentSelectionChanged = (
        ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
        option?: IChoiceGroupOption
    ): void => {
        setSelectedDepartment(option?.key ?? '');
        //history.push(`/courses/${option?.key}/`);
    };

    const cdlSelectionChanged = (
        ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
        option?: IChoiceGroupOption
    ): void => {
        setSelectedCdl(option?.key ?? '');
        history.push(`/courses/${option?.key}/`);
    };

    return (
        <Container className="courses">
            <div className="text-center">
                <Text style={{ fontSize: FontSizes.size16 }}>
                    <p className="mb-0">Qui è possibile vedere i gruppi telegram, siti web, e faq (se disponibili)
                    di ogni corso didattico del tuo corso di laurea. </p>
                    <p className="mb-0">I corsi di laurea evidenziati in azzurro riguardano lauree magistrali, gli altri invece le triennali.</p>
                    <p className="mb-2">Se noti qualcosa che non corrisponde o che andrebbe sistemato puoi contattare un amministratore.</p>
                    <p className="mb-3">
                        <Text style={{ fontSize: FontSizes.size12 }}>
                            <p className="mb-0">
                                I link alla <Text style={{ fontWeight: 600, fontSize: FontSizes.size12 }}>Wiki</Text> di un corso didattico potrebbero portare a pagine non ancora compilate: 
                            </p>
                            <p className="mb-0">
                                è qui che potete contribuire iscrivendovi e aiutandoci a raccogliere faq e qualsiasi altro contenuto utile per i corsi didattici.
                            </p>
                        </Text>
                    </p>


                    <p><Text style={{ fontWeight: 600 }}>Scegli un dipartimento</Text></p>
                    <ChoiceGroup defaultSelectedKey="department_informatica" options={departmentsOptions} onChange={departmentSelectionChanged} />

                </Text>
            </div>


            <br />
            <div style={{ display: selectedDepartment ? 'block' : 'none' }}>

                <p><Text style={{ fontWeight: 600 }}>Scegli un corso di laurea</Text></p>

                <ChoiceGroup
                    options={cdlOptionsInformatica}
                    onChange={cdlSelectionChanged}
                    selectedKey={selectedCdl}
                />
                <div style={{ display: selectedCdl ? 'block' : 'none' }}>
                    <p className='text-center'>
                        <Text style={{ fontWeight: 600 }}>Gruppi disponibili:</Text>
                    </p>
                    <CourseListView cdl={selectedCdl} />
                </div>
            </div>
        </Container>
    );
};

export default Courses;
