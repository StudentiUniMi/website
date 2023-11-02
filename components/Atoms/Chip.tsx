import { Text } from '@fluentui/react'
import { CSSProperties } from 'react';
import { semibold } from 'services/Fonts';
import type { Theme } from '@fluentui/theme';

interface Props {
    label?: string,
    size: string,
    textColor: string,
    bgColor?: string,
    outlined?: boolean,
    theme?: Theme,
    className?: string,
    style?: CSSProperties,
    isLoading?: boolean
};

const Chip = (props: Props) => {
    return (
        <div className={`${props.className ?? ''}${props.isLoading ? ' chip-shimmer' : ''}`} style={Object.assign({
            backgroundColor: props.outlined || !props.bgColor ? "transparent" : props.isLoading ? props.theme?.palette.neutralLight : props.bgColor,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            cursor: 'default',
            borderRadius: 16,
            border: props.outlined && `1px solid ${props.theme?.palette.neutralTertiary}`,
            width: props.isLoading ? randomIntFromInterval(100,150) : 'auto',
            height: props.size === 'small' ? 24 : 32,
            transition: 'all ease-in 0.1s'
        }, props.style)}>
            {!props.isLoading && <Text 
                variant={"small"} 
                styles={semibold} 
                style={{ color: props.textColor, padding: props.size === 'small' ? '0px 8px' : '0px 12px' }}>
                    {props.label}
            </Text>}
        </div>
    )
};

const randomIntFromInterval = (minWidth: number, maxWidth: number) => {
  return Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
};

export default Chip;