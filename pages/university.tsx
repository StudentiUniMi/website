import { useRef, useEffect, useState, useCallback } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../services/LocalizationService";
import RepresentativesList from '../components/University/RepresentativesList';
import { Container } from 'react-bootstrap';
import { Text, Icon, IChoiceGroupOptionStyles, ChoiceGroup, IChoiceGroupOption, Image, Dropdown, IDropdownOption, useTheme } from '@fluentui/react';
import { getRepresentatives, getDepartments, getUniversityLinks } from '../services/Requests'
import { Department, Representative } from '../models/Models';
import { semibold } from "../services/Fonts";
import { redirectToLink } from "../services/Utils";
import { NextSeo } from 'next-seo';

const University = () => {
    var theme = useTheme();
    let didMount = useRef(false);
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    
    const universityLinks: any[] = getUniversityLinks();
    
    /* ChoiceGroup for university links */
    const iconProps: any = { fontSize: '24px' };
    const imageProperties = { display: 'inline-block', width: '80%' };
    const options: IChoiceGroupOption[] = [];
    const itemSize = 100;
    const choiceGroupOptionsStyle: IChoiceGroupOptionStyles = {
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

    /* Workaround to not show selected choicegroup */
    const [selectedChoiceGroup, setSelectedChoiceGroup] = useState<string>("");
    const selectionChanged = (_?: React.FormEvent<HTMLElement | HTMLInputElement>, __?: IChoiceGroupOption): void => { setSelectedChoiceGroup(""); }

    universityLinks.map((x) => {
        if (x.icon !== "" && x.link !== "") options.push({ 
            key: x.name![language!], 
            text: x.name![language!], 
            styles: choiceGroupOptionsStyle, 
            iconProps: { iconName: x.icon!, className: iconProps, color: theme.palette.themePrimary }, 
            onClick: () => {redirectToLink(x.link!)} 
        });
        return options;
    });

    /* Remove title properties from documentCardTitles */
    useEffect(() => {
        const divList = document.getElementsByClassName("ms-DocumentCardTitle");
        for (let i: number = 0; i < divList.length; i++) {
            divList[i].removeAttribute('title');
        }
    });

    const [departments, setDepartments] = useState<Department[]>([]);
    const [representatives, setRepresentatives] = useState<Representative[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState<string>('');

    const [loadingRepresentatives, setLoadingRepresentatives] = useState<boolean>(false);
    const [errorLoadingRepresentatives, setErrorLoadingRepresentatives] = useState<boolean>(false);
    const [errorLoadingDepartments, setErrorLoadingDepartments] = useState<boolean>(false);

    const departmentSelectionChanged = (_?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IDropdownOption): void => {
        setSelectedDepartment(option?.key as string ?? '');
    };

    /* Departments callBack */
    const updateDepartments = useCallback(async () => {
        setErrorLoadingDepartments(false);
        let departmentsResult = await getDepartments();

        if (departmentsResult.status !== 200) {
            setErrorLoadingDepartments(true);
            return;
        }

        setDepartments(departmentsResult.value ?? []);
    }, []);

    /* Representatives callBack */
    const updateRepresentatives = useCallback(async () => {
        if (selectedDepartment === '' || selectedDepartment === undefined) return;
        setLoadingRepresentatives(true);
        setErrorLoadingRepresentatives(false);
        let representativesResult = await getRepresentatives(selectedDepartment);

        if (representativesResult.status !== 200) {
            setLoadingRepresentatives(false);
            setErrorLoadingRepresentatives(true);
        }

        setLoadingRepresentatives(false);
        setRepresentatives(representativesResult.value ?? []);
    }, [setRepresentatives, selectedDepartment]);

    useEffect(() => {
        if (!didMount.current) {
            updateDepartments();
        }
    }, [updateDepartments]);

    useEffect(() => {
        updateRepresentatives();
    }, [selectedDepartment, updateRepresentatives]);

    let departmentOptions: IDropdownOption[] = [];
    
    departments.forEach(x => {
        if (x.representative_count !== 0) departmentOptions.push({ key: x.pk, text: x.name ?? "", data: { icon: x.icon, slug: x.slug }, disabled: x.representative_count === 0 });
    });

    return (
        <>
            <NextSeo
                title={locale?.helmet.university.title}
                description={locale?.helmet.university.description}
                canonical={"https://studentiunimi.it/university"}
                openGraph={{
                    url: "https://studentiunimi.it/university",
                    title: locale?.helmet.university.title,
                    description: locale?.helmet.university.description,
                    site_name: 'Network StudentiUniMi',
                    type: 'website',
                    locale: language,
                    images: [
                        {
                            url: '/seo/university.png',
                            type: 'image/png',
                        }
                    ],
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            
            <section className="university">
                <div className="pt-5 pb-5" style={{ backgroundColor: theme.palette.themeDark }}>
                    <Container>

                        <Row>
                            <Col xl={9} lg={8} md={8} className="mb-3 mb-lg-0">
                                <div className="mb-2">
                                    <Text variant="xLargePlus" style={{ color: theme.palette.white }}>{locale?.university.header.text1}</Text>
                                </div>

                                <div className="mb-3">
                                    <Text variant="large" style={{ color: theme.palette.white }}>{locale?.university.header.text2}</Text>
                                </div>
                            </Col>

                            <Col xl={3} lg={4} md={4} className="text-center">
                                <Image id="logo" className="mb-2" src={'/images/university.png'} style={{ display: 'inline-block', maxWidth: 150 }} />
                            </Col>
                        </Row>

                    </Container>
                </div>

                <div className="pt-5 pb-5">
                    <Container>

                        <Row>
                            <Col lg={4} md={4} className="text-center">
                                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 300 }} className="mb-lg-0 mb-4">
                                    <Image id="logo" src={'/images/university_links.png'} style={imageProperties} />
                                </div>
                            </Col>

                            <Col lg={8} md={8} className="mb-2">
                                <div className="mb-2">
                                    <Text variant="xLargePlus">{locale?.university.linksAndRedirects.text1}</Text>
                                </div>

                                <div className="mb-3">
                                    <Text variant="large">{locale?.university.linksAndRedirects.text2}</Text>
                                </div>

                                <div className="text-center justify-content-center university-links" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                    <ChoiceGroup options={options} onChange={selectionChanged} selectedKey={selectedChoiceGroup} />
                                </div>
                            </Col>
                        </Row>



                    </Container>
                </div>

                <div className="pt-5 pb-5" style={{ backgroundColor: theme.palette.themeDarkAlt }}>
                    <Container>
                        <Row>
                            <Col>
                                <div className="mb-2">
                                    <div className="mb-2">
                                        <Text variant="xLarge" style={{ color: theme.palette.white }}>
                                            {locale?.university.text1}
                                        </Text>
                                    </div>

                                    <div className="mb-2">
                                        <Text variant="large" style={{ color: theme.palette.white }}>
                                            {locale?.university.text2}
                                        </Text>
                                    </div>

                                    <div className="mb-2 text-center" style={{ maxWidth: '400px', marginRight: 'auto'}}>
                                        <Dropdown
                                            placeholder={locale?.university.departmentSelect}
                                            label={locale?.university.departmentSelect}
                                            onRenderLabel={() => <Text style={{ color: theme.palette.white }} styles={semibold}>{locale?.university.departmentSelect}</Text>}
                                            options={departmentOptions}
                                            onChange={departmentSelectionChanged}
                                            selectedKey={selectedDepartment}
                                            onRenderTitle={onRenderTitle}
                                            onRenderOption={onRenderOption}
                                            errorMessage={errorLoadingDepartments ? locale?.errorLoadingDepartments : undefined}
                                            disabled={errorLoadingDepartments || departments.length === 0}
                                        />
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} className="text-center">
                                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 300 }}>
                                    <Image id="logo" className="mb-2" src={'/images/representatives.png'} style={{ display: 'inline-block', width: '100%' }} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div style={{ display: selectedDepartment !== '' ? 'block' : 'none' }}>
                    <Container>
                        <RepresentativesList data={representatives} loadingRepresentatives={loadingRepresentatives} errorLoadingRepresentatives={errorLoadingRepresentatives} />
                    </Container>
                </div>

            </section>
        </>
    )
};

export default University;

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