import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

const Header = props => props.personId ? (
    <TouchableOpacity onPress={() => {
        props.setPerson(null)
    }}>
        <View style={styles.header}>
            <Text style={styles.title}>Back</Text>
        </View>
    </TouchableOpacity>
) : (
    <View style={styles.header}>
        <Text style={styles.title}>Star Wars App</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#666666',
        paddingTop: 32,
        paddingBottom: 12
    },
    title: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
})

export default Header;