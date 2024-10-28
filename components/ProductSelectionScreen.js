// screens/ProductSelectionScreen.js
import React from 'react';
import { View, Text, FlatList, Button,StyleSheet,Image } from 'react-native';

const products = [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "description": "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
      "image": "https://images.unsplash.com/photo-1531860898813-8cecde84646c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 99.99,
      "category": "Electronics"
    },
    {
      "id": 2,
      "name": "Smartphone",
      "description": "Latest model smartphone with a stunning display and powerful performance.",
      "image": "https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 699.99,
      "category": "Electronics"
    },
    {
      "id": 3,
      "name": "Running Shoes",
      "description": "Comfortable running shoes designed for performance and style.",
      "image": "https://images.unsplash.com/photo-1590646299178-1b26ab821e34?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 79.99,
      "category": "Footwear"
    },
    {
      "id": 4,
      "name": "Yoga Mat",
      "description": "Eco-friendly yoga mat with excellent grip and cushioning.",
      "image": "https://plus.unsplash.com/premium_photo-1663090241828-1d5f7456b699?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 29.99,
      "category": "Fitness"
    },
    {
      "id": 5,
      "name": "Coffee Maker",
      "description": "Automatic coffee maker with multiple brewing options.",
      "image": "https://media.istockphoto.com/id/524908249/photo/coffee-blender-and-boiler-machine-in-kitchen-interior.jpg?s=2048x2048&w=is&k=20&c=80a_NXQBHQSOaFDntEMfNA-iQxOwubcdTAernQnERV0=",
      "price": 49.99,
      "category": "Home Appliances"
    },
    {
      "id": 6,
      "name": "Laptop Stand",
      "description": "Ergonomic laptop stand to improve your posture and comfort.",
      "image": "https://plus.unsplash.com/premium_photo-1683736986821-e4662912a70d?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "price": 39.99,
      "category": "Office Supplies"
    }
  ]
  

const ProductSelectionScreen = ({ navigation }) => {
  const selectProduct = (product) => {
    navigation.navigate('PincodeEntry', { product });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View >
       <View style={styles.container1}>
       <Image
        style={styles.image}
        source={{ uri: `${item.image}` }}
      />
            <Text >{item.name}</Text>
            <Text >{item.price}</Text>
            <Text style={{width:'40vw'}}>{item.description}</Text>
            <Button title="Select" onPress={() => selectProduct(item)} />
        </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      justifyContent: 'center',
      alignItems: 'center',
    },
    container1: {
 
             },
    image: {
      width: '40vw',
      height: '40vh',
      marginTop:'20px'
    },
  });
export default ProductSelectionScreen;
