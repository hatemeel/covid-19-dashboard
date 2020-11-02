import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Colors } from '../styles/colors';
import { globalStyles } from '../styles/global';
import Icon from './Icon';

export default function SearchInput({ onChangeText }) {
  return (
    <View style={styles.searchInput}>
      <Icon
        name="search-line"
        style={[globalStyles.icon, styles.searchInput__icon]}
      />

      <TextInput
        style={styles.searchInput__text}
        placeholder="Country name, code, region"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
  },
  searchInput__icon: {
    position: 'absolute',
    zIndex: 1,
    left: 12,
    top: 12,
    fontSize: 20,
  },
  searchInput__text: {
    height: 45,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: Colors.white,
    paddingLeft: 45,
    fontSize: 16,
  },
});
