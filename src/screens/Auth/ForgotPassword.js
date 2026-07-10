// ForgotPasswordScreen.js

import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import FONT from "../../utils/font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomAlert from "../../components/CustomAlert";
import Ionicons from "react-native-vector-icons/Ionicons";

const COLORS = {
  primary: "#2B1247",
  white: "#FFFFFF",
  black: "#222222",
  gray: "#777777",
  border: "#DDDDDD",
  inputBg: "#F8F8F8",
};

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState("");
const [alertMessage, setAlertMessage] = useState("");
const [onConfirm, setOnConfirm] = useState(() => () => {});
  const onResetPassword = () => {
  if (!email.trim()) {
    setAlertTitle("Validation");
    setAlertMessage("Please enter your email address.");
    setOnConfirm(() => () => setAlertVisible(false));
    setAlertVisible(true);
    return;
  }

  // API Call Here

  setAlertTitle("Password Reset");
  setAlertMessage(
    "A password reset link has been sent to your email."
  );

  setOnConfirm(() => () => {
    setAlertVisible(false);
    navigation.navigate("SignIn");
  });

  setAlertVisible(true);
};

  return (
    
<View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
        {/* Status Bar Area */}
        <SafeAreaView
          edges={['top']}
          style={{ backgroundColor:COLORS.primary }}
        />
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <View style={styles.header}>
          <TouchableOpacity style={{marginTop:10}} onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={wp("7%")}
              color="#fff"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Forgot Password
          </Text>

          <View style={{ width: wp("7%") }} />
        </View>

        {/* Body */}

        <View style={styles.body}>

          <View style={styles.iconContainer}>
            <Ionicons
              name="lock-closed"
              size={wp("18%")}
              color={COLORS.primary}
            />
          </View>

          <Text style={styles.title}>
            Forgot Your Password?
          </Text>

          <Text style={styles.description}>
            Enter your registered email address and we'll
            send you instructions to reset your password.
          </Text>

          {/* Email */}

          <Text style={styles.label}>Email Address</Text>

          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          {/* Button */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={onResetPassword}
          >
            <Text style={styles.buttonText}>
              SEND RESET LINK
            </Text>
          </TouchableOpacity>

          {/* Back to Login */}

          <TouchableOpacity
            style={styles.loginContainer}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Ionicons
              name="arrow-back-circle"
              size={22}
              color={COLORS.primary}
            />

            <Text style={styles.loginText}>
              Back to Sign In
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
    <CustomAlert
  visible={alertVisible}
  title={alertTitle}
  message={alertMessage}
  confirmText="OK"
  cancelText=""
  onCancel={() => setAlertVisible(false)}
  onConfirm={onConfirm}
/>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  header: {
    height: hp("11%"),
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: wp("6%"),
    fontFamily: FONT.Bold,
    marginTop:10
  },

  body: {
    paddingHorizontal: wp("6%"),
    paddingTop: hp("5%"),
    alignItems: "center",
  },

  iconContainer: {
    width: wp("25%"),
    height: wp("25%"),
    borderRadius: wp("12.5%"),
    backgroundColor: "#F2EEF8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("3%"),
  },

  title: {
    fontSize: wp("6%"),
    color: COLORS.black,
    marginBottom: hp("1%"),
    fontFamily: FONT.Bold,
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    color: COLORS.gray,
    fontSize: wp("4%"),
    lineHeight: hp("3%"),
    marginBottom: hp("5%"),
    paddingHorizontal: wp("2%"),
    fontFamily: FONT.Regular,
  },

  label: {
    alignSelf: "flex-start",
    color: COLORS.gray,
    fontSize: wp("4%"),
    marginBottom: hp("1%"),
    fontFamily: FONT.Medium,
  },

  input: {
    width: "100%",
    height: hp("7%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.inputBg,
    paddingHorizontal: wp("4%"),
    fontSize: wp("4%"),
    fontFamily: FONT.Regular,
    color: COLORS.black,
  },

  button: {
    width: "100%",
    height: hp("7%"),
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("4%"),
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: wp("4.5%"),
    fontFamily: FONT.Bold,
    letterSpacing: 0.5,
  },

  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("4%"),
  },

  loginText: {
    color: COLORS.primary,
    fontSize: wp("4%"),
    marginLeft: wp("2%"),
    fontFamily: FONT.SemiBold,
  },
});