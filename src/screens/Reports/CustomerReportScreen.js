import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
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
  white: '#FFFFFF',
  border: '#E5E5E5',
  text: '#222222',
  grey: '#777777',
  green: '#43A047',
};

export default function CustomerReportScreen({navigation}) {
  const [search, setSearch] = useState('');

  const [customers] = useState([
    {
      id: '1',
      name: 'Rahul Kumar',
      mobile: '9876543210',
      orders: 18,
      purchase: 28450,
      lastPurchase: '07 Jul 2026',
    },
    {
      id: '2',
      name: 'Arun',
      mobile: '9876500000',
      orders: 10,
      purchase: 15480,
      lastPurchase: '06 Jul 2026',
    },
    {
      id: '3',
      name: 'Priya',
      mobile: '9876511111',
      orders: 14,
      purchase: 21980,
      lastPurchase: '05 Jul 2026',
    },
    {
      id: '4',
      name: 'Kumar',
      mobile: '9876522222',
      orders: 8,
      purchase: 9800,
      lastPurchase: '03 Jul 2026',
    },
  ]);

  const filteredCustomers = customers.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.left}>
        <View style={styles.avatar}>
          <Icon
            name="person"
            size={30}
            color={COLORS.primary}
          />
        </View>

        <View style={{flex: 1}}>
          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.info}>
            📞 {item.mobile}
          </Text>

          <Text style={styles.info}>
            Orders : {item.orders}
          </Text>

          <Text style={styles.amount}>
            Purchase : ₹{item.purchase}
          </Text>

          <Text style={styles.info}>
            Last Purchase : {item.lastPurchase}
          </Text>
        </View>
      </View>
    </View>
  );

  const EmptyComponent = () => (
    <View style={styles.empty}>
      <Icon
        name="people"
        size={90}
        color="#CCCCCC"
      />

      <Text style={styles.emptyTitle}>
        No Customers Found
      </Text>

      <Text style={styles.emptySub}>
        Customer reports will appear here.
      </Text>
    </View>
  );

  return (
     <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
                    
                 <CommonHeader
  title="Customer Report"
 navigation={navigation}

/>   
    <View style={styles.container}>
      {/* <Header
        navigation={navigation}
        title="Customer Report"
      /> */}

      {/* Search */}

      <View style={styles.searchBox}>
        <Icon
          name="search"
          size={22}
          color="#777"
        />

        <TextInput
          placeholder="Search Customer"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      {/* Customer List */}

      <FlatList
        data={filteredCustomers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyComponent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: hp('12%'),
          flexGrow: 1,
        }}
      />

      {/* Export Buttons */}

      <View style={styles.exportRow}>
        <TouchableOpacity style={styles.pdf}>
          <Icon
            name="picture-as-pdf"
            size={22}
            color="#FFF"
          />

          <Text style={styles.buttonText}>
            Export PDF
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.excel}>
          <Icon
            name="table-chart"
            size={22}
            color="#FFF"
          />

          <Text style={styles.buttonText}>
            Export Excel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
    fontFamily: FONT.Regular,
    fontSize: wp('4%'),
    color: COLORS.text,
  },

  card: {
    backgroundColor: COLORS.white,
    marginHorizontal: wp('4%'),
    marginBottom: hp('1.5%'),
    borderRadius: 14,
    padding: wp('4%'),
    elevation: 2,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
    backgroundColor: '#EEE8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('4%'),
  },

  name: {
    fontFamily: FONT.Bold,
    fontSize: wp('4.6%'),
    color: COLORS.text,
  },

  info: {
    marginTop: hp('0.5%'),
    fontFamily: FONT.Regular,
    fontSize: wp('3.8%'),
    color: COLORS.grey,
  },

  amount: {
    marginTop: hp('0.5%'),
    fontFamily: FONT.Bold,
    fontSize: wp('4%'),
    color: COLORS.green,
  },

  exportRow: {
    flexDirection: 'row',
    padding: wp('4%'),
  },

  pdf: {
    flex: 1,
    height: hp('6.5%'),
    backgroundColor: '#E53935',
    borderRadius: 10,
    marginRight: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  excel: {
    flex: 1,
    height: hp('6.5%'),
    backgroundColor: '#43A047',
    borderRadius: 10,
    marginLeft: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  buttonText: {
    color: '#FFF',
    marginLeft: 8,
    fontFamily: FONT.Bold,
  },

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('12%'),
  },

  emptyTitle: {
    marginTop: hp('2%'),
    fontFamily: FONT.Bold,
    fontSize: wp('5.2%'),
    color: COLORS.text,
  },

  emptySub: {
    marginTop: hp('1%'),
    fontFamily: FONT.Regular,
    fontSize: wp('4%'),
    color: COLORS.grey,
    textAlign: 'center',
  },
});