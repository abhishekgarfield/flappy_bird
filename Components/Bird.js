import {View , Platform , Dimensions} from "react-native";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faKiwiBird, } from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/MainComponent";
const Bird = ({color,top}) => {
       return(
        <View style={{...styles.bird}}> 
            <FontAwesomeIcon icon={faKiwiBird} size={50} color={color}/>
        </View>
    )
}

export default Bird;
