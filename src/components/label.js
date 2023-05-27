import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Label=({label})=>{
    return(
        <View>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}


const styles=StyleSheet.create({
    label:{
        fontSize:hp('1.6'),
        fontWeight:'400',
        lineHeight:15,
        margin:hp('0.3')
    }
})


export default Label