import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalizationService from "../../services/LocalizationService";
import { Container } from 'react-bootstrap';
import { Link, Text } from '@fluentui/react';
import { semibold } from '../../services/fonts';
import JsxParser from 'react-jsx-parser';
import { getFaqs } from '../../services/Requests';
import { useTheme } from '@fluentui/react-theme-provider';

const Faqs = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string = LocalizationService.getLanguage();
    const faqs = getFaqs();

    return (
        <div className="pb-4 pt-4" /*style={{ backgroundColor: theme.palette.neutralLighter }}*/>
            <div className="mb-4 text-center"><Text variant="xLarge">{locale.homepage.section6.text}</Text></div>
            <Container>
                <div className="mb-2">
                    {
                        faqs.map((x, i) => {
                            return (
                                <Accordion style={{ backgroundColor: theme.palette.white, color: theme.palette.black, boxShadow: theme.effects.elevation8, marginRight: 10, marginLeft: 10 }} key={i}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: theme.palette.black }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Text variant="medium" style={{ color: theme.palette.themePrimary }} styles={semibold}>
                                            <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={x.question![language]} />
                                        </Text>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Text variant="medium">
                                            <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={x.answer![language]} />
                                        </Text>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
};

export default Faqs;