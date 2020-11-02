import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Card from '../components/Card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import * as yup from 'yup';

const ReviewValidationSchema = yup.object({
  title: yup.string().required().min(4),
  description: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test(
      'is-num-1-5',
      'Rating must be a number 1 - 5',
      (val) => parseInt(val) > 0 && parseInt(val) < 6
    ),
});

export default function AddReviewModal({
  modalOpen,
  onCloseModal,
  onAddReview,
}) {
  const onSubmit = (values) => {
    if (values.title) {
      onAddReview({ ...values, rating: parseInt(values.rating, 10) });
      onCloseModal();
    }
  };

  return (
    <Modal visible={modalOpen} transparent={true} animationType="slide">
      <TouchableWithoutFeedback onPress={onCloseModal}>
        <View style={styles.modal__backdrop} />
      </TouchableWithoutFeedback>

      <Card style={styles.modal__body}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.modal__title}>New Review</Text>

          <MaterialIcons
            style={styles.modal__close}
            name="close"
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
