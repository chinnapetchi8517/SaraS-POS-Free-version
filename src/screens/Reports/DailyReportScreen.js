import React, {useState} from 'react';
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

const COLORS = {
  primary: '#2B1247',
  background: '#F5F5F5',
  white: '#FFF',
  border: '#E5E5E5',
  green: '#4CAF50',
};

const transactions = [
  {id:'1', bill:'#1001', customer:'Rahul', amount:'₹420'},
  {id:'2', bill:'#1002', customer:'Arun', amount:'₹680'},
  {id:'3', bill:'#1003', customer:'Kumar', amount:'₹210'},
];

export default function DailyReportScreen({navigation}) {

  const selectedDate = new Date().toLocaleDateString();

  const Card = ({title,value}) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );

  return (
     <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
                        
                     <CommonHeader
      title="Daily Report"
     navigation={navigation}
    
    />   
    <View style={styles.container}>

      {/* <Header
        navigation={navigation}
        title="Daily Report"
      /> */}

      <ScrollView showsVerticalScrollIndicator={false}>

        <TouchableOpacity style={styles.dateBox}>
          <Icon
            name="calendar-month"
            size={22}
            color={COLORS.primary}
          />
          <Text style={styles.dateText}>
            {selectedDate}
          </Text>
        </TouchableOpacity>

        <View style={styles.grid}>

          <Card title="Sales" value="₹18,500" />
          <Card title="Orders" value="124" />
          <Card title="Discount" value="₹640" />
          <Card title="GST" value="₹1,420" />
          <Card title="Cash" value="₹9,800" />
          <Card title="UPI" value="₹8,700" />

        </View>

        <Text style={styles.heading}>
          Transactions
        </Text>

        {transactions.map(item=>(
          <View key={item.id} style={styles.row}>
            <View>
              <Text style={styles.bill}>{item.bill}</Text>
              <Text style={styles.customer}>{item.customer}</Text>
            </View>

            <Text style={styles.amount}>
              {item.amount}
            </Text>
          </View>
        ))}

        <View style={styles.buttonRow}>

          <TouchableOpacity style={styles.pdf}>
            <Icon
              name="picture-as-pdf"
              size={22}
              color="#FFF"
            />
            <Text style={styles.buttonText}>PDF</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.excel}>
            <Icon
              name="table-chart"
              size={22}
              color="#FFF"
            />
            <Text style={styles.buttonText}>Excel</Text>
          </TouchableOpacity>

        </View>

        <View style={{height:40}} />

      </ScrollView>

    </View>
    </View>
  );
}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:COLORS.background,
},

dateBox:{
margin:wp('4%'),
backgroundColor:'#FFF',
padding:15,
borderRadius:12,
flexDirection:'row',
alignItems:'center',
},

dateText:{
marginLeft:10,
fontFamily:FONT.Medium,
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
fontSize:22,
color:COLORS.primary,
},

heading:{
marginHorizontal:wp('4%'),
marginBottom:15,
fontFamily:FONT.Bold,
fontSize:20,
},

row:{
backgroundColor:'#FFF',
marginHorizontal:wp('4%'),
marginBottom:12,
padding:15,
borderRadius:12,
flexDirection:'row',
justifyContent:'space-between',
},

bill:{
fontFamily:FONT.Bold,
},

customer:{
marginTop:4,
fontFamily:FONT.Regular,
color:'#777',
},

amount:{
fontFamily:FONT.Bold,
color:COLORS.green,
},

buttonRow:{
flexDirection:'row',
marginHorizontal:wp('4%'),
marginTop:25,
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
color:'#FFF',
marginLeft:8,
fontFamily:FONT.Bold,
}

});