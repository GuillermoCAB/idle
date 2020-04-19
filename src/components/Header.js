import React from 'react'

import {View, Text, StyleSheet, Image} from 'react-native'

class Header extends React.Component {
    state = {
        level: 3
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.img} source={require('../assets/images/pharaohFace.png')} />
                    </View>
                    <View style={styles.levelContainer}>
                        <View style={styles.levelContainerInner}>
                            <Text style={styles.levelText}>{this.state.level}</Text>
                        </View>
                    </View>
                </View>
            </View>      
        )
      } 
    }

const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent:"flex-start", 
    alignItems:"flex-start",
    flexDirection:"row",
    maxHeight: 85
  },
  text: {
    color: "darkslateblue",
    fontSize: 20
  },
  img: {
    width:50,
    height: 50,
  },
  imageContainer: {
    maxWidth: 70,
    justifyContent:"center", 
    alignItems:"center",
    flexDirection:"row",
    paddingVertical: 5,
    borderStyle: "solid",
    borderWidth:3,
    borderColor: "#F7E85690",
    backgroundColor: "#B79507"
  },
  avatarContainer: {
    maxWidth: 56,
    justifyContent:"flex-start", 
    alignItems:"flex-start",
  },
  levelContainer: {
      marginTop: -10,
      width: 56,
      justifyContent:"center",
      alignItems:"center"
  },
  levelContainerInner: {
      width: 20,
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

export default Header