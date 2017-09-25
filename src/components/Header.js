import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { path } from 'ramda';
import styled from 'styled-components/native';

const Header = props => props.personId ? (
    <TouchableOpacity onPress={() => {
        props.setPerson(null)
    }}>
        <Container>
            <Title>Back</Title>
        </Container>
    </TouchableOpacity>
) : (
    <Container>
        <Title>Star Wars App</Title>
    </Container>
);

const Container = styled.View`
    background-color: ${path(['theme', 'headerColor'])};
    padding-top: 32;
    padding-bottom: 12;
`;

const Title = styled.Text`
    text-align: center;
    color: ${path(['theme', 'textInverse'])};
`;

export default Header;