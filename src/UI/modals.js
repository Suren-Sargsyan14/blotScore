import React from 'react';
import {StyleSheet, TouchableOpacity, View, TouchableWithoutFeedback, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
const { height, width } = Dimensions.get('window');
import COLORS from './colors';
import {TextBold, TextRegular} from "./texts";

const AppModal = ({
  setModalVisible,
  modalVisible,
  title,
  onPress,
  children,
  colorType = 'primary',
  style = {},
  ...rest
}) => (
  <TouchableWithoutFeedback
    onPress={() => setModalVisible(false)}
    style={[
      style,
    ]}
    {...rest}
  >
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {setModalVisible(false)}}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextRegular
            center
            style={styles.modalText}
          >
            {title}
          </TextRegular>
          {children}
          <TouchableOpacity
            style={[styles.openButton]}
            onPress={onPress}
          >
            <TextBold
              center
              style={styles.textStyle}
            >
              Հաստատել
            </TextBold>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  centeredView: {
    width,
    height,
    alignItems: "center",
    position: "absolute",
    marginHorizontal: -20,
    justifyContent: "center",
    backgroundColor: COLORS.transparentBlack5
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.transparentWhite8,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
  },
  openButton: {
    backgroundColor: COLORS.transparentBlack5,
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: COLORS.white,
  },
});

export default AppModal;
