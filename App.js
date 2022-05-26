import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Admin1 from './src/Modules/screens/Admin/Admin';
import SettingScreen from './src/Modules/screens/Admin/components/SettingScreen';
import Electric from './src/Modules/screens/ElectricScreen/Electric';
import RedElectric from './src/Modules/screens/RedElectricScreen/redElectric';
import redStatus from './src/Modules/screens/RedStatusScreen/redStatus';
import SallingScreen from './src/Modules/screens/SailingScreen/SailingScreen';
import Status from './src/Modules/screens/StatusScreen/Status';
import SystemMain from './src/Modules/screens/SystemScreen/SystemMain';
import System from './src/Modules/screens/SystemScreen/System';
import UnderEngine from './src/Modules/screens/UnderEngineScreen/UnderEngine';
import WeatherData from './src/Modules/screens/WeatherData/WeatherData';
import WelcomeScreen from './src/Modules/screens/WelcomeScreen/WelcomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

SystemNavigationBar.navigationHide();

function SystemStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SystemsMain" component={SystemMain} />
      <Stack.Screen name="System" component={System} />
    </Stack.Navigator>
  )
}

function AdminStack() {
  return (
    <Stack.Navigator
      initialRouteName='Admins'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Admins" component={Admin1} />
      <Stack.Screen name="settingscreen" component={SettingScreen} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        optimizationsEnabled={true}
        screenOptions={({ route, navigation }) => ({
          lazy: true,
          unmountOnBlur: true, 
          tabBarStyle: {
            backgroundColor: '#242424',
            height: 70,
            borderTopColor: '#4B4B4B',
            animationEnabled: false,
            transitionConfig: () => ({
              transitionSpec: {
                duration: 0,
                timing: 0,
              },
            })
          },
          tabBarIconStyle: { display: "none" },
          tabBarLabel: ({ focused }) => {
            return (
              <View
                // onPress={() => {
                //   if (route.name == "Admin") {
                //     navigation.navigate(route.name, {
                //       screen: 'Admins'
                //     })

                //   } else {
                //     navigation.navigate(route.name)
                //   }
                // }}
                style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    textTransform: 'uppercase',
                    color: focused ? '#777777' : '#777777',
                    fontFamily: 'OpenSans-ExtraBoldItalic',
                    // fontSize: focused ? route.name == 'Weather Data' || route.name == 'Under Engine' || route.name == 'RedElectric' ? hp('2.4%') : hp('3%') : hp('2%'),
                    fontSize: focused ? hp('3%') : hp('2%'),
                  }}>
                  {route.name}
                </Text>
              </View>
            );
          },
        })}>
        {/* <Tab.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} /> */}
        {/* <Tab.Screen name="Status" component={Status} options={{ headerShown: false }} /> */}
        {/* <Tab.Screen name="Electric" component={Electric} options={{ headerShown: false }} /> */}
        {/* <Tab.Screen name="Systems" component={SystemStack} options={{ headerShown: false }} /> */}
        <Tab.Screen name="Under Engine" component={UnderEngine} options={{ headerShown: false }} />
        <Tab.Screen name="Sailing" component={SallingScreen} options={{ headerShown: false }} />
        {/* <Tab.Screen name="Weather Data" component={WeatherData} options={{ headerShown: false }} /> */}
        {/* <Tab.Screen name="Admin" component={AdminStack} options={{ headerShown: false }} /> */}
        {/* <Tab.Screen name="redStatus" component={redStatus} options={{ headerShown: false }} />
        <Tab.Screen name="RedElectric" component={RedElectric} options={{ headerShown: false }} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
