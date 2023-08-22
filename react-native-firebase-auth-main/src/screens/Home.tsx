import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  // const { user } = useAuth();

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            // Add necessary search functionality here
          />
        </View>
      </View>

      {/* Navigation Panel */}
      <View style={styles.navPanel}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Product</Text>
        </TouchableOpacity>
      </View>

      {/* Middle Content */}
      <View style={styles.middleContent}>
        <Text>Welcome To Thriftzy</Text>
        {/* Add other middle content here */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  searchBar: {
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
  },
  navPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue',
    paddingVertical: 10,
  },
  navButtonText: {
    fontWeight: 'bold',
  },
  middleContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
