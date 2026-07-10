import React from 'react';
import {
View,
Text,
TouchableOpacity,
StyleSheet,
Alert,
} from 'react-native';

import Header from '../../components/Header';

import FONT from '../../utils/font';
import CommonHeader from '../../components/CommonHeader';
export default function BackupRestoreScreen({navigation}){

const backup=()=>Alert.alert('Backup','Backup Started');

const restore=()=>Alert.alert('Restore','Restore Started');

const exportDB=()=>Alert.alert('Export','Database Exported');

const importDB=()=>Alert.alert('Import','Database Imported');

return(
<View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="Backup & Restore"
 navigation={navigation}

/>
<View style={styles.container}>

<Header
navigation={navigation}
title="Backup & Restore"
/>

<TouchableOpacity style={styles.btn} onPress={backup}>
<Text style={styles.txt}>Backup Data</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btn} onPress={restore}>
<Text style={styles.txt}>Restore Data</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btn} onPress={exportDB}>
<Text style={styles.txt}>Export Database</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btn} onPress={importDB}>
<Text style={styles.txt}>Import Database</Text>
</TouchableOpacity>

</View>
</View>

);

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:'#F5F5F5',
padding:20,
},

btn:{
backgroundColor:'#2B1247',
padding:18,
borderRadius:12,
marginTop:18,
alignItems:'center',
},

txt:{
color:'#FFF',
fontFamily:FONT.Bold,
fontSize:16,
}

});
