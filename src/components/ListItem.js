import { path } from 'ramda'
import styled from 'styled-components/native';

const ListItem = styled.View`
    background-color: ${path(['theme', 'backgroundColor'])};
    padding-left: 12;
    padding-right: 12;
    padding-bottom: 12;
    padding-top: 12;
    margin-bottom: 1;
    flex-direction: row;
    align-items: center;
`;

export default ListItem;