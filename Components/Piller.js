import {View} from "react-native";
import React from "react";
import styles from "../Styles/MainComponent";

const Piller = ({color,height,alignValue,pillerLeft}) =>{
    return(
        <View style={{...styles.piller,backgroundColor:`${color}`,height:height,alignSelf:alignValue,left:pillerLeft}}>

        </View>
    );
}

export default Piller;