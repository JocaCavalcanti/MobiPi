import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, ScrollView, Pressable, Modal, Linking } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import logo from "../../assets/layout_set_logo.png";
import qrCodeImage from "../../assets/qrcode.png"; // Certifique-se de que este caminho esteja correto

export default function App() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const redirectToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const handleQRCodePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      <View style={styles.body}>
        <View style={styles.buttonGrid}>
          <Pressable style={styles.button} onPress={() => Linking.openURL('https://portal2.unicap.br/RM/web/app/edu/PortalEducacional/#/')}>
            <Ionicons name="person" size={30} color="#6F0C16" />
            <Text style={styles.text}>Portal do Aluno</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => Linking.openURL('https://porto.unicap.br/login?redirect=minhabiblioteca')}>
            <Ionicons name="calendar" size={30} color="#6F0C16" />
            <Text style={styles.text}>Biblioteca</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => redirectToPage('Page4')}>
            <Ionicons name="build" size={30} color="#6F0C16" />
            <Text style={styles.text}>Configuração</Text>
          </Pressable>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={qrCodeImage} style={styles.qrCodeImage} />
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  qrCodeImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#6F0C16',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
