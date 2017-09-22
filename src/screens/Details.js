import Bio from '../components/Bio';
import ListItem from '../components/ListItem';
import Name from '../components/Name';
import ProfileImage from '../components/ProfileImage';
import React from 'react';
import { View } from 'react-native';
import withPeople from '../hocs/withPeople';

const Details = props => {
    const person = props.people.filter(person => 
        person.id === props.personId
    )[0];

    return (
        <ListItem key={person.id}>
            <ProfileImage source={{
                uri: person.image
            }} />
            <View>
                <Name>{person.name}</Name>
                <Bio>{person.bio}</Bio>
            </View>
        </ListItem>
    );
}

export default withPeople(Details);