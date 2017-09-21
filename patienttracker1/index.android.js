import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import SimpleApp from './src/main';
import * as firebase from 'firebase'

class App extends React.Component {
 componentDidMount(){
  var config = {
    apiKey: "AIzaSyBxd-SzHHYlVL1Nwi6DhocPMs9b2ORfBKY",
    authDomain: "patient-tracker-8bfac.firebaseapp.com",
    databaseURL: "https://patient-tracker-8bfac.firebaseio.com",
    projectId: "patient-tracker-8bfac",
    storageBucket: "patient-tracker-8bfac.appspot.com",
    messagingSenderId: "1011939244962"
  };
  firebase.initializeApp(config);
 }
 
  render() {
    return (
      <View style={styles.container}>
        <SimpleApp />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20 ,
  },
});

AppRegistry.registerComponent('patienttracker1', () => App);
