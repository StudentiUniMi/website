import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Image } from 'office-ui-fabric-react/lib/Image';

const HeaderTitle = () => {
    return (
        <div className="header-title m-2">

            {/* Large devices */}
            <div className="large-display">
                <div className="row m-2">

                    <span className="mr-1">
                        <Image id="logo" className="mr-3"
                            src={process.env.PUBLIC_URL + '/logo_studenti_unimi_150x143.png'}
                            alt='Network logo'
                            width={70}
                            height={70}
                        />
                    </span>

                    <Text style={{
                        fontSize: FontSizes.size42,
                        fontWeight: 600,
                        color: '#2b88d8'
                    }}>
                        Network Studenti UniMi
                    </Text>

                </div>
            </div>

            {/* Medium and small devices */}
            <div className="small-display">
                <div className="row mt-2 mr-2 mb-2 text-center justify-content-center logo-text">

                    <span className="mr-1">
                        <Image id="logo" className="mr-3"
                            src={process.env.PUBLIC_URL + '/logo_studenti_unimi_150x143.png'}
                            alt='Network logo'
                            width={70}
                            height={70}
                        />
                    </span>

                    <Text style={{
                        fontSize: FontSizes.size42,
                        fontWeight: 600,
                        color: '#2b88d8'
                    }}>
                        Network
                    </Text>

                </div>

                <div className="row m-2 text-center justify-content-center">
                    <Text style={{
                        fontSize: FontSizes.size42,
                        fontWeight: 600,
                        color: '#2b88d8'
                    }}>
                        Studenti UniMi
                    </Text>
                </div>
            </div>

            {/*
            <Container className="small-display m-0 p-0">
                <div className="row m-2">
                    <div className="col-sm-2 col-xs-2">
                        <Image id="logo" className="mr-1"
                            src={process.env.PUBLIC_URL + '/logo.png'}
                            alt='Network logo'
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className="col-sm-10 col-xs-10">
                        <Text style={{
                            fontSize: FontSizes.size42,
                            fontWeight: 600,
                            color: '#2b88d8'
                        }}>
                            Network 
                        </Text>
                    </div>
                    <div className="col-sm-12 col-xs-12">
                    <Text style={{
                            fontSize: FontSizes.size42,
                            fontWeight: 600,
                            color: '#2b88d8'
                        }}>
                        Statale Informatica
                        </Text>
                    </div>
                </div>
            </Container>
            */}
        </div>

    )
};

export default HeaderTitle;