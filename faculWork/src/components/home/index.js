import React from 'react';
import { StyleSheet, Image, View, Text, ScrollView, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import logo from "../../assets/layout_set_logo.png"

export default function App() {
  const navigation = useNavigation();

  const redirectToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      <View style={styles.body}>
        <View style={styles.buttonGrid}>
          <Pressable style={styles.button} onPress={() => redirectToPage('Profile')}>
            <Ionicons name="person" size={30} color="#6F0C16" />
            <Text style={styles.text}>Perfil</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => redirectToPage('Eventos')}>
            <Ionicons name="calendar" size={30} color="#6F0C16" />
            <Text style={styles.text}>Eventos</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => redirectToPage('Ex Alunos')}>
            <Ionicons name="school" size={30} color="#6F0C16" />
            <Text style={styles.text}>Ex Alunos</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => redirectToPage('Alertas')}>
            <Ionicons name="alert-circle" size={30} color="#6F0C16" />
            <Text style={styles.text}>Alertas</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => redirectToPage('Page4')}>
            <Ionicons name="qr-code" size={30} color="#6F0C16" />
            <Text style={styles.text}>Qr-Code</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => redirectToPage('Page4')}>
            <Ionicons name="build" size={30} color="#6F0C16" />
            <Text style={styles.text}>Configuração</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBEFC8',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 80,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100, 
    height: 100, 
    margin: 10, 
    borderRadius: 4,
    backgroundColor: 'white',
    elevation: 10,
  },
  text: {
    color: 'black',
    marginTop: 5,
  },
});
