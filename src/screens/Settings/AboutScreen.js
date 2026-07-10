import React from 'react';
import {
View,
Text,
StyleSheet,
Image,
} from 'react-native';

import Header from '../../components/Header';

import FONT from '../../utils/font';
import CommonHeader from '../../components/CommonHeader';
export default function AboutScreen({navigation}){

return(
<View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="About"
 navigation={navigation}

/>
<View style={styles.container}>



<View style={styles.center}>

<Image
source={require('../../assets/images/logo.png')}
style={styles.logo}
/>

<Text style={styles.app}>
SaraS POS
</Text>

<Text style={styles.version}>
Version 1.0.0
</Text>

<Text style={styles.info}>
Restaurant Billing & Inventory Management System
</Text>

<Text style={styles.copy}>
© 2026 SaraS Technologies
</Text>

</View>

</View>
</View>

);

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:'#F5F5F5',
},

center:{
flex:1,
justifyContent:'center',
alignItems:'center',
padding:25,
},

logo:{
width:120,
height:120,
resizeMode:'contain',
},

app:{
fontFamily:FONT.Bold,
fontSize:28,
marginTop:25,
},

version:{
fontFamily:FONT.Medium,
fontSize:18,
marginTop:8,
color:'#777',
},

info:{
fontFamily:FONT.Regular,
fontSize:16,
marginTop:25,
textAlign:'center',
},

copy:{
marginTop:50,
fontFamily:FONT.Regular,
color:'#999',
}

});