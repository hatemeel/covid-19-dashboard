import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../styles/colors';
import { globalStyles } from '../styles/global';

export default function RobotoText({ style, children }) {
  return <Text style={[styles.robotoText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  robotoText: {
    fontFamily: 'roboto-regular',
    color: Colors.dark,
    fontSize: 16,
  },
});
