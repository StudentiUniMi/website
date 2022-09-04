import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib-commonjs/Text';
import { Image } from 'office-ui-fabric-react/lib-commonjs/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderMenu from './HeaderMenu';
import { useTheme } from '@fluentui/react-theme-provider';
import { FontWeights, ITextStyles, Link } from 'office-ui-fabric-react';

const Header = () => {
    var theme = useTheme();
    const logoProperties = { width: 25, height: 25, marginTop: 3 };
    const logoFileName = 'unimi150.png';
    const titleStyle: ITextStyles = { root: { fontSize: FontSizes.size20, fontWeight: FontWeights.semibold, color: theme.palette.themePrimary } };
    
    return (
        <header style={{ borderBottom: '1px solid', borderColor: theme.palette.neutralLight, marginBottom: -1 }}>

            <Row className="headerRow" style={{ marginRight: 15, marginLeft: 15, marginBottom: 0 }}>
                <Col style={{ maxWidth: 250, paddingLeft: 0, paddingRight: 0, display: 'flex', alignItems: 'center' }}>
                    <div className="d-flex align-items-center" style={{ width: 250, gap: 10 }}>
                        <Link href="http://studentiunimi.it/">
                            <Image id="logo"
                                src={'/logo/' + logoFileName}
                                alt='Network logo'
                                style={logoProperties}
                            />
                        </Link>

                        <Link href="http://studentiunimi.it/" className="text-decoration-none">
                            <Text styles={titleStyle}>Network StudentiUniMi</Text>
                        </Link>
                    </div>
                </Col>

                <Col style={{ paddingLeft: 0, paddingRight: 0 }} className="header-col">
                    <HeaderMenu/>
                </Col>

            </Row>
        
        </header>
    )
};

export default Header;