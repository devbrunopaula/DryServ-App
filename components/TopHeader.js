import React, { Component } from 'react'
import { Text, View, Image, StyleSheet} from 'react-native'
import { Header, Divider} from 'react-native-elements';





export default class TopHeader extends Component {
  render() {
    return (
        <View>
        <Header
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle="light-content" // or directly
  leftComponent={{ icon: 'menu', color: '#3D6DCC' }}
  centerComponent={<Image
    style={styles.logo}
    source={require('../assets/images/dryservLogo.png')}
  />}
  rightComponent={{ icon: 'home', color: '#3D6DCC' }}
  containerStyle={{
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    height: 100,
    
  }}
  
/>
<Divider style={{ backgroundColor: 'blue', marginTop: 10 }} />




    </View>
    )
  }
}


const styles = StyleSheet.create({
    logo: {
        width: 220,
        height: 60,
        marginTop: 40,
        marginBottom: 50
        
    }
})

