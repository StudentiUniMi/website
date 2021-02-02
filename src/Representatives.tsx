import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Container } from 'react-bootstrap';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Dropdown, IDropdownOption, IDropdownStyles, IDropdownProps } from 'office-ui-fabric-react/lib/Dropdown';

const departmentOptions = [
    {
        key: 'informatica', text: 'Dipartimento di Informatica', data: {icon: 'TVMonitor'},
    },
    {
        key: 'fisica', text: 'Dipartimento di Fisica', disabled: true, data: {icon: 'ReleaseDefinition'}, 
    },
    {
        key: 'matematica', text: 'Dipartimento di Matematica', disabled: true, data: {icon: 'TimelineMatrixView'},
    },
    {
        key: 'agraria', text: 'Dipartimento di Agraria', disabled: true, data: {icon: 'ReleaseDefinition'},
    },
    {
        key: 'medicina', text: 'Dipartimento di Medicina',  disabled: true, data: {icon: 'Medical'},
    },
    {
        key: 'farmacia', text: 'Dipartimento di Farmacia',  disabled: true, data: {icon: 'MobileReport'},
    }
];

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { } };

const iconStyles = { marginRight: '8px' };
const onRenderOption = (option?: IDropdownOption): JSX.Element => {
    return (
        <div>
            {option?.data && option?.data.icon && (
                <Icon style={iconStyles} iconName={option.data.icon} aria-hidden="true" title={option.data.icon} />
            )}
            <span>{option?.text}</span>
        </div>
    );
};

const onRenderTitle = (options?: IDropdownOption[]): JSX.Element => {
    const option = options![0];

    return (
        <div>
            {option.data && option.data.icon && (
                <Icon style={iconStyles} iconName={option.data.icon} aria-hidden="true" title={option.data.icon} />
            )}
            <span>{option.text}</span>
        </div>
    );
};

const onRenderPlaceholder = (props?: IDropdownProps): JSX.Element => {
    return (
        <div className="dropdownExample-placeholder">
            <Icon style={iconStyles} iconName={'SurveyQuestions'} aria-hidden="true" />
            <span>{props?.placeholder}</span>
        </div>
    );
};

const Representatives = () => {
    const [selectedDepartment, setSelectedDepartment] = React.useState<string>('');

    const departmentSelectionChanged = (
        ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
        option?: IDropdownOption
    ): void => {
        setSelectedDepartment(option?.key as string ?? '');
    };

    return (
        <Container className="representatives-tutors text-center">

        <div className="mb-3">
            <Text style={{ fontSize: FontSizes.size14 }}>
                Il rappresentante degli studenti è un ruolo molto importante ed altamente formativo, 
                che garantisce a tutti gli studenti universitari un supporto alle difficoltà che può incontrare durante il periodo di studio. 
                Il suo impegno è quello di assicurare presenza e azione nei vari organi dell'Ateneo, relativemente alla didattica, all'organizzazione delle attività formative e dei servizi degli studenti.
                Di seguito è presente la lista dei rappresentanti di ogni dipartimento.
            </Text>
        </div>
        <div>
                <Dropdown
                    placeholder="Seleziona un dipartimento"
                    label="Seleziona un dipartimento"
                    options={departmentOptions}
                    onChange={departmentSelectionChanged}
                    selectedKey={selectedDepartment}
                    styles={dropdownStyles}
                    onRenderPlaceholder={onRenderPlaceholder}
                    onRenderTitle={onRenderTitle}
                    onRenderOption={onRenderOption}
                />
        </div>
            

        </Container>
    )
};

export default Representatives;