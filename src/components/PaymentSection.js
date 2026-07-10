import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FONT from '../utils/font';
export default function PaymentSection({
  payCash,
  payUPI,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Payment</Text>

      <View style={styles.row}>
        <Text>Subtotal</Text>
        <Text>₹120</Text>
      </View>

      <View style={styles.row}>
        <Text>GST (5%)</Text>
        <Text>₹6</Text>
      </View>

      <View style={styles.row}>
        <Text>Discount</Text>
        <Text>-₹10</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.total}>Grand Total</Text>
        <Text style={styles.total}>₹116</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.cash}
          onPress={payCash}>
          <Text style={styles.white}>Cash</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.upi}
          onPress={payUPI}>
          <Text style={styles.white}>UPI</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
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
    color: '#222',
    fontFamily: FONT.Bold,
    marginBottom: 15,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },

  label: {
    fontSize: 16,
    color: '#555',
    fontFamily: FONT.Regular,
  },

  value: {
    fontSize: 16,
    color: '#222',
    fontFamily: FONT.Medium,
  },

  total: {
    fontSize: 18,
    color: '#2B1247',
    fontFamily: FONT.Bold,
  },

  buttons: {
    marginTop: 20,
    flexDirection: 'row',
  },

  cash: {
    flex: 1,
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },

  upi: {
    flex: 1,
    backgroundColor: '#2B1247',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  white: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: FONT.SemiBold,
  },
});