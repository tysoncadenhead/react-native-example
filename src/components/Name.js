import styled from 'styled-components/native';

const Name = styled.Text`
    padding-left: 12;
    font-size: 18;
    color: ${props => props.theme.primaryColor};
    font-weight: bold;
`;

export default Name;