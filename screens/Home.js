import {COLORS} from '../constants'
import react from 'react'
import {
    Text,
    StyleSheet,
    View
} from 'react-native'

const Home =() =>{
    return(
        <View sty={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
    }
})

export default Home;
