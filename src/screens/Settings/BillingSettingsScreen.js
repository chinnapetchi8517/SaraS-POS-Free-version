import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import CustomAlert from '../../components/CustomAlert';
import Header from '../../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';
import CommonHeader from '../../components/CommonHeader';
const COLORS={
  primary:'#2B1247',
  background:'#F5F5F5',
  white:'#FFF',
  border:'#DDD',
  text:'#222',
};

export default function BillingSettingsScreen({navigation}){

const [prefix,setPrefix]=useState('INV');
const [invoiceNo,setInvoiceNo]=useState('1001');
const [footer,setFooter]=useState('Thank You! Visit Again');
const [currency,setCurrency]=useState('₹');
const [decimal,setDecimal]=useState('2');
const [autoPrint,setAutoPrint]=useState(true);
const [discount,setDiscount]=useState(true);
const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [confirmText, setConfirmText] = useState('OK');
const [cancelText, setCancelText] = useState('');
const [onConfirm, setOnConfirm] = useState(() => () => {});
const showAlert = (
  title,
  message,
  confirm = 'OK',
  cancel = '',
  callback = () => {}
) => {
  setAlertTitle(title);
  setAlertMessage(message);
  setConfirmText(confirm);
  setCancelText(cancel);

  setOnConfirm(() => () => {
    setAlertVisible(false);
    callback();
  });

  setAlertVisible(true);
};
const save = () => {
  showAlert(
    'Success',
    'Billing Settings Saved'
  );
};
return(
<View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="Billing Settings"
 navigation={navigation}

/>
<View style={styles.container}>

{/* <Header
navigation={navigation}
title="Billing Settings"
/> */}

<ScrollView contentContainerStyle={styles.content}>

<Text style={styles.label}>Invoice Prefix</Text>

<TextInput
style={styles.input}
value={prefix}
onChangeText={setPrefix}
/>

<Text style={styles.label}>Next Invoice Number</Text>

<TextInput
style={styles.input}
value={invoiceNo}
keyboardType="number-pad"
onChangeText={setInvoiceNo}
/>

<Text style={styles.label}>Bill Footer</Text>

<TextInput
style={[styles.input,{height:90}]}
multiline
value={footer}
onChangeText={setFooter}
/>

<Text style={styles.label}>Currency Symbol</Text>

<TextInput
style={styles.input}
value={currency}
onChangeText={setCurrency}
/>

<Text style={styles.label}>Decimal Places</Text>

<TextInput
style={styles.input}
keyboardType="number-pad"
value={decimal}
onChangeText={setDecimal}
/>

<View style={styles.switchRow}>
<Text style={styles.switchText}>Auto Print</Text>
<Switch
value={autoPrint}
onValueChange={setAutoPrint}
/>
</View>

<View style={styles.switchRow}>
<Text style={styles.switchText}>Enable Discount</Text>
<Switch
value={discount}
onValueChange={setDiscount}
/>
</View>

<TouchableOpacity
style={styles.button}
onPress={save}>
<Text style={styles.buttonText}>
SAVE SETTINGS
</Text>
</TouchableOpacity>

</ScrollView>

</View>
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

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:COLORS.background,
},

content:{
padding:wp('4%'),
paddingBottom:40,
},

label:{
marginTop:15,
marginBottom:8,
fontFamily:FONT.SemiBold,
fontSize:16,
},

input:{
backgroundColor:'#FFF',
borderWidth:1,
borderColor:'#DDD',
borderRadius:10,
paddingHorizontal:15,
height:55,
fontFamily:FONT.Regular,
},

switchRow:{
backgroundColor:'#FFF',
marginTop:18,
padding:15,
borderRadius:10,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
},

switchText:{
fontFamily:FONT.Medium,
fontSize:16,
},

button:{
marginTop:35,
backgroundColor:'#2B1247',
height:55,
borderRadius:10,
justifyContent:'center',
alignItems:'center',
},

buttonText:{
color:'#FFF',
fontFamily:FONT.Bold,
fontSize:16,
}

});