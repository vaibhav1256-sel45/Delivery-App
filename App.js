import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductSelectionScreen from './components/ProductSelectionScreen';
import PincodeEntryScreen from './components/PinCodeEntryScreen';
import DeliveryDateScreen from './components/DeliveredDateScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductSelection">
        <Stack.Screen name="ProductSelection" component={ProductSelectionScreen} />
        <Stack.Screen name="PincodeEntry" component={PincodeEntryScreen} />
        <Stack.Screen name="DeliveryDate" component={DeliveryDateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}