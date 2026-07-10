import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,

  ScrollView,
  StatusBar
} from 'react-native';
import CommonHeader from '../../components/CommonHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FONT from '../../utils/font';
import CustomAlert from '../../components/CustomAlert';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Camera, useCameraDevice, useCodeScanner} from 'react-native-vision-camera';
import {launchImageLibrary} from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
const COLORS = {
  primary: '#2B1247',
  white: '#FFFFFF',
  background: '#F5F5F5',
  border: '#DDDDDD',
  text: '#222222',
  grey: '#777777',
};

const categoryList = [
  'Beverages',
  'Fast Food',
  'Snacks',
  'Desserts',
  'Groceries',
];

const gstList = ['0%', '5%', '12%', '18%', '28%'];

const unitList = [
  'Nos',
  'Kg',
  'Gram',
  'Litre',
  'Pack',
];

export default function AddProductScreen({navigation}) {
  const [image, setImage] = useState(null);

  const [productName, setProductName] = useState('');

  const [category, setCategory] = useState('');

  const [barcode, setBarcode] = useState('');

  const [sellingPrice, setSellingPrice] = useState('');

  const [purchasePrice, setPurchasePrice] = useState('');

  const [stockQty, setStockQty] = useState('');

  const [gst, setGst] = useState('');

  const [unit, setUnit] = useState('');

  const [showCategory, setShowCategory] =
    useState(false);

  const [showGST, setShowGST] =
    useState(false);

  const [showUnit, setShowUnit] =
    useState(false);
const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [alertType, setAlertType] = useState('success');
const [alertCallback, setAlertCallback] = useState(null);
  // -----------------------------
  // Pick Product Image
  // -----------------------------

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
      },
      response => {
        if (
          response.assets &&
          response.assets.length > 0
        ) {
          setImage(response.assets[0].uri);
        }
      },
    );
  };

  // -----------------------------
  // Barcode Scanner
  // -----------------------------

  
const openScanner = () => {

  navigation.navigate('BarcodeScanner',{

    onScan:(code)=>{

      setBarcode(code);

    }

  });

};
  // -----------------------------
  // Save Product
  // -----------------------------

 const saveProduct = () => {
  if (
    productName.trim() === '' ||
    category === '' ||
    sellingPrice === ''
  ) {
    setAlertTitle('Validation');
    setAlertMessage('Please fill all required fields.');
    setAlertType('error');
    setAlertCallback(null);
    setAlertVisible(true);
    return;
  }

  const product = {
    id: Date.now(),
    image,
    name: productName,
    category,
    barcode,
    sellingPrice,
    purchasePrice,
    stockQty,
    gst,
    unit,
  };

  console.log(product);

  setAlertTitle('Success');
  setAlertMessage('Product Saved Successfully');
  setAlertType('success');
  setAlertCallback(() => () => navigation.goBack());
  setAlertVisible(true);
};
  return (
     <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
        <CommonHeader
  title="Add Product"
 navigation={navigation}

/>        
   
    
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>
        {/* =========================
    Product Image
========================= */}


<View style={styles.imageContainer}>

  <TouchableOpacity
    activeOpacity={0.8}
    style={styles.imagePicker}
    onPress={pickImage}>

    {image ? (
      <Image
        source={{uri: image}}
        style={styles.productImage}
      />
    ) : (
      <>
        <Icon
          name="add-a-photo"
          size={40}
          color={COLORS.primary}
        />

        <Text style={styles.imageText}>
          Upload Product Image
        </Text>
      </>
    )}

  </TouchableOpacity>

</View>

{/* =========================
    Product Name
========================= */}

<Text style={styles.label}>
  Product Name *
</Text>

<TextInput
  placeholder="Enter Product Name"
  value={productName}
  onChangeText={setProductName}
  placeholderTextColor="#999"
  style={styles.input}
/>

{/* =========================
      Category
========================= */}

<Text style={styles.label}>
  Category *
</Text>

<TouchableOpacity
  style={styles.dropdown}
  onPress={() =>
    setShowCategory(!showCategory)
  }>

  <Text
    style={[
      styles.dropdownText,
      !category && {color: '#999'},
    ]}>
    {category || 'Select Category'}
  </Text>

  <Icon
    name={
      showCategory
        ? 'keyboard-arrow-up'
        : 'keyboard-arrow-down'
    }
    size={28}
    color="#555"
  />

</TouchableOpacity>

{showCategory && (

  <View style={styles.dropdownMenu}>

    {categoryList.map(item => (

      <TouchableOpacity
        key={item}
        style={styles.option}
        onPress={() => {
          setCategory(item);
          setShowCategory(false);
        }}>

        <Text style={styles.optionText}>
          {item}
        </Text>

      </TouchableOpacity>

    ))}

  </View>

)}

{/* =========================
      Barcode
========================= */}

<Text style={styles.label}>
  Barcode
</Text>

<View style={styles.barcodeRow}>

  <TextInput
    placeholder="Enter Barcode"
    value={barcode}
    onChangeText={setBarcode}
    placeholderTextColor="#999"
    style={styles.barcodeInput}
  />

  <TouchableOpacity
    style={styles.scanButton}
    onPress={openScanner}>

    <Icon
      name="qr-code-scanner"
      size={26}
      color="#FFF"
    />

  </TouchableOpacity>

</View>

{/* =========================
      Selling Price
========================= */}

<Text style={styles.label}>
  Selling Price *
</Text>

<TextInput
  placeholder="0.00"
  keyboardType="decimal-pad"
  value={sellingPrice}
  onChangeText={setSellingPrice}
  placeholderTextColor="#999"
  style={styles.input}
/>

{/* =========================
      Purchase Price
========================= */}

<Text style={styles.label}>
  Purchase Price
</Text>

<TextInput
  placeholder="0.00"
  keyboardType="decimal-pad"
  value={purchasePrice}
  onChangeText={setPurchasePrice}
  placeholderTextColor="#999"
  style={styles.input}
/>

{/* =========================
      Stock Quantity
========================= */}

<Text style={styles.label}>
  Stock Quantity
</Text>

<TextInput
  placeholder="0"
  keyboardType="number-pad"
  value={stockQty}
  onChangeText={setStockQty}
  placeholderTextColor="#999"
  style={styles.input}
/>

{/* =========================
      GST
========================= */}

<Text style={styles.label}>
  GST Rate
</Text>

<TouchableOpacity
  style={styles.dropdown}
  onPress={() => setShowGST(!showGST)}>

  <Text
    style={[
      styles.dropdownText,
      !gst && {color: '#999'},
    ]}>
    {gst || 'Select GST'}
  </Text>

  <Icon
    name={
      showGST
        ? 'keyboard-arrow-up'
        : 'keyboard-arrow-down'
    }
    size={28}
    color="#555"
  />

</TouchableOpacity>

{showGST && (

  <View style={styles.dropdownMenu}>

    {gstList.map(item => (

      <TouchableOpacity
        key={item}
        style={styles.option}
        onPress={() => {
          setGst(item);
          setShowGST(false);
        }}>

        <Text style={styles.optionText}>
          {item}
        </Text>

      </TouchableOpacity>

    ))}

  </View>

)}

{/* =========================
      Unit
========================= */}

<Text style={styles.label}>
  Unit
</Text>

<TouchableOpacity
  style={styles.dropdown}
  onPress={() =>
    setShowUnit(!showUnit)
  }>

  <Text
    style={[
      styles.dropdownText,
      !unit && {color: '#999'},
    ]}>
    {unit || 'Select Unit'}
  </Text>

  <Icon
    name={
      showUnit
        ? 'keyboard-arrow-up'
        : 'keyboard-arrow-down'
    }
    size={28}
    color="#555"
  />

</TouchableOpacity>

{showUnit && (

  <View style={styles.dropdownMenu}>

    {unitList.map(item => (

      <TouchableOpacity
        key={item}
        style={styles.option}
        onPress={() => {
          setUnit(item);
          setShowUnit(false);
        }}>

        <Text style={styles.optionText}>
          {item}
        </Text>

      </TouchableOpacity>

    ))}

  </View>

)}

<View style={{height: hp('3%')}} />

{/* =========================
      Save Button
========================= */}

<TouchableOpacity
  activeOpacity={0.8}
  style={styles.saveButton}
  onPress={saveProduct}>

  <Text style={styles.saveText}>
    SAVE PRODUCT
  </Text>

</TouchableOpacity>

<View style={{height: hp('5%')}} />

 <View style={{height: hp('5%')}} />
    </ScrollView>
    <CustomAlert
  visible={alertVisible}
  title={alertTitle}
  message={alertMessage}
  type={alertType}
  onClose={() => {
    setAlertVisible(false);

    if (alertCallback) {
      alertCallback();
      setAlertCallback(null);
    }
  }}
/>
    {/* </SafeAreaView> */}
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
    fontFamily: FONT.Bold,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: wp('4%'),
  },

  imageContainer: {
    alignItems: 'center',
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
  },

  imagePicker: {
    width: wp('38%'),
    height: wp('38%'),
    borderRadius: wp('4%'),
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderStyle: 'dashed',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  productImage: {
    width: '100%',
    height: '100%',
  },

  imageText: {
    marginTop: hp('1%'),
    color: COLORS.grey,
    fontSize: wp('3.6%'),
    textAlign: 'center',
    paddingHorizontal: wp('2%'),
    fontFamily: FONT.Regular,
  },

  label: {
    fontSize: wp('4.2%'),
    color: COLORS.text,
    marginBottom: hp('0.8%'),
    marginTop: hp('1.5%'),
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

  dropdown: {
    height: hp('6.5%'),
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dropdownText: {
    fontSize: wp('4%'),
    color: COLORS.text,
    fontFamily: FONT.Regular,
  },

  dropdownMenu: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    marginTop: hp('0.8%'),
    marginBottom: hp('1%'),
    overflow: 'hidden',
  },

  option: {
    paddingVertical: hp('1.8%'),
    paddingHorizontal: wp('4%'),
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  optionText: {
    fontSize: wp('4%'),
    color: COLORS.text,
    fontFamily: FONT.Regular,
  },

  barcodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  barcodeInput: {
    flex: 1,
    height: hp('6.5%'),
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    color: COLORS.text,
    fontSize: wp('4%'),
    fontFamily: FONT.Regular,
  },

  scanButton: {
    width: wp('15%'),
    height: hp('6.5%'),
    marginLeft: wp('3%'),
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  saveButton: {
    height: hp('6.8%'),
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
    elevation: 4,
  },

  saveText: {
    color: COLORS.white,
    fontSize: wp('4.6%'),
    fontFamily: FONT.Bold,
    letterSpacing: 0.5,
  },
});