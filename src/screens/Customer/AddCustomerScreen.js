import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CustomAlert from '../../components/CustomAlert';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';
import CommonHeader from '../../components/CommonHeader';
const COLORS = {
  primary: '#2B1247',
  white: '#FFFFFF',
  background: '#F5F5F5',
  border: '#DDDDDD',
  text: '#222222',
  grey: '#777777',
};

export default function AddCustomerScreen({navigation}) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [gst, setGST] = useState('');
const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [confirmText, setConfirmText] = useState('OK');
const [cancelText, setCancelText] = useState('');
const [onConfirm, setOnConfirm] = useState(() => () => {});
  const saveCustomer = () => {
  if (name.trim() === '') {
    setAlertTitle('Validation');
    setAlertMessage('Please enter customer name.');
    setConfirmText('OK');
    setCancelText('');
    setOnConfirm(() => () => setAlertVisible(false));
    setAlertVisible(true);
    return;
  }

  if (mobile.length !== 10) {
    setAlertTitle('Validation');
    setAlertMessage('Enter valid mobile number.');
    setConfirmText('OK');
    setCancelText('');
    setOnConfirm(() => () => setAlertVisible(false));
    setAlertVisible(true);
    return;
  }

  const customer = {
    id: Date.now(),
    name,
    mobile,
    address,
    gst,
    totalPurchase: 0,
  };

  console.log(customer);

  setAlertTitle('Success');
  setAlertMessage('Customer added successfully.');
  setConfirmText('OK');
  setCancelText('');

  setOnConfirm(() => () => {
    setAlertVisible(false);
    navigation.goBack();
  });

  setAlertVisible(true);
};
  return (
    <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title=" Add Customer"
 navigation={navigation}

/>
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>

      {/* <Text style={styles.heading}>
        Add Customer
      </Text> */}

      <Text style={styles.label}>
        Customer Name *
      </Text>

      <TextInput
        placeholder="Enter customer name"
        placeholderTextColor="#999"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>
        Mobile Number *
      </Text>

      <TextInput
        placeholder="Enter mobile number"
        placeholderTextColor="#999"
        keyboardType="number-pad"
        maxLength={10}
        value={mobile}
        onChangeText={setMobile}
        style={styles.input}
      />

      <Text style={styles.label}>
        Address
      </Text>

      <TextInput
        placeholder="Enter address"
        placeholderTextColor="#999"
        multiline
        numberOfLines={4}
        value={address}
        onChangeText={setAddress}
        style={styles.textArea}
      />

      <Text style={styles.label}>
        GST Number (Optional)
      </Text>

      <TextInput
        placeholder="Enter GST Number"
        placeholderTextColor="#999"
        value={gst}
        onChangeText={setGST}
        style={styles.input}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={saveCustomer}>
        <Text style={styles.buttonText}>
          SAVE CUSTOMER
        </Text>
      </TouchableOpacity>

      <View style={{height: hp('5%')}} />
    </ScrollView>
    <CustomAlert
  visible={alertVisible}
  title={alertTitle}
  message={alertMessage}
  confirmText={confirmText}
  cancelText={cancelText}
  onCancel={() => setAlertVisible(false)}
  onConfirm={onConfirm}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: wp('5%'),
  },

  heading: {
    fontSize: wp('7%'),
    fontFamily: FONT.Bold,
    color: COLORS.primary,
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
  },

  label: {
    fontSize: wp('4.2%'),
    color: COLORS.text,
    fontFamily: FONT.Medium,
    marginBottom: hp('1%'),
    marginTop: hp('1.5%'),
  },

  input: {
    height: hp('6.5%'),
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: wp('4%'),
    color: COLORS.text,
    fontFamily: FONT.Regular,
    fontSize: wp('4%'),
  },

  textArea: {
    minHeight: hp('14%'),
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: wp('4%'),
    paddingTop: hp('1.5%'),
    textAlignVertical: 'top',
    color: COLORS.text,
    fontFamily: FONT.Regular,
    fontSize: wp('4%'),
  },

  button: {
    marginTop: hp('4%'),
    height: hp('7%'),
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: wp('4.5%'),
    fontFamily: FONT.Bold,
    letterSpacing: 0.5,
  },
});