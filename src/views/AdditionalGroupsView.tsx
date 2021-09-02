import React from 'react';
import { Text, Icon, Link, Image, IIconProps } from 'office-ui-fabric-react';
import { useTheme } from '@fluentui/react-theme-provider';
import { FontSizes } from '@fluentui/theme';
import { Container } from 'react-bootstrap';
import { FocusZone, List, IRectangle } from "@fluentui/react";
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { getExtraGroups } from '../services/Requests';
import { Separator } from '@fluentui/react/lib/Separator';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { PrimaryButton } from 'office-ui-fabric-react';
import { semibold } from '../services/fonts';
import ExtraGroupView from '../components/ExtraGroup';
import ExtraGroup from '../models/ExtraGroup';
import LocalizationService from "../services/LocalizationService";
import JsxParser from 'react-jsx-parser';

const AdditionalGroupsView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const sectionCard = { minHeight: '160px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none' };
    const buttonStyle = { maxWidth: '180px' };
    const columnCount = React.useRef(0);
    const rowHeight = React.useRef(0);
    const rowsPerPage = React.useRef(0);
    const MAX_ROW_HEIGHT = 280;
    const groups: ExtraGroup[] = getExtraGroups();

    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    var classNames = mergeStyleSets({
        listGrid: {
            overflow: 'hidden',
            fontSize: 0,
            position: 'relative',
            marginBottom: 10,
            margin: '1px'
        }
    });

    const mugPic = {
        width: '80px',
        height: '80px',
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: 'auto', marginRight: 'auto'
    };

    const getItemCountForPage = React.useCallback((itemIndex?: number, surfaceRect?: IRectangle) => {
        if (itemIndex === 0) {
            /* rowHeight.current = Math.floor(surfaceRect!.width / columnCount.current) */ 
            columnCount.current = Math.ceil(surfaceRect!.width / MAX_ROW_HEIGHT);
            rowHeight.current = MAX_ROW_HEIGHT;
            rowsPerPage.current = surfaceRect!.height / MAX_ROW_HEIGHT;
        }
        return columnCount.current * rowsPerPage.current;
    }, []);
    
    const getPageHeight = React.useCallback((): number => {
        return rowHeight.current * rowsPerPage.current;
    }, []); 

    const getCell = (e?: ExtraGroup, index?: number, isScrolling?: boolean) => {
        return (
            <div data-is-focusable className="listGridTile" style={{ height: rowHeight.current + 'px', width: 100 / columnCount.current + '%' }}>
                <ExtraGroupView data={e!} />
            </div>
        )
    }

    return (
        <Container className="additional-groups text-center">

            <div className="mb-2">
                <Text variant="large">
                    {locale.extraGroups.text1}
                </Text>
            </div>

            <Icon iconName="ChevronDownMed" className="mb-2" style={iconStyle} />

            <div className="mb-4">
                <Text variant="medium">
                    <JsxParser bindings={{ theme: theme }} components={{ Text, Link }} jsx={locale.extraGroups.text2} />
                </Text>
            </div>

            <div className='text-center mb-4'>
                <Separator theme={theme}>
                    <Icon iconName="DoubleChevronDown8" style={{ color: theme.palette.themePrimary }} />
                    <Text variant="medium" styles={semibold} style={{ color: theme.palette.themePrimary, fontSize: FontSizes.size18 }}> {locale.extraGroups.availableGroups} </Text>
                    <Icon iconName="DoubleChevronDown8" style={{ color: theme.palette.themePrimary }} />
                </Separator>
            </div>     

            <FocusZone className="mb-4">
                <List
                    className={classNames.listGrid}
                    items={groups}
                    getItemCountForPage={getItemCountForPage}
                    getPageHeight={getPageHeight}
                    renderedWindowsAhead={15}
                    onRenderCell={getCell}
                />
            </FocusZone>

            <Separator theme={theme}>
                <div className="mb-2 mt-2">
                    <Text variant="large">
                        {locale.extraGroups.text3}
                    </Text>
                </div>
            </Separator>

            <Icon iconName="SortDown" className="mb-2" style={iconStyle} />

            <div style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '300px'}}>
                <Card tokens={cardTokens} className="justify-content-center text-center" style={sectionCard}>
                    <Card.Section>
                        <div className="justify-content-center">
                            <Image id="logo"
                                src={process.env.PUBLIC_URL + "/other/mug_logo.png"}
                                alt={"Mug Logo"}
                                style={mugPic}
                            />
                        </div>
                        <Text variant="medium">
                            <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={locale.extraGroups.mug} />
                        </Text>
                        <div className="justify-content-center">
                            <PrimaryButton text={locale.homepage.section2.card3.button} iconProps={buttonIconProps} href="https://discord.gg/9qUGtnKYUU" target="_blank" className="text-decoration-none" allowDisabledFocus style={buttonStyle} />
                        </div>
                    </Card.Section>
                </Card>
            </div>
        </Container>
    )
};

export default AdditionalGroupsView;