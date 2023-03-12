import {View} from "react-native";
import React from "react";
import styles from "../Styles/MainComponent";

const Piller = ({color,height,alignValue}) =>{
    return(
        <View style={{...styles.piller,backgroundColor:`${color}`,height:height,alignSelf:alignValue}}>

        </View>
    );
}

export default Piller;