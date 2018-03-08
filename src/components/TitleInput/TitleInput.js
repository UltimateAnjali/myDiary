import React , { Component } from 'react';
import { 
    TextInput, 
    StyleSheet 
} from 'react-native';

class TitleInput extends Components{

    state={
        title: "",
      }
    
      titleNameChangedHandler = value => {
        this.setState({
          title: value
        });
      };

    render(){
        return (
            <TextInput
                style = {styles.titleText}
                placeholder = "Title"
                value={this.state.title}
                onChangeText={this.titleNameChangedHandler}/> 
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
});

export default TitleInput;

