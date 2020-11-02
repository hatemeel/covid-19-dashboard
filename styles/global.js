import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});
