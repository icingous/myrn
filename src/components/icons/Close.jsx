import { Svg, Path } from 'react-native-svg';

import React from 'react';

const Close = ({ fill = 'none', stroke = 'currentColor' }) => {
  return (
    <Svg fill={fill} viewBox='0 0 24 24' stroke-width='1.5' stroke={stroke}>
      <Path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M6 18 18 6M6 6l12 12'
      />
    </Svg>
  );
};

export default Close;
