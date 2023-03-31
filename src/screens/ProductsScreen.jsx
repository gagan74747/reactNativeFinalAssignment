import { StyleSheet, View, Button } from 'react-native'
import React from 'react'
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../services/products/action'
import ProductsFilter from '../components/ProductsFilter';
import ProductsList from '../components/ProductsList';

export default function ProductsScreen() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.productsReducer.isLoading)
  React.useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  return (
    <View style={styles.container}>
      {isLoading ? <Loader /> : <><ProductsFilter />
        <ProductsList />
      </>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
