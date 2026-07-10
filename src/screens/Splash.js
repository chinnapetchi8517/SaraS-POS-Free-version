// SplashScreen.js

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { CollapsedItem } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FONT from "../utils/font";
const COLORS = {
  primary: "#2B1247",
  white: "#FFFFFF",
  border: "#2B1247",
  text: "#2B1247",
  secondaryText: "#666666",
};

const SplashScreen = ({ navigation }) => {
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

      {/* Top Section */}
      <View style={styles.topContainer}>
        <Image
          source={require("../assets/images/logo.png")} // Replace with your logo
          resizeMode="contain"
          style={styles.logo}
        />

        <Text style={styles.title}>SaraS POS</Text>

        <Text style={styles.subtitle}>
          Point Of Sale Management System
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.primaryButton}
          onPress={() => navigation.navigate("CreateAccount")}
        >
          <Text style={styles.primaryText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.outlineButton}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.outlineText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  topContainer: {
    height: hp("58%"),
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp("6%"),
  },

  logo: {
    width: wp("35%"),
    height: hp("18%"),
    marginBottom: hp("2%"),
  },

  title: {
  color: COLORS.white,
  fontSize: wp("11%"),
  fontFamily: FONT.SemiBold,
  letterSpacing: 1,
},

 subtitle: {
  marginTop: hp("1%"),
  color: COLORS.white,
  fontSize: wp("4%"),
  fontFamily: FONT.Medium,
  letterSpacing: 2,
  textTransform: "uppercase",
},


  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: wp("7%"),
  },

  primaryButton: {
    height: hp("7%"),
    backgroundColor: COLORS.primary,
    borderRadius: wp("2%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2.5%"),
    elevation: 3,
  },

  primaryText: {
  color: COLORS.white,
  fontSize: wp("4.6%"),
  fontFamily: FONT.SemiBold,
},


  outlineButton: {
    height: hp("7%"),
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    borderRadius: wp("2%"),
    justifyContent: "center",
    alignItems: "center",
  },

  outlineText: {
  color: COLORS.primary,
  fontSize: wp("4.6%"),
  fontFamily: FONT.SemiBold,
},
});