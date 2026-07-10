import React, {useState} from 'react';
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
  text:'#222',
  grey:'#777',
};

export default function GSTReportScreen({navigation}){

const [search,setSearch]=useState('');

const [reports]=useState([
{
id:'1',
invoice:'INV001',
taxable:1200,
gst:'5%',
gstAmount:60,
total:1260,
},
{
id:'2',
invoice:'INV002',
taxable:2500,
gst:'12%',
gstAmount:300,
total:2800,
},
{
id:'3',
invoice:'INV003',
taxable:5000,
gst:'18%',
gstAmount:900,
total:5900,
},
]);

const filtered=reports.filter(item=>
item.invoice.toLowerCase().includes(search.toLowerCase())
);

const renderItem=({item})=>(

<View style={styles.card}>

<Text style={styles.invoice}>
{item.invoice}
</Text>

<Text style={styles.row}>
Taxable Amount : ₹{item.taxable}
</Text>

<Text style={styles.row}>
GST Rate : {item.gst}
</Text>

<Text style={styles.row}>
GST Amount : ₹{item.gstAmount}
</Text>

<Text style={styles.total}>
Total : ₹{item.total}
</Text>

</View>

);

return(
 <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
                        
                     <CommonHeader
      title="GST Report"
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
placeholder="Search Invoice"
placeholderTextColor="#888"
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
margin:wp('4%'),
backgroundColor:'#FFF',
borderRadius:10,
paddingHorizontal:15,
height:hp('6.5%'),
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

invoice:{
fontFamily:FONT.Bold,
fontSize:17,
marginBottom:10,
},

row:{
fontFamily:FONT.Regular,
marginTop:4,
},

total:{
marginTop:10,
fontFamily:FONT.Bold,
fontSize:16,
color:'#2B1247',
},

bottom:{
flexDirection:'row',
padding:15,
},

pdf:{
flex:1,
backgroundColor:'#E53935',
padding:15,
borderRadius:10,
marginRight:8,
alignItems:'center',
flexDirection:'row',
justifyContent:'center',
},

excel:{
flex:1,
backgroundColor:'#43A047',
padding:15,
borderRadius:10,
marginLeft:8,
alignItems:'center',
flexDirection:'row',
justifyContent:'center',
},

btn:{
marginLeft:8,
color:'#FFF',
fontFamily:FONT.Bold,
}

});