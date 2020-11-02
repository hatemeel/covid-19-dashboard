import React from 'react';
import { Modal, Text, View, ActivityIndicator } from 'react-native';
import RobotoText from './RobotoText';

export default function LoadingIndecator({ show }) {
  return (
    <Modal visible={!!show} animationType="fade">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#007BFF" />

        <RobotoText style={{ marginTop: 20 }}>Loading...</RobotoText>
      </View>
    </Modal>
  );
}
