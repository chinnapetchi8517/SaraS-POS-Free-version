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
import CustomAlert from '../../components/CustomAlert';
import FONT from '../../utils/font';

const COLORS={
  primary:'#2B1247',
  white:'#FFF',
  background:'#F5F5F5',
  border:'#DDD',
};

export default function StockInScreen({navigation}){

const [product,setProduct]=useState('');
const [stock,setStock]=useState('120');
const [qty,setQty]=useState('');
const [price,setPrice]=useState('');
const [supplier,setSupplier]=useState('');
const [remarks,setRemarks]=useState('');
const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [confirmText, setConfirmText] = useState('OK');
const [cancelText, setCancelText] = useState('');
const [onConfirm, setOnConfirm] = useState(() => () => {});
const saveStock = () => {
  if (product === '' || qty === '') {
    setAlertTitle('Validation');
    setAlertMessage('Fill required fields');
    setConfirmText('OK');
    setCancelText('');
    setOnConfirm(() => () => setAlertVisible(false));
    setAlertVisible(true);
    return;
  }

  setAlertTitle('Success');
  setAlertMessage('Stock Updated Successfully');
  setConfirmText('OK');
  setCancelText('');

  setOnConfirm(() => () => {
    setAlertVisible(false);
    navigation.goBack();
  });

  setAlertVisible(true);
};

return(
<View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="Stock In"
 navigation={navigation}

/>
<View style={styles.container}>



<ScrollView>

<Text style={styles.label}>
Product
</Text>

<TextInput
style={styles.input}
value={product}
onChangeText={setProduct}
placeholder="Select Product"
/>

<Text style={styles.label}>
Current Stock
</Text>

<TextInput
editable={false}
value={stock}
style={styles.input}
/>

<Text style={styles.label}>
Stock In Quantity
</Text>

<TextInput
style={styles.input}
keyboardType="numeric"
value={qty}
onChangeText={setQty}
/>

<Text style={styles.label}>
Purchase Price
</Text>

<TextInput
style={styles.input}
keyboardType="numeric"
value={price}
onChangeText={setPrice}
/>

<Text style={styles.label}>
Supplier
</Text>

<TextInput
style={styles.input}
value={supplier}
onChangeText={setSupplier}
/>

<Text style={styles.label}>
Remarks
</Text>

<TextInput
style={[styles.input,{
height:100
}]}
multiline
value={remarks}
onChangeText={setRemarks}
/>

<TouchableOpacity
style={styles.button}
onPress={saveStock}>

<Text style={styles.buttonText}>
SAVE STOCK
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

)

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:COLORS.background,
},

label:{
marginHorizontal:20,
marginTop:18,
marginBottom:8,
fontFamily:FONT.SemiBold,
fontSize:16,
},

input:{
marginHorizontal:20,
backgroundColor:'#FFF',
borderWidth:1,
borderColor:'#DDD',
borderRadius:10,
paddingHorizontal:15,
height:55,
fontFamily:FONT.Regular,
},

button:{
margin:20,
backgroundColor:COLORS.primary,
height:55,
borderRadius:10,
justifyContent:'center',
alignItems:'center',
},

buttonText:{
color:'#FFF',
fontFamily:FONT.Bold,
fontSize:16,
},

});