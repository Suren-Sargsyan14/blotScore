import React from 'react';
import { View } from 'react-native';

import {
  Teams,
  ApplyScoreOut,
  ScoreOutContent,
} from '../Components';

import { AppContainer } from '../UI';

import styles from '../Styles/scoreOut.screen.style';

import backgroundImage from '../assets/images/ZLohmG.jpg';

const ScoreOut = ({ navigation }) => (
  <AppContainer
    translucent
    barStyle="light-bar"
    imageBackground={backgroundImage}
  >
    <View style={styles.container}>
      <Teams />
      <ScoreOutContent />
      <ApplyScoreOut navigation={navigation} />
    </View>
  </AppContainer>
);

export default ScoreOut;
