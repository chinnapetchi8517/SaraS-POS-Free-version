import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';

import Header from '../../components/Header';
import CommonHeader from '../../components/CommonHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  red: '#E53935',
};

export default function StockHistoryScreen({navigation}) {
  const [search, setSearch] = useState('');

  const [history] = useState([
    {
      id: '1',
      product: 'Coffee',
      type: 'IN',
      qty: 50,
      opening: 100,
      closing: 150,
      date: '10 Jul 2026',
    },
    {
      id: '2',
      product: 'Tea',
      type: 'OUT',
      qty: 10,
      opening: 80,
      closing: 70,
      date: '10 Jul 2026',
    },
    {
      id: '3',
      product: 'Burger',
      type: 'IN',
      qty: 30,
      opening: 40,
      closing: 70,
      date: '09 Jul 2026',
    },
    {
      id: '4',
      product: 'Pizza',
      type: 'OUT',
      qty: 8,
      opening: 25,
      closing: 17,
      date: '09 Jul 2026',
    },
  ]);

  const filteredHistory = history.filter(item =>
    item.product
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.left}>
        <View
          style={[
            styles.iconBox,
            {
              backgroundColor:
                item.type === 'IN'
                  ? '#E8F5E9'
                  : '#FFEBEE',
            },
          ]}>
          <Icon
            name={
              item.type === 'IN'
                ? 'arrow-downward'
                : 'arrow-upward'
            }
            size={28}
            color={
              item.type === 'IN'
                ? COLORS.green
                : COLORS.red
            }
          />
        </View>

        <View style={{flex: 1}}>
          <Text style={styles.product}>
            {item.product}
          </Text>

          <Text style={styles.date}>
            {item.date}
          </Text>

          <Text style={styles.stock}>
            Opening : {item.opening}
          </Text>

          <Text style={styles.stock}>
            Closing : {item.closing}
          </Text>
        </View>
      </View>

      <View style={{alignItems: 'flex-end'}}>
        <View
          style={[
            styles.badge,
            {
              backgroundColor:
                item.type === 'IN'
                  ? '#4CAF50'
                  : '#E53935',
            },
          ]}>
          <Text style={styles.badgeText}>
            {item.type}
          </Text>
        </View>

        <Text style={styles.qty}>
          Qty : {item.qty}
        </Text>
      </View>
    </View>
  );

  const EmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Icon
        name="history"
        size={90}
        color="#CCCCCC"
      />

      <Text style={styles.emptyTitle}>
        No Stock History
      </Text>

      <Text style={styles.emptySubtitle}>
        Stock transactions will appear here.
      </Text>
    </View>
  );

  return (
     <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="Stock History"
 navigation={navigation}

/>
    <View style={styles.container}>
      

      {/* Search */}

      <View style={styles.searchBox}>
        <Icon
          name="search"
          size={22}
          color="#777"
        />

        <TextInput
          placeholder="Search Product"
          placeholderTextColor="#999"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* List */}

      <FlatList
        data={filteredHistory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={{
          paddingBottom: hp('3%'),
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  left: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },

  iconBox: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('4%'),
  },

  product: {
    fontSize: wp('4.5%'),
    fontFamily: FONT.Bold,
    color: COLORS.text,
  },

  date: {
    marginTop: hp('0.3%'),
    color: COLORS.grey,
    fontFamily: FONT.Regular,
    fontSize: wp('3.6%'),
  },

  stock: {
    marginTop: hp('0.4%'),
    color: COLORS.text,
    fontFamily: FONT.Medium,
    fontSize: wp('3.8%'),
  },

  badge: {
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('0.5%'),
    borderRadius: 20,
  },

  badgeText: {
    color: '#FFF',
    fontFamily: FONT.Bold,
    fontSize: wp('3.3%'),
  },

  qty: {
    marginTop: hp('1%'),
    fontFamily: FONT.Bold,
    color: COLORS.text,
    fontSize: wp('3.8%'),
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('15%'),
    paddingHorizontal: wp('10%'),
  },

  emptyTitle: {
    marginTop: hp('2%'),
    fontSize: wp('5.5%'),
    fontFamily: FONT.Bold,
    color: COLORS.text,
  },

  emptySubtitle: {
    marginTop: hp('1%'),
    textAlign: 'center',
    color: COLORS.grey,
    fontFamily: FONT.Regular,
    fontSize: wp('4%'),
  },
});