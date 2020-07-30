import React, { useState } from 'react';
import {
    Text,
    View
} from "react-native";

import {Picker} from '@react-native-community/picker';

import styles from '../style';

const TeamScoreModal = ({ ScoreOutName, ScoreOutCount, selectedValue, setSelectedValue}) => {
    return (
        <View style={styles.scoreOutContainer}>
            <Text style={styles.scoreOut}>{ScoreOutName} - </Text>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {ScoreOutCount.map(v => <Picker.Item key={v} label={v.toString()} value={v.toString()} />)}
            </Picker>
        </View>
    );
};


export default TeamScoreModal;
