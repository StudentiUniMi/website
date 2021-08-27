import React from "react";
import { Container } from 'react-bootstrap';
import { FontSizes } from '@fluentui/theme';
import { Text, Icon } from 'office-ui-fabric-react';
import { Dropdown, IDropdownOption, IDropdownStyles, IDropdownProps } from 'office-ui-fabric-react/lib/Dropdown';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@fluentui/react-theme-provider';
import RepresentativesList from '../components/RepresentativesList';
import { getRepresentatives, getDepartments } from '../services/Requests'
import LocalizationService from "../services/LocalizationService";

//import Representative from '../models/Representative';

import { Department, Representative } from '../models/Models';

const iconStyles = { marginRight: '8px' };

const RepresentativesView = () => {
    var theme = useTheme();
    let didMount = React.useRef(false);
    const [departments, setDepartments] = React.useState<Department[]>([]);
    const [representatives, setRepresentatives] = React.useState<Representative[]>([]);
    const locale = LocalizationService.strings();
    const history = useHistory();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const [selectedDepartment, setSelectedDepartment] = React.useState<string>('');

    const departmentSelectionChanged = (
        ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
        option?: IDropdownOption
    ): void => {
        setSelectedDepartment(option?.key as string ?? '');
        history.push(`/representatives/${option?.key as string}`);
    };

    React.useEffect(() =>
    {
        if(!didMount.current)
        {
            didMount.current = true
            var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
            var initialDepartment= states.length >= 2 ? states[1] : '';
            setSelectedDepartment(initialDepartment);
            history.push(`/representatives/${initialDepartment}`);
        }
    }, [history]);

    const updateDepartments = React.useCallback(async () => {
        let departmentsResult = await getDepartments();

        if (departmentsResult.status !== 200) {
            // Renderizza errore
        }

        console.log("Departments result: ", departmentsResult.value ?? []);

        setDepartments(departmentsResult.value ?? []);
    }, [setDepartments]);

    React.useEffect(() => {
        updateDepartments();
    }, [updateDepartments]);

    const updateRepresentatives = React.useCallback(async () => {
        let representativesResult = await getRepresentatives(selectedDepartment);

        if (representativesResult.status !== 200) {
            // Renderizza errore
        }

        console.log("Representatives result: ",representativesResult.value ?? [])

        setRepresentatives(representativesResult.value ?? []);
    }, [setRepresentatives, selectedDepartment]);

    React.useEffect(() => {
        updateRepresentatives();
    }, [updateRepresentatives]);

    // To-do: adjust disabled
    const departmentOptions: IDropdownOption[] = departments.map(x => ({ key: x.pk, text: x.name ?? "", data: { icon: x.icon }, disabled: x.representative_count === 0 }));

    return (
        <Container className="representatives text-center">

            <div className="mb-2">
                <div className="mb-2">
                    <Text variant="large">
                        {locale.representatives.text1}
                    </Text>
                </div>

                <Text variant="medium">
                    {locale.representatives.text2}
                </Text>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-2" style={iconStyle} />

            <div className="mb-4 justify-content-center" style={{maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Dropdown
                    placeholder={locale.representatives.departmentSelect}
                    label={locale.representatives.departmentSelect}
                    options={departmentOptions}
                    onChange={departmentSelectionChanged}
                    selectedKey={selectedDepartment}
                    onRenderPlaceholder={onRenderPlaceholder}
                    onRenderTitle={onRenderTitle}
                    onRenderOption={onRenderOption}
                />
            </div>

            <RepresentativesList data={representatives}/>
        </Container>
    )
};

export default RepresentativesView;

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