import React from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    FlatList,
    Pressable,
} from 'react-native'
import style from "../../styles/app"
import {Getdata} from "../utils"

export default class IndexUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allElements: [],
            text: null,
            user: null
        }
        this.toggleData()
        this.onClick = this.onClick.bind(this)
        console.log(props.navigation.state)
    }


    toggleData() {
        const token = '152df55388681794160a25a04e88b24b40057913c5c7b8ac40d23fa609b91e4e'
        const Bearer = 'Bearer ' + token
        const hearders = new Headers({
            Accept: 'application/json',
            Authorization: Bearer,
        })
        const url = 'https://procedural.a-messagerdiaz.fr/api/users';

        Getdata(url, hearders).then(data => {
            data.forEach(element => {
                var allElements = this.state.allElements.concat(element);
                this.setState({
                    allElements: allElements,
                    text: 'data provided',
                })
            })
        })
    }


    onClick() {
        this.props.navigation.navigate('Edit', {userId: '1'})
    }


        render()
        {
            if (this.state.text === null) {
                return (<View style={style.container}>
                    <ActivityIndicator color='#4ecdc4' size="large"/>
                </View>)
            } else {
                return (
                    <View style={style.container}>
                        <FlatList
                            style={style.flatList}
                            data={this.state.allElements}
                            renderItem={({item}) =>
                                <Pressable
                                    onPress={this.onClick}
                                    style={style.button}>
                                    <Text style={style.title}>
                                        {item.id} - {item.username}
                                    </Text>
                                </Pressable>
                            }
                        />
                    </View>)

            }
        }
    }



