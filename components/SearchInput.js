import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { setSearchValue } from '../redux/actions';
import { Colors } from '../styles/colors';
import { globalStyles } from '../styles/global';
import { debounce } from '../utils/utils';
import Icon from './Icon';

function SearchInput({ setSearchValue }) {
  return (
    <View style={styles.searchInput}>
      <Icon
        name="search-line"
        style={[globalStyles.icon, styles.searchInput__icon]}
      />

      <TextInput
        style={styles.searchInput__text}
        placeholder="Country name, code, region"
        onChangeText={debounce(setSearchValue, 500)}
      />
    </View>
  );
}

const mapDispatchToProps = {
  setSearchValue,
};

export default connect(null, mapDispatchToProps)(SearchInput);

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
