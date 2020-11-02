import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function RobotoText({ style, children }) {
  return <Text style={[styles.robotoText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  robotoText: {
    fontFamily: 'roboto-regular',
  },
});
