import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import CommonHeader from '../../components/CommonHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';
import CustomAlert from '../../components/CustomAlert';
const COLORS = {
  primary: '#2B1247',
  white: '#FFF',
  background: '#F5F5F5',
  border: '#DDDDDD',
  text: '#222',
};

export default function StockOutScreen({navigation}) {
  const [product, setProduct] = useState('');
  const [currentStock] = useState('80');
  const [qty, setQty] = useState('');
  const [reason, setReason] = useState('');
  const [remarks, setRemarks] = useState('');
const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [onConfirm, setOnConfirm] = useState(() => () => {});
  const saveStockOut = () => {
  if (product === '' || qty === '') {
    setAlertTitle('Validation');
    setAlertMessage('Please fill all required fields.');
    setOnConfirm(() => () => setAlertVisible(false));
    setAlertVisible(true);
    return;
  }

  if (Number(qty) > Number(currentStock)) {
    setAlertTitle('Insufficient Stock');
    setAlertMessage('Stock Out quantity exceeds current stock.');
    setOnConfirm(() => () => setAlertVisible(false));
    setAlertVisible(true);
    return;
  }

  setAlertTitle('Success');
  setAlertMessage('Stock Out saved successfully.');
  setOnConfirm(() => () => {
    setAlertVisible(false);
    navigation.goBack();
  });
  setAlertVisible(true);
};

  return (
    <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="Stock Out"
 navigation={navigation}

/>
    <View style={styles.container}>
      

      <ScrollView
        showsVerticalScrollIndicator={false}>

        <Text style={styles.label}>Product *</Text>

        <TextInput
          style={styles.input}
          placeholder="Select Product"
          value={product}
          onChangeText={setProduct}
        />

        <Text style={styles.label}>
          Current Stock
        </Text>

        <TextInput
          editable={false}
          value={currentStock}
          style={styles.input}
        />

        <Text style={styles.label}>
          Stock Out Quantity *
        </Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={qty}
          onChangeText={setQty}
        />

        <Text style={styles.label}>Reason</Text>

        <TextInput
          style={styles.input}
          placeholder="Damaged / Expired / Sample"
          value={reason}
          onChangeText={setReason}
        />

        <Text style={styles.label}>Remarks</Text>

        <TextInput
          multiline
          style={[styles.input, {height: hp('14%')}]}
          value={remarks}
          onChangeText={setRemarks}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={saveStockOut}>
          <Text style={styles.buttonText}>
            SAVE STOCK OUT
          </Text>
        </TouchableOpacity>

        <View style={{height: hp('4%')}} />
      </ScrollView>
    </View>
    <CustomAlert
  visible={alertVisible}
  title={alertTitle}
  message={alertMessage}
  cancelText=""
  confirmText="OK"
  onCancel={() => setAlertVisible(false)}
  onConfirm={onConfirm}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.background,
  },

  label:{
    marginHorizontal:wp('5%'),
    marginTop:hp('2%'),
    marginBottom:hp('0.8%'),
    fontFamily:FONT.SemiBold,
    color:COLORS.text,
    fontSize:wp('4.2%'),
  },

  input:{
    marginHorizontal:wp('5%'),
    backgroundColor:'#FFF',
    borderRadius:10,
    borderWidth:1,
    borderColor:COLORS.border,
    paddingHorizontal:15,
    height:hp('6.5%'),
    fontFamily:FONT.Regular,
  },

  button:{
    margin:wp('5%'),
    height:hp('6.8%'),
    backgroundColor:COLORS.primary,
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center',
  },

  buttonText:{
    color:'#FFF',
    fontFamily:FONT.Bold,
    fontSize:wp('4.3%'),
  },
});