import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CALCULATOR, DETAIL, HOME } from '../../../constants/screen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>ホーム</Text>
      <TouchableOpacity onPress={() => navigate(DETAIL)}>
        <Text>詳細画面へ遷移する</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate(CALCULATOR)}>
        <Text>CALCULATOR画面へ遷移する</Text>
      </TouchableOpacity>
    </View>
  );
}