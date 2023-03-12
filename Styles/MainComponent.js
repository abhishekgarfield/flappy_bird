import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    mainDiv : {
        backgroundColor: "white",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    piller :{
        width: 40,
        position: "absolute",
        backgroundColor: "green"
    },
    bird :{
        position: "absolute",
        zIndex:2
    }
})

export default styles