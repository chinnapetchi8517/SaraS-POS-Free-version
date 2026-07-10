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
import CommonHeader from '../../components/CommonHeader';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
widthPercentageToDP as wp,
heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';

const COLORS={
primary:'#2B1247',
background:'#F5F5F5',
white:'#FFF',
};

export default function PaymentReportScreen({navigation}){

const [search,setSearch]=useState('');

const [payments]=useState([
{
id:'1',
invoice:'INV001',
mode:'Cash',
amount:1200,
date:'08 Jul 2026',
},
{
id:'2',
invoice:'INV002',
mode:'UPI',
amount:850,
date:'08 Jul 2026',
},
{
id:'3',
invoice:'INV003',
mode:'Card',
amount:3250,
date:'07 Jul 2026',
},
]);

const filtered=payments.filter(item=>
item.invoice.toLowerCase().includes(search.toLowerCase())||
item.mode.toLowerCase().includes(search.toLowerCase())
);

const renderItem=({item})=>(

<View style={styles.card}>

<View style={styles.top}>

<Text style={styles.invoice}>
{item.invoice}
</Text>

<Text style={styles.amount}>
₹{item.amount}
</Text>

</View>

<Text style={styles.mode}>
Payment Mode : {item.mode}
</Text>

<Text style={styles.date}>
Date : {item.date}
</Text>

</View>

);

return(
 <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
                        
                     <CommonHeader
      title="Payment Report"
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
placeholder="Search Payment"
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
Export PDF
</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.excel}>

<Icon
name="table-chart"
size={22}
color="#FFF"
/>

<Text style={styles.btn}>
Export Excel
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
height:hp('6.5%'),
backgroundColor:'#FFF',
borderRadius:10,
paddingHorizontal:15,
flexDirection:'row',
alignItems:'center',
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
},

top:{
flexDirection:'row',
justifyContent:'space-between',
},

invoice:{
fontFamily:FONT.Bold,
fontSize:16,
},

amount:{
fontFamily:FONT.Bold,
fontSize:18,
color:'#2B1247',
},

mode:{
marginTop:8,
fontFamily:FONT.Medium,
},

date:{
marginTop:5,
fontFamily:FONT.Regular,
color:'#777',
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
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
},

excel:{
flex:1,
backgroundColor:'#43A047',
padding:15,
borderRadius:10,
marginLeft:8,
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
},

btn:{
marginLeft:8,
color:'#FFF',
fontFamily:FONT.Bold,
}

});