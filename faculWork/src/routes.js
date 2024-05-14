import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "../src/components/home";
import Profile from "../src/components/profile";
import Events from "./components/events";
import ExStudents from "../src/components/exStudents";
import Alerts from "../src/components/alerts";

import { Ionicons, MaterialIcons } from "@expo//vector-icons"


const Tab = createBottomTabNavigator();

function Routes(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: "#6F0C16",
            tabBarShowLabel: false,       
            tabBarStyle: {
                position: "absolute",
                backgroundColor: '#fff',
                borderTopWidth: 0,

                bottom: 14,
                left: 14,
                right: 14,

                elevation: 0,
                borderRadius: 4,
                height: 60
            },
            headerTitleAlign: 'center'
        }}
    >
            <Tab.Screen 
                name="Eventos" component={Events}
                options={{
                    /* headerShown: false, */
                    tabBarIcon:({ color, size, focused}) =>{
                        if(focused){
                            return <Ionicons name="calendar" size={size} color={color} />
                        }

                        return <Ionicons name="calendar-outline" size={size} color={color} />
                    }
                }}
                
            />
            <Tab.Screen 
                name="Profile" component={Profile}
                options={{
                    /* headerShown: false, */
                    tabBarIcon:({ color, size, focused}) =>{
                        if(focused){
                            return <Ionicons name="person" size={size} color={color} />
                        }

                        return <Ionicons name="person-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name="Home" component={Home}
                options={{
                    /* headerShown: false, */
                    tabBarIcon:({ color, size, focused}) =>{
                        if(focused){
                            return <Ionicons name="home" size={size} color={color} />
                        }

                        return <Ionicons name="home-outline" size={size} color={color} />
                    }
                }}
            />
            
            <Tab.Screen 
                name="Ex Alunos" component={ExStudents}
                options={{
                    /* headerShown: false, */
                    tabBarIcon:({ color, size, focused}) =>{
                        if(focused){
                            return <Ionicons name="school" size={size} color={color} />
                        }

                        return <Ionicons name="school-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name="Alertas" component={Alerts}
                options={{
                    /* headerShown: false, */
                    tabBarIcon:({ color, size, focused}) =>{
                        if(focused){
                            return <Ionicons name="alert-circle" size={size} color={color} />
                        }

                        return <Ionicons name="alert-circle-outline" size={size} color={color} />
                    }
                }}
            />
            
        </Tab.Navigator>

    )
}

export default Routes;