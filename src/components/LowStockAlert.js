import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FONT from '../utils/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const items = [
  {
    id:'1',
    name:'Milk',
    stock:2,
  },
  {
    id:'2',
    name:'Sugar',
    stock:4,
  },
  {
    id:'3',
    name:'Tea Powder',
    stock:5,
  },
];

export default function LowStockAlert(){

  const renderItem=({item})=>(
    <View style={styles.row}>

      <View style={styles.left}>

        <Icon
          name="warning"
          size={24}
          color="#F44336"
        />

        <Text style={styles.name}>
          {item.name}
        </Text>

      </View>

      <Text style={styles.stock}>
        {item.stock} Left
      </Text>

    </View>
  );

  return(

    <View style={styles.container}>

      <Text style={styles.title}>
        Low Stock Alert
      </Text>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        scrollEnabled={false}
      />

    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: wp('4%'),
    marginTop: hp('2%'),
    marginBottom: hp('3%'),
    elevation: 3,
  },

  title: {
    fontSize: wp('5%'),
    color: '#F44336',
    marginBottom: hp('2%'),
    fontFamily: FONT.Bold,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    marginLeft: 10,
    fontSize: wp('4.3%'),
    color: '#222',
    fontFamily: FONT.SemiBold,
  },

  stock: {
    fontSize: wp('4.2%'),
    color: '#F44336',
    fontFamily: FONT.Bold,
  },
});