import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SigIn from "./src/SigIn";
import Meteor, {createContainer, Accounts} from 'react-native-meteor';


const SERVER_URL="ws://192.168.0.11:3000/websocket";

export default class App extends React.Component {

    componentWillMount() {

        Meteor.connect(SERVER_URL);
        console.log(Meteor);
    }

    signIn = (email, password) => {

        if (Meteor.userId())
        {
            console.log("TODO Ok")
        }
        else {
            Meteor.loginWithPassword(email, password, (error, data) => {
                if (error) {
                    if (error.reason === "User not found") {
                        console.log("there was no email");
                        Accounts.createUser({email, password}, (error) => {
                            console.log("error");
                        })
                    }
                } else {
                    console.log("email found");
                    //TODO

                }
            });

        }        console.log(Meteor.userId());
    };

    render() {
        return (
            <View style={styles.container}>

                <SigIn signIn={this.signIn}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
