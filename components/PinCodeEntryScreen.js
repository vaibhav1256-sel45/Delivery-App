// screens/PincodeEntryScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const PincodeEntryScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [pincode, setPincode] = useState('');

  const submitPincode = () => {
    navigation.navigate('DeliveryDate', { product, pincode });
  };

  return (
    <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
   <View>
   <TextInput
      style={{height:'40px',marginBottom:'20px',paddingLeft:'5px'}}
        placeholder="Enter Pincode"
        value={pincode}
        onChangeText={setPincode}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={submitPincode}  />
   </View>
    </View>
  );
};

export default PincodeEntryScreen;
