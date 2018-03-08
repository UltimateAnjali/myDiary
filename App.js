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

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOEndO0wN6fNvh4m9uk4JIGARnnx4ShdM",
  authDomain: "react-native-sample-ba39c.firebaseapp.com",
  databaseURL: "https://react-native-sample-ba39c.firebaseio.com",
  storageBucket: "react-native-sample-ba39c.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  state={
    title: "",
  }

  titleNameChangedHandler = value => {
    this.setState({
      title: value
    });
  };

  titleSaveHandler = () => {
    if(this.state.title.trim() === ""){
      return;
    }
    this.itemsRef.push({title: this.state.title.trim()});

  };
  
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
          icon={<Icon name="md-arrow-forward" 
          style={styles.actionButtonIcon} />} 
          onPress={this.titleSaveHandler}>
        </ActionButton>              
      </View>
    );
  }
}
