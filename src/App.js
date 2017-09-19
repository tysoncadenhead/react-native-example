import Details from './screens/Details';
import Header from './components/Header';
import Listing from './screens/Listing';
import React from 'react';
import { View } from 'react-native';

class App extends React.Component {

    constructor (props) {
        super(props);

        this.setPerson = this.setPerson.bind(this);

        this.state = {
            personId: null
        };
    }

    setPerson (personId) {
        this.setState({
            personId
        });
    }

    render () {
        return (
            <View>
                <Header {...this.state} setPerson={this.setPerson} />
                {this.state.personId ? (
                    <Details {...this.state} />
                ) : (
                    <Listing setPerson={this.setPerson} />
                )}
            </View>
        );
    }

}

export default App;