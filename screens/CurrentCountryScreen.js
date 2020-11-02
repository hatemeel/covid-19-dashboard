import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import RobotoText from '../components/RobotoText';
import Context from '../context/Context';
import { globalStyles } from '../styles/global';

export default function CurrentCountryScreen() {
  const { state } = useContext(Context);

  return (
    <View style={globalStyles.container}>
      <RobotoText style={{ flexWrap: 'wrap' }}>
        {JSON.stringify(state.currentCountryData)}
      </RobotoText>
    </View>
  );
}
