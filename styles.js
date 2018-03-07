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
    // inputContainer:{
    //     // flex: 1,
    //     width: "100%",
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    // },
    titleText: {
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    actionButtonIcon: {
        //width: "30%",
        fontSize: 20,
        height: 22,
        color: 'white',
    },
})

module.exports = styles;