import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function MyPage() {
  return (
    <View style={styles.container}>
      <Text>マイページ</Text>
    </View>
  );
}