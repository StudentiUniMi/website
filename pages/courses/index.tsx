import { useCallback, useState } from "react";
import { Text, Image, Separator, Dialog, DialogType, DialogFooter } from '@fluentui/react';
import { IconButton, IIconProps, ITooltipHostStyles, Link, PrimaryButton, TooltipHost, useTheme } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getDegreesForSearchBox } from '../../services/Requests';
import { semibold } from '../../services/Fonts';
import { Autocomplete } from '../../components/Groups/Autocomplete';
import { ISuggestionItem } from '../../components/Groups/Autocomplete_types';
import { useBoolean } from "@fluentui/react-hooks";
import { NextSeo } from 'next-seo';
import LocalizationService from "../../services/LocalizationService";
import AdditionalGroupsView from '../../components/Groups/AdditionalGroups';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import JsxParser from "react-jsx-parser";

const Courses = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    let router = useRouter();

    const resetIcon: IIconProps = { iconName: 'AiOutlineReload' };
    const calloutProps = { gapSpace: 10 };
    const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

    /* States */
    let [hideApiErrorDialog, { toggle: toggleApiErrorDialog }] = useBoolean(true);
    let [degreeTextSearch, setDegreeTextSearch] = useState('');
    let [searchData, setSearchData] = useState<ISuggestionItem[]>([]);
    const [errorLoadingDegrees, setErrorLoadingDegrees] = useState<boolean>(false);

    /* Handlers */
    const entitySelectHandler = (item: ISuggestionItem): void => {
        setDegreeTextSearch(item.displayValue);
        router.push(`/courses/${item.degree?.slug}`);
    };
    
    const searchTextHandler = (): void => {
        if (searchData.length === 0) return;
        setDegreeTextSearch(searchData[0]?.displayValue);
        router.push(`/courses/${searchData[0]?.degree?.slug}`);
    };

    /* Degrees for the SearchBox */
    const updateDegreesForSearchBox = useCallback(async (searchBoxText: string) => {
        setDegreeTextSearch(searchBoxText)
        if (searchBoxText === undefined || searchBoxText === "") return;
        let degreesResult = await getDegreesForSearchBox(searchBoxText);

        if (degreesResult.status !== 200) {
            setErrorLoadingDegrees(true);
            toggleApiErrorDialog();
            return;
        }

        let tempSearchData : ISuggestionItem[] = [];

        (degreesResult.value ?? []).map(x => {
            return tempSearchData.push({degree: x, key: x.pk, displayValue: x.name!, searchValue: x.name!});
        });

        setSearchData(tempSearchData ?? []);
    }, [toggleApiErrorDialog]);

    const resetSection = () => { 
        setDegreeTextSearch(''); 
        setErrorLoadingDegrees(false);
    };

    const modelProps = { isBlocking: false };
    const dialogContentProps = {
        type: DialogType.largeHeader,
        title: locale?.serverError
    };

    return (
        <>
            <NextSeo
                title={locale?.helmet.courses.title}
                description={locale?.helmet.courses.description}
                canonical={"https://studentiunimi.it/courses"}
                openGraph={{
                    url: "https://studentiunimi.it/courses",
                    title: locale?.helmet.courses.title,
                    description: locale?.helmet.courses.description,
                    site_name: 'Network StudentiUniMi',
                    type: 'website',
                    locale: language,
                    images: [
                        {
                            url: '/seo/groups.png',
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

            <section className="groups">
                <div className="pt-5">
                    <Container>
                        <Row>
                            <Col lg={3} className="text-center mb-3 mb-lg-0">
                                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 400 }}>
                                    <Image className="mb-2" src={'/images/groups/groups.png'} style={{ display: 'inline-block', width: '100%' }} />
                                </div>
                            </Col>

                            <Col lg={9}>
                                <div className="mb-2">
                                    <div className="mb-1">
                                        <Text variant="medium" styles={semibold} style={{textTransform: 'uppercase', color: theme.palette.themePrimary}}>{locale?.groups.groupsSection.text1}</Text>
                                    </div>
                                    
                                    <div className="mb-2">
                                        <span className="mr-1"><Text variant="xLargePlus">{locale?.groups.groupsSection.text2}</Text></span>
                                        
                                        <TooltipHost
                                            content={locale?.groups.resetSection}
                                            calloutProps={calloutProps}
                                            styles={hostStyles}
                                        >
                                            <IconButton iconProps={resetIcon} onClick={resetSection} />
                                        </TooltipHost>
                                    </div>

                                    <div className="mb-2 mb-md-4">
                                        <Text variant="large">{locale?.groups.groupsSection.text3}</Text>
                                    </div>
                                </div>

                                <div className="search-box">
                                    <Autocomplete
                                        items={searchData}
                                        searchTitle={locale?.groups.findDegreeByName}
                                        suggestionCallback={(item) => entitySelectHandler(item)}
                                        searchCallback={searchTextHandler}
                                        changeCallback={(text) => updateDegreesForSearchBox(text)}
                                        value={degreeTextSearch}
                                        theme={theme}
                                        language={language}
                                        disabled={errorLoadingDegrees}
                                    />
                                </div>

                                <div className="mt-2" style={{ display: errorLoadingDegrees ? 'block' : 'none' }}>
                                    <Text variant="medium" styles={semibold} style={{ color: theme.palette.red }}>{locale?.errorDataLoading}</Text>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>

                <Container className="pb-4">
                    <Separator className="mb-3 mt-3" />

                    <div className="mb-4">
                        <Row>
                            <Col xl={9} lg={8}>
                                <div className="mb-3">
                                    <div className="mb-1">
                                        <Text variant="medium" styles={semibold} style={{ textTransform: 'uppercase', color: theme.palette.themePrimary }}>{locale?.groups.extraGroupsSection.text1}</Text>
                                    </div>
                                    <div className="mb-2">
                                        <Text variant="xLargePlus">{locale?.groups.extraGroupsSection.text2}</Text>
                                    </div>
                                    <div>
                                        <Text variant="large">{locale?.groups.extraGroupsSection.text3}</Text>
                                    </div>
                                </div>
                            </Col>

                            <Col xl={3} lg={4} className="text-center">
                                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 400 }}>
                                    <Image className="mb-2" src={'/images/groups/extra_groups.png'} style={{ display: 'inline-block', width: '100%' }} />
                                </div>
                            </Col>

                        </Row>
                    </div>

                    <AdditionalGroupsView />
                </Container>

                {/* APIs Error dialog */}
                <Dialog
                    hidden={hideApiErrorDialog}
                    onDismiss={toggleApiErrorDialog}
                    dialogContentProps={dialogContentProps}
                    modalProps={modelProps}
                >
                    <div className="mb-3">
                        {locale?.errorDataLoading}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
                        <Image src={'/images/message/error.png'} style={{ width: 200 }} />
                    </div>

                    <div>
                        <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale?.additionalInformations} />
                    </div>

                    <DialogFooter>
                        <PrimaryButton onClick={toggleApiErrorDialog} text="Ok" />
                    </DialogFooter>
                </Dialog>
            </section>
        </>
    );
};

export default Courses;