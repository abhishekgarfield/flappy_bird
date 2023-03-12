/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import styles from "./Styles/MainComponent";
import Bird from "./Components/Bird";
import Piller from "./Components/Piller";

const App = () => {
    return (
        <SafeAreaView style={styles.mainDiv}>
            <Bird />
            <Piller />
            <View style={{...styles.piller,backgroundColor:"red"}}></View>
        </SafeAreaView>
    );
}

export default App;
