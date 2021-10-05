import { Text, FontSizes, IIconProps, PrimaryButton, Icon, Image } from '@fluentui/react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import { semibold } from '../../services/fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";

const FourthSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();
    const homeIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size32 };
    const sectionCard = { minHeight: '160px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none', boxShadow: theme.effects.elevation16, backgroundColor: theme.palette.white };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const buttonStyle = { maxWidth: '200px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };
    const iconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size24 };

    return (
        <div className="pb-5 pt-5" style={{ backgroundColor: theme.palette.neutralLighterAlt }}>
            <Container>
                <div className="mb-4 text-center"><Text variant="xLarge" styles={semibold}>Cerchi un amministratore, o magari un rappresentante?</Text></div>

                <Row>
                    <Col className="text-center">
                        <Image className="mb-3" src={process.env.PUBLIC_URL + '/other/temp/rapp.png'} style={{ display: 'inline-block', width: '40%' }} />
                        <div className="mb-2">
                            <Text variant="medium" styles={semibold}>Contatta un rappresentante</Text>
                        </div>
                        <div className="mb-3" style={{marginLeft: 30, marginRight: 30}}>
                            <Text variant="medium">Per contattare un rappresentante devi raggiungere la sezione apposita del sito web, e selezionare il tuo dipartimento.</Text>
                        </div>
                        <PrimaryButton
                            text={"Raggiungi la sezione"}
                            style={buttonStyle}
                            iconProps={buttonIconProps}
                            theme={theme}
                        />
                    </Col>
                
                    <Col className="text-center">
                        <Image className="mb-3" src={process.env.PUBLIC_URL + '/other/temp/admin.png'} style={{ display: 'inline-block', width: '35%' }} />
                        <div className="mb-2">
                            <Text variant="medium" styles={semibold}>Contatta un amministratore</Text>
                        </div>
                        <div className="mb-3" style={{marginLeft: 30, marginRight: 30}}>
                            <Text variant="medium">Per vedere la lista di amministratori del tuo corso di laurea devi cercare quest'ultimo nella sezione apposita del sito web.</Text>
                        </div>
                        <PrimaryButton
                            text={"Raggiungi la sezione"}
                            style={buttonStyle}
                            iconProps={buttonIconProps}
                            theme={theme}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default FourthSection;