import { Text, StyleSheet, View, SafeAreaView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
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

 const Item = ({title}) => {
    return (
        <View style={styles.list}>
            <Text>{title}</Text>
        </View>
    )
 }
export default  function Musicas() {
    const renderItem = ({item}) => {
        <Item title={item.name}/>
    }
    return (
    <SafeAreaView>
        <View style={styles.container}>
       <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={item => item.num}
       />
      </View>
    </SafeAreaView>
      
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'purple',
        alignItems: 'center',
        width: 350,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})