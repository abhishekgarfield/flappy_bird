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
    const width = Dimensions.get("screen").width
    const height = Dimensions.get("screen").height
    const [firstPillarHeight, setFirstPillerHeight] = useState((height/2)- 50)
    const [secondPillarHeight, setSecondPillerHeight] = useState((height/2)- 50)
    const [pillerLeft,setPillerLeft] =useState(width/2 -20)
    const [birdPosition,setBirdPosition] = useState(height/2)

    const setPillerHeight = () => {
        let gap = (20 * (Math.floor(Math.random() * 6) + 2))
        console.log("------------",gap)
        setFirstPillerHeight(height/2-gap);
        setSecondPillerHeight(height/2-gap);
    }
    const birdFall = () =>{
        setBirdPosition(birdPosition-1)
    }
    let pillerTimer

    useEffect(() => {
        if (pillerLeft > -40 ) {
            pillerTimer = setInterval(() => {
                setPillerLeft(() => pillerLeft - 3)
                if (birdPosition > 0) {
                    birdFall()
                }
            }, 30)
            return () => clearInterval(pillerTimer)
        }
        else
        {
            let colors = changeColor()
            setPillerColor(colors[0]);
            setBirdColor(colors[1]);
            setPillerHeight()
            setPillerLeft(width -20)
        }


    })

    return (
        <SafeAreaView style={styles.mainDiv}>
            <Bird color={birdColor} bottom={birdPosition}/>
            <Piller color={pillerColor} height={firstPillarHeight} alignValue={"flex-start"} pillerLeft={pillerLeft}/>
            <Piller color={pillerColor} height={secondPillarHeight} alignValue={"flex-end"} pillerLeft={pillerLeft}  />
        </SafeAreaView>
    );
}

export default App;
