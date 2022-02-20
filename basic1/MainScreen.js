import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { List } from 'react-native-paper';

const memos = [
  {
    text: "メモメモメモ",
    createdAt: 1585574700000, // 2020.03.30 22:25
  },
  // 省略
];

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={memos} // (1)
        keyExtractor={item => `${item.createdAt}`} // (2)
        renderItem={({ item }) => ( // (3)
          <List.Item // (4)
            title={item.text}
            description={item.createdAt}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});