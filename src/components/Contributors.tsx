import { Text } from 'office-ui-fabric-react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useTheme } from '@fluentui/react-theme-provider';
import { Persona } from 'office-ui-fabric-react/lib/Persona';
import { TooltipHost, ITooltipHostStyles, TooltipDelay } from 'office-ui-fabric-react/lib/Tooltip';
import Contributor from '../models/Contributor';
import { getContributors } from '../services/Requests'
import LocalizationService from "../services/LocalizationService";

const calloutPropsContributor = { gapSpace: 3 };
const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

const Contributors = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    //var language: string = LocalizationService.getLanguage();
    const contributors: Contributor[] = getContributors();

    return (
        <div className="pb-4 pt-4" style={{ backgroundColor: theme.palette.neutralLighter }}>
            <Container className="contributors text-center">
                <div className="mb-4"><Text variant="xLarge">{locale.contributors.header2}</Text></div>

                <div className="contributors mb-2">
                    <Row className="justify-content-center">
                        {
                            contributors.map((x, i) => 
                                <>
                                    <TooltipHost
                                        content={x.username}
                                        calloutProps={calloutPropsContributor}
                                        styles={hostStyles}
                                        delay={TooltipDelay.zero}
                                    >
                                        <Persona onRenderPrimaryText={() => null} text={x.username} className="mb-1" />
                                    </TooltipHost>
                                    &nbsp;
                                </>
                            )
                        }
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Contributors;