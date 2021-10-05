import { Text, FontSizes, IIconProps, PrimaryButton, Icon } from '@fluentui/react';
import { Card, ICardTokens } from "@uifabric/react-cards";
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
    const homeIconStyle = { color: theme.palette.themePrimary, fontSize: FontSizes.size32 };
    const sectionCard = { minHeight: '160px', height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none', boxShadow: theme.effects.elevation16, backgroundColor: theme.palette.white };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const buttonStyle = { maxWidth: '230px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    return (
        <div className="pb-5 pt-5">
            <Container>

                <Row>
                    <Col lg={8}>
                        <div className="mb-2"><Text variant="xLarge" styles={semibold}>Un nuovo modo completamente ripensato di comunicare</Text></div>
                        <div className="mb-3"><Text variant="medium">Abbiamo creato gruppi Telegram per ogni corso di laurea dell'Università degli Studi di Milano, ma non solo: abbiamo anche 
                        messo a disposizione gruppi per ogni topic, dai tirocini e tesi agli alloggi e materiali universitari.</Text></div>

                        <PrimaryButton
                            text={"Raggiungi i gruppi"}
                            style={buttonStyle}
                            iconProps={buttonIconProps}
                            theme={theme}
                        />
                    </Col>

                    <Col className="text-center" lg={4}>
                        <Image id="logo" className="mb-2" src={process.env.PUBLIC_URL + '/other/temp/3.png'} style={{ display: 'inline-block', width: '70%' }} />
                    </Col>
                    

                </Row>


                {/* La seconda sezione sui servizi: metti un elenco specificando unimia.studentiunimi.it, la wiki, hedgedoc ecc. 
                Per le faq stessa struttura ma metti una pic con dei punti interrogativi o qualcosa del genere. */}


            </Container>
        </div>
    )
};

export default FirstSection;