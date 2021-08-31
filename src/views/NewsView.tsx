import { Text } from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Container } from 'react-bootstrap';
import { Separator } from '@fluentui/react/lib/Separator';
import { semibold } from '../fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import VaccineCards from '../components/News/VaccineCards';
import LocalizationService from "../services/LocalizationService";

const NewsView = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();

    return (
        <Container className="courses">
            <div className="mb-3 text-center">
                <Text variant="xLarge"><Icon iconName="NewsSearch"/> Notizie generali</Text>
            </div>

            <div className="mb-3">
                <div className="mb-4"><Separator theme={theme}><Text variant="large" style={{color: theme.palette.themePrimary}} styles={semibold}>{locale.homepage.vaccineSection.title}</Text></Separator></div>
                <VaccineCards />
            </div>
        </Container>
    )
};

export default NewsView;