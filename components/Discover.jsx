import React from 'react'
import { View, SafeAreaView, FlatList, ScrollView, StyleSheet } from 'react-native'
import Card from './Card'
import { data } from './data'


export default function Discover() {
    return (
        <SafeAreaView style={styles.container}>
             <FlatList
                data={data}
                renderItem={(item) => <Card data={item.item} />}
                keyExtractor={data => data.id.toString()}
            />
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1
    }
})