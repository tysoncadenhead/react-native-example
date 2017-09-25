import React from 'react';

const withPerson = Component => props => {
    const person = props.people.filter(person => 
        person.id === props.personId
    )[0];

    return (
        <Component {...props} person={person} />
    );
}

export default withPerson;