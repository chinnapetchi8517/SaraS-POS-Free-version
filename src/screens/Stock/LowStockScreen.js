import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CommonHeader from '../../components/CommonHeader';
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
  white: '#FFF',
  border: '#DDD',
  danger: '#E53935',
};

export default function LowStockScreen({navigation}) {
  const [search, setSearch] = useState('');

  const [products] = useState([
    {
      id: '1',
      name: 'Coffee',
      stock: 5,
      minimum: 20,
    },
    {
      id: '2',
      name: 'Pizza',
      stock: 2,
      minimum: 15,
    },
    {
      id: '3',
      name: 'Tea',
      stock: 8,
      minimum: 25,
    },
  ]);

  const filtered = products.filter(item =>
    item.name
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Icon
          name="warning"
          size={30}
          color={COLORS.danger}
        />
      </View>

      <View style={{flex:1}}>
        <Text style={styles.name}>
          {item.name}
        </Text>

        <Text style={styles.stock}>
          Current : {item.stock}
        </Text>

        <Text style={styles.minimum}>
          Minimum : {item.minimum}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('StockIn')
        }>
        <Text style={styles.buttonText}>
          Stock In
        </Text>
      </TouchableOpacity>
    </View>
  );

  const Empty = () => (
    <View style={styles.empty}>
      <Icon
        name="inventory-2"
        size={90}
        color="#CCCCCC"
      />

      <Text style={styles.emptyTitle}>
        No Low Stock Products
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="Low Stock"
 navigation={navigation}

/>
    <View style={styles.container}>
    
      <View style={styles.search}>
        <Icon
          name="search"
          size={22}
          color="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Search Product"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={Empty}
        contentContainerStyle={{
          paddingBottom: hp('3%'),
          flexGrow: 1,
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

  search:{
    margin:wp('4%'),
    backgroundColor:'#FFF',
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#DDD',
    paddingHorizontal:15,
  },

  input:{
    flex:1,
    height:55,
    marginLeft:10,
    fontFamily:FONT.Regular,
  },

  card:{
    backgroundColor:'#FFF',
    marginHorizontal:wp('4%'),
    marginBottom:15,
    borderRadius:12,
    padding:15,
    flexDirection:'row',
    alignItems:'center',
  },

  icon:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'#FFECEC',
    justifyContent:'center',
    alignItems:'center',
    marginRight:15,
  },

  name:{
    fontFamily:FONT.Bold,
    fontSize:17,
  },

  stock:{
    marginTop:5,
    fontFamily:FONT.Regular,
  },

  minimum:{
    color:'red',
    marginTop:2,
    fontFamily:FONT.Medium,
  },

  button:{
    backgroundColor:COLORS.primary,
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:8,
  },

  buttonText:{
    color:'#FFF',
    fontFamily:FONT.Bold,
  },

  empty:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('18%'),
  },

  emptyTitle:{
    marginTop:15,
    fontSize:18,
    fontFamily:FONT.Bold,
  },
});