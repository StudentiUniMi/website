import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontSizes } from '@fluentui/theme';
import { Text, ITextProps } from 'office-ui-fabric-react/lib/Text';
import { SharedColors } from '@fluentui/theme';
import { getTheme } from '@fluentui/react';
import { Image, IImageProps, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { DefaultPalette, Stack, IStackStyles, IStackTokens, IStackItemStyles, FontWeights } from 'office-ui-fabric-react';
import { Container } from 'react-bootstrap';

const theme = getTheme();

const HeaderTitle = () => {
    return (
        /*
        <div className="navbar">
            <div className="navbar-brand">
                <Image id="logo"
                    src='./logo.png'
                    alt='Network logo'
                    width={60}
                    height={60}
                    className='d-inline-block align-top'
                />
                <Text style={{
                    fontSize: FontSizes.size42,
                    fontWeight: 600,
                    color: '#2b88d8',
                }}>
                    Network Statale Informatica
                    </Text>
            </div>
        </div>
        */
        <div className="header-title m-2">
            <div className="row">
                <div className="col-2">
                    <Image id="logo"
                        src='./logo.png'
                        alt='Network logo'
                        width={60}
                        height={60}
                    />
                </div>
                <div className="col-10">
                    <Text style={{
                        fontSize: FontSizes.size42,
                        fontWeight: 600,
                        color: '#2b88d8'
                    }}>
                        Network Statale Informatica
                    </Text>
                </div>
            </div>
        </div>
    )
};

export default HeaderTitle;