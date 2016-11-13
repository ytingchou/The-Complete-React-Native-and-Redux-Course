import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;