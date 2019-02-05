import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Test from './Test'
import Popular from './popularServices'

import Slide from '../components/Slider'
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Popular/>
          </View>
          <View style={styles.slider}>
              <Slide/>
          </View>
          <View style={styles.main}>
            <Text>
  </Text>
          </View>

      </View>
      
     );
  }

 

  
}



// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    height: 100
    
  },
  slider: {
    height: 250
  },
  main: {
    flex:1,
    
    
   
    
    
  }
  
});



