import React, {Component} from 'react';
import { Text, Button ,ListView ,AsyncStorage } from 'react-native';
import Patient from './components/patients' ;

export default class PatientList extends Component{
   constructor(){
       super()
       this.ds = new ListView.DataSource({
           rowHasChanged: (r1 ,r2)=> r1 !== r2
       }) ;
       const details = []
       this.state = {
            details,
            datasource: this.ds.cloneWithRows(details)
       }

   }
   componentDidMount(){
    AsyncStorage.getItem('@Patientdetails:users', (err, details) => {
     var details = JSON.parse(details) ;
     console.log(details) 
     if(details === null){
         alert('PatientList is empty please go back')
     }
     else{
         this.setState({
             details,
             datasource:this.ds.cloneWithRows(details)
         })

     }
    })
   }
    static navigationOptions = {
        title: 'Patient List',
      };
    render(){
        const { navigate } = this.props.navigation;
        return(
            <ListView 
                dataSource = {this.state.datasource}
                enableEmptySections={true}
                renderRow = {(details)=>(
                    <Patient seedetails={(name) => navigate('PatientDetails' , name ) } name={details} />   
                ) }
             >
            </ListView>
)
}
}
