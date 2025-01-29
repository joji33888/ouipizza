import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  console.log('App.js is running'); // Debug statement

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={30} color="#FF8B06" />
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
          />
        </View>
        <Ionicons name="notifications" size={30} color="#FF8B06" />
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://placehold.co/600x300' }}
          style={styles.bannerImage}
        />
        <View style={styles.bannerText}>
          <Text style={styles.bannerSubtitle}>Don't miss the offer</Text>
          <Text style={styles.bannerTitle}>Pepperoni Pizza on discount</Text>
          <Text style={styles.discount}>-30%</Text>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderText}>Order now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {['Pizza', 'Burger', 'Chicken'].map((category, index) => (
          <View key={index} style={styles.category}>
            <Image
              source={{ uri: 'https://placehold.co/100x100' }}
              style={styles.categoryImage}
            />
            <Text>{category}</Text>
          </View>
        ))}
      </View>

      {/* Recommended for You */}
      <View style={styles.recommended}>
        <Text style={styles.recommendedTitle}>Recommended for You</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more </Text>
        </TouchableOpacity>
      </View>

      {/* Food Items */}
      <View style={styles.foodItems}>
        {['Seafood Pizza', 'Single Burger'].map((item, index) => (
          <View key={index} style={styles.foodItem}>
            <View style={styles.foodItemHeader}>
              <Text style={styles.foodItemTag}>Recent</Text>
              <View style={styles.rating}>
                <Text style={styles.ratingText}>4.8</Text>
                <Ionicons name="star" size={16} color="#FF8B06" />
              </View>
            </View>
            <Image
              source={{ uri: 'https://placehold.co/150x150' }}
              style={styles.foodItemImage}
            />
            <Text style={styles.foodItemName}>{item}</Text>
            <Text style={styles.foodItemDescription}>Tomato sauce, shrimp, lobster,...</Text>
            <View style={styles.foodItemActions}>
              <View style={styles.quantityControl}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>1</Text>
                <TouchableOpacity style={styles.quantityButton}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={30} color="#FF8B06" />
        <Ionicons name="heart" size={30} color="#888" />
        <View style={styles.addButtonContainer}>
          <Ionicons name="add" size={30} color="#fff" />
        </View>
        <Ionicons name="cart" size={30} color="#888" />
        <Ionicons name="person" size={30} color="#888" />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingLeft: 10,
    flex: 1,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
    paddingLeft: 30,
    borderRadius: 50,
    backgroundColor: '#fff',
    elevation: 2,
  },
  banner: {
    position: 'relative',
    marginBottom: 10,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  bannerText: {
    position: 'absolute',
    top: 30,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 165, 122, 0.75)',
    borderRadius: 10,
    padding: 10,
  },
  bannerSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  discount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  orderButton: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  orderText: {
    color: '#FF8B06',
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  category: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  recommended: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMore: {
    color: '#FF8B06',
    fontWeight: 'bold',
  },
  foodItems: {
    paddingHorizontal: 10,
  },
  foodItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  foodItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  foodItemTag: {
    backgroundColor: '#FF8B06',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 12,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
  },
  foodItemImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  foodItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  foodItemDescription: {
    fontSize: 12,
    color: '#888',
  },
  foodItemActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#FF8B06',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    elevation: 2,
  },
  addButtonContainer: {
    backgroundColor: '#FF8B06',
    padding: 10,
    borderRadius: 50,
  },
});
