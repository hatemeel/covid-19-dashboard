import React, { useContext } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, StatusBar, View } from 'react-native';
import Context from '../context/Context';
import RobotoText from './RobotoText';
import { splitNumber } from '../utils/utils';
import { Colors } from '../styles/colors';
import { globalStyles } from '../styles/global';
import Burger from './Burger';

export default function Header({ navigation, back }) {
  StatusBar.setBarStyle('dark-content');

  const {
    state: { globalData },
  } = useContext(Context);

  const openMenu = () => {
    navigation.openDrawer();
  };

  const goBack = () => {
    navigation.navigate(back.stack, {
      screen: back.screen,
    });
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
          Global confirmed: {splitNumber(globalData.TotalConfirmed)}
        </RobotoText>
      </View>
    </View>
  );
}

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
