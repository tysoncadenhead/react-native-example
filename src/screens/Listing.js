import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import withPeople from '../hocs/withPeople';

const Listing = props => (
    <View style={styles.container}>
        <ScrollView>
            {props.people.map(person => (
                <TouchableOpacity key={person.id} onPress={() => {
                    props.setPerson(person.id);
                }}>
                    <View style={styles.listItem}>
                        <Image style={styles.profileImage} source={{
                            uri: person.image
                        }} />
                        <View>
                            <Text style={styles.name}>{person.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#EEEEEE',
        padding: 12,
        marginBottom: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImage: {
        width: 50,
        height: 50
    },
    name: {
        paddingLeft: 12,
        fontSize: 18,
        color: '#666',
        fontWeight: 'bold'
    },
    bio: {
        paddingLeft: 12,
        paddingTop: 12,
        paddingRight: 50
    }
});

export default withPeople(Listing);