import React, { Component } from 'react'
import { Text, View, Image, StyleSheet} from 'react-native'

export default class HeroImage extends Component {
  render() {
    return (
      <Image
            style={styles.hero}
            source={require('../assets/images/Hero/hardwoodFloors.jpg')}   
             
      />
    )
  }
}


const styles = StyleSheet.create({
    hero: {
        marginTop: 0,
        height: 200,
        width: "100%",
        resizeMode: 'contain',
    }
})
