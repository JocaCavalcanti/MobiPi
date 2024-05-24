import React from 'react';
import { StyleSheet, Image, View, Text, ScrollView, } from 'react-native';
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
        <View style={styles.messageContainer}>
          <View style={styles.message}>
            <Text style={styles.sender}>John</Text>
            <Text style={styles.text}>Olá!</Text>
          </View>
          <View style={styles.message}>
            <Text style={styles.sender}>Jane</Text>
            <Text style={styles.text}>Oi, como você ta?</Text>
          </View>
          <View style={styles.message}>
            <Text style={styles.sender}>John</Text>
            <Text style={styles.text}>Estou bem, obrigado!</Text>
          </View>
          <View style={styles.message}>
            <Text style={styles.sender}>Jane</Text>
            <Text style={styles.text}>Que bomm!</Text>
          </View>
          <View style={styles.message}>
            <Text style={styles.sender}>John</Text>
            <Text style={styles.text}>Sim, é isso!</Text>
          </View>
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
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  messageContainer: {
    width: '100%',
  },
  message: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  sender: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {

  },
});