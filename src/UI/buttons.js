import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import COLORS from './colors';

const AppButton = ({
 children,
 title = '',
 type = 'filled',
 activeOpacity = 1,
 colorType = 'primary',
 style = {},
 ...rest
}) => (
  <TouchableOpacity
    activeOpacity={activeOpacity}
    style={[
      styles.button,
      styles[`${type}_${colorType}`],
      style,
    ]}
    {...rest}
  >
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {

  },
  filled_primary: {},
  filled_secondary: {},
  unfilled_primary: {},
  unfilled_secondary: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderColor: COLORS.black,
    backgroundColor: 'transparent',
  },
});

export default AppButton;
