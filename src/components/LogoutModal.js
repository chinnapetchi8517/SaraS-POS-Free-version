import React from 'react';
import {
  Modal,
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
    console.log('Alert Visible : ', visible);
  return (
    <Modal  visible={visible}
  transparent={true}
  animationType="fade"
  statusBarTranslucent={true}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.message}>{message}</Text>

          <View style={styles.buttons}>
             {cancelText ? (
    <TouchableOpacity onPress={onCancel}>
      <Text style={styles.cancel}>{cancelText}</Text>
    </TouchableOpacity>
  ) : null}
            {/* <TouchableOpacity onPress={onCancel}>
              <Text style={styles.cancel}>{cancelText}</Text>
            </TouchableOpacity> */}

            <TouchableOpacity onPress={onConfirm}>
              <Text style={styles.confirm}>{confirmText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: FONT.Bold,
    color: '#222',
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: FONT.Regular,
    color: '#666',
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancel: {
    marginRight: 25,
    fontFamily: FONT.Medium,
    color: '#666',
  },
  confirm: {
    fontFamily: FONT.Bold,
    color: '#E53935',
  },
});

export default CustomAlert;