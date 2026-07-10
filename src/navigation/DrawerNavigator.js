// import React from 'react';
// import { View } from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import CustomDrawer from './CustomDrawer';
// import TicketScreen from '../screens/Drawer/TicketScreen';
// import ReceiptScreen from '../screens/Drawer/ReceiptScreen';
// import ItemsScreen from '../screens/Drawer/ItemsScreen';
// import SettingsScreen from '../screens/Drawer/SettingsScreen';
// import BackOfficeScreen from '../screens/Drawer/BackOfficeScreen';
// import AppsScreen from '../screens/Drawer/AppsScreen';
// import SupportScreen from '../screens/Drawer/SupportScreen';
// import COLORS from '../theme/colors';
// const Drawer=createDrawerNavigator();

// export default function DrawerNavigator(){

// return(

//      <View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
//         {/* Status Bar Area */}
//         <SafeAreaView
//           edges={['top']}
//           style={{ backgroundColor:COLORS.primary }}
//         />
// <Drawer.Navigator

// drawerContent={props=><CustomDrawer {...props}/>}

// screenOptions={{
// headerShown:false,
// drawerStyle:{
// width:290
// }
// }}>

// <Drawer.Screen
// name="Sales"
// component={TicketScreen}/>

// <Drawer.Screen
// name="Receipts"
// component={ReceiptScreen}/>

// <Drawer.Screen
// name="Items"
// component={ItemsScreen}/>

// <Drawer.Screen
// name="Settings"
// component={SettingsScreen}/>

// <Drawer.Screen
// name="Back Office"
// component={BackOfficeScreen}/>

// <Drawer.Screen
// name="Apps"
// component={AppsScreen}/>

// <Drawer.Screen
// name="Support"
// component={SupportScreen}/>

// </Drawer.Navigator>
// </View>

// )

// }

import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';

import CustomDrawer from './CustomDrawer';
import COLORS from '../theme/colors';

// Screens
import DashboardScreen from '../screens/Drawer/DashboardScreen';
import BillingScreen from '../screens/Drawer/BillingScreen';
import ProductsScreen from '../screens/Drawer/ProductsScreen';
import CustomersScreen from '../screens/Drawer/CustomersScreen';
import StockScreen from '../screens/Drawer/StockScreen';
import ReportsScreen from '../screens/Drawer/ReportsScreen';
import SettingsScreen from '../screens/Drawer/SettingsScreen';
import CategoryListScreen from '../screens/Drawer/CategoryListScreen';
import NotificationListScreen from '../screens/Notification/NotificationList';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <SafeAreaView
        edges={['top']}
        style={{backgroundColor: COLORS.primary}}
      />

      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: 290,
          },
        }}>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
        />

        <Drawer.Screen
          name="Billing"
          component={BillingScreen}
        />

        <Drawer.Screen
          name="Products"
          component={ProductsScreen}
        />

        <Drawer.Screen
          name="Customers"
          component={CustomersScreen}
        />

        <Drawer.Screen
          name="Stock"
          component={StockScreen}
        />

        <Drawer.Screen
          name="Reports"
          component={ReportsScreen}
        />

        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
        />
<Drawer.Screen
  name="CategoryList"
  component={CategoryListScreen}
/>
<Drawer.Screen
  name="Notification"
  component={NotificationListScreen}
/>

        {/* <Drawer.Screen
          name="Logout"
          component={LogoutScreen}
        /> */}
      </Drawer.Navigator>
    </View>
  );
}