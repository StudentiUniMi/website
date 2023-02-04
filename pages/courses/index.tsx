import { useCallback, useState } from "react";
import { Text, Image, Dialog, DialogType, DialogFooter } from '@fluentui/react';
import { IconButton, IIconProps, ITooltipHostStyles, Link, PrimaryButton, TooltipHost, useTheme } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getDegreesForSearchBox } from '../../services/Requests';
import { semibold } from '../../services/Fonts';
import { Autocomplete } from '../../components/Courses/Autocomplete';
import { ISuggestionItem } from '../../components/Courses/Autocomplete_types';
import { useBoolean } from "@fluentui/react-hooks";
import { NextSeo } from 'next-seo';
import LocalizationService from "../../services/LocalizationService";
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

            <section className="courses">
                <div className="pt-5 pb-5">
                    <Container>
                        <Row>
                            <Col lg={3} className="text-center mb-3 mb-lg-0">
                                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 400 }}>
                                    <Image className="mb-2" src={'/images/courses/courses.png'} style={{ display: 'inline-block', width: '100%' }} />
                                </div>
                            </Col>

                            <Col lg={9}>
                                <div className="mb-2">
                                    <div className="mb-1">
                                        <Text variant="medium" styles={semibold} style={{textTransform: 'uppercase', color: theme.palette.themePrimary}}>{locale?.courses.groupsSection.text1}</Text>
                                    </div>
                                    
                                    <div className="mb-2">
                                        <span className="mr-1"><Text variant="xLargePlus">{locale?.courses.groupsSection.text2}</Text></span>
                                        
                                        <TooltipHost
                                            content={locale?.courses.resetSection}
                                            calloutProps={calloutProps}
                                            styles={hostStyles}
                                        >
                                            <IconButton iconProps={resetIcon} onClick={resetSection} />
                                        </TooltipHost>
                                    </div>

                                    <div className="mb-2 mb-md-4">
                                        <Text variant="large">{locale?.courses.groupsSection.text3}</Text>
                                    </div>
                                </div>

                                <div className="search-box">
                                    <Autocomplete
                                        items={searchData}
                                        searchTitle={locale?.courses.findDegreeByName}
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