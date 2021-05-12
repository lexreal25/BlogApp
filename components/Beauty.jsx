import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default function Beauty({route, navigation}) {

    const {title,coverImage,profileImage,profileName,time,details} = route.params

    return (
        <ScrollView>
        <View style={{flex: 1}}>
            <View style={{width: 250, height: 250, backgroundColor:'pink'}}></View>
            <View style={{flex:1, padding: 25,position:'absolute', top: 30,}}>
            {/* header icons */}
            <View style={{flexDirection:'row',marginBottom: 20, justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                   <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={25} color="black" />
                   </TouchableOpacity>
                    <Text style={{fontSize:20, fontWeight:'700'}}>Beauty</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Feather name="headphones" size={20} color="black" />
                    <AntDesign name="hearto" size={20} color="black" style={{marginLeft:5}}/>
                    <AntDesign name="sharealt" size={20} color="black" style={{marginLeft:5}}/>
                </View>
            </View>

                <Image source={ coverImage } style={{width: '100%', height: 250}} />
                <Text style={{fontSize: 20,fontWeight: 700, marginVertical:10}}>{title}</Text>
                <View style={{flexDirection:'row',marginVertical: 10}}>
                    <Image source={profileImage} style={{width: 20, height: 20, borderRadius:50}} />
                    <Text style={{marginLeft: 5}}>{profileName}</Text>
                    <Text style={{marginLeft:5, color:'#D2D7D3'}}>{time}</Text>
                </View>
                <Text style={{fontSize: 17, lineHeight: 30, marginVertical: 10}}>{details}</Text>
            </View>
        </View>
        </ScrollView>
    )
}
