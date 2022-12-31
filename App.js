
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import Musics from './components/Musics';
import Test from './components/Test';
//import Musicas from './components/musicas';

//import Cards from './components/Cards';
//import { TextInput } from 'react-native-paper';
const SongPraise = Musics;

const Hinário = () => {
  return (
    <ScrollView>
      <Pressable >
        <Text>Músicas do hinário renderizam aqui</Text>
      </Pressable>
    </ScrollView>  
  )
}
  
 
const MusicasNovas = () => {
  return (
    <ScrollView>
      <Pressable >
        <Text>Músicas novas devem renderizar aqui</Text>
      </Pressable>
    </ScrollView>  
  )
}


const HomeScreen = ({navigation}) => {
  return (
       <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 50,}}>
        <StatusBar style='auto'/>
          <View style={styles.input}>
            <TextInput  placeholder='Buscar música' style={styles.textInput}/>
            <View style={styles.findContainer}>
              <Ionicons name='search' size={25} color='blue'/>
            </View>
          </View>
            <ScrollView>
             
                <Pressable onPress={() => navigation.push('Músicas do louvor')} style={styles.cards}>
                  <Text>Músicas do louvor</Text>
                </Pressable>

                <Pressable onPress={() => navigation.push('Músicas do hinário')} style={styles.cards}>
                  <Text>Músicas do hinário</Text>
                </Pressable>

                <Pressable onPress={() => navigation.push('Músicas novas')} style={styles.cards}>
                  <Text>Músicas novas</Text>
                </Pressable>
              
            </ScrollView>    
      </View> 
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
  
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        /> 
        <Stack.Screen
         name="Músicas do louvor" 
         component={SongPraise}
         />
         <Stack.Screen
         name="Músicas do hinário" 
         component={Hinário}
         />
          <Stack.Screen
         name="Músicas novas" 
         component={MusicasNovas}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    backgroundColor: '#012E40',
    color: '#fff',
  },
  navBar: {
    backgroundColor: '#000',
  },
  input: {
    width: 380,
    height: 50,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end',
    borderRadius: 20,
    

  },
  button: {
    
    marginTop: 30,
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#25DEF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonts: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  findContainer: {
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
   

  },
  textInput: {
    width: 300,
  },
  cards: {
    width: 350,
    height: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 20,
    
  }
  

});
