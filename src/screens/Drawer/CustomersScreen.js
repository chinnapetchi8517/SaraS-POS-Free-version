import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CustomAlert from '../../components/CustomAlert';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
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
  grey: '#777',
  border: '#E8E8E8',
  success: '#1B8E3E',
  danger: '#E53935',
};

const CUSTOMER_DATA = [
  {
    id: '1',
    name: 'John Smith',
    mobile: '9876543210',
    address: 'Chennai',
    totalPurchase: 24560,
  },
  {
    id: '2',
    name: 'Rahul Kumar',
    mobile: '9876543211',
    address: 'Bangalore',
    totalPurchase: 7850,
  },
  {
    id: '3',
    name: 'Priya',
    mobile: '9999999999',
    address: 'Coimbatore',
    totalPurchase: 16400,
  },
];

export default function CustomerListScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [customers, setCustomers] = useState(CUSTOMER_DATA);
const [alertConfig, setAlertConfig] = useState({
  visible: false,
  title: '',
  message: '',
  showCancel: false,
  onConfirm: null,
});
  const filteredCustomers = customers.filter(
    item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.mobile.includes(search),
  );

  const deleteCustomer = id => {
  setAlertConfig({
    visible: true,
    title: 'Delete Customer',
    message: 'Are you sure you want to delete this customer?',
    showCancel: true,
    onConfirm: () => {
      setCustomers(prev =>
        prev.filter(item => item.id !== id),
      );

      setAlertConfig({
        visible: true,
        title: 'Success',
        message: 'Customer deleted successfully.',
        showCancel: false,
        onConfirm: () =>
          setAlertConfig(prev => ({
            ...prev,
            visible: false,
          })),
      });
    },
  });
};

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Icon
          name="person"
          color="#FFF"
          size={30}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>
          {item.name}
        </Text>

        <Text style={styles.mobile}>
          📞 {item.mobile}
        </Text>

        <Text style={styles.address}>
          {item.address}
        </Text>

        <Text style={styles.purchase}>
          Total Purchase : ₹{item.totalPurchase}
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() =>
            navigation.navigate('EditCustomer', {
              customer: item,
            })
          }>
          <Icon
            name="edit"
            size={22}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => deleteCustomer(item.id)}>
          <Icon
            name="delete"
            size={22}
            color={COLORS.danger}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() =>
            navigation.navigate(
              'CustomerHistory',
              {
                customer: item,
              },
            )
          }>
          <Icon
            name="history"
            size={22}
            color={COLORS.success}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    
    <View style={styles.container}>
        <Header
        navigation={navigation}
        title="Customer"
      />
      <View style={styles.searchBox}>
        <Icon
          name="search"
          size={22}
          color="#888"
        />

        <TextInput
          placeholder="Search Customer"
          placeholderTextColor="#999"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {filteredCustomers.length === 0 ? (
        <View style={styles.empty}>
          <Icon
            name="people-outline"
            size={90}
            color="#BBBBBB"
          />

          <Text style={styles.emptyTitle}>
            No Customers Found
          </Text>

          <Text style={styles.emptySub}>
            Tap + button to add customer
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredCustomers}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingBottom: hp('12%'),
          }}
          showsVerticalScrollIndicator={false}
        />
      )}

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.fab}
        onPress={() =>
          navigation.navigate('AddCustomer')
        }>
        <Icon
          name="add"
          size={34}
          color="#FFF"
        />
      </TouchableOpacity>
      <CustomAlert
  visible={alertConfig.visible}
  title={alertConfig.title}
  message={alertConfig.message}
  showCancel={alertConfig.showCancel}
  onCancel={() =>
    setAlertConfig(prev => ({
      ...prev,
      visible: false,
    }))
  }
  onConfirm={() => {
    setAlertConfig(prev => ({
      ...prev,
      visible: false,
    }));

    if (alertConfig.onConfirm) {
      alertConfig.onConfirm();
    }
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
    marginLeft: wp('3%'),
    fontSize: wp('4%'),
    color: COLORS.text,
    fontFamily: FONT.Regular,
  },

  card: {
    backgroundColor: COLORS.white,
    marginHorizontal: wp('4%'),
    marginBottom: hp('1.5%'),
    borderRadius: 14,
    padding: wp('4%'),
    flexDirection: 'row',
    elevation: 2,
  },

  avatar: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  info: {
    flex: 1,
    marginLeft: wp('4%'),
  },

  name: {
    fontSize: wp('4.6%'),
    color: COLORS.text,
    fontFamily: FONT.SemiBold,
  },

  mobile: {
    marginTop: hp('0.5%'),
    color: COLORS.grey,
    fontFamily: FONT.Regular,
    fontSize: wp('3.8%'),
  },

  address: {
    marginTop: hp('0.5%'),
    color: COLORS.grey,
    fontFamily: FONT.Regular,
    fontSize: wp('3.8%'),
  },

  purchase: {
    marginTop: hp('0.8%'),
    color: COLORS.success,
    fontFamily: FONT.Bold,
    fontSize: wp('3.8%'),
  },

  actions: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  iconBtn: {
    padding: wp('2%'),
  },

  fab: {
    position: 'absolute',
    right: wp('5%'),
    bottom: hp('3%'),
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    marginTop: hp('2%'),
    fontSize: wp('5%'),
    color: COLORS.text,
    fontFamily: FONT.SemiBold,
  },

  emptySub: {
    marginTop: hp('1%'),
    color: COLORS.grey,
    fontSize: wp('4%'),
    fontFamily: FONT.Regular,
  },
});