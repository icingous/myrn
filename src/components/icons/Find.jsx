import Svg, { Path } from "react-native-svg";

const Find = ({ fill = "none", stroke = "currentColor" }) => {
  return (
    <Svg fill={fill} viewBox="0 0 24 24" stroke-width="1.5" stroke={stroke}>
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </Svg>
  );
};

export default Find;
