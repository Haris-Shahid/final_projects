import React, {Component} from 'react';
import { Text, Button, ActivityIndicator ,ListView ,AsyncStorage } from 'react-native';
import Patient from './components/patients' ;
import axios from 'axios';

export default class PatientList extends Component{
   constructor(){
       super()
       this.ds = new ListView.DataSource({
           rowHasChanged: (r1 ,r2)=> r1 !== r2
       }) ;
    //    const details = []
       this.state = {
            details: [],
            loading: true            
            // datasource: this.ds.cloneWithRows([])
       }

   }
   componentDidMount(){
      axios.get('http://patienttracking.herokuapp.com/api/getAllPatient')
        .then(({data}) => {
            console.log(data)
            var details = data ;
            // console.warn(JSON.stringify(details))
            this.setState({
                details,
                loading: false
            })
        })
        .catch((err) => console.warn(err)
        )
    }

    static navigationOptions = {
        title: 'Patient List',
      };
    render(){
        let dataSource = this.ds.cloneWithRows(this.state.details)
        const { navigate } = this.props.navigation;
        return(
            this.state.loading ? <ActivityIndicator size={50}/> :
            <ListView 
                dataSource = {dataSource}
                enableEmptySections={true}
                renderRow = {(details)=>(
                    <Patient seedetails={(name) => navigate('PatientDetails' , name ) } name={details} />   
                ) }
             >
            </ListView>
        )
}
}
