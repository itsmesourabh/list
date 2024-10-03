import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const listings = [
  { id: '1', name: 'Listing 1', type: 'Type A' },
  { id: '2', name: 'Listing 2', type: 'Type B' },
  { id: '3', name: 'Listing 3', type: 'Type A' },
  { id: '4', name: 'Listing 4', type: 'Type B' },
  { id: '5', name: 'Listing 5', type: 'Type A' },
];

const App = () => {
  const [showAll, setShowAll] = useState(true); 
  const [toggleCount, setToggleCount] = useState(0); 


  const handleToggle = () => {
    setToggleCount(prevCount => prevCount + 1); 
    setShowAll(toggleCount % 2 === 0); 
  };


  const filteredListings = listings.filter(listing => listing.type === 'Type A');

  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={handleToggle} />
      
      <FlatList
        data={showAll ? listings : filteredListings} 
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listing}>
            <Text>{item.name}</Text>
            <Text>Type: {item.type}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listing: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default App;
