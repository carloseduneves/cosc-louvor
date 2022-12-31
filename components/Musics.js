import { StyleSheet, Text, View, SafeAreaView, Button, Pressable } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const songs = [
    { name: 'Alegria do Senhor', num: 1},
    { name: 'Alegria do Senhor', num: 2},
    { name: 'Alegria do Senhor', num: 3},
    { name: 'Alegria do Senhor', num: 4},
    { name: 'Alegria do Senhor', num: 5},
    { name: 'Alegria do Senhor', num: 6},
    { name: 'Alegria do Senhor', num: 7},
    { name: 'Alegria do Senhor', num: 8},
    { name: 'Alegria do Senhor', num: 9},
    { name: 'Alegria do Senhor', num: 10},
    { name: 'Alegria do Senhor', num: 11},
    { name: 'Alegria do Senhor', num: 12},
    { name: 'Alegria do Senhor', num: 13},
    { name: 'Alegria do Senhor', num: 14},
    { name: 'Alegria do Senhor', num: 15},
    { name: 'Alegria do Senhor', num: 16},
    { name: 'Alegria do Senhor', num: 17},
    { name: 'Alegria do Senhor', num: 18},
    { name: 'Alegria do Senhor', num: 19},
    { name: 'Alegria do Senhor', num: 20},
    { name: 'Alegria do Senhor', num: 21},
    { name: 'Alegria do Senhor', num: 22},
 ];
 const Item = ({num, name}) => {
    return (
        <View style={styles.list}>
             <View style={{flexWrap: 'wrap',        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
                <Text style={{ backgroundColor: '#5F8EED', color: '#fff', width: 80, borderRadius: 25, alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 5, fontSize: 20}}>{num}</Text>
                <Text  style={{  alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 5, fontSize: 20, paddingLeft: 30}}>{name}</Text> 
            </View>
            <Ionicons name='menu-sharp'size={30} style={{justifyContent: 'flex-end', flexDirection: 'row-reverse', marginLeft: 25}}/>
           
        </View>
    )
 }
    
const Musics = () => {
    
const RenderItem = ({item}) => {
    return(
        <Item num={item.num} name={item. name}/>
    )     
    }
  return (
    <SafeAreaView style={styles.container}>
        
            <FlatList
                data={songs}
                renderItem={RenderItem}
                keyExtractor={item => item.num}
                style={styles.flatList}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Add música</Text>
            </TouchableOpacity>

    </SafeAreaView>
  
  )
}



const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: 20,
        padding: 10,
        marginRight: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0,
        flexDirection: 'column'
    },
    flatList: {
       width: '100%',
       marginRight: 0,
       marginBottom: 25,
    },
    text: {
        color: '#0c0c0',
        alignItems: 'center',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#2F4FFA',
        width: 250,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 20,
    },
    textButton: {
        color: '#fff',
    }
});

export default Musics