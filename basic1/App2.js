import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// HTMLのようなマークアップでレイアウトの構造を定義する
const App = (props) => (
  <View style={styles.container}>
    <Text>Hello, React Native!</Text>
  </View>
);

export default App;

// CSSライクな指定でスタイルを定義する
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
