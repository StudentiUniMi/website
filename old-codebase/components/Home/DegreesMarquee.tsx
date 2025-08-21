import { Text, useTheme } from "@fluentui/react"
import { semibold } from "../../services/Fonts"
import Marquee from "react-fast-marquee"
import Chip from "../Atoms/Chip"

interface Props {
  isLoadingDegrees: boolean
  degrees: string[]
}

const DegreesMarquee = (props: Props) => {
  var theme = useTheme()
  let half = Math.ceil(props.degrees.length / 2)
  let firstHalf = props.degrees.slice(0, half)
  let secondHalf = props.degrees.slice(half)

  return (
    <div className="degrees-marquee d-flex flex-column" style={{ gap: 10 }}>
      <Marquee direction={"right"} gradient={false} speed={9}>
        {firstHalf.map((x, i) => (
          <Text styles={semibold} key={i}>
            <Chip
              label={x}
              size="small"
              textColor={theme.palette.white}
              bgColor={theme.palette.themeDarkAlt}
              className="mr-1"
              theme={theme}
              isLoading={props.isLoadingDegrees}
            />
          </Text>
        ))}
      </Marquee>

      <Marquee direction={"left"} gradient={false} speed={9}>
        {secondHalf.map((x, i) => (
          <Text styles={semibold} key={i + half}>
            <Chip
              label={x}
              size="small"
              textColor={theme.palette.white}
              bgColor={theme.palette.themeDarkAlt}
              className="mr-1"
              theme={theme}
              isLoading={props.isLoadingDegrees}
            />
          </Text>
        ))}
      </Marquee>
    </div>
  )
}

export default DegreesMarquee
