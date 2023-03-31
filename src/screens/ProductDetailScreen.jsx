import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchProductDetails, removeProductDetail } from '../services/productDetails/action';
import Loader from '../components/Loader';

export default function ProductproductDetailscreen({ route }) {

  const { id } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetailsReducer.productDetails);
  const isLoading = useSelector(state => state.productDetailsReducer.isLoading)

  useEffect(() => {
    productDetails.title && navigation.setOptions({
      title: productDetails.title             //route.params.title, // set the title as the screen title
    });
  }, [productDetails]);

  useEffect(() => {
    dispatch(fetchProductDetails(id))
    return () => {
      dispatch(removeProductDetail())
    }
  }, [])
  return (
    <>
      {isLoading ? <Loader /> :
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.imageWrapper}>
              {productDetails.image && <Image style={styles.productImage} source={{ uri: productDetails?.image }} />}
            </View>
            <Text style={[styles.titleStyle]}>{productDetails?.title}</Text>
            <View style={{ marginVertical: 10 }}>
              <Rating
                rating={productDetails?.rating?.rate}
              />
            </View>
            <Text
              style={[
                styles.price,
              ]}>${productDetails?.price}</Text>
            <View >
              <Text style={styles.fontStyle}>{productDetails?.description}</Text>
            </View>
          </ScrollView>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  productImage: {
    width: '100%',
    flex: 1,
    resizeMode: 'contain'
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 350,
    padding: 20,
    marginVertical: 20
  },
  fontStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 7
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 2,
    color: 'black'
  },
})
