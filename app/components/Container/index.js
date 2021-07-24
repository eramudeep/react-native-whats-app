import React from 'react'
import { ScrollView, StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import { scale } from 'react-native-size-matters'
import Header from '../Header'
export default function Container({showHeader, children,isScrollable,innerViewStyle}) {
    return (
        <SafeAreaView style={styles.container}>
            {showHeader&&<Header />}
            {
                isScrollable? <ScrollView>
                    <View style={[styles.innerView,innerViewStyle]}>
                        {children}
                    </View>
                </ScrollView>
                :
                <View style={[styles.innerView,innerViewStyle]}>{children}</View>
            }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    innerView:{
        flex:1,
        paddingHorizontal:scale(20)
    }
})
