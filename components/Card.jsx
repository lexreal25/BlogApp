
import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'

export default function Card(props) {

    const nagivation = useNavigation()

    const { title, coverImage, profileImage, profileName, time, details } = props.data

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.cardContainer}
                onPress={() => nagivation.navigate('Beauty',{
                    title,coverImage,profileImage,profileName,time,details
                })}
            >
                {/* top left coner design */}
                <View style={{width: 70, height: 70, backgroundColor:'pink'}}></View>
                
                {/* card content design */}
                <View style={styles.cardMain}>
                   <View style={styles.card}>
                        <Image source={coverImage} style={{width: 90, height: 100, borderRadius: 5}} />
                        <Text style={{margin: 5, fontSize: 15, fontWeight:'600',fontStyle:'normal'}} numberOfLines={2}>{title}</Text>
                   </View>
                   <View style={{position:'absolute',top: 70, left:95, flexDirection:'row'}}>
                       <Image source={profileImage} style={{width:30, height:30,borderRadius:100}} />
                       <Text style={{marginLeft: 10, marginTop:3,fontSize:14}}>{profileName}</Text>
                       <Text style={{marginLeft: 10, marginTop:3,color:'#D2D7D3',fontWeight:'400',fontStyle:'normal'}}>{time}</Text>
                    </View>
                </View>
            </TouchableOpacity>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
    },
    cardContainer: {
        height: 120,
        marginVertical: 10,
        marginHorizontal:10,
        backgroundColor: '#fff',
    },
    cardMain:{
        position:'absolute',
        top: 10,
        left: 10,
    },
    card: {
        flex:1,
        flexDirection: 'row',
    }
})
