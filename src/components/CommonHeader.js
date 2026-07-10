import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import COLORS from '../theme/colors';
import FONT from '../utils/font';


const CommonHeader = ({
  title,
  navigation,
  showBack = true,
  rightComponent = null,
}) => {
  return (
    <View style={styles.header}>
      {showBack ? (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back"
            size={24}
            color={COLORS.white}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButton} />
      )}

      <Text
        numberOfLines={1}
        style={styles.headerTitle}>
        {title}
      </Text>

      {rightComponent ? (
        <View style={styles.backButton}>
          {rightComponent}
        </View>
      ) : (
        <View style={styles.backButton} />
      )}
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  header: {
    height: hp('7%'),
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('3%'),
    marginBottom: hp('1%'),
    paddingHorizontal: wp('2%'),
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
});