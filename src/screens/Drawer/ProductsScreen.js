import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import FONT from '../../utils/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomAlert from '../../components/CustomAlert';
const COLORS = {
  primary: '#2B1247',
  background: '#F5F5F5',
  white: '#FFF',
};

const PRODUCTS = [
  {
    id: '1',
    name: 'Coffee',
    category: 'Beverages',
    barcode: '1001',
    sellingPrice: 120,
    purchasePrice: 90,
    stock: 50,
    gst: '5%',
    unit: 'Nos',
    image: 'https://cdn.dummyjson.com/recipe-images/3.webp',
  },
  {
    id: '2',
    name: 'Burger',
    category: 'Fast Food',
    barcode: '1002',
    sellingPrice: 250,
    purchasePrice: 180,
    stock: 30,
    gst: '5%',
    unit: 'Nos',
    image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
  },
  {
    id: '3',
    name: 'Burger',
    category: 'Fast Food',
    barcode: '1002',
    sellingPrice: 250,
    purchasePrice: 180,
    stock: 30,
    gst: '5%',
    unit: 'Nos',
    image: 'https://cdn.dummyjson.com/recipe-images/2.webp',
  },
];

export default function ProductsScreen({navigation}) {
//   const [search, setSearch] = useState('');

//   const filtered = PRODUCTS.filter(item =>
//     item.name.toLowerCase().includes(search.toLowerCase()),
//   );
const [products, setProducts] = useState(PRODUCTS);
const [search, setSearch] = useState('');
const [alertConfig, setAlertConfig] = useState({
  visible: false,
  title: '',
  message: '',
  onConfirm: null,
  showCancel: false,
});
const filtered = products.filter(item =>
  item.name.toLowerCase().includes(search.toLowerCase()),
);
 const renderItem = ({item}) => (
  <View style={styles.card}>
    <Image
      source={{uri: item.image}}
      style={styles.image}
    />

    <View style={{flex: 1}}>
      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.text}>
        {item.category}
      </Text>

      <Text style={styles.text}>
        Barcode : {item.barcode}
      </Text>

      <Text style={styles.text}>
        Stock : {item.stock}
      </Text>

      <Text style={styles.text}>
        GST : {item.gst}
      </Text>

      <Text style={styles.price}>
        ₹{item.sellingPrice}
      </Text>
    </View>

    <View style={styles.actionContainer}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() =>
          navigation.navigate('EditProduct', {
            product: item,
          })
        }>
        <Icon
          name="edit"
          size={22}
          color="#2B1247"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() =>
          deleteProduct(item.id)
        }>
        <Icon
          name="delete"
          size={22}
          color="#E53935"
        />
      </TouchableOpacity>
    </View>
  </View>
);
const deleteProduct = id => {
  setAlertConfig({
    visible: true,
    title: 'Delete Product',
    message: 'Are you sure you want to delete this product?',
    showCancel: true,
    onConfirm: () => {
      setProducts(prev =>
        prev.filter(item => item.id !== id),
      );

      setAlertConfig({
        visible: true,
        title: 'Success',
        message: 'Product deleted successfully.',
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
  return (
    <View style={styles.container}>
   <Header
          navigation={navigation}
          title="Products"
        />
      <View style={styles.search}>
        <Icon
          name="search"
          size={22}
          color="#777"
        />

        <TextInput
          placeholder="Search Products"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />

        <TouchableOpacity>
          <Icon
            name="filter-list"
            size={26}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filtered}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingBottom: hp('12%'),
        }}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() =>
          navigation.navigate('AddProduct')
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

  search: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: wp('4%'),
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: wp('3%'),
    height: hp('6.5%'),
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: wp('4%'),
    fontFamily: FONT.Regular,
    color: '#222',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginHorizontal: wp('4%'),
    marginBottom: hp('1.5%'),
    borderRadius: 12,
    padding: wp('3%'),
    elevation: 2,
  },

  image: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: 10,
    marginRight: wp('3%'),
  },

  name: {
    fontSize: wp('4.6%'),
    color: '#222',
    fontFamily: FONT.Bold,
  },

  text: {
    color: '#666',
    marginTop: 2,
    fontSize: wp('3.5%'),
    fontFamily: FONT.Regular,
  },

  price: {
    color: COLORS.primary,
    fontSize: wp('4.5%'),
    alignSelf: 'center',
    fontFamily: FONT.Bold,
  },

  fab: {
    position: 'absolute',
    bottom: hp('3%'),
    right: wp('6%'),
    width: wp('16%'),
    height: wp('16%'),
    borderRadius: wp('8%'),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  actionContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: wp('2%'),
  },

  iconButton: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('0.5%'),
  },
});