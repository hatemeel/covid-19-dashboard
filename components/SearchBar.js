import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { openSortModal } from '../redux/actions';
import { globalStyles, margin } from '../styles/global';
import Icon from './Icon';
import SearchInput from './SearchInput';

function SearchBar({ openModal }) {
  return (
    <View style={styles.searchBar}>
      <SearchInput />

      <TouchableOpacity style={margin('left', 15)} onPress={openModal}>
        <Icon
          name="arrow-up-down-line"
          style={[globalStyles.icon, styles.searchBar__icon]}
        />
      </TouchableOpacity>
    </View>
  );
}

const mapDispatchToProps = {
  openModal: openSortModal,
};

export default connect(null, mapDispatchToProps)(SearchBar);

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar__icon: {
    fontSize: 30,
  },
});
