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
    let half = Math.ceil(props.degrees.length / 2);
    let firstHalf = props.degrees.slice(0, half);
    let secondHalf = props.degrees.slice(half);

    return (
        <div className="degrees-swiper d-flex flex-column" style={{ gap: 10 }}>

            <Marquee direction={"right"} gradient={false} speed={10}>
                {firstHalf.map((x,i) =>
                    <Text styles={semibold} key={i}>
                        <Chip key={i} label={x} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeDarkAlt }} className="mr-1" />
                    </Text>
                )}
            </Marquee>

            <Marquee direction={"left"} gradient={false} speed={10}>
                {secondHalf.map((x,i) =>
                    <Text styles={semibold} key={i+half}>
                        <Chip key={i+half} label={x} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.themeDarkAlt }} className="mr-1" />
                    </Text>
                )}
            </Marquee>

        </div>
    );
};

export default DegreesMarquee;