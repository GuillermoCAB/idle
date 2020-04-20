import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native'

const Portrait = (props) => {

    return (
        <View style={styles.avatarContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={require('../assets/images/pharaohFace.png')} />
            </View>
            <View style={styles.levelContainer}>
                <View style={styles.levelContainerInner}>
                    <Text style={styles.levelText}>{props.player.level}</Text>
                </View>
            </View>
        </View>
    )
    }

const styles = StyleSheet.create({
    avatarContainer: {
    maxWidth: '15%',
    justifyContent:"flex-start", 
    alignItems:"flex-start",
    },
    imageContainer: {
    justifyContent:"center", 
    alignItems:"center",
    flexDirection:"row",
    paddingVertical: 5,
    borderStyle: "solid",
    borderWidth:3,
    borderColor: "#F7E85690",
    backgroundColor: "#B79507"
    },
    img: {
    width:'100%',
    height: 50,
    },
    levelContainer: {
        marginTop: -7,
        width: '100%',
        justifyContent:"center",
        alignItems:"center"
    },
    levelContainerInner: {
        width: '75%',
        borderRadius: 50,
        borderStyle: "solid",
        borderWidth:1,
        borderColor: "#F7E85690",
        backgroundColor: "#B79507",
        justifyContent:"center",
        alignItems:"center",
    },
    levelText: {
    color: "#F7E85690",
    }
})

export default Portrait
    