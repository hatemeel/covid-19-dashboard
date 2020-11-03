import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Circle, G, TSpan } from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts';
import { Colors } from '../styles/colors';
import { globalStyles, margin } from '../styles/global';
import { capitalize, splitNumber } from '../utils/utils';
import Card from './Card';
import Icon from './Icon';
import RobotoText from './RobotoText';

export default function CountryStatistics({ countryData, dataType }) {
  const data = [3511, 177];
  const dataSum = data.reduce((acc, val) => acc + val, 0);

  const randomColor = () =>
    `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`;

  const pieData = [
    {
      value: (100 / dataSum) * data[0],
      svg: {
        fill: Colors.success,
      },
      key: `pie-${0}`,
    },
    {
      value: (100 / dataSum) * data[1],
      svg: {
        fill: Colors.dark,
      },
      key: `pie-${1}`,
    },
  ];

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, data } = slice;
      return (
        <G key={index}>
          <Circle
            cx={labelCentroid[0]}
            cy={labelCentroid[1]}
            r={20}
            fill={data.svg.fill}
          />
          <TSpan
            x={labelCentroid[0]}
            y={labelCentroid[1]}
            dy={6}
            textAnchor="middle"
            fill={Colors.white}
            fontWeight="600"
            fontSize="14"
          >
            {data.value.toFixed(0) + '%'}
          </TSpan>
        </G>
      );
    });
  };

  return (
    <View>
      <Card>
        <RobotoText style={globalStyles.text_3}>
          {capitalize(dataType)}
        </RobotoText>

        <View style={margin('top', 10)}>
          <View style={styles.tr}>
            <View style={styles.td}>
              <Icon
                name="checkbox-blank-circle-fill"
                style={[styles.colorIndecator, { color: Colors.danger }]}
              />
              <RobotoText>Confirmed</RobotoText>
            </View>

            <View style={styles.td}>
              <RobotoText>
                {splitNumber(countryData.confirmed[dataType])}
              </RobotoText>
            </View>
          </View>

          <View style={styles.tr}>
            <View style={styles.td}>
              <Icon
                name="checkbox-blank-circle-fill"
                style={[styles.colorIndecator, { color: Colors.success }]}
              />
              <RobotoText>Recovered</RobotoText>
            </View>

            <View style={styles.td}>
              <RobotoText>
                {splitNumber(countryData.recovered[dataType])}
              </RobotoText>
            </View>
          </View>

          <View style={styles.tr}>
            <View style={styles.td}>
              <Icon
                name="checkbox-blank-circle-fill"
                style={[styles.colorIndecator, { color: Colors.dark }]}
              />
              <RobotoText>Deaths</RobotoText>
            </View>

            <View style={styles.td}>
              <RobotoText>
                {splitNumber(countryData.deaths[dataType])}
              </RobotoText>
            </View>
          </View>
        </View>

        <View style={[margin('top', 20), { flexDirection: 'row' }]}>
          <View style={{ flex: 1, marginRight: 15 }}>
            <PieChart style={{ height: 200 }} data={pieData} innerRadius="35%">
              <Labels />
            </PieChart>

            <RobotoText style={[globalStyles.text_1, { textAlign: 'center' }]}>
              Population / Confirmed
            </RobotoText>
          </View>
          <View style={{ flex: 1 }}>
            <PieChart style={{ height: 200 }} data={pieData} innerRadius="35%">
              <Labels />
            </PieChart>

            <RobotoText style={[globalStyles.text_1, { textAlign: 'center' }]}>
              Recovered / Deaths
            </RobotoText>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  tr: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    borderTopColor: Colors.borderColor,
    borderTopWidth: 1,
  },
  td: {
    flex: 1,
    alignSelf: 'stretch',
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorIndecator: {
    fontSize: 10,
    marginRight: 10,
  },
});
