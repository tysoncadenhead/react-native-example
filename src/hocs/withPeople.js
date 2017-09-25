import Error from '../components/Error';
import React from 'react';
import people from '../data/people';

const withPeople = Component => class extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            isLoading: true,
            people: [],
            error: null
        };
    }

    componentDidMount () {
        fetch('http://127.0.0.1:5005/people.json')
            .then(res => res.json())
            .then(people => {
                this.setState({
                    isLoading: false,
                    people
                });
            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    error
                });
            });
    }

    render () { 
        return this.state.error ? (
            <Error>Oh no!</Error>
        ) : (
            <Component {...this.props} people={this.state.people} />
        );
    }

};

export default withPeople;