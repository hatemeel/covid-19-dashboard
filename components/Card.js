import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Card({ children, style, bodyStyle }) {
  return (
    <View style={[styles.card, style]}>
      <View style={[styles.card__body, bodyStyle]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    ...globalStyles.shadow,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  card__body: {
    padding: 20,
  },
});
