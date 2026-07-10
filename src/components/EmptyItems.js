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

const EmptyItems=({navigation})=>{

return(

<View style={styles.container}>

<Text style={styles.title}>
You have no items yet
</Text>

<Text style={styles.subtitle}>
Go to items menu to add an item
</Text>

<TouchableOpacity
style={styles.button}
onPress={()=>navigation.navigate('Items')}>

<Text style={styles.buttonText}>
GO TO ITEMS
</Text>

</TouchableOpacity>

</View>

)

}

export default EmptyItems;

const styles=StyleSheet.create({

container:{
flex:1,
justifyContent:'center',
alignItems:'center'
},

title:{
fontSize:wp('8%'),
color:'#666'
},

subtitle:{
marginTop:hp('1%'),
fontSize:wp('4.8%'),
color:'#888'
},

button:{
marginTop:hp('4%'),
backgroundColor:'#2B1247',
paddingVertical:hp('2%'),
paddingHorizontal:wp('12%'),
borderRadius:4
},

buttonText:{
fontSize:wp('5%'),
fontWeight:'700',
color:'#FFF'
}

});