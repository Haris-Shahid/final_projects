import React,{ Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import SimpleApp from './src/main';

export default class patienttracker extends Component {
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
AppRegistry.registerComponent('patienttracker', () => patienttracker);
