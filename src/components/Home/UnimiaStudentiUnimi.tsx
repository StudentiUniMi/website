import { Text, IIconProps, PrimaryButton, Image } from '@fluentui/react';
import { semibold } from '../../services/fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";

const UnimiaStudentiUnimi = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const buttonStyle = { maxWidth: '230px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    return (
        <div className="pb-5 pt-5">
            <Container>

                <Row>
                    <Col lg={8}>
                        <div className="mb-2"><Text variant="xLarge" styles={semibold}>Unimia non funziona? Nessun problema!</Text></div>
                        <div>
                              <div className="mb-2">
                                   <Text variant="large">Essendo studenti, sappiamo quanto può essere frustrante dover cercare le risorse universitarie
                                   passando per decine di pagine che neanche caricano.
                                   </Text>
                              </div>
                              <div className="mb-3">
                                   <Text variant="medium">
                                        Per questo motivo, abbiamo realizzato una pagina che permette di raggiungere
                                        tutti i servizi universitari a portata di click, in aggiunta ad alcune guide che abbiamo realizzato.
                                   </Text>
                              </div>
                              <PrimaryButton
                                   text={"unimia.studentiunimi.it"}
                                   style={buttonStyle}
                                   iconProps={buttonIconProps}
                                   theme={theme}
                                    href="https://unimia.studentiunimi.it/"
                                    className="text-decoration-none"
                              />
                        </div>
                    </Col>

                    <Col lg={4} className="text-center">
                        <Image src={process.env.PUBLIC_URL + '/other/temp/22.png'} style={{ display: 'inline-block', width: '60%' }} />
                    </Col>

               </Row>

            </Container>
        </div>
    )
};

export default UnimiaStudentiUnimi;