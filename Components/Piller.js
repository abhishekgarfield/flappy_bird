import {View} from "react-native";
import React from "react";
import styles from "../Styles/MainComponent";

const Piller = ({color}) =>{
    return(
        <View style={{...styles.piller,backgroundColor:`${color}`}}>

        </View>
    );
}

export default Piller;