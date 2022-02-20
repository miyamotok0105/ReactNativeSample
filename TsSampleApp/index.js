/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './src/App'; // './App' から './src/App' に変更する

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
