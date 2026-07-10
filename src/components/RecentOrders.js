import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FONT from '../utils/font';
const PRIMARY = '#2B1247';

const orders = [
  {
    id: '1001',
    customer: 'Ramesh',
    amount: '₹450',
  },
  {
    id: '1002',
    customer: 'Suresh',
    amount: '₹220',
  },
  {
    id: '1003',
    customer: 'Priya',
    amount: '₹780',
  },
];

export default function RecentOrders() {

  const renderItem = ({item}) => (
    <View style={styles.row}>

      <View>
        <Text style={styles.orderNo}>
          #{item.id}
        </Text>

        <Text style={styles.customer}>
          {item.customer}
        </Text>
      </View>

      <Text style={styles.amount}>
        {item.amount}
      </Text>

    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Recent Orders
      </Text>

      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: wp('4%'),
    marginTop: hp('2%'),
    elevation: 3,
  },

  title: {
    fontSize: wp('5%'),
    color: PRIMARY,
    marginBottom: hp('2%'),
    fontFamily: FONT.Bold,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },

  orderNo: {
    fontSize: wp('4.3%'),
    color: '#222',
    fontFamily: FONT.SemiBold,
  },

  customer: {
    color: '#777',
    marginTop: 3,
    fontSize: wp('3.8%'),
    fontFamily: FONT.Regular,
  },

  amount: {
    color: PRIMARY,
    fontSize: wp('4.5%'),
    fontFamily: FONT.Bold,
  },
});