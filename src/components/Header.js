import React from 'react'

import {View, Text, StyleSheet, Image} from 'react-native'

import { CurrencyContext } from '../providers/CurrencyProvider'

import Portrait from './Portrait'
import CoinPurse from './CoinPurse'

const Header = () => {

    return (
      <CurrencyContext.Consumer>
        {player =>
          <View style={styles.container}>
            <Portrait player={player}></Portrait>
            <View style={styles.columnContainer}>
              <CoinPurse player={player}></CoinPurse>
            </View>
          </View> 
        } 
      </CurrencyContext.Consumer> 
    )
  } 

const styles = StyleSheet.create({
  container: {
    flex:1, 
    maxHeight: 66,
    justifyContent:"flex-start", 
    alignItems:"flex-start",
    flexDirection:"row",
    backgroundColor: "#ECC381"
  },
  columnContainer: {
    flexDirection: "column",
    width: "85%"
  }
})

export default Header