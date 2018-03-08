'use strict';

import React, {Component} from 'react';
import { TextInput, StyleSheet } from 'react-native';
const styles = require('../styles.js')

export default class TitleName extends Component{
    render(){
        return (
            <TextInput
                style = {styles.titleText}
                placeholder = "Title"
                value={this.props.value}
                onChangeText={this.props.onChangeText}/> 
        );
    }
}

module.exports = TitleName;