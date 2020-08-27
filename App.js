import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from 'react-redux';

import store from './src/Configs/store';

const Stack = createStackNavigator();

import { GameScreen, MainScreen, ScoreOutScreen } from './src/Screens';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Game"
              component={GameScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ScoreOut"
              component={ScoreOutScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
