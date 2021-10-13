import React, {useRef} from "react";
import {Getdata} from "../utils";
import {ActivityIndicator, View, Text, TextInput, Switch} from "react-native";
import style from "../../styles/app";
import {useRoute} from "@react-navigation/native";

// const UserViewSwitcher = React.forwardRef(function (props, ref) {
//     const [isEnabled, setIsEnabled] = React.useState(false);
//     const toggleSwitch = () => {
//         setIsEnabled(previousState => !previousState)
//         ref.current = isEnabled
//     }
//
//     return (
//
//     )
//
// })

function UserShowView({route}) {
    const user = route.params.user

    return (
        <Text>
            # {user.id}{"\n"}
            Name: {user.name}{"\n"}
            Surname: {user.surname}{"\n"}
            Email: {user.email}{"\n"}
            Role: {user.roles}
        </Text>
    )
}

function UserEditView({route}) {
    const user = route.params.user
    const [name, onChangeName] = React.useState(user.name);
    const [surname, onChangeSurname] = React.useState(user.surname);
    const [email, onChangeEmail] = React.useState(user.email);

    return (
        <View>
            <Text># {user.id}{"\n"}</Text>
            <Text>Name</Text>
            <TextInput
                style={style.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Please enter user's name"
            />
            <Text>Surname</Text>
            <TextInput
                style={style.input}
                onChangeText={onChangeSurname}
                value={surname}
                placeholder="Please enter user's name"
            />
            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Please enter user's name"
            />
        </View>
    )
}

class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        // this.mode = React.createRef();
        this.state = {
            user: null,
            mode: false,
        }
        this.toggleSwitch = this.toggleSwitch.bind(this)
    }

    toggleSwitch(e){
        this.setState({mode: e})
    }

    render() {
        if (this.state.mode === true) {
            return (
                <View style={style.container}>
                    <Text>Switch to Show</Text>
                    <Switch
                        trackColor={{false: "#767577", true: "#4ecdc4"}}
                        thumbColor={this.state.mode === false ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#4ecdc4"
                        onValueChange={this.toggleSwitch}
                        value={this.state.mode}
                    />
                    {/*<UserViewSwitcher ref={this.mode}/>*/}
                    <UserEditView route={this.props.route}/>
                </View>
            )
        }
        return (
            <View style={style.container}>
                <Text>Switch to Edit</Text>
                <Switch
                    trackColor={{false: "#767577", true: "#4ecdc4"}}
                    thumbColor={this.state.mode === false ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#4ecdc4"
                    onValueChange={this.toggleSwitch}
                    value={this.state.mode}
                />
                {/*<UserViewSwitcher ref={this.mode}/>*/}
                <UserShowView route={this.props.route}/>
            </View>
        )
    }
}

// export UserEdit Component to use hook in class
export default function (props) {
    const route = useRoute();

    return <UserEdit {...props} route={route}/>;
}

