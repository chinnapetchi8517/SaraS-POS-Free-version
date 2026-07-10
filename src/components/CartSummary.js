import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FONT from '../utils/font';
export default function CartSummary({
  cart,
  increaseQty,
  decreaseQty,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Cart</Text>

      {cart.length === 0 ? (
        <Text style={styles.empty}>Cart is empty</Text>
      ) : (
        cart.map(item => (
          <View key={item.id} style={styles.row}>
            <View style={{flex: 1}}>
              <Text style={styles.name}>{item.name}</Text>
            </View>

            <View style={styles.qty}>
              <TouchableOpacity
                onPress={() => decreaseQty(item.id)}>
                <Icon
                  name="remove-circle-outline"
                  size={24}
                  color="#2B1247"
                />
              </TouchableOpacity>

              <Text style={styles.count}>
                {item.qty}
              </Text>

              <TouchableOpacity
                onPress={() => increaseQty(item.id)}>
                <Icon
                  name="add-circle-outline"
                  size={24}
                  color="#2B1247"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>
              ₹{item.price * item.qty}
            </Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 15,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 12,

    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  title: {
    fontSize: 20,
    fontFamily: FONT.Bold,
    color: '#222',
    marginBottom: 10,
  },

  empty: {
    textAlign: 'center',
    color: '#999',
    fontSize: 15,
    fontFamily: FONT.Regular,
    paddingVertical: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  name: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    fontFamily: FONT.Medium,
  },

  qty: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  count: {
    marginHorizontal: 12,
    fontSize: 18,
    color: '#222',
    fontFamily: FONT.Bold,
  },

  price: {
    width: 70,
    textAlign: 'right',
    fontSize: 16,
    color: '#2B1247',
    fontFamily: FONT.Bold,
  },
});