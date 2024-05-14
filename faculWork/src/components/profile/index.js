import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import logo from "../../assets/layout_set_logo.png"
import Headerlogo from "../../assets/image18.png"
import GoldenSquareImage from "../../assets/user4.png"
import qrcodeI from "../../assets/image20.png"

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
          <View style={styles.rectangle}>
            <Text style={styles.TextStudent}>asdsa</Text>
          </View>
        </View>
        <View style={styles.goldenSquare}>
          <Image
            source={GoldenSquareImage}
            style={styles.goldenSquareImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.qrCodeContainer}>
          <Image
            source={qrcodeI}
            style={styles.qrCodeImage}
            resizeMode="contain"
          />
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
  TextStudent: {
    color: "white"
  },
  header: {
    marginBottom: 30,
  },
  body: {
    alignItems: 'center',
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
  goldenSquare: {
    backgroundColor: '#C48834',
    width: 100,
    height: 100,
    marginTop: -150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  goldenSquareImage: {
    width: 90,
    height: 90,
  },
  qrCodeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  qrCodeImage: {
    width: 150,
    height: 150,
    marginTop: 50,
  },
});
  