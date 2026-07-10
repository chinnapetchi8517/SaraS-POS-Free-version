import React,{useState} from 'react';
import {
View,
Text,
StyleSheet,
TouchableOpacity,
ScrollView,
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
green:'#4CAF50',
};

export default function MonthlyReportScreen({navigation}){

const month='July 2026';

const Card=({title,value})=>(

<View style={styles.card}>

<Text style={styles.cardTitle}>
{title}
</Text>

<Text style={styles.cardValue}>
{value}
</Text>

</View>

);

return(
 <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
                        
                     <CommonHeader
      title="Monthly Report"
     navigation={navigation}
    
    />   
<View style={styles.container}>



<ScrollView>

<TouchableOpacity style={styles.monthBox}>

<Icon
name="date-range"
size={22}
color={COLORS.primary}
/>

<Text style={styles.month}>
{month}
</Text>

</TouchableOpacity>

<View style={styles.grid}>

<Card title="Sales" value="₹5,48,000"/>

<Card title="Orders" value="3560"/>

<Card title="Average Bill" value="₹154"/>

<Card title="GST" value="₹42,500"/>

<Card title="Cash" value="₹2,84,000"/>

<Card title="UPI" value="₹2,64,000"/>

<Card title="Discount" value="₹14,250"/>

<Card title="Profit" value="₹1,95,000"/>

</View>

<View style={styles.summary}>

<Text style={styles.heading}>
Top Selling Product
</Text>

<Text style={styles.product}>
Coffee
</Text>

<Text style={styles.sales}>
Sold : 1,254 Qty
</Text>

</View>

<View style={styles.summary}>

<Text style={styles.heading}>
Top Customer
</Text>

<Text style={styles.product}>
Rahul Kumar
</Text>

<Text style={styles.sales}>
Purchase ₹28,450
</Text>

</View>

<View style={styles.buttonRow}>

<TouchableOpacity style={styles.pdf}>

<Icon
name="picture-as-pdf"
size={22}
color="#FFF"
/>

<Text style={styles.buttonText}>
PDF
</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.excel}>

<Icon
name="table-chart"
size={22}
color="#FFF"
/>

<Text style={styles.buttonText}>
Excel
</Text>

</TouchableOpacity>

</View>

<View style={{height:40}}/>

</ScrollView>

</View>
</View>

)

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:COLORS.background,
},

monthBox:{
margin:wp('4%'),
backgroundColor:'#FFF',
padding:15,
borderRadius:12,
flexDirection:'row',
alignItems:'center',
},

month:{
marginLeft:10,
fontFamily:FONT.Bold,
fontSize:16,
},

grid:{
flexDirection:'row',
flexWrap:'wrap',
justifyContent:'space-between',
paddingHorizontal:wp('4%'),
},

card:{
width:'48%',
backgroundColor:'#FFF',
borderRadius:12,
paddingVertical:20,
marginBottom:15,
alignItems:'center',
elevation:2,
},

cardTitle:{
fontFamily:FONT.Regular,
color:'#777',
},

cardValue:{
marginTop:8,
fontFamily:FONT.Bold,
fontSize:20,
color:COLORS.primary,
},

summary:{
backgroundColor:'#FFF',
marginHorizontal:wp('4%'),
marginBottom:15,
padding:20,
borderRadius:12,
},

heading:{
fontFamily:FONT.Bold,
fontSize:18,
},

product:{
marginTop:10,
fontFamily:FONT.Bold,
fontSize:20,
color:COLORS.primary,
},

sales:{
marginTop:8,
fontFamily:FONT.Regular,
},

buttonRow:{
flexDirection:'row',
marginHorizontal:wp('4%'),
marginTop:20,
},

pdf:{
flex:1,
backgroundColor:'#E53935',
height:55,
borderRadius:10,
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
marginRight:10,
},

excel:{
flex:1,
backgroundColor:'#43A047',
height:55,
borderRadius:10,
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
},

buttonText:{
marginLeft:8,
color:'#FFF',
fontFamily:FONT.Bold,
}

});