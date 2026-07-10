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
const COLORS = {
  primary: '#2B1247',
  white: '#FFFFFF',
  background: '#F5F5F5',
  border: '#DDDDDD',
  text: '#222222',
  grey: '#777777',
  danger: '#E53935',
};
import FONT from '../../utils/font';
export default function EditCategoryScreen({
  navigation,
  route,
}) {
  const {category} = route.params;

  const [categoryName, setCategoryName] = useState(
    category?.name || '',
  );

  const [description, setDescription] = useState(
    category?.description || '',
  );
const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [confirmText, setConfirmText] = useState('OK');
const [cancelText, setCancelText] = useState('');
const [onConfirm, setOnConfirm] = useState(() => () => {});
  // -----------------------
  // Update Category
  // -----------------------

  const updateCategory = () => {
  if (categoryName.trim() === '') {
    setAlertTitle('Validation');
    setAlertMessage('Category name is required.');
    setCancelText('');
    setConfirmText('OK');
    setOnConfirm(() => () => setAlertVisible(false));
    setAlertVisible(true);
    return;
  }

  const updatedCategory = {
    ...category,
    name: categoryName,
    description,
  };

  console.log('Updated Category:', updatedCategory);

  setAlertTitle('Success');
  setAlertMessage('Category updated successfully.');
  setCancelText('');
  setConfirmText('OK');

  setOnConfirm(() => () => {
    setAlertVisible(false);
    navigation.goBack();
  });

  setAlertVisible(true);
};

  // -----------------------
  // Delete Category
  // -----------------------

  const deleteCategory = () => {
  setAlertTitle('Delete Category');
  setAlertMessage(
    'Are you sure you want to delete this category?'
  );

  setCancelText('Cancel');
  setConfirmText('Delete');

  setOnConfirm(() => () => {
    console.log('Deleted Category:', category.id);

    setAlertTitle('Deleted');
    setAlertMessage('Category deleted successfully.');

    setCancelText('');
    setConfirmText('OK');

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
  title=" Edit Category"
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
        value={categoryName}
        onChangeText={setCategoryName}
        placeholder="Category Name"
        placeholderTextColor="#999"
        style={styles.input}
      />

      {/* Description */}

      <Text style={styles.label}>
        Description
      </Text>

      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        placeholderTextColor="#999"
        multiline
        textAlignVertical="top"
        style={styles.textArea}
      />

      {/* Update */}

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.updateButton}
        onPress={updateCategory}>

        <Text style={styles.buttonText}>
          UPDATE CATEGORY
        </Text>

      </TouchableOpacity>

      {/* Delete */}

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.deleteButton}
        onPress={deleteCategory}>

        <Text style={styles.buttonText}>
          DELETE CATEGORY
        </Text>

      </TouchableOpacity>

      <View style={{height: hp('4%')}} />

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
    paddingHorizontal: wp('4%'),
  },
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

headerTitle: {
  flex: 1,
  textAlign: 'center',
  color: COLORS.white,
  fontSize: wp('5%'),
  fontWeight: '700',
    fontFamily: FONT.Bold,
},
  label: {
    fontSize: wp('4.2%'),
    fontWeight: '600',
    color: COLORS.text,
    marginTop: hp('2%'),
    marginBottom: hp('0.8%'),
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

  updateButton: {
    height: hp('6.8%'),
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
    elevation: 4,
  },

  deleteButton: {
    height: hp('6.8%'),
    backgroundColor: COLORS.danger,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
    elevation: 4,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: wp('4.5%'),
    fontWeight: '700',
    letterSpacing: 0.5,
    fontFamily: FONT.Bold,
  },

});