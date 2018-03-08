const React = require('react-native')
const {StyleSheet} = React

var styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF', 
    },
    titleText: {
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    
})

module.exports = styles;