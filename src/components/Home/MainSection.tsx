import { Text } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { Image } from 'office-ui-fabric-react/lib-commonjs/Image';
import { useTheme } from '@fluentui/react-theme-provider';
import { getStringDegrees } from '../../services/Requests';
import React from 'react';
import LocalizationService from "../../services/LocalizationService";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Typed from 'react-typed';

const MainSection = () => {
    var theme = useTheme();
    let didMount = React.useRef(false);
    const locale = LocalizationService.strings();
    const logoProperties = { width: 200, height: 200, display: 'inline-block' };
    const [stringDegrees, setStringDegrees] = React.useState<string[]>([]);

    /* String Degrees */
    const updateStringDegrees = React.useCallback(async () => {
        if (!didMount.current) {
            didMount.current = true;
            let stringDegreesResult = await getStringDegrees();
    
            if (stringDegreesResult.status !== 200) {
                // I used this to avoid showing an error there (hopefully there won't be errors)
                setStringDegrees([
                    'informatica',
                    'fisica',
                    'informatica musicale',
                    'matematica',
                    'informatica per la comunicazione digitale',
                    'bioinformatics',
                    'sicurezza informatica'
                ]);
                return;
            }
    
            //console.log("StringDegrees result: ", stringDegreesResult.value ?? []);
    
            setStringDegrees(stringDegreesResult.value ?? []);
        }
    }, [setStringDegrees]);

    React.useEffect(() => {
        if (!didMount.current) updateStringDegrees();
    }, [updateStringDegrees]);

    return (
        <div className="pb-5">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: 200}}>
                            <Image id="logo" className="mb-2" src={process.env.PUBLIC_URL + '/logo/unimi500.png'} alt='Network logo' style={logoProperties} />
                        </div>
                    </Col>

                    <Col lg={8}>
                        <div className="mb-1">
                            <Text variant="large">
                                <>{locale?.homepage.section1.typedText} </>
                                <Text style={{color: theme.palette.themePrimary}} variant="large">
                                <Typed
                                    strings={stringDegrees}
                                    typeSpeed={50}
                                    backSpeed={30}
                                    backDelay={1500}
                                    loop
                                />
                                </Text>
                                <Text variant="large">?</Text>
                            </Text>
                        </div>
                        <div className="mb-2">
                            <Text variant="xLargePlus">
                                {locale?.homepage.section1.text1}
                            </Text>
                        </div>

                        <div>
                            <Text variant="large">
                                {locale?.homepage.section1.text2}
                            </Text>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainSection;