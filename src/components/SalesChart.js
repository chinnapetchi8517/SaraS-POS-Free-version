import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  LineChart,
} from 'react-native-gifted-charts';
import FONT from '../utils/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PRIMARY = '#2B1247';

export default function SalesChart() {

  const data = [
    {value: 300},
    {value: 600},
    {value: 450},
    {value: 800},
    {value: 500},
    {value: 950},
    {value: 750},
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Daily Sales
      </Text>

      <LineChart
        areaChart
        curved
        thickness={3}
        color={PRIMARY}
        startFillColor={PRIMARY}
        endFillColor={PRIMARY}
        startOpacity={0.25}
        endOpacity={0.02}
        data={data}
        height={220}
        width={wp('82%')}
        hideDataPoints={false}
        dataPointsColor={PRIMARY}
        yAxisColor="#DDD"
        xAxisColor="#DDD"
        rulesColor="#EFEFEF"
        spacing={45}
        initialSpacing={10}
        hideYAxisText={false}
        hideRules={false}
        noOfSections={4}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: hp('1%'),
    borderRadius: 15,
    padding: wp('4%'),
    elevation: 3,
  },

  title: {
    fontSize: wp('5%'),
    color: PRIMARY,
    marginBottom: hp('2%'),
    fontFamily: FONT.Bold,
  },
});