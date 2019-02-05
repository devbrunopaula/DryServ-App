import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { Image, Avatar } from 'react-native-elements';


const urls = [
    {
    services: 'Carpet Cleaning',
    ur: 'http://www.liftoffcleaning.co.uk/wp-content/uploads/2015/02/commercial-carpet-cleaning.jpg'
    },
    {
        services: 'Tile & Grout',
        ur: 'https://www.greendryjax.com/wp-content/uploads/Tile-Cleaning-Jacksonville-FL.jpg'
    },
    {
        services: 'Area Rug Cleaning',
        ur: 'http://www.carpetsolutionsmd.com/wp-content/uploads/2016/05/oriental-carpet-cleaning-services-by-chem-dry.jpg'
    },
    {
        services: 'Dryer Vent',
        ur: 'https://www.mrductcleaning.com/resize/MastFotoIns/8d0ae4a821bf0e5_857f6ccf_352829f4o.jpg'
    },
    {
        services: 'Air Duct',
        ur: 'https://cyclonepro.com/wp-content/uploads/2016/03/air-duct-cleaning-4.jpg'
    }

]

export default class Services extends React.Component {
  static navigationOptions = {
    title: 'Popular Services',
  };

  render() {
      
    return (
      <ScrollView 
        horizontal={true}
        style={styles.container}
        removeClippedSubviews={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        endFillColor={'#00ffff'}
        ocenterContent={'true'}
         
         >
         
        {urls.map((url)=> 
            <Avatar
                size="large"
                title={url.services}
                rounded
                containerStyle={styles.serviceItems}
                source={{uri:url.ur}}
                onPress={() => console.log("Carpet")}
                />
        )}
        
        
        
        
        
        
       
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    height: 100,
    alignItems: 'center',
   // alignContent: 'center',
   // justifyContent: 'center',
   // backgroundColor: '#f2f2f2',
    
  },
  serviceItems:{
      marginHorizontal: 5,
      
  },
  text: {
      position: 'absolute'
  }
});
