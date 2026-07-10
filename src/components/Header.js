// import React from 'react';
// import {
// View,
// Text,
// TouchableOpacity,
// StyleSheet,
// } from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialIcons';

// import {
// widthPercentageToDP as wp,
// heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// const Header=({navigation})=>{

// return(

// <View style={styles.header}>

// <TouchableOpacity
// onPress={()=>navigation.openDrawer()}>
// <Icon
// name="menu"
// size={32}
// color="#FFF"/>
// </TouchableOpacity>

// <View style={styles.titleRow}>

// <Text style={styles.title}>
// Ticket
// </Text>

// <Icon
// name="receipt-long"
// size={26}
// color="#FFF"/>

// <Text style={styles.count}>
// 0
// </Text>

// </View>

// <View style={styles.right}>

// <Icon
// name="person-add"
// size={28}
// color="#FFF"/>

// <Icon
// name="more-vert"
// size={30}
// color="#FFF"
// style={{marginLeft:18}}/>

// </View>

// </View>

// )

// }

// export default Header;

// const styles=StyleSheet.create({

// header:{
// height:hp('9%'),
// backgroundColor:'#2B1247',
// paddingHorizontal:wp('4%'),
// flexDirection:'row',
// alignItems:'center',
// justifyContent:'space-between'
// },

// titleRow:{
// flexDirection:'row',
// alignItems:'center'
// },

// title:{
// fontSize:wp('7%'),
// color:'#FFF',
// fontWeight:'700',
// marginRight:10
// },

// count:{
// color:'#FFF',
// fontSize:18,
// marginLeft:5
// },

// right:{
// flexDirection:'row'
// }

// }); 


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
import {useNavigation} from '@react-navigation/native';

const PRIMARY = '#2B1247';

const Header = ({
  navigation,
  title = 'Dashboard',
  onNotificationPress,
  onProfilePress,
}) => {
  return (
    <View style={styles.header}>
      {/* Drawer Icon */}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.openDrawer()}>
        <Icon
          name="menu"
          size={30}
          color="#FFF"
        />
      </TouchableOpacity>

      {/* Screen Title */}

      <Text style={styles.title}>
        {title}
      </Text>

      {/* Right Icons */}

      <View style={styles.rightContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          Notification
            onPress={() => navigation.navigate('Notification')}>
          // onPress={onNotificationPress}
          
          <Icon
            name="notifications-none"
            size={28}
            color="#FFF"
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ShopProfile')}
          style={{marginLeft: wp('4%')}}>
          <Icon
            name="account-circle"
            size={30}
            color="#FFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: hp('9%'),
    backgroundColor: PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('4%'),
    elevation: 5,
    //marginTop:20
  },

  title: {
    color: '#FFF',
    fontSize: wp('6%'),
    fontFamily: FONT.Bold,
    letterSpacing: 0.3,
  },

  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});