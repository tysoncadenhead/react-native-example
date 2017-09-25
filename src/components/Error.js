import React from 'react';
import styled from 'styled-components/native';

const Error = props => (
    <Wrapper>
        <ErrorMessage>
            {props.children}
        </ErrorMessage>
    </Wrapper>
);

const Wrapper = styled.View`
    flex: 1;
    background-color: red;
`;

const ErrorMessage = styled.Text`
    color: #FFFFFF;
    text-align: center;
`;

export default Error;