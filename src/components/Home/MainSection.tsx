import { Text } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { useTheme } from '@fluentui/react-theme-provider';
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from './Slider/Slider';
import LocalizationService from "../../services/LocalizationService";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Typed from 'react-typed';

const MainSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();

    const logoProperties = { width: 200, height: 200, display: 'inline-block' };

    return (
        <div /* style={{backgroundColor: theme.palette.neutralLighter}}*/ className="pb-5 pt-5 mb-5">
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
                                <>Sei iscritto a... </>
                                <Text style={{color: theme.palette.themePrimary}} variant="large">
                                <Typed
                                    strings={[
                                        'scienze della dennissonite?',
                                        'informatica dei dennissonis?',
                                        'medicina delle noci di cocco?'
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
                                {/*Un posto dove ogni studente dell'Università degli Studi di Milano può trovare quello che cerca.*/}
                                Rimani in contatto. Di più, e meglio.
                            </Text>
                        </div>

                        <div>
                            <Text variant="large">
                                {/*La nostra missione è fornire un gruppo Telegram organizzato per ogni insegnamento e per ogni possibile servizio utile.*/}
                                Comunicare è importante, ma può essere frustrante farlo sui grupponi WhatsApp lasciati a loro stessi. Abbiamo creato gruppi Telegram 
                                per ogni corso di laurea dell'Università degli Studi di Milano per facilitare lo scambio di informazioni.
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