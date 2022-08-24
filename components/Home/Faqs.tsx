import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalizationService from "../../src/services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import Chip from '@material-ui/core/Chip';
import { Container } from 'react-bootstrap';
import { Link, Text } from 'office-ui-fabric-react/lib-commonjs';
import { semibold } from '../../src/services/Fonts';
import { getFaqs } from '../../src/services/Requests';
import { useTheme } from '@fluentui/react-theme-provider';

const Faqs = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    const faqs = getFaqs();

    return (
        <div className="pb-5 pt-5">
            <Container>

                <div className="mb-1">
                    <Text variant="medium" styles={semibold}>
                        <Chip label={"FAQ"} style={{ backgroundColor: theme.palette.themePrimary, color: theme.palette.white }} />
                    </Text>
                </div>            
                
                <div className="mb-2">
                    <Text variant="xLarge">{locale?.homepage.faqsSection.header}</Text>
                </div>

                <div className="mb-4">
                    <Text variant="medium">
                        <JsxParser bindings={{ theme: theme }} components={{ Text, Link }} jsx={locale?.homepage.faqsSection.description} />
                    </Text>
                </div>

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
                                            <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={x.question![language!]} />
                                        </Text>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Text variant="medium">
                                            <JsxParser bindings={{ theme: theme, semibold: semibold }} components={{ Text, Link }} jsx={x.answer![language!]} />
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