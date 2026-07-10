import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';

import Header from '../../components/Header';
import CustomAlert from '../../components/CustomAlert';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CommonHeader from '../../components/CommonHeader';
import FONT from '../../utils/font';

const COLORS = {
  primary: '#2B1247',
  background: '#F5F5F5',
  white: '#FFFFFF',
  border: '#DDDDDD',
  text: '#222222',
  grey: '#777777',
};

export default function TaxSettingsScreen({navigation}) {
  const [enableGST, setEnableGST] = useState(true);

  const [gst, setGST] = useState('18');

  const [cgst, setCGST] = useState('9');

  const [sgst, setSGST] = useState('9');
const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [confirmText, setConfirmText] = useState('OK');
const [cancelText, setCancelText] = useState('');
const [onConfirm, setOnConfirm] = useState(() => () => {});
  const updateGST = value => {
    setGST(value);

    const num = parseFloat(value);

    if (!isNaN(num)) {
      setCGST(String(num / 2));
      setSGST(String(num / 2));
    } else {
      setCGST('');
      setSGST('');
    }
  };

  const saveSettings = () => {
  if (enableGST && gst.trim() === '') {
    setAlertTitle('Validation');
    setAlertMessage('Please enter GST percentage.');
    setConfirmText('OK');
    setCancelText('');

    setOnConfirm(() => () => {
      setAlertVisible(false);
    });

    setAlertVisible(true);
    return;
  }

  setAlertTitle('Success');
  setAlertMessage('Tax Settings Saved Successfully.');
  setConfirmText('OK');
  setCancelText('');

  setOnConfirm(() => () => {
    setAlertVisible(false);
  });

  setAlertVisible(true);
};

  return (
    <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
        
        <CommonHeader
      title="Tax Settings"
     navigation={navigation}
    
    />
    <View style={styles.container}>
      

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>

        {/* GST Enable */}

        <View style={styles.switchCard}>

          <View>

            <Text style={styles.title}>
              Enable GST
            </Text>

            <Text style={styles.subtitle}>
              Apply GST on all invoices
            </Text>

          </View>

          <Switch
            value={enableGST}
            onValueChange={setEnableGST}
            trackColor={{
              false: '#CCC',
              true: COLORS.primary,
            }}
          />

        </View>

        {/* GST */}

        <Text style={styles.label}>
          GST Percentage (%)
        </Text>

        <TextInput
          editable={enableGST}
          value={gst}
          onChangeText={updateGST}
          keyboardType="numeric"
          style={styles.input}
          placeholder="18"
          placeholderTextColor="#999"
        />

        {/* CGST */}

        <Text style={styles.label}>
          CGST (%)
        </Text>

        <TextInput
          editable={false}
          value={cgst}
          style={styles.input}
        />

        {/* SGST */}

        <Text style={styles.label}>
          SGST (%)
        </Text>

        <TextInput
          editable={false}
          value={sgst}
          style={styles.input}
        />

        {/* Summary */}

        <View style={styles.summaryCard}>

          <Text style={styles.summaryTitle}>
            Tax Summary
          </Text>

          <View style={styles.row}>
            <Text style={styles.rowText}>
              GST
            </Text>

            <Text style={styles.rowValue}>
              {gst || 0}%
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowText}>
              CGST
            </Text>

            <Text style={styles.rowValue}>
              {cgst || 0}%
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowText}>
              SGST
            </Text>

            <Text style={styles.rowValue}>
              {sgst || 0}%
            </Text>
          </View>

        </View>

        {/* Save */}

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={saveSettings}>

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

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: wp('4%'),
    paddingBottom: hp('4%'),
  },

  switchCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: wp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  title: {
    fontFamily: FONT.Bold,
    fontSize: wp('4.6%'),
    color: COLORS.text,
  },

  subtitle: {
    marginTop: hp('0.5%'),
    fontFamily: FONT.Regular,
    fontSize: wp('3.6%'),
    color: COLORS.grey,
  },

  label: {
    marginTop: hp('1.5%'),
    marginBottom: hp('0.8%'),
    fontFamily: FONT.SemiBold,
    fontSize: wp('4.2%'),
    color: COLORS.text,
  },

  input: {
    height: hp('6.5%'),
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: wp('4%'),
    fontFamily: FONT.Regular,
    fontSize: wp('4%'),
    color: COLORS.text,
  },

  summaryCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: wp('4%'),
    marginTop: hp('3%'),
  },

  summaryTitle: {
    fontFamily: FONT.Bold,
    fontSize: wp('4.5%'),
    color: COLORS.primary,
    marginBottom: hp('1.5%'),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('0.5%'),
  },

  rowText: {
    fontFamily: FONT.Regular,
    fontSize: wp('4%'),
    color: COLORS.text,
  },

  rowValue: {
    fontFamily: FONT.Bold,
    fontSize: wp('4%'),
    color: COLORS.primary,
  },

  button: {
    marginTop: hp('4%'),
    backgroundColor: COLORS.primary,
    height: hp('6.8%'),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.white,
    fontFamily: FONT.Bold,
    fontSize: wp('4.5%'),
  },

});