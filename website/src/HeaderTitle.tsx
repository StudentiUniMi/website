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
        <div className="header-title m-2">
            <Stack horizontal horizontalAlign="space-between" >

                <Text style={{
                    fontSize: FontSizes.size42,
                    fontWeight: 600,
                    color: '#2b88d8'
                }}>
                    Network Statale Informatica
                    </Text>
                <Image id="logo"
                    src='./logo.png'
                    alt='Network logo'
                    width={60}
                    height={60}
                />
            </Stack>
        </div>
        */


        <div className="header-title m-2">
            <div className="row m-2">

                <Image id="logo" className="mr-3"
                    src='./logo.png'
                    alt='Network logo'
                    width={60}
                    height={60}
                />

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