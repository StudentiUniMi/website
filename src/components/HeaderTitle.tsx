import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Image } from 'office-ui-fabric-react/lib/Image';
import Row from 'react-bootstrap/Row';

const logoProperties = {
    width: '60px',
    height: '60px',
    marginTop: '5px',
    marginBottom: '5px'
}

const logoFileName = 'unimi150.png';
const titleStyle = {
    fontSize: FontSizes.size42,
    fontWeight: 600,
    color: '#2b88d8',
    fontFamily: 'Corbel'
};

const HeaderTitle = () => {
    return (
        <div className="header-title m-2">

            {/* Large devices */}
            <div className="large-display">
                <Row className="m-2">

                    <span className="mr-1">
                        <Image id="logo" className="mr-3"
                            src={process.env.PUBLIC_URL + '/' + logoFileName}
                            alt='Network logo'
                            style={logoProperties}
                        />
                    </span>

                    <Text style={titleStyle}>
                        Network Studenti UniMi
                    </Text>

                </Row>
            </div>

            {/* Medium and small devices */}
            <div className="small-display">
                <Row className="mt-2 mr-2 mb-2 text-center justify-content-center logo-text">

                    <span className="mr-1">
                        <Image id="logo" className="mr-2"
                            src={process.env.PUBLIC_URL + '/' + logoFileName}
                            alt='Network logo'
                            style={logoProperties}
                        />
                    </span>

                    <Text style={titleStyle}>Network</Text>

                </Row>

                <Row className="m-2 text-center justify-content-center">
                    <Text style={titleStyle}>Studenti UniMi</Text>
                </Row>
            </div>
        
        </div>
    )
};

export default HeaderTitle;