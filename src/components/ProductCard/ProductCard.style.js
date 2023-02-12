/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {backgroundColor: '#ddd', flex: 1, margin: 5, borderRadius: 10, padding: 10,
  },

  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    width: '100%',
    resizeMode: 'contain',


  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,

  },
  price: {
    color: '#666',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,

  },
  stock: {
    color: '#f00',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  }
});
