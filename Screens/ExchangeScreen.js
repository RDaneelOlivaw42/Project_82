import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import firebase from 'firebase';
import db from '../config';

import AppHeader from '../components/AppHeader';

export default class ExchangeScreen extends React.Component {

    constructor(){
        super();

        this.state = {
            userId: firebase.auth().currentUser.email,
            objectName:'',
            objectDescription:''
        }
    }


    generateId(){
        var id = Math.random().toString(36).substring(7);
        return id;
    }


    addRequest = (objectName, objectDescription) => {

        var id = this.generateId();

        db.collection("requested_items").add({
            "user": this.state.userId,
            "object_name": objectName,
            "object_description": objectDescription,
            "request_id": id
        });

        this.setState({
            objectName: '',
            objectDescription: ''
        });

    }


    render(){
        return(
            <View>

                <AppHeader title = "Exchange Articles"/>

                <View style = {styles.container}>

                    <TextInput 
                      style = {styles.formInput}
                      placeholder = "Enter the object to request"
                      placeholderTextColor = '#F6C4B2'
                      autoFocus = {true}
                      onChangeText = {(text)=>{
                        this.setState({
                          objectName:text
                         })
                      }}/>

                    <TextInput 
                      style = {styles.formInput}
                      placeholder = "Describe the aforementioned object"
                      placeholderTextColor = '#F6C4B2'
                      onChangeText = {(text)=>{
                        this.setState({
                          objectDescription: text
                        })
                      }}
                      multiline = {true}
                      numberOfLines = {11}/>

                    <TouchableOpacity
                      style = {styles.submitButton}
                      onPress = {()=>{
                        this.addRequest(this.state.objectName, this.state.objectDescription);
                        alert("Added Request");
                      }}>
                        <Text style = {styles.submitButtonText}>SUBMIT</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    },

    formInput: {
        width: '75%',
        backgroundColor: '#AE8277',
        borderBottomColor: '#494951',
        borderBottomWidth: 2,
        padding: 13,
        borderRadius: 4,
        fontSize: 15,
        fontFamily: 'big caslon',
        marginBottom: 30
    },

    submitButton: {
        backgroundColor: '#5C96B6',
        padding: 15,
        justifyContent: 'center',
        marginTop: 10,
        shadowColor: '#31565F',
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 4,
    },

    submitButtonText: {
        fontFamily: 'big caslon',
        textAlign: 'center',
        fontSize: 19
    }

})