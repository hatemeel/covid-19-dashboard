import { StyleSheet } from 'react-native';
import { capitalize } from '../utils/utils';
import { Colors } from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
  },
  shadowSm: {
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.075,
    shadowRadius: 4,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  icon: {
    color: Colors.dark,
    fontSize: 22,
  },
  bgPrimary: {
    backgroundColor: Colors.primary,
  },
  bgSecondary: {
    backgroundColor: Colors.secondary,
  },
  bgSuccess: {
    backgroundColor: Colors.success,
  },
  bgDanger: {
    backgroundColor: Colors.danger,
  },
  bgWarning: {
    backgroundColor: Colors.warning,
  },
  bgInfo: {
    backgroundColor: Colors.info,
  },
  bgLight: {
    backgroundColor: Colors.light,
  },
  bgDark: {
    backgroundColor: Colors.dark,
  },
  bgWhite: {
    backgroundColor: Colors.white,
  },
  textPrimary: {
    color: Colors.primary,
  },
  textSecondary: {
    color: Colors.secondary,
  },
  textSuccess: {
    color: Colors.success,
  },
  textDanger: {
    color: Colors.danger,
  },
  textWarning: {
    color: Colors.warning,
  },
  textInfo: {
    color: Colors.info,
  },
  textLight: {
    color: Colors.light,
  },
  textDark: {
    color: Colors.dark,
  },
  textWhite: {
    color: Colors.white,
  },
  textBold: {
    fontFamily: 'roboto-bold',
  },
  text_1: {
    fontSize: 14,
  },
  text_2: {
    fontSize: 16,
  },
  text_3: {
    fontSize: 18,
  },
  text_4: {
    fontSize: 20,
  },
  text_5: {
    fontSize: 24,
  },
  menuItemActive: {
    backgroundColor: Colors.menuItemActive,
  },
});

export const margin = (side, size) => {
  return StyleSheet.create({
    [`margin${capitalize(side)}`]: size,
  });
};
