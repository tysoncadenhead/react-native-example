import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Header = () => (
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