// Function to fetch data from API
import {Alert} from "react-native";

export function Getdata(url, headers) {
    const response = fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: headers
    })
        .then(res => res.json())
        .then(data => data)
    return response
}


//Function to return Api routes

