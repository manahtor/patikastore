/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({data}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.imgURL}} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.price}>{data.price}</Text>
      {!data.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}

    </View>
  );
};

export default ProductCard;
