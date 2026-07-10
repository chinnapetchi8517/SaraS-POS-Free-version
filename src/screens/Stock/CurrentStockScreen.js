import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';
import CommonHeader from '../../components/CommonHeader';
const COLORS = {
  primary: '#2B1247',
  white: '#FFFFFF',
  background: '#F5F5F5',
  border: '#E5E5E5',
  text: '#222',
  grey: '#777',
  green: '#4CAF50',
  red: '#E53935',
};

export default function CurrentStockScreen({navigation}) {
  const [search, setSearch] = useState('');

  const [products] = useState([
    {
      id: '1',
      name: 'Coffee',
      category: 'Beverages',
      stock: 120,
      minimum: 20,
    },
    {
      id: '2',
      name: 'Tea',
      category: 'Beverages',
      stock: 12,
      minimum: 20,
    },
    {
      id: '3',
      name: 'Burger',
      category: 'Fast Food',
      stock: 80,
      minimum: 10,
    },
    {
      id: '4',
      name: 'Pizza',
      category: 'Fast Food',
      stock: 5,
      minimum: 15,
    },
  ]);

  const filtered = products.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({item}) => {
    const lowStock = item.stock <= item.minimum;

    return (
      <View style={styles.card}>
        <View style={styles.icon}>
          <Icon
            name="inventory-2"
            size={30}
            color={COLORS.primary}
          />
        </View>

        <View style={{flex:1}}>
          <Text style={styles.name}>{item.name}</Text>

          <Text style={styles.category}>
            {item.category}
          </Text>

          <Text style={styles.stock}>
            Stock : {item.stock}
          </Text>

          {lowStock && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                LOW STOCK
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity>
          <Icon
            name="edit"
            size={24}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="Current Stock"
 navigation={navigation}

/>
    <View style={styles.container}>
     

      <View style={styles.searchBox}>
        <Icon
          name="search"
          size={22}
          color="#777"
        />

        <TextInput
          placeholder="Search Product"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      <FlatList
        data={filtered}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingBottom: hp('3%'),
        }}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.background,
  },

  searchBox:{
    margin:wp('4%'),
    backgroundColor:'#FFF',
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:15,
    borderWidth:1,
    borderColor:'#DDD',
  },

  input:{
    flex:1,
    height:55,
    marginLeft:10,
    fontFamily:FONT.Regular,
  },

  card:{
    marginHorizontal:wp('4%'),
    marginBottom:15,
    backgroundColor:'#FFF',
    borderRadius:12,
    padding:15,
    flexDirection:'row',
    alignItems:'center',
    elevation:2,
  },

  icon:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'#EEE8FF',
    justifyContent:'center',
    alignItems:'center',
    marginRight:15,
  },

  name:{
    fontFamily:FONT.Bold,
    fontSize:17,
  },

  category:{
    fontFamily:FONT.Regular,
    color:'#666',
  },

  stock:{
    marginTop:5,
    fontFamily:FONT.Medium,
  },

  badge:{
    marginTop:8,
    backgroundColor:'#FFEAEA',
    alignSelf:'flex-start',
    paddingHorizontal:10,
    paddingVertical:4,
    borderRadius:20,
  },

  badgeText:{
    color:'red',
    fontFamily:FONT.Bold,
    fontSize:12,
  },
});