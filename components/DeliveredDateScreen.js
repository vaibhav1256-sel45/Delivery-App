// In DeliveryDateScreen.js
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { View, TextInput, Button,Text } from 'react-native';
import statesByZone from './Data';
const deliveryData = {
    urban: { deliveryTime: 2 },
    suburban: { deliveryTime: 5 },
    rural: { deliveryTime: 7 },
  };

 const DeliveryDateScreen = ({ route }) => {
    const { product, pincode } = route.params;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        
        const fetchData = async () => {
          try {
          
            const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`); // Replace with your API
        const response=await res.json()
       
          
           const  estimatedDeliveryDate = getEstimatedDeliveryDate(response[0].PostOffice[0].State);
           setData(estimatedDeliveryDate);
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
 
  
    return (
        <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}> 
         <View>
        <Text>Product: {product.name}</Text>
        <Text>Estimated Delivery Date: {data}</Text>
        <Button title="Confirm Order" onPress={() => alert('Order Confirmed!')} />
      </View></View>
     
    );
  };
  const getEstimatedDeliveryDate = (state) => {
    console.log(state)
    const today = new Date();
    const zone = statesByZone.urban.includes(state)?'urban':( statesByZone.suburban.includes(state)?'suburban': statesByZone.rural.includes(state)?'rural':'')
   console.log(zone)
    if (!zone) {
      return "Delivery not available for this pincode.";
    }
  
    const deliveryDays = deliveryData[zone].deliveryTime;
  
    // Calculate estimated delivery date
    const estimatedDeliveryDate = new Date(today);
    estimatedDeliveryDate.setDate(today.getDate() + deliveryDays);
  
    // Format the date to a readable format (optional)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return estimatedDeliveryDate.toLocaleDateString(undefined, options);
  };
  export default DeliveryDateScreen; 