import {View} from "react-native";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faKiwiBird, } from "@fortawesome/free-solid-svg-icons";
const Bird = () => {
    return(
        <View>
            <FontAwesomeIcon icon={faKiwiBird} size={50} color={"brown"}/>
        </View>
    )
}

export default Bird;
