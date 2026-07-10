import React,{useState} from 'react';
import {
View,
Text,
StyleSheet,
FlatList,
TouchableOpacity,
TextInput,
Alert,
} from 'react-native';

import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
widthPercentageToDP as wp,
heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';

const COLORS={
primary:'#2B1247',
background:'#F5F5F5',
white:'#FFF',
border:'#E5E5E5',
grey:'#777',
danger:'#E53935',
};

export default function UserManagementScreen({navigation}){

const [search,setSearch]=useState('');

const [users,setUsers]=useState([
{
id:'1',
name:'Admin',
role:'Administrator',
mobile:'9876543210',
},
{
id:'2',
name:'Cashier',
role:'Cashier',
mobile:'9999999999',
},
{
id:'3',
name:'Manager',
role:'Manager',
mobile:'8888888888',
},
]);

const filtered=users.filter(item=>
item.name.toLowerCase().includes(search.toLowerCase())
);

const deleteUser=id=>{

Alert.alert(
'Delete User',
'Are you sure?',
[
{text:'Cancel'},
{
text:'Delete',
style:'destructive',
onPress:()=>setUsers(prev=>prev.filter(i=>i.id!==id)),
},
],
);

};

const renderItem=({item})=>(

<View style={styles.card}>

<View style={{flex:1}}>

<Text style={styles.name}>
{item.name}
</Text>

<Text style={styles.role}>
{item.role}
</Text>

<Text style={styles.mobile}>
{item.mobile}
</Text>

</View>

<TouchableOpacity
style={styles.icon}
onPress={()=>navigation.navigate('EditUser',{user:item})}>

<Icon
name="edit"
size={22}
color={COLORS.primary}
/>

</TouchableOpacity>

<TouchableOpacity
style={styles.icon}
onPress={()=>deleteUser(item.id)}>

<Icon
name="delete"
size={22}
color={COLORS.danger}
/>

</TouchableOpacity>

</View>

);

return(

<View style={styles.container}>

<Header
navigation={navigation}
title="Users"
/>

<View style={styles.search}>

<Icon
name="search"
size={22}
color="#888"
/>

<TextInput
style={styles.input}
placeholder="Search User"
value={search}
onChangeText={setSearch}
/>

</View>

<FlatList
data={filtered}
renderItem={renderItem}
keyExtractor={item=>item.id}
/>

<TouchableOpacity
style={styles.fab}
onPress={()=>navigation.navigate('AddUser')}>

<Icon
name="add"
size={34}
color="#FFF"
/>

</TouchableOpacity>

</View>

);

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:COLORS.background,
},

search:{
margin:15,
backgroundColor:'#FFF',
height:55,
borderRadius:10,
paddingHorizontal:15,
flexDirection:'row',
alignItems:'center',
},

input:{
flex:1,
marginLeft:10,
fontFamily:FONT.Regular,
},

card:{
backgroundColor:'#FFF',
marginHorizontal:15,
marginBottom:12,
padding:15,
borderRadius:12,
flexDirection:'row',
alignItems:'center',
},

name:{
fontFamily:FONT.Bold,
fontSize:16,
},

role:{
fontFamily:FONT.Medium,
color:'#2B1247',
marginTop:4,
},

mobile:{
fontFamily:FONT.Regular,
marginTop:4,
color:'#777',
},

icon:{
padding:8,
},

fab:{
position:'absolute',
bottom:30,
right:25,
width:60,
height:60,
borderRadius:30,
backgroundColor:'#2B1247',
justifyContent:'center',
alignItems:'center',
}

});