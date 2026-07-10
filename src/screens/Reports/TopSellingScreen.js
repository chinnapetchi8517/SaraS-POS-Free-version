import React,{useState} from 'react';
import {
View,
Text,
StyleSheet,
FlatList,
TextInput,
TouchableOpacity,
} from 'react-native';

import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommonHeader from '../../components/CommonHeader';
import {
widthPercentageToDP as wp,
heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';

const COLORS={
primary:'#2B1247',
background:'#F5F5F5',
white:'#FFF',
border:'#E5E5E5',
};

export default function TopSellingScreen({navigation}){

const [search,setSearch]=useState('');

const [products]=useState([
{
id:'1',
name:'Coffee',
qty:450,
revenue:54000,
},
{
id:'2',
name:'Burger',
qty:320,
revenue:80000,
},
{
id:'3',
name:'Pizza',
qty:250,
revenue:112500,
},
{
id:'4',
name:'Tea',
qty:210,
revenue:8400,
},
]);

const filtered=products.filter(item=>
item.name.toLowerCase().includes(search.toLowerCase())
);

const renderItem=({item,index})=>(

<View style={styles.card}>

<View style={styles.rank}>

<Text style={styles.rankText}>
#{index+1}
</Text>

</View>

<View style={{flex:1}}>

<Text style={styles.name}>
{item.name}
</Text>

<Text style={styles.qty}>
Sold : {item.qty}
</Text>

<Text style={styles.revenue}>
Revenue : ₹{item.revenue}
</Text>

</View>

</View>

);

return(
 <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
                            
                         <CommonHeader
          title="Top Selling Products"
         navigation={navigation}
        
        />  
<View style={styles.container}>



<View style={styles.search}>

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

<FlatList
data={filtered}
renderItem={renderItem}
keyExtractor={item=>item.id}
contentContainerStyle={{paddingBottom:120}}
/>

<View style={styles.bottom}>

<TouchableOpacity style={styles.pdf}>

<Icon
name="picture-as-pdf"
size={22}
color="#FFF"
/>

<Text style={styles.btn}>
PDF
</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.excel}>

<Icon
name="table-chart"
size={22}
color="#FFF"
/>

<Text style={styles.btn}>
Excel
</Text>

</TouchableOpacity>

</View>

</View>
</View>

);

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:COLORS.background,
},

search:{
margin:15,
backgroundColor:'#FFF',
borderRadius:10,
height:hp('6.5%'),
paddingHorizontal:15,
alignItems:'center',
flexDirection:'row',
},

input:{
flex:1,
marginLeft:10,
fontFamily:FONT.Regular,
},

card:{
backgroundColor:'#FFF',
marginHorizontal:15,
marginBottom:12,
padding:18,
borderRadius:12,
flexDirection:'row',
alignItems:'center',
},

rank:{
width:55,
height:55,
borderRadius:28,
backgroundColor:'#2B1247',
justifyContent:'center',
alignItems:'center',
marginRight:15,
},

rankText:{
color:'#FFF',
fontFamily:FONT.Bold,
fontSize:18,
},

name:{
fontFamily:FONT.Bold,
fontSize:17,
},

qty:{
marginTop:5,
fontFamily:FONT.Regular,
},

revenue:{
marginTop:5,
fontFamily:FONT.Bold,
color:'#2B1247',
},

bottom:{
padding:15,
flexDirection:'row',
},

pdf:{
flex:1,
backgroundColor:'#E53935',
padding:15,
borderRadius:10,
marginRight:8,
alignItems:'center',
justifyContent:'center',
flexDirection:'row',
},

excel:{
flex:1,
backgroundColor:'#43A047',
padding:15,
borderRadius:10,
marginLeft:8,
alignItems:'center',
justifyContent:'center',
flexDirection:'row',
},

btn:{
marginLeft:8,
color:'#FFF',
fontFamily:FONT.Bold,
}

});