import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../utils/font';

const PRIMARY = '#2B1247';

export default function HeaderSearch() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Icon
          name="search"
          size={22}
          color="#777"
        />

        <TextInput
          placeholder="Search product..."
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.scan}>
        <Icon
          name="qr-code-scanner"
          size={26}
          color="#FFF"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
  },

  search: {
    flex: 1,
    height: hp('6.5%'),
    backgroundColor: '#FFFFFF',
    borderRadius: wp('3%'),
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',

    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  input: {
    flex: 1,
    marginLeft: wp('3%'),
    fontSize: wp('4.2%'),
    color: '#222',
    fontFamily: FONT.Regular,
    paddingVertical: 0,
  },

  scan: {
    width: hp('6.5%'),
    height: hp('6.5%'),
    marginLeft: wp('3%'),
    borderRadius: wp('3%'),
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});