import React from 'react';

import {
View,
Text,
TouchableOpacity,
StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FONT from '../utils/font';
import {
widthPercentageToDP as wp,
heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CategoryBar=()=>{

return(

<View style={styles.container}>

<View style={styles.left}>

<Text style={styles.text}>
All Items
</Text>

<Icon
name="arrow-drop-down"
size={30}
color="#666"/>

</View>

<View style={styles.right}>

<TouchableOpacity>

<Icon
name="qr-code-scanner"
size={32}
color="#555"/>

</TouchableOpacity>

<TouchableOpacity>

<Icon
name="search"
size={32}
color="#555"/>

</TouchableOpacity>

</View>

</View>

)

}

export default CategoryBar;

const styles=StyleSheet.create({

container:{
height:hp('8%'),
backgroundColor:'#FFF',
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
paddingHorizontal:wp('4%'),
marginTop:1
},

left:{
flexDirection:'row',
alignItems:'center'
},

text:{
fontSize:22,
color:'#333'
},

right:{
flexDirection:'row',
width:wp('22%'),
justifyContent:'space-between'
}

});