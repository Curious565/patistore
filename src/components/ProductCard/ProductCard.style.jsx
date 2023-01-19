import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#e3e3e3',
    margin: 4,
    padding: 5,
    borderRadius: 10,
    overflow: 'hidden',
    flex: 1,
  },
  inner_container: {},
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 19,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 5,
  },
  stock_situation: {
    color: 'red',
    fontWeight: 'bold',
  },
});
