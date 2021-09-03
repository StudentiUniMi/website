import React from "react";
import { Container } from 'react-bootstrap';
import { Text, Icon } from 'office-ui-fabric-react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@fluentui/react-theme-provider';
import { getRepresentatives, getDepartments } from '../services/Requests'
import { Department, Representative } from '../models/Models';
import { Image } from 'office-ui-fabric-react/lib/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../services/LocalizationService";
import RepresentativesList from '../components/University/RepresentativesList';
import Slider from '../components/University/Slider/Slider';

const iconStyles = { marginRight: '8px' };

const UniversityView = () => {
    var theme = useTheme();
    let didMount = React.useRef(false);
    const locale = LocalizationService.strings();
    const history = useHistory();
    const whiteText = '#faf9f8';

    /* Remove title properties from documentCardTitles */
    React.useEffect(() => {
        const divList = document.getElementsByClassName("ms-DocumentCardTitle");
        for (let i: number = 0; i < divList.length; i++) {
            divList[i].removeAttribute('title');
        }
    });

    const [departments, setDepartments] = React.useState<Department[]>([]);
    const [representatives, setRepresentatives] = React.useState<Representative[]>([]);
    const [selectedDepartment, setSelectedDepartment] = React.useState<string>('');

    const [loadingRepresentatives, setLoadingRepresentatives] = React.useState<boolean>(false);
    const [errorLoadingRepresentatives, setErrorLoadingRepresentatives] = React.useState<boolean>(false);
    const [errorLoadingDepartments, setErrorLoadingDepartments] = React.useState<boolean>(false);

    const departmentSelectionChanged = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IDropdownOption): void => {
        setSelectedDepartment(option?.key as string ?? '');
        history.push(`/representatives/${option?.data.slug as string}`);
    };

    /* Departments callBack */
    const updateDepartments = React.useCallback(async () => {
        setErrorLoadingDepartments(false);
        let departmentsResult = await getDepartments();

        if (departmentsResult.status !== 200) {
            setErrorLoadingDepartments(true);
            return;
        }

        //console.log("Departments result: ", departmentsResult.value ?? []);

        setDepartments(departmentsResult.value ?? []);
    }, []);

    /* Representatives callBack */
    const updateRepresentatives = React.useCallback(async () => {
        if (selectedDepartment === '' || selectedDepartment === undefined) return;
        setLoadingRepresentatives(true);
        setErrorLoadingRepresentatives(false);
        let representativesResult = await getRepresentatives(selectedDepartment);

        if (representativesResult.status !== 200) {
            setLoadingRepresentatives(false);
            setErrorLoadingRepresentatives(true);
        }

        //console.log("Representatives result: ", representativesResult.value ?? []);

        setLoadingRepresentatives(false);
        setRepresentatives(representativesResult.value ?? []);
    }, [setRepresentatives, selectedDepartment]);

    /* This function initializes representatives based on url parameters */
    const initializeRepresentativesViaUrl = React.useCallback(() => {
        if (!didMount.current && departments.length !== 0) {
            didMount.current = true
            var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
            var departmentSlug = states.length >= 2 ? states[1] : '';

            //console.log("Department slug: ", departmentSlug)
            setSelectedDepartment(departments.filter(x => x.slug === departmentSlug)[0]?.pk as unknown as string);
        }
    }, [departments, history.location.pathname]);

    React.useEffect(() => {
        if (!didMount.current) {
            updateDepartments();
        }
    }, [updateDepartments]);

    React.useEffect(() => {
        updateRepresentatives();
    }, [selectedDepartment, updateRepresentatives]);

    React.useEffect(() => {
        if (!didMount.current) initializeRepresentativesViaUrl();
    }, [initializeRepresentativesViaUrl, departments]);

    const departmentOptions: IDropdownOption[] = departments.map(x => ({ key: x.pk, text: x.name ?? "", data: { icon: x.icon, slug: x.slug }, disabled: x.representative_count === 0 }));

    return (
        <div className="university">
            <div className="pt-5 pb-5 mb-4" style={{ backgroundColor: '#004083' }}>
                <Container>

                    <Row>
                        <Col lg={9} className="mb-2">
                            <div className="mb-2">
                                <Text variant="xLargePlus" style={{ color: whiteText }}>Sei alla ricerca di informazioni legate al nostro ateneo? Nessun problema!</Text>
                            </div>

                            <div className="mb-3">
                                <Text variant="large" style={{ color: whiteText }}>Qui puoi trovare tutto quello che ti serve.</Text>
                            </div>
                        </Col>

                        <Col lg={3} className="text-center">
                            <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 300 }}>
                                <Image id="logo" className="mb-2" src={process.env.PUBLIC_URL + '/other/university.png'} style={{ display: 'inline-block', width: '90%' }} />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>

            <div>
                <Container>
                    <div className="mb-3 text-center">
                        <Text variant="xLarge"><Icon iconName="NewsSearch" /> {locale.university.news.title}</Text>
                    </div>

                    <div className="mb-3">
                        <Slider />
                    </div>
                </Container>
            </div>

            <div className="pt-5 pb-5 mb-4" style={{ backgroundColor: '#faa381' }}>
                <Container>
                    <Row className="mb-3">
                        <Col lg={3} className="text-center">
                            <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 300 }}>
                                <Image id="logo" className="mb-2" src={process.env.PUBLIC_URL + '/other/representatives.png'} style={{ display: 'inline-block', width: '100%' }} />
                            </div>
                        </Col>

                        <Col>
                            <div className="mb-2">
                                <div className="mb-2">
                                    <Text variant="xLargePlus" style={{ color: theme.palette.white }}>
                                        {locale.university.text1}
                                    </Text>
                                </div>

                                <div className="mb-2">
                                    <Text variant="large" style={{ color: theme.palette.white }}>
                                        {locale.university.text2}
                                    </Text>
                                </div>

                                <div className="mb-2 text-center" style={{ maxWidth: '400px', marginRight: 'auto'}}>
                                    <Dropdown
                                        placeholder={locale.university.departmentSelect}
                                        label={locale.university.departmentSelect}
                                        options={departmentOptions}
                                        onChange={departmentSelectionChanged}
                                        selectedKey={selectedDepartment}
                                        onRenderTitle={onRenderTitle}
                                        onRenderOption={onRenderOption}
                                        errorMessage={errorLoadingDepartments ? locale.errorLoadingDepartments : undefined}
                                        disabled={errorLoadingDepartments || departments.length === 0}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div style={{ display: selectedDepartment !== '' && selectedDepartment !== undefined ? 'block' : 'none' }}>
                <Container>
                    <RepresentativesList data={representatives} loadingRepresentatives={loadingRepresentatives} errorLoadingRepresentatives={errorLoadingRepresentatives} />
                </Container>
            </div>

        </div>
    )
};

export default UniversityView;

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