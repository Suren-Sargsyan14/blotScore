import React from 'react';
import { StyleSheet, StatusBar, View, ImageBackground, Dimensions } from 'react-native';

import { flexStyle } from '.';

const { width, height } = Dimensions.get('window');

export default ({
  children,
  style = {},
  translucent = false,
  imageBackground = false,
  barStyle = 'dark-content',
  barBackgroundColor = 'transparent',
}) => (
  <View style={[styles.container, flexStyle.flex1, style]}>
    <StatusBar
      barStyle={barStyle}
      translucent={translucent}
      backgroundColor={barBackgroundColor}
    />
    {imageBackground && (
      <ImageBackground
        source={imageBackground}
        style={styles.imageBackground}
      />
    )}
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
  },
  imageBackground: {
    width,
    top: 0,
    left: 0,
    position: 'absolute',
    height: height + StatusBar.currentHeight,
  },
});
