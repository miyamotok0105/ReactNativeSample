/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//  import 'react-native-gesture-handler';
//  import React from 'react';
//  import { NavigationContainer } from '@react-navigation/native';
//  import { createStackNavigator } from '@react-navigation/stack';
//  import { Provider as PaperProvider } from 'react-native-paper';
//  import { MainScreen } from './MainScreen';
 
//  const Stack = createStackNavigator();

//  export default function App() {
//    return (
//      <PaperProvider>
//        <NavigationContainer>
//          <Stack.Navigator>
//            <Stack.Screen
//              name="Main"
//              component={MainScreen}
//              options={{
//                title: 'メモ帳' // (1)
//              }}
//            />
//          </Stack.Navigator>
//        </NavigationContainer>
//      </PaperProvider>
//    );
//  }
 


import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation(); // (2)

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="詳細へ"
        onPress={() => navigation.navigate('Detail')} />{/* (3) */}
    </View>
  );
}

function DetailScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">{/* (1) */}
        <Stack.Screen
          name="Home"
          component={HomeScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React from 'react';
// import {Text, View} from 'react-native';
// import {Header} from './Header';
// import {heading} from './Typography';

// const WelcomeScreen = () => (
//   <View>
//     <Header title="Welcome to React Native"/>
//     <Text style={heading}>Step One</Text>
//     <Text>
//       Edit App.js to change this screen and turn it
//       into your app.
//     </Text>
//     <Text style={heading}>See Your Changes</Text>
//     <Text>
//       Press Cmd + R inside the simulator to reload
//       your app’s code.
//     </Text>
//     <Text style={heading}>Debug</Text>
//     <Text>
//       Press Cmd + M or Shake your device to open the
//       React Native Debug Menu.
//     </Text>
//     <Text style={heading}>Learn</Text>
//     <Text>
//       Read the docs to discover what to do next:
//     </Text>
//    </View>
// );