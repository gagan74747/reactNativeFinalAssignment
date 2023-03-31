import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'

export default function ProductsList() {

 const products = useSelector(state => state.productsReducer.filteredProductsData.products)
 const flatListRef = React.useRef(null);

 useEffect(() => {
  flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
 }, [products])

 return (
  <View style={styles.container}>
   <FlatList
    ref={flatListRef}
    data={products}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => {
     return <Product item={item} />;
    }}
   />
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
 }
})
