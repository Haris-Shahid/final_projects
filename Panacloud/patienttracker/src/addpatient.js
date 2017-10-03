import React, {Component} from 'react';
import { View ,Text, TouchableHighlight, ActivityIndicator, StyleSheet , TextInput, Dimensions} from 'react-native';
import axios from 'axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

export default class AddPatient extends Component{
    constructor(){
        super() ;
        this.state = {
            pname: '' ,
            age: '' ,
            disease: '' ,
            gender: '' ,
            pmedicine: '' ,
            cost: '',
            loading: false
         }
    }

    adddata(){
        const { pname, age, disease, gender, pmedicine, cost } = this.state ;
        this.setState({ loading: true })
        let date = new Date();
        let today = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let fullDate = today + '/' + month + '/' + year;
        console.log(fullDate)
        const details= {
            pname, age, disease, gender, pmedicine, cost, date: fullDate 
        }
        return axios.post('http://patienttracking.herokuapp.com/api/patientdetails', details)
            .then((data) => {
                this.setState({
                    pname:'',
                    age:'',
                    disease:'',
                    gender:'',
                    pmedicine: '',
                    cost: '',
                    loading: false
                })
                alert('Patient is Added to the List')
            })
            .catch((err) => console.warn(err))
    }

    static navigationOptions = {
        title: 'Add Patient',
      };
    render(){
        const { input, container1 ,container ,button ,text } = styles
        const { navigate } = this.props.navigation;
        return(
            this.state.loading ? <View style={container}><ActivityIndicator size={50}/></View> :
            <View style = {styles.buttoncontainer} >
                <View  style= {container}  >
                 <KeyboardAwareScrollView>
                    <TextInput
                        ref="1"
                        style={input}
                        value={this.state.pname}
                        placeholder= {'Patient Name...'}
                        placeholderTextColor= {'#dc143c'}
                        selectionColor= {'#660000'}
                        underlineColorAndroid= {'#660000'}
                        onChangeText={(pname)=> this.setState({pname})}
                        onSubmitEditing={() => this.refs['2'].focus()}
                        returnKeyType="next"
                    />
                    <TextInput
                        ref="2"
                        style={input}
                        value={this.state.age}
                        placeholder= {'Age...'}
                        placeholderTextColor= {'#dc143c'}
                        selectionColor= {'#660000'}
                        underlineColorAndroid= {'#660000'}
                        onChangeText={(age)=> this.setState({age})}
                        keyboardType= 'numeric' 
                        onSubmitEditing={() => this.refs['3'].focus()}
                        returnKeyType="next"
                    /> 
                    <TextInput
                        ref="3"
                        style={input}
                        value={this.state.disease}
                        placeholder= {'Disease...'}
                        placeholderTextColor= {'#dc143c'}
                        selectionColor= {'#660000'}
                        underlineColorAndroid= {'#660000'}
                        onChangeText={(disease)=> this.setState({disease})}
                        onSubmitEditing={() => this.refs['4'].focus()}
                        returnKeyType="next"
                    />
                    <TextInput
                        ref="4"                    
                        style={input}
                        value={this.state.gender}
                        placeholder= {'Gender: Male or Female ...'}
                        placeholderTextColor= {'#dc143c'}
                        selectionColor= {'#660000'}
                        underlineColorAndroid= {'#660000'}
                        onChangeText={(gender)=> this.setState({gender})}
                        onSubmitEditing={() => this.refs['5'].focus()}
                        returnKeyType="next"
                    />
                    <TextInput
                        ref="5"                    
                        style={input}
                        value={this.state.pmedicine}
                        placeholder= {'Provide Medicine'}
                        placeholderTextColor= {'#dc143c'}
                        selectionColor= {'#660000'}
                        underlineColorAndroid= {'#660000'}
                        onChangeText={(pmedicine)=> this.setState({pmedicine})}
                        onSubmitEditing={() => this.refs['6'].focus()}
                        returnKeyType="next"
                    />
                    <TextInput
                        ref="6"                    
                        style={input}
                        value={this.state.cost}
                        placeholder= {'Total Cost ...'}
                        placeholderTextColor= {'#dc143c'}
                        selectionColor= {'#660000'}
                        underlineColorAndroid= {'#660000'}
                        onChangeText={(cost)=> this.setState({cost})}
                        keyboardType= 'numeric'
                        onSubmitEditing={this.adddata.bind(this)}
                        returnKeyType="done"
                    />
                    <TouchableHighlight onPress={this.adddata.bind(this)}  style={button} underlayColor='white' >
                        <Text style= {text} >Submit</Text>
                    </TouchableHighlight>
                     </KeyboardAwareScrollView>
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
