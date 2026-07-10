import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import Header from '../../components/Header';
import DashboardCards from '../../components/DashboardCards';
import SalesChart from '../../components/SalesChart';
import RecentOrders from '../../components/RecentOrders';
import TopSellingProducts from '../../components/TopSellingProducts';
import LowStockAlert from '../../components/LowStockAlert';

import COLORS from '../../theme/colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DashboardScreen = ({navigation}) => {
  return (
    
    <View style={styles.root}>

      {/* Status Bar Background */}

      {/* <SafeAreaView
        edges={['top']}
        style={styles.statusBar}
      /> */}

      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={styles.container}>

        <Header
          navigation={navigation}
          title="Dashboard"
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>

          {/* Dashboard Summary */}

          <DashboardCards />

          {/* Daily Sales Chart */}

          <SalesChart />

          {/* Recent Orders */}

          <RecentOrders />

          {/* Top Selling Products */}

          <TopSellingProducts />

          {/* Low Stock */}

          <LowStockAlert />

        </ScrollView>

      </SafeAreaView>

    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({

  root: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  statusBar: {
    backgroundColor: COLORS.primary,
  },

  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },

  scrollContainer: {
    paddingHorizontal: wp('4%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('4%'),
  },

});