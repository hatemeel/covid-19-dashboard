import React, { useContext } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, StatusBar, Image, View } from 'react-native';
import Context from '../context/Context';

export default function Header({ navigation }) {
  StatusBar.setBarStyle('dark-content');

  const { state } = useContext(Context);

  const openMenu = () => {
    navigation.openDrawer();
  };

  const goBack = () => {
    navigation.navigate(state.headerOptions.back);
  };

  return (
    <View style={styles.header}>
      {state.headerOptions.back ? (
        <MaterialIcons
          style={styles.header__burger}
          name="keyboard-arrow-left"
          onPress={goBack}
        />
      ) : (
        <MaterialIcons
          style={styles.header__burger}
          name="menu"
          onPress={openMenu}
        />
      )}

      {/* <Image
        style={styles.header__logo}
        source={require('../assets/logo.png')}
      /> */}
      <Text style={styles.header__title}>
        {state.headerOptions.title || 'Covid-19 Dashboard'}
      </Text>
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
    paddingTop: 20,
    left: 20,
    color: '#111111',
    fontSize: 30,
  },
  header__logo: {
    width: 25,
    resizeMode: 'contain',
  },
  header__title: {
    fontWeight: '600',
    color: '#111111',
    fontSize: 18,
    marginLeft: 10,
  },
});
