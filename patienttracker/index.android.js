import React,{ Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import SimpleApp from './src/main';
import { Provider} from 'react-redux' ;
import store from './src/store/reducers' ;

export default class patienttracker extends Component {
    render() {
      return (
        <Provider store= {store} >
          <View style={styles.container}>
            <SimpleApp />
          </View>
        </Provider>
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
