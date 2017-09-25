import Bio from '../components/Bio';
import ListItem from '../components/ListItem';
import Name from '../components/Name';
import ProfileImage from '../components/ProfileImage';
import React from 'react';
import { View } from 'react-native';
import { compose } from 'ramda';
import withPeople from '../hocs/withPeople';
import withPerson from '../hocs/withPerson';

const Details = props => (
    <ListItem key={props.person.id}>
        <ProfileImage source={{
            uri: props.person.image
        }} />
        <View>
            <Name>{props.person.name}</Name>
            <Bio>{props.person.bio}</Bio>
        </View>
    </ListItem>
);

export default compose(
    withPeople,
    withPerson
)(Details);