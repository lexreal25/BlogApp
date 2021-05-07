import React from 'react'
import { View, Text } from 'react-native'

export default function Beauty({route, navigation}) {

    const {title,coverImage,profileImage,profileName,time,details} = route.params

    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}
