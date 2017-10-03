import React,{Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { View ,Text, Button, StyleSheet, Dimensions ,AsyncStorage} from 'react-native';
import Logo from './components/image'
import AddPatient from './addpatient'
import PatientList from './patientList'
import SearchPatient from './searchpatient'
import PatientDetails from './patientdetails'

class Main extends Component{
    static navigationOptions = {
        title: 'Home',
      };
   
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style= {styles.container} >
            <Logo />
            <View style = {styles.buttoncontainer} >
            <View style={styles.btncontainer} >
               <View> 
                   <Button 
                        title= 'Add Patient'
                        onPress= {()=> navigate('AddPatient')}
                    />
                </View>
                <View style={styles.button} >
                    <Button 
                        title= 'Patient List'
                        onPress= {()=> navigate('PatientList')}
                    />
                </View>
                <View style={styles.button} >
                    <Button 
                        title= 'Search Patient'
                        onPress= {()=> navigate('SearchPatient')}
                    />
                </View>
            </View>
        </View>
        </View>
)
}
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white' ,
        alignItems: 'center'
    },
    buttoncontainer: {
        height: Dimensions.get('window').height ,
        flexDirection: 'column' ,
        backgroundColor: 'white' ,
        alignItems: 'center' ,     
    },
    btncontainer: {
        marginTop:60,
    },
    button: {
        marginTop: 20 ,
        borderRadius: 20
    }
})


export default SimpleApp = StackNavigator({
  Home: { screen: Main },
  AddPatient: { screen: AddPatient },
  PatientList: { screen: PatientList },
  SearchPatient: { screen: SearchPatient } ,
  PatientDetails: { screen: PatientDetails }
});