

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FONT from '../utils/font';

const CustomAlert = ({
  visible,
  title,
  message,
  onCancel,
  onConfirm,
  confirmText = 'OK',
  cancelText = 'Cancel',
}) => {
  console.log('Alert Visible:', visible);

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.message}>{message}</Text>

        <View style={styles.buttons}>
          {cancelText !== '' && (
            <TouchableOpacity
              style={styles.button}
              onPress={onCancel}>
              <Text style={styles.cancel}>
                {cancelText}
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={onConfirm}>
            <Text style={styles.confirm}>
              {confirmText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99999,
    elevation: 99999,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    elevation: 10,
  },

  title: {
    fontSize: 20,
    color: '#222',
    fontFamily: FONT.Bold,
  },

  message: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    fontFamily: FONT.Regular,
  },

  buttons: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  button: {
    marginLeft: 20,
  },

  cancel: {
    color: '#666',
    fontSize: 16,
    fontFamily: FONT.Medium,
  },

  confirm: {
    color: '#E53935',
    fontSize: 16,
    fontFamily: FONT.Bold,
  },
});

export default CustomAlert;