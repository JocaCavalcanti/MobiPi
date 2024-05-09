
import { StyleSheet, Image, View, Text, ScrollView, TouchableOpacity, Share } from 'react-native';

import logo from "../../assets/layout_set_logo.png"
import Icard from "../../assets/banner_portal.png"
import { Ionicons } from "@expo/vector-icons"

export default function App() {
  const url = 'https://portal.unicap.br/'

  const onShare = async () =>{
    try {
      const result = await Share.share({
        message: ('Unicap Eventos: ' + '\n' + url),
      });

      if (result.action === Share.sharedAction){
        if (result.activityType){
          console.log('Compartilhado com o tipo: ', result.activityType)

        } else {
          console.log('Compartilhado')
        }
      } else if (result.action === Share.dismissedAction){
        console.log("dismissed")
      }
    }
    catch (error){
      console.log(error.message)
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Image source={logo}/>
      </View>
      <View style={styles.card}>
        <Image source={Icard} style={styles.cardImage}/>
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque consequat lorem, vel consequat nisi ultrices ac. Donec mattis justo a nisi sagittis, in bibendum nunc dictum.
            </Text>
          </View>
          <TouchableOpacity style={styles.shareButton} onPress={onShare}>
            <Ionicons name="paper-plane-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.card}>
        <Image source={Icard} style={styles.cardImage}/>
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque consequat lorem, vel consequat nisi ultrices ac. Donec mattis justo a nisi sagittis, in bibendum nunc dictum.
            </Text>
          </View>
          <TouchableOpacity style={styles.shareButton} onPress={onShare}>
            <Ionicons name="paper-plane-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.card}>
        <Image source={Icard} style={styles.cardImage}/>
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque consequat lorem, vel consequat nisi ultrices ac. Donec mattis justo a nisi sagittis, in bibendum nunc dictum.
            </Text>
          </View>
          <TouchableOpacity style={styles.shareButton} onPress={onShare}>
            <Ionicons name="paper-plane-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.card}>
        <Image source={Icard} style={styles.cardImage}/>
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque consequat lorem, vel consequat nisi ultrices ac. Donec mattis justo a nisi sagittis, in bibendum nunc dictum.
            </Text>
          </View>
          <TouchableOpacity style={styles.shareButton} onPress={onShare}>
            <Ionicons name="paper-plane-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator} />
      {}
      <View style={{ height: 80 }} />
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
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: 'contain',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  cardText: {
    marginBottom: 10,
  },
  shareButton: {
    width: 40,
    height: 40,
    backgroundColor: "#6F0C16",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#D3D3D3',
    marginVertical: 10,
  },
});
