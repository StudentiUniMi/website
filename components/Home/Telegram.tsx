import { Text, DefaultButton, IIconProps, useTheme } from '@fluentui/react';
import { bold, semibold } from '../../services/Fonts';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../../services/LocalizationService";
import TelegramPopUp from './TelegramPopUp';

const TelegramSection = () => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    
    var theme = useTheme();
    const locale = LocalizationService.strings();

    const buttonStyle = { maxWidth: 300, height: 40, borderRadius: 3, boxShadow: theme.effects.elevation8, padding: 15 };
    const buttonIconProps: IIconProps = { iconName: 'GoChevronRight', styles: { root: { fontSize: 14 } } };

    return (
        <>
        <TelegramPopUp isPopUpOpen={isPopUpOpen} setIsPopUpOpen={setIsPopUpOpen}/>
            <div className="pb-4 pt-4" style={{ backgroundColor: theme.palette.themePrimary }}>
                <Container>
                    <Row>
                        <Col lg={10} className="mb-2 center-mobile">
                            <div><Text variant="xLarge" styles={bold} style={{color:theme.palette.white}}>{locale?.homepage.telegramTitle}</Text></div>
                            <div><Text variant="xLarge" styles={semibold} style={{color:theme.palette.white}}>{locale?.homepage.telegramText}</Text></div>
                        </Col>
                    
                        <Col lg={2} className="text-right center-mobile" style={{ display: "flex",   alignItems: "center", justifyContent: "center"}}>
                            <DefaultButton onClick={()=>setIsPopUpOpen(true)} text={locale?.homepage.telegramButton} iconProps={buttonIconProps} allowDisabledFocus style={buttonStyle} />
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </>
    )
};

export default TelegramSection;