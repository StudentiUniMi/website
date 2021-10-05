import { Text, IIconProps, PrimaryButton } from '@fluentui/react';
import { semibold } from '../../services/fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";
import { Image } from 'office-ui-fabric-react/lib/Image';

const FirstSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const buttonStyle = { maxWidth: '230px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    return (
        <div className="pb-5 pt-5">
            <Container>

                <Row className="justify-content-around">
                    <Col lg={7} className="mb-4 mb-lg-0">
                        <div className="mb-2"><Text variant="xLarge" styles={semibold}>Un modo completamente ripensato di comunicare</Text></div>

                        <div className="mb-3">
                            <Text variant="medium">
                                Abbiamo creato gruppi Telegram per ogni corso di laurea dell'Università degli Studi di Milano, ma non solo: 
                                abbiamo messo a disposizione anche gruppi per ogni topic, dai tirocini e tesi agli alloggi e materiali universitari.
                            </Text>
                        </div>

                        <PrimaryButton
                            text={"Raggiungi i gruppi"}
                            style={buttonStyle}
                            iconProps={buttonIconProps}
                            theme={theme}
                        />
                    </Col>

                    <Col className="text-center" lg={3}>
                        <Image id="logo" className="mb-2" src={process.env.PUBLIC_URL + '/other/temp/2.png'} style={{ display: 'inline-block', width: '80%' }} />
                    </Col>
                    

                </Row>

            </Container>
        </div>
    )
};

export default FirstSection;