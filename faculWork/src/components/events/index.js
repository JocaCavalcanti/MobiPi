import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, ScrollView, TouchableOpacity, Share } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/events');
      const data = await response.json();
      console.log('Dados dos eventos:', data); // Adicionando um log para verificar os dados recebidos
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const url = 'https://portal.unicap.br/';

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: ('Unicap Eventos: ' + '\n' + url),
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Compartilhado com o tipo: ', result.activityType);
        } else {
          console.log('Compartilhado');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {events.map((event) => (
        <View key={event.id} style={styles.card}>
          <Image source={{ uri: event.imageurl }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{event.title}</Text>
          <Text style={styles.cardText}>{event.description}</Text>
          <TouchableOpacity style={styles.shareButton} onPress={onShare}>
            <Ionicons name="paper-plane-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBEFC8',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentContainer: {
    paddingBottom: 60,
  },
  card: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center', // Centraliza todos os itens dentro do card
    backgroundColor: '#fff', // Adiciona um fundo branco para melhor visualização
    padding: 10, // Adiciona um pouco de padding ao redor do conteúdo do card
  },
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1, // Mantém a proporção 1:1
    resizeMode: 'cover',
    borderRadius: 8, // Adiciona bordas arredondadas à imagem
  },
  cardTitle: {
    fontWeight: 'bold',
    marginTop: 10, // Adiciona margem superior para separar do conteúdo acima
    textAlign: 'center',
  },
  cardText: {
    marginTop: 5, // Adiciona margem superior para separar do conteúdo acima
    marginBottom: 10, // Adiciona margem inferior para separar do botão de compartilhamento
    textAlign: 'center',
  },
  shareButton: {
    width: 40,
    height: 40,
    backgroundColor: "#6F0C16",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
});
