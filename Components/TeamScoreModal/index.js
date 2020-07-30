import React, { useState } from 'react';
import {
    TextInput,
    Modal,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import styles from './style';

import mathFunction from './Math';

const TeamScoreModal = ({modalVisible, setModalVisible,
                            setTeamScore1, setTeamScore2,
                            teamScore1, teamScore2,
                            whichTeam,
                            teamVs, setTeamVs,
                            teamScoreOut1, teamScoreOut2, teams}) => {
    const [inputValue, setInputValue] = useState("0");

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Գրեք "{teams[whichTeam]}" թիմի միավորների քանակը</Text>
                        <TextInput style={styles.textInput} defaultValue={inputValue} autoFocus onChangeText={text => setInputValue(text)} />
                        <TouchableOpacity
                            style={styles.openButton}
                            onPress={() => {mathFunction({modalVisible, setModalVisible,
                                setTeamScore1, setTeamScore2,
                                teamScore1, teamScore2,
                                whichTeam,
                                teamVs, setTeamVs,
                                teamScoreOut1, teamScoreOut2, inputValue }); console.log(inputValue)}}
                        >
                            <Text style={styles.textStyle}>Հաստատել</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


export default TeamScoreModal;
