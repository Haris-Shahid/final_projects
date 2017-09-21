import React, {Component} from 'react';
import { Text, Button ,ListView } from 'react-native';
import Patient from './components/patients' ;
import * as firebase from 'firebase'

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
      var details = [] ;
          let dbRef = firebase.database().ref('Patients');
          dbRef.on('child_added', snap => {
              details = this.state.details;
              details.push(snap.val());
              console.log(details)
              this.setState({
                        details,
                        datasource:this.ds.cloneWithRows(details)  
              })
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
