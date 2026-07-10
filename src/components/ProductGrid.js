import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const defaultProducts = [
  {id: '1', name: 'Coffee', barcode: '1001', price: 120},
  {id: '2', name: 'Tea', barcode: '1002', price: 40},
  {id: '3', name: 'Burger', barcode: '1003', price: 250},
  {id: '4', name: 'Pizza', barcode: '1004', price: 450},
  {id: '5', name: 'Sandwich', barcode: '1005', price: 180},
  {id: '6', name: 'Juice', barcode: '1006', price: 90},
];
import FONT from '../utils/font';
export default function ProductGrid({
  products = defaultProducts,
  onAdd,
}) {

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => onAdd && onAdd(item)}>

      <Text style={styles.name}>
        {item.name}
      </Text>

      <Text style={styles.price}>
        ₹{item.price}
      </Text>

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => onAdd && onAdd(item)}>

        <Text style={styles.addText}>
          ADD
        </Text>

      </TouchableOpacity>

    </TouchableOpacity>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={item => item.id}
      contentContainerStyle={{paddingBottom: 20}}
      showsVerticalScrollIndicator={false}
    />
  );
}

// const styles = StyleSheet.create({
//   card: {
//     flex: 1,
//     margin: 8,
//     backgroundColor: '#FFF',
//     padding: 20,
//     borderRadius: 12,
//     alignItems: 'center',
//     elevation: 3,
//   },

//   name: {
//     fontWeight: '700',
//     fontSize: 18,
//   },

//   price: {
//     marginTop: 8,
//     color: '#2B1247',
//     fontWeight: '700',
//     fontSize: 16,
//   },

//   addBtn: {
//     marginTop: 15,
//     backgroundColor: '#2B1247',
//     paddingHorizontal: 20,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },

//   addText: {
//     color: '#FFF',
//     fontWeight: '700',
//     fontSize: 14,
//   },
// });
const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',

    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  name: {
    fontSize: 18,
    color: '#222',
    fontFamily: FONT.SemiBold,
    textAlign: 'center',
  },

  price: {
    marginTop: 8,
    fontSize: 16,
    color: '#2B1247',
    fontFamily: FONT.Bold,
  },

  addBtn: {
    marginTop: 15,
    backgroundColor: '#2B1247',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: FONT.Bold,
    letterSpacing: 0.5,
  },
});