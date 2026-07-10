import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FONT from '../utils/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PRIMARY = '#2B1247';

const products = [
  {
    id: '1',
    name: 'Coffee',
    sold: 120,
  },
  {
    id: '2',
    name: 'Burger',
    sold: 95,
  },
  {
    id: '3',
    name: 'Pizza',
    sold: 78,
  },
];

export default function TopSellingProducts() {

  const renderItem = ({item}) => (
    <View style={styles.row}>

      <View style={styles.left}>

        <Icon
          name="inventory-2"
          size={24}
          color={PRIMARY}
        />

        <View style={{marginLeft:12}}>

          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.sold}>
            {item.sold} Sold
          </Text>

        </View>

      </View>

    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Top Selling Products
      </Text>

      <FlatList
        data={products}
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
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    fontSize: wp('4.4%'),
    color: '#222',
    fontFamily: FONT.SemiBold,
  },

  sold: {
    color: '#777',
    marginTop: 3,
    fontSize: wp('3.8%'),
    fontFamily: FONT.Regular,
  },
});