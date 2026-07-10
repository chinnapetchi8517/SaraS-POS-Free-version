import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;