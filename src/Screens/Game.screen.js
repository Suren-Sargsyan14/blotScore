import React from 'react';

import { AppContainer } from '../UI';

import {
  Modals,
  GameContent,
} from '../Components';

import backgroundImage from '../assets/images/ZLohmG.jpg';

const Game = ({ navigation }) => (
  <AppContainer
    translucent
    barStyle="light-bar"
    imageBackground={backgroundImage}
  >
    <GameContent navigation={navigation} />
    <Modals />
  </AppContainer>
);

export default Game;
