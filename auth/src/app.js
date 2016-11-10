import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  ComponentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD8jW4W64Yq_lPVsfJ-b6DrRqt8BlyYjXw",
      authDomain: "authentication-5347b.firebaseapp.com",
      databaseURL: "https://authentication-5347b.firebaseio.com",
      storageBucket: "authentication-5347b.appspot.com",
      messagingSenderId: "826901678672"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;