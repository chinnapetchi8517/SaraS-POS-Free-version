

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';

const COLORS = {
  primary: '#2B1247',
  background: '#F5F5F5',
  white: '#FFFFFF',
  text: '#222',
};

const reports = [
  {
    id: '1',
    title: "Today's Sales",
    icon: 'today',
    screen: 'TodaySales',
  },
  {
    id: '2',
    title: 'Daily Report',
    icon: 'calendar-month',
    screen: 'DailyReport',
  },
  {
    id: '3',
    title: 'Monthly Report',
    icon: 'date-range',
    screen: 'MonthlyReport',
  },
  {
    id: '4',
    title: 'Product Report',
    icon: 'inventory',
    screen: 'ProductReport',
  },
  {
    id: '5',
    title: 'Customer Report',
    icon: 'people',
    screen: 'CustomerReport',
  },
  {
    id: '6',
    title: 'GST Report',
    icon: 'receipt-long',
    screen: 'GSTReport',
  },
  {
    id: '7',
    title: 'Payment Report',
    icon: 'payments',
    screen: 'PaymentReport',
  },
  {
    id: '8',
    title: 'Top Selling',
    icon: 'trending-up',
    screen: 'TopSelling',
  },
];

export default function ReportsScreen({
  navigation,
}) {
  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={() =>
        navigation.navigate(item.screen)
      }>
      <View style={styles.iconCircle}>
        <Icon
          name={item.icon}
          size={32}
          color={COLORS.primary}
        />
      </View>

      <Text style={styles.title}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        title="Reports"
      />

      <FlatList
        data={reports}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{
          padding: wp('4%'),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  card: {
    flex: 1,
    margin: wp('2%'),
    backgroundColor: '#FFF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp('3%'),
    elevation: 3,
  },

  iconCircle: {
    width: wp('16%'),
    height: wp('16%'),
    borderRadius: wp('8%'),
    backgroundColor: '#EEE8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: hp('1.5%'),
    fontFamily: FONT.Bold,
    fontSize: wp('4%'),
    color: COLORS.text,
    textAlign: 'center',
  },
});