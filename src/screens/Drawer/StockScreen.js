import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';

const COLORS = {
  primary: '#2B1247',
  white: '#FFFFFF',
  background: '#F5F5F5',
  border: '#E5E5E5',
  text: '#222222',
  grey: '#777777',
  green: '#4CAF50',
  orange: '#FF9800',
  red: '#E53935',
  blue: '#2196F3',
};

export default function StockScreen({navigation}) {
  const [search, setSearch] = useState('');

  const menus = [
    {
      title: 'Current Stock',
      subtitle: 'View available inventory',
      icon: 'inventory-2',
      color: COLORS.blue,
      screen: 'CurrentStock',
    },
    {
      title: 'Stock In',
      subtitle: 'Increase product stock',
      icon: 'add-box',
      color: COLORS.green,
      screen: 'StockIn',
    },
    {
      title: 'Stock Out',
      subtitle: 'Reduce product stock',
      icon: 'indeterminate-check-box',
      color: COLORS.orange,
      screen: 'StockOut',
    },
    {
      title: 'Low Stock Alert',
      subtitle: 'Products running low',
      icon: 'warning',
      color: COLORS.red,
      screen: 'LowStock',
    },
    {
      title: 'Stock History',
      subtitle: 'View stock movements',
      icon: 'history',
      color: COLORS.primary,
      screen: 'StockHistory',
    },
  ];

  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="Stock" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp('3%')}}>

        {/* Search */}

        <View style={styles.searchBox}>
          <Icon
            name="search"
            size={22}
            color="#777"
          />

          <TextInput
            placeholder="Search Product..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
            style={styles.input}
          />
        </View>

        {/* Summary Cards */}

        <View style={styles.summaryRow}>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>320</Text>
            <Text style={styles.summaryTitle}>
              Products
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>24</Text>
            <Text style={styles.summaryTitle}>
              Low Stock
            </Text>
          </View>

        </View>

        {/* Stock Modules */}

        {menus.map(item => (
          <TouchableOpacity
            key={item.title}
            activeOpacity={0.8}
            style={styles.card}
            onPress={() =>
              navigation.navigate(item.screen)
            }>

            <View
              style={[
                styles.iconContainer,
                {backgroundColor: item.color},
              ]}>

              <Icon
                name={item.icon}
                color="#FFF"
                size={30}
              />

            </View>

            <View style={styles.details}>

              <Text style={styles.cardTitle}>
                {item.title}
              </Text>

              <Text style={styles.cardSubtitle}>
                {item.subtitle}
              </Text>

            </View>

            <Icon
              name="chevron-right"
              size={30}
              color="#999"
            />

          </TouchableOpacity>
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  searchBox: {
    margin: wp('4%'),
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    height: hp('6.5%'),
  },

  input: {
    flex: 1,
    marginLeft: wp('2%'),
    fontSize: wp('4%'),
    color: COLORS.text,
    fontFamily: FONT.Regular,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
  },

  summaryCard: {
    width: '48%',
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingVertical: hp('2%'),
    alignItems: 'center',
    elevation: 3,
  },

  summaryValue: {
    fontSize: wp('7%'),
    color: COLORS.white,
    fontFamily: FONT.Bold,
  },

  summaryTitle: {
    marginTop: hp('0.5%'),
    fontSize: wp('3.8%'),
    color: COLORS.white,
    fontFamily: FONT.Medium,
  },

  card: {
    backgroundColor: COLORS.white,
    marginHorizontal: wp('4%'),
    marginBottom: hp('2%'),
    borderRadius: 14,
    padding: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  iconContainer: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  details: {
    flex: 1,
    marginLeft: wp('4%'),
  },

  cardTitle: {
    fontSize: wp('4.5%'),
    color: COLORS.text,
    fontFamily: FONT.Bold,
  },

  cardSubtitle: {
    marginTop: hp('0.5%'),
    fontSize: wp('3.6%'),
    color: COLORS.grey,
    fontFamily: FONT.Regular,
  },
});