import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../styles/colors';
import { globalStyles } from '../styles/global';
import RobotoText from './RobotoText';

export default function Radio({ title, checked, onCheck }) {
  return (
    <TouchableOpacity style={styles.radio} onPress={onCheck}>
      <View
        style={[styles.radio__button, checked ? globalStyles.bgPrimary : {}]}
      >
        {checked && <View style={styles.radio__button__checked}></View>}
      </View>

      <RobotoText style={[styles.radio__title, globalStyles.text_3]}>
        {title}
      </RobotoText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio__button: {
    width: 25,
    height: 25,
    borderRadius: 25,
    borderColor: '#ADB5BD',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radio__button__checked: {
    width: 13,
    height: 13,
    borderRadius: 13,
    borderColor: '#ADB5BD',
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  radio__title: {
    marginLeft: 15,
  },
});
