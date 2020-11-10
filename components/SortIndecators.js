import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { globalStyles, margin } from '../styles/global';
import { capitalize } from '../utils/utils';
import RobotoText from './RobotoText';

function SortIndecators({ sortSettings }) {
  return (
    <View style={styles.sortSettings}>
      <RobotoText style={[margin('right', 10), globalStyles.text_1]}>
        Sorted by:
      </RobotoText>
      <RobotoText style={globalStyles.text_1}>
        {capitalize(sortSettings.interval)}
      </RobotoText>
      <RobotoText style={[margin('horizontal', 10), globalStyles.text_1]}>
        -
      </RobotoText>
      <RobotoText style={globalStyles.text_1}>
        {capitalize(sortSettings.type)}
      </RobotoText>
      <RobotoText style={[margin('horizontal', 10), globalStyles.text_1]}>
        -
      </RobotoText>
      <RobotoText style={globalStyles.text_1}>
        {sortSettings.desc ? 'Descending' : 'Ascending'}
      </RobotoText>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    sortSettings: state.covidData.sortSettings,
  };
};

export default connect(mapStateToProps)(SortIndecators);

const styles = StyleSheet.create({
  sortSettings: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.75,
  },
});
