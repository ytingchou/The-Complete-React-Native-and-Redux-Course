import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers'

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAgtePB2SRayE6iYnC_kdvqhpz9_y1sS90",
      authDomain: "manager-2ab41.firebaseapp.com",
      databaseURL: "https://manager-2ab41.firebaseio.com",
      storageBucket: "manager-2ab41.appspot.com",
      messagingSenderId: "389493251211"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;