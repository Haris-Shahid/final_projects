import React, {Component} from 'react';
import { View ,Text, TouchableHighlight, StyleSheet , TextInput, Dimensions, AsyncStorage } from 'react-native';

export default class AddPatient extends Component{
    constructor(){
        super() ;
        this.state = {
            id: 0 ,
            pname: '' ,
            age: '' ,
            disease: '' ,
            gender: '' ,
            pmedicine: '' ,
            cost: '', 
            PatientsDetails: [] ,
        }
    }
    

    

    adddata(){
        console.log(this.state.PatientsDetails)
        const { pname, age, disease, gender, pmedicine, cost } = this.state ;
        let date = new Date();
        let today = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let fullDate = today + '/' + month + '/' + year;
        console.log(fullDate)
        const id = this.state.id + 1 ;
        this.setState({id})
        const details= {
            id, pname, age, disease, gender, pmedicine, cost, date: fullDate 
        }
        this.setState({
            pname:'',
            age:'',
            disease:'',
            gender:'',
            pmedicine: '',
            cost: ''
        })
       
        // console.log(PatientsDetails)
        AsyncStorage.getItem('@Patientdetails:users', (err ,snap) => {
            var arr = JSON.parse(snap);
            console.log(arr)
            if(arr !== null) {
                console.log('!null')
                if(Array.isArray(arr)) {
                    console.log('array')
                    AsyncStorage.setItem('@Patientdetails:users',JSON.stringify(arr.concat(details)))
                } else {
                    console.log('detail')
                    AsyncStorage.setItem('@Patientdetails:users',JSON.stringify([details]))
                }
            } else {
                console.log('detail')
                AsyncStorage.setItem('@Patientdetails:users',JSON.stringify([details]))
            }
            alert('Patient is Added to the List')
        })
    }

    static navigationOptions = {
        title: 'Add Patient',
      };
    render(){
        const { input, container1 ,container ,button ,text } = styles
        const { navigate } = this.props.navigation;
        return(
            <View style = {styles.buttoncontainer} >
                <View  style= {container}  >
                 <View>
                    <TextInput
                        style={input}
                        value={this.state.pname}
                        placeholder= {'Patient Name...'}
                        placeholderTextColor= {'#dc143c'}
                        selectionColor= {'#660000'}
                        underlineColorAndroid= {'#660000'}
                        onChangeText={(pname)=> this.setState({pname})}
                    />
                    <TextInput
                        style={input}
                        value={this.state.age}
                        placeholder= {'Age...'}
                        placeholderTextColor= {'#dc143c'}
                        selectionColor= {'#660000'}
                        underlineColorAndroid= {'#660000'}
                        onChangeText={(age)=> this.setState({age})}
                        keyboardType= 'numeric' 
                    /> 
                    <TextInput
                        style={input}
                        value={this.state.disease}
                        placeholder= {'Disease...'}
                        placeholderTextColor= {'#dc143c'}
                        selectionColor= {'#660000'}
                        underlineColorAndroid= {'#660000'}
                        onChangeText={(disease)=> this.setState({disease})}
                    />
                    <TextInput
                        style={input}
                        value={this.state.gender}
                        placeholder= {'Gender: Male or Female ...'}
                        placeholderTextColor= {'#dc143c'}
                        selectionColor= {'#660000'}
                        underlineColorAndroid= {'#660000'}
                        onChangeText={(gender)=> this.setState({gender})}
                    />
                    <TextInput
                        style={input}
                        value={this.state.pmedicine}
                        placeholder= {'Provide Medicine'}
                        placeholderTextColor= {'#dc143c'}
                        selectionColor= {'#660000'}
                        underlineColorAndroid= {'#660000'}
                        onChangeText={(pmedicine)=> this.setState({pmedicine})}
                    />
                    <TextInput
                        style={input}
                        value={this.state.cost}
                        placeholder= {'Total Cost ...'}
                        placeholderTextColor= {'#dc143c'}
                        selectionColor= {'#660000'}
                        underlineColorAndroid= {'#660000'}
                        onChangeText={(cost)=> this.setState({cost})}
                        keyboardType= 'numeric' 
                    />
                    <TouchableHighlight onPress={this.adddata.bind(this)}  style={button} underlayColor='white' >
                        <Text style= {text} >Submit</Text>
                    </TouchableHighlight>
                     </View>
                </View>
            </View>
)
}
}

const { height, width} = Dimensions.get('window') ;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center' ,
        justifyContent: 'center' ,
        marginTop: 30
    },
    buttoncontainer: {
        backgroundColor: 'white',
        height
    }, 
    input: {
      height: 60,
      paddingLeft: 10 ,
      width: width - 50 ,
    },
    button: {
        alignItems:'center' ,
        marginTop: 10,
        padding: 10 ,
        borderRadius: 20 ,
        backgroundColor: 'green' ,
    },
    text: {
        color: 'red' ,
        fontSize: 20 ,
        fontWeight: 'bold'
    }
})
