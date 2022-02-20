import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CALCULATOR, DETAIL, HOME } from '../../constants/screen';
import { Calculator, Detail, Home } from '../../components/pages';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={HOME}>
      <Stack.Screen
        name={HOME}
        component={Home}
        options={{
          title: 'ホーム',
        }}
      />
      <Stack.Screen
        name={DETAIL}
        component={Detail}
        options={{
          title: '詳細画面',
        }}
      />
      <Stack.Screen
        name={CALCULATOR}
        component={Calculator}
        options={{
          title: 'Calculator画面',
        }}
      />


    </Stack.Navigator>
  );
}

export default HomeNavigator;