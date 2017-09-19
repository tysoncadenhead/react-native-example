import React from 'react';
import people from '../data/people';

const withPeople = Component => class extends React.Component {

    render () { 
        return (
            <Component {...this.props} people={people} />
        );
    }

};

export default withPeople;