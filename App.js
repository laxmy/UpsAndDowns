
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/appNavigator'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import active from './store/reducers/active'

const RootReducer = combineReducers({
  mostActive: active
})

const store = createStore(RootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store ={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
