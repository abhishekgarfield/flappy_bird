import React, {useEffect, useState} from 'react';
import {
    Dimensions,
    SafeAreaView,
} from 'react-native';
import styles from "./Styles/MainComponent";
import Bird from "./Components/Bird";
import Piller from "./Components/Piller";
import {changeColor} from "./common/common";

const App = () => {
    const [pillerColor, setPillerColor] = useState('green')
    const [birdColor, setBirdColor] = useState('brown')
    const [firstPillarHeight, setFirstPillerHeight] = useState(200)
    const [secondPillarHeight, setSecondPillerHeight] = useState(100)

    const width = Dimensions.get("screen").width
    const height = Dimensions.get("screen").height
    console.log("-------w---------", width, "------h-------", height)
    const setPillerHeight = () => {
        let tempHeight = height / 2;
        let first_Pillar_Height = height - (50 * (Math.floor(Math.random() * 10) + 6))
        let bSpace = 100;
        let second_Piller_Height = height - (first_Pillar_Height + bSpace)
        console.log("-----------pheights--------",first_Pillar_Height,"---------second-------",second_Piller_Height)
        setFirstPillerHeight(first_Pillar_Height);
        setSecondPillerHeight(second_Piller_Height);
    }


    useEffect(() => {
        setInterval(() => {
            let colors = changeColor()
            setPillerColor(colors[0]);
            setBirdColor(colors[1]);
            setPillerHeight()
        }, 3000)
    }, [])

    return (
        <SafeAreaView style={styles.mainDiv}>
            <Bird color={birdColor}/>
            <Piller color={pillerColor} height={firstPillarHeight} alignValue={"flex-start"}/>
            <Piller color={pillerColor} height={secondPillarHeight} alignValue={"flex-end"}/>
        </SafeAreaView>
    );
}

export default App;
