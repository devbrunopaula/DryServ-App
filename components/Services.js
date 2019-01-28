import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { Icon, Avatar, Card, Button} from 'react-native-elements'


const services = [
    {
       name: 'Carpet Cleaning',
       url: 'http://impeccable-touch.com/wp-content/uploads/2016/10/commercial-carpet-cleaning-genie-care.jpg',
       desc: 'Extend The Life Of Your Carpet With A Deep Clean. Schedule An Appointment Online Now!'
    },
    {
        name: 'Tile & Grout Cleaning',
        url: 'https://www.southqldrestoration.com.au/wp-content/uploads/2017/09/tilegrout6-1.jpg',
        descr:'Let Our Professionals Deep Clean Your Tile Floors To Remove Hidden Dirt. Book Online Now'
     },
     {
        name: 'Area Rug Cleaning',
        url: 'http://www.randyscarpetcleaningservices.com/wp-content/uploads/2016/07/slider-area-rug-clean_1150x440.png',
        descr:'Clean & Revitalize Your Area Rugs With Our Expert Cleaning. Schedule An Appt Online'
     },
    
   ]


export default class Services extends Component {
    

    render(){

        const data = services.map((u,i) => {
            
            return (
                 <View style={styles.services}>
                     <Card
                        title={u.name}
                        image={{uri: u.url}}>
                        <Text style={{marginBottom: 10}}>
                            {u.desc}
                        </Text>
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title={u.name} />
</Card>
                    </View>
                )
            })
        
            return (
                
            <View>{data}</View>
                 
            )
       }
}



const styles = StyleSheet.create({
    services: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignContent: "flex-start",
        margin: 10
    }
})