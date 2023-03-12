import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
} from 'react-native';
import styles from "./Styles/MainComponent";
import Bird from "./Components/Bird";
import Piller from "./Components/Piller";
import {changeColor} from "./common/common";

const App = () => {
    const [pillerColor,setPillerColor] = useState('green')
    const [birdColor,setBirdColor] = useState('brown')



    useEffect(()=>{
        setInterval(()=>{
            let colors = changeColor()
            setPillerColor( colors[0]);
            setBirdColor(colors[1]);
        },3000)
    },[])

    return (
        <SafeAreaView style={styles.mainDiv}>
            <Bird color={birdColor}/>
            <Piller color={pillerColor} />
            <Piller color={pillerColor} />
        </SafeAreaView>
    );
}

export default App;
