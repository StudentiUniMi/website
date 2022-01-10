import { Link, Text, Label } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';
import { bold, semibold } from '../../services/Fonts';
import { useTheme } from '@fluentui/react-theme-provider';
import { useCookies } from 'react-cookie';
import { IIconProps, PrimaryButton, Toggle, TooltipHost, IconButton, SwatchColorPicker, ITooltipHostStyles, TooltipDelay } from '@fluentui/react';
import { palettes } from '../../services/Palettes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addDays } from '../../services/Utils';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LocalizationService from "../../services/LocalizationService";

library.add(fab, faCommentDots);
const listElement = { marginBottom: '.2rem' };

const footerIcons: any = [
    { name: { it: 'Canale Telegram', en: 'Telegram Channel' }, link: 'https://t.me/studenti_unimi', iconName: 'telegram-plane', type: 'brand' },
    { name: { it: 'Gruppo Principale', en: 'Main Group' }, link: 'https://t.me/unimichat', iconName: 'comment-dots', type: 'normal' },
    { name: { it: 'Canale Discord', en: 'Discord Channel' }, link: 'https://discord.gg/SwPzAkv4A4', iconName: 'discord', type: 'brand' },
    { name: { it: 'Organizzazione GitHub', en: 'GitHub Organization' }, link: 'https://github.com/StudentiUnimi', iconName: 'github', type: 'brand' },
    { name: { it: 'Pagina Facebook', en: 'Facebook Page' }, link: 'https://www.facebook.com/networkstudentiunimi', iconName: 'facebook', type: 'brand' },
    { name: { it: 'Pagina Instagram', en: 'Instagram Page' }, link: 'https://www.instagram.com/studentiunimi.it/', iconName: 'instagram', type: 'brand' },
];

interface Props { changeTheme: () => void, changePalette: (id: string) => void, changeLanguage: (language: string) => void };

const Footer = (props: Props) => {
    var theme = useTheme();
    const [cookies, setCookie] = useCookies();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    const date: Date = addDays(new Date(), 90);

    const themeToggled = () => {
        if (cookies["theme"] === "dark") setCookie("theme", "light", { path: "/", expires: date });
        else { setCookie("theme", "dark", { path: "/", expires: date }); }
        props.changeTheme();
    };

    const changeLanguage = (lang: string) => {
        LocalizationService.localize(lang);
        setCookie("language", lang, { path: "/", expires: date });
        props.changeLanguage(lang);
    };
    
    const wrapIconStyle = { backgroundColor: theme.palette.themeSecondary, borderRadius: '50%', minWidth: 30, minHeight: 30, display: 'inline-block', textAlign: 'center', justifyContent: 'center', verticalAlign: 'middle' } as React.CSSProperties;
    const iconStyle = { color: theme.palette.white, fontSize: '17px', marginTop: 6 };

    const buttonStyle = { maxWidth: '270px', boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    /* Theme palette code */
    const colorCells: any[] = palettes.map(x => ({ id: x.id, label: x.label, color: x.palette?.themePrimary }));
    const resetColorIcon: IIconProps = { iconName: 'SyncOccurence' };
    const calloutPropsResetColor = { gapSpace: 10 };
    const hostStylesResetColor: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

    return (
        <footer style={{ backgroundColor: theme.palette.neutralQuaternaryAlt, borderTop: '1px solid', borderColor: theme.palette.neutralLight }} className="pt-4 pb-4">
            <Container style={{ width: '100%', color: theme.palette.neutralSecondary }}>

                <Row className="mb-4">
                    <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mb-4 mb-md-0">
                        <div className="mb-2">
                            <Text styles={semibold} style={{ color: theme.palette.themePrimary }} variant="large">
                                &copy; Network StudentiUniMi
                            </Text>
                        </div>

                        <div className="mb-2 text">
                            <PrimaryButton text={locale?.footer[0].buttonText} iconProps={buttonIconProps} href="https://t.me/unimichat" className="text-decoration-none" allowDisabledFocus style={buttonStyle} />
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
                                checked={cookies["theme"] === "dark"}
                                onChange={themeToggled}
                                theme={theme}
                            />
                        </div>
                        
                        <div className="mb-2 language-selector">
                            <Label>{locale?.settingsPanel.selectLanguage}</Label>
                            <Text 
                                variant="medium" 
                                style={{ cursor: 'pointer' }} 
                                styles={cookies["language"] === "it" ? bold : {}} onClick={() => { changeLanguage("it") } }
                            >
                                ITA
                            </Text>
                            
                            <Text variant="medium"> | </Text>

                            <Text 
                                variant="medium" 
                                style={{ cursor: 'pointer' }} 
                                styles={cookies["language"] === "en" ? bold : {}} onClick={() => { changeLanguage("en") }}
                            >
                                ENG
                            </Text>
                        </div>
                    </Col>

                    <Col xl={3} lg={4} md={6} sm={12} xs={12}>
                        <div>
                            <Text variant="medium" styles={semibold}>{locale?.settingsPanel.selectColor}  </Text>
                            <TooltipHost
                                content="Reset color"
                                calloutProps={calloutPropsResetColor}
                                styles={hostStylesResetColor}
                            >
                                <IconButton iconProps={resetColorIcon} onClick={() => { setCookie("palette", 'a', { path: "/", expires: date }); props.changePalette('a'); }} />
                            </TooltipHost>
                            <SwatchColorPicker selectedId={cookies["palette"]} columnCount={7} cellShape={'square'} colorCells={colorCells} onColorChanged={(id) => { setCookie("palette", id, { path: "/", expires: date }); props.changePalette(id!); }} />
                        </div>
                    </Col>
                
                </Row>


                <Row>
                    <Col lg={6} sm={12} style={{ display: 'table' }} className="center-mobile mb-2">
                        <Text variant="medium"  style={{  display: 'table-cell', verticalAlign: 'middle' }}>
                            {locale?.footer[0].text}
                        </Text>
                    </Col>

                    <Col lg={6} sm={12}>
                        <div className="mb-1 text-right center-mobile">
                            {footerIcons.map( (x: any, i: number) => { 
                                return (
                                    <TooltipHost
                                        content={x.name[language!]}
                                        calloutProps={calloutPropsResetColor}
                                        styles={hostStylesResetColor}
                                        key={i}
                                        delay={TooltipDelay.zero}
                                    >
                                        <Link href={x.link}>
                                            <span style={wrapIconStyle} className="text-decoration mr-1">
                                                { x.type === 'brand' ?
                                                <FontAwesomeIcon icon={['fab', x.iconName]} style={iconStyle} />
                                                :
                                                <FontAwesomeIcon icon={x.iconName} style={iconStyle} /> }
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