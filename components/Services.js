import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon, Avatar, Card} from 'react-native-elements'


const services = [
    {
       name: 'Carpet',
       url: 'http://impeccable-touch.com/wp-content/uploads/2016/10/commercial-carpet-cleaning-genie-care.jpg'
    },
    {
        name: 'Tile & Grout',
        url: 'http://impeccable-touch.com/wp-content/uploads/2016/10/commercial-carpet-cleaning-genie-care.jpg'
     },
     {
        name: 'Area Rug',
        url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
    
   ]


export default class Services extends Component {
    




        render(){

            const data = services.map((u,i) => {
                return (
                    <View>
                        <Avatar
                            size="large"
                            rounded
                            source={{uri:u.url}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            containerStyle={{}}
                            />
                            <Text>{u.name}</Text>
                    </View>
                )
            })
            return (
                
                
                 {data}
                
                
            )
       }



}


