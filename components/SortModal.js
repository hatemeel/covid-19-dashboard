import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Card from './Card';
import { globalStyles } from '../styles/global';

export default function SortModal({ modalOpen, onCloseModal }) {
  return (
    <Modal visible={modalOpen} transparent={true} animationType="slide">
      <TouchableWithoutFeedback onPress={onCloseModal}>
        <View style={styles.modal__backdrop} />
      </TouchableWithoutFeedback>

      <Card style={styles.modal__body}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.modal__title}>New Review</Text>

          <Icon
            style={styles.modal__close}
            name="close-line"
            onPress={onCloseModal}
          />
        </View>
      </Card>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal__title: {
    ...globalStyles.titleText,
    marginBottom: 20,
  },
  modal__close: {
    fontSize: 25,
    color: '#111111',
  },
  modal__backdrop: {
    position: 'absolute',
    backgroundColor: '#00000080',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modal__body: {
    ...globalStyles.shadow,
    width: Dimensions.get('screen').width - 56,
    maxWidth: 500,
    maxHeight: Dimensions.get('screen').height - 56,
    top: 28,
    alignSelf: 'center',
  },
  addReview: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    ...globalStyles.shadow,
  },
  addReview__icon: {
    fontSize: 30,
    color: '#111111',
    padding: 10,
  },
  submitButton: {
    marginTop: 10,
  },
});
