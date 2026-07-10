import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,

} from 'react-native';
import CustomAlert from '../../components/CustomAlert';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import CommonHeader from '../../components/CommonHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';

const COLORS = {
  primary: '#2B1247',
  background: '#F5F5F5',
  white: '#FFFFFF',
  border: '#DDDDDD',
  text: '#222222',
  grey: '#777777',
};

export default function ShopProfileScreen({navigation}) {
  const [logo, setLogo] = useState(null);

  const [shopName, setShopName] = useState('SaraS POS');

  const [address, setAddress] = useState(
    'No.10, Anna Nagar, Chennai',
  );

  const [mobile, setMobile] =
    useState('9876543210');

  const [email, setEmail] =
    useState('info@saras.com');

  const [gst, setGST] =
    useState('33ABCDE1234F1Z5');
const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [alertType, setAlertType] = useState('success');
const [onAlertOk, setOnAlertOk] = useState(() => () => {});
  const pickLogo = () => {
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
          setLogo(response.assets[0].uri);
        }
      },
    );
  };

  const saveProfile = () => {
  if (shopName.trim() === '' || mobile.trim() === '') {
    setAlertTitle('Validation');
    setAlertMessage('Shop Name and Mobile Number are required.');
    setAlertType('warning');
    setOnAlertOk(() => () => setAlertVisible(false));
    setAlertVisible(true);
    return;
  }

  setAlertTitle('Success');
  setAlertMessage('Shop Profile Updated Successfully.');
  setAlertType('success');
  setOnAlertOk(() => () => {
    setAlertVisible(false);
    // navigation.goBack(); // Optional
  });
  setAlertVisible(true);
};

  return (
    <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="Shop profile"
 navigation={navigation}

/>
    <View style={styles.container}>
      {/* <Header
        navigation={navigation}
        title="Shop Profile"
      /> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: wp('4%'),
        }}>
        {/* Logo */}

        <View style={styles.logoContainer}>
          <TouchableOpacity
            style={styles.logoBox}
            onPress={pickLogo}>
            {logo ? (
              <Image
                source={{uri: logo}}
                style={styles.logo}
              />
            ) : (
              <>
                <Icon
                  name="add-a-photo"
                  size={40}
                  color={COLORS.primary}
                />

                <Text style={styles.logoText}>
                  Upload Logo
                </Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        {/* Shop Name */}

        <Text style={styles.label}>
          Shop Name *
        </Text>

        <TextInput
          value={shopName}
          onChangeText={setShopName}
          style={styles.input}
          placeholder="Shop Name"
        />

        {/* Address */}

        <Text style={styles.label}>
          Address
        </Text>

        <TextInput
          value={address}
          onChangeText={setAddress}
          style={[styles.input, {height: 100}]}
          multiline
        />

        {/* Mobile */}

        <Text style={styles.label}>
          Mobile Number *
        </Text>

        <TextInput
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
          style={styles.input}
        />

        {/* Email */}

        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />

        {/* GST */}

        <Text style={styles.label}>
          GST Number
        </Text>

        <TextInput
          value={gst}
          onChangeText={setGST}
          style={styles.input}
        />

        {/* Save */}

        <TouchableOpacity
          style={styles.saveButton}
          onPress={saveProfile}>
          <Text style={styles.saveText}>
            SAVE PROFILE
          </Text>
        </TouchableOpacity>

        <View style={{height: hp('3%')}} />
      </ScrollView>
    </View>
    <CustomAlert
  visible={alertVisible}
  title={alertTitle}
  message={alertMessage}
  type={alertType}
  onClose={() => {
    setAlertVisible(false);
    onAlertOk();
  }}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: hp('3%'),
  },

  logoBox: {
    width: wp('35%'),
    height: wp('35%'),
    borderRadius: wp('18%'),
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  logoText: {
    marginTop: 8,
    color: COLORS.grey,
    fontFamily: FONT.Regular,
    fontSize: wp('3.6%'),
  },

  label: {
    marginBottom: hp('0.8%'),
    marginTop: hp('1.5%'),
    color: COLORS.text,
    fontFamily: FONT.SemiBold,
    fontSize: wp('4.2%'),
  },

  input: {
    height: hp('6.5%'),
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    color: COLORS.text,
    fontFamily: FONT.Regular,
    fontSize: wp('4%'),
    textAlignVertical: 'top',
  },

  saveButton: {
    marginTop: hp('4%'),
    height: hp('6.8%'),
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  saveText: {
    color: COLORS.white,
    fontFamily: FONT.Bold,
    fontSize: wp('4.5%'),
  },
});