import React from 'react';
import {Text, View, FlatList, StyleSheet, TextInput} from 'react-native';
import product_data from './product_data.json';
import ProductCard from './components/ProductCard';
const App = () => {
  const renderProduct = ({item}) => <ProductCard products={item} />;
  return (
    <View style={styles.container}>
        
        <Text style={styles.header}>PATISTORE</Text>
        <TextInput placeholder="Ara.." style={styles.search_bar}></TextInput>
     
      
        <FlatList numColumns={2} data={product_data} renderItem={renderProduct} ></FlatList>
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 50,
    margin:5
   
  },
  search_bar: {
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
    padding:10,
    height: 40,
    margin: 5,
  },
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
  },
});

export default App;
