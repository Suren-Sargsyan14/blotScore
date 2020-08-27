import React  from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { setPlayersScore } from '../Actions/main';

import {
  MainButton,
  GameTitle
} from '../Components';
import { AppContainer } from '../UI';

import styles from '../Styles/main.screen.style';

import backgroundImage from '../assets/images/ZLohmG.jpg';

const Game = ({ navigation, score, setScore }) => {

  console.log(score);
  return (
    <AppContainer
      translucent
      barStyle="light-bar"
      imageBackground={backgroundImage}
    >
      <View style={styles.container}>
        <GameTitle title="Բլոտի հաշիվ" />
        <View style={styles.buttons}>
          <MainButton text1="Սկսել" text2="Խաղը" onPress={() => navigation.navigate("Game")} />
          <MainButton text1="Խաղի" text2="կանոնները" onPress={() => navigation.navigate("Rules")} />
        </View>
      </View>
    </AppContainer>
  );
};

const mapStateToProps = ({ main: { score } }) => ({
  score,
});

const mapDispatchToProps = dispatch => ({
  setScore: score => dispatch(setPlayersScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
