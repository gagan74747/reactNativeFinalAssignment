import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useMemo } from 'react'
import FilterModal from './FilterModal'
import { useSelector } from 'react-redux'

export default function ProductsFilter() {

  const filteredProducts = useSelector(state => state.productsReducer.filteredProductsData);
  const categories = useSelector(state => state.productsReducer.categories)
  const sortingOptions = ['Price-Low To High', 'Price-High To Low'];
  const [isModalOpen, setIsModalOpen] = useState({ state: false, options: [], modalTitle: '' })
  
  const isSortingApplied = useMemo(() => !!filteredProducts.sortedOn, [filteredProducts.sortedOn]);
  const isFilterApplied = useMemo(() => filteredProducts.filteredOn !== 'All', [filteredProducts.filteredOn])
  const closeModal = () => setIsModalOpen({ state: false, options: [], modalTitle: '' })
  const openModal = (options, modalTitle) => setIsModalOpen({ state: true, options, modalTitle })

  return (
    <View style={styles.container}>
      <View style={[styles.filters]}>
        <TouchableOpacity style={[styles.filterButton, isSortingApplied && styles.selected]} onPress={() => openModal(sortingOptions, 'Sort By')}>
          <Text style={[styles.filterLabel, isSortingApplied && styles.selected]}>Sort By</Text>
          <Image source={isSortingApplied ? require('../assets/icons/down-arrow-white.png') : require('../assets/icons/down-arrow-black.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={[styles.filters]}>
        <TouchableOpacity style={[styles.filterButton, isFilterApplied && styles.selected]} onPress={() => openModal(categories, 'Filter')}>
          <Text style={[styles.filterLabel, isFilterApplied && styles.selected]}>Filter</Text>
          <Image source={isFilterApplied ? require('../assets/icons/down-arrow-white.png') : require('../assets/icons/down-arrow-black.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {isModalOpen.state && <FilterModal options={isModalOpen.options} modalTitle={isModalOpen.modalTitle} closeModal={closeModal} sortedOn={filteredProducts.sortedOn} filteredOn={filteredProducts.filteredOn} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical:10,
    backgroundColor:'white'
  },
  filters: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 7,
    justifyContent: 'center',
    borderColor: '#D0D0D0',
    width: '55%',
    borderRadius: 21
  },
  filterLabel: {
    color: 'black',
    fontSize: 15
  },
  icon: {
    height: 14,
    width: 14,
    marginLeft: 4,
  },
  selected: {
    backgroundColor: '#0775CE',
    borderColor: '#0775CE',
    color: 'white',
    fontWeight: 'bold'
  }
})