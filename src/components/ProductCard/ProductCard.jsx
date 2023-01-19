import react from 'react';
import {View, Image,Text} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({products}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:products.imgURL}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>
        <Text style={styles.stock_situation}>{!(products.inStock)? "Stokta Yok": ""}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
