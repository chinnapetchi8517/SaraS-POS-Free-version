import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FONT from '../utils/font';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PRIMARY = '#2B1247';

export default function BillActions({
  onHold,
  onResume,
  onCancel,
  onPrint,
  onWhatsapp,
}) {
  const actions = [
    {
      title: 'Hold Bill',
      icon: 'pause-circle-filled',
      color: '#FF9800',
      onPress: onHold,
    },
    {
      title: 'Resume',
      icon: 'play-circle-filled',
      color: '#4CAF50',
      onPress: onResume,
    },
    {
      title: 'Cancel',
      icon: 'cancel',
      color: '#F44336',
      onPress: onCancel,
    },
    {
      title: 'Print',
      icon: 'print',
      color: PRIMARY,
      onPress: onPrint,
    },
    {
      title: 'WhatsApp',
      icon: 'share',
      color: '#25D366',
      onPress: onWhatsapp,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bill Actions</Text>

      <View style={styles.grid}>
        {actions.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={[styles.card, {backgroundColor: item.color}]}
            onPress={item.onPress}>
            <Icon
              name={item.icon}
              size={32}
              color="#FFF"
            />

            <Text style={styles.text}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('4%'),
    paddingBottom: hp('3%'),
  },

  heading: {
    fontSize: wp('5.5%'),
    color: '#222',
    fontFamily: FONT.Bold,
    marginBottom: hp('2%'),
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    height: hp('11%'),
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),

    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  text: {
    color: '#FFF',
    fontSize: wp('4%'),
    fontFamily: FONT.SemiBold,
    marginTop: hp('0.8%'),
    textAlign: 'center',
  },
});