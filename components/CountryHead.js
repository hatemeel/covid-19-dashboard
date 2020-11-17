import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { connect } from 'react-redux';
import { globalStyles, margin } from '../styles/global';
import { splitNumber } from '../utils/utils';
import Card from './Card';
import RobotoText from './RobotoText';

function CountryHead({ countryData, isCurrentCountry, t }) {
  return (
    <View>
      <Card>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.country__flag}>
            <SvgUri width="100%" height="100%" uri={countryData.flagUrl} />
          </View>

          <View style={styles.country__data}>
            <View style={margin('bottom', 10)}>
              <RobotoText style={globalStyles.text_1}>
                {isCurrentCountry
                  ? t('countryHead.currentCountry')
                  : t('countryHead.country')}
              </RobotoText>
              <RobotoText style={globalStyles.text_3}>
                {t(`countries.${countryData.countryCode}`)}
              </RobotoText>
            </View>

            <View style={margin('bottom', 10)}>
              <RobotoText style={globalStyles.text_1}>
                {isCurrentCountry
                  ? t('countryHead.currentRegion')
                  : t('countryHead.region')}
              </RobotoText>
              <RobotoText style={globalStyles.text_3}>
                {t(`regions.${countryData.region}`)}
              </RobotoText>
            </View>

            <View style={margin('bottom', 10)}>
              <RobotoText style={globalStyles.text_1}>
                {t('countryHead.population')}
              </RobotoText>
              <RobotoText style={globalStyles.text_3}>
                {splitNumber(countryData.population)}
              </RobotoText>
            </View>

            <View>
              <RobotoText style={globalStyles.text_1}>
                {t('countryHead.totalConfirmed')}
              </RobotoText>
              <RobotoText style={globalStyles.text_3}>
                {splitNumber(countryData.confirmed?.total)}
              </RobotoText>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

const mapStateToProps = (state) => ({
  t: state.app.translate,
});

export default connect(mapStateToProps)(CountryHead);

const styles = StyleSheet.create({
  country__flag: {
    width: 90,
    height: 90,
    borderRadius: 90,
    overflow: 'hidden',
  },
  country__data: {
    marginLeft: 25,
  },
});
