

import React from 'react';
import {
View,
Text,
TouchableOpacity,
StyleSheet,
Alert,
} from 'react-native';

import {
CameraKitCameraScreen,
} from 'react-native-camera-kit';
import {
launchCamera,
launchImageLibrary,
} from 'react-native-image-picker';
export default function BarcodeScannerScreen({
navigation,
route,
}){
const pickImage=()=>{

Alert.alert(

'Product Image',

'Choose Image',

[
{
text:'Camera',

onPress:()=>{

launchCamera({

mediaType:'photo',

quality:0.8

},response=>{

if(response.assets){

setImage(response.assets[0].uri);

}

});

}

},

{
text:'Gallery',

onPress:()=>{

launchImageLibrary({

mediaType:'photo',

quality:0.8

},response=>{

if(response.assets){

setImage(response.assets[0].uri);

}

});

}

},

{
text:'Cancel',
style:'cancel'
}

]

);

};
const onReadCode=e=>{

const code=e.nativeEvent.codeStringValue;

if(route.params?.onScan){

route.params.onScan(code);

}

Alert.alert(
'Barcode Found',
code,
[
{
text:'OK',
onPress:()=>navigation.goBack()
}
]
);

};

return(

<View style={{flex:1}}>

<CameraKitCameraScreen

scanBarcode

onReadCode={onReadCode}

/>

</View>

);

}