import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Rating from './Rating';
import { useNavigation } from '@react-navigation/native';

export default function Product({ item }) {

const navigation = useNavigation();

const handlePress = () => {
navigation.navigate('ProductDetails', {id:item.id})
}

 return (
  <TouchableOpacity style={[styles.productCard]} onPress={handlePress}>
   <Image source={{ uri: item.image }} style={styles.productImage} resizeMode='contain' />
   <View style={styles.productInfo}>
    <View >
     <Text style={styles.productTitle} numberOfLines={2}>{item.title}</Text>
    </View>
    <View style={styles.productRating}>
     <Rating rating={item.rating.rate}/>
    </View>
    <View style={styles.productPrice}>
    <Text style={{color:'black',fontWeight:'bold'}}>${item.price}</Text>
    </View>
   </View>
  </TouchableOpacity>
 );
}

const styles = StyleSheet.create({
 productCard: {
  padding: 10,
  margin: 1.5,
  backgroundColor: 'white',
  height: 150,
  flexDirection: 'row',
 },
 productImage: {
  width: 100,
 },
 productInfo: {
  flex: 1,
  paddingHorizontal: 20,
 },
 productTitle: {
  fontSize: 15,
  fontWeight: 'bold',
  color:'#717171'
 },
 productRating:{
 marginTop:10,
 pointerEvents:'none'
 },
productPrice:{
 marginTop: 10,
}
});
