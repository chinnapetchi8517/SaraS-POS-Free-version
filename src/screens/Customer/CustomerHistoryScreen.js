import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CommonHeader from '../../components/CommonHeader';
import FONT from '../../utils/font';

const COLORS = {
  primary: '#2B1247',
  background: '#F5F5F5',
  white: '#FFFFFF',
  border: '#EEEEEE',
  text: '#222222',
  grey: '#777777',
  green: '#2E7D32',
};

export default function CustomerHistoryScreen({route,navigation}) {
  const customer = route.params?.customer || {
    name: 'John Smith',
    mobile: '9876543210',
  };

  const purchaseHistory = [
    {
      id: '1',
      invoice: 'INV1001',
      date: '12 Jul 2026',
      amount: 560,
      payment: 'Cash',
    },
    {
      id: '2',
      invoice: 'INV1005',
      date: '14 Jul 2026',
      amount: 1240,
      payment: 'UPI',
    },
    {
      id: '3',
      invoice: 'INV1010',
      date: '16 Jul 2026',
      amount: 880,
      payment: 'Cash',
    },
    {
      id: '4',
      invoice: 'INV1018',
      date: '18 Jul 2026',
      amount: 450,
      payment: 'Card',
    },
  ];

  const totalPurchase = purchaseHistory.reduce(
    (sum, item) => sum + item.amount,
    0,
  );

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={{flex: 1}}>
        <Text style={styles.invoice}>
          {item.invoice}
        </Text>

        <Text style={styles.date}>
          {item.date}
        </Text>

        <Text style={styles.payment}>
          {item.payment}
        </Text>
      </View>

      <Text style={styles.amount}>
        ₹{item.amount}
      </Text>
    </View>
  );

  return (
     <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="Customer History"
 navigation={navigation}

/>
    <View style={styles.container}>

      {/* Customer Card */}

      <View style={styles.customerCard}>

        <View style={styles.avatar}>
          <Icon
            name="person"
            size={40}
            color="#FFF"
          />
        </View>

        <View style={{marginLeft: wp('4%')}}>

          <Text style={styles.name}>
            {customer.name}
          </Text>

          <Text style={styles.mobile}>
            {customer.mobile}
          </Text>

        </View>

      </View>

      {/* Summary */}

      <View style={styles.summaryContainer}>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>
            ₹{totalPurchase}
          </Text>

          <Text style={styles.summaryLabel}>
            Total Purchase
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>
            {purchaseHistory.length}
          </Text>

          <Text style={styles.summaryLabel}>
            Orders
          </Text>
        </View>

      </View>

      <Text style={styles.heading}>
        Purchase History
      </Text>

      {purchaseHistory.length === 0 ? (
        <View style={styles.empty}>
          <Icon
            name="receipt-long"
            size={90}
            color="#BBBBBB"
          />

          <Text style={styles.emptyTitle}>
            No Purchase History
          </Text>
        </View>
      ) : (
        <FlatList
          data={purchaseHistory}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: hp('3%'),
          }}
        />
      )}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: wp('4%'),
  },

  customerCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  avatar: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontFamily: FONT.Bold,
    fontSize: wp('5%'),
    color: COLORS.text,
  },

  mobile: {
    marginTop: hp('0.5%'),
    fontFamily: FONT.Regular,
    color: COLORS.grey,
    fontSize: wp('4%'),
  },

  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },

  summaryCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingVertical: hp('2%'),
    alignItems: 'center',
  },

  summaryValue: {
    fontFamily: FONT.Bold,
    fontSize: wp('6%'),
    color: COLORS.primary,
  },

  summaryLabel: {
    marginTop: hp('0.8%'),
    fontFamily: FONT.Medium,
    color: COLORS.grey,
    fontSize: wp('3.8%'),
  },

  heading: {
    fontFamily: FONT.Bold,
    fontSize: wp('5%'),
    color: COLORS.text,
    marginBottom: hp('1.5%'),
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: wp('4%'),
    marginBottom: hp('1.5%'),
    flexDirection: 'row',
    alignItems: 'center',
  },

  invoice: {
    fontFamily: FONT.Bold,
    fontSize: wp('4.2%'),
    color: COLORS.text,
  },

  date: {
    marginTop: hp('0.4%'),
    fontFamily: FONT.Regular,
    color: COLORS.grey,
    fontSize: wp('3.8%'),
  },

  payment: {
    marginTop: hp('0.4%'),
    fontFamily: FONT.Medium,
    color: COLORS.green,
    fontSize: wp('3.8%'),
  },

  amount: {
    fontFamily: FONT.Bold,
    fontSize: wp('5%'),
    color: COLORS.primary,
  },

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    marginTop: hp('2%'),
    fontFamily: FONT.SemiBold,
    fontSize: wp('5%'),
    color: COLORS.grey,
  },

});