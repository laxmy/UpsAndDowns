
import React , { useState} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import AppNavigator from './navigation/appNavigator'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import active from './store/reducers/active'
import earningsTd from './store/reducers/earningsToday'
import keyStatsPerSymbol from './store/reducers/keyStats'

const fetchFonts = () => {
  return Font.loadAsync({
    'Nunito -reg': require('./assets/Nunito-Regular.ttf'),
    'Nunito-Light': require('./assets/Nunito-Light.ttf'),
    'Nunito-Bold': require('./assets/Nunito-Bold.ttf'),
  });
};

const RootReducer = combineReducers({
  mostActive: active,
  earningsToday: earningsTd,
  keyStats: keyStatsPerSymbol
})

const store = createStore(RootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        OnError={()=> Alert.alert('Font not loaded')}
      />
    );
  }
  else{
    return (
      <Provider store ={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
