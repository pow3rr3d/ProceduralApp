import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Alert, TextInput, Button} from 'react-native';
import style from "../styles/app"
import {Getdata} from "./utils";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            domain: 'https://procedural.a-messagerdiaz.fr',
            apiKey: '48d1a01d4cc0b86acf3bfbd82385b6294d85e731f92dfeb4bdfe45b3e60b1c90'
            // apiKey: '152df55388681794160a25a04e88b24b40057913c5c7b8ac40d23fa609b91e4e'
        }
        this.onPressSubmitLogin = this.onPressSubmitLogin.bind(this)
    }

    onPressSubmitLogin() {
        let data = JSON.stringify({domain: this.state.domain, apiKey: this.state.apiKey, isLogin: true})
        let saveCredentials = async () => {
            try {
                await AsyncStorage.setItem('@MyApp_user', data)
                let credentials = JSON.parse(await AsyncStorage.getItem('@MyApp_user'))
                const Bearer = 'Bearer ' + credentials.apiKey
                const hearders = new Headers({
                    Accept: 'application/json',
                    Authorization: Bearer,
                })
                Getdata(credentials.domain + '/api/users', hearders).then(res => {
                    if (res.error) {
                        let error = ''
                        if (res.error === 'Invalid API Token') {
                            error = 'Invalid API Token'
                        } else {
                            error = 'error while authenticate please contact support'
                        }
                        Alert.alert(error)
                    }
                    if (res.detail === 'Not Found') {
                        error = 'Invalid domain '
                    }
                    if (res.detail === 'Access Denied.') {
                        //Login as User
                        console.log('Hello User')
                        console.log(credentials)
                        navigation.navigate('user/index')
                    } else {
                        //login as Admin
                        console.log('Hello Admin')
                        console.log(credentials)
                    }
                })


            } catch (e) {
                Alert.alert('error while saving data')
            }
        }
        saveCredentials()

    }

    render() {
        return (<View style={style.container}>
                <Text
                    style={style.title}
                >
                    Welcome to Procedural App
                </Text>
                <Text>
                    To start please enter your credentials
                </Text>
                <TextInput
                    onChangeText={(domain) => this.setState({domain})}
                    style={style.input}
                    placeholder="Domain address"
                    value={this.state.domain}
                />
                <TextInput
                    onChangeText={(apiKey) => this.setState({apiKey})}
                    style={style.input}
                    placeholder="Api Key"
                    value={this.state.apiKey}
                />
                <Button
                    onPress={this.onPressSubmitLogin}
                    title="Submit"
                    color='#4ecdc4'
                    accessibilityLabel="Learn more about this purple button"
                />
                <StatusBar hidden={true}/>
            </View>
        )
    }
}




