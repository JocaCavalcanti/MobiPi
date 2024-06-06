import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
import api from '../services/api';

const EventScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get('/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const renderEvent = ({ item }) => (
    <View style={styles.eventContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.eventImage} />
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
      <Button title="Compartilhar" onPress={() => console.log('Compartilhar', item.title)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderEvent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  eventContainer: {
    marginBottom: 20,
  },
  eventImage: {
    width: '100%',
    height: 200,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default EventScreen;
