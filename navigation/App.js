import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import SwitchNavigator from './Switch/SwitchNavigator'
import StackNavigator from './Stack/StackNavigator'



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StackNavigator/>
        <SwitchNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
