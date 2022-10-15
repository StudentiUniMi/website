import LocalizationService from "../../services/LocalizationService";
import JsxParser from 'react-jsx-parser';
import Chip from '../GenericComponents/Chip';
import { Container } from 'react-bootstrap';
import { Link, Text, useTheme } from '@fluentui/react';
import { semibold } from '../../services/Fonts';
import { getFaqs } from '../../services/Requests';

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
                        <Chip label={"FAQ"} size="medium" bgColor={theme.palette.themePrimary} textColor={theme.palette.white} />
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

                    {/*
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
                    */}
                </div>
            </Container>
        </div>
    )
};

export default Faqs;