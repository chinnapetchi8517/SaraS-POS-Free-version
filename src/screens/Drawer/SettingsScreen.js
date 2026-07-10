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
  text: '#222222',
  grey: '#777777',
};

const SETTINGS = [
  {
    id: '1',
    title: 'Shop Profile',
    subtitle: 'Shop details & logo',
    icon: 'store',
    screen: 'ShopProfile',
  },
  {
    id: '2',
    title: 'Tax Settings',
    subtitle: 'GST, CGST & SGST',
    icon: 'account-balance',
    screen: 'TaxSettings',
  },
  {
    id: '3',
    title: 'Billing Settings',
    subtitle: 'Invoice & Currency',
    icon: 'receipt-long',
    screen: 'BillingSettings',
  },
  {
    id: '4',
    title: 'Printer Settings',
    subtitle: 'Bluetooth / LAN Printer',
    icon: 'print',
    screen: 'PrinterSettings',
  },
//   {
//     id: '5',
//     title: 'User Management',
//     subtitle: 'Manage Users',
//     icon: 'people',
//     screen: 'UserManagement',
//   },
//   {
//     id: '6',
//     title: 'Backup & Restore',
//     subtitle: 'Backup Database',
//     icon: 'backup',
//     screen: 'BackupRestore',
//   },
  {
    id: '7',
    title: 'About App',
    subtitle: 'Version & Support',
    icon: 'info',
    screen: 'About',
  },
];

export default function SettingsScreen({navigation}) {
  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={() => navigation.navigate(item.screen)}>
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <Icon
            name={item.icon}
            size={30}
            color={COLORS.primary}
          />
        </View>

        <View style={{flex: 1}}>
          <Text style={styles.title}>
            {item.title}
          </Text>

          <Text style={styles.subtitle}>
            {item.subtitle}
          </Text>
        </View>
      </View>

      <Icon
        name="chevron-right"
        size={30}
        color="#999"
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        title="Settings"
      />

      <FlatList
        data={SETTINGS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: wp('4%'),
          paddingBottom: hp('4%'),
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
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: wp('4%'),
    marginBottom: hp('1.8%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconContainer: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('7%'),
    backgroundColor: '#EEE8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('4%'),
  },

  title: {
    fontFamily: FONT.Bold,
    fontSize: wp('4.6%'),
    color: COLORS.text,
  },

  subtitle: {
    marginTop: hp('0.4%'),
    fontFamily: FONT.Regular,
    fontSize: wp('3.7%'),
    color: COLORS.grey,
  },
});