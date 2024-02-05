import React from 'react';
import Home from './src/components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
const stack = createNativeStackNavigator();

const AppNavigation = () => {
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="Home" component={Home} />
    </stack.Navigator>
  </NavigationContainer>;
};
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />;
    </Provider>
  );
};

export default App;
