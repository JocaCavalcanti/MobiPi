import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import logo from "../../assets/layout_set_logo.png"
import Headerlogo from "../../assets/image18.png"
import { Linking } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Mudar perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Suporte</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL('https://portal2.unicap.br/RM/web/app/edu/PortalEducacional/login/');
            }}
          >
            <Text style={styles.buttonText}>Portal do aluno</Text>
          </TouchableOpacity>
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
  
  });
  