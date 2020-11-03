import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Circle, G, TSpan } from 'react-native-svg';
import { PieChart, ProgressCircle } from 'react-native-svg-charts';
import { Colors } from '../styles/colors';
import { globalStyles, margin } from '../styles/global';
import { capitalize, splitNumber } from '../utils/utils';
import Card from './Card';
import Icon from './Icon';
import RobotoText from './RobotoText';

export default function CountryStatistics({ countryData, dataType }) {
  const sum = (...args) => args.reduce((acc, val) => acc + val, 0);

  const pieData = [
    {
      value:
        (100 /
          sum(countryData.recovered[dataType], countryData.deaths[dataType])) *
        countryData.recovered[dataType],
      svg: {
        fill: Colors.success,
      },
      key: `pie-${0}`,
    },
    {
      value:
        (100 /
          sum(countryData.recovered[dataType], countryData.deaths[dataType])) *
        countryData.deaths[dataType],
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
            <View>
              <ProgressCircle
                style={{ height: 200 }}
                progress={
                  Math.ceil(
                    (countryData.confirmed[dataType] * 100) /
                      countryData.population
                  ) / 100
                }
                progressColor={Colors.danger}
                strokeWidth={10}
                cornerRadius={0}
              />

              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <RobotoText>
                  {(
                    (countryData.confirmed[dataType] * 100) /
                    countryData.population
                  ).toFixed(2)}
                  %
                </RobotoText>
              </View>
            </View>

            <RobotoText style={[globalStyles.text_1, { textAlign: 'center' }]}>
              Population / Confirmed
            </RobotoText>
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <PieChart
                style={{ height: 200 }}
                data={pieData}
                innerRadius="35%"
              >
                <Labels />
              </PieChart>
            </View>

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
