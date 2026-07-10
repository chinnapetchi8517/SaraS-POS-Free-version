import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import CommonHeader from '../../components/CommonHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomAlert from '../../components/CustomAlert';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
const COLORS = {
  primary: '#2B1247',
  white: '#FFFFFF',
  background: '#F5F5F5',
  border: '#DDDDDD',
  text: '#222222',
  grey: '#777777',
};

// -------------------------
// Dropdown Data
// -------------------------

const categoryList = [
  'Beverages',
  'Fast Food',
  'Snacks',
  'Desserts',
  'Groceries',
];

const gstList = [
  '0%',
  '5%',
  '12%',
  '18%',
  '28%',
];

const unitList = [
  'Nos',
  'Kg',
  'Gram',
  'Litre',
  'Pack',
];

export default function EditProductScreen({
  navigation,
  route,
}) {

  // -------------------------
  // Receive Product
  // -------------------------

  const {product} = route.params;

  // -------------------------
  // States
  // -------------------------

  const [image, setImage] = useState(product.image);

  const [productName, setProductName] =
    useState(product.name);

  const [category, setCategory] =
    useState(product.category);

  const [barcode, setBarcode] =
    useState(product.barcode);

  const [sellingPrice, setSellingPrice] =
    useState(String(product.sellingPrice));

  const [purchasePrice, setPurchasePrice] =
    useState(String(product.purchasePrice));

  const [stockQty, setStockQty] =
    useState(String(product.stockQty));

  const [gst, setGst] =
    useState(product.gst);

  const [unit, setUnit] =
    useState(product.unit);

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
const [onAlertClose, setOnAlertClose] = useState(() => () => {});
  // -------------------------
  // Pick Product Image
  // -------------------------

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

  // -------------------------
  // Barcode Scanner
  // -------------------------

  const openScanner = () => {
    navigation.navigate('BarcodeScanner', {
      onScan: code => {
        setBarcode(code);
      },
    });
  };

  // -------------------------
  // Update Product
  // -------------------------

 const updateProduct = () => {
  if (
    productName.trim() === '' ||
    category === '' ||
    sellingPrice === ''
  ) {
    setAlertTitle('Validation');
    setAlertMessage('Please fill all required fields.');
    setAlertType('warning');
    setOnAlertClose(() => () => setAlertVisible(false));
    setAlertVisible(true);
    return;
  }

  const updatedProduct = {
    ...product,
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

  console.log('Updated Product', updatedProduct);

  setAlertTitle('Success');
  setAlertMessage('Product updated successfully.');
  setAlertType('success');
  setOnAlertClose(() => () => {
    setAlertVisible(false);
    navigation.goBack();
  });
  setAlertVisible(true);
};

  // -------------------------
  // Delete Product
  // -------------------------

 const deleteProduct = () => {
  setAlertTitle('Delete Product');
  setAlertMessage('Are you sure you want to delete this product?');
  setAlertType('confirm');

  setOnAlertClose(() => () => {
    console.log('Deleted Product', product.id);

    setAlertTitle('Deleted');
    setAlertMessage('Product deleted successfully.');
    setAlertType('success');

    setOnAlertClose(() => () => {
      setAlertVisible(false);
      navigation.goBack();
    });

    setAlertVisible(true);
  });

  setAlertVisible(true);
};
    return (
         <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
                             <CommonHeader
  title=" Edit Product"
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
        style={styles.input}
        placeholder="Enter Product Name"
        placeholderTextColor="#999"
        value={productName}
        onChangeText={setProductName}
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
          style={styles.barcodeInput}
          placeholder="Enter Barcode"
          placeholderTextColor="#999"
          value={barcode}
          onChangeText={setBarcode}
        />

        <TouchableOpacity
          style={styles.scanButton}
          onPress={openScanner}>

          <Icon
            name="qr-code-scanner"
            size={25}
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
        style={styles.input}
        placeholder="0.00"
        placeholderTextColor="#999"
        keyboardType="decimal-pad"
        value={sellingPrice}
        onChangeText={setSellingPrice}
      />

      {/* =========================
          Purchase Price
      ========================= */}

      <Text style={styles.label}>
        Purchase Price
      </Text>

      <TextInput
        style={styles.input}
        placeholder="0.00"
        placeholderTextColor="#999"
        keyboardType="decimal-pad"
        value={purchasePrice}
        onChangeText={setPurchasePrice}
      />

      {/* =========================
          Stock Quantity
      ========================= */}

      <Text style={styles.label}>
        Stock Quantity
      </Text>

      <TextInput
        style={styles.input}
        placeholder="0"
        placeholderTextColor="#999"
        keyboardType="number-pad"
        value={stockQty}
        onChangeText={setStockQty}
      />

      {/* =========================
          GST
      ========================= */}

      <Text style={styles.label}>
        GST Rate
      </Text>

      <TouchableOpacity
        style={styles.dropdown}
        onPress={() =>
          setShowGST(!showGST)
        }>

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
          Action Buttons
      ========================= */}

      <View style={styles.buttonRow}>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.deleteButton}
          onPress={deleteProduct}>

          <Icon
            name="delete"
            size={22}
            color="#FFFFFF"
          />

          <Text style={styles.buttonText}>
            DELETE
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.updateButton}
          onPress={updateProduct}>

          <Icon
            name="save"
            size={22}
            color="#FFFFFF"
          />

          <Text style={styles.buttonText}>
            UPDATE
          </Text>

        </TouchableOpacity>

      </View>

      <View style={{height: hp('5%')}} />

    </ScrollView>
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

  // ==========================
  // Product Image
  // ==========================

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
    fontSize: wp('3.5%'),
    color: COLORS.grey,
    textAlign: 'center',
    fontFamily: FONT.Regular,
  },

  // ==========================
  // Labels
  // ==========================

  label: {
    fontSize: wp('4.2%'),
    color: COLORS.text,
    marginBottom: hp('0.8%'),
    marginTop: hp('1.6%'),
    fontFamily: FONT.SemiBold,
  },

  // ==========================
  // Inputs
  // ==========================

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

  // ==========================
  // Dropdown
  // ==========================

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
    elevation: 3,
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

  // ==========================
  // Barcode
  // ==========================

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
    fontSize: wp('4%'),
    color: COLORS.text,
    fontFamily: FONT.Regular,
  },

  scanButton: {
    width: wp('15%'),
    height: hp('6.5%'),
    marginLeft: wp('3%'),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
  },

  // ==========================
  // Buttons
  // ==========================

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
  },

  deleteButton: {
    flex: 1,
    height: hp('6.8%'),
    backgroundColor: '#E53935',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: wp('3%'),
    elevation: 3,
  },

  updateButton: {
    flex: 1,
    height: hp('6.8%'),
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 3,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: wp('4.2%'),
    marginLeft: wp('2%'),
    letterSpacing: 0.5,
    fontFamily: FONT.Bold,
  },
});