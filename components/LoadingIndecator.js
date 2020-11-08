import React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';
import { Colors } from '../styles/colors';
import { margin } from '../styles/global';
import RobotoText from './RobotoText';

export default function LoadingIndecator({ show }) {
  return (
    <Modal visible={!!show} animationType="fade">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.loaderColor} />

        <RobotoText style={margin('top', 20)}>Loading...</RobotoText>
      </View>
    </Modal>
  );
}
