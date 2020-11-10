import React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Colors } from '../styles/colors';
import { margin } from '../styles/global';
import RobotoText from './RobotoText';

function LoadingIndecator({ loading }) {
  return (
    <Modal visible={loading} animationType="fade">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.loaderColor} />

        <RobotoText style={margin('top', 20)}>Loading...</RobotoText>
      </View>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.app.loading,
  };
};

export default connect(mapStateToProps)(LoadingIndecator);
