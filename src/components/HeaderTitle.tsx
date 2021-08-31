import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Image } from 'office-ui-fabric-react/lib/Image';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import { FontWeights, ITextStyles, Link } from 'office-ui-fabric-react';

const HeaderTitle = () => {
    var theme = useTheme();
    const logoProperties = { width: '60px', height: '60px', marginTop: '5px', marginBottom: '5px' };
    const logoFileName = 'unimi150.png';
    const titleStyle: ITextStyles = { root: { fontSize: FontSizes.size42, fontWeight: FontWeights.semibold, color: theme.palette.themePrimary } };
    
    return (
        <div className="header-title m-2">

            {/* Large devices */}
            <div className="large-display">
                <Row className="m-2 mb-0">

                    <span className="mr-1">
                        <Link href="http://studentiunimi.it/">
                            <Image id="logo" className="mr-3"
                                src={process.env.PUBLIC_URL + '/logo/' + logoFileName}
                                alt='Network logo'
                                style={logoProperties}
                            />
                        </Link>
                    </span>

                    <Text styles={titleStyle}>Network StudentiUniMi</Text>

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
        
        </div>
    )
};

export default HeaderTitle;