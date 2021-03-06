import React, {Component} from 'react';
import { Text, Button, ActivityIndicator ,ListView ,AsyncStorage } from 'react-native';
import Patient from './components/patients' ;
import { connect } from 'react-redux';
// import { PatientDetailsAction } from './store/actions' ;

class PatientList extends Component{
   constructor(){
       super()
       this.ds = new ListView.DataSource({
           rowHasChanged: (r1 ,r2)=> r1 !== r2
       }) ;
       this.state = {
            details: [],
            loading: true            
       }

   }
   componentDidMount(){
            this.setState({
                details: this.props.DetailsReducers.PatientsDetails,
                loading: false
            })
    }
        
        static navigationOptions = {
            title: 'Patient List',
        };
        render(){
            console.log(this.state.details)
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

const mapStateToProps = (state) => {
    return state ;
}
// {PatientDetailsAction}
export default connect(mapStateToProps, null )(PatientList);
