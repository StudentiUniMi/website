import * as React from 'react';
import './App.css';
import { FontSizes } from '@fluentui/theme';
import { Text, ITextProps } from 'office-ui-fabric-react/lib/Text';
import { SharedColors } from '@fluentui/theme';
import { getTheme } from '@fluentui/react';
import { Image, IImageProps, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { DefaultPalette, Stack, IStackStyles, IStackTokens, IStackItemStyles, FontWeights } from 'office-ui-fabric-react';

const theme = getTheme();

const HeaderTitle = () => {
    return (
        <Stack horizontal disableShrink id="header-title">
            <span>
                <Image id="logo"
                    src='./logo.png'
                    alt='Network logo'
                    width={60}
                    height={60}
                />
            </span>

            <Text>
                <span className="ms-Grid-col ms-sm6 ms-md8 ms-lg2" style={{
                    fontSize: FontSizes.size42,
                    fontWeight: 600
                }}>
                    &nbsp;Network Statale Informatica
                </span>
            </Text>

        </Stack>
    )
};

export default HeaderTitle;