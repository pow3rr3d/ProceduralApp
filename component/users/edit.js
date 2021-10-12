import React from "react";
import {Getdata} from "../utils";
import {ActivityIndicator, View, Text} from "react-native";
import style from "../../styles/app";
import {useRoute} from '@react-navigation/native';

// function EditUser({route}) {
//     return (
//         <View>
//             <Text>
//                 This is the profile screen of the app
//             </Text>
//             <Text>{route.name}
//             </Text>
//         </View>
//     )
// }
//
// export default EditUser
export default class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // user:
        }



        // // const route = useRoute();
        // const { userId } = this.props;
        // // console.log(navigation.getState('userId'));
        // console.log(this.props.route.params)

    }

    render() {

            return (<View style={style.container}>
                <Text>
                    {/*{this.state.userId}*/}
                    pwet
                </Text>
            </View>)

    }
}
