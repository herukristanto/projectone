import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  Login,
  Register,
  Home,
  UserProfile,
  ListReservasi,
  Reservasi,
  Radiologi,
  MyRecord,
  Berita,
} from '../screens';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListReservasi"
        component={ListReservasi}
        options={{ title: 'Reservasi' }}
      />
      <Stack.Screen
        name="Reservasi"
        component={Reservasi}
        options={{ title: 'Reservasi' }}
      />
      <Stack.Screen
        name="Radiologi"
        component={Radiologi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyRecord"
        component={MyRecord}
        options={{ title: 'My Record' }}
      />
      <Stack.Screen
        name="Berita"
        component={Berita}
        options={{ title: 'Berita' }}
      />
    </Stack.Navigator>
  );
};

export default Router;
