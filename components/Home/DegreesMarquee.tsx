import { useTheme } from '@fluentui/react-theme-provider';
import { Text } from 'office-ui-fabric-react/lib-commonjs';
import { semibold } from '../../services/Fonts';
import Marquee from "react-fast-marquee";
import Chip from '@material-ui/core/Chip';

interface Props {
    degrees: string[]
};

const DegreesMarquee = (props: Props) => {
    var theme = useTheme();
    let firstHalf = props.degrees.slice(0, Math.ceil(props.degrees.length / 2));
    let secondHalf = props.degrees.slice(Math.ceil(props.degrees.length / 2));

    return (
        <div className="degrees-swiper d-flex flex-column" style={{ gap: 10 }}>

            <Marquee direction={"right"} gradient={false} speed={10}>
                {firstHalf.map(x =>
                    <Text styles={semibold}>
                        <Chip label={x} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeDarkAlt }} className="mr-1" />
                    </Text>
                )}
            </Marquee>

            <Marquee direction={"left"} gradient={false} speed={10}>
                {secondHalf.map(x =>
                    <Chip label={x} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeDarkAlt }} className="mr-1" />
                )}
            </Marquee>

        </div>
    );
};

export default DegreesMarquee;