import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontSizes } from '@fluentui/theme';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Image } from 'office-ui-fabric-react/lib/Image';

const HeaderTitle = () => {
    return (
        <div className="header-title m-2">
            <div className="row m-2">

                <span className="mr-2">
                <Image id="logo" className="mr-3"
                    src={process.env.PUBLIC_URL + '/logo.png'}
                    alt='Network logo'
                    width={60}
                    height={60}
                />
                </span>

                <Text style={{
                    fontSize: FontSizes.size42,
                    fontWeight: 600,
                    color: '#2b88d8'
                }}>
                    Network Statale Informatica
                    </Text>

            </div>
        </div>

    )
};

export default HeaderTitle;