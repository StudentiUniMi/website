import React from "react";
import { Container } from 'react-bootstrap';
import { FontSizes } from '@fluentui/theme';
import { Text, Icon } from 'office-ui-fabric-react';
import { Dropdown, IDropdownOption, IDropdownProps } from 'office-ui-fabric-react/lib/Dropdown';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@fluentui/react-theme-provider';
import { getRepresentatives, getDepartments } from '../services/Requests'
import { Department, Representative } from '../models/Models';
import LocalizationService from "../services/LocalizationService";
import RepresentativesList from '../components/RepresentativesList';

const iconStyles = { marginRight: '8px' };

const RepresentativesView = () => {
    var theme = useTheme();
    let didMount = React.useRef(false);
    const locale = LocalizationService.strings();
    const history = useHistory();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };

    const [departments, setDepartments] = React.useState<Department[]>([]);
    const [representatives, setRepresentatives] = React.useState<Representative[]>([]);
    const [selectedDepartment, setSelectedDepartment] = React.useState<string>('');

    const [loadingRepresentatives, setLoadingRepresentatives] = React.useState<boolean>(false);
    const [errorLoadingRepresentatives, setErrorLoadingRepresentatives] = React.useState<boolean>(false);
    const [errorLoadingDepartments, setErrorLoadingDepartments] = React.useState<boolean>(false);

    const departmentSelectionChanged = (
        ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
        option?: IDropdownOption
    ): void => {
        setSelectedDepartment(option?.key as string ?? '');
        updateRepresentatives();
        history.push(`/representatives/${option?.key as string}`);
    };

    /* To-do: adjust initialization via url parameters */
    // To-do: need slug to use it in url parameters initialization

    const initializeRepresentativesViaUrl = React.useCallback(() =>
    {
        didMount.current = true
        var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
        var departmentSlug = states.length >= 2 ? states[1] : '';
        setSelectedDepartment(departments.filter(x => x.slug === departmentSlug)[0]?.pk as unknown as string);
        // history.push(`/representatives/${departmentSlug}`);   do we need this?
    }, [departments, history.location.pathname]);

    /* Departments callBack */
    const updateDepartments = React.useCallback(async () => {
        setErrorLoadingDepartments(false);
        let departmentsResult = await getDepartments();

        if (departmentsResult.status !== 200) {
            setErrorLoadingDepartments(true);
            return;
        }

        console.log("Departments result: ", departmentsResult.value ?? []);

        setDepartments(departmentsResult.value ?? []);
    }, [setDepartments]);

    /* Representatives callBack */
    const updateRepresentatives = React.useCallback(async () => {
        if (selectedDepartment === '') return;
        setLoadingRepresentatives(true);
        setErrorLoadingRepresentatives(false);
        let representativesResult = await getRepresentatives(selectedDepartment);

        if (representativesResult.status !== 200) {
            setLoadingRepresentatives(false);
            setErrorLoadingRepresentatives(true);
        }

        console.log("Representatives result: ", representativesResult.value ?? []);

        setLoadingRepresentatives(false);
        setRepresentatives(representativesResult.value ?? []);
    }, [setRepresentatives, selectedDepartment]);

    React.useEffect(() => {
        if (!didMount.current) {
            updateDepartments();
            initializeRepresentativesViaUrl();
        }
    }, [updateDepartments, initializeRepresentativesViaUrl]);

    // To-do: need slug to use it in url parameters initialization
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
                    onRenderTitle={onRenderTitle}
                    onRenderOption={onRenderOption}
                    errorMessage={errorLoadingDepartments ? 'Errore durante il caricamento dei dipartimenti.' : undefined}
                    disabled={errorLoadingDepartments}
                />
            </div>

            <RepresentativesList data={representatives} loadingRepresentatives={loadingRepresentatives} errorLoadingRepresentatives={errorLoadingRepresentatives} />
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