import React, {Component} from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

export default class Logo extends Component{
    render(){
      return(
        <View>
            <Image 
                style = {styles.image}
                source= {require('../img/PT.png')}
            />            
        </View>
)
}
}

const { height , width } = Dimensions.get('window')

const styles = StyleSheet.create({
    image: {
        width:260 ,
        height:140   
    }
})
