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
  green: '#4CAF50',
};

export default function ProductReportScreen({navigation}) {
  const [search, setSearch] = useState('');

  const [products] = useState([
    {
      id: '1',
      name: 'Coffee',
      sold: 120,
      revenue: 14400,
      stock: 35,
    },
    {
      id: '2',
      name: 'Tea',
      sold: 95,
      revenue: 3800,
      stock: 55,
    },
    {
      id: '3',
      name: 'Burger',
      sold: 60,
      revenue: 15000,
      stock: 18,
    },
    {
      id: '4',
      name: 'Pizza',
      sold: 48,
      revenue: 21600,
      stock: 12,
    },
    {
      id: '5',
      name: 'Sandwich',
      sold: 82,
      revenue: 14760,
      stock: 26,
    },
  ]);

  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.left}>
        <View style={styles.iconBox}>
          <Icon
            name="inventory"
            size={30}
            color={COLORS.primary}
          />
        </View>

        <View>
          <Text style={styles.name}>{item.name}</Text>

          <Text style={styles.info}>
            Sold : {item.sold}
          </Text>

          <Text style={styles.info}>
            Revenue : ₹{item.revenue}
          </Text>

          <Text style={styles.stock}>
            Stock : {item.stock}
          </Text>
        </View>
      </View>
    </View>
  );

  const EmptyComponent = () => (
    <View style={styles.empty}>
      <Icon
        name="inventory"
        size={90}
        color="#CCCCCC"
      />

      <Text style={styles.emptyTitle}>
        No Products Found
      </Text>

      <Text style={styles.emptySub}>
        Product report will appear here.
      </Text>
    </View>
  );

  return (
     <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
                            
                         <CommonHeader
          title="Product Report"
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
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      {/* Product List */}

      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
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

          <Text style={styles.btnText}>
            Export PDF
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.excel}>
          <Icon
            name="table-chart"
            size={22}
            color="#FFF"
          />

          <Text style={styles.btnText}>
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

  iconBox: {
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
    marginTop: hp('0.4%'),
    fontFamily: FONT.Regular,
    color: COLORS.grey,
    fontSize: wp('3.8%'),
  },

  stock: {
    marginTop: hp('0.5%'),
    fontFamily: FONT.SemiBold,
    color: COLORS.green,
    fontSize: wp('3.8%'),
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

  btnText: {
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
  },
});