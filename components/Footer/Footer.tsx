import { Link, Text, Label, useTheme } from '@fluentui/react';
import { Container } from 'react-bootstrap';
import { bold, semibold } from '../../services/Fonts';
import { Icon, IIconProps, PrimaryButton, Toggle, TooltipHost, SwatchColorPicker, ITooltipHostStyles, TooltipDelay } from '@fluentui/react';
import { palettes } from '../../services/Palettes';
import { useContext } from 'react';
import { preventDefault, preventVisibleHref } from 'services/Utils';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../../services/LocalizationService";
import GlobalContext from 'services/GlobalContext';

const listElement = { marginBottom: '.2rem' };

const footerIcons: any = [
    { name: { it: 'Canale Telegram', en: 'Telegram Channel' }, link: 'https://t.me/studenti_unimi', iconName: 'FaTelegram' },
    { name: { it: 'Canale Discord', en: 'Discord Channel' }, link: 'https://discord.gg/SwPzAkv4A4', iconName: 'FaDiscord' },
    { name: { it: 'Organizzazione GitHub', en: 'GitHub Organization' }, link: 'https://github.com/StudentiUnimi', iconName: 'FaGithub' },
    { name: { it: 'Pagina Facebook', en: 'Facebook Page' }, link: 'https://www.facebook.com/networkstudentiunimi', iconName: 'FaFacebook' },
    { name: { it: 'Pagina Instagram', en: 'Instagram Page' }, link: 'https://www.instagram.com/studentiunimi.it/', iconName: 'FaInstagram' },
];

interface Props { 
    appTheme: boolean,
    language: string,
    palette: string,
    changeTheme: () => void, 
    changePalette: (id: string) => void, 
    changeLanguage: (language: string) => void 
};

const Footer = (props: Props) => {
    var theme = useTheme();
    let appTheme = props.appTheme;
    let language = props.language;
    let palette = props.palette;
    const locale = LocalizationService.strings();
    var lang: string | undefined = LocalizationService.getLanguage();
    const { isPolicyAccepted, togglePolicyDialog } = useContext(GlobalContext);

    const changeTheme = () => props.changeTheme();
    const changeLanguage = (language: string) => props.changeLanguage(language);
    const changePalette = (paletteId: string) => props.changePalette(paletteId);
    
    const wrapIconStyle = { backgroundColor: theme.palette.themeSecondary, marginRight: 5, borderRadius: 5, padding: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' } as React.CSSProperties;
    const iconStyle = { color: theme.palette.white, fontSize: 20, margin: 0, display: 'flex' };
    
    const buttonStyle = { maxWidth: '270px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'GoChevronRight', styles: { root: { fontSize: 14 } } };

    /* Theme palette code */
    const colorCells: any[] = palettes.map(x => ({ id: x.id, label: x.label, color: x.palette?.themePrimary }));
    const calloutPropsResetColor = { gapSpace: 10 };
    const hostStylesResetColor: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

    return (
        <footer style={{ backgroundColor: theme.palette.neutralQuaternaryAlt, borderTop: '1px solid', borderColor: theme.palette.neutralLight }} className="pt-5 pb-5">
            <Container style={{ width: '100%', color: theme.palette.neutralSecondary }}>

                <Row className="mb-4">
                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mb-4 mb-md-0">
                        <div className="mb-2">
                            <Text styles={semibold} style={{ color: theme.palette.themePrimary }} variant="large">
                                &copy; Network StudentiUniMi
                            </Text>
                        </div>

                        <div className="mb-2 text">
                            <PrimaryButton 
                                href={preventVisibleHref(isPolicyAccepted, "https://t.me/unimichat")} onClick={(e) => preventDefault(e, isPolicyAccepted) && togglePolicyDialog()}
                                text={locale?.footer[0].buttonText} 
                                iconProps={buttonIconProps} 
                                allowDisabledFocus 
                                style={buttonStyle} 
                            />
                        </div>
                    </Col>
                    

                    <Col xl={2} lg={2} md={3} sm={12} xs={12} className="mb-2 mb-md-0">
                        <div>
                            <div className="mb-2">
                                <Text styles={semibold} variant="medium">{locale?.footer[1].header}</Text>
                            </div>

                            <div>
                                <Text variant="medium">
                                    <ul className="list-unstyled mb-3">
                                        <li style={listElement}>
                                            <Link href="http://www.quickunimi.it/">QuickUnimi</Link>
                                        </li>
                                        <li style={listElement}>
                                            <Link href="https://codeshare.tech">Codeshare.tech</Link>
                                        </li>
                                    </ul>
                                </Text>
                            </div>
                        </div>
                    </Col>
                    
                    <Col xl={3} lg={2} md={3} sm={12} xs={12}>
                        <div className="mb-2">
                            <Toggle
                                label={locale?.settingsPanel.changeTheme}
                                onText={locale?.settingsPanel.darkTheme}
                                offText={locale?.settingsPanel.lightTheme}
                                checked={appTheme}
                                onChange={changeTheme}
                                theme={theme}
                            />
                        </div>
                        
                        <div className="mb-2 language-selector">
                            <Label>{locale?.settingsPanel.selectLanguage}</Label>
                            <Text 
                                variant="medium" 
                                style={{ cursor: 'pointer' }} 
                                styles={language === "it" ? bold : {}} onClick={() => { changeLanguage("it") } }
                            >
                                ITA
                            </Text>
                            
                            <Text variant="medium"> | </Text>

                            <Text 
                                variant="medium" 
                                style={{ cursor: 'pointer' }} 
                                styles={language === "en" ? bold : {}} onClick={() => { changeLanguage("en") }}
                            >
                                ENG
                            </Text>
                        </div>
                    </Col>

                    <Col xl={3} lg={4} md={6} sm={12} xs={12}>
                        <div>
                            <Text variant="medium" styles={semibold}>{locale?.settingsPanel.selectColor}</Text>
                        </div>
                        <SwatchColorPicker selectedId={palette} columnCount={7} cellShape={'square'} colorCells={colorCells} onColorChanged={(id) => { changePalette(id!); }} />
                    </Col>
                
                </Row>


                <Row>
                    <Col lg={7} sm={12} style={{ display: 'table' }} className="center-mobile mb-2 mb-lg-0">
                        <Text variant="medium"  style={{  display: 'table-cell', verticalAlign: 'middle' }}>
                            {locale?.footer[0].text} <Link href="https://cdn.studentiunimi.it/privacy-policy-IT.pdf" styles={semibold}>Privacy policy</Link>
                        </Text>
                    </Col>

                    <Col lg={5} sm={12}>
                        <div className="text-right center-mobile">
                            {footerIcons.map( (x: any, i: number) => { 
                                return (
                                    <TooltipHost
                                        content={x.name[lang!]}
                                        calloutProps={calloutPropsResetColor}
                                        styles={hostStylesResetColor}
                                        key={i}
                                        delay={TooltipDelay.zero}
                                    >
                                        <Link href={x.link}>
                                            <span style={wrapIconStyle} className="text-decoration">
                                                <Icon iconName={x.iconName} style={iconStyle} />
                                            </span>
                                        </Link>
                                    </TooltipHost>
                                )}
                            )}
                        </div>
                    </Col>

                </Row>

            </Container>
        </footer>
    )
};

export default Footer;