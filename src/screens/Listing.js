import { ScrollView, TouchableOpacity, View } from 'react-native';
import styled, { withTheme } from 'styled-components/native';

import ListItem from '../components/ListItem';
import Name from '../components/Name';
import ProfileImage from '../components/ProfileImage';
import React from 'react';
import withPeople from '../hocs/withPeople';

const Listing = props => (
    <View>
        <ScrollView>
            {props.people.map(person => (
                <TouchableOpacity key={person.id} onPress={() => {
                    props.setPerson(person.id);
                }}>
                    <ListItem>
                        <ProfileImage source={{
                            uri: person.image
                        }} />
                        <View>
                            <Name>{person.name}</Name>
                        </View>
                    </ListItem>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
);

export default withPeople(Listing);