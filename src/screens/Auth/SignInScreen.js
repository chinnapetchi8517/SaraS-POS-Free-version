// SignInScreen.js

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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Ionicons from "react-native-vector-icons/Ionicons";
import FONT from "../../utils/font";
const COLORS = {
  primary: "#2B1247",
  white: "#FFFFFF",
  black: "#222222",
  gray: "#777777",
  border: "#D9D9D9",
  inputBg: "#F8F8F8",
};

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const onLogin = () => {
    console.log({
      email,
      password,
    });
navigation.replace('Main')
    // navigation.replace("Home");
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

          <Text style={styles.headerTitle}>Sign In</Text>

          <View style={{ width: wp("7%") }} />
        </View>

        {/* Body */}

        <View style={styles.body}>
          {/* Email */}

          <Text style={styles.label}>Email</Text>

          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          {/* Password */}

          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#999"
              secureTextEntry={secure}
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
              style={styles.passwordInput}
            />

            <TouchableOpacity
              onPress={() => setSecure(!secure)}
            >
              <Ionicons
                name={secure ? "eye" : "eye-off"}
                size={26}
                color="#777"
              />
            </TouchableOpacity>
          </View>

          {/* Login Button */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.loginButton}
            onPress={onLogin}
          >
            <Text style={styles.loginText}>
              SIGN IN
            </Text>
          </TouchableOpacity>

          {/* Forgot */}

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ForgotPassword")
            }
          >
            <Text style={styles.forgot}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {/* Footer */}

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don't have an account?
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CreateAccount")
              }
            >
              <Text style={styles.signup}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

export default SignInScreen;
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
    color: "#fff",
    fontSize: wp("6%"),
    fontFamily: FONT.Bold,
    marginTop:10
  },

  body: {
    paddingHorizontal: wp("6%"),
    paddingTop: hp("5%"),
  },

  label: {
    color: COLORS.gray,
    fontSize: wp("4%"),
    marginBottom: hp("1%"),
    marginTop: hp("2%"),
    fontFamily: FONT.Medium,
  },

  input: {
    height: hp("7%"),
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.inputBg,
    borderRadius: 10,
    paddingHorizontal: wp("4%"),
    fontSize: wp("4%"),
    fontFamily: FONT.Regular,
    color: COLORS.black,
  },

  passwordContainer: {
    height: hp("7%"),
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.inputBg,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("4%"),
  },

  passwordInput: {
    flex: 1,
    fontSize: wp("4%"),
    fontFamily: FONT.Regular,
    color: COLORS.black,
  },

  loginButton: {
    marginTop: hp("5%"),
    height: hp("7%"),
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontSize: wp("4.5%"),
    fontFamily: FONT.Bold,
    letterSpacing: 0.5,
  },

  forgot: {
    marginTop: hp("3%"),
    color: COLORS.primary,
    fontSize: wp("4.4%"),
    textAlign: "center",
    fontFamily: FONT.SemiBold,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp("5%"),
  },

  footerText: {
    color: COLORS.gray,
    fontSize: wp("4%"),
    fontFamily: FONT.Regular,
  },

  signup: {
    marginLeft: wp("1%"),
    color: COLORS.primary,
    fontSize: wp("4%"),
    fontFamily: FONT.Bold,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },

//   header: {
//     height: hp("9%"),
//     backgroundColor: COLORS.primary,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: wp("5%"),
//   },

//   headerTitle: {
//     color: "#fff",
//     fontSize: wp("6%"),
//     fontWeight: "700",
//   },

//   body: {
//     paddingHorizontal: wp("6%"),
//     paddingTop: hp("5%"),
//   },

//   label: {
//     color: COLORS.gray,
//     fontSize: wp("4%"),
//     marginBottom: hp("1%"),
//     marginTop: hp("2%"),
//   },

//   input: {
//     height: hp("7%"),
//     borderWidth: 1,
//     borderColor: COLORS.border,
//     backgroundColor: COLORS.inputBg,
//     borderRadius: 10,
//     paddingHorizontal: wp("4%"),
//     fontSize: wp("4%"),
//   },

//   passwordContainer: {
//     height: hp("7%"),
//     borderWidth: 1,
//     borderColor: COLORS.border,
//     backgroundColor: COLORS.inputBg,
//     borderRadius: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: wp("4%"),
//   },

//   passwordInput: {
//     flex: 1,
//     fontSize: wp("4%"),
//   },

//   loginButton: {
//     marginTop: hp("5%"),
//     height: hp("7%"),
//     backgroundColor: COLORS.primary,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   loginText: {
//     color: "#fff",
//     fontSize: wp("4.5%"),
//     fontWeight: "700",
//   },

//   forgot: {
//     marginTop: hp("3%"),
//     color: COLORS.primary,
//     fontSize: wp("4.4%"),
//     textAlign: "center",
//     fontWeight: "600",
//   },

//   footer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: hp("5%"),
//   },

//   footerText: {
//     color: COLORS.gray,
//     fontSize: wp("4%"),
//   },

//   signup: {
//     marginLeft: wp("1%"),
//     color: COLORS.primary,
//     fontWeight: "700",
//     fontSize: wp("4%"),
//   },
// });