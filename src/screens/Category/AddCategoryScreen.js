import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommonHeader from '../../components/CommonHeader';
import CustomAlert from '../../components/CustomAlert';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FONT from '../../utils/font';
const COLORS = {
  primary: '#2B1247',
  white: '#FFFFFF',
  background: '#F5F5F5',
  border: '#DDDDDD',
  text: '#222222',
  grey: '#777777',
};

export default function AddCategoryScreen({navigation}) {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');


const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [onConfirm, setOnConfirm] = useState(() => () => {});
  const saveCategory = () => {
  if (categoryName.trim() === '') {
    setAlertTitle('Validation');
    setAlertMessage('Please enter category name.');
    setOnConfirm(() => () => setAlertVisible(false));
    setAlertVisible(true);
    return;
  }

  const category = {
    id: Date.now().toString(),
    name: categoryName,
    description,
  };

  console.log('Category : ', category);

  setAlertTitle('Success');
  setAlertMessage('Category added successfully.');

  setOnConfirm(() => () => {
    setAlertVisible(false);
    navigation.goBack();
  });

  setAlertVisible(true);
};

  return (
    <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
                    
                 <CommonHeader
  title="Add Category"
 navigation={navigation}

/>        
                   
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>

      {/* Category Name */}

      <Text style={styles.label}>
        Category Name *
      </Text>

      <TextInput
        placeholder="Enter Category Name"
        placeholderTextColor="#999"
        value={categoryName}
        onChangeText={setCategoryName}
        style={styles.input}
      />

      {/* Description */}

      <Text style={styles.label}>
        Description
      </Text>

      <TextInput
        placeholder="Enter Description"
        placeholderTextColor="#999"
        value={description}
        onChangeText={setDescription}
        multiline
        textAlignVertical="top"
        style={styles.textArea}
      />

      {/* Save */}

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.saveButton}
        onPress={saveCategory}>

        <Text style={styles.saveText}>
          SAVE CATEGORY
        </Text>

      </TouchableOpacity>

    </ScrollView>
    <CustomAlert
  visible={alertVisible}
  title={alertTitle}
  message={alertMessage}
  confirmText="OK"
  cancelText=""
  onCancel={() => setAlertVisible(false)}
  onConfirm={onConfirm}
/>
    </View>
  );
}

const styles = StyleSheet.create({
header: {
  height: hp('7%'),
  backgroundColor: COLORS.primary,
  borderRadius: 12,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  //paddingHorizontal: wp('3%'),
  marginTop: hp('6%'),
  marginBottom: hp('2%'),
},

backButton: {
  width: wp('10%'),
  height: wp('10%'),
  justifyContent: 'center',
  alignItems: 'center',
},

// headerTitle: {
//   flex: 1,
//   textAlign: 'center',
//   color: COLORS.white,
//   fontSize: wp('5%'),
//   fontWeight: '700',
// },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: wp('4%'),
    paddingTop: hp('2%'),
  },

  // label: {
  //   fontSize: wp('4.2%'),
  //   fontWeight: '600',
  //   color: COLORS.text,
  //   marginBottom: hp('0.8%'),
  //   marginTop: hp('2%'),
  // },

  // input: {
  //   height: hp('6.5%'),
  //   backgroundColor: COLORS.white,
  //   borderWidth: 1,
  //   borderColor: COLORS.border,
  //   borderRadius: 10,
  //   paddingHorizontal: wp('4%'),
  //   fontSize: wp('4%'),
  //   color: COLORS.text,
  // },

  // textArea: {
  //   height: hp('18%'),
  //   backgroundColor: COLORS.white,
  //   borderWidth: 1,
  //   borderColor: COLORS.border,
  //   borderRadius: 10,
  //   paddingHorizontal: wp('4%'),
  //   paddingTop: hp('1.5%'),
  //   fontSize: wp('4%'),
  //   color: COLORS.text,
  // },

  saveButton: {
    height: hp('6.8%'),
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('4%'),
    elevation: 4,
  },

  // saveText: {
  //   color: COLORS.white,
  //   fontSize: wp('4.6%'),
  //   fontWeight: '700',
  //   letterSpacing: 0.5,
  // },
  headerTitle: {
  flex: 1,
  textAlign: 'center',
  color: COLORS.white,
  fontSize: wp('5%'),
  fontFamily: FONT.Bold,
},

label: {
  fontSize: wp('4.2%'),
  color: COLORS.text,
  marginBottom: hp('0.8%'),
  marginTop: hp('2%'),
  fontFamily: FONT.SemiBold,
},

input: {
  height: hp('6.5%'),
  backgroundColor: COLORS.white,
  borderWidth: 1,
  borderColor: COLORS.border,
  borderRadius: 10,
  paddingHorizontal: wp('4%'),
  fontSize: wp('4%'),
  color: COLORS.text,
  fontFamily: FONT.Regular,
},

textArea: {
  height: hp('18%'),
  backgroundColor: COLORS.white,
  borderWidth: 1,
  borderColor: COLORS.border,
  borderRadius: 10,
  paddingHorizontal: wp('4%'),
  paddingTop: hp('1.5%'),
  fontSize: wp('4%'),
  color: COLORS.text,
  fontFamily: FONT.Regular,
},

saveText: {
  color: COLORS.white,
  fontSize: wp('4.6%'),
  letterSpacing: 0.5,
  fontFamily: FONT.Bold,
},

});