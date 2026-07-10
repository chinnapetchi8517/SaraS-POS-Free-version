import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';
import CommonHeader from '../../components/CommonHeader';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';

const COLORS = {
  primary: '#2B1247',
  background: '#F5F5F5',
  white: '#FFF',
  green: '#4CAF50',
  border: '#E5E5E5',
};

const recentOrders = [
  {
    id: '1',
    bill: '#1001',
    amount: '₹420',
  },
  {
    id: '2',
    bill: '#1002',
    amount: '₹680',
  },
  {
    id: '3',
    bill: '#1003',
    amount: '₹210',
  },
];

export default function TodaySalesScreen({
  navigation,
}) {
  const Card = ({title, value}) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        {title}
      </Text>

      <Text style={styles.cardValue}>
        {value}
      </Text>
    </View>
  );

  return (
     <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
                            
                         <CommonHeader
          title="Today's Sales"
         navigation={navigation}
        
        />   
    <View style={styles.container}>
      

      <ScrollView
        showsVerticalScrollIndicator={false}>

        <View style={styles.grid}>
          <Card
            title="Total Sales"
            value="₹25,840"
          />

          <Card
            title="Orders"
            value="156"
          />

          <Card
            title="Cash"
            value="₹15,200"
          />

          <Card
            title="UPI"
            value="₹10,640"
          />

          <Card
            title="Discount"
            value="₹820"
          />

          <Card
            title="GST"
            value="₹1,850"
          />

          <Card
            title="Average Bill"
            value="₹165"
          />

          <Card
            title="Net Sales"
            value="₹24,990"
          />
        </View>

        <Text style={styles.section}>
          Recent Orders
        </Text>

        {recentOrders.map(item => (
          <View
            key={item.id}
            style={styles.orderCard}>
            <View>
              <Text style={styles.bill}>
                Bill {item.bill}
              </Text>

              <Text style={styles.time}>
                Today
              </Text>
            </View>

            <Text style={styles.amount}>
              {item.amount}
            </Text>
          </View>
        ))}

        <View style={styles.exportRow}>
          <TouchableOpacity
            style={styles.pdf}>
            <Icon
              name="picture-as-pdf"
              size={22}
              color="#FFF"
            />

            <Text style={styles.btnText}>
              PDF
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.excel}>
            <Icon
              name="table-chart"
              size={22}
              color="#FFF"
            />

            <Text style={styles.btnText}>
              Excel
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{height: hp('5%')}} />
      </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: wp('4%'),
  },

  card: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: hp('2.5%'),
    marginBottom: hp('2%'),
    alignItems: 'center',
    elevation: 2,
  },

  cardTitle: {
    fontFamily: FONT.Medium,
    color: '#666',
    fontSize: wp('3.8%'),
  },

  cardValue: {
    marginTop: hp('1%'),
    fontFamily: FONT.Bold,
    fontSize: wp('5.3%'),
    color: COLORS.primary,
  },

  section: {
    marginHorizontal: wp('4%'),
    marginBottom: hp('1.5%'),
    fontFamily: FONT.Bold,
    fontSize: wp('5%'),
  },

  orderCard: {
    marginHorizontal: wp('4%'),
    marginBottom: hp('1.5%'),
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: wp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  bill: {
    fontFamily: FONT.Bold,
    fontSize: wp('4.3%'),
  },

  time: {
    marginTop: hp('0.4%'),
    color: '#777',
    fontFamily: FONT.Regular,
  },

  amount: {
    color: COLORS.green,
    fontFamily: FONT.Bold,
    fontSize: wp('4.8%'),
  },

  exportRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('4%'),
    marginTop: hp('2%'),
  },

  pdf: {
    flex: 1,
    backgroundColor: '#E53935',
    marginRight: wp('2%'),
    height: hp('6.5%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  excel: {
    flex: 1,
    backgroundColor: '#43A047',
    marginLeft: wp('2%'),
    height: hp('6.5%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  btnText: {
    color: '#FFF',
    marginLeft: 8,
    fontFamily: FONT.Bold,
  },
});