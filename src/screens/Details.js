import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import withPeople from '../hocs/withPeople';

const Details = props => {
    const person = props.people.filter(person => 
        person.id === props.personId
    )[0];

    return (
        <View key={person.id} style={styles.listItem}>
            <Image style={styles.profileImage} source={{
                uri: person.image
            }} />
            <View>
                <Text style={styles.name}>{person.name}</Text>
                <Text style={styles.bio}>{person.bio}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#EEEEEE',
        padding: 12,
        marginBottom: 1,
        flexDirection: 'row'
    },
    profileImage: {
        width: 50,
        height: 50,
        marginTop: 36
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

export default withPeople(Details);