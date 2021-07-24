import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import { scale } from 'react-native-size-matters'
import Label from '../Label'
import Feather from 'react-native-vector-icons/dist/Feather';
import { appColors } from '../../utils/appColors';
export default function GroupContainer({containerStyle, children}) {
    return (
        <View style={[styles.container]}>
            <View style={styles.row}>
                <View>
                    <Label text={"Mensajes"} style={{fontSize:scale(22), fontWeight:"800"}}/>
                    <Label text={"Tienes dos nuevos mensajes"}  style={{fontSize:scale(10), fontWeight:"300",color:appColors.black, opacity:0.5, marginTop:scale(5),marginBottom:scale(5)}}/>
                </View> 
                <Feather name={"archive"} size={scale(20)} />
            </View>
            <View style={containerStyle}>
                {children}
            </View>
            
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        //backgroundColor:'green',
        marginTop:scale(30)
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})