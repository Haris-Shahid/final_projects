import React , {Component} from 'react' ;
import { View ,Text , StyleSheet, Dimensions } from 'react-native' 

export default class PatientDetails extends Component{
    static navigationOptions = {
        title: 'Patient Details',
      }
    render(){
        const { container , text ,text1 , childcontainer , textcontainer } = styles ;
        const { params } = this.props.navigation.state;
        return (
          <View style= {container} >
              <View style = {childcontainer} >
                <View style= {textcontainer} >
                    <Text style={text1} >Name:</Text>
                    <Text style={text} >{params.pname}</Text>
                </View>
                <View style= {textcontainer} >  
                    <Text style={text1} >Age:</Text>
                    <Text style={text} >{params.age}</Text>
                </View>
                <View style= {textcontainer} > 
                   <Text style={text1} >Gender:</Text>
                   <Text style={text} >{params.gender}</Text>
                </View>
                <View style= {textcontainer} > 
                   <Text style={text1} >Disease:</Text>
                   <Text style={text} >{params.disease}</Text>
                </View> 
                <View style= {textcontainer} > 
                    <Text style={text1} >Prescribed Medicine:</Text>
                    <Text style={text} >{params.pmedicine}</Text>
                </View>
                <View style= {textcontainer} > 
                    <Text style={text1} >Total Cost:</Text>
                    <Text style={text} >{params.cost}</Text>
                </View>
                <View style = {textcontainer} >
                    <Text style={text1} >Date:</Text>
                    <Text style={text} >{params.date}</Text>
                </View>
              </View>
          </View>
        );
    }
}

const { height, width } = Dimensions.get('window') ;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        height,
        alignItems: 'center' ,
        justifyContent: 'center'
    },
    childcontainer: {
        borderWidth: StyleSheet.hairlineWidth ,
        backgroundColor: 'silver' ,
        width: width - 38 ,
        height: height - 175 ,
        borderRadius: 20 , 
        
    },
    textcontainer: {
        flexDirection: 'row' ,
        justifyContent: 'space-between' ,
        backgroundColor: 'rgba(255,255,255,.8)' ,
        margin: 5 ,
        borderRadius: 20 , 
    },
    text1: {
        color: '#8a0707' ,
        fontWeight: 'bold',
        padding: 10 ,
        margin: 5 ,
    },
    text: {
        padding: 10 ,
        margin: 5 ,
    }
})