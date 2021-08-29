import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalizationService from "../../services/LocalizationService";
import { Link, Text } from '@fluentui/react';
import { semibold } from '../../fonts';
import JsxParser from 'react-jsx-parser';
import { getFaqs } from '../../services/Requests';
import { useTheme } from '@fluentui/react-theme-provider';

const Faqs = () => {
    var theme = useTheme();
    var language: string = LocalizationService.getLanguage();
    const faqs = getFaqs();

    return (
        <>
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
        </>
    )
};

export default Faqs;