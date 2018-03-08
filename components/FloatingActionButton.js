'use strict';

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
const styles = require('../styles.js')

class FloatingActionButton extends Component{
    render(){
        return (
            <ActionButton 
                buttonColor="rgba(231,76,60,1)" 
                icon={<Icon name="md-arrow-forward" 
                style={styles.actionButtonIcon} />} 
                onPress={this.props.onPress}>
            </ActionButton>
        );
    }
}

module.exports = FloatingActionButton;
