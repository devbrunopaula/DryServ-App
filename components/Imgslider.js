import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'
class Imgslider extends Component {
  
  render() {
    console.log(props.url)
    return (
           <View>
         <Image source={require(this.props.url)} 
          style={{ width: screenWidth, height: 200}}/>
          </View>
    )
  }
}

export default Imgslider
