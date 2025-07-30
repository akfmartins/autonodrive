import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do Dia</Text>
      <Text>Ganhos Hoje: R$150</Text>
      <Text>Corridas: 12</Text>
      <Text>Lucro Estimado: R$110</Text>
      <Button title="Iniciar Jornada" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#FFD700', marginBottom: 10 },
});