import React from 'react';
import {View,} from 'react-native';
import style from "../styles/app"
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import IndexUser from "./users/index";
import EditUser from "./users/edit";

function HomeScreen({navigation}) {
    return (
        <View style={style.view}>
        </View>
    );
}

function UserIndexScreen({navigation}) {
    return (
        <View style={style.view}>
            <IndexUser navigation={navigation}/>
        </View>
    );
}

function UserEditScreen({navigation}) {
    return (
        <View style={style.view}>
            <EditUser navigation={navigation}/>
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="User Index" component={UserIndexScreen}/>
                <Drawer.Screen name="Edit User" component={UserEditScreen} options={{
                    drawerItemStyle: { height: 0 }
                }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

// export default class App extends React.Component {
//
//     render() {
//         return (<View style={style.container}>
//                 <StatusBar hidden={true}/>
//             </View>
//         )
//     }
// }




