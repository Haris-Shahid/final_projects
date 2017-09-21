import React, {Component} from 'react';
import { View ,Text, Button, StyleSheet, TextInput,AsyncStorage, TouchableHighlight ,Dimensions ,ListView } from 'react-native';
import Patient from './components/patients' ;

export default class SearchPatient extends Component{
    constructor(){
        super()
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1 ,r2)=> r1 !== r2
        }) ;
        const details = []
        this.state = {
             Search: '' ,
             details,
             datasource: this.ds.cloneWithRows(details)
        }
 
    }
    
       adddata(){
           var a = this.state.Search;
           AsyncStorage.getItem('@Patientdetails:users', (err, details) => {
            var detail = JSON.parse(details) ;
            console.log(detail) 
           var details= detail.filter((details)=> this.search(details))
                this.setState({
                    details,
                    datasource:this.ds.cloneWithRows(details)
                })
   
           })       
       }

       search(details){
           console.log(details.date)
           if(details.pname == this.state.Search){
               return(details.pname == this.state.Search) 
            }else if(details.date == this.state.Search){
                return details.date == this.state.Search
            } else{
                  return false
              }
        }
    static navigationOptions = {
        title: 'Search Patient',
      };
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style = {styles.buttoncontainer} >
               <View>
                    <TextInput
                                style={styles.input}
                                value={this.state.Search}
                                placeholder= {'Search By Name or By Date eg:13/8/2017'}
                                placeholderTextColor= {'#dc143c'}
                                selectionColor= {'#660000'}
                                underlineColorAndroid= {'#660000'}
                                onChangeText={(Search)=> this.setState({Search})}
                        /> 
                        <TouchableHighlight onPress={this.adddata.bind(this)}  style={styles.button} underlayColor='white' >
                            <Text style= {styles.text} >Submit</Text>
                        </TouchableHighlight>
                </View>
                <ListView 
                    dataSource = {this.state.datasource}
                    enableEmptySections={true}
                    renderRow = {(details)=>(
                        <Patient seedetails={(name) => navigate('PatientDetails' , name ) } name={details} />   
                    ) }
                    >
                </ListView>
            </View>
)
}
}

const {height , width} = Dimensions.get('window')
const styles = StyleSheet.create({
    buttoncontainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 60,
        paddingLeft: 10 ,
        width: width - 50 ,
      },
      text: {
        color: 'red' ,
        fontSize: 20 ,
        fontWeight: 'bold'
    },
    button: {
        alignItems:'center' ,
        marginTop: 10,
        padding: 10 ,
        borderRadius: 20 ,
        backgroundColor: 'green' ,
    },
})
