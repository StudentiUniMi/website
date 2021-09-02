import React from 'react';
import { Text } from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Container } from 'react-bootstrap';
import { Separator } from '@fluentui/react/lib/Separator';
import { semibold } from '../services/fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import VaccineCards from '../components/News/VaccineCards';
import LocalizationService from "../services/LocalizationService";

const NewsView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();

    /* Remove title properties from documentCardTitles */
    React.useEffect(() => {
        const divList = document.getElementsByClassName("ms-DocumentCardTitle");
        for (let i:number = 0; i < divList.length; i++) {
            divList[i].removeAttribute('title');
        }
    });

    return (
        <Container className="courses">
            <div className="mb-3 text-center">
                <Text variant="xLarge"><Icon iconName="NewsSearch"/> {locale.news.title}</Text>
            </div>

            <div className="mb-3">
                <div className="mb-4"><Separator theme={theme}><Text variant="large" style={{color: theme.palette.themePrimary}} styles={semibold}>{locale.news.vaccineSection.title}</Text></Separator></div>
                <VaccineCards />
            </div>
        </Container>
    )
};

export default NewsView;