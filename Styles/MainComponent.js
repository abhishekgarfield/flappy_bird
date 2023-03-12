import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    mainDiv : {
        backgroundColor: "white",
        flex:1,
    },
    piller :{
        width: 40,
        flex: 2,
        backgroundColor: "green"
    },
    bird :{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles