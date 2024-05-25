import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { View, Image, Text } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

import Home from "../src/components/home";
import Profile from "../src/components/profile";
import Events from "../src/components/events"; // Corrigido o caminho do componente Events
import ExStudents from "../src/components/exStudents";
import Alerts from "../src/components/alerts";
import Chat from "../src/components/chat";
import Configuration from "../src/components/configuration";
import { SafeAreaView } from "react-native-safe-area-context";

import UserIcon from "./assets/user4.png"

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView>
              <View
                style={{
                  height: 200,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomColor: '#f4f4f4',
                  borderBottomWidth: 1,
                  borderRadius: 15
                }}
              >
               <Image
                source={UserIcon}
                style={{
                  height: 130,
                  width: 130,
                  borderRadius: 65
                }}
               />
              
              <Text
                style={{
                  fontSize: 22,
                  marginVertical: 6,
                  fontWeight: 'bold',
                  color: "#111"
                }}
              >
                Carlos Gabriel
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  color: '#111'
                }}
              >
                carlos@gmail.com
              </Text>

              </View>
              
              <DrawerItemList {...props} />
            </SafeAreaView>
  )
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerTitleAlign: 'center',
    }}
  >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Perfil" component={Profile} />
    <Drawer.Screen name="Eventos" component={Events} />
    <Drawer.Screen name="Ex Estudantes" component={ExStudents} />
    <Drawer.Screen name="Alertas" component={Alerts} />
    <Drawer.Screen name="Chat" component={Chat} />
    <Drawer.Screen name="Configurações" component={Configuration} />
  </Drawer.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: '#6F0C16',
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderTopWidth: 0,
        bottom: 14,
        left: 14,
        right: 14,
        elevation: 0,
        borderRadius: 4,
        height: 60,
      },
      headerShown: false
    }}
  >
    <Tab.Screen
      name="Eventos"
      component={Events}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? 'calendar' : 'calendar-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? 'person' : 'person-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Home"
      component={DrawerNavigator}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? 'home' : 'home-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Alertas"
      component={Alerts}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? 'alert-circle' : 'alert-circle-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />
  
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

const Routes = () => {
  return <TabNavigator />;
};

export default Routes;
