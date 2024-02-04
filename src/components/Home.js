import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import { productData } from '../utils/productData';


const Home = () => {
  return (
    <View style={style.maincontainer}>
      <Text style={style.header}>Cart</Text>
      <FlatList
        data={productData}
        contentContainerStyle={style.contentcontainer}
        renderItem={({item, index}) => {
          return <View style={style.flatcontainer}></View>;
        }}
      />
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'gray',
  },
  header: {
    color: '#000',
    padding: 15,
    backgroundColor: '#fff',
    fontSize: 25,
    fontWeight: '500',
  },
  flatcontainer: {
    width: '100%',
    height: 150,
    backgroundColor:"#fff",
    borderRadius:8,
  },
  contentcontainer: {
    padding: 10,
    gap:10,
  },
});
