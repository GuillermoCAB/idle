import React from 'react'

import {View, Text, StyleSheet, Image} from 'react-native'

const Header2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello bro222</Text>
      <Image style={styles.img} source={{ uri:"https://randomuser.me/api/portraits/men/2.jpg"}} />
    </View>      
  )
} 

const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent:"center", 
    alignItems:"center"
  },
  text: {
    color: "darkslateblue",
    fontSize: 20
  },
  img: {
    width:100,
    height: 100,
    borderRadius: 100
  }
})

export default Header2