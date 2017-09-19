import Header from './components/Header';
import Listing from './screens/Listing';
import React from 'react';
import { View } from 'react-native';

const App = () => (
    <View>
        <Header />
        <Listing />
    </View>
);

export default App;