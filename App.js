/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import styles from "./Styles/MainComponent";
import Bird from "./Components/Bird";

const App = () => {
    return (
        <>
            <SafeAreaView style={styles.mainDiv}>
                <View>
                    <Text>Hello Abhishek</Text>
                </View>
                <Bird />
            </SafeAreaView>
        </>
    )
}

export default App;
