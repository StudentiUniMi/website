import { useCallback, useState } from "react";
import { Text, Image, Dialog, DialogType, DialogFooter, SearchBox, ISearchBoxStyles } from '@fluentui/react';
import { IconButton, IIconProps, ITooltipHostStyles, Link, PrimaryButton, TooltipHost, useTheme } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getDegreesForSearchBox } from '../../services/Requests';
import { semibold } from '../../services/Fonts';
import { ISuggestionItem } from '../../components/Courses/Autocomplete_types';
import { useBoolean } from "@fluentui/react-hooks";
import { NextSeo } from 'next-seo';
import LocalizationService from "../../services/LocalizationService";
import JsxParser from "react-jsx-parser";
import Marquee from "react-fast-marquee";
import Chip from "components/GenericComponents/Chip";
import DegreesResult from "components/Courses/DegreesResult";

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
    let [degreeTextSearch, setDegreeTextSearch] = useState<string>('');
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
        if (searchBoxText === "" || !searchBoxText) {
            setSearchData([]);
            return;
        } 
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

    const iconProps: IIconProps = { iconName: 'GroupsSearch' };
    const searchBoxStyle = {
        padding: '15px 20px',
        borderRadius: 20,
        backgroundColor: theme.palette.neutralLighterAlt
    };
    const searchBoxStyles: ISearchBoxStyles = {
        root: {
            backgroundColor: theme.palette.neutralLighterAlt
        }
    };

    const modelProps = { isBlocking: false };
    const dialogContentProps = {
        type: DialogType.largeHeader,
        title: locale?.serverError
    };

    const chips = [
        { label: { it: "Gruppi dei corsi di laurea", en: "Gruppi dei corsi di laurea" } },
        { label: { it: "Gruppi dei corsi didattici", en: "Gruppi dei corsi didattici" } },
        { label: { it: "Siti web dei corsi", en: "Siti web dei corsi" } },
        { label: { it: "Informazioni sui docenti", en: "Informazioni sui docenti" } },
        { label: { it: "Collegamenti del corso di laurea", en: "Collegamenti del corso di laurea" } },
        { label: { it: "Amministratori del network", en: "Amministratori del network" } },
        { label: { it: "Le nostre pagine wiki", en: "Le nostre pagine wiki" } },
    ];

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
                        <div className="mb-4">
                            <div className="mb-2 text-center">
                                <Text variant="mega" style={{ lineHeight: 1.3 }}>
                                    Trova tutti i <Text style={{ color: theme.palette.themePrimary }} variant="mega">gruppi</Text> e
                                    le <Text style={{ color: theme.palette.themePrimary }} variant="mega">risorse</Text> del tuo corso di laurea
                                </Text>
                            </div>

                            <div style={{ maxWidth: 800, margin: '0 auto' }}>
                                <Marquee direction={"right"} gradient={false} speed={15}>
                                    {chips.map((x,i) =>(
                                        <Text styles={semibold} key={i}>
                                            <Chip 
                                                label={x.label['it']} 
                                                theme={theme}
                                                size="small" 
                                                outlined 
                                                textColor={theme.palette.neutralPrimary} 
                                                className="mr-1" 
                                            />
                                        </Text>
                                    ))}
                                </Marquee>
                            </div>
                        </div>

                        <div className="search-box" style={searchBoxStyle}>
                            <SearchBox 
                                placeholder={locale?.courses.findDegreeByName} 
                                underlined={true} 
                                iconProps={iconProps}
                                theme={theme}
                                styles={searchBoxStyles}
                                value={degreeTextSearch ?? ""}
                                onSearch={searchTextHandler}
                                onChange={(ev) => updateDegreesForSearchBox(ev?.target.value!)}
                                onClear={() => { setDegreeTextSearch(""); setSearchData([]); }}
                                disabled={errorLoadingDegrees}
                            />
                        </div>

                        { degreeTextSearch && 
                            <DegreesResult 
                                degrees={searchData}
                                onElementClick={(item) => entitySelectHandler(item)}
                            /> 
                        }

                        { errorLoadingDegrees && 
                            <div className="mt-2 text-center d-flex flex-row align-items-center" style={{ gap: 10 }}>
                                <Text variant="medium" styles={semibold} style={{ color: theme.palette.red }}>{locale?.errorDataLoading}</Text>
                                <TooltipHost
                                    content={locale?.courses.resetSection}
                                    calloutProps={calloutProps}
                                    styles={hostStyles}
                                >
                                    <IconButton iconProps={resetIcon} onClick={resetSection} />
                                </TooltipHost>
                            </div> 
                        }

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