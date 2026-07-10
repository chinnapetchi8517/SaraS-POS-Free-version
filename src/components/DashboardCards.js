import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FONT from '../utils/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PRIMARY = '#2B1247';

const cards = [
  {
    title: "Today's Sales",
    value: '₹15,240',
    icon: 'currency-rupee',
    color: '#4CAF50',
  },
  {
    title: "Today's Orders",
    value: '42',
    icon: 'shopping-cart',
    color: '#2196F3',
  },
  {
    title: 'Total Products',
    value: '145',
    icon: 'inventory-2',
    color: '#FF9800',
  },
  {
    title: 'Total Customers',
    value: '83',
    icon: 'people',
    color: '#9C27B0',
  },
  {
    title: 'Low Stock',
    value: '8',
    icon: 'warning',
    color: '#F44336',
  },
];

export default function DashboardCards() {
  return (
    <View style={styles.container}>
      {cards.map((item, index) => (
        <View
          key={index}
          style={[
            styles.card,
            index === 4 && styles.fullCard,
          ]}>
          <View
            style={[
              styles.iconBox,
              {backgroundColor: item.color},
            ]}>
            <Icon
              name={item.icon}
              size={26}
              color="#fff"
            />
          </View>

          <View style={{flex: 1}}>
            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text style={styles.value}>
              {item.value}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: wp('4%'),
    marginBottom: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },

  fullCard: {
    width: '100%',
  },

  iconBox: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('3%'),
  },

  title: {
    fontSize: wp('3.5%'),
    color: '#666',
    fontFamily: FONT.Medium,
  },

  value: {
    fontSize: wp('5%'),
    color: PRIMARY,
    marginTop: 4,
    fontFamily: FONT.Bold,
  },
});