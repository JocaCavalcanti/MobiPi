import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import logo from "../../assets/layout_set_logo.png";
import Headerlogo from "../../assets/image18.png";

export default function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedImage, setExpandedImage] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      console.log('Fetching profile...');
      const response = await fetch('http://localhost:5000/api/profiles');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Profile data:', data);
      setProfile(data[0]); // Assume que há apenas um perfil ou pega o primeiro da lista
      setLoading(false);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const toggleImageExpansion = () => {
    setExpandedImage(!expandedImage);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

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
          <View style={styles.rectangle} />
        </View>
        <TouchableOpacity onPress={toggleImageExpansion}>
          <View style={styles.goldenSquare}>
            <Image
              source={{ uri: profile.profileimageurl }}
              style={styles.goldenSquareImage}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <View style={styles.infoCard}>
        <Text style={styles.infoCardText}>{profile.nome}</Text>
        </View>
        <View style={styles.infoCard}>
        <Text style={styles.infoCardText}>{profile.curso}</Text>
        </View>
        
        <View style={styles.infoCard}>
          <Text style={styles.infoCardText}>RA: {profile.registroacademico}</Text>
        </View>
        <View style={styles.infoCardDois}>
          <Text style={styles.infoCardText}>Email: {profile.email}</Text>
        </View>
      </View>
      {expandedImage && (
        <TouchableOpacity style={styles.expandedImageContainer} onPress={toggleImageExpansion}>
          <Image
            source={{ uri: profile.profileimageurl }}
            style={styles.expandedImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FBEFC8',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  TextStudent: {
    marginTop: 8,
    color: "white"
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
  },
  imageAndRectangle: {
    alignItems: 'center',
  },
  headerLogo: {
    width: 500,
    height: 250,
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
    marginTop: -178,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  goldenSquareImage: {
    width: 90,
    height: 90,
  },
  infoCard: {
    backgroundColor: '#F5DEB3', // Cor bege
    width: 300,
    padding: 10,
    marginTop: 15, // Alterado de 45 para 15
    borderRadius: 8,
    alignItems: 'center',
  },
  infoCardDois: {
    backgroundColor: '#F5DEB3', // Cor bege
    width: 300,
    padding: 10,
    marginTop: 15, // Alterado de 15 para 15
    borderRadius: 8,
    alignItems: 'center',
  },
  infoCardText: {
    color: '#000',
    textAlign: 'center', // Alinhamento do texto centralizado
  },
  
  expandedImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandedImage: {
    width: '80%',
    height: '80%',
  },
});
