import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Card({ children, style }) {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.card__body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    ...globalStyles.shadowSm,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  card__body: {
    padding: 20,
  },
});
