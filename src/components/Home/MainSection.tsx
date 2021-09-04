import { Text } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Typed from 'react-typed';

const MainSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();

    const logoProperties = { width: 200, height: 200, display: 'inline-block' };

    return (
        <div /* style={{backgroundColor: theme.palette.neutralLighter}}*/ className="pb-5">
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
                                <>{locale.homepage.section1.typedText} </>
                                <Text style={{color: theme.palette.themePrimary}} variant="large">
                                <Typed
                                    strings={[
                                        'informatica?',
                                        'fisica?',
                                        'informatica musicale?',
                                        'matematica?',
                                        'informatica per la comunicazione digitale?',
                                        'bioinformatics?',
                                        'sicurezza informatica?'
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={30}
                                    loop
                                />
                                </Text>
                            </Text>
                        </div>
                        <div className="mb-2">
                            <Text variant="xLargePlus">
                                {locale.homepage.section1.text1}
                            </Text>
                        </div>

                        <div>
                            <Text variant="large">
                                {locale.homepage.section1.text2}
                            </Text>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/*
            <div className="mb-4 text-center">
                <div className="mb-2">
                    <Text variant="xLargePlus">
                        <JsxParser bindings={{ theme: theme }} components={{ Text }} jsx={locale.homepage.section1.text1} />
                    </Text>
                </div>
                <div><Text variant="large">{locale.homepage.section1.text2}</Text></div>
            </div>

            <div className="mb-3 justify-content-center">
                <Slider />
            </div>
            */}

        </div>
    )
}

export default MainSection;