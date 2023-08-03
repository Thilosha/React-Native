import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Index = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Thriftzy</Text>
      </View>

      <View style={{ flex: 1, padding: 10 }}>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="Search" />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => console.log('Gallery button pressed')}>
            <Text>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Category button pressed')}>
            <Text>Category</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Filtering button pressed')}>
            <Text>Filtering</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 24 }}>Home, sweet home</Text>
        </View>
      </View>

      <View style={{ height: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'lightgray' }}>
        <TouchableOpacity onPress={() => console.log('Explore button pressed')}>
          <Text>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Post Ad button pressed')}>
          <Text>Post Ad</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Profile button pressed')}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
