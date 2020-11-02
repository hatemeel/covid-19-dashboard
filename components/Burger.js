import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../styles/colors';
import { margin } from '../styles/global';

export default function Burger({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.burger}>
        {Array(3)
          .fill('')
          .map((_, index) => (
            <View
              key={Math.random().toString()}
              style={[styles.burger__line, index ? margin('top', 6) : {}]}
            ></View>
          ))}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  burger: {
    width: 30,
  },
  burger__line: {
    backgroundColor: Colors.dark,
    height: 2,
  },
});
