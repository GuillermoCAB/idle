import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const CoinPurse = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Image style={styles.img} source={require('../assets/images/gold.png')} />
                <Text style={styles.text}>{props.player.gold}</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.img} source={require('../assets/images/flame.webp')} />
                <Text style={styles.text}>{props.player.influence}</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.img} source={require('../assets/images/goldenBeetle.png')} />
                <Text style={styles.text}>{props.player.coins}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:  {
        flexDirection: 'row',
        width: '100%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#AC8E5E'
    },
    item: {
        height: '100%',
        width: '30%',
        flexDirection: 'row',  
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '34%',
        height: '70%',
        marginRight: '5%'
    },
    text: {
        fontWeight: 'bold',
        fontFamily: 'MasonRegular-BlAG'
    }

})

export default CoinPurse