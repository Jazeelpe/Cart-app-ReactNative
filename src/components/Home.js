import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {productData} from '../utils/productData';
import {useDispatch, useSelector} from 'react-redux';
import {ADDITEM, PRODUCTLIST, UPDATEQTY} from '../store/cartSlice';

const Home = () => {
  const [list, setlist] = useState(productData);
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.cartItems);

  const handleAdditem = item => {
    const newdata = list.map(data => {
      if (data.id === item.id) {
        data.qty = data.qty + 1;
        return data
      } else return data;
    });
    dispatch(ADDITEM(item));
    setlist(newdata);
  };
  
  const handleAddqty =(item)=>{
    const newdata = list.map(data => {
      if (data.id === item.id) {
        data.qty = data.qty + 1;
        return data
      } else return data;
    });
    dispatch(UPDATEQTY(item))
    setlist(newdata);
  }

  const handleTotal = () => {
    let total = 0;
    cartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };
  console.log(cartItems);

  return (
    <View style={style.maincontainer}>
      <Text style={style.header}>Cart</Text>
      <FlatList
        data={list}
        contentContainerStyle={style.contentcontainer}
        renderItem={({item, index}) => {
          return (
            <View style={style.flatcontainer}>
              <Image
                source={{uri: item.image}}
                style={{width: 140, height: 140, resizeMode: 'contain'}}
              />
              <View style={{width: 240, height: '100%'}}>
                <View>
                  <Text
                    style={{color: '#000', fontSize: 18, fontWeight: '500'}}
                    numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={{color: '#000', marginVertical: 5}}>
                    {item.brand}
                  </Text>
                  <Text style={{color: 'green'}}>₹{item.price}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                    marginTop: 8,
                  }}>
                  {item.qty === 0 ? (
                    <TouchableOpacity
                      style={style.btn}
                      onPress={() => handleAdditem(item)}>
                      <Text style={{textAlign: 'center'}}>Add to cart</Text>
                    </TouchableOpacity>
                  ) : (
                    <>
                      <TouchableOpacity style={style.btn}>
                        <Text style={{textAlign: 'center'}}>-</Text>
                      </TouchableOpacity>
                      <Text style={{color: '#000'}}>{item.qty}</Text>
                      <TouchableOpacity style={style.btn} onPress={()=>handleAdditem(item)}>
                        <Text style={{textAlign: 'center'}}>+</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#fff',
          borderRadius: 8,
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{color: '#000'}}>{`items Added (${cartItems.length})`}</Text>
          <Text style={{color: '#000'}}>₹{handleTotal()}</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={style.btn}>
            <Text style={{textAlign: 'center'}}>View cart</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 5,
    flexDirection: 'row',
  },
  contentcontainer: {
    padding: 10,
    gap: 10,
  },
  btn: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
});
