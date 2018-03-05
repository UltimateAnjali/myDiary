/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import * as firebase from 'firebase';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

const styles = require('./styles.js')

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};
export default class App extends Component {
  state={
    title: ''
  }
  titleNameChangedHandler = value => {
    this.setState({
      title: value
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style = {styles.titleText}
          placeholder = "Title"
          value={this.state.title}
          onChangeText={this.titleNameChangedHandler}/>

        <ActionButton 
          buttonColor="rgba(231,76,60,1)" 
          icon={<Icon name="md-arrow-forward" style={styles.actionButtonIcon} />} 
          onPress={() => console.log("notes tapped!")}>
        </ActionButton>

      </View>
    );
  }
}
