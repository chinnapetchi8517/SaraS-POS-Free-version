import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Screens

import SplashScreen from "../screens/Splash";
import CreateAccountScreen from "../screens/Auth/CreateAccount";
import SignInScreen from "../screens/Auth/SignInScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPassword";
import OnboardingScreen from "../screens/Auth/OnboardingScreen";
import DrawerNavigator from "./DrawerNavigator";
import BarcodeScannerScreen from "../screens/BarcodeScannerScreen";
import CurrentStockScreen from "../screens/Stock/CurrentStockScreen";
import StockInScreen from "../screens/Stock/StockInScreen";
import StockOutScreen from "../screens/Stock/StockOutScreen";
import LowStockScreen from "../screens/Stock/LowStockScreen";
import StockHistoryScreen from "../screens/Stock/StockHistoryScreen";
import TodaySalesScreen from "../screens/Reports/TodaySalesScreen";
import DailyReportScreen from "../screens/Reports/DailyReportScreen";
import MonthlyReportScreen from "../screens/Reports/MonthlyReportScreen";
import ProductReportScreen from "../screens/Reports/ProductReportScreen";
import CustomerReportScreen from "../screens/Reports/CustomerReportScreen";
import GSTReportScreen from "../screens/Reports/GSTReportScreen";
import PaymentReportScreen from "../screens/Reports/PaymentReportScreen";
import TopSellingScreen from "../screens/Reports/TopSellingScreen";
import BillingSettingsScreen from "../screens/Settings/BillingSettingsScreen";
import TaxSettingsScreen from "../screens/Settings/TaxSettingsScreen";
import ShopProfileScreen from "../screens/Settings/ ShopProfileScreen";
import PrinterSettingsScreen from "../screens/Settings/PrinterSettingsScreen";
import UserManagementScreen from "../screens/Settings/UserManagementScreen";
import BackupRestoreScreen from "../screens/Settings/BackupRestoreScreen";
import AboutScreen from "../screens/Settings/AboutScreen";
import NotificationListScreen from "../screens/Notification/NotificationList";
import EditCategoryScreen from "../screens/Category/EditCategoryScreen";
import AddCategoryScreen from "../screens/Category/AddCategoryScreen";
import EditProductScreen from "../screens/Products/EditProductScreen";
import AddProductScreen from "../screens/Products/AddProductScreen";
import AddCustomerScreen from "../screens/Customer/AddCustomerScreen";
import EditCustomerScreen from "../screens/Customer/EditCustomerScreen";
import CustomerHistoryScreen from "../screens/Customer/CustomerHistoryScreen";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        
 screenOptions={{
    headerShown: false,
    contentStyle: {
      backgroundColor: '#FFFFFF',
    },
    animation: 'slide_from_right',
  }}
      >
        {/* Welcome Screen */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
             contentStyle: {
      backgroundColor: '#00000',
    },
          }}
        />

        {/* Create Account */}
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{
            headerShown: false,
            // title: "Create Account",
            // headerBackTitleVisible: false,
          }}
        />

        {/* Sign In */}
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerShown: false,
            // title: "Sign In",
            // headerBackTitleVisible: false,
          }}
        />

        {/* Forgot Password */}
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            headerShown: false,
            // title: "Forgot Password",
            // headerBackTitleVisible: false,
          }}
        />
         <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            headerShown: false,
            // title: "Forgot Password",
            // headerBackTitleVisible: false,
          }}
        />
         <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{
            headerShown: false,
            // title: "Forgot Password",
            // headerBackTitleVisible: false,
          }}
        />
        




<Stack.Screen
  name="BarcodeScanner"
  component={BarcodeScannerScreen}
/>
<Stack.Screen
  name="AddProduct"
  component={AddProductScreen}
/>
<Stack.Screen
  name="EditProduct"
  component={EditProductScreen}
/>
<Stack.Screen
  name="EditCategory"
  component={EditCategoryScreen}
/>
<Stack.Screen
  name="AddCategory"
  component={AddCategoryScreen}
/>
<Stack.Screen
  name="AddCustomer"
  component={AddCustomerScreen}
/>

<Stack.Screen
  name="EditCustomer"
  component={EditCustomerScreen}
/>

<Stack.Screen
  name="CustomerHistory"
  component={CustomerHistoryScreen}
/>
<Stack.Screen
  name="CurrentStock"
  component={CurrentStockScreen}
/>

<Stack.Screen
  name="StockIn"
  component={StockInScreen}
/>

<Stack.Screen
  name="StockOut"
  component={StockOutScreen}
/>

<Stack.Screen
  name="LowStock"
  component={LowStockScreen}
/>

<Stack.Screen
  name="StockHistory"
  component={StockHistoryScreen}
/>
 <Stack.Screen
        name="TodaySales"
        component={TodaySalesScreen}
      />

      <Stack.Screen
        name="DailyReport"
        component={DailyReportScreen}
      />

      <Stack.Screen
        name="MonthlyReport"
        component={MonthlyReportScreen}
      />

      <Stack.Screen
        name="ProductReport"
        component={ProductReportScreen}
      />

      <Stack.Screen
        name="CustomerReport"
        component={CustomerReportScreen}
      />

      <Stack.Screen
        name="GSTReport"
        component={GSTReportScreen}
      />

      <Stack.Screen
        name="PaymentReport"
        component={PaymentReportScreen}
      />

      <Stack.Screen
        name="TopSelling"
        component={TopSellingScreen}
      />
      <Stack.Screen
  name="ShopProfile"
  component={ShopProfileScreen}
/>

<Stack.Screen
  name="TaxSettings"
  component={TaxSettingsScreen}
/>

<Stack.Screen
  name="BillingSettings"
  component={BillingSettingsScreen}
/>

<Stack.Screen
  name="PrinterSettings"
  component={PrinterSettingsScreen}
/>

<Stack.Screen
  name="UserManagement"
  component={UserManagementScreen}
/>

<Stack.Screen
  name="BackupRestore"
  component={BackupRestoreScreen}
/>

<Stack.Screen
  name="About"
  component={AboutScreen}
/>
<Stack.Screen
  name="Notification"
  component={NotificationListScreen}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;