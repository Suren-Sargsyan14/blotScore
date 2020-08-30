import React from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import styles from '../../modals.style';

import suits from '../../../../../assets/Suits';

import { COLORS } from '../../../../../UI';

const Suits = ({
  selectedSuit,
  setSelectedSuit
}) => (
  <View style={styles.suits}>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={suits}
      keyExtractor={(value, index) => (value + index).toString()}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[styles.suitTouchable, { borderColor: (index === selectedSuit ? COLORS.black : "transparent") }]}
          onPress={() => setSelectedSuit(index)}
        >
          <Image
            source={item}
            style={styles.suitImages}
          />
        </TouchableOpacity>
      )}
    />
  </View>
);

export default Suits;
