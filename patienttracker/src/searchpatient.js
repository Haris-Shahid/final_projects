import React, {Component} from 'react';
import { View ,Text, ActivityIndicator, Button, StyleSheet, TextInput,AsyncStorage, TouchableHighlight ,Dimensions ,ListView } from 'react-native';
import Patient from './components/patients' ;
import axios from 'axios';

export default class SearchPatient extends Component{
    constructor(){
        super()
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1 ,r2)=> r1 !== r2
        }) ;
        const details = []
        this.state = {
             details,
             unDetails: [],
             loading: true
        }
 
    }
    
       adddata(_){
        //    var a = this.state.Search;
        //    AsyncStorage.getItem('@Patientdetails:users', (err, details) => {
        //     var detail = JSON.parse(details) ;
        //     console.log(detail) 
                var details= this.state.unDetails.filter((details)=> this.search(details, _) )
                this.setState({
                    details
                })
   
        //    })
       }
       componentDidMount(){
        axios.get('http://patienttracking.herokuapp.com/api/getAllPatient')
          .then(({data}) => {
              console.log(data)
              var unDetails = data ;
              // console.warn(JSON.stringify(details))
              this.setState({
                  unDetails,
                  loading: false
              })
              this.adddata('')
          })
          .catch((err) => console.warn(err)
          )
      }
  
       search(details, what){
           console.log(details.date)
           if(details.pname.toLowerCase().search(what.toLowerCase()) !== -1 || details.date.toLowerCase() == what.toLowerCase()){
               return true 
            } else{
                  return false
              }
        }
    static navigationOptions = {
        title: 'Search Patient',
      };
    render(){
        let dataSource = this.ds.cloneWithRows(this.state.details)
        const { navigate } = this.props.navigation;
        return(
            <View >
                <TextInput
                    style={styles.input}
                    value={this.state.Search}
                    placeholder= {'Search By Name or By Date eg:13/8/2017'}
                    placeholderTextColor= {'#dc143c'}
                    selectionColor= {'#660000'}
                    underlineColorAndroid= {'#660000'}
                    onChangeText={(Search)=> {this.adddata.call(this, Search)}}
                /> 
                {this.state.loading ? <ActivityIndicator size={50}/> :
                    <View>
                        <ListView 
                            dataSource = {dataSource}
                            enableEmptySections={true}
                            renderRow = {(details)=>(
                                <Patient seedetails={(name) => navigate('PatientDetails' , name ) } name={details} />   
                            ) }
                            >
                        </ListView>
                    </View>
                }
            </View>
)
}
}

const {height , width} = Dimensions.get('window')
const styles = StyleSheet.create({
    buttoncontainer: {
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    input: {
        height: 60,
        paddingLeft: 10 ,
        width: width - 50 ,
        margin: 25
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
