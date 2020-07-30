import React from 'react';
import { StyleSheet, Text } from 'react-native';

import COLORS, { isDark } from './colors';

export const TextRegular = ({
  children,
  style = {},
  colorType = 'primary',
  ...rest
}) => (
  <Text
    style={[
      ColorTypes[colorType],
      style,
    ]}
    {...rest}
  >
    {children}
  </Text>
);

export const TextBold = ({
  children,
  style = {},
  colorType = 'primary',
  center = false,
  ...rest
}) => (
  <Text
    style={[
      styles.fontBold,
      center && styles.center,
      ColorTypes[colorType],
      style,
    ]}
    {...rest}
  >
    {children}
  </Text>
);

const styles = StyleSheet.create({
  fontBold: {
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },
});

const ColorTypes = StyleSheet.create({
  primary: {
    color: !isDark ? COLORS.navy : COLORS.navy,
  },
  secondary: {
    color: !isDark ? COLORS.lightGreen : COLORS.lightGreen,
  },
});
