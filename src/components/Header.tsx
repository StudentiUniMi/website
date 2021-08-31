import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Image } from 'office-ui-fabric-react/lib/Image';
import Row from 'react-bootstrap/Row';
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
        <header className="header-title ml-2 mr-2" style={{ borderBottom: '1px solid', borderColor: theme.palette.neutralLight }}>

            {/* Large devices */}
            <div className="large-display">
                <Row className="ml-2 mr-2 mb-0">

                    <span className="mr-1 mt-2">
                        <Link href="http://studentiunimi.it/">
                            <Image id="logo" className="mr-2"
                                src={process.env.PUBLIC_URL + '/logo/' + logoFileName}
                                alt='Network logo'
                                style={logoProperties}
                            />
                        </Link>
                    </span>

                    <Text styles={titleStyle} className="mt-2">Network StudentiUniMi</Text>

                    <HeaderMenu changeTheme={props.changeTheme} changePalette={props.changePalette} />

                </Row>
            </div>

            {/* Medium and small devices */}
            <div className="small-display">
                <Row className="mt-2 mr-2 mb-0 text-center justify-content-center logo-text">

                    <span className="mr-1">
                        <Link href="http://studentiunimi.it/">
                            <Image id="logo" className="mr-2"
                                src={process.env.PUBLIC_URL + '/logo/' + logoFileName}
                                alt='Network logo'
                                style={logoProperties}
                            />
                        </Link>
                    </span>

                    <Text styles={titleStyle}>Network</Text>

                </Row>

                <Row className="mt-0 mr-2 ml-2 text-center justify-content-center">
                    <Text styles={titleStyle}>StudentiUniMi</Text>
                </Row>
            </div>
        
        </header>
    )
};

export default Header;