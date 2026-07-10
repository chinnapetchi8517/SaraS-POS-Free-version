import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import FONT from '../utils/font';
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomAlert from '../components/CustomAlert';
// import CustomAlert from '../components/LogoutModal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PRIMARY = '#2B1247';

const menus = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    screen: 'Dashboard',
  },
  {
    title: 'Billing',
    icon: 'point-of-sale',
    screen: 'Billing',
  },
  {
    title: 'Products',
    icon: 'inventory-2',
    screen: 'Products',
  },
   { title: 'Categories', icon: 'category', screen: 'CategoryList' },
  {
    title: 'Customers',
    icon: 'people',
    screen: 'Customers',
  },
  {
    title: 'Stock',
    icon: 'warehouse',
    screen: 'Stock',
  },
  {
    title: 'Reports',
    icon: 'assessment',
    screen: 'Reports',
  },
  {
    title: 'Settings',
    icon: 'settings',
    screen: 'Settings',
  },
];

const bottomMenus = [
  {
    title: 'Back Office',
    icon: 'bar-chart',
    screen: 'BackOffice',
  },
  {
    title: 'Apps',
    icon: 'apps',
    screen: 'Apps',
  },
  {
    title: 'Support',
    icon: 'info-outline',
    screen: 'Support',
  },
];

export default function CustomDrawer({ navigation, state }) {
  const currentRoute = state.routeNames[state.index];
const [showLogout, setShowLogout] = React.useState(false);

const logout = () => {
  setShowLogout(true);
  
};
  const renderItem = item => {
    const selected = currentRoute === item.screen;

    return (
      <TouchableOpacity
        key={item.title}
        activeOpacity={0.8}
        style={[styles.row, selected && styles.activeRow]}
        onPress={() => navigation.navigate(item.screen)}>

        <Icon
          name={item.icon}
          size={28}
          color={selected ? PRIMARY : '#777'}
        />

        <Text
          style={[
            styles.text,
            selected && styles.activeText,
          ]}>
          {item.title}
        </Text>

      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.owner}>Owner</Text>
        <Text style={styles.pos}>POS 1</Text>
        <Text style={styles.shop}>SaraS</Text>
      </View>

      <DrawerContentScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {menus.map(renderItem)}

      </DrawerContentScrollView>

      <View style={styles.footer}>

  <TouchableOpacity
    style={styles.logoutRow}
    onPress={logout}>

    <Icon
      name="logout"
      size={26}
      color="#E53935"
    />

    <Text style={styles.logoutText}>
      Logout
    </Text>

  </TouchableOpacity>

  {/* <Text style={styles.version}>
    v1.0.0
  </Text> */}

</View>
<CustomAlert
  visible={showLogout}
  title="Logout"
  message="Are you sure you want to logout?"
  cancelText="Cancel"
  confirmText="Logout"
  onCancel={() => setShowLogout(false)}
  onConfirm={() => {
    setShowLogout(false);
    navigation.closeDrawer();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    paddingTop: 0,
    paddingBottom: 10,
  },

  header: {
    // height: hp('21%'),
    backgroundColor: PRIMARY,
    justifyContent: 'flex-end',
    paddingBottom: hp('4%'),
    paddingHorizontal: wp('6%'),
  },

  owner: {
    fontSize: wp('7%'),
    fontFamily: FONT.Bold,
    color: '#FFFFFF',
    marginTop: hp('1%'),
  },

  pos: {
    fontSize: wp('5%'),
    fontFamily: FONT.Medium,
    color: '#FFFFFF',
    marginTop: hp('1%'),
  },

  shop: {
    fontSize: wp('5%'),
    fontFamily: FONT.Regular,
    color: '#FFFFFF',
    marginTop: hp('0.5%'),
  },

  row: {
    height: hp('8%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('6%'),
  },

  activeRow: {
    backgroundColor: '#F3F0FA',
  },

  text: {
    marginLeft: wp('6%'),
    fontSize: wp('5.3%'),
    color: '#222',
    fontFamily: FONT.Medium,
  },

  activeText: {
    color: PRIMARY,
    fontFamily: FONT.Bold,
  },

  divider: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginVertical: hp('1%'),
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('2%'),
  },

  logoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
  },

  logoutText: {
    marginLeft: wp('6%'),
    fontSize: wp('5%'),
    color: '#E53935',
    fontFamily: FONT.SemiBold,
  },

  version: {
    marginTop: hp('1%'),
    color: '#999',
    fontSize: wp('4.2%'),
    fontFamily: FONT.Regular,
  },
});