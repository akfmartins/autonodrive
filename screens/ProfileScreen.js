import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Text>Veículo: HB20 Flex</Text>
      <Text>Consumo médio: 10,5 km/l</Text>
      <Text>Apps conectados: Uber, 99</Text>
      <Text>Smartwatch ativado</Text>
      <Text>Idioma: Português (BR)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#FFD700', marginBottom: 10 },
});