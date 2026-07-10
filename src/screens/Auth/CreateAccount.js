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
import RegisterSuccessModal from "./RegisterSuccessModal";
import Ionicons from "react-native-vector-icons/Ionicons";
const COLORS = {
  primary: "#2B1247",
  white: "#FFFFFF",
  black: "#222222",
  gray: "#777777",
  border: "#D8D8D8",
  input: "#F5F5F5",
};
import FONT from "../../utils/font";
const CreateAccountScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [password, setPassword] = useState("");
  const [showModal,setShowModal]=useState(false);


  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

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
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
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
            Create Account
          </Text>

          <View style={{ width: wp("7%") }} />
        </View>

        {/* Form */}

        <View style={styles.form}>

          {/* Email */}

          <Text style={styles.label}>Email</Text>

          <TextInput
            placeholder="Enter email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />

          {/* Password */}

          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordView}>
            <TextInput
              placeholder="Enter password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              style={styles.passwordInput}
            />

            <TouchableOpacity
              onPress={() =>
                setShowPassword(!showPassword)
              }
            >
              <Ionicons
                name={
                  showPassword
                    ? "eye-off"
                    : "eye"
                }
                size={26}
                color="#777"
              />
            </TouchableOpacity>
          </View>

          {/* Business */}

          <Text style={styles.label}>
            Business Name
          </Text>

          <TextInput
            placeholder="Business Name"
            placeholderTextColor="#999"
            value={business}
            onChangeText={setBusiness}
            style={styles.input}
          />

          {/* Country */}

          <Text style={styles.label}>Country</Text>

          <TouchableOpacity style={styles.input}>
            <Text
              style={{
                color: COLORS.black,
                fontSize: wp("4%"),
              }}
            >
              🇮🇳 India
            </Text>
          </TouchableOpacity>

          {/* Terms */}

          <TouchableOpacity
            style={styles.checkRow}
            onPress={() => setAgree(!agree)}
          >
            <Ionicons
              name={
                agree
                  ? "checkbox"
                  : "square-outline"
              }
              size={28}
              color={COLORS.primary}
            />

            <Text style={styles.terms}>
              I agree to the{" "}
              <Text
                style={styles.link}
              >
                Terms of Use
              </Text>{" "}
              and{" "}
              <Text
                style={styles.link}
              >
                Privacy Policy
              </Text>
            </Text>
          </TouchableOpacity>

          {/* Button */}

          <TouchableOpacity
           onPress={() =>{
                console.log("kkkk");
                
                setShowModal(true)
              }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              SIGN UP
            </Text>
          </TouchableOpacity>

          {/* Footer */}

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account?
            </Text>

            <TouchableOpacity
              onPress={() =>

                navigation.navigate("SignIn")
              }
            >
              <Text style={styles.login}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
    <RegisterSuccessModal
visible={showModal}
email="abc@gmail.com"
onClose={()=>{setShowModal(false), navigation.navigate('Onboarding')}}
/>
    </View>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: COLORS.primary,
    height: hp("11%"),
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

  form: {
    padding: wp("6%"),
  },

  label: {
    fontSize: wp("4%"),
    color: COLORS.gray,
    marginBottom: hp("0.8%"),
    marginTop: hp("2%"),
    fontFamily: FONT.Medium,
  },

  input: {
    height: hp("7%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.input,
    paddingHorizontal: wp("4%"),
    justifyContent: "center",
    fontSize: wp("4%"),
    fontFamily: FONT.Regular,
    color: COLORS.black,
  },

  passwordView: {
    height: hp("7%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.input,
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

  checkRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: hp("3%"),
  },

  terms: {
    flex: 1,
    marginLeft: wp("3%"),
    fontSize: wp("3.8%"),
    color: COLORS.black,
    lineHeight: 22,
    fontFamily: FONT.Regular,
  },

  link: {
    color: COLORS.primary,
    fontFamily: FONT.SemiBold,
  },

  button: {
    marginTop: hp("4%"),
    height: hp("7%"),
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: wp("4.5%"),
    fontFamily: FONT.Bold,
    letterSpacing: 0.5,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp("4%"),
  },

  footerText: {
    color: COLORS.gray,
    fontSize: wp("4%"),
    fontFamily: FONT.Regular,
  },

  login: {
    color: COLORS.primary,
    marginLeft: 5,
    fontSize: wp("4%"),
    fontFamily: FONT.Bold,
  },
});