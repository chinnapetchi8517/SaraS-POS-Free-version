import React,{useState} from 'react';
import {
View,
Text,
StyleSheet,
TextInput,
TouchableOpacity,
Switch,
ScrollView,
} from 'react-native';
import CustomAlert from '../../components/CustomAlert';
import Header from '../../components/Header';

import {
widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CommonHeader from '../../components/CommonHeader';
import FONT from '../../utils/font';

const COLORS={
primary:'#2B1247',
background:'#F5F5F5',
white:'#FFF',
};

export default function PrinterSettingsScreen({navigation}){

const [printerName,setPrinterName]=useState('');
const [printerIP,setPrinterIP]=useState('');
const [paper,setPaper]=useState('80mm');
const [autoConnect,setAutoConnect]=useState(true);
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
const connectPrinter = () => {
  showAlert(
    'Printer',
    'Connecting Printer...'
  );
};

const printTest = () => {
  showAlert(
    'Printer',
    'Test Print Successful'
  );
};
const save = () => {
  showAlert(
    'Saved',
    'Printer Settings Saved'
  );
};

return(
<View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="Printer Settings"
 navigation={navigation}

/>
<View style={styles.container}>



<ScrollView contentContainerStyle={styles.content}>

<Text style={styles.label}>
Bluetooth Printer
</Text>

<TextInput
style={styles.input}
placeholder="Printer Name"
value={printerName}
onChangeText={setPrinterName}
/>

<Text style={styles.label}>
LAN Printer IP
</Text>

<TextInput
style={styles.input}
placeholder="192.168.1.100"
value={printerIP}
onChangeText={setPrinterIP}
/>

<Text style={styles.label}>
Paper Size
</Text>

<View style={styles.paperRow}>

<TouchableOpacity
style={[
styles.paper,
paper==='58mm'&&styles.active
]}
onPress={()=>setPaper('58mm')}>

<Text style={styles.paperText}>
58 mm
</Text>

</TouchableOpacity>

<TouchableOpacity
style={[
styles.paper,
paper==='80mm'&&styles.active
]}
onPress={()=>setPaper('80mm')}>

<Text style={[styles.paperText,{color:COLORS.white}]}>
80 mm
</Text>

</TouchableOpacity>

</View>

<View style={styles.switchRow}>

<Text style={styles.switchText}>
Auto Connect
</Text>

<Switch
value={autoConnect}
onValueChange={setAutoConnect}
/>

</View>

<TouchableOpacity
style={styles.button}
onPress={connectPrinter}>

<Text style={styles.buttonText}>
CONNECT PRINTER
</Text>

</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={printTest}>

<Text style={styles.buttonText}>
PRINT TEST
</Text>

</TouchableOpacity>

<TouchableOpacity
style={styles.save}
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
},

label:{
marginTop:15,
marginBottom:8,
fontFamily:FONT.SemiBold,
fontSize:16,
},

input:{
backgroundColor:'#FFF',
borderRadius:10,
borderWidth:1,
borderColor:'#DDD',
paddingHorizontal:15,
height:55,
fontFamily:FONT.Regular,
},

paperRow:{
flexDirection:'row',
marginTop:10,
},

paper:{
flex:1,
backgroundColor:'#FFF',
padding:15,
borderRadius:10,
marginRight:10,
alignItems:'center',
borderWidth:1,
borderColor:'#DDD',
},

active:{
backgroundColor:'#2B1247',
},

paperText:{
fontFamily:FONT.Bold,
color:'#222',
},

switchRow:{
backgroundColor:'#FFF',
padding:15,
borderRadius:10,
marginTop:20,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
},

switchText:{
fontFamily:FONT.Medium,
fontSize:16,
},

button:{
marginTop:20,
backgroundColor:'#2B1247',
padding:16,
borderRadius:10,
alignItems:'center',
},

save:{
marginTop:30,
backgroundColor:'green',
padding:16,
borderRadius:10,
alignItems:'center',
},

buttonText:{
color:'#FFF',
fontFamily:FONT.Bold,
fontSize:16,
}

});