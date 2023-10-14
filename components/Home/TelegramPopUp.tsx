import { Text, DefaultButton, useTheme, Modal } from '@fluentui/react';
import { bold } from '../../services/Fonts';
import LocalizationService from "../../services/LocalizationService";

interface Props{
  isPopUpOpen: boolean,
  setIsPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>,
}


const TelegramPopUp = (props: Props) => {
    var theme = useTheme();
    const locale = LocalizationService.strings();

    const ModalStyle  = { root: {
        selectors: {
          '.ms-Dialog-main': {
            maxWidth: '800px !important',
          },
        },
      }, main: { display: "flex", maxHeigth: "100%", boxShadow: theme.effects.elevation8, padding: 15, borderTop: `4px solid ${theme.palette.themePrimary}`, textAlign: 'center'}
    }
    const buttonStyle = { maxWidth: 300, height: 40, borderRadius: 3, boxShadow: theme.effects.elevation8, padding: 15 };


    return (
        <Modal
          isOpen={props.isPopUpOpen}
          styles={ModalStyle}
        >
            
          <div><Text variant="xLarge" styles={bold} style={{color:theme.palette.black }}>{locale?.homepage.telegramPopUP.title}</Text></div>

          <p style={{textAlign: 'left'}}><Text variant="large"  style={{color:theme.palette.black}}>{locale?.homepage.telegramPopUP.text1}</Text></p>
          <p style={{textAlign: 'left'}}><Text variant="large"  style={{color:theme.palette.black}}>{locale?.homepage.telegramPopUP.text2}</Text></p>
          <p style={{textAlign: 'left'}}><Text variant="large"  style={{color:theme.palette.black}}>{locale?.homepage.telegramPopUP.text3}</Text></p>
          <p style={{textAlign: 'left'}}><Text variant="large"  style={{color:theme.palette.black}}>{locale?.homepage.telegramPopUP.text4}</Text></p>
          <p style={{textAlign: 'left'}}><Text variant="large"  style={{color:theme.palette.black}}>{locale?.homepage.telegramPopUP.text5}</Text></p>
          <p style={{textAlign: 'left'}}><Text variant="large"  style={{color:theme.palette.black}}>{locale?.homepage.telegramPopUP.text6}</Text></p>

          <DefaultButton onClick={()=>props.setIsPopUpOpen(false)} text={locale?.homepage.telegramPopUP.textButton} allowDisabledFocus style={buttonStyle} />
            
        </Modal>
    )
};

export default TelegramPopUp;