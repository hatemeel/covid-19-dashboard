import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { globalStyles, margin } from '../styles/global';
import { capitalize } from '../utils/utils';
import RobotoText from './RobotoText';

function SortIndecators({ sortSettings, t }) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={margin('bottom', 30)}
    >
      <View style={styles.sortSettings}>
        <RobotoText style={[margin('right', 10), globalStyles.text_1]}>
          {t('sort.sortedBy')}:
        </RobotoText>
        <RobotoText style={globalStyles.text_1}>
          {t(`statistics.${sortSettings.interval}`)}
        </RobotoText>
        <RobotoText style={[margin('horizontal', 10), globalStyles.text_1]}>
          -
        </RobotoText>
        <RobotoText style={globalStyles.text_1}>
          {t(`statistics.${sortSettings.type}`)}
        </RobotoText>
        <RobotoText style={[margin('horizontal', 10), globalStyles.text_1]}>
          -
        </RobotoText>
        <RobotoText style={globalStyles.text_1}>
          {sortSettings.desc ? t(`sort.desc`) : t(`sort.asc`)}
        </RobotoText>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    sortSettings: state.covidData.sortSettings,
    t: state.app.translate,
  };
};

export default connect(mapStateToProps)(SortIndecators);

const styles = StyleSheet.create({
  sortSettings: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.75,
  },
});
