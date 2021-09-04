import React from "react";
import { Text, DropdownMenuItemType } from 'office-ui-fabric-react';
import { initializeIcons } from "@uifabric/icons";
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
//import { DefaultButton, Dialog, DialogType, DocumentCard, DocumentCardActivity, DocumentCardDetails, DocumentCardImage, DocumentCardTitle, IDialogContentProps, IDocumentCardActivityPerson, IDocumentCardDetailsStyles, IDocumentCardStyles, IDocumentCardTitleStyles, IIconProps, ImageFit, mergeStyleSets } from "@fluentui/react";
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { useTheme } from '@fluentui/react-theme-provider';
import { getDepartments, getDegrees, getCourses, getVerboseDegree } from '../services/Requests';
import { Separator } from '@fluentui/react/lib/Separator';
import { semibold } from '../services/fonts';
import { Department, Degree, CourseDegree } from "../models/Models";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GroupList from "../components/Groups/GroupList";
import LocalizationService from "../services/LocalizationService";
import DegreeInformations from "../components/Groups/DegreeInformations";
import AdminsList from '../components/Groups/AdminsList';
//import { redirectToLink } from "../services/Utils";
//import { useBoolean } from "@fluentui/react-hooks";
import AdditionalGroupsView from '../components/Groups/AdditionalGroups';

initializeIcons();
const iconStyles = { marginRight: '8px' };

const GroupsView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    let history = useHistory();
    let didMount = React.useRef(false);

    /* Wiki section */
    /*
    const wikiCard: IDocumentCardStyles = { root: { display: 'inline-block', marginBottom: 20, minWidth: 250, maxWidth: 'none', minHeight: 'none' } };
    const wikiCardPrimaryText: IDocumentCardTitleStyles = { root: { height: 'auto' } };
    const wikiCardSecondaryText: IDocumentCardTitleStyles = { root: { height: 'auto' } };
    const wikiCardDocumentCardDetails: IDocumentCardDetailsStyles = { root: { justifyContent: 'start' } };
    const people: IDocumentCardActivityPerson[] = [{ name: locale.courses.wikiCard.type, profileImageSrc: process.env.PUBLIC_URL + "/logo/unimi64.png" }];

    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const icon: IIconProps = { iconName: 'Documentation' };
    const styles = mergeStyleSets({
        button: {
            width: 'auto',
            height: 'auto',
            marginLeft: 10,
            marginRight: 10
        },
    });
    const modelProps = {
        isBlocking: false,
        styles: { main: { maxWidth: 900 } },
    };
    const dialogContentProps: IDialogContentProps = {
        type: DialogType.largeHeader,
        showCloseButton: true
    };
    */

    /* Styles */
    const dropdownStyles = { dropdown: { color: theme.palette.neutralPrimary }, dropdownItems: { color: theme.palette.neutralPrimary } };

    /* States */
    const [departments, setDepartments] = React.useState<Department[]>([]);
    const [degrees, setDegrees] = React.useState<Degree[]>([]);
    const [courses, setCourses] = React.useState<CourseDegree[]>([]);

    const [loadingCourses, setLoadingCourses] = React.useState<boolean>(false);
    const [errorLoadingDepartments, setErrorLoadingDepartments] = React.useState<boolean>(false);
    const [errorLoadingDegrees, setErrorLoadingDegrees] = React.useState<boolean>(false);
    const [errorLoadingCourses, setErrorLoadingCourses] = React.useState<boolean>(false);

    const [selectedDepartment, setSelectedDepartment] = React.useState<string>('');
    const [selectedDegree, setSelectedDegree] = React.useState<string>('');

    /* Departments */
    const updateDepartments = React.useCallback(async () => {
        setErrorLoadingDepartments(false);
        let departmentsResult = await getDepartments();

        if (departmentsResult.status !== 200) {
            setErrorLoadingDepartments(true);
            return;
        }

        //console.log("Departments result: ", departmentsResult.value ?? []);

        setDepartments(departmentsResult.value ?? []);
    }, [setDepartments]);

    let departmentOptions: IDropdownOption[] = departments.map(x => ({ key: x.pk, text: x.name ?? "", data: { icon: x.icon }, disabled: x.degree_count === 0 }));

    const departmentSelectionChanged = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IDropdownOption): void => {
        setSelectedDepartment(option?.key as string ?? '');
        setSelectedDegree(''); /* Reset del corso di laurea on department change, altrimenti rimane la lista dei gruppi precedente */
        history.push(`/courses/`)
    };

    /* Degrees */
    const updateDegrees = React.useCallback(async () => {
        if (selectedDepartment === '' || selectedDepartment === undefined) return;
        setErrorLoadingDegrees(false);
        let degreesResult = await getDegrees(selectedDepartment);

        if (degreesResult.status !== 200) {
            setErrorLoadingDegrees(true);
            return;
        }

        console.log("Degrees result: ", degreesResult.value ?? []);

        setDegrees(degreesResult.value ?? []);
    }, [setDegrees, selectedDepartment]);

    let degreesOptions: IDropdownOption[] = [];
    let triennali: Degree[] = degrees.filter(isTriennale);
    let magistrali: Degree[] = degrees.filter(isMagistrale);
    
    if (triennali.length !== 0) {
        degreesOptions.push({ key: 'Header', text: 'Triennali', itemType: DropdownMenuItemType.Header });
        degreesOptions.push(...triennali.map(x => ({ key: x.pk, text: x.name ?? "", data: { slug: x.slug, icon: x.icon } })));
    }
    
    if (magistrali.length !== 0) {
        degreesOptions.push({ key: 'Header', text: 'Magistrali', itemType: DropdownMenuItemType.Header });
        degreesOptions.push(...magistrali.map(x => ({ key: x.pk, text: x.name ?? "", data: { slug: x.slug, icon: x.icon } })));
    }

    const degreeSelectionChanged = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IDropdownOption): void => {
        setSelectedDegree(option?.key as string ?? '');
        history.push(`/courses/${option?.data.slug}`);
    };

    /* Courses callBack */
    const updateCourses = React.useCallback(async () => {
        if (selectedDegree === '' || selectedDegree === undefined) return;
        setErrorLoadingCourses(false);
        setLoadingCourses(true);
        let coursesResult = await getCourses(selectedDegree);

        if (coursesResult.status !== 200) {
            setLoadingCourses(false);
            setErrorLoadingCourses(true);
            return;
        }

        console.log("Courses result: ", coursesResult.value ?? []);
        const degreeSelected = degrees.filter(x => x.pk as unknown as string === selectedDegree)[0] ?? undefined;
        if (degreeSelected !== undefined && degreeSelected.group?.invite_link !== '' && degreeSelected.group?.invite_link !== null && degreeSelected.group?.invite_link !== undefined) {
            let mainDegreeGroup: CourseDegree = {
                "course": {
                    pk: undefined,
                    name: "Gruppo principale",
                    cfu: 0,
                    wiki_link: "",
                    links: [],
                    group: { /* test the degree here */
                        id: degreeSelected?.group?.id!,
                        title: degreeSelected?.group?.title,
                        profile_picture: degreeSelected?.group?.profile_picture,
                        invite_link: degreeSelected?.group?.invite_link
                    },
                },
                year: -1,
                semester: 0
            };
            coursesResult.value?.unshift(mainDegreeGroup);
        }

        setCourses(coursesResult.value ?? []);
        setLoadingCourses(false);
    }, [selectedDegree, degrees]);

    
    /* This function initializes the VerboseDegree (retrieves degree based on url initialization) */
    const initializeDegreeByUrl = React.useCallback(async () => {
        if (!didMount.current && departments.length !== 0) {
            didMount.current = true;
            var states = history.location.pathname.substring(1).split('/').filter(x => x !== '');
            var degreeSlug = states.length >= 2 ? states[1] : '';
            
            //console.log("Degree slug: ", degreeSlug)
            
            if (degreeSlug === '') {
                return;
            }
    
            let verboseDegreeResult = await getVerboseDegree(degreeSlug);
            
            if (verboseDegreeResult.status !== 200) {
                // Do we need to show an apposite error? Probably not
                return;
            }
            
            const verboseDeg = verboseDegreeResult.value ?? undefined;
            //console.log("VerboseDegree result: ", verboseDeg);
            if (verboseDeg === undefined || verboseDeg === null) return;
            //console.log(departments, "DEP TROVATI: ", departments.filter(x => x.pk === verboseDeg.department?.pk)[0]?.pk as unknown as string)
    
            setSelectedDepartment(departments.filter(x => x.pk === verboseDeg.department?.pk)[0]?.pk as unknown as string);
            setSelectedDegree(verboseDeg.pk as unknown as string);
        }
    }, [departments, history.location.pathname]);
    
    React.useEffect(() => {
        if (!didMount.current) updateDepartments();
    }, [updateDepartments]);

    React.useEffect(() => {
        updateDegrees();
    }, [selectedDepartment, updateDegrees]);
    
    React.useEffect(() => {
        updateCourses();
    }, [selectedDegree, updateCourses]);

    React.useEffect(() => {
        if (!didMount.current) initializeDegreeByUrl();
    }, [initializeDegreeByUrl, departments]);
    
    /* Chosen degree : Degree to pass it to various components as property */
    let degree: Degree = degrees.filter(x => x.pk === selectedDegree as unknown as number)[0] ?? [];

    return (
        <div className="pt-5 courses">
            <Container>
                <div>
                    <div className="mb-1"><Text variant="medium" styles={semibold} style={{textTransform: 'uppercase', color: theme.palette.themePrimary}}>{locale.groups.groupsSection.text1}</Text></div>
                    <Text variant="xLarge">{locale.groups.groupsSection.text2}</Text>
                </div>
                <Separator />

                {/*
                <div className="mb-4">
                    <div className="text-center">
                        <DefaultButton
                            onClick={toggleHideDialog}
                            text={locale.courses.wikiCard.buttonTitle}
                            className={styles.button}
                            iconProps={icon}
                            theme={theme}
                        />
                    </div>
                    

                    <Dialog
                        hidden={hideDialog}
                        onDismiss={toggleHideDialog}
                        dialogContentProps={dialogContentProps}
                        modalProps={modelProps}
                        maxWidth={700}
                        theme={theme}
                    >
                        <DocumentCard
                            styles={wikiCard}
                            onClick={() => redirectToLink("https://wiki.studentiunimi.it/start")}
                            className="text-align-left"
                            theme={theme}
                        >
                            <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={process.env.PUBLIC_URL + "/other/wiki_card.jpg"} />
                            <DocumentCardDetails styles={wikiCardDocumentCardDetails}>
                                <DocumentCardTitle title={locale.courses.wikiCard.title} styles={wikiCardPrimaryText} />
                                <DocumentCardTitle
                                    title={locale.courses.wikiCard.description}
                                    styles={wikiCardSecondaryText}
                                    showAsSecondaryTitle
                                />
                            </DocumentCardDetails>
                            <DocumentCardDetails>
                                <div style={{ marginLeft: 16, marginBottom: 8 }}>
                                    <Text styles={semibold} variant="medium" style={{ color: theme.palette.themePrimary }}><Icon iconName="PageArrowRight" /> {locale.courses.wikiCard.clickToWiki}</Text>
                                </div>
                            </DocumentCardDetails>
                            <DocumentCardActivity activity={locale.courses.wikiCard.date} people={people} />
                        </DocumentCard>
                    </Dialog>
                </div>
                */}

                <Row className="department-choose justify-content-center mb-5 text-center">
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-1">
                        {/* Department dropdown */}
                        <Dropdown
                            placeholder={locale.groups.departmentSelect}
                            label={locale.groups.departmentSelect}
                            onRenderTitle={onRenderTitle}
                            onRenderOption={onRenderOption}
                            options={departmentOptions}
                            onChange={departmentSelectionChanged}
                            selectedKey={selectedDepartment}
                            styles={dropdownStyles}
                            errorMessage={errorLoadingDepartments ? locale.errorLoadingDepartments : undefined}
                            theme={theme}
                            disabled={errorLoadingDepartments || departments.length === 0}
                        />
                    </Col>

                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-1">
                        {/* Cdl dropdown */}
                        <Dropdown
                            label={locale.groups.cdlSelect}
                            placeholder={locale.groups.cdlSelect}
                            selectedKey={selectedDegree}
                            onChange={degreeSelectionChanged}
                            onRenderTitle={onRenderTitle}
                            onRenderOption={onRenderOption}
                            options={degreesOptions}
                            styles={dropdownStyles}
                            theme={theme}
                            disabled={selectedDepartment === '' || errorLoadingDegrees}
                            errorMessage={errorLoadingDegrees ? locale.errorLoadingDegrees : undefined}
                        />
                    </Col>
                </Row>
            </Container>

                <div style={{ display: selectedDegree !== '' ? 'block' : 'none' }}>
                    <DegreeInformations degree={degree!} />
                    <GroupList degree={degree!} courses={courses} loadingCourses={loadingCourses} errorLoadingCourses={errorLoadingCourses} />
                    <AdminsList degree={degree!} />       
                </div>

            <Container className="pb-4">
                <div>
                    <div className="mb-1"><Text variant="medium" styles={semibold} style={{ textTransform: 'uppercase', color: theme.palette.themePrimary }}>{locale.groups.extraGroupsSection.text1}</Text></div>
                    <Text variant="xLarge">{locale.groups.extraGroupsSection.text2}</Text>
                </div>
                <Separator />

                <AdditionalGroupsView />

            </Container>
        </div>
    );
};

export default GroupsView;


function isTriennale(element: Degree) {
    return element.type === "B";
}

function isMagistrale(element: Degree) {
    return element.type === "M" || element.type === "C"
}

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