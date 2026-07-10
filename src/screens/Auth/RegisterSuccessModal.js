import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FONT from '../../utils/font';
const COLORS = {
  primary: '#2B1247',
  white: '#FFFFFF',
  text: '#222',
  overlay: 'rgba(0,0,0,0.45)',
};

const RegisterSuccessModal = ({
  visible,
  email,
  onClose,
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}>
      <View style={styles.overlay}>

        <View style={styles.box}>

          <Text style={styles.title}>
            Thank you for registering!
          </Text>

          <Text style={styles.message}>
            Please confirm the correctness of your email address.
            A confirmation letter has been sent to
            {' '}
            <Text style={{fontWeight:'700'}}>
              {email}
            </Text>
            .
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={onClose}>
            <Text style={styles.buttonText}>
              OK
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </Modal>
  );
};

export default RegisterSuccessModal;
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    width: wp('88%'),
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: wp('6%'),
  },

  title: {
    fontSize: wp('6.5%'),
    fontFamily: FONT.Bold,
    color: COLORS.text,
    marginBottom: hp('3%'),
  },

  message: {
    fontSize: wp('4.5%'),
    lineHeight: hp('3.8%'),
    color: '#444',
    fontFamily: FONT.Regular,
  },

  button: {
    alignSelf: 'flex-end',
    marginTop: hp('4%'),
  },

  buttonText: {
    fontSize: wp('5.2%'),
    fontFamily: FONT.SemiBold,
    color: COLORS.primary,
  },

  emailText: {
    fontFamily: FONT.Bold,
    color: COLORS.text,
  },
});
// const styles = StyleSheet.create({

// overlay:{
// flex:1,
// backgroundColor:COLORS.overlay,
// justifyContent:'center',
// alignItems:'center'
// },

// box:{
// width:wp('88%'),
// backgroundColor:COLORS.white,
// borderRadius:10,
// padding:wp('6%'),
// },

// title:{
// fontSize:26,
// fontWeight:'700',
// color:COLORS.text,
// marginBottom:hp('3%')
// },

// message:{
// fontSize:18,
// lineHeight:30,
// color:'#444'
// },

// button:{
// alignSelf:'flex-end',
// marginTop:hp('4%')
// },

// buttonText:{
// fontSize:22,
// fontWeight:'600',
// color:COLORS.primary
// }

// });