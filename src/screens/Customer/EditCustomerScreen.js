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
  danger: '#E53935',
};

export default function EditCustomerScreen({
  navigation,
  route,
}) {
  const customer = route.params?.customer || {};

  const [name, setName] = useState(customer.name || '');
  const [mobile, setMobile] = useState(customer.mobile || '');
  const [address, setAddress] = useState(customer.address || '');
  const [gst, setGST] = useState(customer.gst || '');
const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [confirmText, setConfirmText] = useState('OK');
const [cancelText, setCancelText] = useState('');
const [onConfirm, setOnConfirm] = useState(() => () => {});
 const updateCustomer = () => {
  if (name.trim() === '') {
    setAlertTitle('Validation');
    setAlertMessage('Customer name is required.');
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

  const updatedCustomer = {
    ...customer,
    name,
    mobile,
    address,
    gst,
  };

  console.log('Updated Customer', updatedCustomer);

  setAlertTitle('Success');
  setAlertMessage('Customer updated successfully.');
  setConfirmText('OK');
  setCancelText('');

  setOnConfirm(() => () => {
    setAlertVisible(false);
    navigation.goBack();
  });

  setAlertVisible(true);
};

  const deleteCustomer = () => {
  setAlertTitle('Delete Customer');
  setAlertMessage(
    'Are you sure you want to delete this customer?'
  );

  setConfirmText('Delete');
  setCancelText('Cancel');

  setOnConfirm(() => () => {
    console.log('Deleted Customer', customer.id);

    setAlertTitle('Deleted');
    setAlertMessage('Customer deleted successfully.');

    setConfirmText('OK');
    setCancelText('');

    setOnConfirm(() => () => {
      setAlertVisible(false);
      navigation.goBack();
    });
  });

  setAlertVisible(true);
};

  return (
             <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="Edit Customer"
 navigation={navigation}

/>
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>
{/* 
      <Text style={styles.heading}>
        Edit Customer
      </Text> */}

      <Text style={styles.label}>
        Customer Name *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Customer Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>
        Mobile Number *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#999"
        keyboardType="number-pad"
        maxLength={10}
        value={mobile}
        onChangeText={setMobile}
      />

      <Text style={styles.label}>
        Address
      </Text>

      <TextInput
        style={styles.textArea}
        placeholder="Address"
        placeholderTextColor="#999"
        multiline
        numberOfLines={4}
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.label}>
        GST Number
      </Text>

      <TextInput
        style={styles.input}
        placeholder="GST Number"
        placeholderTextColor="#999"
        value={gst}
        onChangeText={setGST}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.updateButton}
        onPress={updateCustomer}>
        <Text style={styles.buttonText}>
          UPDATE CUSTOMER
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.deleteButton}
        onPress={deleteCustomer}>
        <Text style={styles.buttonText}>
          DELETE CUSTOMER
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
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: wp('4%'),
    fontSize: wp('4%'),
    color: COLORS.text,
    fontFamily: FONT.Regular,
  },

  textArea: {
    minHeight: hp('14%'),
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: wp('4%'),
    paddingTop: hp('1.5%'),
    textAlignVertical: 'top',
    fontSize: wp('4%'),
    color: COLORS.text,
    fontFamily: FONT.Regular,
  },

  updateButton: {
    height: hp('7%'),
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('4%'),
    elevation: 3,
  },

  deleteButton: {
    height: hp('7%'),
    backgroundColor: COLORS.danger,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
    elevation: 3,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: wp('4.5%'),
    fontFamily: FONT.Bold,
    letterSpacing: 0.5,
  },
});