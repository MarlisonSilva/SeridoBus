import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Página de listagem de usuários!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    color: 'blue',
  },
});
