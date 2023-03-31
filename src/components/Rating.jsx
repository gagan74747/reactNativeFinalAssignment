import { View } from 'react-native'
import React from 'react'
import StarRating from 'react-native-star-rating-widget';

export default function Rating({ rating }) {
 return (
  <View>
   <StarRating
    disabled={true}
    rating={rating}
    color={rating < 3 ? 'red' : 'green'}
    starSize={23}
    starStyle={{ marginLeft: 0 }}
   />
  </View>
 )
}
