import { Text, FontSizes, IIconProps, PrimaryButton, Icon, Image, DefaultButton } from '@fluentui/react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { semibold } from '../../services/fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";

const SecondSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const homeIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size32 };
    const sectionCard = { minHeight: '160px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none', boxShadow: theme.effects.elevation16, backgroundColor: theme.palette.white };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const buttonStyle = { maxWidth: '230px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    const iconStyle = { backgroundColor: theme.palette.themePrimary, color:theme.palette.white, fontSize: '25px', padding: '1px 7px 1px 7px', borderRadius: 3 };

    return (
        <div className="pb-5 pt-5">
            <Container>

                <Row>
                    <Col lg={8}>
                        <div className="mb-2"><Text variant="xLarge" styles={semibold}>Dai un'occhiata alla nostra Wikipedia</Text></div>
                        <div>
                              <div className="mb-2">
                                   <Text variant="large">È una risorsa molto importante, e si basa sul contributo di tutti.
                                   La Wiki è una sezione parallela al nostro sito web: permette di collaborare per quanto riguarda la condivisione di materiale e altre informazioni utili 
                                   sui corsi didattici di tutti i corsi di laurea. 
                                   </Text>
                              </div>
                              <div className="mb-3">
                                   <Text variant="medium">
                                        È una risorsa collaborativa: ricorda che il materiale che hai trovato è stato fornito da altri studenti che ci hanno speso tempo! Sarebbe l'ideale il contributo di tutti.
                                   </Text>
                              </div>
                              <PrimaryButton
                                   text={"Raggiungi la WIki"}
                                   style={buttonStyle}
                                   iconProps={buttonIconProps}
                                   theme={theme}
                              />
                        </div>
                    </Col>

                    <Col lg={4} className="text-center">
                        <Image id="logo" className="mb-2" src={process.env.PUBLIC_URL + '/other/temp/5.png'} style={{ display: 'inline-block', width: '70%' }} />
                    </Col>

               </Row>

            </Container>
        </div>
    )
};

export default SecondSection;