import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import logo from "../../assets/layout_set_logo.png";
import Headerlogo from "../../assets/image18.png";
import User4 from "../../assets/user4.png";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      <View style={styles.body}>
        <View style={styles.imageAndRectangle}>
          <Image
            source={Headerlogo}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <View style={styles.rectangle}>
            <Text style={styles.TextStudent}></Text>
          </View>
        </View>
        <View style={styles.relativeContainer}>
          <View style={styles.goldenSquare}>
            <Image
              source={User4}
              style={styles.goldenSquareImage}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.goldenButton}>
            <Text style={styles.buttonText}>Adicionar Artigo</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.articleContainer}>
          <Text style={styles.articleText}>Artigo sobre IA.pdf</Text>
          <MaterialIcons name="picture-as-pdf" size={24} color="black" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: '#FBEFC8',
    alignItems: 'center',
    paddingTop: 20,
  },
  TextStudent: {
    color: "white",
  },
  header: {
    marginBottom: 50,
  },
  body: {
    alignItems: 'center',
    width: '100%',
  },
  imageAndRectangle: {
    alignItems: 'center',
  },
  headerLogo: {
    width: 500,
    height: 200,
  },
  rectangle: {
    width: 500,
    height: 100,
    marginTop: -1,
    backgroundColor: '#6F0C16',
  },
  relativeContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  goldenSquare: {
    backgroundColor: '#C48834',
    width: 100,
    height: 100,
    position: 'absolute',
    top: -150, 
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  goldenSquareImage: {
    width: 90,
    height: 90,
  },
  buttonsContainer: {
    marginTop: 70, 
    alignItems: 'center',
    width: '100%',
  },
  goldenButton: {
    backgroundColor: '#C48834',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  articleContainer: {
    backgroundColor: 'white',
    width: 200,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  articleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
