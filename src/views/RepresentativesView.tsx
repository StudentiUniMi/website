import React from "react";
import { Container } from 'react-bootstrap';
import { FontSizes } from '@fluentui/theme';
import { Text, Icon } from 'office-ui-fabric-react';
import { Dropdown, IDropdownOption, IDropdownStyles, IDropdownProps } from 'office-ui-fabric-react/lib/Dropdown';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@fluentui/react-theme-provider';
import RepresentativesList from '../components/RepresentativesList';
import { getRepresentatives, getDepartments } from '../services/Requests'
import Representative from '../models/Representative';

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: {  } };

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

const RepresentativesView = () => {
    var theme = useTheme();
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

    let didMount = React.useRef(false);

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

    let representatives: Representative[] = getRepresentatives(selectedDepartment);

    const departmentOptions: IDropdownOption[] = getDepartments().map(x => ({key: x.id, text: x.name ?? "", data: {icon:x.icon}, disabled: x.cdls.length === 0 || x.representatives.length === 0}));

    return (
        <Container className="representatives text-center">

            <div className="mb-2">
                <div className="mb-2">
                    <Text variant="large">
                        Il rappresentante degli studenti è un ruolo molto importante ed altamente formativo, 
                        che garantisce a tutti gli studenti universitari un supporto alle difficoltà che può incontrare durante il periodo di studio.
                    </Text>
                </div>

                <Text variant="medium">
                    Di seguito è presente la lista dei rappresentanti di ogni dipartimento e i loro contatti.
                </Text>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-2" style={iconStyle} />

            <div className="mb-4 justify-content-center" style={{maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto'}}>
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

            <RepresentativesList data={representatives}/>
        </Container>
    )
};

export default RepresentativesView;