import React from 'react';

import {
View,
Text,
TouchableOpacity,
StyleSheet,
} from 'react-native';

import {
widthPercentageToDP as wp,
heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FONT from '../utils/font';
const ChargeCard=()=>{

return(

<View style={styles.container}>

<TouchableOpacity style={styles.button}>

<Text style={styles.charge}>
CHARGE
</Text>

<Text style={styles.amount}>
₹0.00
</Text>

</TouchableOpacity>

</View>

)

}

export default ChargeCard;

const styles=StyleSheet.create({

container:{
backgroundColor:'#FFF',
padding:wp('5%')
},

button:{
backgroundColor:'#2B1247',
height:hp('10%'),
borderRadius:4,
justifyContent:'center',
alignItems:'center'
},

charge:{
color:'#FFF',
fontSize:26,
fontWeight:'700'
},

amount:{
color:'#FFF',
fontSize:22,
marginTop:5
}

});