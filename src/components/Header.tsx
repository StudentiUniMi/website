import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Image } from 'office-ui-fabric-react/lib/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderMenu from './HeaderMenu';
import { useTheme } from '@fluentui/react-theme-provider';
import { FontWeights, ITextStyles, Link } from 'office-ui-fabric-react';

interface Props { changeTheme: () => void, changePalette: (id: string) => void };

const Header = (props: Props) => {
    var theme = useTheme();
    const logoProperties = { width: 25, height: 25, marginTop: '5px', marginBottom: '5px' };
    const logoFileName = 'unimi150.png';
    const titleStyle: ITextStyles = { root: { fontSize: FontSizes.size20, fontWeight: FontWeights.semibold, color: theme.palette.themePrimary } };
    
    return (
        <header className="mt-2" style={{ borderBottom: '1px solid', borderColor: theme.palette.neutralLight, marginBottom: -1 }}>

            <div>
                <Row className="headerRow">
                    <Col style={{ maxWidth: 250, paddingLeft: 0, paddingRight: 0 }}>
                        <div style={{ width: 250 }}>
                            <Link href="http://studentiunimi.it/">
                                <Image id="logo"
                                    src={process.env.PUBLIC_URL + '/logo/' + logoFileName}
                                    alt='Network logo'
                                    style={logoProperties}
                                    className="mr-2 mt-2 mb-1 d-inline"
                                />
                            </Link>

                            <div className="d-inline mt-2"><Link href="http://studentiunimi.it/" className="text-decoration-none"><Text styles={titleStyle}>Network StudentiUniMi</Text></Link></div>
                        </div>
                    </Col>

                    <Col style={{ paddingLeft: 0, paddingRight: 0, marginTop: -6, width: "55%" }}>
                        <HeaderMenu changeTheme={props.changeTheme} changePalette={props.changePalette} />
                    </Col>

                </Row>
            </div>
        
        </header>
    )
};

export default Header;