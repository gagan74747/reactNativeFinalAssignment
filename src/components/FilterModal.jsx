import React from 'react';
import { useDispatch } from 'react-redux';
import { sortProducts, setBrandFilter } from '../services/products/action';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FilterModal = ({ options, modalTitle, sortedOn, filteredOn, closeModal }) => {

 const titleMappedToAction = {
  'Sort By': sortProducts,
  'Filter': setBrandFilter
 }
 const dispatch = useDispatch();

 const handleOptionClick = (selectedOption) => {
  dispatch(titleMappedToAction[modalTitle](selectedOption))
  modalTitle !== "Sort By" && dispatch(sortProducts(sortedOn))
  closeModal()
 }

 return (
  <Modal visible={true} transparent={true} >
   <TouchableOpacity style={{ flex: 1 }} onPress={closeModal}>
    <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'flex-end' }} >
     <View style={{ backgroundColor: 'white' }}>
      <Text style={styles.modalHeading}>{modalTitle}</Text>
      <ScrollView >
       {options.map((option, index) => <TouchableOpacity style={styles.modalItems} key={index} onPress={() => handleOptionClick(option)}>
        <Text style={[styles.modalItemsLabel]}>{option}</Text>
        <View style={[styles.radioButton, (modalTitle === 'Sort By' ? sortedOn : filteredOn) === option && styles.selected]}></View>
       </TouchableOpacity>)}
      </ScrollView>
     </View>
    </View>
   </TouchableOpacity>
  </Modal>
 );
};

export default FilterModal;

const styles = StyleSheet.create({
 modalHeading: {
  color: '#696969',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  marginVertical: 10
 },
 modalItems: {
  flexDirection: 'row',
  padding: 14,
  justifyContent: 'space-between',
  alignItems: 'center'
 },
 modalItemsLabel: {
  color: 'grey',

  fontSize: 20,
  fontWeight: 'bold'
 },
 radioButton: {
  borderRadius: 12,
  width: 15,
  height: 15,
  borderWidth: 1
 },
 selected: {
  backgroundColor: 'blue'
 }
})
