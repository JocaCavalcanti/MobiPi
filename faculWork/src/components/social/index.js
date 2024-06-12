import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import logo from "../../assets/layout_set_logo.png";
import User4 from "../../assets/user4.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={logo} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.body}>
          <View style={[styles.postContainer, { marginTop: 80 }]}>
            <Image source={User4} style={styles.avatar} />
            <Text style={styles.author}>John Doe</Text>
            <Text style={styles.content}>Este é um exemplo de postagem no estilo LinkedIn.</Text>
          </View>

          {/* Repetir para mais postagens */}
          <View style={styles.postContainer}>
            <Image source={User4} style={styles.avatar} />
            <Text style={styles.author}>Jane Doe</Text>
            <Text style={styles.content}>Este é outro exemplo de postagem no estilo LinkedIn.</Text>
          </View>

          <View style={styles.postContainer}>
            <Image source={User4} style={styles.avatar} />
            <Text style={styles.author}>Alice Doe</Text>
            <Text style={styles.content}>Este é mais um exemplo de postagem no estilo LinkedIn.</Text>
          </View>

          <View style={[styles.postContainer, { marginBottom: 80 }]}>
            <Image source={User4} style={styles.avatar} />
            <Text style={styles.author}>Bob Doe</Text>
            <Text style={styles.content}>Este é mais um exemplo de postagem no estilo LinkedIn.</Text>
          </View>
        </View>
      </ScrollView>

      {/* Botão de adicionar postagem */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBEFC8',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 100, // Ajuste para manter o botão de adicionar postagem acima do menu
  },
  body: {
    width: '100%',
    paddingHorizontal: 20,
  },
  postContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  author: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {},
  addButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    backgroundColor: '#800020',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
  },
});