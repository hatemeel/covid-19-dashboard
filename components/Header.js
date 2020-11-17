import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, StatusBar, View } from 'react-native';
import RobotoText from './RobotoText';
import { splitNumber } from '../utils/utils';
import { Colors } from '../styles/colors';
import { globalStyles } from '../styles/global';
import Burger from './Burger';
import { connect } from 'react-redux';

function Header({ navigation, back, globalData, t }) {
  StatusBar.setBarStyle('dark-content');

  const openMenu = () => {
    navigation.openDrawer();
  };

  const goBack = () => {
    navigation.navigate(back.screen);
  };

  return (
    <View>
      <View style={styles.header}>
        {back ? (
          <MaterialIcons
            style={styles.header__burger}
            name="keyboard-arrow-left"
            onPress={goBack}
          />
        ) : (
          <View style={styles.header__burger}>
            <Burger onPress={openMenu} />
          </View>
        )}

        <RobotoText style={styles.header__title}>Covid-19 Dashboard</RobotoText>
      </View>

      <View style={styles.subheader}>
        <RobotoText style={[globalStyles.textLight]}>
          {t('app.globalConfirmed')}: {splitNumber(globalData.totalConfirmed)}
        </RobotoText>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    globalData: state.covidData.globalData,
    t: state.app.translate,
  };
};

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingTop: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header__burger: {
    position: 'absolute',
    left: 15,
    paddingTop: 20,
    fontSize: 30,
  },
  header__logo: {
    width: 25,
    resizeMode: 'contain',
  },
  header__title: {
    fontWeight: '600',
    color: '#111111',
    fontSize: 20,
    marginLeft: 10,
  },
  subheader: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.danger,
  },
});
