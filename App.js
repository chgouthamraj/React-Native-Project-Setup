import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './src/Navigations/Route';
Routes;
import {Provider} from 'react-redux';
import store from './src/redux/store';

const {dispatch} = store;

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
