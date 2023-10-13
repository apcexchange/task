import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screen/SignIn';
import Home from '../screen/Home';
import Tabs from './tabs';

const RootNavigation = () => {
  const Stack = createStackNavigator();
  const renderScreen = (
    {name, component, options = {}, path, initialParams},
    index,
  ) => {
    return (
      <Stack.Screen
        name={name}
        key={index}
        options={options}
        path={path}
        component={component}
        initialParams={initialParams}
      />
    );
  };

  return (
    <Stack.Navigator initialRouteName={'SignIn'}>
      {routes.map((item, index) => {
        return renderScreen(item, index);
      })}
    </Stack.Navigator>
  );
};

export default RootNavigation;

const routes = [
  {
    name: 'SignIn',
    component: SignIn,
    options: {headerShown: false},
  },
  {
    name: 'Tabs',
    component: Tabs,
    options: {headerShown: false},
  },
];
